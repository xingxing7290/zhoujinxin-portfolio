import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(scriptDir, "..");
const checkOnly = process.argv.includes("--check");

const inputPaths = {
  resources: path.join(rootDir, "data", "career", "vla-plan-resources.json"),
  weeks: path.join(rootDir, "data", "career", "vla-plan-weeks.json"),
  algorithm: path.join(rootDir, "data", "research", "vla-jobs", "part-algorithm.json"),
  system: path.join(rootDir, "data", "research", "vla-jobs", "part-system.json"),
  dataDeploy: path.join(rootDir, "data", "research", "vla-jobs", "part-data-deploy.json"),
};

const outputPaths = {
  jobsJson: path.join(rootDir, "data", "research", "vla-jobs", "jobs-100.json"),
  jobsCsv: path.join(rootDir, "data", "research", "vla-jobs", "jobs-100.csv"),
  jobsReport: path.join(rootDir, "docs", "career", "VLA-100-JOBS-REPORT.md"),
  dailyPlan: path.join(rootDir, "docs", "career", "VLA-LEROBOT-112-DAY-PLAN.md"),
};

const expectedPartCounts = {
  algorithm: 35,
  system: 35,
  dataDeploy: 30,
};

const requiredJobFields = [
  "company",
  "title",
  "city",
  "category",
  "source_url",
  "source_type",
  "posted_at",
  "degree",
  "experience",
  "employment_type",
  "tech_stack",
  "requirements_summary",
  "fit_note",
  "evidence_checked_at",
];

const sourceGroups = {
  algorithm: {
    code: "CN-ALG",
    label: "国内·VLA/具身算法",
    marketScope: "中国大陆",
    purpose: "观察核心算法、世界模型、强化学习与真机部署的能力上限和学历门槛。",
  },
  system: {
    code: "CN-SYS",
    label: "国内·机器人系统工程",
    marketScope: "中国大陆",
    purpose: "识别当前最可迁移的 ROS2、Linux/C++、系统集成、真机调试与边缘部署岗位。",
  },
  dataDeploy: {
    code: "INT-DATA",
    label: "国际·数据与部署对标",
    marketScope: "国际",
    purpose: "使用企业官方岗位对标机器人数据闭环、评测、VLA Infra、Jetson 与端云平台成熟能力。",
  },
};

const skillMatchers = [
  ["Python", [/python/i]],
  ["C++", [/c\+\+(?:11|14|17|20|23)?/i, /\bcpp\b/i]],
  ["C", [(text, raw) => raw.some((item) => /(^|[/,&])\s*c\s*($|[/,&])/i.test(item) || /embedded\s+c/i.test(item))]],
  ["Linux/Ubuntu", [/linux/i, /ubuntu/i]],
  ["ROS 生态", [/\bros(?:2| bag)?\b/i, /ros\/ros2/i, /rosbag/i]],
  ["ROS 2", [/\bros\s*2\b/i, /\bros2\b/i, /ros\/ros2/i]],
  ["深度学习", [/深度学习/i, /deep learning/i, /pytorch/i, /tensorflow/i, /\bjax\b/i]],
  ["PyTorch", [/pytorch/i, /\btorch\b/i]],
  ["JAX", [/\bjax\b/i]],
  ["VLA 族", [/\bvla\b/i, /openpi/i, /\bpi0\b/i, /π0/i, /starvla/i, /smolvla/i, /x-vla/i, /vision.language.action/i, /视觉语言动作/i]],
  ["VLM/多模态模型", [/\bvlm\b/i, /多模态/i, /视觉语言模型/i]],
  ["LLM/Agent", [/\bllm\b/i, /agentic/i, /\bagent\b/i, /大语言模型/i, /大模型微调/i, /多智能体/i]],
  ["LeRobot", [/lerobot/i]],
  ["强化学习/RL", [/强化学习/i, /reinforcement/i, /rllib/i, /stable-baselines/i, /model-based rl/i, /\bppo\b/i, /\bdpo\b/i]],
  ["模仿学习/IL", [/模仿学习/i, /imitation/i, /behavior cloning/i, /行为克隆/i, /diffusion policy/i, /(^|\W)act(\W|$)/i]],
  ["World Model", [/world model/i, /世界模型/i]],
  ["Transformer", [/transformer/i, /attention/i]],
  ["Diffusion/Flow Policy", [/diffusion/i, /flow matching/i, /扩散/i]],
  ["ACT/Action Chunk", [/\bact\b/i, /action chunk/i]],
  ["CUDA/GPU", [/\bcuda\b/i, /\bgpu\b/i, /triton/i]],
  ["TensorRT", [/tensorrt/i]],
  ["ONNX", [/\bonnx\b/i]],
  ["边缘推理", [/jetson/i, /tensorrt/i, /\bonnx\b/i, /openvino/i, /\bnpu\b/i, /量化/i, /低延迟推理/i]],
  ["Jetson", [/jetson/i]],
  ["计算机视觉", [/opencv/i, /computer vision/i, /计算机视觉/i, /机器视觉/i, /视觉算法/i, /视觉感知/i, /图像处理/i]],
  ["相机/传感器/标定", [/camera/i, /sensor/i, /相机/i, /传感器/i, /标定/i, /calibration/i, /rgb-?d/i, /lidar/i, /激光雷达/i]],
  ["SLAM/定位导航", [/\bslam\b/i, /定位导航/i, /建图/i]],
  ["运动规划", [/motion planning/i, /path planning/i, /运动规划/i, /路径规划/i, /轨迹规划/i, /\brrt\b/i, /a\*/i, /chomp/i, /trajopt/i, /\bdwa\b/i, /\bteb\b/i]],
  ["运动学/动力学", [/kinematic/i, /dynamic/i, /运动学/i, /动力学/i]],
  ["运动控制", [/运动控制/i, /运控/i, /控制理论/i, /\bmpc\b/i, /\bwbc\b/i, /\bpid\b/i, /\bfoc\b/i]],
  ["MPC", [/\bmpc\b/i]],
  ["WBC", [/\bwbc\b/i, /whole.body control/i]],
  ["PID", [/\bpid\b/i]],
  ["RTOS/实时系统", [/\brtos\b/i, /freertos/i, /real.?time/i, /xenomai/i, /preempt.?rt/i, /实时系统/i, /实时控制/i]],
  ["机器人仿真", [/mujoco/i, /isaac (?:gym|sim|lab)/i, /gazebo/i, /pybullet/i, /maniskill/i, /libero/i, /robocasa/i]],
  ["Isaac", [/isaac/i]],
  ["MuJoCo", [/mujoco/i]],
  ["Gazebo/Webots/PyBullet", [/gazebo/i, /webots/i, /pybullet/i]],
  ["Sim-to-Real/仿真", [/sim.?to.?real/i, /simulation/i, /仿真/i, /数字孪生/i]],
  ["机器人真机/系统集成", [/real robot/i, /robot integration/i, /机器人系统/i, /真机/i, /系统集成/i, /机械臂/i, /人形机器人/i]],
  ["数据采集", [/数据采集/i, /vla训练数据/i, /第一视角数据/i]],
  ["数据管线/ETL", [/数据pipeline/i, /data pipeline/i, /\betl\b/i, /webdataset/i, /hdf5/i, /zarr/i, /数据管线/i, /数据湖/i, /数据仓库/i, /mcap/i, /rlds/i]],
  ["机器人数据格式", [/ros bag/i, /rosbag/i, /mcap/i, /rlds/i, /hdf5/i, /webdataset/i, /zarr/i, /parquet/i, /lerobotdataset/i]],
  ["遥操作/Teleop", [/teleop/i, /teleoperation/i, /遥操作/i, /示教器/i]],
  ["W&B/MLflow", [/wandb/i, /weights\s*&\s*biases/i, /mlflow/i]],
  ["云平台/对象存储", [/\baws\b/i, /\bgcp\b/i, /azure/i, /\bs3\b/i, /\bgcs\b/i, /object storage/i, /云平台/i]],
  ["Docker/容器", [/docker/i, /container/i, /容器/i]],
  ["Kubernetes", [/kubernetes/i, /\bk8s\b/i]],
  ["Git/CI/CD", [/\bgit\b/i, /github actions/i, /\bci\/cd\b/i, /\bci\b/i]],
  ["CMake/Bazel", [/cmake/i, /bazel/i]],
  ["gRPC/服务通信", [/\bgrpc\b/i, /rpc/i, /websocket/i]],
  ["IPC/网络编程", [/\bipc\b/i, /进程间通信/i, /共享内存/i, /网络编程/i, /\btcp\b/i, /\budp\b/i, /\bgrpc\b/i, /websocket/i, /socket/i, /ethernet/i, /以太网/i]],
  ["网络/MQTT", [/\bmqtt\b/i, /tcp\/ip/i, /network/i, /网络通信/i, /4g/i, /5g/i]],
  ["CAN", [/(^|\W)can(?: fd|open|\/socketcan)?(\W|$)/i]],
  ["EtherCAT", [/ethercat/i]],
  ["嵌入式/MCU/RTOS", [/embedded/i, /嵌入式/i, /\bmcu\b/i, /\brtos\b/i, /freertos/i, /microcontroller/i]],
  ["SQL/数据库", [/\bsql\b/i, /postgres/i, /mysql/i, /sqlite/i, /database/i, /数据库/i]],
  ["视频/FFmpeg", [/ffmpeg/i, /video/i, /视频/i]],
];

