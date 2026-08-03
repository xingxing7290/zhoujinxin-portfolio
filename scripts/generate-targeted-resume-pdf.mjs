import { mkdir, readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "@playwright/test";

const root = resolve(fileURLToPath(new URL("..", import.meta.url)));
const outputDir = resolve(process.env.RESUME_OUTPUT_DIR ?? resolve(root, "data/generated/resumes"));
const qaDir = process.env.RESUME_QA_DIR ? resolve(process.env.RESUME_QA_DIR) : null;
const phone = (process.env.RESUME_PHONE ?? "").replace(/[\s-]/g, "");
const email = (process.env.RESUME_EMAIL ?? "").trim();
const location = process.env.RESUME_LOCATION ?? "北京";
const variants = [
  "周金鑫-嵌入式软件工程师.md",
  "周金鑫-物联网全栈工程师.md",
  "周金鑫-AI原生全栈工程师.md",
];

if (!/^1[3-9]\d{9}$/.test(phone)) {
  throw new Error("RESUME_PHONE must be a valid private mainland China mobile number.");
}
if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
  throw new Error("RESUME_EMAIL must be supplied at runtime and contain a valid private email address.");
}

const escapeHTML = (value = "") =>
  String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]);

const inlineMarkdown = (value) => {
  const escaped = escapeHTML(value);
  return escaped
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/(^|[^*])\*([^*]+?)\*/g, "$1<em>$2</em>");
};

const splitIdentity = (lines, fallbackRole) => {
  const title = lines.find((line) => line.startsWith("# "));
  if (!title) return { name: "周金鑫", role: fallbackRole };
  const [name, role = fallbackRole] = title.slice(2).split("｜", 2).map((item) => item.trim());
  return { name, role };
};

const splitPages = (lines) => {
  const marker = lines.findIndex((line) => line.trim() === "<!-- page-break -->");
  if (marker < 0) return [lines, []];
  return [lines.slice(0, marker), lines.slice(marker + 1)];
};

const renderBlocks = (lines) => {
  const output = [];
  let listOpen = false;
  let entryOpen = false;

  const closeList = () => {
    if (listOpen) output.push("</ul>");
    listOpen = false;
  };
  const closeEntry = () => {
    closeList();
    if (entryOpen) output.push("</article>");
    entryOpen = false;
  };

  for (const raw of lines) {
    const line = raw.trim();
    if (!line || line.startsWith("# ") || line === "<!-- page-break -->") continue;

    if (line.startsWith("## ")) {
      closeEntry();
      output.push(`<h2>${inlineMarkdown(line.slice(3).trim())}</h2>`);
      continue;
    }

    if (line.startsWith("### ")) {
      closeEntry();
      const parts = line.slice(4).split("｜").map((part) => part.trim());
      const title = parts.shift() ?? "";
      const period = parts.length > 0 ? parts.pop() : "";
      const role = parts.join(" · ");
      output.push('<article class="entry">');
      output.push(
        `<div class="entry-heading"><div><h3>${inlineMarkdown(title)}</h3>` +
        `${role ? `<span>${inlineMarkdown(role)}</span>` : ""}</div>` +
        `${period ? `<time>${inlineMarkdown(period)}</time>` : ""}</div>`,
      );
      entryOpen = true;
      continue;
    }

    if (line.startsWith("- ")) {
      if (!listOpen) {
        output.push("<ul>");
        listOpen = true;
      }
      output.push(`<li>${inlineMarkdown(line.slice(2).trim())}</li>`);
      continue;
    }

    closeList();
    const normalized = line.replace(/^\*+/, "");
    const detail =
      normalized.startsWith("阶段成果：") ||
      normalized.startsWith("技术栈：") ||
      normalized.startsWith("关键词：");
    output.push(
      `<p class="${detail ? "detail" : "body-copy"}">${inlineMarkdown(line)}</p>`,
    );
  }

  closeEntry();
  return output.join("\n");
};

