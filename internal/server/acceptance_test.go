package server

import (
	"bytes"
	"context"
	"encoding/json"
	"io"
	"log/slog"
	"net/http"
	"net/http/httptest"
	"path/filepath"
	"strings"
	"testing"
	"time"

	"github.com/xingxing7290/zhoujinxin-portfolio/internal/app"
	"github.com/xingxing7290/zhoujinxin-portfolio/internal/model"
	"github.com/xingxing7290/zhoujinxin-portfolio/internal/security"
	"github.com/xingxing7290/zhoujinxin-portfolio/internal/seed"
	"github.com/xingxing7290/zhoujinxin-portfolio/internal/store"
)

type adminFixture struct {
	server  *httptest.Server
	store   *store.Store
	dataDir string
	baseURL string
	cookie  *http.Cookie
	csrf    string
}

func newAdminFixture(t *testing.T) *adminFixture {
	t.Helper()
	dataDir := t.TempDir()
	dataStore, err := store.Open(filepath.Join(dataDir, "portfolio.sqlite"))
	if err != nil {
		t.Fatal(err)
	}
	initialPassword := "Acceptance-Temporary-2026!"
	initialHash, err := security.HashPassword(initialPassword)
	if err != nil {
		t.Fatal(err)
	}
	if err := dataStore.EnsureSeed(context.Background(), seed.Content, "admin", initialHash); err != nil {
		t.Fatal(err)
	}
	user, err := dataStore.GetAdminByUsername(context.Background(), "admin")
	if err != nil {
		t.Fatal(err)
	}
	password := "Acceptance-Changed-2026!"
	passwordHash, err := security.HashPassword(password)
	if err != nil {
		t.Fatal(err)
	}
	if err := dataStore.UpdateAdminPassword(context.Background(), user.ID, passwordHash); err != nil {
		t.Fatal(err)
	}
	baseURL := "http://portfolio.test"
	appServer, err := New(app.Config{
		Port:                 "8080",
		BaseURL:              baseURL,
		DataDir:              dataDir,
		AdminUsername:        "admin",
		AdminInitialPassword: initialPassword,
		SecureCookies:        false,
	}, dataStore, slog.New(slog.NewTextHandler(io.Discard, nil)))
	if err != nil {
		t.Fatal(err)
	}
	testServer := httptest.NewServer(appServer.Handler())
	cookie, csrf := loginForTest(t, testServer.URL, baseURL, password)
	fixture := &adminFixture{server: testServer, store: dataStore, dataDir: dataDir, baseURL: baseURL, cookie: cookie, csrf: csrf}
	t.Cleanup(func() {
		testServer.Close()
		_ = dataStore.Close()
	})
	return fixture
}

func (f *adminFixture) draft(t *testing.T) (model.SiteContent, int64) {
	t.Helper()
	request, _ := http.NewRequest(http.MethodGet, f.server.URL+"/api/admin/content", nil)
	request.AddCookie(f.cookie)
	response, err := http.DefaultClient.Do(request)
	if err != nil {
		t.Fatal(err)
	}
	defer response.Body.Close()
	if response.StatusCode != http.StatusOK {
		t.Fatalf("draft returned %d", response.StatusCode)
	}
	var result struct {
		Content model.SiteContent `json:"content"`
		Version int64             `json:"version"`
	}
	if err := json.NewDecoder(response.Body).Decode(&result); err != nil {
		t.Fatal(err)
	}
	return result.Content, result.Version
}

func (f *adminFixture) updateDraft(t *testing.T, content model.SiteContent, version int64, expectedStatus int) int64 {
	t.Helper()
	request := jsonRequest(t, http.MethodPut, f.server.URL+"/api/admin/content", map[string]any{"content": content, "version": version})
	protectMutation(request, f.cookie, f.csrf, f.baseURL)
	response, err := http.DefaultClient.Do(request)
	if err != nil {
		t.Fatal(err)
	}
	defer response.Body.Close()
	if response.StatusCode != expectedStatus {
		body, _ := io.ReadAll(response.Body)
		t.Fatalf("draft update returned %d, want %d: %s", response.StatusCode, expectedStatus, body)
	}
	if expectedStatus != http.StatusOK {
		return 0
	}
	var result struct {
		Version int64 `json:"version"`
	}
	if err := json.NewDecoder(response.Body).Decode(&result); err != nil {
		t.Fatal(err)
	}
	return result.Version
}

