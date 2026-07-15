package server

import (
	"context"
	"database/sql"
	"encoding/json"
	"errors"
	"fmt"
	"html/template"
	"io/fs"
	"log/slog"
	"net/http"
	"net/url"
	"path/filepath"
	"strings"
	"sync"
	"time"

	"github.com/xingxing7290/zhoujinxin-portfolio/internal/app"
	"github.com/xingxing7290/zhoujinxin-portfolio/internal/model"
	"github.com/xingxing7290/zhoujinxin-portfolio/internal/security"
	"github.com/xingxing7290/zhoujinxin-portfolio/internal/site"
	"github.com/xingxing7290/zhoujinxin-portfolio/internal/store"
)

const (
	appVersion    = "1.1.0"
	sessionCookie = "portfolio_session"
	maxMediaQuota = int64(2 << 30)
)

func assetPath(path string) string {
	return "/static/" + strings.TrimLeft(path, "/") + "?v=" + url.QueryEscape(appVersion)
}

type Server struct {
	config       app.Config
	store        *store.Store
	templates    *template.Template
	dist         fs.FS
	logger       *slog.Logger
	loginLimiter *loginLimiter
}

type pageContent struct{ model.SiteContent }

func (c pageContent) FeaturedProjects() []model.Project { return c.SiteContent.FeaturedProjects() }

func (c pageContent) ArchiveProjects() []model.Project {
	projects := make([]model.Project, 0)
	for _, project := range c.VisibleProjects() {
		if !project.Featured {
			projects = append(projects, project)
		}
	}
	return projects
}

type pageData struct {
	Locale         string
	BaseURL        string
	Content        pageContent
	Project        model.Project
	Next           model.Project
	Media          []store.MediaAsset
	Year           int
	StructuredData template.JS
}

func New(config app.Config, dataStore *store.Store, logger *slog.Logger) (*Server, error) {
	funcs := template.FuncMap{
		"asset": func(path string) string { return assetPath(path) },
		"tr":    func(value model.LocalizedText, locale string) string { return value.Value(locale) },
		"localePath": func(locale, path string) string {
			if locale == "en" {
				if path == "/" {
					return "/en"
				}
				return "/en" + path
			}
			return path
		},
		"projectPath": func(locale, slug string) string {
			prefix := ""
			if locale == "en" {
				prefix = "/en"
			}
			return prefix + "/projects/" + url.PathEscape(slug)
		},
		"otherLocale": func(locale string) string {
			if locale == "en" {
				return "zh"
			}
			return "en"
		},
		"add":  func(a, b int) int { return a + b },
		"join": strings.Join,
		"markdown": func(value model.LocalizedText, locale string) template.HTML {
			return renderMarkdown(value.Value(locale))
		},
	}
	templates, err := template.New("pages").Funcs(funcs).ParseFS(site.Files, "templates/*.html")
	if err != nil {
		return nil, err
	}
	dist, err := fs.Sub(site.Files, "dist")
	if err != nil {
		return nil, err
	}
	return &Server{config: config, store: dataStore, templates: templates, dist: dist, logger: logger, loginLimiter: newLoginLimiter()}, nil
}