const stylesheet = `
  @page { size: A4; margin: 0; }
  * { box-sizing: border-box; }
  :root {
    --navy: #172b4d;
    --blue: #2f6b9a;
    --ink: #20252c;
    --muted: #5a6572;
    --rule: #d9e3ec;
  }
  html, body {
    margin: 0;
    padding: 0;
    background: #d9dde1;
    color: var(--ink);
    font-family: "Noto Sans SC", "Microsoft YaHei", "PingFang SC", Arial, sans-serif;
    print-color-adjust: exact;
    -webkit-print-color-adjust: exact;
  }
  .resume-page {
    position: relative;
    width: 210mm;
    height: 297mm;
    margin: 0 auto 7mm;
    padding: 13mm 14mm;
    overflow: hidden;
    background: #fff;
    page-break-after: always;
  }
  .resume-page:last-child { page-break-after: auto; }
  .opening { margin: 0 0 1mm; }
  .resume-name {
    margin: 0;
    color: var(--navy);
    font-size: 27pt;
    font-weight: 700;
    line-height: 1;
    letter-spacing: .02em;
  }
  .resume-role {
    margin: 4.2mm 0 2.4mm;
    color: var(--blue);
    font-size: 12.2pt;
    font-weight: 600;
    line-height: 1;
  }
  .contact {
    margin: 0 0 6pt;
    color: var(--muted);
    font-size: 9pt;
    line-height: 1;
  }
  h2 {
    margin: 6.2pt 0 3pt;
    padding: 0 0 2.8pt;
    border-bottom: .22mm solid var(--rule);
    color: var(--navy);
    font-size: 13pt;
    font-weight: 700;
    line-height: 1.15;
    break-after: avoid;
  }
  .body-copy {
    margin: 0 0 2.6pt;
    color: var(--ink);
    font-size: 10.1pt;
    line-height: 1.58;
  }
  .entry { margin: 0; }
  .entry-heading {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 4mm;
    margin: 4.2pt 0 1.6pt;
    line-height: 1.2;
    break-after: avoid;
  }
  .entry-heading > div {
    min-width: 0;
  }
  .entry-heading h3 {
    display: inline;
    margin: 0;
    color: var(--ink);
    font-size: 10.8pt;
    font-weight: 700;
  }
  .entry-heading span {
    margin-left: 2.2mm;
    color: var(--muted);
    font-size: 9.1pt;
  }
  .entry-heading time {
    flex: none;
    color: var(--muted);
    font-size: 9.1pt;
    white-space: nowrap;
  }
  ul {
    margin: 0 0 1.8pt;
    padding-left: 6.8mm;
  }
  li {
    margin: 0 0 1.5pt;
    padding-left: .5mm;
    color: var(--ink);
    font-size: 9.65pt;
    line-height: 1.55;
  }
  li::marker {
    color: var(--ink);
    font-size: 8.5pt;
  }
  strong { font-weight: 700; }
  em { font-style: italic; }
  .detail {
    margin: .5pt 0 2pt;
    color: var(--muted);
    font-size: 9.2pt;
    line-height: 1.5;
  }
  .resume-footer {
    position: absolute;
    right: 14mm;
    bottom: 5mm;
    color: #7b8490;
    font-size: 7.5pt;
    line-height: 1;
  }
  @media print {
    html, body { background: #fff; }
    .resume-page { margin: 0; box-shadow: none; }
  }
`;

const renderHTML = ({ name, role, pages }) => `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <title>${escapeHTML(name)}-${escapeHTML(role)}</title>
  <style>${stylesheet}</style>
</head>
<body>
  ${pages.map((content, index) => `
    <section class="resume-page">
      <main class="page-content">
        ${index === 0 ? `
          <header class="opening">
            <h1 class="resume-name">${escapeHTML(name)}</h1>
            <p class="resume-role">${escapeHTML(role)}</p>
            <p class="contact">${escapeHTML(location)}&nbsp;&nbsp;|&nbsp;&nbsp;${escapeHTML(phone)}&nbsp;&nbsp;|&nbsp;&nbsp;${escapeHTML(email)}</p>
          </header>
        ` : ""}
        ${renderBlocks(content)}
      </main>
      <footer class="resume-footer">${escapeHTML(name)} · ${escapeHTML(role)}　${index + 1} / ${pages.length}</footer>
    </section>
  `).join("")}
</body>
</html>`;

await mkdir(outputDir, { recursive: true });
if (qaDir) await mkdir(qaDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
try {
  for (const variant of variants) {
    const source = resolve(root, "resume", variant);
    const markdown = await readFile(source, "utf8");
    const lines = markdown.split(/\r?\n/);
    const stem = variant.replace(/\.md$/i, "");
    const { name, role } = splitIdentity(lines, stem.split("-", 2).at(-1));
    const pages = splitPages(lines);
    if (pages.length !== 2 || pages.some((pageLines) => pageLines.length === 0)) {
      throw new Error(`${variant} must contain exactly one explicit page break.`);
    }

    const page = await browser.newPage({
      viewport: { width: 1240, height: 1754 },
      deviceScaleFactor: 1,
    });
    await page.setContent(renderHTML({ name, role, pages }), { waitUntil: "load" });
    await page.evaluate(() => document.fonts.ready);
    await page.emulateMedia({ media: "print" });

    const layout = await page.locator(".resume-page").evaluateAll((nodes) =>
      nodes.map((node) => {
        const content = node.querySelector(".page-content").getBoundingClientRect();
        const footer = node.querySelector(".resume-footer").getBoundingClientRect();
        return {
          scrollOverflow: node.scrollHeight - node.clientHeight,
          footerCollision: content.bottom - footer.top,
        };
      }),
    );
    if (layout.some(({ scrollOverflow, footerCollision }) => scrollOverflow > 1 || footerCollision > -8)) {
      throw new Error(`${variant} layout validation failed: ${JSON.stringify(layout)}`);
    }

    if (qaDir) {
      const variantQA = resolve(qaDir, stem);
      await mkdir(variantQA, { recursive: true });
      for (let index = 0; index < pages.length; index += 1) {
        await page.locator(".resume-page").nth(index).screenshot({
          path: resolve(variantQA, `page-${index + 1}.png`),
        });
      }
    }

    const output = resolve(outputDir, `${stem}.pdf`);
    await page.pdf({
      path: output,
      format: "A4",
      printBackground: true,
      preferCSSPageSize: true,
      margin: { top: "0", right: "0", bottom: "0", left: "0" },
    });
    await page.close();
    console.log(output);
  }
} finally {
  await browser.close();
}