func (f *adminFixture) publish(t *testing.T, note string) store.Revision {
	t.Helper()
	request := jsonRequest(t, http.MethodPost, f.server.URL+"/api/admin/publish", map[string]string{"note": note})
	protectMutation(request, f.cookie, f.csrf, f.baseURL)
	response, err := http.DefaultClient.Do(request)
	if err != nil {
		t.Fatal(err)
	}
	defer response.Body.Close()
	if response.StatusCode != http.StatusCreated {
		body, _ := io.ReadAll(response.Body)
		t.Fatalf("publish returned %d: %s", response.StatusCode, body)
	}
	var revision store.Revision
	if err := json.NewDecoder(response.Body).Decode(&revision); err != nil {
		t.Fatal(err)
	}
	return revision
}

func TestDraftPreviewPublishRestoreAndMediaProtection(t *testing.T) {
	fixture := newAdminFixture(t)
	content, version := fixture.draft(t)
	originalSummary := content.Profile.Summary.ZH
	marker := "验收草稿不会提前泄露到公开页面"
	content.Profile.Summary.ZH = marker
	versionAfterSummary := fixture.updateDraft(t, content, version, http.StatusOK)

	publicBefore := getBody(t, fixture.server.URL+"/")
	if strings.Contains(publicBefore, marker) {
		t.Fatal("draft content leaked to the public page before publish")
	}
	previewRequest, _ := http.NewRequest(http.MethodGet, fixture.server.URL+"/preview?lang=zh", nil)
	previewRequest.AddCookie(fixture.cookie)
	previewResponse, err := http.DefaultClient.Do(previewRequest)
	if err != nil {
		t.Fatal(err)
	}
	previewBody, _ := io.ReadAll(previewResponse.Body)
	previewResponse.Body.Close()
	if previewResponse.StatusCode != http.StatusOK || !bytes.Contains(previewBody, []byte(marker)) {
		t.Fatalf("authenticated preview did not expose the draft, status=%d", previewResponse.StatusCode)
	}
	if previewResponse.Header.Get("X-Robots-Tag") != "noindex, nofollow" || previewResponse.Header.Get("Cache-Control") != "no-store" {
		t.Fatal("preview cache or crawler protection headers are missing")
	}

	fixture.updateDraft(t, content, version, http.StatusConflict)

	png := append([]byte("\x89PNG\r\n\x1a\n"), make([]byte, 64)...)
	upload := multipartRequest(t, http.MethodPost, fixture.server.URL+"/api/admin/media?kind=image", "../../proof.png", png)
	protectMutation(upload, fixture.cookie, fixture.csrf, fixture.baseURL)
	uploadResponse, err := http.DefaultClient.Do(upload)
	if err != nil {
		t.Fatal(err)
	}
	if uploadResponse.StatusCode != http.StatusCreated {
		body, _ := io.ReadAll(uploadResponse.Body)
		uploadResponse.Body.Close()
		t.Fatalf("image upload returned %d: %s", uploadResponse.StatusCode, body)
	}
	var media store.MediaAsset
	if err := json.NewDecoder(uploadResponse.Body).Decode(&media); err != nil {
		t.Fatal(err)
	}
	uploadResponse.Body.Close()
	if media.OriginalName != "proof.png" || strings.Contains(media.StoredName, "..") || strings.Contains(media.StoredName, "proof") {
		t.Fatalf("upload path was not isolated: %+v", media)
	}
	privateResponse, err := http.Get(fixture.server.URL + "/media/" + media.ID + "/original")
	if err != nil {
		t.Fatal(err)
	}
	privateResponse.Body.Close()
	if privateResponse.StatusCode != http.StatusNotFound {
		t.Fatalf("private media returned %d before publish", privateResponse.StatusCode)
	}

	content.Projects[0].MediaIDs = []string{media.ID}
	fixture.updateDraft(t, content, versionAfterSummary, http.StatusOK)
	fixture.publish(t, "验收原子发布与媒体引用")
	if !strings.Contains(getBody(t, fixture.server.URL+"/"), marker) {
		t.Fatal("published content did not become public")
	}
	publishedMedia, err := fixture.store.GetMedia(context.Background(), media.ID)
	if err != nil || publishedMedia.Status != "published" {
		t.Fatalf("referenced media was not published: status=%q err=%v", publishedMedia.Status, err)
	}
	rangeRequest, _ := http.NewRequest(http.MethodGet, fixture.server.URL+"/media/"+media.ID+"/original", nil)
	rangeRequest.Header.Set("Range", "bytes=0-7")
	rangeResponse, err := http.DefaultClient.Do(rangeRequest)
	if err != nil {
		t.Fatal(err)
	}
	rangeBody, _ := io.ReadAll(rangeResponse.Body)
	rangeResponse.Body.Close()
	if rangeResponse.StatusCode != http.StatusPartialContent || len(rangeBody) != 8 || !strings.HasPrefix(rangeResponse.Header.Get("Content-Range"), "bytes 0-7/") {
		t.Fatalf("range response invalid: status=%d length=%d range=%q", rangeResponse.StatusCode, len(rangeBody), rangeResponse.Header.Get("Content-Range"))
	}

	deleteRequest, _ := http.NewRequest(http.MethodDelete, fixture.server.URL+"/api/admin/media/"+media.ID, nil)
	protectMutation(deleteRequest, fixture.cookie, fixture.csrf, fixture.baseURL)
	deleteResponse, err := http.DefaultClient.Do(deleteRequest)
	if err != nil {
		t.Fatal(err)
	}
	deleteResponse.Body.Close()
	if deleteResponse.StatusCode != http.StatusConflict {
		t.Fatalf("referenced media deletion returned %d", deleteResponse.StatusCode)
	}

	revisionsRequest, _ := http.NewRequest(http.MethodGet, fixture.server.URL+"/api/admin/revisions", nil)
	revisionsRequest.AddCookie(fixture.cookie)
	revisionsResponse, err := http.DefaultClient.Do(revisionsRequest)
	if err != nil {
		t.Fatal(err)
	}
	var revisions struct {
		Items []store.Revision `json:"revisions"`
	}
	if err := json.NewDecoder(revisionsResponse.Body).Decode(&revisions); err != nil {
		t.Fatal(err)
	}
	revisionsResponse.Body.Close()
	var initialRevisionID string
	for _, revision := range revisions.Items {
		if !revision.Active {
			initialRevisionID = revision.ID
		}
	}
	if initialRevisionID == "" {
		t.Fatal("initial immutable revision was not listed")
	}
	restore := jsonRequest(t, http.MethodPost, fixture.server.URL+"/api/admin/revisions/"+initialRevisionID+"/restore", map[string]any{})
	protectMutation(restore, fixture.cookie, fixture.csrf, fixture.baseURL)
	restoreResponse, err := http.DefaultClient.Do(restore)
	if err != nil {
		t.Fatal(err)
	}
	restoreResponse.Body.Close()
	if restoreResponse.StatusCode != http.StatusOK {
		t.Fatalf("revision restore returned %d", restoreResponse.StatusCode)
	}
	restored, _ := fixture.draft(t)
	if restored.Profile.Summary.ZH != originalSummary {
		t.Fatal("revision did not restore the original draft")
	}
	if !strings.Contains(getBody(t, fixture.server.URL+"/"), marker) {
		t.Fatal("restoring a revision changed the public page before publish")
	}
	fixture.publish(t, "验收历史版本重新发布")
	if strings.Contains(getBody(t, fixture.server.URL+"/"), marker) {
		t.Fatal("restored revision was not published atomically")
	}
}