const personalFit = {
  positioning: "机器人软件 / 具身智能应用工程师（数据闭环、VLA 工程化、边云协同与安全控制）",
  existing: [
    "C、Embedded Linux、FreeRTOS/RT-Thread/LWIP 与 MCU/模组联调",
    "TCP/UDP、MQTT、RS485、Modbus、USB、BLE/SPP、4G 与异常恢复",
    "Linux 4G 网关、设备接入、端边云链路和长期运行问题治理",
    "Go/Vue/TypeScript/Flutter/Java/Python、SQLite/MySQL 与跨端交付",
    "Git、Docker、Wireshark、GDB、QEMU、FFmpeg 与现场问题定位",
  ],
  partial: [
    "C → 现代 C++：具备系统基础，但缺少 STL、RAII、CMake、并发与机器人生产项目证据",
    "Python 应用 → PyTorch 工程：有语言基础，没有模型训练、调参与评测闭环",
    "IoT 遥测、日志和媒体任务 → 机器人数据管线：缺图像—状态—动作同步与机器人数据格式",
    "Linux/QEMU/早期内核移植 → BSP/驱动：有基础但不能替代量产 BSP 或内核驱动证据",
    "GPS、电表、红外/雷达协议接入 → 传感器集成：不等于底层驱动或多传感器融合",
    "异常恢复与长期运行治理 → 机器人安全：不等于功能安全、关节限位或独立急停",
    "Dify/RAG/API 与 AI 协作开发 → AI 应用：不等于 VLA 模型训练或算法研究",
    "Docker 与平台部署 → CI/CD、Kubernetes、MLOps：需补 GPU 任务、模型和数据版本治理",
    "音视频同步经验 → 相机—状态—动作时间同步：概念可迁移，尚无机器人数据验证",
  ],
  gaps: [
    "现代 C++ 机器人生产代码、CMake 与并发/内存工程证据",
    "ROS2、tf2、URDF、rosbag2/MCAP、MoveIt 2 与机器人系统诊断",
    "PyTorch、Transformer、行为克隆、ACT、SmolVLA、IL/RL 与训练评测",
    "机械臂运动学/动力学、控制频率、相机标定、多模态时间同步",
    "LeRobot 真机适配、真实数据集、模型微调、泛化评测和安全控制",
    "CUDA/TensorRT/ONNX/Jetson 等推理优化与边缘部署",
    "CAN/CANopen、EtherCAT、伺服电机控制与硬件在环",
    "HDF5/Parquet/RLDS/WebDataset、Kubernetes/SLURM 与分布式训练",
  ],
  doNotClaim: [
    "职业级现代 C++、CMake 或机器人 C++ 平台经验",
    "CAN 总线项目经验或 CAN 电机开发经验",
    "伺服电机控制项目经验",
    "底层传感器驱动开发经验",
    "Ubuntu/ARM BSP、Linux 内核驱动或量产 BSP 能力",
    "ROS2、机械臂运动控制、LeRobot 或 VLA 已完成项目经验",
    "VLA 算法研究、基础模型预训练或论文级研究成果",
    "把设备指令/场景编排等同于机械臂运动控制，或把 QEMU 等同于机器人仿真",
  ],
};

function readJson(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (error) {
    throw new Error(`无法读取 JSON ${path.relative(rootDir, filePath)}：${error.message}`);
  }
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function normalizeKey(value) {
  return String(value)
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[\s（）()\-—_/・·，,]/g, "");
}

function validateHttpUrl(value, label) {
  let parsed;
  try {
    parsed = new URL(value);
  } catch {
    throw new Error(`${label} 不是有效 URL：${value}`);
  }
  assert(["http:", "https:"].includes(parsed.protocol), `${label} 必须是 HTTP(S)：${value}`);
}

function validateJobs(partName, payload, expectedCount) {
  assert(payload.snapshot_date === "2026-07-31", `${partName} snapshot_date 必须为 2026-07-31`);
  const hasMethodology =
    (typeof payload.methodology === "string" && payload.methodology.trim()) ||
    (payload.methodology &&
      typeof payload.methodology === "object" &&
      !Array.isArray(payload.methodology) &&
      Object.keys(payload.methodology).length > 0);
  assert(hasMethodology, `${partName} 缺少 methodology`);
  assert(Array.isArray(payload.jobs), `${partName}.jobs 必须是数组`);
  assert(payload.jobs.length === expectedCount, `${partName} 必须有 ${expectedCount} 条，实际 ${payload.jobs.length}`);

  const seen = new Set();
  payload.jobs.forEach((job, index) => {
    for (const field of requiredJobFields) {
      assert(Object.hasOwn(job, field), `${partName}[${index}] 缺少字段 ${field}`);
      if (field !== "tech_stack") {
        assert(typeof job[field] === "string" && job[field].trim(), `${partName}[${index}].${field} 不能为空`);
      }
    }
    assert(Array.isArray(job.tech_stack) && job.tech_stack.length > 0, `${partName}[${index}].tech_stack 必须为非空数组`);
    assert(job.tech_stack.every((item) => typeof item === "string" && item.trim()), `${partName}[${index}].tech_stack 含空值`);
    assert(job.evidence_checked_at === "2026-07-31", `${partName}[${index}] 核验日期不一致`);
    validateHttpUrl(job.source_url, `${partName}[${index}].source_url`);
    assert(
      !/C\/C\+\+|已有C\+\+|C\+\+系统集成|C\+\+工程经验|C\+\+基础(?:匹配|有用)/.test(job.fit_note),
      `${partName}[${index}].fit_note 把待补的现代 C++ 写成了已有经验`,
    );

    const key = [job.company, job.title, job.city].map(normalizeKey).join("|");
    assert(!seen.has(key), `${partName} 内部重复岗位：${job.company} / ${job.title} / ${job.city}`);
    seen.add(key);
  });
}

