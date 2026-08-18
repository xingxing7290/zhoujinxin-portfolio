import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const plan = JSON.parse(fs.readFileSync(path.join(rootDir, "data/career/vla-plan-weeks.json"), "utf8"));
const resources = JSON.parse(fs.readFileSync(path.join(rootDir, "data/career/vla-plan-resources.json"), "utf8"));
const checkOnly = process.argv.includes("--check");
const allResources = [...resources.software, ...resources.hardware, ...resources.accounts_and_access];
const resourceMap = new Map(allResources.map((item) => [item.id, item]));
const days = plan.weeks.flatMap((week) => week.days);

const escapeMarkdown = (value) => String(value).replaceAll("|", "\\|");
const sha256 = (value) => crypto.createHash("sha256").update(value).digest("hex");
const normalizeEol = (value) => value.replace(/\r\n/g, "\n");

function dayDate(dayNumber) {
  const date = new Date(`${resources.schedule.start_date}T00:00:00+08:00`);
  date.setUTCDate(date.getUTCDate() + dayNumber - 1);
  return new Intl.DateTimeFormat("sv-SE", { timeZone: resources.schedule.timezone }).format(date);
}

function resourceLabel(id) {
  const item = resourceMap.get(id);
  if (!item) throw new Error(`Unknown resource ${id}`);
  const name = item.name ?? item.title ?? id;
  return item.url ? `[${id} ${name}](${item.url})` : `${id} ${name}`;
}

function commandChecks(day) {
  const text = `${day.title} ${day.tasks.join(" ")} ${day.deliverable}`;
  const checks = new Set([
    "git status --short",
    "git diff --check",
  ]);
  if (/CMake|C\+\+|epoll|kinematics|环形缓冲/.test(text)) {
    checks.add("cmake -S . -B build -DCMAKE_BUILD_TYPE=Debug");
    checks.add("cmake --build build --parallel");
    checks.add("ctest --test-dir build --output-on-failure");
  }
  if (/Python|PyTorch|ACT|SmolVLA|Dataset|数据|策略|工具|模拟器|训练|评测/.test(text)) {
    checks.add("python -m compileall -q src tools tests");
    checks.add("python -m pytest -q");
  }
  if (/ROS|tf2|rosbag|MCAP|URDF|Lifecycle|相机标定/.test(text)) {
    checks.add("colcon build --symlink-install");
    checks.add("colcon test");
    checks.add("colcon test-result --verbose");
  }
  if (/Docker|容器|compose/.test(text)) {
    checks.add("docker compose config --quiet");
    checks.add("docker compose build");
  }
  if (/Flutter|HMI/.test(text)) {
    checks.add("flutter analyze");
    checks.add("flutter test");
  }
  if (/Web|面板|API|平台|前端/.test(text)) {
    checks.add("npm run typecheck");
    checks.add("npm test");
  }
  if (/Buildroot/.test(text)) checks.add("make O=output edge_gateway_defconfig && make O=output");
  if (/CAN|SocketCAN/.test(text)) checks.add("ip -details -statistics link show can0  # 无真机时改为 vcan0，并在结果中标记 simulation");
  if (/MCU|GPIO|UART|I2C|SPI|FreeRTOS|Bootloader|固件/.test(text)) {
    checks.add("<执行 docs/toolchain.md 中已固定的 MCU clean build 命令>");
    checks.add("<执行对应烧录/硬件测试命令，并保存固件 hash 与串口日志>");
  }
  return [...checks];
}

function fallbackRules(day) {
  const text = `${day.title} ${day.tasks.join(" ")} ${day.resource_ids.join(" ")}`;
  const rules = [];
  if (/H12|H13|H14|H15|H16|硬件|MCU|CAN|传感器|开发板|真机/.test(text)) {
    rules.push("硬件未到、损坏或无授权：保留接口/解析器/mock测试，真实硬件验收标记 `BLOCKED`；写明预计获得日期，不得用 mock 结果替代波形、总线或真机结果。");
  }
  if (/H01|H05|H10|R 轨|S 轨|机械臂|遥操作/.test(text)) {
    rules.push("机械臂授权、独立急停、示教输入、SDK许可或持续排期任一缺失：立即执行 S 轨；不得发送真实动作，也不得在简历中使用“真机”“机械臂项目经验”。");
  }
  if (/H03|GPU|训练|ACT|SmolVLA|微调/.test(text)) {
    rules.push("GPU、显存或预算不足：缩小到 1 batch/少量 step 的 smoke，验证数据和恢复链路后停止；完整训练写 `RUNNING` 或 `BLOCKED`，不能因启动成功写成微调完成。");
  }
  if (/上游|Issue|PR|申请|投递|反馈/.test(text)) {
    rules.push("外部结果不可控：当天只验收本人可控的高质量材料、提交动作和记录；PR 合并、面试回复或 offer 不能作为 PASS 的必要条件，也不能伪造。");
  }
  if (day.wall_clock) {
    rules.push(`墙钟任务预计 ${day.wall_clock.expected}，硬上限 ${day.wall_clock.maximum}。${day.wall_clock.cost_rule}`);
  }
  if (!rules.length) rules.push("单点卡住超过 30 分钟：保存完整错误、最小复现和已排除项；把范围缩到一个可测试子问题，剩余项写 `PARTIAL`，不通过延长到深夜制造假进度。");
  return rules;
}

