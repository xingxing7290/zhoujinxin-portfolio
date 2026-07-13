package server

import (
	"bytes"
	"context"
	"encoding/json"
	"io"
	"log/slog"
	"mime/multipart"
	"net/http"
	"net/http/httptest"
	"path/filepath"
	"regexp"
	"strings"
	"testing"

	"github.com/xingxing7290/zhoujinxin-portfolio/internal/app"
	"github.com/xingxing7290/zhoujinxin-portfolio/internal/model"
	"github.com/xingxing7290/zhoujinxin-portfolio/internal/security"
	"github.com/xingxing7290/zhoujinxin-portfolio/internal/seed"
	"github.com/xingxing7290/zhoujinxin-portfolio/internal/store"
)

func TestPublicAndAdminLifecycle(t *testing.T) {
	dataDir := t.TempDir()
	dataStore, err := store.Open(filepath.Join(dataDir, "portfolio.sqlite"))
	if err != nil {
		t.Fatal(err)
	}
	defer dataStore.Close()
	password := "Temporary-Portfolio-2026!"
	hash, err := security.HashPassword(password)
	if err != nil {
		t.Fatal(err)
	}
	if err := dataStore.EnsureSeed(context.Background(), seed.Content, "admin", hash); err != nil {
		t.Fatal(err)
	}
	config := app.Config{Port: "8080", BaseURL: "http://portfolio.test", DataDir: dataDir, AdminUsername: "admin", AdminInitialPassword: password, SecureCookies: false}
	appServer, err := New(config, dataStore, slog.New(slog.NewTextHandler(io.Discard, nil)))
	if err != nil {
		t.Fatal(err)
	}
	testServer := httptest.NewServer(appServer.Handler())
	defer testServer.Close()

	assertPage(t, testServer.URL+"/", http.StatusOK, "zhoujx158@163.com", false)
	assertPage(t, testServer.URL+"/en", http.StatusOK, "Selected projects", false)
	assertPage(t, testServer.URL+"/robots.txt", http.StatusOK, "Sitemap: http://portfolio.test/sitemap.xml", false)
	assertPage(t, testServer.URL+"/sitemap.xml", http.StatusOK, "/en/projects/iot-control-platform", false)
	assertPage(t, testServer.URL+"/projects/iot-control-platform", http.StatusOK, "物联网集中控制平台", false)
	assertPage(t, testServer.URL+"/missing", http.StatusNotFound, "信号已丢失", false)

	badOrigin := jsonRequest(t, http.MethodPost, testServer.URL+"/api/admin/session", map[string]string{"username": "admin", "password": password})
	badOrigin.Header.Set("Origin", "https://evil.example")
	response, err := http.DefaultClient.Do(badOrigin)
	if err != nil || response.StatusCode != http.StatusForbidden {
		t.Fatalf("expected bad origin rejection, status=%v err=%v", response.StatusCode, err)
	}
	response.Body.Close()

	login := jsonRequest(t, http.MethodPost, testServer.URL+"/api/admin/session", map[string]string{"username": "admin", "password": password})
	login.Header.Set("Origin", config.BaseURL)
	response, err = http.DefaultClient.Do(login)
	if err != nil {
		t.Fatal(err)
	}
	if response.StatusCode != http.StatusOK {
		t.Fatalf("login returned %d", response.StatusCode)
	}
	var session map[string]any
	if err := json.NewDecoder(response.Body).Decode(&session); err != nil {
		t.Fatal(err)
	}
	response.Body.Close()
	cookies := response.Cookies()
	if len(cookies) == 0 || cookies[0].HttpOnly == false || cookies[0].SameSite != http.SameSiteStrictMode {
		t.Fatal("secure session cookie attributes are missing")
	}
	csrf := session["csrfToken"].(string)

	contentRequest, _ := http.NewRequest(http.MethodGet, testServer.URL+"/api/admin/content", nil)
	contentRequest.AddCookie(cookies[0])
	response, err = http.DefaultClient.Do(contentRequest)
	if err != nil || response.StatusCode != http.StatusForbidden {
		t.Fatalf("first-login editor gate returned %d err=%v", response.StatusCode, err)
	}
	response.Body.Close()

	invalidUpload := &bytes.Buffer{}
	writer := multipart.NewWriter(invalidUpload)
	part, _ := writer.CreateFormFile("file", "fake.png")
	_, _ = part.Write([]byte("not a real image"))
	_ = writer.Close()
	uploadRequest, _ := http.NewRequest(http.MethodPost, testServer.URL+"/api/admin/media?kind=image", invalidUpload)
	uploadRequest.Header.Set("Content-Type", writer.FormDataContentType())
	uploadRequest.Header.Set("Origin", config.BaseURL)
	uploadRequest.Header.Set("X-CSRF-Token", csrf)
	uploadRequest.AddCookie(cookies[0])
	response, err = http.DefaultClient.Do(uploadRequest)
	if err != nil || response.StatusCode != http.StatusForbidden {
		t.Fatalf("first-login upload gate returned %d err=%v", response.StatusCode, err)
	}
	response.Body.Close()

	change := jsonRequest(t, http.MethodPost, testServer.URL+"/api/admin/password", map[string]string{"currentPassword": password, "newPassword": "Changed-Portfolio-2026!"})
	change.Header.Set("Origin", config.BaseURL)
	change.Header.Set("X-CSRF-Token", csrf)
	change.AddCookie(cookies[0])
	response, err = http.DefaultClient.Do(change)
	if err != nil || response.StatusCode != http.StatusOK {
		t.Fatalf("password change returned %d err=%v", response.StatusCode, err)
	}
	response.Body.Close()

	cookie, csrf := loginForTest(t, testServer.URL, config.BaseURL, "Changed-Portfolio-2026!")
	contentRequest, _ = http.NewRequest(http.MethodGet, testServer.URL+"/api/admin/content", nil)
	contentRequest.AddCookie(cookie)
	response, err = http.DefaultClient.Do(contentRequest)
	if err != nil || response.StatusCode != http.StatusOK {
		t.Fatalf("editor content returned %d err=%v", response.StatusCode, err)
	}
	var draft struct {
		Content model.SiteContent `json:"content"`
		Version int64             `json:"version"`
	}
	if err := json.NewDecoder(response.Body).Decode(&draft); err != nil {
		t.Fatal(err)
	}
	response.Body.Close()
	if draft.Content.Projects[0].Status != "published" {
		t.Fatal("project publish status was not normalized")
	}
	update := jsonRequest(t, http.MethodPut, testServer.URL+"/api/admin/content", map[string]any{"content": draft.Content, "version": draft.Version})
	protectMutation(update, cookie, csrf, config.BaseURL)
	response, err = http.DefaultClient.Do(update)
	if err != nil || response.StatusCode != http.StatusOK {
		t.Fatalf("draft update returned %d err=%v", response.StatusCode, err)
	}
	response.Body.Close()
	publish := jsonRequest(t, http.MethodPost, testServer.URL+"/api/admin/publish", map[string]string{"note": "integration publish"})
	protectMutation(publish, cookie, csrf, config.BaseURL)
	response, err = http.DefaultClient.Do(publish)
	if err != nil || response.StatusCode != http.StatusCreated {
		t.Fatalf("publish returned %d err=%v", response.StatusCode, err)
	}
	response.Body.Close()

	badFile := multipartRequest(t, http.MethodPost, testServer.URL+"/api/admin/media?kind=image", "fake.png", []byte("not a real image"))
	protectMutation(badFile, cookie, csrf, config.BaseURL)
	response, err = http.DefaultClient.Do(badFile)
	if err != nil || response.StatusCode != http.StatusUnsupportedMediaType {
		t.Fatalf("magic validation returned %d err=%v", response.StatusCode, err)
	}
	response.Body.Close()

	png := append([]byte("\x89PNG\r\n\x1a\n"), make([]byte, 64)...)
	imageUpload := multipartRequest(t, http.MethodPost, testServer.URL+"/api/admin/media?kind=image", "proof.png", png)
	protectMutation(imageUpload, cookie, csrf, config.BaseURL)
	response, err = http.DefaultClient.Do(imageUpload)
	if err != nil || response.StatusCode != http.StatusCreated {
		t.Fatalf("image upload returned %d err=%v", response.StatusCode, err)
	}
	var media store.MediaAsset
	if err := json.NewDecoder(response.Body).Decode(&media); err != nil {
		t.Fatal(err)
	}
	response.Body.Close()
	remove, _ := http.NewRequest(http.MethodDelete, testServer.URL+"/api/admin/media/"+media.ID, nil)
	protectMutation(remove, cookie, csrf, config.BaseURL)
	response, err = http.DefaultClient.Do(remove)
	if err != nil || response.StatusCode != http.StatusNoContent {
		t.Fatalf("media delete returned %d err=%v", response.StatusCode, err)
	}
	response.Body.Close()

	pdfUpload := multipartRequest(t, http.MethodPost, testServer.URL+"/api/admin/document", "resume.pdf", []byte("%PDF-1.4\n1 0 obj\n<<>>\nendobj\n%%EOF"))
	protectMutation(pdfUpload, cookie, csrf, config.BaseURL)
	response, err = http.DefaultClient.Do(pdfUpload)
	if err != nil || response.StatusCode != http.StatusCreated {
		t.Fatalf("PDF upload returned %d err=%v", response.StatusCode, err)
	}
	response.Body.Close()
	resume, err := http.Get(testServer.URL + "/resume.pdf")
	if err != nil || resume.StatusCode != http.StatusOK || resume.Header.Get("Content-Type") != "application/pdf" {
		t.Fatalf("resume route returned %d err=%v", resume.StatusCode, err)
	}
	resume.Body.Close()
}