func (s *Server) Handler() http.Handler {
	mux := http.NewServeMux()
	static := http.StripPrefix("/static/", http.FileServer(http.FS(s.dist)))
	mux.Handle("GET /static/", cacheStatic(static))
	mux.HandleFunc("GET /api/health", s.health)
	mux.HandleFunc("GET /robots.txt", s.robots)
	mux.HandleFunc("GET /sitemap.xml", s.sitemap)
	mux.HandleFunc("GET /", s.home)
	mux.HandleFunc("GET /en", s.home)
	mux.HandleFunc("GET /projects/{slug}", s.project)
	mux.HandleFunc("GET /en/projects/{slug}", s.project)
	mux.HandleFunc("GET /resume.pdf", s.resume)
	mux.HandleFunc("GET /media/{id}/{variant}", s.media)
	mux.HandleFunc("GET /admin", s.adminPage)
	mux.HandleFunc("GET /preview", s.preview)
	mux.HandleFunc("POST /api/admin/session", s.login)
	mux.Handle("GET /api/admin/session", s.requireSession(http.HandlerFunc(s.currentSession)))
	mux.Handle("DELETE /api/admin/session", s.requireSession(http.HandlerFunc(s.logout)))
	mux.Handle("POST /api/admin/password", s.requireSession(http.HandlerFunc(s.changePassword)))
	mux.Handle("GET /api/admin/content", s.requireEditor(http.HandlerFunc(s.getContent)))
	mux.Handle("PUT /api/admin/content", s.requireEditor(http.HandlerFunc(s.updateContent)))
	mux.Handle("POST /api/admin/publish", s.requireEditor(http.HandlerFunc(s.publish)))
	mux.Handle("GET /api/admin/revisions", s.requireEditor(http.HandlerFunc(s.revisions)))
	mux.Handle("POST /api/admin/revisions/{id}/restore", s.requireEditor(http.HandlerFunc(s.restoreRevision)))
	mux.Handle("GET /api/admin/media", s.requireEditor(http.HandlerFunc(s.listMedia)))
	mux.Handle("POST /api/admin/media", s.requireEditor(http.HandlerFunc(s.uploadMedia)))
	mux.Handle("DELETE /api/admin/media/{id}", s.requireEditor(http.HandlerFunc(s.deleteMedia)))
	mux.Handle("POST /api/admin/document", s.requireEditor(http.HandlerFunc(s.uploadDocument)))
	return securityHeaders(s.requestLog(mux))
}

func (s *Server) requestLog(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		started := time.Now()
		next.ServeHTTP(w, r)
		s.logger.Info("request", "method", r.Method, "path", r.URL.Path, "duration_ms", time.Since(started).Milliseconds())
	})
}

func securityHeaders(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("X-Content-Type-Options", "nosniff")
		w.Header().Set("X-Frame-Options", "DENY")
		w.Header().Set("Referrer-Policy", "strict-origin-when-cross-origin")
		w.Header().Set("Permissions-Policy", "camera=(), microphone=(), geolocation=()")
		w.Header().Set("Content-Security-Policy", "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; media-src 'self' blob:; connect-src 'self'; font-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'")
		next.ServeHTTP(w, r)
	})
}

func cacheStatic(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if r.URL.Query().Get("v") == appVersion {
			w.Header().Set("Cache-Control", "public, max-age=31536000, immutable")
		} else {
			w.Header().Set("Cache-Control", "public, max-age=300, must-revalidate")
		}
		next.ServeHTTP(w, r)
	})
}

func (s *Server) health(w http.ResponseWriter, _ *http.Request) {
	writeJSON(w, http.StatusOK, map[string]any{"status": "ok", "version": appVersion, "time": time.Now().UTC()})
}

func (s *Server) activeContent(ctx context.Context) (model.SiteContent, error) {
	raw, err := s.store.ActiveContent(ctx)
	if err != nil {
		return model.SiteContent{}, err
	}
	return decodeContent(raw)
}

func decodeContent(raw []byte) (model.SiteContent, error) {
	var content model.SiteContent
	if err := json.Unmarshal(raw, &content); err != nil {
		return model.SiteContent{}, err
	}
	content.Normalize()
	if err := content.Validate(); err != nil {
		return model.SiteContent{}, err
	}
	return content, nil
}

func (s *Server) adminPage(w http.ResponseWriter, _ *http.Request) {
	w.Header().Set("Cache-Control", "no-store")
	if err := s.templates.ExecuteTemplate(w, "admin", nil); err != nil {
		s.logger.Error("render admin", "error", err)
	}
}

func writeJSON(w http.ResponseWriter, status int, value any) {
	w.Header().Set("Content-Type", "application/json; charset=utf-8")
	w.WriteHeader(status)
	_ = json.NewEncoder(w).Encode(value)
}

func writeError(w http.ResponseWriter, status int, message string) {
	writeJSON(w, status, map[string]string{"error": message})
}

func sessionFromContext(ctx context.Context) store.Session {
	session, _ := ctx.Value(sessionContextKey{}).(store.Session)
	return session
}

type sessionContextKey struct{}

