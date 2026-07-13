package server

import (
	"bytes"
	"context"
	"database/sql"
	"encoding/binary"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"mime/multipart"
	"net/http"
	"os"
	"os/exec"
	"path/filepath"
	"strings"
	"time"

	"github.com/xingxing7290/zhoujinxin-portfolio/internal/security"
	"github.com/xingxing7290/zhoujinxin-portfolio/internal/store"
)

type detectedFile struct {
	MIME      string
	Extension string
	Kind      string
}

func (s *Server) listMedia(w http.ResponseWriter, r *http.Request) {
	items, err := s.store.ListMedia(r.Context())
	if err != nil {
		writeError(w, http.StatusInternalServerError, "无法读取媒体库")
		return
	}
	usage, _ := s.store.MediaUsage(r.Context())
	writeJSON(w, http.StatusOK, map[string]any{"media": items, "usage": usage, "quota": maxMediaQuota})
}

func (s *Server) uploadMedia(w http.ResponseWriter, r *http.Request) {
	kind := r.URL.Query().Get("kind")
	if kind != "image" && kind != "video" {
		writeError(w, http.StatusBadRequest, "kind 必须是 image 或 video")
		return
	}
	limit := int64(15 << 20)
	if kind == "video" {
		limit = 150 << 20
	}
	usage, err := s.store.MediaUsage(r.Context())
	if err != nil {
		writeError(w, http.StatusInternalServerError, "无法读取媒体配额")
		return
	}
	if usage >= maxMediaQuota {
		writeError(w, http.StatusRequestEntityTooLarge, "媒体库已达到 2GB 配额")
		return
	}
	header, reader, err := multipartFile(r, limit)
	if err != nil {
		writeError(w, http.StatusBadRequest, err.Error())
		return
	}
	defer reader.Close()
	mediaDir := filepath.Join(s.config.DataDir, "media")
	if err := os.MkdirAll(mediaDir, 0o750); err != nil {
		writeError(w, http.StatusInternalServerError, "无法创建媒体目录")
		return
	}
	temp, err := os.CreateTemp(mediaDir, ".upload-*")
	if err != nil {
		writeError(w, http.StatusInternalServerError, "无法创建临时文件")
		return
	}
	tempName := temp.Name()
	defer os.Remove(tempName)
	written, detected, err := streamAndDetect(temp, reader, limit, kind)
	closeErr := temp.Close()
	if err != nil {
		writeError(w, http.StatusUnsupportedMediaType, err.Error())
		return
	}
	if closeErr != nil {
		writeError(w, http.StatusInternalServerError, "无法保存媒体")
		return
	}
	if usage+written > maxMediaQuota {
		writeError(w, http.StatusRequestEntityTooLarge, "上传后将超过 2GB 媒体配额")
		return
	}
	if detected.MIME == "video/quicktime" {
		remuxed, remuxedSize, err := remuxMOV(r.Context(), tempName, mediaDir)
		if err != nil {
			writeError(w, http.StatusUnprocessableEntity, err.Error())
			return
		}
		_ = os.Remove(tempName)
		tempName = remuxed
		written = remuxedSize
		detected = detectedFile{MIME: "video/mp4", Extension: ".mp4", Kind: "video"}
	}
	idToken, _ := security.RandomToken(12)
	id := "med_" + idToken
	storedName := id + detected.Extension
	target, _ := safeJoin(mediaDir, storedName)
	if err := os.Rename(tempName, target); err != nil {
		writeError(w, http.StatusInternalServerError, "无法提交媒体文件")
		return
	}
	asset := store.MediaAsset{ID: id, Kind: kind, OriginalName: filepath.Base(header.Filename), StoredName: storedName, MIMEType: detected.MIME, Size: written, Status: "private", VariantsJSON: "{}", CreatedAt: time.Now().UTC()}
	if err := s.store.AddMedia(r.Context(), asset); err != nil {
		_ = os.Remove(target)
		writeError(w, http.StatusInternalServerError, "无法登记媒体文件")
		return
	}
	writeJSON(w, http.StatusCreated, asset)
}

