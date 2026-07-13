package main

import (
	"bufio"
	"context"
	"errors"
	"fmt"
	"io"
	"os"
	"path/filepath"
	"time"

	"github.com/xingxing7290/zhoujinxin-portfolio/internal/security"
	"github.com/xingxing7290/zhoujinxin-portfolio/internal/store"
)

const maxPDFSize = int64(25 << 20)

func main() {
	if len(os.Args) != 2 {
		fatal(errors.New("usage: portfolio-import-document /app/data/inbox/resume.pdf"))
	}
	dataDir := os.Getenv("DATA_DIR")
	if dataDir == "" {
		dataDir = "/app/data"
	}
	sourcePath := filepath.Clean(os.Args[1])
	source, err := os.Open(sourcePath)
	if err != nil {
		fatal(err)
	}
	defer source.Close()
	info, err := source.Stat()
	if err != nil {
		fatal(err)
	}
	if info.Size() <= 5 || info.Size() > maxPDFSize {
		fatal(errors.New("PDF must be between 6 bytes and 25MB"))
	}
	reader := bufio.NewReader(source)
	header, err := reader.Peek(5)
	if err != nil || string(header) != "%PDF-" {
		fatal(errors.New("document content is not a PDF"))
	}
	documentDir := filepath.Join(dataDir, "documents")
	if err := os.MkdirAll(documentDir, 0o750); err != nil {
		fatal(err)
	}
	token, err := security.RandomToken(12)
	if err != nil {
		fatal(err)
	}
	storedName := "doc_" + token + ".pdf"
	targetPath := filepath.Join(documentDir, storedName)
	target, err := os.OpenFile(targetPath, os.O_CREATE|os.O_EXCL|os.O_WRONLY, 0o640)
	if err != nil {
		fatal(err)
	}
	written, copyErr := io.Copy(target, io.LimitReader(reader, maxPDFSize+1))
	closeErr := target.Close()
	if copyErr != nil || closeErr != nil || written != info.Size() {
		_ = os.Remove(targetPath)
		fatal(errors.New("failed to copy complete PDF into document storage"))
	}
	dataStore, err := store.Open(filepath.Join(dataDir, "portfolio.sqlite"))
	if err != nil {
		_ = os.Remove(targetPath)
		fatal(err)
	}
	defer dataStore.Close()
	document := store.DocumentAsset{
		ID:           "doc_" + token,
		OriginalName: filepath.Base(sourcePath),
		StoredName:   storedName,
		MIMEType:     "application/pdf",
		Size:         written,
		Active:       true,
		CreatedAt:    time.Now().UTC(),
	}
	if err := dataStore.AddDocument(context.Background(), document); err != nil {
		_ = os.Remove(targetPath)
		fatal(err)
	}
	fmt.Printf("document imported: %s (%d bytes)\n", document.ID, document.Size)
}

func fatal(err error) {
	fmt.Fprintln(os.Stderr, err)
	os.Exit(1)
}