function timebox(day) {
  const verifyMinutes = day.hours === 4 ? 45 : 20;
  const closeMinutes = day.hours === 4 ? 20 : 15;
  const taskBudget = day.hours * 60 - 10 - verifyMinutes - closeMinutes;
  const baseTaskMinutes = Math.floor(taskBudget / day.tasks.length);
  const extraTaskMinutes = taskBudget % day.tasks.length;
  const rows = [
    ["00:00–00:10", "启动与基线", "记录真实开始时间、commit、环境/硬件状态；确认上一日结果。"],
  ];
  let cursor = 10;
  day.tasks.forEach((task, index) => {
    const taskMinutes = baseTaskMinutes + (index < extraTaskMinutes ? 1 : 0);
    const start = cursor;
    const end = start + taskMinutes;
    const fmt = (minutes) => `${String(Math.floor(minutes / 60)).padStart(2, "0")}:${String(minutes % 60).padStart(2, "0")}`;
    rows.push([`${fmt(start)}–${fmt(end)}`, `任务 ${index + 1}`, task]);
    cursor = end;
  });
  const fmt = (minutes) => `${String(Math.floor(minutes / 60)).padStart(2, "0")}:${String(minutes % 60).padStart(2, "0")}`;
  rows.push([`${fmt(cursor)}–${fmt(cursor + verifyMinutes)}`, "测试与验收", "运行当天相关检查，保存原始输出，并逐字核对验收标准。"]);
  cursor += verifyMinutes;
  rows.push([`${fmt(cursor)}–${fmt(cursor + closeMinutes)}`, "收尾与提交", "更新证据账本、结果状态和下一入口；测试通过后再提交。"]);
  return rows;
}

function taskRecipe(task) {
  const steps = [];
  if (/阅读|学习|整理|梳理|解释|口述|审计|盘点|核对/.test(task)) {
    steps.push("只读列出的官方/一手资料，先写出要回答的 3～5 个问题；阅读时逐条记录“结论、出处、适用版本、仍不确定项”，禁止只收藏链接。");
    steps.push("合上资料后用自己的话重写结论，并用一个反例或边界条件检验理解；无法解释的术语放入问题清单，不用“熟悉”代替掌握。");
  }
  if (/设计|定义|画出|列出|协议|架构|状态机|分区|Schema|schema|矩阵|规则|策略/.test(task)) {
    steps.push("先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。");
    steps.push("为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。");
  }
  if (/实现|编写|配置|创建|建立|接入|增加|封装|转换|适配|开发/.test(task)) {
    steps.push("先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。");
    steps.push("把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。");
  }
  if (/安装|构建|编译|下载|烧录|启动|重建|clone|环境/.test(task)) {
    steps.push("执行前记录当前版本、磁盘空间和回滚点；只按固定版本/commit操作，命令失败时保留完整 stderr，不连续尝试多个来源的安装方案。");
    steps.push("完成后从新 shell 或干净 build 目录复验；记录实际版本、产物 hash、退出码和启动现象，避免依赖当前终端的隐式环境变量。");
  }
  if (/测试|验证|测量|统计|评测|注入|模拟|回放|运行|采样|波形|冒烟/.test(task)) {
    steps.push("在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。");
    steps.push("保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。");
  }
  if (/采集|Episode|episode|数据集|样本/.test(task)) {
    steps.push("每批开始前锁定 task/spec 与数据 schema；每个样本生成唯一 ID，记录来源、R/S轨、时间、操作者/上游、有效性和失败原因。");
    steps.push("每完成一小批立即跑质量检查和 checksum；原始数据只追加不静默改写，无效样本保留在 manifest 并标明排除原因。");
  }
  if (/训练|微调|checkpoint|Checkpoint|模型/.test(task)) {
    steps.push("先用 1 batch/少量 step 验证 shape、loss、保存和恢复，再冻结数据 revision、配置、seed、代码 commit 与算力预算后启动正式任务。");
    steps.push("观察首个训练/验证周期并主动验证一次 checkpoint 恢复；训练仍在运行时写 RUNNING，不把开始训练、下载权重或官方 demo 当成完成微调。");
  }
  if (/发布|提交|Issue|issue|PR|申请|投递|公开|简历|README|报告|文档/.test(task)) {
    steps.push("发布/提交前逐条核对证据 ID、个人贡献、上游来源、R/S轨和禁用表述；运行隐私检查并人工搜索联系方式、设备标识、密钥和公司材料。");
    steps.push("记录实际提交版本、目标链接和时间；外部是否回复、合并或录用是后续状态，不在当天伪造成果，也不高频自动化操作网站。");
  }
  if (!steps.length) {
    steps.push("把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。");
    steps.push("至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。");
  }
  return steps.slice(0, 4);
}

