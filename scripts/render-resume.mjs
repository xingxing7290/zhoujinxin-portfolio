import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "@playwright/test";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const content = JSON.parse(await readFile(resolve(root, "internal/seed/content.json"), "utf8"));
const phone = (process.env.RESUME_PHONE ?? "").replace(/[\s-]/g, "");
const website = (process.env.RESUME_WEBSITE ?? "https://xstar.cc.cd").replace(/\/$/, "");
const output = resolve(process.env.RESUME_OUTPUT ?? resolve(root, "data/generated/zhou-jinxin-resume.pdf"));

if (!/^1[3-9]\d{9}$/.test(phone)) {
  throw new Error("RESUME_PHONE must be a valid private mobile number; it is injected only into the generated PDF.");
}

const zh = (value) => value?.zh ?? "";
const htmlEscape = (value = "") =>
  String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]);
const text = (value) => htmlEscape(zh(value));
const bulletItems = (value) => zh(value)
  .split("\n")
  .map((line) => line.trim().replace(/^[-*]\s*/, ""))
  .filter(Boolean);
const bullets = (value, limit = 99) => `<ul>${bulletItems(value).slice(0, limit).map((item) => `<li>${htmlEscape(item)}</li>`).join("")}</ul>`;
const stack = (items, limit = 7) => `<div class="stack">${items.slice(0, limit).map((item) => `<span>${htmlEscape(item)}</span>`).join("")}</div>`;
const projectBySlug = new Map(content.projects.map((project) => [project.slug, project]));
const selectProjects = (slugs) => slugs.map((slug) => {
  const project = projectBySlug.get(slug);
  if (!project) throw new Error(`Resume project not found: ${slug}`);
  return project;
});
const featured = selectProjects([
  "4g-single-lamp-control-platform",
  "embedded-4g-gateway",
  "air780e-hc32-connectivity",
  "device-management-app",
  "iot-control-platform",
]);
const archived = selectProjects([
  "desktop-media-tools",
  "android-device-communications",
  "dify-knowledge-base",
]);
const experience = content.experiences[0];
const education = content.education[0];

const portrait = await readFile(resolve(root, "web/public/images/zhou-jinxin-executive.jpg"));
const portraitData = `data:image/jpeg;base64,${portrait.toString("base64")}`;

const resumeSkills = {
  embedded: ["C", "Embedded Linux", "FreeRTOS", "LWIP", "Air780E", "HC32"],
  connectivity: ["MQTT", "TCP/UDP", "RS485", "USB", "BLE", "SPP", "FOTA"],
  platform: ["Flutter", "Go", "Vue 3", "TypeScript", "Java", "Python"],
  delivery: ["J-Link", "GDB", "OpenOCD", "Wireshark", "Git", "Docker", "Technical Documentation"],
};
const skillGroups = content.skills.map((group) => `
  <section class="skill-group">
    <h3>${text(group.title)}</h3>
    <p>${(resumeSkills[group.id] ?? group.items.slice(0, 7)).map(htmlEscape).join(" · ")}</p>
  </section>
`).join("");

const projectCard = (project, options = {}) => {
  const actionLimit = options.actionLimit ?? 2;
  const resultLimit = options.resultLimit ?? 1;
  const stageResults = bulletItems(project.results)
    .slice(0, resultLimit)
    .map((item) => item.replace(/[。；;]+$/, ""));
  return `
    <article class="project-card ${options.compact ? "compact" : ""}">
      <div class="project-head">
        <div><span class="project-period">${text(project.period)}</span><h3>${text(project.title)}</h3></div>
        <span class="project-role">${text(project.role)}</span>
      </div>
      <p class="project-summary">${text(project.summary)}</p>
      ${bullets(project.actions, actionLimit)}
      <div class="result"><b>阶段成果</b>${stageResults.map(htmlEscape).join("；")}。</div>
      ${stack(project.stack, options.stackLimit ?? 6)}
    </article>
  `;
};

