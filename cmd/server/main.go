package main

import (
	"context"
	"errors"
	"log/slog"
	"net/http"
	"os"
	"os/signal"
	"path/filepath"
	"syscall"
	"time"

	"github.com/xingxing7290/zhoujinxin-portfolio/internal/app"
	"github.com/xingxing7290/zhoujinxin-portfolio/internal/security"
	"github.com/xingxing7290/zhoujinxin-portfolio/internal/seed"
	portfolioserver "github.com/xingxing7290/zhoujinxin-portfolio/internal/server"
	"github.com/xingxing7290/zhoujinxin-portfolio/internal/store"
)

func main() {
	logger := slog.New(slog.NewJSONHandler(os.Stdout, &slog.HandlerOptions{Level: slog.LevelInfo}))
	config, err := app.LoadConfig()
	if err != nil {
		logger.Error("invalid configuration", "error", err)
		os.Exit(1)
	}
	dataStore, err := store.Open(filepath.Join(config.DataDir, "portfolio.sqlite"))
	if err != nil {
		logger.Error("open store", "error", err)
		os.Exit(1)
	}
	defer dataStore.Close()
	passwordHash, err := security.HashPassword(config.AdminInitialPassword)
	if err != nil {
		logger.Error("invalid initial administrator password", "error", err)
		os.Exit(1)
	}
	if err := dataStore.EnsureSeed(context.Background(), seed.Content, config.AdminUsername, passwordHash); err != nil {
		logger.Error("seed store", "error", err)
		os.Exit(1)
	}
	handler, err := portfolioserver.New(config, dataStore, logger)
	if err != nil {
		logger.Error("initialize server", "error", err)
		os.Exit(1)
	}
	httpServer := &http.Server{
		Addr:              ":" + config.Port,
		Handler:           handler.Handler(),
		ReadHeaderTimeout: 5 * time.Second,
		ReadTimeout:       30 * time.Second,
		WriteTimeout:      5 * time.Minute,
		IdleTimeout:       90 * time.Second,
		MaxHeaderBytes:    1 << 20,
	}
	go func() {
		logger.Info("portfolio listening", "address", httpServer.Addr, "base_url", config.BaseURL)
		if err := httpServer.ListenAndServe(); err != nil && !errors.Is(err, http.ErrServerClosed) {
			logger.Error("serve", "error", err)
			os.Exit(1)
		}
	}()
	stop := make(chan os.Signal, 1)
	signal.Notify(stop, syscall.SIGINT, syscall.SIGTERM)
	<-stop
	ctx, cancel := context.WithTimeout(context.Background(), 15*time.Second)
	defer cancel()
	if err := httpServer.Shutdown(ctx); err != nil {
		logger.Error("shutdown", "error", err)
	}
}