func (s *Server) deleteMedia(w http.ResponseWriter, r *http.Request) {
	id := r.PathValue("id")
	asset, err := s.store.GetMedia(r.Context(), id)
	if errors.Is(err, sql.ErrNoRows) {
		writeError(w, http.StatusNotFound, "媒体不存在")
		return
	}
	if err != nil {
		writeError(w, http.StatusInternalServerError, "无法读取媒体")
		return
	}
	referenced, err := s.store.MediaReferenced(r.Context(), id)
	if err != nil {
		writeError(w, http.StatusInternalServerError, "无法校验媒体引用")
		return
	}
	if referenced {
		writeError(w, http.StatusConflict, "该媒体已被发布版本引用，不能直接删除")
		return
	}
	if err := s.store.DeleteMedia(r.Context(), id); err != nil {
		writeError(w, http.StatusInternalServerError, "无法删除媒体")
		return
	}
	path, _ := safeJoin(filepath.Join(s.config.DataDir, "media"), asset.StoredName)
	_ = os.Remove(path)
	var variants map[string]struct {
		StoredName string `json:"storedName"`
	}
	_ = json.Unmarshal([]byte(asset.VariantsJSON), &variants)
	for _, variant := range variants {
		path, _ := safeJoin(filepath.Join(s.config.DataDir, "media"), variant.StoredName)
		_ = os.Remove(path)
	}
	w.WriteHeader(http.StatusNoContent)
}

func (s *Server) uploadDocument(w http.ResponseWriter, r *http.Request) {
	header, reader, err := multipartFile(r, 25<<20)
	if err != nil {
		writeError(w, http.StatusBadRequest, err.Error())
		return
	}
	defer reader.Close()
	docDir := filepath.Join(s.config.DataDir, "documents")
	if err := os.MkdirAll(docDir, 0o750); err != nil {
		writeError(w, http.StatusInternalServerError, "无法创建文档目录")
		return
	}
	temp, err := os.CreateTemp(docDir, ".upload-*")
	if err != nil {
		writeError(w, http.StatusInternalServerError, "无法创建临时文件")
		return
	}
	tempName := temp.Name()
	defer os.Remove(tempName)
	written, detected, err := streamAndDetect(temp, reader, 25<<20, "document")
	closeErr := temp.Close()
	if err != nil || detected.MIME != "application/pdf" {
		writeError(w, http.StatusUnsupportedMediaType, "仅支持真实的 PDF 文件")
		return
	}
	if closeErr != nil {
		writeError(w, http.StatusInternalServerError, "无法保存简历")
		return
	}
	idToken, _ := security.RandomToken(12)
	id := "doc_" + idToken
	storedName := id + ".pdf"
	target, _ := safeJoin(docDir, storedName)
	if err := os.Rename(tempName, target); err != nil {
		writeError(w, http.StatusInternalServerError, "无法提交简历文件")
		return
	}
	document := store.DocumentAsset{ID: id, OriginalName: filepath.Base(header.Filename), StoredName: storedName, MIMEType: detected.MIME, Size: written, Active: true, CreatedAt: time.Now().UTC()}
	if err := s.store.AddDocument(r.Context(), document); err != nil {
		_ = os.Remove(target)
		writeError(w, http.StatusInternalServerError, "无法登记简历文件")
		return
	}
	writeJSON(w, http.StatusCreated, document)
}

func multipartFile(r *http.Request, limit int64) (*multipart.FileHeader, multipart.File, error) {
	r.Body = http.MaxBytesReader(nil, r.Body, limit+1<<20)
	reader, err := r.MultipartReader()
	if err != nil {
		return nil, nil, errors.New("请求必须使用 multipart/form-data")
	}
	for {
		part, err := reader.NextPart()
		if errors.Is(err, io.EOF) {
			return nil, nil, errors.New("缺少 file 字段")
		}
		if err != nil {
			return nil, nil, errors.New("无法读取上传内容")
		}
		if part.FormName() != "file" {
			part.Close()
			continue
		}
		header := &multipart.FileHeader{Filename: filepath.Base(part.FileName()), Header: part.Header}
		return header, multipartPart{Part: part}, nil
	}
}

type multipartPart struct{ *multipart.Part }

func (m multipartPart) Read(p []byte) (int, error)            { return m.Part.Read(p) }
func (m multipartPart) ReadAt(_ []byte, _ int64) (int, error) { return 0, errors.New("unsupported") }
func (m multipartPart) Seek(_ int64, _ int) (int64, error)    { return 0, errors.New("unsupported") }

