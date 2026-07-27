import { readdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const content = JSON.parse(readFileSync(resolve("internal/seed/content.json"), "utf8"));
const packageMetadata = JSON.parse(readFileSync(resolve("package.json"), "utf8"));

describe("public resume content", () => {
  it("leads with the IoT full-stack position while retaining embedded depth", () => {
    expect(content.profile.title.zh).toBe("物联网全栈工程师｜端 · 边 · 云 · AI");
    expect(content.profile.summary.zh).toContain("MCU");
    expect(content.profile.summary.zh).toContain("端到端实践");
    expect(content.profile.summary.zh).toContain("AI 协作");
    expect(content.skills.find((group: { id: string }) => group.id === "ai-native")?.items).toContain("Dify");
  });

  it("contains the seven selected systems and an English variant", () => {
    const featured = content.projects.filter((project: { featured: boolean }) => project.featured);
    expect(featured).toHaveLength(7);
    expect(featured.every((project: { title: { zh: string; en: string } }) => project.title.zh && project.title.en)).toBe(true);
  });

  it("locks the timeline and delivery scope verified manually against monthly reports", () => {
    const experience = content.experiences[0];
    expect(experience.summary.zh).toContain("服务端");
    expect(experience.bullets.zh).toContain("Cat.1");
    expect(experience.bullets.zh).toContain("HarmonyOS");
    expect(experience.bullets.zh).toContain("一个半月");

    const projects = new Map<string, any>(content.projects.map((project: any) => [project.slug, project]));
    expect(projects.get("embedded-4g-gateway")!.period.zh).toBe("2024.05 — 至今");
    expect(projects.get("embedded-4g-gateway")!.results.zh).toContain("十余家客户现场");
    expect(projects.get("iot-control-platform")!.period.zh).toBe("2024.01 — 至今");
    expect(projects.get("iot-control-platform")!.actions.zh).toContain("先独立");
    expect(projects.get("4g-single-lamp-control-platform")!.actions.zh).toContain("控制器模拟器");
    expect(projects.get("4g-single-lamp-control-platform")!.results.zh).toContain("一个半月");
    expect(projects.get("4g-single-lamp-control-platform")!.stack).toContain("C#/.NET 8");
    expect(projects.get("device-management-app")!.results.zh).toContain("鸿蒙应用市场");
    expect(projects.get("dify-knowledge-base")!.title.zh).toContain("DeepSeek");
  });

  it("uses unique stable slugs", () => {
    const slugs = content.projects.map((project: { slug: string }) => project.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    expect(slugs.every((slug: string) => /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug))).toBe(true);
  });

  it("keeps every published case study complete in both languages", () => {
    for (const project of content.projects) {
      for (const field of ["title", "summary", "role", "period", "background", "actions", "results"] as const) {
        expect(project[field].zh, `${project.slug}.${field}.zh`).toBeTruthy();
        expect(project[field].en, `${project.slug}.${field}.en`).toBeTruthy();
      }
      expect(project.stack.length, `${project.slug}.stack`).toBeGreaterThan(0);
      expect(project.status ?? "published", `${project.slug}.status`).toBe("published");
      expect(project.visible, `${project.slug}.visible`).toBe(true);
    }
  });

  it("does not publish a full mobile number in source content", () => {
    expect(JSON.stringify(content)).not.toMatch(/1[3-9][0-9]{9}/);
    expect(content.profile.email).toBe("resume@example.com");
  });

  it("keeps exactly three official public resume sources without a mobile number", () => {
    const sources = readdirSync(resolve("resume"))
      .filter((name) => name.endsWith(".md") && name !== "README.md")
      .sort();

    expect(sources).toEqual([
      "周金鑫-AI原生全栈工程师.md",
      "周金鑫-嵌入式软件工程师.md",
      "周金鑫-物联网全栈工程师.md",
    ]);
    for (const source of sources) {
      expect(readFileSync(resolve("resume", source), "utf8"), source).not.toMatch(/1[3-9][0-9]{9}/);
    }
  });

  it("keeps private implementation references out of public resume content", () => {
    const serialized = JSON.stringify(content);
    expect(serialized).not.toMatch(/gitlab\.ssg-cloud\.com|E:\\\\0000progect/i);
    expect(serialized).not.toMatch(/github\.com\/xingxing7290\/(?:GW01|iot_flutter|iot_android_shiqi)/i);
    expect(serialized).not.toMatch(/\b(?:\d{1,3}\.){3}\d{1,3}\b/);
    expect(serialized).not.toMatch(/SD72|GW01/);
  });

  it("keeps the Go service and package release versions synchronized", () => {
    const serverSource = readFileSync(resolve("internal/server/server.go"), "utf8");
    expect(serverSource).toContain(`appVersion    = "${packageMetadata.version}"`);
  });
});