function validatePlan(resources, plan) {
  assert(resources.snapshot_date === "2026-07-31", "资源快照日期错误");
  assert(resources.project?.status === "拟建开源作品", "项目状态必须明确为“拟建开源作品”");
  assert(resources.project?.clarification?.includes("不是"), "项目说明必须明确不是现有同名仓库");
  assert(resources.schedule?.start_date === "2026-08-03", "计划开始日期错误");
  assert(resources.schedule?.end_date === "2026-11-22", "计划结束日期错误");
  assert(resources.schedule?.total_days === 112, "资源配置的总天数必须为 112");
  assert(resources.schedule?.planned_hours === 256, "资源配置的总工时必须为 256");
  assert(
    JSON.stringify(resources.schedule?.buffer_days) === JSON.stringify([28, 56, 84, 112]),
    "每四周必须设置一个阶段缓冲日",
  );
  assert(Array.isArray(resources.environment_rules) && resources.environment_rules.length >= 4, "环境隔离规则不足");
  assert(resources.fallback_tracks?.decision_day === 35, "真机/仿真分支必须在 Day 35 决策");
  assert(Array.isArray(resources.fallback_tracks?.rules) && resources.fallback_tracks.rules.length >= 6, "真机不可用的后续分支不完整");

  assert(Array.isArray(resources.accounts_and_access) && resources.accounts_and_access.length > 0, "缺少账号与授权资源");
  const allResources = [...resources.software, ...resources.hardware, ...resources.accounts_and_access];
  const resourceIds = new Set();
  for (const item of allResources) {
    assert(typeof item.id === "string" && item.id, "资源缺少 ID");
    assert(!resourceIds.has(item.id), `资源 ID 重复：${item.id}`);
    resourceIds.add(item.id);
    if (item.url) validateHttpUrl(item.url, `资源 ${item.id}`);
  }

  assert(Array.isArray(plan.weeks) && plan.weeks.length === 16, "逐日计划必须恰好 16 周");
  const days = plan.weeks.flatMap((week) => week.days);
  assert(days.length === 112, `逐日计划必须恰好 112 天，实际 ${days.length}`);
  const guidePaths = new Set();

  let totalHours = 0;
  plan.weeks.forEach((week, weekIndex) => {
    assert(week.week === weekIndex + 1, `周序号应为 ${weekIndex + 1}`);
    assert(typeof week.theme === "string" && week.theme, `第 ${week.week} 周缺少 theme`);
    assert(typeof week.goal === "string" && week.goal, `第 ${week.week} 周缺少 goal`);
    assert(typeof week.gate === "string" && week.gate, `第 ${week.week} 周缺少 gate`);
    assert(Array.isArray(week.days) && week.days.length === 7, `第 ${week.week} 周必须有 7 天`);
    assert(week.days.reduce((sum, day) => sum + day.hours, 0) === 16, `第 ${week.week} 周应为 16 小时`);
  });

  days.forEach((day, index) => {
    assert(day.day === index + 1, `Day 应连续为 ${index + 1}，实际 ${day.day}`);
    const expectedHours = index % 7 === 5 ? 4 : 2;
    assert(day.hours === expectedHours, `Day ${day.day} 工时应为 ${expectedHours}，实际 ${day.hours}`);
    assert(typeof day.title === "string" && day.title, `Day ${day.day} 缺少标题`);
    assert(Array.isArray(day.tasks) && day.tasks.length >= 2, `Day ${day.day} 至少需要 2 项任务`);
    assert(day.tasks.every((task) => typeof task === "string" && task.trim()), `Day ${day.day} 任务含空值`);
    assert(Array.isArray(day.resource_ids) && day.resource_ids.length > 0, `Day ${day.day} 缺少资源`);
    day.resource_ids.forEach((id) => assert(resourceIds.has(id), `Day ${day.day} 使用未知资源 ${id}`));
    if (day.guide_path !== undefined) {
      const dayId = String(day.day).padStart(3, "0");
      const expectedGuidePath = `docs/career/daily-guides/day-${dayId}.md`;
      assert(typeof day.guide_path === "string" && day.guide_path, `Day ${day.day}.guide_path 必须为非空字符串`);
      assert(day.guide_path === expectedGuidePath, `Day ${day.day}.guide_path 应为 ${expectedGuidePath}`);
      assert(!path.isAbsolute(day.guide_path), `Day ${day.day}.guide_path 不得为绝对路径`);
      assert(!day.guide_path.split(/[\\/]/).includes(".."), `Day ${day.day}.guide_path 不得包含 ..`);
      assert(!guidePaths.has(day.guide_path), `详细指南路径重复：${day.guide_path}`);
      guidePaths.add(day.guide_path);

      const guideFile = path.resolve(rootDir, day.guide_path);
      assert(fs.existsSync(guideFile), `Day ${day.day} 缺少详细指南：${day.guide_path}`);
      const guide = fs.readFileSync(guideFile, "utf8");
      assert(
        guide.includes(`<!-- career-vla-guide: day-${dayId} -->`),
        `Day ${day.day} 详细指南身份标记错误`,
      );
      assert(
        guide.includes(`(../VLA-LEROBOT-112-DAY-PLAN.md#day-${dayId})`),
        `Day ${day.day} 详细指南缺少返回总计划的稳定链接`,
      );
    }
    assert(typeof day.deliverable === "string" && day.deliverable, `Day ${day.day} 缺少交付物`);
    assert(typeof day.acceptance === "string" && day.acceptance, `Day ${day.day} 缺少验收标准`);
    if (day.wall_clock) {
      assert(
        typeof day.wall_clock.expected === "string" &&
          typeof day.wall_clock.maximum === "string" &&
          typeof day.wall_clock.cost_rule === "string",
        `Day ${day.day}.wall_clock 必须包含 expected/maximum/cost_rule`,
      );
    }
    totalHours += day.hours;
  });

  for (const dayNumber of [1, 2]) {
    assert(days[dayNumber - 1].guide_path, `Day ${dayNumber} 必须提供详细执行指南`);
  }

  const dualTrackDays = [54, 76, 78, 83, 95];
  for (const dayNumber of dualTrackDays) {
    const day = days[dayNumber - 1];
    const text = JSON.stringify(day);
    assert(text.includes("R 轨") && text.includes("S 轨"), `Day ${dayNumber} 必须明确 R 真机与 S 仿真两套验收`);
  }
  const weekEightGate = plan.weeks[7].gate;
  assert(
    weekEightGate.includes("R 轨") && weekEightGate.includes("S 轨"),
    "第 8 周阶段门必须同时允许 R 真机和 S 仿真路径",
  );

  assert(totalHours === 256, `计划总工时应为 256，实际 ${totalHours}`);
  return { allResources, resourceIds, days, totalHours };
}

function matcherHits(matcher, text, rawStack) {
  if (matcher instanceof RegExp) return matcher.test(text);
  return matcher(text, rawStack);
}

function normalizeTechStack(rawStack) {
  const text = rawStack.join(" | ");
  return skillMatchers
    .filter(([, matchers]) => matchers.some((matcher) => matcherHits(matcher, text, rawStack)))
    .map(([name]) => name);
}

function findUnmappedTechStack(rawStack) {
  return rawStack.filter((item) => {
    const normalizedItem = item.normalize("NFKC").trim().replace(/\s+/g, " ");
    return !skillMatchers.some(([, matchers]) =>
      matchers.some((matcher) => matcherHits(matcher, normalizedItem, [normalizedItem])),
    );
  });
}

