package app

import (
	"fmt"
	"os"
	"path/filepath"
	"strconv"
	"strings"
)

type Config struct {
	Port                 string
	BaseURL              string
	DataDir              string
	AdminUsername        string
	AdminInitialPassword string
	SecureCookies        bool
}

func LoadConfig() (Config, error) {
	config := Config{
		Port:                 env("PORT", "8080"),
		BaseURL:              strings.TrimRight(env("BASE_URL", "http://localhost:8080"), "/"),
		DataDir:              env("DATA_DIR", "./data"),
		AdminUsername:        env("ADMIN_USERNAME", "admin"),
		AdminInitialPassword: os.Getenv("ADMIN_INITIAL_PASSWORD"),
	}
	secure, err := strconv.ParseBool(env("SECURE_COOKIES", "true"))
	if err != nil {
		return Config{}, fmt.Errorf("SECURE_COOKIES: %w", err)
	}
	config.SecureCookies = secure
	if config.AdminInitialPassword == "" {
		return Config{}, fmt.Errorf("ADMIN_INITIAL_PASSWORD is required")
	}
	abs, err := filepath.Abs(config.DataDir)
	if err != nil {
		return Config{}, err
	}
	config.DataDir = abs
	return config, nil
}

func env(key, fallback string) string {
	if value := strings.TrimSpace(os.Getenv(key)); value != "" {
		return value
	}
	return fallback
}