function renderTask(day, task, index) {
  const dayId = String(day.day).padStart(3, "0");
  const taskId = String(index + 1).padStart(2, "0");
  const recipe = taskRecipe(task);
  return [
    `### 任务 ${index + 1}｜${task}`,
    "",
    `1. 在 \`logs/day-${dayId}.md\` 的 \`task_${taskId}\` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。`,
    ...recipe.map((step, recipeIndex) => `${recipeIndex + 2}. ${step}`),
    `${recipe.length + 2}. 每条实际执行命令连同退出码追加到 \`evidence/day-${dayId}/task-${taskId}-commands.txt\`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。`,
    `${recipe.length + 3}. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。`,
    `${recipe.length + 4}. 运行正常与失败用例，把结果记为 \`PASS\`、\`PARTIAL\` 或 \`BLOCKED\`。失败记录必须保留，禁止只截取最好的一次。`,
  ].join("\n");
}

function renderGuide(day, week) {
  const dayId = String(day.day).padStart(3, "0");
  const previous = days[day.day - 2];
  const next = days[day.day];
  const previousLink = previous ? `[上一天：Day ${String(previous.day).padStart(3, "0")}](day-${String(previous.day).padStart(3, "0")}.md)` : "";
  const nextLink = next ? `[下一天：Day ${String(next.day).padStart(3, "0")}](day-${String(next.day).padStart(3, "0")}.md)` : "";
  const nav = [previousLink, `[返回总计划](../VLA-LEROBOT-112-DAY-PLAN.md#day-${dayId})`, nextLink].filter(Boolean).join("｜");
  const previousRequirement = previous
    ? `先打开 Day ${String(previous.day).padStart(3, "0")} 的结果记录，确认其状态和交付物“${previous.deliverable}”。若为 BLOCKED，只继续与阻塞无关的部分。`
    : "这是计划第一天，不要求已有项目成果。";
  const rows = timebox(day).map((row) => `| ${row.map(escapeMarkdown).join(" | ")} |`).join("\n");
  const checks = commandChecks(day).map((command) => `- \`${command.replaceAll("`", "\\`")}\``).join("\n");
  const fallbacks = fallbackRules(day).map((rule) => `- ${rule}`).join("\n");
  const resultTemplate = [
    `# Day ${dayId} Result`,
    "",
    `- plan_day: D${dayId}`,
    `- scheduled_date: ${dayDate(day.day)}`,
    "- actual_started_at:",
    "- actual_finished_at:",
    "- actual_minutes:",
    "- result: PASS / PARTIAL / BLOCKED",
    "- git_commit_before:",
    "- git_commit_after:",
    "- hardware_or_environment:",
    "- track: embedded / R-real / S-simulation / not-applicable",
    "- evidence_ids:",
    "- unfinished:",
    "- next_entry:",
  ].map((line) => (line ? `    ${line}` : "")).join("\n");

  return `<!-- career-vla-guide: day-${dayId} -->

# Day ${dayId}｜${day.title}

> 计划日期：${dayDate(day.day)}｜主动投入：${day.hours} 小时｜第 ${week.week} 周

> 导航：${nav}

## 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“${day.deliverable}”，并满足：${day.acceptance}

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

## 开始前检查（10 分钟内）

- [ ] ${previousRequirement}
- [ ] 进入正确仓库，执行 \`git status --short --branch\`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 \`logs/day-${dayId}.md\` 和 \`evidence/day-${dayId}/\`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：${day.resource_ids.map(resourceLabel).join("；")}。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

## ${day.hours} 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
${rows}

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

## 逐项操作

${day.tasks.map((task, index) => renderTask(day, task, index)).join("\n\n")}

## 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

${checks}

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

## 当天交付物

- 主交付物：${day.deliverable}
- 日志：\`logs/day-${dayId}.md\`
- 原始证据目录：\`evidence/day-${dayId}/\`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

## 验收步骤

1. 按原文逐字核对：${day.acceptance}
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 \`PARTIAL\`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

## 阻塞与降级

${fallbacks}

统一判定：

- \`PASS\`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- \`PARTIAL\`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- \`BLOCKED\`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

## 当天结果模板

保存到 \`logs/day-${dayId}.md\`：

${resultTemplate}

当天结束前，确认 \`actual_*\` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。
`;
}

let mismatches = 0;
for (const week of plan.weeks) {
  for (const day of week.days) {
    if (day.day <= 2) continue;
    const filePath = path.join(rootDir, day.guide_path);
    const content = renderGuide(day, week);
    if (checkOnly) {
      const existing = fs.existsSync(filePath) ? fs.readFileSync(filePath, "utf8") : "";
      if (normalizeEol(existing) !== normalizeEol(content)) {
        console.error(`OUTDATED ${path.relative(rootDir, filePath)} expected=${sha256(content)} actual=${sha256(existing)}`);
        mismatches += 1;
      }
    } else {
      fs.mkdirSync(path.dirname(filePath), { recursive: true });
      fs.writeFileSync(filePath, content, "utf8");
    }
  }
}

if (mismatches) process.exitCode = 1;
else console.log(`${checkOnly ? "Verified" : "Generated"} ${days.length - 2} detailed daily guides.`);