function countValues(values) {
  const counts = new Map();
  for (const value of values) counts.set(value, (counts.get(value) ?? 0) + 1);
  return [...counts.entries()]
    .map(([value, count]) => ({ value, count }))
    .sort((a, b) => b.count - a.count || a.value.localeCompare(b.value, "zh-CN"));
}

function dateForDay(startDate, dayIndex) {
  const [year, month, day] = startDate.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day + dayIndex));
  return {
    iso: date.toISOString().slice(0, 10),
    weekday: new Intl.DateTimeFormat("zh-CN", { weekday: "long", timeZone: "UTC" }).format(date),
  };
}

function escapeMarkdown(value) {
  return String(value).replace(/\|/g, "／").replace(/\r?\n/g, " ").trim();
}

function csvCell(value) {
  const text = Array.isArray(value) ? value.join("; ") : String(value ?? "");
  return `"${text.replace(/"/g, '""').replace(/\r?\n/g, " ")}"`;
}

function formatPercent(count, total) {
  return `${((count / total) * 100).toFixed(0)}%`;
}

function isStrictMasterDegree(degree) {
  const text = String(degree ?? "").trim();
  if (/本科|可放宽|特别优秀.*本科|同等实战/.test(text)) {
    return false;
  }
  if (/硕士及以上|硕士或博士|硕博|^硕士(?:学历)?$/.test(text)) {
    return true;
  }
  return /博士/.test(text) && !/优先/.test(text);
}

function isStudentOrCampusJob(job) {
  return (
    /实习|校招/.test(job.employment_type) ||
    /实习生|校招/.test(job.title) ||
    /在读|本科高年级|本科大三/.test(job.degree)
  );
}

function hasFivePlusExperienceGate(experience) {
  return /(?:5|6|7|8|9|10)\s*(?:年|年以上)|5-10年|5至10年/.test(experience);
}

function deriveApplicationStage(job, partName) {
  if (partName === "dataDeploy") {
    return {
      stage: "国际技术对标",
      reason: "先核验工作许可、所在地、英语和资历，不默认进入直接投递池。",
    };
  }
  if (isStudentOrCampusJob(job)) {
    return {
      stage: "条件过滤",
      reason: "页面包含在读、实习或校招条件，2022 届社会招聘候选人需先核验资格。",
    };
  }
  if (isStrictMasterDegree(job.degree)) {
    return {
      stage: "P2 中长期",
      reason: "当前本科学历不满足页面显示的严格硕士门槛。",
    };
  }
  if (hasFivePlusExperienceGate(job.experience)) {
    return {
      stage: "条件过滤",
      reason: "页面包含 5 年及以上或资深年限门槛，需先核验是否有放宽空间。",
    };
  }

  const titleAndCategory = `${job.title} ${job.category}`;
  const nearTermSystem =
    /机器人数据运营工程师|数据平台工程师|前端\s*\/\s*嵌入式交互工程师|Linux软件开发工程师|嵌入式软件开发工程师（AGV）/i.test(
      job.title,
    );
  const adjacentAfterEvidence =
    /具身智能系统工程师|多智能体平台算法工程师|具身智能软件工程师|数据管线工程师|具身数据评估工程师|Agentic AI方向|数据闭环算法开发/i.test(
      job.title,
    );
  const longTermSpecialism =
    /算法|研究员|SLAM|力控|电机控制|伺服控制|运动控制|路径规划|规划控制|VLA|强化学习|世界模型|系统架构/i.test(
      titleAndCategory,
    ) && !/数据闭环算法开发/i.test(titleAndCategory);
  if (nearTermSystem) {
    return {
      stage: "P0 近期核验",
      reason: "岗位方向与现有 Linux/设备通信/端边云/平台交付存在迁移重合，仍需逐条核验机器人专项技能、年限、学历与用工条件。",
    };
  }
  if (adjacentAfterEvidence) {
    return {
      stage: "P1 作品/专项补证后",
      reason: "现有端边云、数据平台或 AI 应用经验可迁移，但需先补齐与岗位一致的机器人数据、ROS2 或 Agent 可复现作品。",
    };
  }
  if (partName === "system" && longTermSpecialism) {
    return {
      stage: "P2 中长期",
      reason: "岗位含算法、控制、SLAM 或系统架构专项门槛，112 天作品不能替代相应理论、真机和年限证据。",
    };
  }
  if (partName === "system") {
    const needsDedicatedLowLevelEvidence =
      /驱动|BSP|内核/i.test(titleAndCategory) ||
      job.tech_stack.some((item) => /Board Bring-up|FOC|伺服|CAN(?:open| FD)?|Windows驱动/i.test(item));
    return {
      stage: "P1 作品/专项补证后",
      reason: needsDedicatedLowLevelEvidence
        ? "需另行完成与岗位一致的驱动、CAN/伺服、板级或平台 C++ 实证；EdgeVLA 作品本身不能替代该专项经验。"
        : "完成 ROS2、LeRobot 真机或仿真闭环和现代 C++ 证据后再重点投递。",
    };
  }
  return {
    stage: "P2 中长期",
    reason: "算法/研究能力门槛高于当前证据，应在 PyTorch、IL/RL、VLA 和真机评测完成后再评估。",
  };
}

function flattenJobs(parts) {
  const jobs = [];
  let id = 1;
  for (const [partName, payload] of Object.entries(parts)) {
    for (const job of payload.jobs) {
      const group = sourceGroups[partName];
      const application = deriveApplicationStage(job, partName);
      jobs.push({
        id: `J${String(id).padStart(3, "0")}`,
        sample_bucket: partName === "dataDeploy" ? "data-deploy" : partName,
        sample_group: group.label,
        market_scope: group.marketScope,
        normalized_tech_stack: normalizeTechStack(job.tech_stack),
        unmapped_tech_stack: findUnmappedTechStack(job.tech_stack),
        application_stage: application.stage,
        application_stage_reason: application.reason,
        ...job,
      });
      id += 1;
    }
  }
  return jobs;
}

function validateCombinedJobs(jobs) {
  assert(jobs.length === 100, `合并后必须为 100 条，实际 ${jobs.length}`);
  const seen = new Map();
  const seenUrls = new Map();
  for (const job of jobs) {
    const key = [job.company, job.title, job.city].map(normalizeKey).join("|");
    if (seen.has(key)) {
      const first = seen.get(key);
      throw new Error(`100 岗位中存在重复：${first.id} 与 ${job.id}，${job.company} / ${job.title} / ${job.city}`);
    }
    seen.set(key, job);
    const urlKey = new URL(job.source_url).href;
    if (seenUrls.has(urlKey)) {
      const first = seenUrls.get(urlKey);
      throw new Error(`100 岗位复用了同一详情 URL：${first.id} 与 ${job.id}，${job.source_url}`);
    }
    seenUrls.set(urlKey, job);

    const strictGraduateText =
      /硕士及以上|硕士或博士|硕博/.test(job.degree) &&
      !/可放宽|特别优秀.*本科|本科.*同等实战|或本科|本科或/.test(job.degree);
    if (strictGraduateText && job.market_scope === "中国大陆" && !isStudentOrCampusJob(job)) {
      assert(job.application_stage === "P2 中长期", `${job.id} 严格研究生门槛不得进入 P0/P1`);
    }
    if (job.application_stage.startsWith("P1")) {
      const specialist =
        /算法|研究员|SLAM|力控|电机控制|伺服控制|运动控制|路径规划|规划控制|VLA|强化学习|世界模型|系统架构/i.test(
          `${job.title} ${job.category}`,
        ) &&
        !/数据闭环算法开发|多智能体平台算法工程师|Agentic AI方向/i.test(`${job.title} ${job.category}`);
      assert(!specialist, `${job.id} 含算法/控制/研究专项门槛，不得仅列为 P1`);
    }
  }
  assert(seen.size === 100, `唯一岗位必须为 100，实际 ${seen.size}`);
  assert(seenUrls.size === 100, `唯一岗位详情 URL 必须为 100，实际 ${seenUrls.size}`);
}

