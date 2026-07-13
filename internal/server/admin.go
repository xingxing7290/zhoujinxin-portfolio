package server

import (
	"database/sql"
	"encoding/json"
	"errors"
	"net"
	"net/http"
	"strings"
	"time"

	"github.com/xingxing7290/zhoujinxin-portfolio/internal/model"
	"github.com/xingxing7290/zhoujinxin-portfolio/internal/security"
	"github.com/xingxing7290/zhoujinxin-portfolio/internal/store"
)

type loginRequest struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

func (s *Server) login(w http.ResponseWriter, r *http.Request) {
	if !s.validOrigin(r) {
		writeError(w, http.StatusForbidden, "请求来源无效")
		return
	}
	key := clientIP(r)
	if !s.loginLimiter.allow(key) {
		w.Header().Set("Retry-After", "900")
		writeError(w, http.StatusTooManyRequests, "登录尝试过多，请 15 分钟后重试")
		return
	}
	var input loginRequest
	if err := decodeJSON(r, &input, 16<<10); err != nil {
		writeError(w, http.StatusBadRequest, err.Error())
		return
	}
	user, err := s.store.GetAdminByUsername(r.Context(), strings.TrimSpace(input.Username))
	if err != nil || !security.VerifyPassword(user.PasswordHash, input.Password) {
		writeError(w, http.StatusUnauthorized, "用户名或密码错误")
		return
	}
	token, err := security.RandomToken(32)
	if err != nil {
		writeError(w, http.StatusInternalServerError, "无法创建安全会话")
		return
	}
	csrf, err := security.RandomToken(24)
	if err != nil {
		writeError(w, http.StatusInternalServerError, "无法创建安全会话")
		return
	}
	session := store.Session{
		ID:         "ses_" + security.TokenHash(token)[:24],
		UserID:     user.ID,
		Username:   user.Username,
		TokenHash:  security.TokenHash(token),
		CSRFToken:  csrf,
		ExpiresAt:  time.Now().UTC().Add(8 * time.Hour),
		MustChange: user.MustChange,
	}
	if err := s.store.CreateSession(r.Context(), session); err != nil {
		writeError(w, http.StatusInternalServerError, "无法保存安全会话")
		return
	}
	http.SetCookie(w, &http.Cookie{
		Name:     sessionCookie,
		Value:    token,
		Path:     "/",
		MaxAge:   int((8 * time.Hour).Seconds()),
		HttpOnly: true,
		Secure:   s.config.SecureCookies,
		SameSite: http.SameSiteStrictMode,
	})
	s.loginLimiter.reset(key)
	writeJSON(w, http.StatusOK, sessionResponse(session))
}

func (s *Server) currentSession(w http.ResponseWriter, r *http.Request) {
	writeJSON(w, http.StatusOK, sessionResponse(sessionFromContext(r.Context())))
}

func sessionResponse(session store.Session) map[string]any {
	return map[string]any{
		"username":           session.Username,
		"csrfToken":          session.CSRFToken,
		"expiresAt":          session.ExpiresAt,
		"mustChangePassword": session.MustChange,
	}
}

func (s *Server) logout(w http.ResponseWriter, r *http.Request) {
	cookie, _ := r.Cookie(sessionCookie)
	if cookie != nil {
		_ = s.store.DeleteSession(r.Context(), security.TokenHash(cookie.Value))
	}
	clearSessionCookie(w, s.config.SecureCookies)
	w.WriteHeader(http.StatusNoContent)
}

func (s *Server) changePassword(w http.ResponseWriter, r *http.Request) {
	var input struct {
		CurrentPassword string `json:"currentPassword"`
		NewPassword     string `json:"newPassword"`
	}
	if err := decodeJSON(r, &input, 16<<10); err != nil {
		writeError(w, http.StatusBadRequest, err.Error())
		return
	}
	session := sessionFromContext(r.Context())
	user, err := s.store.GetAdminByUsername(r.Context(), session.Username)
	if err != nil || !security.VerifyPassword(user.PasswordHash, input.CurrentPassword) {
		writeError(w, http.StatusUnauthorized, "当前密码错误")
		return
	}
	if input.NewPassword == input.CurrentPassword {
		writeError(w, http.StatusUnprocessableEntity, "新密码不能与临时密码相同")
		return
	}
	hash, err := security.HashPassword(input.NewPassword)
	if err != nil {
		writeError(w, http.StatusUnprocessableEntity, err.Error())
		return
	}
	if err := s.store.UpdateAdminPassword(r.Context(), user.ID, hash); err != nil {
		writeError(w, http.StatusInternalServerError, "密码更新失败")
		return
	}
	clearSessionCookie(w, s.config.SecureCookies)
	writeJSON(w, http.StatusOK, map[string]string{"message": "密码已更新，请重新登录"})
}

