package main

import (
	"context"
	"fmt"
	"os"
	"path/filepath"
	"time"

	"github.com/xingxing7290/zhoujinxin-portfolio/internal/store"
)

func main() {
	dataDir := env("DATA_DIR", "/app/data")
	destination := os.Getenv("BACKUP_DEST")
	if destination == "" {
		destination = filepath.Join(dataDir, "backups", "portfolio-"+time.Now().UTC().Format("20060102T150405Z")+".sqlite")
	}
	dataStore, err := store.Open(filepath.Join(dataDir, "portfolio.sqlite"))
	if err != nil {
		fatal(err)
	}
	defer dataStore.Close()
	ctx, cancel := context.WithTimeout(context.Background(), 2*time.Minute)
	defer cancel()
	if err := dataStore.Backup(ctx, destination); err != nil {
		fatal(err)
	}
	fmt.Println(destination)
}

func env(key, fallback string) string {
	if value := os.Getenv(key); value != "" {
		return value
	}
	return fallback
}

func fatal(err error) {
	fmt.Fprintln(os.Stderr, err)
	os.Exit(1)
}
