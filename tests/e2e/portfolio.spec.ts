import { expect, test } from "@playwright/test";

test("Chinese home exposes content before motion code", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/周金鑫/);
  await expect(page.getByRole("heading", { name: "周金鑫", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "精选项目" })).toBeVisible();
  await expect(page.locator("body")).not.toContainText(/1[3-9][0-9]{9}/);
  await expect(page.getByRole("link", { name: /物联网集中控制平台/ })).toBeVisible();
});

test("English route and project detail are localized", async ({ page }) => {
  await page.goto("/en");
  await expect(page.getByRole("heading", { name: "Selected projects" })).toBeVisible();
  await page.locator('a[href="/en/projects/iot-control-platform"]').click();
  await expect(page).toHaveURL(/\/en\/projects\/iot-control-platform/);
  await expect(page.getByRole("heading", { name: "Background" })).toBeVisible();
});

test("keyboard navigation and reduced-motion fallback remain usable", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "跳到主要内容" })).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("html")).toHaveClass(/motion-lite/);
});

test("admin enforces first-login password change", async ({ page }) => {
  await page.goto("/admin");
  await page.getByLabel("用户名").fill("admin");
  await page.getByLabel("密码").fill("E2E-Temporary-Portfolio-2026!");
  await page.getByRole("button", { name: "安全登录" }).click();
  await expect(page.getByRole("heading", { name: "首次修改密码" })).toBeVisible();
});

test("unknown project returns an accessible 404", async ({ page }) => {
  const response = await page.goto("/projects/not-a-project");
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { name: "信号已丢失。" })).toBeVisible();
});