const renderDocument = (contactPhone) => `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <title>${text(content.profile.name)}｜嵌入式软件工程师简历</title>
  <style>
    @page { size: A4; margin: 0; }
    * { box-sizing: border-box; }
    :root {
      --ink: #17212d;
      --muted: #66717d;
      --paper: #f7f5f0;
      --paper-deep: #ece9e2;
      --blue: #315e7c;
      --blue-soft: #dce8ee;
      --line: #d2d7d8;
      --dark: #111820;
    }
    html, body { margin: 0; padding: 0; background: #d9d9d7; color: var(--ink); font-family: "Microsoft YaHei", "Noto Sans CJK SC", "PingFang SC", Arial, sans-serif; }
    body { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
    .page { position: relative; width: 210mm; height: 297mm; overflow: hidden; background: var(--paper); page-break-after: always; }
    .page:last-child { page-break-after: auto; }
    .page::after { content: ""; position: absolute; inset: 0; pointer-events: none; background: linear-gradient(145deg, rgba(255,255,255,.62), transparent 32%, rgba(49,94,124,.035)); }
    .page > * { position: relative; z-index: 1; }
    .topline { height: 3mm; background: linear-gradient(90deg, #111820 0 29%, #315e7c 29% 72%, #9bb2bf 72%); }
    .hero { height: 57mm; display: grid; grid-template-columns: 1fr 34mm; gap: 9mm; padding: 11mm 13mm 8mm; background: var(--dark); color: #f5f2eb; overflow: hidden; }
    .hero::before { content: ""; position: absolute; width: 86mm; height: 86mm; right: 1mm; top: -35mm; border: .25mm solid rgba(134,174,196,.22); border-radius: 50%; box-shadow: 0 0 0 10mm rgba(134,174,196,.035), 0 0 0 24mm rgba(134,174,196,.025); }
    .hero-kicker { margin: 0 0 2.2mm; color: #9ab6c7; font: 600 7pt/1.2 Arial, sans-serif; letter-spacing: .23em; text-transform: uppercase; }
    h1 { margin: 0; font-size: 27pt; line-height: 1; letter-spacing: .08em; font-weight: 650; }
    .hero-title { margin: 3mm 0 0; color: #c4d5df; font-size: 9.2pt; line-height: 1.35; font-weight: 500; }
    .hero-summary { max-width: 135mm; margin: 4mm 0 0; color: #c9cdd0; font-size: 7.8pt; line-height: 1.62; }
    .portrait-wrap { align-self: end; width: 30mm; height: 38mm; border-radius: 1.2mm; overflow: hidden; border: .3mm solid rgba(255,255,255,.22); box-shadow: 0 4mm 10mm rgba(0,0,0,.35); }
    .portrait-wrap img { width: 100%; height: 100%; object-fit: cover; object-position: center 25%; filter: saturate(.82) contrast(1.03); }
    .contact-strip { height: 13mm; display: flex; align-items: center; gap: 5mm; padding: 0 13mm; color: #e5edf1; background: #284b62; font-size: 7.4pt; }
    .contact-strip span { white-space: nowrap; }
    .contact-strip .dot { width: .8mm; height: .8mm; border-radius: 50%; background: #91b1c2; }
    .page-one-body { display: grid; grid-template-columns: 56mm 1fr; height: 221mm; }
    .sidebar { padding: 9mm 6.5mm 9mm 13mm; background: var(--paper-deep); border-right: .2mm solid var(--line); }
    .main-column { padding: 9mm 13mm 8mm 8mm; }
    .section-label { display: flex; align-items: center; gap: 2.5mm; margin: 0 0 4mm; color: var(--blue); font: 700 7pt/1 Arial, sans-serif; letter-spacing: .18em; text-transform: uppercase; }
    .section-label::before { content: ""; width: 7mm; height: .55mm; background: var(--blue); }
    .sidebar-block + .sidebar-block { margin-top: 7mm; }
    .skill-group + .skill-group { margin-top: 4.3mm; }
    .skill-group h3 { margin: 0 0 1.3mm; color: var(--ink); font-size: 7.7pt; line-height: 1.25; }
    .skill-group p { margin: 0; color: var(--muted); font-size: 6.85pt; line-height: 1.58; }
    .education h3 { margin: 0; font-size: 9pt; }
    .education p { margin: 1.3mm 0 0; color: var(--blue); font-size: 7pt; font-weight: 650; }
    .education small { display: block; margin-top: 1.3mm; color: var(--muted); font-size: 6.5pt; line-height: 1.5; }
    .award-list { margin: 0; padding: 0; list-style: none; }
    .award-list li { position: relative; margin: 0 0 2.1mm; padding-left: 3mm; color: var(--muted); font-size: 6.55pt; line-height: 1.42; }
    .award-list li::before { content: ""; position: absolute; left: 0; top: .9mm; width: 1.1mm; height: 1.1mm; background: var(--blue); transform: rotate(45deg); }
    .experience-head { display: flex; justify-content: space-between; align-items: flex-start; border-bottom: .2mm solid var(--line); padding-bottom: 3mm; }
    .experience-head h2 { margin: 0; font-size: 12pt; }
    .experience-head h3 { margin: 1.2mm 0 0; color: var(--blue); font-size: 8pt; font-weight: 650; }
    .experience-head time { color: var(--muted); font-size: 7pt; }
    .experience-summary { margin: 3mm 0 2mm; font-size: 7.5pt; line-height: 1.55; }
    ul { margin: 1.8mm 0 0; padding: 0; list-style: none; }
    li { position: relative; margin: 0 0 1.25mm; padding-left: 3mm; color: #47535e; font-size: 7.05pt; line-height: 1.45; }
    li::before { content: ""; position: absolute; left: .2mm; top: 1.15mm; width: 1mm; height: 1mm; border-radius: 50%; background: var(--blue); }
    .selected { margin-top: 7mm; }
    .project-card { padding: 3.5mm 0 3.1mm; border-top: .2mm solid var(--line); }
    .project-card:first-of-type { border-top: 0; padding-top: 0; }
    .project-head { display: flex; justify-content: space-between; gap: 4mm; align-items: flex-start; }
    .project-head h3 { margin: .7mm 0 0; font-size: 9.1pt; line-height: 1.25; }
    .project-period { color: var(--blue); font-size: 6.2pt; font-weight: 700; letter-spacing: .04em; }
    .project-role { flex: none; padding: 1mm 1.7mm; color: var(--blue); background: var(--blue-soft); font-size: 6.3pt; border-radius: .7mm; }
    .project-summary { margin: 1.3mm 0 0; font-size: 7.2pt; line-height: 1.45; }
    .project-card ul { margin-top: 1.4mm; }
    .project-card li { margin-bottom: .75mm; font-size: 7.05pt; line-height: 1.4; }
    .result { margin-top: 1.4mm; color: #3f4b55; font-size: 6.9pt; line-height: 1.38; }
    .result b { margin-right: 1.5mm; color: var(--blue); }
    .stack { display: flex; flex-wrap: wrap; gap: 1mm; margin-top: 1.6mm; }
    .stack span { padding: .75mm 1.3mm; border: .2mm solid #c7d1d5; color: #52616b; font: 6.1pt/1 Arial, sans-serif; border-radius: .5mm; }
    .page-two-header { height: 34mm; padding: 8mm 13mm 6mm; color: #f4f2ec; background: var(--dark); display: flex; justify-content: space-between; align-items: flex-end; }
    .page-two-header p { margin: 0 0 1mm; color: #91adbd; font: 700 6.5pt/1 Arial, sans-serif; letter-spacing: .2em; }
    .page-two-header h2 { margin: 0; font-size: 17pt; font-weight: 600; }
    .page-two-header span { color: #bfc8cc; font-size: 7pt; }
    .page-two-body { height: 260mm; padding: 8mm 13mm 9mm; }
    .project-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0 8mm; }
    .project-grid .project-card { min-height: 52mm; }
    .project-grid .project-card:nth-child(1), .project-grid .project-card:nth-child(2) { border-top: 0; padding-top: 0; }
    .project-grid .project-card:nth-child(3) { grid-column: 1 / -1; min-height: 44mm; }
    .archive-section { margin-top: 6mm; padding-top: 5mm; border-top: .5mm solid #aebbc1; }
    .archive-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2.5mm 6mm; }
    .archive-item { display: grid; grid-template-columns: 19mm 1fr; gap: 2.5mm; padding-bottom: 2.2mm; border-bottom: .2mm solid var(--line); }
    .archive-item:nth-child(3) { grid-column: 1 / -1; }
    .archive-item time { color: var(--blue); font-size: 6.2pt; font-weight: 650; }
    .archive-item h3 { margin: 0; font-size: 7.4pt; }
    .archive-item p { margin: .8mm 0 0; color: var(--muted); font-size: 6.5pt; line-height: 1.38; }
    .archive-item .archive-result { color: #43515b; font-size: 6.3pt; }
    .archive-item .archive-result b { margin-right: 1mm; color: var(--blue); }
    .archive-item small { display: block; margin-top: .7mm; color: #7b858d; font-size: 6.1pt; }
    .closing { display: grid; grid-template-columns: 1.2fr .8fr; gap: 8mm; margin-top: 6mm; }
    .closing article { padding: 4mm 4.5mm; background: #e8eceb; border-left: 1mm solid var(--blue); }
    .closing h3 { margin: 0 0 1.5mm; font-size: 7.5pt; }
    .closing p { margin: 0; color: #4f5b63; font-size: 6.6pt; line-height: 1.52; }
    .closing .value { background: #1d2b36; border-left-color: #8aafc3; color: white; }
    .closing .value h3 { color: #a9c5d3; }
    .closing .value p { color: #d2dadd; }
    .footer { position: absolute; left: 13mm; right: 13mm; bottom: 5mm; display: flex; justify-content: space-between; padding-top: 2mm; border-top: .2mm solid #c9cecf; color: #7b8389; font: 5.5pt/1 Arial, sans-serif; letter-spacing: .08em; }
  </style>
</head>
<body>
  <section class="page">
    <div class="topline"></div>
    <header class="hero">
      <div>
        <p class="hero-kicker">Embedded · Connected · Delivered</p>
        <h1>${text(content.profile.name)}</h1>
        <p class="hero-title">${text(content.profile.title)}</p>
        <p class="hero-summary">${text(content.profile.summary)}</p>
      </div>
      <div class="portrait-wrap"><img src="${portraitData}" alt=""></div>
    </header>
    <div class="contact-strip">
      <span>${contactPhone}</span><i class="dot"></i>
      <span>${htmlEscape(content.profile.email)}</span><i class="dot"></i>
      <span>${htmlEscape(website.replace(/^https?:\/\//, ""))}</span><i class="dot"></i>
      <span>${text(content.profile.location)}</span>
    </div>
    <div class="page-one-body">
      <aside class="sidebar">
        <section class="sidebar-block">
          <p class="section-label">核心能力</p>
          ${skillGroups}
        </section>
        <section class="sidebar-block education">
          <p class="section-label">教育背景</p>
          <h3>${text(education.school)}</h3>
          <p>${text(education.degree)} · ${text(education.period)}</p>
          <small>${text(education.details)}</small>
        </section>
        <section class="sidebar-block">
          <p class="section-label">成果与认证</p>
          <ul class="award-list">${content.awards.map((award) => `<li>${award.period ? `<b>${htmlEscape(award.period)}</b> · ` : ""}${text(award.title)}</li>`).join("")}</ul>
        </section>
      </aside>
      <main class="main-column">
        <section>
          <p class="section-label">近年工作经历</p>
          <div class="experience-head">
            <div><h2>${text(experience.company)}</h2><h3>${text(experience.role)}</h3></div>
            <time>${text(experience.period)}</time>
          </div>
          <p class="experience-summary">${text(experience.summary)}</p>
          ${bullets(experience.bullets, 4)}
        </section>
        <section class="selected">
          <p class="section-label">代表项目 · 核心</p>
          ${featured.slice(0, 2).map((project) => projectCard(project, { actionLimit: 3, resultLimit: 2, stackLimit: 6 })).join("")}
        </section>
      </main>
    </div>
    <footer class="footer"><span>周金鑫 · 嵌入式软件工程师</span><span>01 / 02</span></footer>
  </section>

  <section class="page">
    <div class="topline"></div>
    <header class="page-two-header">
      <div><p>SELECTED SYSTEMS · CONTINUED</p><h2>从通信链路到完整交付</h2></div>
      <span>项目内容仅保留可验证职责与成果</span>
    </header>
    <main class="page-two-body">
      <section>
        <p class="section-label">核心项目 · 续</p>
        <div class="project-grid">
          ${featured.slice(2).map((project) => projectCard(project, { actionLimit: 2, resultLimit: 1, stackLimit: 5 })).join("")}
        </div>
      </section>
      <section class="archive-section">
        <p class="section-label">相关工程实践</p>
        <div class="archive-grid">
          ${archived.map((project) => `
            <article class="archive-item">
              <time>${text(project.period)}</time>
              <div><h3>${text(project.title)}</h3><p>${text(project.summary)}</p><p class="archive-result"><b>验证</b>${htmlEscape(bulletItems(project.results)[0] ?? "")}</p><small>${project.stack.slice(0, 6).map(htmlEscape).join(" · ")}</small></div>
            </article>
          `).join("")}
        </div>
      </section>
      <section class="closing">
        <article>
          <h3>工程工作方式</h3>
          <p>从需求、协议与系统边界出发，借助示波器、逻辑分析仪、抓包和调试器定位问题；通过版本管理、测试记录和技术文档让方案可复现、可维护。</p>
        </article>
        <article class="value">
          <h3>求职方向</h3>
          <p>嵌入式软件、设备通信、4G 网关与物联网产品开发；可跨 MCU、Linux、移动端、Web 与桌面端推进联调和交付。</p>
        </article>
      </section>
    </main>
    <footer class="footer"><span>${htmlEscape(content.profile.email)} · ${htmlEscape(website)}</span><span>02 / 02</span></footer>
  </section>
</body>
</html>`;

await mkdir(dirname(output), { recursive: true });
const htmlOutput = output.replace(/\.pdf$/i, ".html");
const pdfHTML = renderDocument(htmlEscape(phone));
const editableHTML = renderDocument("手机号仅保留在 PDF");
await writeFile(htmlOutput, editableHTML, "utf8");

const browser = await chromium.launch({ headless: true });
try {
  const page = await browser.newPage({ viewport: { width: 1240, height: 1754 }, deviceScaleFactor: 1 });
  await page.setContent(pdfHTML, { waitUntil: "load" });
  await page.emulateMedia({ media: "print" });
  const pageCount = await page.locator(".page").count();
  const overflow = await page.locator(".page").evaluateAll((pages) => pages.map((item) => item.scrollHeight - item.clientHeight));
  if (pageCount !== 2 || overflow.some((value) => value > 1)) {
    throw new Error(`Resume layout validation failed: pages=${pageCount}, overflow=${overflow.join(",")}`);
  }
  await page.pdf({
    path: output,
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: "0", right: "0", bottom: "0", left: "0" },
  });
} finally {
  await browser.close();
}

console.log(`Resume generated: ${output}`);
console.log(`Editable preview: ${htmlOutput}`);
