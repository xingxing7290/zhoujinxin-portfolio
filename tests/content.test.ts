import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const content = JSON.parse(readFileSync(resolve("internal/seed/content.json"), "utf8"));

describe("public resume content", () => {
  it("leads with the embedded connectivity position", () => {
    expect(content.profile.title.zh).toBe("嵌入式软件工程师｜C / Linux / 设备通信");
    expect(content.profile.summary.zh).toContain("MCU/RTOS");
    expect(content.profile.summary.zh).toContain("交付闭环");
  });

  it("contains the six selected systems and an English variant", () => {
    const featured = content.projects.filter((project: { featured: boolean }) => project.featured);
    expect(featured).toHaveLength(6);
    expect(featured.every((project: { title: { zh: string; en: string } }) => project.title.zh && project.title.en)).toBe(true);
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
    expect(content.profile.email).toBe("zhoujx158@163.com");
  });
});
