import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const planPath = path.join(rootDir, "data/career/vla-plan-weeks.json");
const resourcesPath = path.join(rootDir, "data/career/vla-plan-resources.json");
const mainPlanPath = path.join(rootDir, "docs/career/VLA-LEROBOT-112-DAY-PLAN.md");
const outputPath = path.join(rootDir, "docs/career/EDGEVLA-112-DAY-OBSIDIAN.md");
const checkOnly = process.argv.includes("--check");

const plan = JSON.parse(fs.readFileSync(planPath, "utf8"));
const resources = JSON.parse(fs.readFileSync(resourcesPath, "utf8"));
const days = plan.weeks.flatMap((week) => week.days);
const course = resources.completed_course;

const normalizeEol = (value) => value.replace(/\r\n/g, "\n");
const sha256 = (value) => crypto.createHash("sha256").update(value).digest("hex");
const yamlString = (value) => JSON.stringify(String(value));

function shiftHeadings(markdown, shift, replacementTitle = null) {
  let inFence = false;
  let replacedTitle = false;
  return markdown
    .split("\n")
    .map((line) => {
      if (/^\s*```/.test(line)) {
        inFence = !inFence;
        return line;
      }
      if (inFence) return line;
      const match = /^(#{1,6})\s+(.+)$/.exec(line);
      if (!match) return line;
      if (!replacedTitle && replacementTitle && match[1].length === 1) {
        replacedTitle = true;
        return `${"#".repeat(Math.min(6, 1 + shift))} ${replacementTitle}`;
      }
      return `${"#".repeat(Math.min(6, match[1].length + shift))} ${match[2]}`;
    })
    .join("\n");
}

function detailHeading(day) {
  return `D${String(day.day).padStart(3, "0")} 详细执行｜${day.title}`;
}

function obsidianDetailLink(day, label = null) {
  return `[[#${detailHeading(day)}|${label ?? `Day ${String(day.day).padStart(3, "0")}`}]]`;
}

function transformMainPlan(markdown) {
  let value = normalizeEol(markdown).replace(/^# .+\n+/, "");
  for (const day of days) {
    const id = String(day.day).padStart(3, "0");
    const markdownLink = new RegExp(
      `\\*\\*详细执行指南：\\*\\* \\[Day ${id} 详细执行指南\\]\\(daily-guides/day-${id}\\.md\\)`,
      "g",
    );
    value = value.replace(markdownLink, `**详细执行指南：** ${obsidianDetailLink(day, `打开 Day ${id} 详细执行`)}`);
  }
  return shiftHeadings(value.trim(), 1);
}

function transformDailyGuide(day) {
  const filePath = path.join(rootDir, day.guide_path);
  let value = normalizeEol(fs.readFileSync(filePath, "utf8"));
  value = value.replace(/^<!-- career-vla-guide: day-\d{3} -->\n+/, "");
  value = value
    .split("\n")
    .filter((line) => !line.startsWith("> 导航："))
    .join("\n");
  value = shiftHeadings(value.trim(), 3, detailHeading(day));

  const previous = days[day.day - 2];
  const next = days[day.day];
  const navigation = [
    previous ? obsidianDetailLink(previous, `← Day ${String(previous.day).padStart(3, "0")}`) : null,
    "[[#导航|↑ 文档导航]]",
    next ? obsidianDetailLink(next, `Day ${String(next.day).padStart(3, "0")} →`) : null,
  ]
    .filter(Boolean)
    .join(" · ");

  return [`> [!info]- 当日导航`, `> ${navigation}`, "", value].join("\n");
}

function extractUserNotes(existing) {
  const match = /<!-- USER-NOTES-START -->\n([\s\S]*?)\n<!-- USER-NOTES-END -->/.exec(existing);
  return match ? match[1] : "在这里记录只属于你的复盘、疑问、面试反馈或硬件采购状态。该区域会在重新生成文档时保留。";
}

function preserveCheckedTasks(existing, generated) {
  const checked = new Set();
  for (const line of existing.split("\n")) {
    const match = /^\s*- \[[xX]\]\s+(.+?)\s*$/.exec(line);
    if (match) checked.add(match[1]);
  }
  return generated.replace(/^(\s*- )\[ \]\s+(.+?)\s*$/gm, (line, prefix, label) =>
    checked.has(label) ? `${prefix}[x] ${label}` : line,
  );
}

function renderDocument(existing = "") {
  const weekLinks = plan.weeks
    .map((week) => {
      const first = week.days[0];
      const last = week.days.at(-1);
      return `| ${week.week} | ${week.theme} | Day ${String(first.day).padStart(3, "0")}–${String(last.day).padStart(3, "0")} | ${obsidianDetailLink(first, "进入本周第一天")} |`;
    })
    .join("\n");

  const frontmatter = [
    "---",
    `aliases:`,
    `  - ${yamlString("EdgeVLA 112天执行手册")}`,
    `  - ${yamlString("嵌入式到机器人112天计划")}`,
    "tags:",
    "  - career/embedded",
    "  - robotics/lerobot",
    "  - learning/112-days",
    "  - obsidian/plan",
    "status: active-plan",
    `plan_version: ${yamlString(plan.version)}`,
    `plan_start: ${resources.schedule.start_date}`,
    `plan_end: ${resources.schedule.end_date}`,
    `total_days: ${resources.schedule.total_days}`,
    `planned_hours: ${resources.schedule.planned_hours}`,
    `course_bvid: ${course.bvid}`,
    `course_status: ${yamlString(course.status)}`,
    `course_completed: ${course.completed_on}`,
    `source_snapshot: ${resources.snapshot_date}`,
    "cssclasses:",
    "  - edgevla-execution-manual",
    "---",
  ].join("\n");

  const header = `${frontmatter}

# ${plan.project_name}｜112天 Obsidian 执行手册

> [!abstract] 文档定位
> 这是一个**单文件、原生 Obsidian 可用**的执行手册，合并了总计划与 Day 001～112 的全部详细指南。无需 Dataview 等插件；Properties、Callout、任务复选框、标题跳转和外部链接均可直接使用。

> [!warning] 真实性边界
> 完整观看课程只能证明完成了一轮系统输入，不能自动证明已具备机械臂、ROS2、运动控制、视觉或 VLA 项目经验。只有代码、硬件记录、测试、失败样本和可复现结果通过对应 Day 的证据门后，才能同步到简历。

## 导航

- [[#课程学习记录|课程学习记录]]
- [[#课程内容到112天实操映射|课程到实操映射]]
- [[#16周快速入口|16周快速入口]]
- [[#总计划与逐日索引|总计划与逐日索引]]
- [[#逐日详细执行|Day 001～112完整执行指南]]
- [[#我的学习记录|我的学习记录（重新生成时保留）]]

## 课程学习记录

> [!success] 已完成一轮观看
> - [x] **${course.status}**：共 ${course.published_parts} 个视频分P（以课程公开页面为准）
> - 课程： [${course.title}](${course.url})
> - 平台 / BV号：${course.platform} / \`${course.bvid}\`
> - 完成记录日期：${course.completed_on}
> - 证据类型：${course.evidence_type}

公开课程介绍覆盖具身智能概念、机械臂硬件与电机/编码器、URDF与遥操作、运动学与PID、OpenCV视觉与手眼标定、YOLO、DeepSeek/MCP等从硬件到智能的渐进内容。这里记录的是**完整观看一遍**，尚未默认记录“代码全部复现”“机械臂全部搭建”或“项目已经完成”。

### 观看完成后的第一轮复盘任务

- [ ] 不回看视频，独立画一张“感知→状态→策略/控制→执行→反馈→安全”的系统图。
- [ ] 写出最熟悉的 10 个概念，并为每个概念标记：能解释 / 能写最小代码 / 有真实硬件证据。
- [ ] 写出最模糊的 10 个问题，优先映射到下表对应 Day，不进行无目标二刷。
- [ ] 从课程中只选择一个最小案例开始复现，保留原课程代码与本人修改的边界。

## 课程内容到112天实操映射

| 课程主题 | 观看后的真实状态 | 本计划实操入口 | 达到什么证据后才可升级表述 |
|---|---|---|---|
| 电机、编码器、硬件执行单元 | 已观看，未自动获得项目经验 | [[#D008 详细执行｜开发板、原理图与引脚清单|Day 008]]～[[#D028 详细执行｜嵌入式阶段发布门|Day 028]] | 真实接线、驱动代码、波形、故障测试与版本记录 |
| URDF、遥操作、机械臂搭建 | 已观看，真机条件待阶段门确认 | [[#D043 详细执行｜ROS 2 Jazzy 安装与工作区|Day 043]]～[[#D056 详细执行｜可靠性与阶段验收|Day 056]] | ROS2构建、契约测试、R轨急停/授权或S轨simulation标记 |
| 正逆运动学、PID与控制 | 已观看，不能称运动控制项目 | [[#D044 详细执行｜Node、Topic、Service、Action|Day 044]]、[[#D052 详细执行｜安全风险评审|Day 052]] | 独立实现/测试、控制周期和失败边界；课程复现需注明上游 |
| OpenCV、目标识别、手眼标定 | 已观看，尚需数据与标定报告 | [[#D047 详细执行｜OpenCV 相机标定|Day 047]]、[[#D048 详细执行｜Lifecycle、参数与诊断|Day 048]] | 原始图像、标定参数、重投影误差和失败样本 |
| 大模型、DeepSeek、MCP与具身智能 | 已观看，不等于VLA微调经验 | [[#D064 详细执行｜ACT 配置与数据审查|Day 064]]～[[#D084 详细执行｜弱网结论与安全阶段门|Day 084]] | 固定数据/模型版本、checkpoint、冻结评测和R/S轨说明 |

## 16周快速入口

| 周 | 主题 | 范围 | 入口 |
|---:|---|---|---|
${weekLinks}

## 我的学习记录

<!-- USER-NOTES-START -->
${extractUserNotes(existing)}
<!-- USER-NOTES-END -->

> [!tip] 如何使用这个区域
> 可以自由编辑上面两个标记之间的文字。重新执行 \`npm run career:vla\` 时，这个区域和你在本文勾选的 \`- [x]\` 任务会被保留；其余生成内容会随结构化计划更新。
`;

  const mainPlan = `## 总计划与逐日索引

${transformMainPlan(fs.readFileSync(mainPlanPath, "utf8"))}`;

  const detailSections = ["## 逐日详细执行"];
  for (const week of plan.weeks) {
    detailSections.push(`### 第 ${week.week} 周详细执行｜${week.theme}`);
    for (const day of week.days) detailSections.push(transformDailyGuide(day));
  }

  const footer = `## 文档维护

> [!info] 生成规则
> - 结构化计划源：\`data/career/vla-plan-weeks.json\`
> - 资源与课程记录：\`data/career/vla-plan-resources.json\`
> - 每日源文档：\`docs/career/daily-guides/day-001.md\`～\`day-112.md\`
> - 重新生成：\`npm run career:vla\`
> - 一致性检查：\`npm run career:vla:verify\`

%% generated-by: scripts/generate-vla-obsidian.mjs %%
`;

  const generated = `${header.trim()}\n\n${mainPlan.trim()}\n\n${detailSections.join("\n\n").trim()}\n\n${footer.trim()}\n`;
  return preserveCheckedTasks(existing, generated);
}

const existing = fs.existsSync(outputPath) ? fs.readFileSync(outputPath, "utf8") : "";
const generated = renderDocument(existing);

if (checkOnly) {
  if (normalizeEol(existing) !== normalizeEol(generated)) {
    console.error(
      `OUTDATED ${path.relative(rootDir, outputPath)} expected=${sha256(generated)} actual=${sha256(existing)}`,
    );
    process.exitCode = 1;
  } else {
    console.log(`Verified Obsidian document: ${path.relative(rootDir, outputPath)}`);
  }
} else {
  fs.writeFileSync(outputPath, generated, "utf8");
  console.log(`Generated Obsidian document: ${path.relative(rootDir, outputPath)}`);
}