func (s *Server) getContent(w http.ResponseWriter, r *http.Request) {
	raw, version, err := s.store.GetDraft(r.Context())
	if err != nil {
		writeError(w, http.StatusInternalServerError, "无法读取草稿")
		return
	}
	content, err := decodeContent(raw)
	if err != nil {
		writeError(w, http.StatusInternalServerError, "草稿数据损坏")
		return
	}
	writeJSON(w, http.StatusOK, map[string]any{"content": content, "version": version})
}

func (s *Server) updateContent(w http.ResponseWriter, r *http.Request) {
	var input struct {
		Content model.SiteContent `json:"content"`
		Version int64             `json:"version"`
	}
	if err := decodeJSON(r, &input, 4<<20); err != nil {
		writeError(w, http.StatusBadRequest, err.Error())
		return
	}
	input.Content.Normalize()
	if err := input.Content.Validate(); err != nil {
		writeError(w, http.StatusUnprocessableEntity, err.Error())
		return
	}
	raw, err := json.Marshal(input.Content)
	if err != nil {
		writeError(w, http.StatusInternalServerError, "无法编码草稿")
		return
	}
	version, err := s.store.UpdateDraft(r.Context(), raw, input.Version)
	if errors.Is(err, store.ErrVersionConflict) {
		writeError(w, http.StatusConflict, err.Error())
		return
	}
	if err != nil {
		writeError(w, http.StatusInternalServerError, "草稿保存失败")
		return
	}
	writeJSON(w, http.StatusOK, map[string]any{"version": version, "updatedAt": input.Content.UpdatedAt})
}

func (s *Server) publish(w http.ResponseWriter, r *http.Request) {
	var input struct {
		Note string `json:"note"`
	}
	if err := decodeJSON(r, &input, 32<<10); err != nil {
		writeError(w, http.StatusBadRequest, err.Error())
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
	for _, mediaID := range content.ReferencedMediaIDs() {
		if _, err := s.store.GetMedia(r.Context(), mediaID); err != nil {
			if errors.Is(err, sql.ErrNoRows) {
				writeError(w, http.StatusUnprocessableEntity, "项目引用了不存在的媒体："+mediaID)
				return
			}
			writeError(w, http.StatusInternalServerError, "无法校验媒体引用")
			return
		}
	}
	revision, err := s.store.Publish(r.Context(), raw, input.Note, content.ReferencedMediaIDs())
	if err != nil {
		writeError(w, http.StatusInternalServerError, "发布失败")
		return
	}
	writeJSON(w, http.StatusCreated, revision)
}

func (s *Server) revisions(w http.ResponseWriter, r *http.Request) {
	revisions, err := s.store.ListRevisions(r.Context(), 50)
	if err != nil {
		writeError(w, http.StatusInternalServerError, "无法读取历史版本")
		return
	}
	writeJSON(w, http.StatusOK, map[string]any{"revisions": revisions})
}

func (s *Server) restoreRevision(w http.ResponseWriter, r *http.Request) {
	version, err := s.store.RestoreRevision(r.Context(), r.PathValue("id"))
	if errors.Is(err, sql.ErrNoRows) {
		writeError(w, http.StatusNotFound, "历史版本不存在")
		return
	}
	if err != nil {
		writeError(w, http.StatusInternalServerError, "恢复历史版本失败")
		return
	}
	writeJSON(w, http.StatusOK, map[string]any{"version": version})
}

func decodeJSON(r *http.Request, destination any, limit int64) error {
	decoder := json.NewDecoder(http.MaxBytesReader(nil, r.Body, limit))
	decoder.DisallowUnknownFields()
	if err := decoder.Decode(destination); err != nil {
		return errors.New("请求数据格式无效")
	}
	return nil
}

func clientIP(r *http.Request) string {
	if forwarded := strings.TrimSpace(strings.Split(r.Header.Get("X-Forwarded-For"), ",")[0]); forwarded != "" {
		return forwarded
	}
	host, _, err := net.SplitHostPort(r.RemoteAddr)
	if err == nil {
		return host
	}
	return r.RemoteAddr
}