func TestUploadLimitsTypesQuotaAndCSRF(t *testing.T) {
	fixture := newAdminFixture(t)
	png := append([]byte("\x89PNG\r\n\x1a\n"), make([]byte, 64)...)
	invalidKind := multipartRequest(t, http.MethodPost, fixture.server.URL+"/api/admin/media?kind=archive", "image.png", png)
	protectMutation(invalidKind, fixture.cookie, fixture.csrf, fixture.baseURL)
	assertResponseStatus(t, invalidKind, http.StatusBadRequest)

	mismatch := multipartRequest(t, http.MethodPost, fixture.server.URL+"/api/admin/media?kind=video", "image.png", png)
	protectMutation(mismatch, fixture.cookie, fixture.csrf, fixture.baseURL)
	assertResponseStatus(t, mismatch, http.StatusUnsupportedMediaType)

	badPDF := multipartRequest(t, http.MethodPost, fixture.server.URL+"/api/admin/document", "resume.pdf", []byte("not a pdf"))
	protectMutation(badPDF, fixture.cookie, fixture.csrf, fixture.baseURL)
	assertResponseStatus(t, badPDF, http.StatusUnsupportedMediaType)

	oversized := make([]byte, (15<<20)+1)
	copy(oversized, png[:8])
	largeUpload := multipartRequest(t, http.MethodPost, fixture.server.URL+"/api/admin/media?kind=image", "large.png", oversized)
	protectMutation(largeUpload, fixture.cookie, fixture.csrf, fixture.baseURL)
	assertResponseStatus(t, largeUpload, http.StatusRequestEntityTooLarge)

	mp4 := []byte{0, 0, 0, 24, 'f', 't', 'y', 'p', 'i', 's', 'o', 'm', 0, 0, 0, 0, 'i', 's', 'o', 'm'}
	videoUpload := multipartRequest(t, http.MethodPost, fixture.server.URL+"/api/admin/media?kind=video", "clip.mp4", mp4)
	protectMutation(videoUpload, fixture.cookie, fixture.csrf, fixture.baseURL)
	videoResponse, err := http.DefaultClient.Do(videoUpload)
	if err != nil {
		t.Fatal(err)
	}
	if videoResponse.StatusCode != http.StatusCreated {
		body, _ := io.ReadAll(videoResponse.Body)
		videoResponse.Body.Close()
		t.Fatalf("MP4 upload returned %d: %s", videoResponse.StatusCode, body)
	}
	var video store.MediaAsset
	if err := json.NewDecoder(videoResponse.Body).Decode(&video); err != nil {
		t.Fatal(err)
	}
	videoResponse.Body.Close()
	if video.MIMEType != "video/mp4" || video.Kind != "video" {
		t.Fatalf("MP4 was misclassified: %+v", video)
	}
	removeVideo, _ := http.NewRequest(http.MethodDelete, fixture.server.URL+"/api/admin/media/"+video.ID, nil)
	protectMutation(removeVideo, fixture.cookie, fixture.csrf, fixture.baseURL)
	assertResponseStatus(t, removeVideo, http.StatusNoContent)

	quotaAsset := store.MediaAsset{ID: "med_quota", Kind: "video", OriginalName: "quota.mp4", StoredName: "quota.mp4", MIMEType: "video/mp4", Size: maxMediaQuota, Status: "private", VariantsJSON: "{}", CreatedAt: time.Now().UTC()}
	if err := fixture.store.AddMedia(context.Background(), quotaAsset); err != nil {
		t.Fatal(err)
	}
	quotaUpload := multipartRequest(t, http.MethodPost, fixture.server.URL+"/api/admin/media?kind=image", "small.png", png)
	protectMutation(quotaUpload, fixture.cookie, fixture.csrf, fixture.baseURL)
	assertResponseStatus(t, quotaUpload, http.StatusRequestEntityTooLarge)

	content, version := fixture.draft(t)
	missingCSRF := jsonRequest(t, http.MethodPut, fixture.server.URL+"/api/admin/content", map[string]any{"content": content, "version": version})
	missingCSRF.Header.Set("Origin", fixture.baseURL)
	missingCSRF.AddCookie(fixture.cookie)
	assertResponseStatus(t, missingCSRF, http.StatusForbidden)
}