function buildStatistics(jobs) {
  const skillCounts = skillMatchers
    .map(([skill]) => ({
      skill,
      count: jobs.filter((job) => job.normalized_tech_stack.includes(skill)).length,
      domestic_count: jobs.filter((job) => job.market_scope === "中国大陆" && job.normalized_tech_stack.includes(skill)).length,
      international_count: jobs.filter((job) => job.market_scope === "国际" && job.normalized_tech_stack.includes(skill)).length,
    }))
    .filter((row) => row.count > 0)
    .sort((a, b) => b.count - a.count || a.skill.localeCompare(b.skill, "zh-CN"));
  const rawTokenCount = jobs.reduce((sum, job) => sum + job.tech_stack.length, 0);
  const unmappedTokenCount = jobs.reduce((sum, job) => sum + job.unmapped_tech_stack.length, 0);
  const strictMasterGate = jobs.filter((job) => isStrictMasterDegree(job.degree)).length;
  const studentOrCampusGate = jobs.filter(isStudentOrCampusJob).length;
  const seniorFivePlusGate = jobs.filter((job) => hasFivePlusExperienceGate(job.experience)).length;

  return {
    total_jobs: jobs.length,
    domestic_jobs: jobs.filter((job) => job.market_scope === "中国大陆").length,
    international_benchmark_jobs: jobs.filter((job) => job.market_scope === "国际").length,
    by_sample_group: countValues(jobs.map((job) => job.sample_group)),
    by_application_stage: countValues(jobs.map((job) => job.application_stage)),
    by_city: countValues(jobs.map((job) => job.city)),
    by_degree_raw: countValues(jobs.map((job) => job.degree)),
    by_experience_raw: countValues(jobs.map((job) => job.experience)),
    by_employment_type: countValues(jobs.map((job) => job.employment_type)),
    eligibility_snapshot: {
      degree_not_stated: jobs.filter((job) => job.degree === "未注明").length,
      experience_not_stated_or_years_missing: jobs.filter((job) => /未注明/.test(job.experience)).length,
      strict_master_gate_heuristic: strictMasterGate,
      student_or_campus_gate_heuristic: studentOrCampusGate,
      five_plus_year_gate_heuristic: seniorFivePlusGate,
      international_work_authorization_review: jobs.filter((job) => job.market_scope === "国际").length,
      note: "启发式数量只用于初筛，必须回到 requirements_summary 与原始页面人工确认。",
    },
    normalization_coverage: {
      raw_token_occurrences: rawTokenCount,
      mapped_token_occurrences: rawTokenCount - unmappedTokenCount,
      unmapped_token_occurrences: unmappedTokenCount,
      mapped_percent: Number((((rawTokenCount - unmappedTokenCount) / rawTokenCount) * 100).toFixed(1)),
      top_unmapped_terms: countValues(jobs.flatMap((job) => job.unmapped_tech_stack)).slice(0, 30),
    },
    skills: skillCounts,
  };
}

function buildJobsJson(parts, jobs, stats) {
  return {
    snapshot_date: "2026-07-31",
    generated_at: "2026-07-31",
    title: "VLA / 机器人岗位 100 样本与技术栈",
    methodology: {
      scope: "70 个中国大陆当前公开岗位用于求职判断，30 个国际企业官方岗位用于数据闭环与部署技术对标。",
      verification: "每条岗位均保留公开来源 URL、原始要求摘要和 2026-07-31 核验日期；招聘页面可能下线，本文是时间点快照。",
      deduplication: "以规范化后的公司 + 职位名称 + 城市去重，要求 100 条唯一记录。",
      platform_boundary: "未登录、未自动化操作 BOSS 直聘；优先使用企业/机构官方招聘页和官方 ATS，少量国内系统岗来自无需登录的公开招聘页。",
      interpretation: "岗位技术词频表示在本样本中被明确提及的岗位数，不等于硬性要求率、整个市场占比或候选人已掌握；C/C++、ROS/ROS2 等复合词在资格判断中需保留 any-of 语义。",
      sample_bucket_boundary: "algorithm/system/data-deploy 是采样桶，不是互斥的岗位语义分类。",
      parts: Object.fromEntries(
        Object.entries(parts).map(([name, payload]) => [
          name,
          {
            label: sourceGroups[name].label,
            count: payload.jobs.length,
            methodology: payload.methodology,
          },
        ]),
      ),
    },
    personal_fit: personalFit,
    statistics: stats,
    jobs,
  };
}

function buildJobsCsv(jobs) {
  const headers = [
    "id",
    "application_stage",
    "application_stage_reason",
    "sample_group",
    "market_scope",
    "company",
    "title",
    "city",
    "category",
    "degree",
    "experience",
    "employment_type",
    "normalized_tech_stack",
    "unmapped_tech_stack",
    "tech_stack",
    "requirements_summary",
    "fit_note",
    "source_type",
    "source_url",
    "posted_at",
    "evidence_checked_at",
  ];
  const rows = jobs.map((job) => headers.map((key) => csvCell(job[key])).join(","));
  return `\uFEFF${headers.map(csvCell).join(",")}\n${rows.join("\n")}\n`;
}

function markdownList(items) {
  return items.map((item) => `- ${item}`).join("\n");
}

