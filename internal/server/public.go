package server

import (
	"database/sql"
	"encoding/json"
	"encoding/xml"
	"errors"
	"html/template"
	"net/http"
	"net/url"
	"os"
	"path/filepath"
	"strings"
	"time"

	"github.com/xingxing7290/zhoujinxin-portfolio/internal/security"
	"github.com/xingxing7290/zhoujinxin-portfolio/internal/store"
)

func (s *Server) robots(w http.ResponseWriter, _ *http.Request) {
	w.Header().Set("Content-Type", "text/plain; charset=utf-8")
	w.Header().Set("Cache-Control", "public, max-age=3600")
	baseURL := strings.TrimRight(s.config.BaseURL, "/")
	_, _ = w.Write([]byte("User-agent: *\nAllow: /\nDisallow: /admin\nDisallow: /api/admin/\nSitemap: " + baseURL + "/sitemap.xml\n"))
}

func (s *Server) sitemap(w http.ResponseWriter, r *http.Request) {
	content, err := s.activeContent(r.Context())
	if err != nil {
		http.Error(w, "content unavailable", http.StatusServiceUnavailable)
		return
	}
	w.Header().Set("Content-Type", "application/xml; charset=utf-8")
	w.Header().Set("Cache-Control", "public, max-age=3600")
	baseURL := strings.TrimRight(s.config.BaseURL, "/")
	_, _ = w.Write([]byte(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`))
	writeLocation := func(path string) {
		_, _ = w.Write([]byte("<url><loc>"))
		_ = xml.EscapeText(w, []byte(baseURL+path))
		_, _ = w.Write([]byte("</loc></url>"))
	}
	writeLocation("/")
	writeLocation("/en")
	for _, project := range content.VisibleProjects() {
		writeLocation("/projects/" + project.Slug)
		writeLocation("/en/projects/" + project.Slug)
	}
	_, _ = w.Write([]byte("</urlset>"))
}

func (s *Server) home(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/" && r.URL.Path != "/en" {
		s.notFound(w, r)
		return
	}
	content, err := s.activeContent(r.Context())
	if err != nil {
		s.logger.Error("load public content", "error", err)
		http.Error(w, "content unavailable", http.StatusServiceUnavailable)
		return
	}
	locale := localeFromPath(r.URL.Path)
	structured, _ := json.Marshal(map[string]any{
		"@context":   "https://schema.org",
		"@type":      "Person",
		"name":       content.Profile.Name.Value(locale),
		"jobTitle":   content.Profile.Title.Value(locale),
		"email":      "mailto:" + content.Profile.Email,
		"url":        s.config.BaseURL + localizedHome(locale),
		"knowsAbout": []string{"Embedded systems", "4G gateway", "IoT", "C/C++", "Flutter", "Go"},
	})
	data := pageData{Locale: locale, BaseURL: s.config.BaseURL, Content: pageContent{content}, Year: time.Now().Year(), StructuredData: templateJS(structured)}
	w.Header().Set("Content-Type", "text/html; charset=utf-8")
	if err := s.templates.ExecuteTemplate(w, "home", data); err != nil {
		s.logger.Error("render home", "error", err)
	}
}

func (s *Server) preview(w http.ResponseWriter, r *http.Request) {
	session, ok := s.previewSession(r)
	if !ok || session.MustChange {
		writeError(w, http.StatusUnauthorized, "请先登录内容工作台")
		return
	}
	raw, _, err := s.store.GetDraft(r.Context())
	if err != nil {
		writeError(w, http.StatusInternalServerError, "无法读取草稿")
		return
	}
	content, err := decodeContent(raw)
	if err != nil {
		writeError(w, http.StatusUnprocessableEntity, err.Error())
		return
	}
	locale := r.URL.Query().Get("lang")
	if locale != "en" {
		locale = "zh"
	}
	w.Header().Set("Cache-Control", "no-store")
	w.Header().Set("X-Robots-Tag", "noindex, nofollow")
	data := pageData{Locale: locale, BaseURL: s.config.BaseURL, Content: pageContent{content}, Year: time.Now().Year(), StructuredData: templateJS([]byte(`{}`))}
	if err := s.templates.ExecuteTemplate(w, "home", data); err != nil {
		s.logger.Error("render preview", "error", err)
	}
}

func (s *Server) previewSession(r *http.Request) (store.Session, bool) {
	cookie, err := r.Cookie(sessionCookie)
	if err != nil {
		return store.Session{}, false
	}
	session, err := s.store.GetSession(r.Context(), security.TokenHash(cookie.Value))
	return session, err == nil
}

func (s *Server) project(w http.ResponseWriter, r *http.Request) {
	content, err := s.activeContent(r.Context())
	if err != nil {
		http.Error(w, "content unavailable", http.StatusServiceUnavailable)
		return
	}
	project, exists := content.ProjectBySlug(r.PathValue("slug"))
	if !exists {
		s.notFound(w, r)
		return
	}
	visible := content.VisibleProjects()
	next := project
	for i, item := range visible {
		if item.Slug == project.Slug {
			next = visible[(i+1)%len(visible)]
			break
		}
	}
	media := make([]store.MediaAsset, 0, len(project.MediaIDs))
	for _, id := range project.MediaIDs {
		asset, err := s.store.GetMedia(r.Context(), id)
		if err == nil && asset.Status == "published" {
			media = append(media, asset)
		}
	}
	locale := localeFromPath(r.URL.Path)
	projectURL := strings.TrimRight(s.config.BaseURL, "/") + projectPagePath(locale, project.Slug)
	structured, _ := json.Marshal(map[string]any{
		"@context":    "https://schema.org",
		"@type":       "CreativeWork",
		"name":        project.Title.Value(locale),
		"description": project.Summary.Value(locale),
		"url":         projectURL,
		"inLanguage":  map[string]string{"zh": "zh-CN", "en": "en"}[locale],
		"keywords":    project.Stack,
		"creator": map[string]any{
			"@type": "Person",
			"name":  content.Profile.Name.Value(locale),
			"url":   strings.TrimRight(s.config.BaseURL, "/") + localizedHome(locale),
		},
	})
	data := pageData{Locale: locale, BaseURL: s.config.BaseURL, Content: pageContent{content}, Project: project, Next: next, Media: media, Year: time.Now().Year(), StructuredData: templateJS(structured)}
	w.Header().Set("Content-Type", "text/html; charset=utf-8")
	if err := s.templates.ExecuteTemplate(w, "project", data); err != nil {
		s.logger.Error("render project", "error", err)
	}
}

func (s *Server) resume(w http.ResponseWriter, r *http.Request) {
	document, err := s.store.ActiveDocument(r.Context())
	if errors.Is(err, sql.ErrNoRows) {
		http.Error(w, "resume not uploaded", http.StatusNotFound)
		return
	}
	if err != nil {
		http.Error(w, "resume unavailable", http.StatusInternalServerError)
		return
	}
	path, err := safeJoin(filepath.Join(s.config.DataDir, "documents"), document.StoredName)
	if err != nil {
		http.Error(w, "invalid document path", http.StatusInternalServerError)
		return
	}
	file, err := os.Open(path)
	if err != nil {
		http.NotFound(w, r)
		return
	}
	defer file.Close()
	w.Header().Set("Content-Type", "application/pdf")
	w.Header().Set("Content-Disposition", `inline; filename="Zhou-Jinxin-Resume.pdf"`)
	w.Header().Set("Cache-Control", "private, max-age=300")
	http.ServeContent(w, r, document.OriginalName, document.CreatedAt, file)
}

func (s *Server) media(w http.ResponseWriter, r *http.Request) {
	asset, err := s.store.GetMedia(r.Context(), r.PathValue("id"))
	if errors.Is(err, sql.ErrNoRows) {
		http.NotFound(w, r)
		return
	}
	if err != nil {
		http.Error(w, "media unavailable", http.StatusInternalServerError)
		return
	}
	if asset.Status != "published" {
		if _, ok := s.previewSession(r); !ok {
			http.NotFound(w, r)
			return
		}
	}
	storedName := asset.StoredName
	mimeType := asset.MIMEType
	variant := r.PathValue("variant")
	if variant != "" && variant != "original" {
		var variants map[string]struct {
			StoredName string `json:"storedName"`
			MIMEType   string `json:"mimeType"`
		}
		_ = json.Unmarshal([]byte(asset.VariantsJSON), &variants)
		value, exists := variants[variant]
		if !exists {
			http.NotFound(w, r)
			return
		}
		storedName = value.StoredName
		mimeType = value.MIMEType
	}
	path, err := safeJoin(filepath.Join(s.config.DataDir, "media"), storedName)
	if err != nil {
		http.Error(w, "invalid media path", http.StatusInternalServerError)
		return
	}
	file, err := os.Open(path)
	if err != nil {
		http.NotFound(w, r)
		return
	}
	defer file.Close()
	w.Header().Set("Content-Type", mimeType)
	w.Header().Set("Accept-Ranges", "bytes")
	if asset.Status == "published" {
		w.Header().Set("Cache-Control", "public, max-age=31536000, immutable")
	} else {
		w.Header().Set("Cache-Control", "no-store")
	}
	http.ServeContent(w, r, asset.OriginalName, asset.CreatedAt, file)
}

func (s *Server) notFound(w http.ResponseWriter, r *http.Request) {
	locale := localeFromPath(r.URL.Path)
	w.Header().Set("Content-Type", "text/html; charset=utf-8")
	w.WriteHeader(http.StatusNotFound)
	if locale == "en" {
		_, _ = w.Write([]byte(`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><link rel="stylesheet" href="` + assetPath("assets/style.css") + `"><title>Not found · Zhou Jinxin</title></head><body class="not-found"><main><span>404</span><h1>Signal lost.</h1><p>The route does not exist or is no longer published.</p><a class="button" href="/en">Return home</a></main></body></html>`))
		return
	}
	_, _ = w.Write([]byte(`<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><link rel="stylesheet" href="` + assetPath("assets/style.css") + `"><title>未找到 · 周金鑫</title></head><body class="not-found"><main><span>404</span><h1>信号已丢失。</h1><p>这个路径不存在，或内容尚未发布。</p><a class="button" href="/">返回首页</a></main></body></html>`))
}

func localeFromPath(path string) string {
	if path == "/en" || strings.HasPrefix(path, "/en/") {
		return "en"
	}
	return "zh"
}

func localizedHome(locale string) string {
	if locale == "en" {
		return "/en"
	}
	return "/"
}

func projectPagePath(locale, slug string) string {
	prefix := ""
	if locale == "en" {
		prefix = "/en"
	}
	return prefix + "/projects/" + url.PathEscape(slug)
}

func templateJS(value []byte) template.JS { return template.JS(value) }
