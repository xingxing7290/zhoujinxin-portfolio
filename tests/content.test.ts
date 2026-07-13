import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const content = JSON.parse(readFileSync(resolve("internal/seed/content.json"), "utf8"));

describe("public resume content", () => {
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

  it("does not publish a full mobile number in source content", () => {
    expect(JSON.stringify(content)).not.toMatch(/1[3-9][0-9]{9}/);
    expect(content.profile.email).toBe("zhoujx158@163.com");
  });
});
