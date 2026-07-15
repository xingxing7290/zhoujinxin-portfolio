import { expect, test } from "@playwright/test";

test("Chinese home exposes content before motion code", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/周金鑫/);
  await expect(page.getByRole("heading", { name: "周金鑫", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "精选项目" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "让设备通信从“能连上”，走向“可验证、可交付”。" })).toBeVisible();
  await expect(page.locator("body")).not.toContainText(/1[3-9][0-9]{9}/);
  await expect(page.getByRole("link", { name: /物联网集中控制平台/ })).toBeVisible();
  await expect(page.locator('meta[property="og:url"]')).toHaveAttribute("content", "http://127.0.0.1:8098/");
});

test("English route and project detail are localized", async ({ page }) => {
  await page.goto("/en");
  await expect(page.getByRole("heading", { name: "Selected projects" })).toBeVisible();
  await page.locator('a[href="/en/projects/iot-control-platform"]').click();
  await expect(page).toHaveURL(/\/en\/projects\/iot-control-platform/);
  await expect(page.getByRole("heading", { name: "Background" })).toBeVisible();
  await expect(page.locator('meta[property="og:type"]')).toHaveAttribute("content", "article");
  const structuredData = await page.locator('script[type="application/ld+json"]').textContent();
  expect(structuredData).toContain("CreativeWork");
});

test("archived work remains a complete case study", async ({ page }) => {
  await page.goto("/projects/qemu-virtual-platform");
  await expect(page.getByRole("heading", { name: "项目背景" })).toBeVisible();
  await expect(page.locator(".case-body")).toContainText("Cortex-A9 Linux");
  await expect(page.locator(".case-body")).toContainText("完成两类处理器虚拟平台的运行、调试与验证");
});

test("keyboard navigation and reduced-motion fallback remain usable", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "跳到主要内容" })).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("html")).toHaveClass(/motion-lite/);
});

test("save-data clients receive the lightweight poster experience", async ({ page }) => {
  await page.addInitScript(() => {
    Object.defineProperty(navigator, "connection", { configurable: true, value: { saveData: true } });
  });
  await page.goto("/");
  await expect(page.locator("html")).toHaveClass(/motion-lite/);
  await expect(page.locator(".hero-portrait img")).toBeVisible();
});

test("the public layout never widens the visual viewport", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator('link[rel="stylesheet"]')).toHaveAttribute(
    "href",
    /^\/static\/assets\/style\.css\?v=\d+\.\d+\.\d+$/,
  );
  const viewport = await page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
    headerWidth: document.querySelector(".site-header")?.getBoundingClientRect().width ?? 0,
  }));

  expect(viewport.scrollWidth).toBeLessThanOrEqual(viewport.clientWidth + 1);
  expect(viewport.headerWidth).toBeLessThanOrEqual(viewport.clientWidth + 1);
});

test("admin enforces first-login password change", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name === "mobile", "The state-changing admin workflow runs once on desktop.");
  await page.goto("/admin");
  await page.getByLabel("用户名").fill("admin");
  await page.getByLabel("密码").fill("E2E-Temporary-Portfolio-2026!");
  await page.getByRole("button", { name: "安全登录" }).click();
  await expect(page.getByRole("heading", { name: "首次修改密码" })).toBeVisible();
});

test("admin saves previews and publishes a bilingual draft", async ({ page, context }, testInfo) => {
  test.skip(testInfo.project.name === "mobile", "The state-changing admin workflow runs once on desktop.");
  const temporaryPassword = "E2E-Temporary-Portfolio-2026!";
  const changedPassword = "E2E-Changed-Portfolio-2026!";
  const marker = "浏览器验收：草稿预览与原子发布";

  await page.goto("/admin");
  await page.getByLabel("用户名").fill("admin");
  await page.getByLabel("密码").fill(temporaryPassword);
  await page.getByRole("button", { name: "安全登录" }).click();
  await page.getByLabel("临时密码").fill(temporaryPassword);
  await page.getByLabel("新密码", { exact: true }).fill(changedPassword);
  await page.getByLabel("确认新密码").fill(changedPassword);
  await page.getByRole("button", { name: "更新密码并重新登录" }).click();

  await page.getByLabel("用户名").fill("admin");
  await page.getByLabel("密码").fill(changedPassword);
  await page.getByRole("button", { name: "安全登录" }).click();
  await expect(page.getByText("Portfolio Content OS")).toBeVisible();

  const summary = page.locator(".field.wide").filter({ hasText: "定位摘要" }).locator("textarea").first();
  await summary.fill(marker);
  await page.getByRole("button", { name: "实时预览" }).click();
  await expect(page.locator(".live-preview")).toContainText(marker);
  await page.getByRole("button", { name: "首页与定位" }).click();
  await page.getByRole("button", { name: "保存草稿" }).click();
  await expect(page.getByRole("status")).toContainText("草稿已安全保存");

  const publicPage = await context.newPage();
  await publicPage.goto("/");
  await expect(publicPage.locator("body")).not.toContainText(marker);
  const [preview] = await Promise.all([
    context.waitForEvent("page"),
    page.getByRole("link", { name: /已保存中文预览/ }).click(),
  ]);
  await preview.waitForLoadState("domcontentloaded");
  await expect(preview.locator("body")).toContainText(marker);
  await preview.close();

  await page.getByRole("button", { name: "发布", exact: true }).click();
  await page.getByLabel("版本说明").fill("Playwright 后台发布验收");
  await page.getByRole("button", { name: "确认发布" }).click();
  await expect(page.getByRole("status")).toContainText("新版本已原子发布");
  await publicPage.reload();
  await expect(publicPage.locator("body")).toContainText(marker);
  await publicPage.close();
});

test("unknown project returns an accessible 404", async ({ page }) => {
  const response = await page.goto("/projects/not-a-project");
  expect(response?.status()).toBe(404);
  await expect(page.locator('link[rel="stylesheet"]')).toHaveAttribute(
    "href",
    /^\/static\/assets\/style\.css\?v=\d+\.\d+\.\d+$/,
  );
  await expect(page.getByRole("heading", { name: "信号已丢失。" })).toBeVisible();
});
