import { execFileSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { extname } from "node:path";

const trackedFiles = execFileSync("git", ["ls-files", "-z", "--cached", "--others", "--exclude-standard"], { encoding: "utf8" })
  .split("\0")
  .filter(Boolean);

const forbiddenExtensions = new Set([
  ".pdf", ".doc", ".docx", ".xls", ".xlsx", ".ppt", ".pptx",
  ".db", ".sqlite", ".sqlite3", ".bak", ".zip", ".7z", ".rar",
  ".pem", ".key", ".pfx", ".p12",
]);
const emailPattern = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi;
const mobilePattern = /(?<!\d)1[3-9]\d(?:[\s-]?\d){8}(?!\d)/g;
const identityPattern = /(?<!\d)\d{17}[\dXx](?!\d)/g;
const wechatPattern = /\bwxid_[a-z0-9_-]+\b/gi;
const allowedTestPhones = new Set(["13900000000"]);
const violations = [];

const lineAt = (text, offset) => text.slice(0, offset).split("\n").length;
const reportMatches = (file, text, pattern, category, allow = () => false) => {
  for (const match of text.matchAll(pattern)) {
    if (!allow(match[0])) {
      violations.push(`${file}:${lineAt(text, match.index ?? 0)} contains ${category}`);
    }
  }
};

for (const file of trackedFiles) {
  if (!existsSync(file)) continue;
  const normalized = file.replaceAll("\\", "/");
  const lower = normalized.toLowerCase();
  const extension = extname(lower);
  if (forbiddenExtensions.has(extension)) {
    violations.push(`${normalized} is a private or binary document type that must not be tracked`);
    continue;
  }
  if ((lower.includes("/.env") || lower.startsWith(".env")) && lower !== ".env.example") {
    violations.push(`${normalized} is an environment file that must not be tracked`);
    continue;
  }
  if (/(?:^|\/)(?:身份证|证件照|原始简历|private-resume)/i.test(normalized)) {
    violations.push(`${normalized} has a privacy-sensitive filename`);
    continue;
  }

  const buffer = readFileSync(file);
  if (buffer.includes(0)) continue;
  const text = buffer.toString("utf8");

  reportMatches(file, text, emailPattern, "a non-allowlisted email address", (value) => {
    const domain = value.toLowerCase().split("@")[1];
    return domain === "example.com" || domain === "users.noreply.github.com" || domain === "user.noreply.gitee.com" || domain === "github.com";
  });
  reportMatches(file, text, mobilePattern, "a mainland China mobile number", (value) => allowedTestPhones.has(value.replace(/\D/g, "")));
  reportMatches(file, text, identityPattern, "a possible mainland China identity number");
  reportMatches(file, text, wechatPattern, "a WeChat identifier");
}

if (violations.length > 0) {
  console.error("Public-repository privacy check failed:\n" + violations.map((item) => `- ${item}`).join("\n"));
  process.exit(1);
}

console.log(`Privacy check passed for ${trackedFiles.length} repository files.`);