func assertPage(t *testing.T, url string, status int, contains string, allowPhone bool) {
	t.Helper()
	response, err := http.Get(url)
	if err != nil {
		t.Fatal(err)
	}
	defer response.Body.Close()
	body, _ := io.ReadAll(response.Body)
	if response.StatusCode != status || !strings.Contains(string(body), contains) {
		t.Fatalf("page %s status=%d body missing %q", url, response.StatusCode, contains)
	}
	if !allowPhone && regexpPhone.Match(body) {
		t.Fatalf("public page %s leaked a full mobile number", url)
	}
}

var regexpPhone = regexp.MustCompile(`1[3-9][0-9]{9}`)

func jsonRequest(t *testing.T, method, url string, body any) *http.Request {
	t.Helper()
	raw, _ := json.Marshal(body)
	request, err := http.NewRequest(method, url, bytes.NewReader(raw))
	if err != nil {
		t.Fatal(err)
	}
	request.Header.Set("Content-Type", "application/json")
	return request
}

func loginForTest(t *testing.T, baseURL, origin, password string) (*http.Cookie, string) {
	t.Helper()
	request := jsonRequest(t, http.MethodPost, baseURL+"/api/admin/session", map[string]string{"username": "admin", "password": password})
	request.Header.Set("Origin", origin)
	response, err := http.DefaultClient.Do(request)
	if err != nil || response.StatusCode != http.StatusOK {
		t.Fatalf("login returned %d err=%v", response.StatusCode, err)
	}
	defer response.Body.Close()
	var session struct {
		CSRFToken string `json:"csrfToken"`
	}
	if err := json.NewDecoder(response.Body).Decode(&session); err != nil {
		t.Fatal(err)
	}
	return response.Cookies()[0], session.CSRFToken
}

func protectMutation(request *http.Request, cookie *http.Cookie, csrf, origin string) {
	request.AddCookie(cookie)
	request.Header.Set("X-CSRF-Token", csrf)
	request.Header.Set("Origin", origin)
}

func multipartRequest(t *testing.T, method, url, filename string, content []byte) *http.Request {
	t.Helper()
	body := &bytes.Buffer{}
	writer := multipart.NewWriter(body)
	part, err := writer.CreateFormFile("file", filename)
	if err != nil {
		t.Fatal(err)
	}
	_, _ = part.Write(content)
	_ = writer.Close()
	request, err := http.NewRequest(method, url, body)
	if err != nil {
		t.Fatal(err)
	}
	request.Header.Set("Content-Type", writer.FormDataContentType())
	return request
}