function buildJobsReport(jobsPayload) {
  const { jobs, statistics: stats } = jobsPayload;
  const topSkills = stats.skills.slice(0, 40);
  const p0Jobs = jobs.filter((job) => job.application_stage === "P0 近期核验");
  const domesticCities = countValues(
    jobs.filter((job) => job.market_scope === "中国大陆").map((job) => job.city),
  ).slice(0, 15);

  const sections = [];
  sections.push(`# VLA / 机器人岗位 100 样本与技术栈报告`);
  sections.push(
    `> 快照日期：2026-07-31。样本共 100 个唯一岗位，其中中国大陆 70 个、国际技术对标 30 个。招聘页面会更新或下线，本报告不是永久有效的职位库存。`,
  );
  sections.push(`## 先看结论`);
  sections.push(
    [
      `- 当前最合理定位：**${personalFit.positioning}**。`,
      "- 近期主投：机器人 Linux 应用、机器人软件/系统集成、数据采集与质量工具、测试评测、边缘/现场部署、IoT+机器人平台。",
      "- 完成第 8–12 周真实里程碑后：扩大到 LeRobot 数据工具、机器人学习工程、VLA 推理部署与具身应用工程。",
      "- VLA/世界模型核心研究岗通常叠加硕博、PyTorch、IL/RL、论文或真机算法部署门槛，应作为中长期方向，不宜现在替代主要求职路线。",
      "- 100 条中的 30 条国际样本用于观察成熟数据闭环和部署能力，不直接等同于当前可投岗位。",
      "- 国际岗位还存在工作许可、所在地、英语和资历硬门槛；未确认资格前只作技术对标，不进入直接投递池。",
    ].join("\n"),
  );
  sections.push(`## 样本口径`);
  sections.push(
    [
      "| 样本组 | 数量 | 用途 |",
      "|---|---:|---|",
      ...stats.by_sample_group.map((row) => {
        const meta = Object.values(sourceGroups).find((group) => group.label === row.value);
        return `| ${escapeMarkdown(row.value)} | ${row.count} | ${escapeMarkdown(meta?.purpose ?? "")} |`;
      }),
    ].join("\n"),
  );
  sections.push(
    [
      "核验规则：",
      "",
      "- 每条记录保留公司、职位、城市、学历、经验、原始技术栈、要求摘要、个人匹配说明和公开来源。",
      "- 以公司 + 职位 + 城市做规范化去重，生成器会拒绝少于 100 个唯一岗位。",
      "- 未登录或自动化操作 BOSS 直聘；优先官方招聘页和官方 ATS。",
      "- 三个分片是采样桶而非互斥语义分类；例如“系统”样本也可能包含 SLAM、规划控制或 VLA 岗。",
      "- “未注明”严格表示页面未写，未自行推断。",
      "- 技术词频按“提到该技能的岗位数”统计；同一岗位同一技能只计一次。",
    ].join("\n"),
  );
  sections.push(`## 高频技术栈`);
  sections.push(
    [
      "| 排名 | 规范化技术栈 | 全部岗位 | 中国大陆（70） | 国际对标（30） |",
      "|---:|---|---:|---:|---:|",
      ...topSkills.map(
        (row, index) =>
          `| ${index + 1} | ${escapeMarkdown(row.skill)} | ${row.count}（${formatPercent(row.count, 100)}） | ${row.domestic_count} | ${row.international_count} |`,
      ),
    ].join("\n"),
  );
  sections.push(
    `> 说明：规范化只用于“显式提及次数”统计，不是硬性要求率。例如 ROS2 同时计入“ROS 生态”和“ROS 2”；VLM/WAM 不会自动计入 VLA；匹配使用词边界，避免把 VLAN 误算成 VLA、把 TensorRT 尾部误算成 RRT。原始 \`tech_stack\` 完整保留在 JSON/CSV 中。`,
  );
  sections.push(`### 规范化覆盖率`);
  sections.push(
    [
      "| 原始技术词出现次数 | 已映射 | 未映射 | 覆盖率 |",
      "|---:|---:|---:|---:|",
      `| ${stats.normalization_coverage.raw_token_occurrences} | ${stats.normalization_coverage.mapped_token_occurrences} | ${stats.normalization_coverage.unmapped_token_occurrences} | ${stats.normalization_coverage.mapped_percent}% |`,
      "",
      "未映射高频词（保留而非静默丢弃）：",
      "",
      stats.normalization_coverage.top_unmapped_terms.length
        ? stats.normalization_coverage.top_unmapped_terms
            .map((row) => `- ${row.value}：${row.count}`)
            .join("\n")
        : "- 无",
      "",
      "`C/C++`、`ROS/ROS2`、`PyTorch/JAX` 等复合项在“提及统计”中可以分别命中，但资格判断必须回到原文，按 any-of 而不是 all-of 处理。",
    ].join("\n"),
  );
  sections.push(`## 国内岗位城市分布`);
  sections.push(
    [
      "| 城市 | 岗位数 |",
      "|---|---:|",
      ...domesticCities.map((row) => `| ${escapeMarkdown(row.value)} | ${row.count} |`),
    ].join("\n"),
  );
  sections.push(`## 学历、经验与用工类型`);
  sections.push(
    [
      "学历原始口径（前 15 项）：",
      "",
      "| 页面原文 | 岗位数 |",
      "|---|---:|",
      ...stats.by_degree_raw.slice(0, 15).map((row) => `| ${escapeMarkdown(row.value)} | ${row.count} |`),
      "",
      "用工类型：",
      "",
      "| 类型 | 岗位数 |",
      "|---|---:|",
      ...stats.by_employment_type.map((row) => `| ${escapeMarkdown(row.value)} | ${row.count} |`),
      "",
      "经验要求原文差异很大，完整值保留在逐岗位表和 CSV；不要把“年限未注明”理解为不要求真实项目。",
    ].join("\n"),
  );
  sections.push(`### 硬门槛初筛`);
  sections.push(
    [
      "| 初筛项 | 岗位数 | 使用方式 |",
      "|---|---:|---|",
      `| 学历未注明 | ${stats.eligibility_snapshot.degree_not_stated} | 只能标为 unknown，不能当作无学历要求 |`,
      `| 严格硕士门槛（启发式） | ${stats.eligibility_snapshot.strict_master_gate_heuristic} | 本科学历候选人默认过滤，除非原文明确可放宽 |`,
      `| 在读／实习／校招条件（启发式） | ${stats.eligibility_snapshot.student_or_campus_gate_heuristic} | 2022 届社会招聘候选人需逐条核验学籍与毕业年份 |`,
      `| 5 年及以上资历（启发式） | ${stats.eligibility_snapshot.five_plus_year_gate_heuristic} | 与现有 3+ 年经历比较，不能只按技能重合投递 |`,
      `| 国际工作许可人工检查 | ${stats.eligibility_snapshot.international_work_authorization_review} | 默认只做技术对标，确认签证/地点/语言后才可投 |`,
      "",
      "硬门槛不能直接从 `tech_stack` 推断。筛选顺序应为：学历/学籍 → 经验年限 → 真实机器人或算法领域证据 → 工作许可/地点 → 技能重合度。带“优先、加分、可放宽”的内容只作为偏好或条件门槛。",
    ].join("\n"),
  );
  sections.push(`## 与周金鑫现有经历的匹配`);
  sections.push(`### 已有可直接迁移的证据\n\n${markdownList(personalFit.existing)}`);
  sections.push(`### 有基础但必须补证据\n\n${markdownList(personalFit.partial)}`);
  sections.push(`### 主要缺口\n\n${markdownList(personalFit.gaps)}`);
  sections.push(`### 简历不得提前声称\n\n${markdownList(personalFit.doNotClaim)}`);
  sections.push(`## 分阶段求职策略`);
  sections.push(
    [
      "| 阶段 | 时间 | 主投方向 | 进入条件 |",
      "|---|---|---|---|",
      "| P0 | 现在 | 机器人 Linux 应用、系统集成、设备/边缘通信、数据采集平台、测试/现场部署、智能硬件全栈 | 用现有 4G 网关、IoT 平台、Flutter 和长期稳定性证据投递 |",
      "| P1 | 3–6 个月作品或专项补证后 | LeRobot 数据工具、机器人数据闭环、VLA 推理部署、具身系统、Agent 应用，以及与既有嵌入式基础相邻的专项岗位 | EdgeVLA 用于机器人系统/数据岗；Agent、驱动、CAN/伺服、BSP 等岗位还要分别补对口实证，不能由一个作品自动覆盖 |",
      "| P2 | 6–12 个月后 | VLA/世界模型/强化学习算法工程 | 扎实 PyTorch、IL/RL、泛化评测、真实上游贡献；硕博硬门槛岗位仍需谨慎 |",
    ].join("\n"),
  );
  sections.push(`### 100 岗位初筛结果`);
  sections.push(
    [
      "| 初筛阶段 | 岗位数 | 含义 |",
      "|---|---:|---|",
      ...stats.by_application_stage.map((row) => {
        const meaning = {
          "P0 近期核验": "优先重新打开原页，核验学历、年限和具体机器人/C++门槛后定向投递。",
          "P1 作品/专项补证后": "按岗位补 ROS2/LeRobot、机器人数据、Agent、现代 C++ 或驱动/总线等对口实证。",
          "P2 中长期": "算法/学历/研究门槛高，作为 6–12 个月能力上限。",
          条件过滤: "学籍、校招、资历或其他条件可能不符，先过滤再谈技能。",
          国际技术对标: "默认只用于技术栈对标，工作许可等资格另行确认。",
        }[row.value];
        return `| ${escapeMarkdown(row.value)} | ${row.count} | ${escapeMarkdown(meaning ?? "")} |`;
      }),
      "",
      "这是一套透明的启发式初筛，不代表招聘方决定；每条仍需结合原始 JD 和 `fit_note` 人工复核。",
    ].join("\n"),
  );
  sections.push(`### P0 近期核验候选池`);
  sections.push(
    p0Jobs.length
      ? [
          "| ID | 公司 | 职位 | 城市 | 原始要求与个人判断 | 来源 |",
          "|---|---|---|---|---|---|",
          ...p0Jobs.map(
            (job) =>
              `| ${job.id} | ${escapeMarkdown(job.company)} | ${escapeMarkdown(job.title)} | ${escapeMarkdown(job.city)} | ${escapeMarkdown(job.fit_note)} | [公开页](${job.source_url}) |`,
          ),
        ].join("\n")
      : "本次启发式没有产生 P0 岗位；应从 P1 中按城市和硬门槛人工复核。",
  );
  sections.push(`## 100 个岗位明细`);
  sections.push(
    [
      "| ID | 初筛 | 样本 | 公司 | 职位 | 城市 | 学历 | 经验 | 规范化技术栈（节选） | 个人匹配判断 | 来源 |",
      "|---|---|---|---|---|---|---|---|---|---|---|",
      ...jobs.map(
        (job) =>
          `| ${job.id} | ${escapeMarkdown(job.application_stage)} | ${escapeMarkdown(job.sample_group)} | ${escapeMarkdown(job.company)} | ${escapeMarkdown(job.title)} | ${escapeMarkdown(job.city)} | ${escapeMarkdown(job.degree)} | ${escapeMarkdown(job.experience)} | ${escapeMarkdown(job.normalized_tech_stack.slice(0, 10).join("、"))} | ${escapeMarkdown(job.fit_note)} | [公开页](${job.source_url}) |`,
      ),
    ].join("\n"),
  );
  sections.push(`## 如何维护`);
  sections.push(
    [
      "1. 原始岗位只编辑 `data/research/vla-jobs/part-*.json`。",
      "2. 执行 `npm run career:vla` 重新生成 JSON、CSV 和两份 Markdown。",
      "3. 执行 `npm run career:vla:verify` 检查 100 个唯一岗位、112 天计划和生成文件一致性。",
      "4. 岗位链接失效时不要删除历史快照；记录失效日期，并在下一次市场快照中新增替代样本。",
    ].join("\n"),
  );
  return `${sections.join("\n\n")}\n`;
}