func (s *Server) requireSession(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		cookie, err := r.Cookie(sessionCookie)
		if err != nil || cookie.Value == "" {
			writeError(w, http.StatusUnauthorized, "请先登录")
			return
		}
		session, err := s.store.GetSession(r.Context(), security.TokenHash(cookie.Value))
		if err != nil {
			if !errors.Is(err, sql.ErrNoRows) {
				s.logger.Error("read session", "error", err)
			}
			clearSessionCookie(w, s.config.SecureCookies)
			writeError(w, http.StatusUnauthorized, "会话已失效，请重新登录")
			return
		}
		if requiresMutationProtection(r.Method) {
			if !s.validOrigin(r) {
				writeError(w, http.StatusForbidden, "请求来源无效")
				return
			}
			if r.Header.Get("X-CSRF-Token") == "" || r.Header.Get("X-CSRF-Token") != session.CSRFToken {
				writeError(w, http.StatusForbidden, "CSRF 校验失败")
				return
			}
		}
		next.ServeHTTP(w, r.WithContext(context.WithValue(r.Context(), sessionContextKey{}, session)))
	})
}

func (s *Server) requireEditor(next http.Handler) http.Handler {
	return s.requireSession(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if sessionFromContext(r.Context()).MustChange {
			writeError(w, http.StatusForbidden, "首次登录必须先修改密码")
			return
		}
		next.ServeHTTP(w, r)
	}))
}

func (s *Server) validOrigin(r *http.Request) bool {
	origin := strings.TrimRight(r.Header.Get("Origin"), "/")
	if origin == s.config.BaseURL {
		return true
	}
	return !s.config.SecureCookies && (origin == "http://localhost:"+s.config.Port || origin == "http://127.0.0.1:"+s.config.Port)
}

func requiresMutationProtection(method string) bool {
	return method != http.MethodGet && method != http.MethodHead && method != http.MethodOptions
}

func clearSessionCookie(w http.ResponseWriter, secure bool) {
	http.SetCookie(w, &http.Cookie{Name: sessionCookie, Value: "", Path: "/", MaxAge: -1, HttpOnly: true, Secure: secure, SameSite: http.SameSiteStrictMode})
}

func renderMarkdown(value string) template.HTML {
	lines := strings.Split(strings.ReplaceAll(value, "\r\n", "\n"), "\n")
	var output strings.Builder
	inList := false
	for _, raw := range lines {
		line := strings.TrimSpace(raw)
		if line == "" {
			continue
		}
		if strings.HasPrefix(line, "- ") || strings.HasPrefix(line, "* ") {
			if !inList {
				output.WriteString("<ul>")
				inList = true
			}
			output.WriteString("<li>" + template.HTMLEscapeString(strings.TrimSpace(line[2:])) + "</li>")
			continue
		}
		if inList {
			output.WriteString("</ul>")
			inList = false
		}
		output.WriteString("<p>" + template.HTMLEscapeString(line) + "</p>")
	}
	if inList {
		output.WriteString("</ul>")
	}
	return template.HTML(output.String())
}

type attemptWindow struct {
	count int
	start time.Time
}

type loginLimiter struct {
	mu       sync.Mutex
	attempts map[string]attemptWindow
}

func newLoginLimiter() *loginLimiter { return &loginLimiter{attempts: make(map[string]attemptWindow)} }

func (l *loginLimiter) allow(key string) bool {
	l.mu.Lock()
	defer l.mu.Unlock()
	now := time.Now()
	window, exists := l.attempts[key]
	if !exists || now.Sub(window.start) >= 15*time.Minute {
		l.attempts[key] = attemptWindow{count: 1, start: now}
		return true
	}
	if window.count >= 5 {
		return false
	}
	window.count++
	l.attempts[key] = window
	return true
}

func (l *loginLimiter) reset(key string) {
	l.mu.Lock()
	delete(l.attempts, key)
	l.mu.Unlock()
}

func safeJoin(root, name string) (string, error) {
	cleanRoot, err := filepath.Abs(root)
	if err != nil {
		return "", err
	}
	target, err := filepath.Abs(filepath.Join(cleanRoot, filepath.Base(name)))
	if err != nil {
		return "", err
	}
	if target != cleanRoot && !strings.HasPrefix(target, cleanRoot+string(filepath.Separator)) {
		return "", fmt.Errorf("invalid storage path")
	}
	return target, nil
}
