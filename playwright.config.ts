import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "tests/e2e",
  timeout: 30_000,
  expect: { timeout: 8_000 },
  fullyParallel: false,
  workers: 1,
  reporter: [["list"], ["html", { open: "never" }]],
  use: {
    baseURL: "http://127.0.0.1:8098",
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
  },
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
    { name: "mobile", use: { ...devices["iPhone 13"], browserName: "chromium", reducedMotion: "reduce" } },
  ],
  webServer: {
    command: "go run ./cmd/server",
    url: "http://127.0.0.1:8098/api/health",
    reuseExistingServer: true,
    timeout: 120_000,
    env: {
      PORT: "8098",
      BASE_URL: "http://127.0.0.1:8098",
      DATA_DIR: "./data/e2e",
      ADMIN_USERNAME: "admin",
      ADMIN_INITIAL_PASSWORD: "E2E-Temporary-Portfolio-2026!",
      SECURE_COOKIES: "false",
    },
  },
});