function resourceLabel(id, resourceMap) {
  const resource = resourceMap.get(id);
  if (!resource) return id;
  if (resource.url) return `[${id} ${resource.name}](${resource.url})`;
  return `${id} ${resource.name}`;
}

function buildDailyPlan(resources, plan, planValidation) {
  const resourceMap = new Map(planValidation.allResources.map((item) => [item.id, item]));
  const sections = [];
  sections.push(`# EdgeVLA Lab：112 天逐日学习与开源项目计划`);
  sections.push(
    [
      `> 项目状态：**${resources.project.status}**。`,
      `> ${resources.project.clarification}`,
      `> 计划周期：${resources.schedule.start_date} 至 ${resources.schedule.end_date}，共 16 周 / 112 天 / 256 小时。`,
    ].join("\n"),
  );
  sections.push(`## 项目定义与真实性边界`);
  sections.push(
    [
      `- 项目名称：**${resources.project.name}**`,
      `- 副标题：${resources.project.subtitle}`,
      `- 仓库状态：${resources.project.planned_repository}`,
      `- 简历规则：${resources.project.resume_rule}`,
      "- 现有上游：LeRobot、SO-101/SO-ARM100、LIBERO、ROS2、PyTorch 等；它们不是你的个人项目。",
      "- 个人作品：硬件适配、数据质量、训练评测、安全层、弱网实验、实验平台和公开证据；只有实际完成的部分才能写入简历。",
    ].join("\n"),
  );
  sections.push(`## 时间与执行规则`);
  sections.push(
    [
      "| 项目 | 设置 |",
      "|---|---|",
      `| 开始 / 结束 | ${resources.schedule.start_date} / ${resources.schedule.end_date} |`,
      `| 周一至周五 | 每天 ${resources.schedule.weekday_hours} 小时 |`,
      `| 周六 | ${resources.schedule.saturday_hours} 小时 |`,
      `| 周日 | ${resources.schedule.sunday_hours} 小时 |`,
      `| 总投入 | ${resources.schedule.planned_hours} 小时 |`,
      "| 工时口径 | 256 小时为主动学习/开发时间；GPU 训练和 soak 的机器墙钟时间单独列出，不等于持续人工值守 |",
      `| 缓冲规则 | ${escapeMarkdown(resources.schedule.buffer_rule)} |`,
      "| 进度原则 | 每天以可检查的交付物结束；连续卡住 30 分钟就记录问题并切换到 mock/仿真路径 |",
      "| 真实性原则 | 指标必须来自冻结协议和原始记录；未完成不得写成简历成果 |",
      "| 安全原则 | 真机必须有人看护、低速、独立物理急停；4G 不承担无保护硬实时控制 |",
    ].join("\n"),
  );
  sections.push(`## 资源总表`);
  sections.push(`### 环境隔离规则`);
  sections.push(
    [
      "| 环境 | 固定规则 |",
      "|---|---|",
      ...resources.environment_rules.map(
        (item) => `| ${escapeMarkdown(item.name)} | ${escapeMarkdown(item.rule)} |`,
      ),
    ].join("\n"),
  );
  sections.push(`### 软件、课程与官方文档`);
  sections.push(
    [
      "| ID | 资源 | 本计划用途 |",
      "|---|---|---|",
      ...resources.software.map(
        (item) => `| ${item.id} | [${escapeMarkdown(item.name)}](${item.url}) | ${escapeMarkdown(item.usage)} |`,
      ),
    ].join("\n"),
  );
  sections.push(`### 硬件与现场资源`);
  sections.push(
    [
      "| ID | 资源 | 优先级 | 要求 |",
      "|---|---|---|---|",
      ...resources.hardware.map(
        (item) =>
          `| ${item.id} | ${escapeMarkdown(item.name)} | ${escapeMarkdown(item.priority)} | ${escapeMarkdown(item.requirement)} |`,
      ),
    ].join("\n"),
  );
  sections.push(`### 账号、权限与协作资源`);
  sections.push(
    [
      "| ID | 资源 | 要求 |",
      "|---|---|---|",
      ...resources.accounts_and_access.map((item) => {
        const name = item.url ? `[${escapeMarkdown(item.name)}](${item.url})` : escapeMarkdown(item.name);
        return `| ${item.id} | ${name} | ${escapeMarkdown(item.requirement)} |`;
      }),
    ].join("\n"),
  );
  sections.push(`### 预算与采购门`);
  sections.push(markdownList(resources.budget_rules));
  sections.push(`## Day 35 后的双轨执行`);
  sections.push(
    [
      `- **决策日：Day ${resources.fallback_tracks.decision_day}。**`,
      `- **${resources.fallback_tracks.track_real}**`,
      `- **${resources.fallback_tracks.track_simulation}**`,
      "",
      "| 周次 | R 轨：真机条件满足 | S 轨：真机条件不满足 |",
      "|---|---|---|",
      ...resources.fallback_tracks.rules.map(
        (item) =>
          `| ${escapeMarkdown(item.weeks)} | ${escapeMarkdown(item.real)} | ${escapeMarkdown(item.simulation)} |`,
      ),
      "",
      "任何时候真机授权、物理急停、示教输入或持续排期失效，都立即从 R 轨降级到 S 轨；可以延后真机里程碑，但不能用仿真结果替代真机结果。",
    ].join("\n"),
  );
  sections.push(`## 16 周总览`);
  sections.push(
    [
      "| 周 | 日期 | 主题 | 阶段目标 | 周验收门 | 工时 |",
      "|---:|---|---|---|---|---:|",
      ...plan.weeks.map((week) => {
        const start = dateForDay(resources.schedule.start_date, (week.week - 1) * 7).iso;
        const end = dateForDay(resources.schedule.start_date, week.week * 7 - 1).iso;
        return `| ${week.week} | ${start}～${end} | ${escapeMarkdown(week.theme)} | ${escapeMarkdown(week.goal)} | ${escapeMarkdown(week.gate)} | 16 |`;
      }),
    ].join("\n"),
  );
  sections.push(`## 112 天逐日执行表`);

  for (const week of plan.weeks) {
    const weekStart = dateForDay(resources.schedule.start_date, (week.week - 1) * 7).iso;
    const weekEnd = dateForDay(resources.schedule.start_date, week.week * 7 - 1).iso;
    sections.push(
      [
        `### 第 ${week.week} 周｜${week.theme}｜${weekStart}～${weekEnd}`,
        "",
        `**本周目标：** ${week.goal}`,
        "",
        `**阶段门：** ${week.gate}`,
      ].join("\n"),
    );

    for (const day of week.days) {
      const date = dateForDay(resources.schedule.start_date, day.day - 1);
      const dayId = String(day.day).padStart(3, "0");
      const guideUrl = day.guide_path
        ? path
            .relative(path.dirname(outputPaths.dailyPlan), path.resolve(rootDir, day.guide_path))
            .split(path.sep)
            .join("/")
        : null;
      sections.push(
        [
          `<a id="day-${dayId}"></a>`,
          "",
          `#### Day ${dayId}｜${date.iso} ${date.weekday}｜${day.hours} 小时｜${day.title}`,
          "",
          ...(guideUrl ? [`**详细执行指南：** [Day ${dayId} 详细执行指南](${guideUrl})`, ""] : []),
          "**当天任务**",
          "",
          ...day.tasks.map((task) => `- [ ] ${task}`),
          "",
          `**所需资源：** ${day.resource_ids.map((id) => resourceLabel(id, resourceMap)).join("；")}`,
          "",
          ...(day.wall_clock
            ? [
                `**机器墙钟时间：** 预计 ${day.wall_clock.expected}；硬上限 ${day.wall_clock.maximum}；${day.wall_clock.cost_rule}`,
                "",
              ]
            : []),
          `**当天交付物：** ${day.deliverable}`,
          "",
          `**完成验收：** ${day.acceptance}`,
        ].join("\n"),
      );
    }
  }

  sections.push(`## 里程碑与简历开放条件`);
  sections.push(
    [
      "| 里程碑 | 最早时间 | 必须具备的证据 | 简历可写范围 |",
      "|---|---|---|---|",
      "| M0 环境与仿真 | 第 4 周 | 固定版本、数据检查、ACT 仿真训练与评测 | 只能写“正在系统学习/仿真实践”，不写真机项目 |",
      "| M1 真机数据 | 第 7 周 | 获准硬件适配、物理急停、50 个有效 episode、Dataset Card | 可写“机械臂数据采集工具开发中”，不得写 VLA 成果 |",
      "| M2 ACT 基线 | 第 8 周 | checkpoint、冻结评测、20 次逐轮真机记录和失败报告 | 可写真实 ACT 基线及样本数，数字必须带条件 |",
      "| M3 VLA 与泛化 | 第 10 周 | SmolVLA 微调、语言任务、位置/指令/光照等泛化评测 | 可写 VLA 微调和评测，但不得称基础模型研究 |",
      "| M4 边云与安全 | 第 12 周 | 异步队列、旧动作处理、故障注入、局域网/netem/真实 4G 对比 | 可写弱网与安全工程结果，不宣称 4G 硬实时 |",
      "| M5 条件开源 | 第 16 周 | R 轨门全过发布 v1.0.0；否则发布 v0.x simulation/data-tooling 或延期，并完成 CI、复现、许可与隐私审查 | 只能按实际发布范围进入简历，S 轨不得写真机成果 |",
    ].join("\n"),
  );
  sections.push(`## 偏航处理`);
  sections.push(
    [
      "- 同学机械臂不可持续使用：继续 mock/仿真，并在第 5 周采购门后决定 SO-101；不要临时把他人项目包装成自己的。",
      "- GPU 不足：先用 ACT 和小数据验证，再租按量 GPU；每个任务设置最长时长和成本上限。",
      "- SDK 不允许开源：只公开通用接口、mock、测试和经授权的薄适配示例，不提交厂商源码或协议材料。",
      "- 真机安全门不通过：停止自动控制，只做回放、数据工具和仿真；安全不因进度而降级。",
      "- SmolVLA 结果不佳：如实保留负面结果，从数据覆盖、归一化、同步、任务设计和模型基线逐项排查。",
      "- 求职压力增加：P0 岗位继续投递；本计划是能力升级路线，不要求暂停现有求职。",
    ].join("\n"),
  );
  return `${sections.join("\n\n")}\n`;
}

