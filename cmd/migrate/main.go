package main

import (
	"fmt"
	"os"
	"path/filepath"

	"github.com/xingxing7290/zhoujinxin-portfolio/internal/store"
)

func main() {
	dataDir := os.Getenv("DATA_DIR")
	if dataDir == "" {
		dataDir = "/app/data"
	}
	dataStore, err := store.Open(filepath.Join(dataDir, "portfolio.sqlite"))
	if err != nil {
		fmt.Fprintln(os.Stderr, err)
		os.Exit(1)
	}
	if err := dataStore.Close(); err != nil {
		fmt.Fprintln(os.Stderr, err)
		os.Exit(1)
	}
	fmt.Println("database migration complete")
}