func TestDocumentReplacementAndRangeDownload(t *testing.T) {
	fixture := newAdminFixture(t)
	firstPDF := []byte("%PDF-1.4\nfirst private resume\n%%EOF")
	secondPDF := []byte("%PDF-1.4\nsecond private resume\n%%EOF")
	for _, item := range []struct {
		name string
		body []byte
	}{{"first.pdf", firstPDF}, {"second.pdf", secondPDF}} {
		request := multipartRequest(t, http.MethodPost, fixture.server.URL+"/api/admin/document", item.name, item.body)
		protectMutation(request, fixture.cookie, fixture.csrf, fixture.baseURL)
		assertResponseStatus(t, request, http.StatusCreated)
	}
	response, err := http.Get(fixture.server.URL + "/resume.pdf")
	if err != nil {
		t.Fatal(err)
	}
	body, _ := io.ReadAll(response.Body)
	response.Body.Close()
	if response.StatusCode != http.StatusOK || !bytes.Equal(body, secondPDF) || response.Header.Get("Content-Type") != "application/pdf" {
		t.Fatalf("active resume mismatch: status=%d type=%q body=%q", response.StatusCode, response.Header.Get("Content-Type"), body)
	}
	rangeRequest, _ := http.NewRequest(http.MethodGet, fixture.server.URL+"/resume.pdf", nil)
	rangeRequest.Header.Set("Range", "bytes=0-7")
	rangeResponse, err := http.DefaultClient.Do(rangeRequest)
	if err != nil {
		t.Fatal(err)
	}
	rangeBody, _ := io.ReadAll(rangeResponse.Body)
	rangeResponse.Body.Close()
	if rangeResponse.StatusCode != http.StatusPartialContent || !bytes.Equal(rangeBody, secondPDF[:8]) {
		t.Fatalf("resume range response invalid: status=%d body=%q", rangeResponse.StatusCode, rangeBody)
	}
}