function writeOrCheck(filePath, content) {
  if (checkOnly) {
    assert(fs.existsSync(filePath), `缺少生成文件：${path.relative(rootDir, filePath)}`);
    const current = fs.readFileSync(filePath, "utf8");
    const normalizeEol = (value) => value.replace(/\r\n/g, "\n");
    assert(
      normalizeEol(current) === normalizeEol(content),
      `生成文件已过期：${path.relative(rootDir, filePath)}，请执行 npm run career:vla`,
    );
    return;
  }
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, "utf8");
}

function main() {
  const resources = readJson(inputPaths.resources);
  const plan = readJson(inputPaths.weeks);
  const parts = {
    algorithm: readJson(inputPaths.algorithm),
    system: readJson(inputPaths.system),
    dataDeploy: readJson(inputPaths.dataDeploy),
  };

  for (const [name, count] of Object.entries(expectedPartCounts)) {
    validateJobs(name, parts[name], count);
  }
  const planValidation = validatePlan(resources, plan);
  const jobs = flattenJobs(parts);
  validateCombinedJobs(jobs);
  const stats = buildStatistics(jobs);
  const jobsPayload = buildJobsJson(parts, jobs, stats);

  const outputs = {
    [outputPaths.jobsJson]: `${JSON.stringify(jobsPayload, null, 2)}\n`,
    [outputPaths.jobsCsv]: buildJobsCsv(jobs),
    [outputPaths.jobsReport]: buildJobsReport(jobsPayload),
    [outputPaths.dailyPlan]: buildDailyPlan(resources, plan, planValidation),
  };
  for (const [filePath, content] of Object.entries(outputs)) writeOrCheck(filePath, content);

  const mode = checkOnly ? "已验证" : "已生成";
  console.log(`${mode}：100 个唯一岗位，${planValidation.days.length} 天，${planValidation.totalHours} 小时。`);
  console.log(`国内岗位 ${stats.domestic_jobs}，国际技术对标 ${stats.international_benchmark_jobs}。`);
  console.log(`技术栈规范化条目 ${stats.skills.length}。`);
}

try {
  main();
} catch (error) {
  console.error(`[career:vla] ${error.message}`);
  process.exitCode = 1;
}