func streamAndDetect(destination *os.File, source io.Reader, limit int64, expectedKind string) (int64, detectedFile, error) {
	header := make([]byte, 512)
	read, err := io.ReadFull(source, header)
	if err != nil && !errors.Is(err, io.ErrUnexpectedEOF) {
		return 0, detectedFile{}, errors.New("文件内容为空或无法读取")
	}
	header = header[:read]
	detected, err := detectFile(header)
	if err != nil {
		return 0, detectedFile{}, err
	}
	if detected.Kind != expectedKind {
		return 0, detectedFile{}, fmt.Errorf("文件内容与 %s 类型不匹配", expectedKind)
	}
	written, err := io.Copy(destination, io.LimitReader(io.MultiReader(bytes.NewReader(header), source), limit+1))
	if err != nil {
		return 0, detectedFile{}, errors.New("写入上传文件失败")
	}
	if written > limit {
		return 0, detectedFile{}, fmt.Errorf("文件超过 %dMB 限制", limit>>20)
	}
	return written, detected, nil
}

func detectFile(header []byte) (detectedFile, error) {
	if len(header) >= 8 && bytes.Equal(header[:8], []byte("\x89PNG\r\n\x1a\n")) {
		return detectedFile{"image/png", ".png", "image"}, nil
	}
	if len(header) >= 3 && bytes.Equal(header[:3], []byte{0xff, 0xd8, 0xff}) {
		return detectedFile{"image/jpeg", ".jpg", "image"}, nil
	}
	if len(header) >= 12 && string(header[:4]) == "RIFF" && string(header[8:12]) == "WEBP" {
		return detectedFile{"image/webp", ".webp", "image"}, nil
	}
	if isISOBaseMedia(header) {
		brand := string(header[8:12])
		if brand == "avif" || brand == "avis" {
			return detectedFile{"image/avif", ".avif", "image"}, nil
		}
		if brand == "qt  " {
			return detectedFile{"video/quicktime", ".mov", "video"}, nil
		}
		return detectedFile{"video/mp4", ".mp4", "video"}, nil
	}
	if len(header) >= 4 && bytes.Equal(header[:4], []byte{0x1a, 0x45, 0xdf, 0xa3}) {
		return detectedFile{"video/webm", ".webm", "video"}, nil
	}
	if len(header) >= 5 && string(header[:5]) == "%PDF-" {
		return detectedFile{"application/pdf", ".pdf", "document"}, nil
	}
	return detectedFile{}, errors.New("不支持的文件内容；扩展名不能代替真实格式")
}

func isISOBaseMedia(header []byte) bool {
	if len(header) < 12 || string(header[4:8]) != "ftyp" {
		return false
	}
	size := binary.BigEndian.Uint32(header[:4])
	return size >= 8
}

func remuxMOV(parent context.Context, input, directory string) (string, int64, error) {
	ffmpeg, err := exec.LookPath("ffmpeg")
	if err != nil {
		return "", 0, errors.New("MOV 需要服务器提供 ffmpeg 以无损封装为 MP4")
	}
	outputFile, err := os.CreateTemp(directory, ".remux-*.mp4")
	if err != nil {
		return "", 0, errors.New("无法创建 MOV 封装文件")
	}
	output := outputFile.Name()
	_ = outputFile.Close()
	_ = os.Remove(output)
	ctx, cancel := context.WithTimeout(parent, 9*time.Minute)
	defer cancel()
	command := exec.CommandContext(ctx, ffmpeg, "-v", "error", "-i", input, "-map", "0:v:0", "-map", "0:a?", "-c", "copy", "-movflags", "+faststart", "-y", output)
	result, err := command.CombinedOutput()
	if ctx.Err() == context.DeadlineExceeded {
		_ = os.Remove(output)
		return "", 0, errors.New("MOV 无损封装超过 9 分钟，已主动终止")
	}
	if err != nil {
		_ = os.Remove(output)
		message := strings.TrimSpace(string(result))
		if len(message) > 400 {
			message = message[:400]
		}
		return "", 0, fmt.Errorf("MOV 无法无损封装为浏览器兼容 MP4：%s", message)
	}
	info, err := os.Stat(output)
	if err != nil {
		_ = os.Remove(output)
		return "", 0, errors.New("无法读取封装后的 MP4")
	}
	return output, info.Size(), nil
}
