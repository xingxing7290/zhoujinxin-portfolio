package main

import (
	"context"
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
	"strings"

	"github.com/xingxing7290/zhoujinxin-portfolio/internal/model"
	"github.com/xingxing7290/zhoujinxin-portfolio/internal/seed"
	"github.com/xingxing7290/zhoujinxin-portfolio/internal/store"
)

func main() {
	note := "发布仓库中的简历内容"
	if len(os.Args) > 1 && strings.TrimSpace(os.Args[1]) != "" {
		note = strings.TrimSpace(os.Args[1])
	}
	dataDir := strings.TrimSpace(os.Getenv("DATA_DIR"))
	if dataDir == "" {
		dataDir = "/app/data"
	}

	var content model.SiteContent
	if err := json.Unmarshal(seed.Content, &content); err != nil {
		fatal(fmt.Errorf("decode seed content: %w", err))
	}
	content.Normalize()
	if err := content.Validate(); err != nil {
		fatal(fmt.Errorf("validate seed content: %w", err))
	}
	raw, err := json.Marshal(content)
	if err != nil {
		fatal(fmt.Errorf("encode seed content: %w", err))
	}

	dataStore, err := store.Open(filepath.Join(dataDir, "portfolio.sqlite"))
	if err != nil {
		fatal(err)
	}
	defer dataStore.Close()
	ctx := context.Background()
	_, version, err := dataStore.GetDraft(ctx)
	if err != nil {
		fatal(fmt.Errorf("read draft: %w", err))
	}
	nextVersion, err := dataStore.UpdateDraft(ctx, raw, version)
	if err != nil {
		fatal(fmt.Errorf("update draft: %w", err))
	}
	revision, err := dataStore.Publish(ctx, raw, note, content.ReferencedMediaIDs())
	if err != nil {
		fatal(fmt.Errorf("publish content: %w", err))
	}
	fmt.Printf("content published: revision=%s draft_version=%d\n", revision.ID, nextVersion)
}

func fatal(err error) {
	fmt.Fprintln(os.Stderr, err)
	os.Exit(1)
}