func TestLoginRateLimit(t *testing.T) {
	fixture := newAdminFixture(t)
	for attempt := 1; attempt <= 6; attempt++ {
		request := jsonRequest(t, http.MethodPost, fixture.server.URL+"/api/admin/session", map[string]string{"username": "admin", "password": "wrong-password"})
		request.Header.Set("Origin", fixture.baseURL)
		request.Header.Set("X-Forwarded-For", "198.51.100.44")
		response, err := http.DefaultClient.Do(request)
		if err != nil {
			t.Fatal(err)
		}
		response.Body.Close()
		if attempt <= 5 && response.StatusCode != http.StatusUnauthorized {
			t.Fatalf("attempt %d returned %d", attempt, response.StatusCode)
		}
		if attempt == 6 {
			if response.StatusCode != http.StatusTooManyRequests || response.Header.Get("Retry-After") != "900" {
				t.Fatalf("rate limit returned status=%d retry=%q", response.StatusCode, response.Header.Get("Retry-After"))
			}
		}
	}
}

func TestSafeJoinConfinesUntrustedNames(t *testing.T) {
	root := t.TempDir()
	target, err := safeJoin(root, "../../outside.png")
	if err != nil {
		t.Fatal(err)
	}
	if filepath.Dir(target) != root || filepath.Base(target) != "outside.png" {
		t.Fatalf("safeJoin escaped its root: %s", target)
	}
}

func TestDetectSupportedFileMagic(t *testing.T) {
	tests := []struct {
		name      string
		header    []byte
		mimeType  string
		extension string
		kind      string
	}{
		{"PNG", []byte("\x89PNG\r\n\x1a\n"), "image/png", ".png", "image"},
		{"JPEG", []byte{0xff, 0xd8, 0xff}, "image/jpeg", ".jpg", "image"},
		{"WebP", []byte("RIFF\x00\x00\x00\x00WEBP"), "image/webp", ".webp", "image"},
		{"AVIF", []byte{0, 0, 0, 24, 'f', 't', 'y', 'p', 'a', 'v', 'i', 'f'}, "image/avif", ".avif", "image"},
		{"MP4", []byte{0, 0, 0, 24, 'f', 't', 'y', 'p', 'i', 's', 'o', 'm'}, "video/mp4", ".mp4", "video"},
		{"MOV", []byte{0, 0, 0, 24, 'f', 't', 'y', 'p', 'q', 't', ' ', ' '}, "video/quicktime", ".mov", "video"},
		{"WebM", []byte{0x1a, 0x45, 0xdf, 0xa3}, "video/webm", ".webm", "video"},
		{"PDF", []byte("%PDF-1.7"), "application/pdf", ".pdf", "document"},
	}
	for _, test := range tests {
		t.Run(test.name, func(t *testing.T) {
			detected, err := detectFile(test.header)
			if err != nil {
				t.Fatal(err)
			}
			if detected.MIME != test.mimeType || detected.Extension != test.extension || detected.Kind != test.kind {
				t.Fatalf("unexpected detection: %+v", detected)
			}
		})
	}
}

func getBody(t *testing.T, url string) string {
	t.Helper()
	response, err := http.Get(url)
	if err != nil {
		t.Fatal(err)
	}
	defer response.Body.Close()
	body, _ := io.ReadAll(response.Body)
	if response.StatusCode != http.StatusOK {
		t.Fatalf("GET %s returned %d", url, response.StatusCode)
	}
	return string(body)
}

func assertResponseStatus(t *testing.T, request *http.Request, expected int) {
	t.Helper()
	response, err := http.DefaultClient.Do(request)
	if err != nil {
		t.Fatal(err)
	}
	defer response.Body.Close()
	if response.StatusCode != expected {
		body, _ := io.ReadAll(response.Body)
		t.Fatalf("%s %s returned %d, want %d: %s", request.Method, request.URL, response.StatusCode, expected, body)
	}
}
