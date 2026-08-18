---
aliases:
  - "EdgeVLA 112天执行手册"
  - "嵌入式到机器人112天计划"
tags:
  - career/embedded
  - robotics/lerobot
  - learning/112-days
  - obsidian/plan
status: active-plan
plan_version: "2.0"
plan_start: 2026-08-24
plan_end: 2026-12-13
total_days: 112
planned_hours: 256
course_bvid: BV1nz6KBHEc9
course_status: "已完整观看一遍"
course_completed: 2026-08-18
source_snapshot: 2026-08-18
cssclasses:
  - edgevla-execution-manual
---

# EdgeVLA Embedded-to-Robot Lab｜112天 Obsidian 执行手册

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
> - [x] **已完整观看一遍**：共 115 个视频分P（以课程公开页面为准）
> - 课程： [黑马程序员零基础具身智能机械臂实战项目开发全套视频课程](https://www.bilibili.com/video/BV1nz6KBHEc9)
> - 平台 / BV号：哔哩哔哩 / `BV1nz6KBHEc9`
> - 完成记录日期：2026-08-18
> - 证据类型：用户自述学习记录

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
| 1 | 真实边界、环境与工程基线 | Day 001–007 | [[#D001 详细执行｜项目启动与真实性边界|进入本周第一天]] |
| 2 | MCU 外设驱动与硬件测量 | Day 008–014 | [[#D008 详细执行｜开发板、原理图与引脚清单|进入本周第一天]] |
| 3 | FreeRTOS 多传感器节点 | Day 015–021 | [[#D015 详细执行｜任务模型与周期预算|进入本周第一天]] |
| 4 | CAN、Bootloader 与升级回滚 | Day 022–028 | [[#D022 详细执行｜CAN 2.0 与 SocketCAN 基线|进入本周第一天]] |
| 5 | Cortex-A7 Linux 系统构建 | Day 029–035 | [[#D029 详细执行｜Linux 板卡与 BSP 边界|进入本周第一天]] |
| 6 | 边缘网关、可靠性与机器人前置 | Day 036–042 | [[#D036 详细执行｜SocketCAN 网关适配|进入本周第一天]] |
| 7 | ROS 2、相机与系统接口 | Day 043–049 | [[#D043 详细执行｜ROS 2 Jazzy 安装与工作区|进入本周第一天]] |
| 8 | 机器人接口、Mock/真机与安全 | Day 050–056 | [[#D050 详细执行｜机械臂与 SDK 资产盘点|进入本周第一天]] |
| 9 | 小规模数据采集与质量控制 | Day 057–063 | [[#D057 详细执行｜任务定义与成功标准|进入本周第一天]] |
| 10 | ACT 小基线与冻结评测 | Day 064–070 | [[#D064 详细执行｜ACT 配置与数据审查|进入本周第一天]] |
| 11 | SmolVLA 小规模验证与泛化 | Day 071–077 | [[#D071 详细执行｜SmolVLA 架构与输入输出审计|进入本周第一天]] |
| 12 | 异步推理、弱网与本地安全 | Day 078–084 | [[#D078 详细执行｜Policy Server 与 Robot Client|进入本周第一天]] |
| 13 | 实验记录平台与最小 HMI | Day 085–091 | [[#D085 详细执行｜实验注册表后端|进入本周第一天]] |
| 14 | 测试、容器、性能与恢复 | Day 092–098 | [[#D092 详细执行｜容器与依赖分层|进入本周第一天]] |
| 15 | 脱敏开源、证据与技术表达 | Day 099–105 | [[#D099 详细执行｜README 与快速开始|进入本周第一天]] |
| 16 | 求职材料、投递实验与后续迭代 | Day 106–112 | [[#D106 详细执行｜可写入简历的指标审计|进入本周第一天]] |

## 我的学习记录

<!-- USER-NOTES-START -->
在这里记录只属于你的复盘、疑问、面试反馈或硬件采购状态。该区域会在重新生成文档时保留。
<!-- USER-NOTES-END -->

> [!tip] 如何使用这个区域
> 可以自由编辑上面两个标记之间的文字。重新执行 `npm run career:vla` 时，这个区域和你在本文勾选的 `- [x]` 任务会被保留；其余生成内容会随结构化计划更新。

## 总计划与逐日索引

> 项目状态：**拟建开源作品**。
> EdgeVLA Embedded-to-Robot Lab 是本计划拟开发的个人学习作品，不是 Hugging Face、LeRobot 或其他组织已经发布的同名仓库。LeRobot、SO-101 与 LIBERO 仅作为后半程上游依赖。
> 计划周期：2026-08-24 至 2026-12-13，共 16 周 / 112 天 / 256 小时。

### 项目定义与真实性边界

- 项目名称：**EdgeVLA Embedded-to-Robot Lab**
- 副标题：从 MCU、CAN 与嵌入式 Linux 边缘网关延伸到 ROS2、LeRobot 数据闭环和边云安全控制
- 仓库状态：Day 3 只创建私有学习仓库；第 15 周通过许可证、证据和隐私审查后，才按真实完成范围创建或开放独立公开仓库
- 简历规则：未完成并形成可复现证据前，不得作为已完成项目写入正式简历；只可在学习计划中标记为进行中。
- 现有上游：LeRobot、SO-101/SO-ARM100、LIBERO、ROS2、PyTorch 等；它们不是你的个人项目。
- 个人作品：硬件适配、数据质量、训练评测、安全层、弱网实验、实验平台和公开证据；只有实际完成的部分才能写入简历。

### 时间与执行规则

| 项目 | 设置 |
|---|---|
| 开始 / 结束 | 2026-08-24 / 2026-12-13 |
| 周一至周五 | 每天 2 小时 |
| 周六 | 4 小时 |
| 周日 | 2 小时 |
| 总投入 | 256 小时 |
| 工时口径 | 256 小时为主动学习/开发时间；GPU 训练和 soak 的机器墙钟时间单独列出，不等于持续人工值守 |
| 缓冲规则 | Day 28/56/84/112 的前 60 分钟只用于补失败项或复现；没有延期时用于隐私与证据审计。外部依赖卡住超过当日人工时间盒，标记 PARTIAL/BLOCKED 并执行降级轨，不挤占安全和测试。 |
| 进度原则 | 每天以可检查的交付物结束；连续卡住 30 分钟就记录问题并切换到 mock/仿真路径 |
| 真实性原则 | 指标必须来自冻结协议和原始记录；未完成不得写成简历成果 |
| 安全原则 | 真机必须有人看护、低速、独立物理急停；4G 不承担无保护硬实时控制 |

#### 本版执行前提

- 每周投入 16 小时：周一至周五各 2 小时、周六 4 小时、周日 2 小时。
- 默认只有 Windows/WSL 或 Ubuntu 主机；MCU、CAN、ARM Linux 板和机械臂都必须通过阶段门确认，未确认时执行 mock/QEMU/S 轨。
- 训练和长稳的墙钟时间可在后台运行，但人工排障单次不超过 2 小时；达到硬上限必须停止并记录。
- 所有真实指标必须带代码版本、硬件/环境、样本量和原始证据；公司源码、私有协议和个人隐私永不进入公开仓库。

### 资源总表

#### 环境隔离规则

| 环境 | 固定规则 |
|---|---|
| ROS 2 Jazzy 系统环境 | 使用原生 Ubuntu 24.04 与 /opt/ros/jazzy 的系统 Python/colcon；不在 LeRobot 的 conda/uv 环境里直接导入二进制 rclpy。 |
| LeRobot v0.6.0 环境 | 使用独立 uv/venv 或容器并固定 tag、commit 与 lockfile；GPU、PyTorch、FFmpeg 版本写入实验产物。 |
| ROS 与 LeRobot 桥接 | 优先通过 ROS topic/service、DDS、socket 或独立进程桥接；若必须同进程，需从源码构建兼容 rclpy 并单独记录，不混用未经验证的 Python ABI。 |
| ACT / ALOHA 仿真环境 | 固定 lerobot/aloha_sim_transfer_cube_human 数据集 revision 和 AlohaTransferCube-v0 环境；先验证 v0.6.0 的 feature/action 兼容性，再训练与评测。 |
| SmolVLA / LIBERO 仿真环境 | 独立 Linux/MuJoCo 环境；固定 HuggingFaceVLA/libero 数据集 revision、libero_10 任务与 observation/action schema，训练和评测必须使用兼容空间。 |

#### 软件、课程与官方文档

| ID | 资源 | 本计划用途 |
|---|---|---|
| R01 | [LeRobot v0.6.0 官方仓库](https://github.com/huggingface/lerobot/tree/v0.6.0) | 固定版本、阅读源码、提交 issue/PR |
| R02 | [LeRobot 安装指南](https://huggingface.co/docs/lerobot/v0.6.0/en/installation) | Python 3.12、PyTorch、FFmpeg 与可选依赖 |
| R03 | [Hugging Face Robot Learning Course](https://huggingface.co/learn/robotics-course/en/unit0/1) | 机器人学习入门与概念复习 |
| R04 | [LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3) | 多相机视频、状态、动作、时间戳和元数据 |
| R05 | [LeRobot 自定义硬件](https://huggingface.co/docs/lerobot/v0.6.0/en/integrate_hardware) | 为同学机械臂编写 Robot/Teleoperator 插件 |
| R06 | [LeRobot ACT 策略文档](https://huggingface.co/docs/lerobot/v0.6.0/en/act) | 单任务模仿学习基线和 action chunk |
| R07 | [SmolVLA 官方说明](https://huggingface.co/blog/smolvla) | VLA 架构、微调与异步推理 |
| R08 | [LeRobot LIBERO](https://huggingface.co/docs/lerobot/v0.6.0/en/libero) | Linux/MuJoCo 仿真训练与标准化评测 |
| R09 | [LeRobot 算力指南](https://huggingface.co/docs/lerobot/v0.6.0/en/hardware_guide) | ACT、SmolVLA 与大型 VLA 的显存和训练时长规划 |
| R10 | [LeRobot 异步推理](https://huggingface.co/docs/lerobot/v0.6.0/en/async) | Policy Server、Robot Client 与动作队列 |
| R11 | [LeRobot RTC](https://huggingface.co/docs/lerobot/v0.6.0/en/rtc) | 新旧动作块衔接和实时动作更新 |
| R12 | [ROS 2 官方文档](https://docs.ros.org/en/jazzy/index.html) | 节点、Topic、Service、Action、tf2、rosbag2 |
| R13 | [MoveIt 2 Jazzy 入门](https://moveit.picknik.ai/main/doc/tutorials/getting_started/getting_started.html) | 按 Ubuntu 24.04 / ROS 2 Jazzy 安装路径学习运动学、规划场景和安全约束；记录 apt 包版本 |
| R14 | [PyTorch Tutorials](https://docs.pytorch.org/tutorials/) | Tensor、Autograd、Dataset、训练循环和保存模型 |
| R15 | [OpenCV 相机标定](https://docs.opencv.org/4.x/dc/dbb/tutorial_py_calibration.html) | 相机内参与畸变标定 |
| R16 | [MuJoCo 文档](https://mujoco.readthedocs.io/en/stable/) | 仿真环境、可视化和故障复现 |
| R17 | [Weights & Biases 文档](https://docs.wandb.ai/) | 训练曲线、实验配置和模型产物追踪 |
| R18 | [Hugging Face Dataset Cards](https://huggingface.co/docs/hub/en/datasets-cards) | 数据来源、任务、划分、许可和限制说明 |
| R19 | [Hugging Face Model Cards](https://huggingface.co/docs/hub/en/model-cards) | 模型配置、指标、适用范围和限制说明 |
| R20 | [GitHub Actions 文档](https://docs.github.com/en/actions) | 测试、格式、容器构建和发布验证 |
| R21 | [Docker 文档](https://docs.docker.com/) | 固定运行环境与一键复现 |
| R22 | [Linux tc-netem](https://man7.org/linux/man-pages/man8/tc-netem.8.html) | 注入延迟、抖动、丢包和乱序 |
| R23 | [SO-101 开源硬件](https://github.com/TheRobotStudio/SO-ARM100) | 同学机械臂不可用时的备选真机平台与 BOM |
| R24 | [LeRobot Policy Rollout](https://huggingface.co/docs/lerobot/v0.6.0/en/inference) | 真机策略部署与同步推理基线 |
| R25 | [SmolVLA 官方微调指南](https://huggingface.co/docs/lerobot/v0.6.0/en/smolvla) | 语言条件任务、数据量建议、训练配置与真机评测 |
| R26 | [LeRobot Adding a Policy](https://huggingface.co/docs/lerobot/v0.6.0/en/bring_your_own_policies) | 理解自定义策略、可复现训练、checkpoint 与评测要求 |
| R27 | [LeRobot 贡献指南](https://huggingface.co/docs/lerobot/main/en/contributing) | 仅用于遵循当前上游贡献规范；运行时仍固定 v0.6.0，提交真实 issue、测试、文档或硬件插件 PR |
| R28 | [Hugging Face Jobs GPU 价格](https://huggingface.co/docs/hub/jobs-pricing) | 云 GPU 实验预算、最长运行时间与费用上限 |
| R29 | [ROS 2 Jazzy Python 环境指南](https://docs.ros.org/en/jazzy/How-To-Guides/Using-Python-Packages.html) | 隔离系统 Python、virtualenv 与 LeRobot 环境，避免 Conda 和二进制 rclpy ABI 冲突 |
| R30 | [OASIS MQTT 5.0 规范](https://docs.oasis-open.org/mqtt/mqtt/v5.0/mqtt-v5.0.html) | 设计 QoS、Session Expiry、Message Expiry、幂等和遥测/控制消息边界 |
| R31 | [OWASP MASVS 移动端安全标准](https://mas.owasp.org/MASVS/) | Flutter HMI 的认证、网络、存储、日志与高风险操作检查 |
| R32 | [LeRobot ALOHA 仿真数据集](https://huggingface.co/datasets/lerobot/aloha_sim_transfer_cube_human) | ACT 仿真闭环固定数据源；与 AlohaTransferCube-v0 的 observation/action 空间配套使用 |
| R33 | [LeRobot ACT ALOHA 模型卡](https://huggingface.co/lerobot/act_aloha_sim_transfer_cube_human) | 核对 ACT/AlohaTransferCube 训练与评测命令、模型配置、基线和限制 |
| R34 | [C++ Core Guidelines](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines) | 补齐 RAII、所有权、资源安全、错误处理和并发代码审查 |
| R35 | [CMake 官方教程](https://cmake.org/cmake/help/latest/guide/tutorial/) | 构建现代 C++/ROS2 组件、测试、依赖和可安装目标 |
| R36 | [Linux tracing 与性能工具文档](https://docs.kernel.org/trace/index.html) | strace/perf/ftrace 与系统诊断参考 |
| R37 | [Arm CMSIS 与 Cortex-M 文档](https://arm-software.github.io/CMSIS_6/latest/General/index.html) | MCU启动、内核与通用外设软件边界 |
| R38 | [FreeRTOS 官方文档](https://www.freertos.org/Documentation/00-Overview) | 任务、队列、中断和内核行为 |
| R39 | [Linux SocketCAN 官方文档](https://docs.kernel.org/networking/can.html) | CAN用户态、过滤、错误帧和虚拟接口 |
| R40 | [Buildroot 官方手册](https://buildroot.org/downloads/manual/manual.html) | 可复现嵌入式Linux镜像 |
| R41 | [Linux内核设备树文档](https://docs.kernel.org/devicetree/index.html) | 设备树与驱动边界 |
| R42 | [GoogleTest 官方入门](https://google.github.io/googletest/primer.html) | C++单元测试 |

#### 硬件与现场资源

| ID | 资源 | 优先级 | 要求 |
|---|---|---|---|
| H01 | 同学的机械臂与厂商 SDK | 必须先确认 | 型号、自由度、控制器、舵机、SDK、协议、ROS/ROS2 支持、允许开源的边界 |
| H02 | Linux 开发主机 | 必须 | 优先 Ubuntu；至少 32GB 内存、200GB 可用 SSD。具体系统版本服从机械臂 SDK 支持矩阵 |
| H03 | NVIDIA GPU 或按量云 GPU | 训练阶段必须 | ACT 可从 6GB 级开始；SmolVLA 建议 16GB 以上，24GB 更稳妥；显存与耗时会随分辨率、相机数、batch、冻结策略和精度变化，必须先冒烟实测；CPU 仅用于数据检查和轻量推理 |
| H04 | 固定机位 RGB 摄像头 | 必须 | 先 1 个 720p/30fps，真机稳定后扩展到前视+腕部双相机；固定曝光、焦距和支架 |
| H05 | 独立急停与安全工作区 | 必须 | 由熟悉该设备安全回路的人确认厂商停止方式、独立断能/使能急停、复位流程、动作限幅、低速模式和隔离测试区；完成带时间戳测试记录前禁止自动运动，软件急停不能替代物理急停 |
| H06 | 标定与任务物料 | 必须 | 棋盘格、颜色/形状可区分物体、两个容器、固定桌面标记、照明变量和卷尺 |
| H07 | 4G 网络与可控网络环境 | 第 12 周使用 | 4G 路由/热点、Linux netem；4G 仅用于遥测和实验，不进入未经保护的硬实时控制 |
| H08 | 可选边缘计算设备 | 可选 | Jetson Orin 或同级设备，只在 PC 真机链路稳定且岗位样本证明部署需求后采购 |
| H09 | SO-101 leader+follower | 备选 | 仅当同学机械臂无法持续使用或不允许开源时采购；2026-07-31 官方双臂核心 BOM 快照约 ¥1343，不含打印、相机、物流和安全附件，采购前必须重新询价 |
| H10 | 示教 / 遥操作输入源 | 真机采集前必须确认 | 至少一种获准且可稳定使用的输入源：leader arm、厂商示教器、手把手示教、gamepad 或键盘；必须支持 dead-man、低速和人工接管 |
| H11 | 原始数据独立备份介质 | 正式采集前必须 | 至少 500GB 可用空间的独立 SSD/NAS/对象存储；原始 episode 只追加不覆盖，使用校验和和双副本，公开包与私有原始区隔离 |
| H12 | 可持续使用的 HC32/STM32 开发板 | 阶段门前准备 | 准确型号、原理图、调试器和可重复烧录 |
| H13 | I2C传感器、SPI Flash与基础接线 | 阶段门前准备 | 优先使用有公开datasheet的器件 |
| H14 | CAN收发器与USB-CAN/第二节点 | 阶段门前准备 | 真实CAN验证；仅vcan不能算硬件经验 |
| H15 | 逻辑分析仪/示波器与安全供电 | 阶段门前准备 | 保存采样条件，不公开设备序列号 |
| H16 | ARM Linux开发板或QEMU目标 | 阶段门前准备 | 真实板不可用时明确标记QEMU-only |

#### 账号、权限与协作资源

| ID | 资源 | 要求 |
|---|---|---|
| A01 | [GitHub 账号与独立仓库](https://github.com/) | 学习阶段可先私有；第 15 周通过许可、隐私与安全审查后再公开，启用 Issues、Actions 与 Release |
| A02 | [Hugging Face Hub 账号](https://huggingface.co/) | 用于获准数据集、模型、Dataset Card 和 Model Card；私有资料不得误上传到公开仓库 |
| A03 | [实验跟踪账号](https://wandb.ai/) | W&B 可选；若不用则以本地 MLflow 或结构化日志替代，严禁上传密钥、原始隐私视频和厂商私有数据 |
| A04 | [按量 GPU 与预算告警](https://huggingface.co/docs/hub/jobs) | 仅在本地冒烟和 ACT 验证通过后使用；每个任务必须设置最长时间、费用上限和自动终止 |
| A05 | 机械臂所有者授权与使用排期 | 书面确认可用时段、设备责任、SDK/日志/视频/适配代码的公开边界，以及损坏与紧急停止处理方式 |
| A06 | 独立评审者 | 至少两名未参与对应文档编写的人，可由机械臂同学、软件同事或目标岗位从业者担任；用于任务判定、README 60 秒测试和发布前复核 |

#### 预算与采购门

- 第1周只使用现有电脑；第2周确认开发板、传感器、CAN收发器/USB-CAN和测量工具后才采购缺件。
- MCU/CAN/ARM板采购服务于嵌入式主线；机械臂、Jetson、深度相机不在前6周购买。
- Day49 机械臂五项前置条件任一不满足，自动选择S轨，不因已经投入时间而追加采购。
- 云GPU必须先通过CPU/小批smoke，设置预算告警和最长运行时间；训练完成不是2小时人工任务的必达条件。
- 真实硬件测试优先购买安全附件、急停和可靠供电，不优先升级算力。
- 公开前必须删除公司源码、私有协议、密钥、设备序列号、原始个人视频和联系方式。

### Day 49 后的双轨执行

- **决策日：Day 49。**
- **R 轨：只有机械臂书面授权、SDK许可、独立急停、示教输入和未来 6 周排期全部满足，才进行低速真机任务。**
- **S 轨：任一真机条件不满足即使用 mock/replay/公开仿真数据；完成接口、数据、策略、弱网和平台工程，但材料必须标记 simulation-only。**

| 周次 | R 轨：真机条件满足 | S 轨：真机条件不满足 |
|---|---|---|
| 1–6 | 两轨共同完成 MCU、CAN、Linux 网关；不接机械臂。 | 同左；机器人硬件不可用不阻塞嵌入式主线。 |
| 7 | 完成 ROS2 基础并核验机械臂五项前置条件。 | 完成相同 ROS2 基础，默认准备 mock/replay。 |
| 8 | 低速真机适配、物理急停与人工看护遥操作。 | Mock/replay适配、契约测试和软件安全状态机。 |
| 9–12 | 25个小规模真机样本、ACT/SmolVLA小基线和逐轮评测。 | 固定公开数据revision和仿真协议，所有结果标记simulation-only。 |
| 13–14 | 真实设备遥测、受限接管、硬件在环和长稳。 | 回放数据、模拟设备、CI、性能和服务恢复。 |
| 15–16 | 满足全部证据门后可发布真机实验范围。 | 发布embedded/simulation/data-tooling范围，不写真机或VLA生产经验。 |

任何时候真机授权、物理急停、示教输入或持续排期失效，都立即从 R 轨降级到 S 轨；可以延后真机里程碑，但不能用仿真结果替代真机结果。

### 16 周总览

| 周 | 日期 | 主题 | 阶段目标 | 周验收门 | 工时 |
|---:|---|---|---|---|---:|
| 1 | 2026-08-24～2026-08-30 | 真实边界、环境与工程基线 | 建立私有学习仓库、可复现环境和证据账本，并用可运行测试确认当前 C/C++、Linux 与 Python 基线。 | 从新 shell 可重建环境；C/C++ 与 Python 最小测试均通过；定位文档明确哪些是既有经验、学习目标和禁用表述。 | 16 |
| 2 | 2026-08-31～2026-09-06 | MCU 外设驱动与硬件测量 | 在真实开发板上完成 GPIO、UART DMA、I2C 传感器和 SPI Flash；无板时先用接口测试桩，但第 14 天前必须做硬件获取决策。 | 至少三类外设有可编译驱动、错误路径测试和真实波形/日志；若硬件未到，必须保留 BLOCKED 状态和到货计划，不得用 mock 冒充实测。 | 16 |
| 3 | 2026-09-07～2026-09-13 | FreeRTOS 多传感器节点 | 把外设驱动组织成可测量的实时系统，形成采集、处理、存储、通信和故障恢复闭环。 | 多任务节点连续运行 24 小时；栈、CPU、周期抖动和异常恢复均有测量；不存在在 ISR 中阻塞或用高优先级掩盖设计问题。 | 16 |
| 4 | 2026-09-14～2026-09-20 | CAN、Bootloader 与升级回滚 | 完成 MCU CAN 节点、Linux SocketCAN 工具链及可恢复固件升级，补齐求职中最关键的总线和升级证据。 | 真实 CAN 链路可处理心跳、超时和 Bus-Off；升级在正常、损坏和断电场景均有确定结果；阶段产物可脱敏复现。 | 16 |
| 5 | 2026-09-21～2026-09-27 | Cortex-A7 Linux 系统构建 | 用独立学习板或可公开仿真目标完成 Buildroot、启动链、设备树和服务管理，不把应用层经验夸大成完整 BSP。 | 可从干净配置生成镜像并启动；启动日志、设备树变更、systemd 服务和 C++ daemon 均有可复现证据。 | 16 |
| 6 | 2026-09-28～2026-10-04 | 边缘网关、可靠性与机器人前置 | 把 MCU/CAN 节点接入 Linux 网关，完成存储转发、升级、观测和长稳，同时补齐机器人坐标系与安全基础。 | 端到端链路在断网、重启、CAN异常和进程崩溃下可恢复；完成至少 48 小时长稳或如实记录 PARTIAL。 | 16 |
| 7 | 2026-10-05～2026-10-11 | ROS 2、相机与系统接口 | 完成可回放、可诊断、包含相机和虚拟关节状态的 ROS2 小系统，并在周末作正式硬件轨道决策。 | ROS2 工作区可从新 shell 构建运行；MCAP、tf2、标定和 diagnostics 均通过；Day 49 后 R/S 轨选择有书面证据。 | 16 |
| 8 | 2026-10-12～2026-10-18 | 机器人接口、Mock/真机与安全 | 用同一 Robot I/O 契约完成 S 轨 mock/replay；只有安全门全部通过时才在 R 轨低速接入真机。 | 契约测试、动作限制、超时、状态机和遥操作流程通过；R轨额外要求物理急停与人工看护，S轨材料明确simulation-only。 | 16 |
| 9 | 2026-10-19～2026-10-25 | 小规模数据采集与质量控制 | 在 R 轨采集 25 个有效 Episode，或在 S 轨固定 25 个公开数据 Episode/窗口；重点验证工具和质量，不追求数量。 | 25 个样本全部有 manifest、校验和、质量报告和明确来源；R/S 轨永久分开。 | 16 |
| 10 | 2026-10-26～2026-11-01 | ACT 小基线与冻结评测 | 先用小数据和低成本 ACT 验证训练、恢复、推理和评测链路；训练墙钟时间不计入人工工时。 | 训练任务可恢复；R轨完成10次、S轨完成20次冻结评测；成功率带样本量和条件，失败逐条保留。 | 16 |
| 11 | 2026-11-02～2026-11-08 | SmolVLA 小规模验证与泛化 | 在 ACT 链路稳定后才进行 SmolVLA 冒烟和小规模微调，用三个最有价值的变化维度做冻结评测。 | 微调可恢复；至少完成语言改写、位置和光照三类评测；算力或数据不足时允许停在smoke，不把未完成写成成果。 | 16 |
| 12 | 2026-11-09～2026-11-15 | 异步推理、弱网与本地安全 | 建立 Policy Server/Robot Client、动作年龄/队列守卫和本地安全状态机，再用 netem/真实4G量化弱网影响。 | 断线、旧动作、队列堆积和进程故障均进入安全状态；报告明确4G不承担硬实时安全控制。 | 16 |
| 13 | 2026-11-16～2026-11-22 | 实验记录平台与最小 HMI | 只实现支撑实验复现和人工接管的最小平台，不在一周内重造完整IoT产品。 | 能登记实验、查看健康和时间线、标注失败并触发受限人工接管；认证和隐私检查通过。 | 16 |
| 14 | 2026-11-23～2026-11-29 | 测试、容器、性能与恢复 | 将作品提升为可重建、可测试、可恢复的工程系统，硬件测试与模拟CI分离。 | CI绿色；镜像/环境可重建；48小时长稳或如实PARTIAL；关键故障有恢复证据。 | 16 |
| 15 | 2026-11-30～2026-12-06 | 脱敏开源、证据与技术表达 | 形成招聘方可复现、可质疑的公开证据，不以必须被上游接受PR作为完成条件。 | README、架构、数据/模型卡、失败演示、许可证和隐私审计完整；外部贡献按真实结果记录。 | 16 |
| 16 | 2026-12-07～2026-12-13 | 求职材料、投递实验与后续迭代 | 只把已通过证据门的内容同步到简历，完成三类定向材料、面试复盘和首批小规模投递。 | 证据与简历逐条可追溯；完成3～5个高匹配岗位投递和反馈记录；发布范围与R/S轨一致。 | 16 |

### 112 天逐日执行表

#### 第 1 周｜真实边界、环境与工程基线｜2026-08-24～2026-08-30

**本周目标：** 建立私有学习仓库、可复现环境和证据账本，并用可运行测试确认当前 C/C++、Linux 与 Python 基线。

**阶段门：** 从新 shell 可重建环境；C/C++ 与 Python 最小测试均通过；定位文档明确哪些是既有经验、学习目标和禁用表述。

<a id="day-001"></a>

##### Day 001｜2026-08-24 星期一｜2 小时｜项目启动与真实性边界

**详细执行指南：** [[#D001 详细执行｜项目启动与真实性边界|打开 Day 001 详细执行]]

**当天任务**

- [ ] 阅读 100 岗位报告的分类和高频技能，确定 P0/P1/P2 目标岗位。
- [ ] 盘点现有 Linux、C/C++、Python、4G、IoT、Flutter 证据，以及 ROS2、VLA、机械臂等缺口。
- [ ] 建立学习日志、实验编号和“未验证不得写入简历”的证据规则。

**所需资源：** [R01 LeRobot v0.6.0 官方仓库](https://github.com/huggingface/lerobot/tree/v0.6.0)；[R03 Hugging Face Robot Learning Course](https://huggingface.co/learn/robotics-course/en/unit0/1)；[R20 GitHub Actions 文档](https://docs.github.com/en/actions)

**当天交付物：** docs/positioning.md 与 evidence-ledger.csv 初版

**完成验收：** 每项能力均标注“已有证据/学习中/未开始”，且 CAN、伺服、ROS2、VLA 不被写成项目经验。

<a id="day-002"></a>

##### Day 002｜2026-08-25 星期二｜2 小时｜Linux 与 Python 环境固定

**详细执行指南：** [[#D002 详细执行｜Linux 与 Python 环境固定|打开 Day 002 详细执行]]

**当天任务**

- [ ] 确认 Ubuntu、NVIDIA 驱动、CUDA 与磁盘空间；无独显时记录云 GPU 方案。
- [ ] 为 LeRobot 创建独立 Python 3.12 uv/venv，安装 v0.6.0 tag 并保存 commit 与精确依赖。
- [ ] 建立 Ubuntu、驱动、CUDA、PyTorch、LeRobot、ROS2 的兼容矩阵；ROS 系统环境与 LeRobot 环境不混用。

**所需资源：** [R01 LeRobot v0.6.0 官方仓库](https://github.com/huggingface/lerobot/tree/v0.6.0)；[R02 LeRobot 安装指南](https://huggingface.co/docs/lerobot/v0.6.0/en/installation)；H02 Linux 开发主机；H03 NVIDIA GPU 或按量云 GPU

**当天交付物：** environment.md、依赖锁文件与诊断输出

**完成验收：** 在新 shell 中按脚本激活 LeRobot 环境并导入 torch、lerobot、opencv；输出中的 LeRobot commit 与锁定值一致。

<a id="day-003"></a>

##### Day 003｜2026-08-26 星期三｜2 小时｜仓库、分支与基础 CI

**详细执行指南：** [[#D003 详细执行｜仓库、分支与基础 CI|打开 Day 003 详细执行]]

**当天任务**

- [ ] 建立独立私有 EdgeVLA/Embedded 学习仓库，写明当前是学习与作品建设阶段，不复制任何公司源码。
- [ ] 配置 Python、C++17/CMake 的格式检查、构建和最小单元测试；CI 只跑小型、无硬件任务。
- [ ] 加入密钥、数据、模型、原始视频、设备标识和本机诊断文件的忽略与隐私检查规则。

**所需资源：** [R20 GitHub Actions 文档](https://docs.github.com/en/actions)；[R21 Docker 文档](https://docs.docker.com/)；[R34 C++ Core Guidelines](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines)；[R35 CMake 官方教程](https://cmake.org/cmake/help/latest/guide/tutorial/)；[A01 GitHub 账号与独立仓库](https://github.com/)

**当天交付物：** 仓库骨架、README 状态声明、首个绿色 CI

**完成验收：** 从空目录按 README 可完成安装和测试；仓库中无密钥、权重或隐私数据。

<a id="day-004"></a>

##### Day 004｜2026-08-27 星期四｜2 小时｜C 与现代 C++ 基线测评

**详细执行指南：** [[#D004 详细执行｜C 与现代 C++ 基线测评|打开 Day 004 详细执行]]

**当天任务**

- [ ] 完成 20 题闭卷自测：指针、生命周期、内存布局、volatile、大小端、对齐、线程安全与 RAII；不会的题原样记录。
- [ ] 分别用 C11 和 C++17 实现定长环形缓冲区，明确满/空策略、越界行为和所有权，不使用未定义行为。
- [ ] 为正常写读、回绕、满队列、空队列和并发边界编写测试，并用 AddressSanitizer/UBSan 运行。

**所需资源：** [R34 C++ Core Guidelines](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines)；[R35 CMake 官方教程](https://cmake.org/cmake/help/latest/guide/tutorial/)；[R42 GoogleTest 官方入门](https://google.github.io/googletest/primer.html)

**当天交付物：** cpp/ring_buffer、tests/ring_buffer_test.cpp 与 docs/c-cpp-baseline.md

**完成验收：** Debug/Release 均构建；至少 8 个测试通过；ASan/UBSan 无报告；基线文档列出不少于 5 个真实缺口。

<a id="day-005"></a>

##### Day 005｜2026-08-28 星期五｜2 小时｜CMake、GoogleTest 与可重复构建

**详细执行指南：** [[#D005 详细执行｜CMake、GoogleTest 与可重复构建|打开 Day 005 详细执行]]

**当天任务**

- [ ] 将环形缓冲区拆为 library、test、example 三个 target，不使用全局 include_directories。
- [ ] 加入编译告警并在学习代码中按错误处理；生成 compile_commands.json，记录编译器和 CMake 版本。
- [ ] 写一份从空 build 目录开始的构建脚本，并在第二个干净目录重复执行。

**所需资源：** [R35 CMake 官方教程](https://cmake.org/cmake/help/latest/guide/tutorial/)；[R42 GoogleTest 官方入门](https://google.github.io/googletest/primer.html)；[R20 GitHub Actions 文档](https://docs.github.com/en/actions)

**当天交付物：** CMakeLists.txt、cmake/、scripts/build-and-test.sh 与构建日志

**完成验收：** 两个干净 build 目录均能 configure/build/ctest；脚本无依赖手工修改的绝对路径。

<a id="day-006"></a>

##### Day 006｜2026-08-29 星期六｜4 小时｜Linux 调试工具最小闭环

**详细执行指南：** [[#D006 详细执行｜Linux 调试工具最小闭环|打开 Day 006 详细执行]]

**当天任务**

- [ ] 为示例程序制造一次内存越界、一次死锁风险和一次系统调用失败，先记录症状再修复。
- [ ] 分别使用 gdb、strace、Valgrind 或 Sanitizer 定位问题，保存脱敏命令与关键结论。
- [ ] 给程序增加退出信号处理、错误码和结构化日志，验证异常退出不会留下临时文件。

**所需资源：** [R36 Linux tracing 与性能工具文档](https://docs.kernel.org/trace/index.html)；[R34 C++ Core Guidelines](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines)；H02 Linux 开发主机

**当天交付物：** labs/linux-debugging、reports/linux-debugging-baseline.md

**完成验收：** 三个故障都有复现步骤、定位证据、修复提交和回归测试；报告中不包含用户名、主机名或公司路径。

<a id="day-007"></a>

##### Day 007｜2026-08-30 星期日｜2 小时｜第一周复现与能力边界复盘

**详细执行指南：** [[#D007 详细执行｜第一周复现与能力边界复盘|打开 Day 007 详细执行]]

**当天任务**

- [ ] 从新 clone 或干净工作树按 README 重建，计时并记录每个失败点，不复用当前 shell 的隐式环境。
- [ ] 运行 C/C++、Python、隐私和格式检查；将结果链接回 evidence ledger，而不是只截图。
- [ ] 更新 P0/P1/P2 定位：主投嵌入式 Linux/设备系统，补强 MCU/RTOS，机器人部署作为中期方向。

**所需资源：** [R20 GitHub Actions 文档](https://docs.github.com/en/actions)；[R34 C++ Core Guidelines](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines)；[R35 CMake 官方教程](https://cmake.org/cmake/help/latest/guide/tutorial/)

**当天交付物：** reviews/week-01.md、可复现构建日志与更新后的证据账本

**完成验收：** 干净环境在 30 分钟内完成构建测试；所有失败都有 issue/下一动作；没有把学习代码写成生产项目经验。

#### 第 2 周｜MCU 外设驱动与硬件测量｜2026-08-31～2026-09-06

**本周目标：** 在真实开发板上完成 GPIO、UART DMA、I2C 传感器和 SPI Flash；无板时先用接口测试桩，但第 14 天前必须做硬件获取决策。

**阶段门：** 至少三类外设有可编译驱动、错误路径测试和真实波形/日志；若硬件未到，必须保留 BLOCKED 状态和到货计划，不得用 mock 冒充实测。

<a id="day-008"></a>

##### Day 008｜2026-08-31 星期一｜2 小时｜开发板、原理图与引脚清单

**详细执行指南：** [[#D008 详细执行｜开发板、原理图与引脚清单|打开 Day 008 详细执行]]

**当天任务**

- [ ] 选定一块本人可持续使用的 HC32/STM32 开发板，保存准确型号、芯片手册、原理图和调试器版本。
- [ ] 列出时钟、Flash/RAM、GPIO、UART、I2C、SPI、CAN 与调试引脚，标记电平和复用冲突。
- [ ] 运行厂商最小工程并保存编译尺寸、下载日志和 LED 现象；失败时只诊断，不同时升级全部工具链。

**所需资源：** [R37 Arm CMSIS 与 Cortex-M 文档](https://arm-software.github.io/CMSIS_6/latest/General/index.html)；H12 可持续使用的 HC32/STM32 开发板；H15 逻辑分析仪/示波器与安全供电

**当天交付物：** hardware/mcu-inventory.md 与 firmware/board-smoke

**完成验收：** 文档能让他人接对电源和调试器；最小工程可重复编译下载；没有猜测未核验的芯片参数。

<a id="day-009"></a>

##### Day 009｜2026-09-01 星期二｜2 小时｜GPIO、按键与去抖状态机

**详细执行指南：** [[#D009 详细执行｜GPIO、按键与去抖状态机|打开 Day 009 详细执行]]

**当天任务**

- [ ] 用寄存器/HAL 的明确边界实现 LED 输出与按键输入，记录上拉、有效电平和中断触发方式。
- [ ] 实现非阻塞去抖状态机，不在中断中延时；加入短按、长按和抖动输入测试。
- [ ] 用逻辑分析仪测量按键抖动和响应延迟，保存原始采样与结论。

**所需资源：** [R37 Arm CMSIS 与 Cortex-M 文档](https://arm-software.github.io/CMSIS_6/latest/General/index.html)；H12 可持续使用的 HC32/STM32 开发板；H15 逻辑分析仪/示波器与安全供电

**当天交付物：** firmware/drivers/gpio_button、tests/button_fsm 与波形记录

**完成验收：** 10 次短按和 5 次长按均正确；ISR 无阻塞调用；报告写明采样率、阈值与最大响应时间。

<a id="day-010"></a>

##### Day 010｜2026-09-02 星期三｜2 小时｜UART DMA 环形缓冲区

**详细执行指南：** [[#D010 详细执行｜UART DMA 环形缓冲区|打开 Day 010 详细执行]]

**当天任务**

- [ ] 配置 UART RX DMA 或空闲中断，使用定长环形缓冲区接收分段数据。
- [ ] 实现长度校验、超时、溢出计数和错误恢复；协议解析器与硬件收发分层。
- [ ] 用脚本发送粘包、拆包、超长帧和随机字节，统计处理与丢弃结果。

**所需资源：** [R37 Arm CMSIS 与 Cortex-M 文档](https://arm-software.github.io/CMSIS_6/latest/General/index.html)；H12 可持续使用的 HC32/STM32 开发板；H15 逻辑分析仪/示波器与安全供电

**当天交付物：** firmware/drivers/uart_dma、tools/uart_fuzzer.py 与测试报告

**完成验收：** 连续发送不少于 1000 帧无死锁；所有非法帧被计数；缓冲区越界测试通过。

<a id="day-011"></a>

##### Day 011｜2026-09-03 星期四｜2 小时｜I2C 传感器独立驱动

**详细执行指南：** [[#D011 详细执行｜I2C 传感器独立驱动|打开 Day 011 详细执行]]

**当天任务**

- [ ] 根据传感器 datasheet 写寄存器表、上电时序和量程配置，不直接复制不明来源驱动。
- [ ] 实现设备 ID 检查、读写、超时、NACK 与重初始化路径，将原始值和物理量转换分开。
- [ ] 用逻辑分析仪核对地址、ACK、时钟频率和一次完整采样事务。

**所需资源：** [R37 Arm CMSIS 与 Cortex-M 文档](https://arm-software.github.io/CMSIS_6/latest/General/index.html)；H13 I2C传感器、SPI Flash与基础接线；H15 逻辑分析仪/示波器与安全供电

**当天交付物：** firmware/drivers/i2c_sensor、docs/i2c-timing.md 与波形

**完成验收：** 冷启动 20 次均识别设备；拔掉传感器后在限定时间内报错且任务不阻塞；物理量转换有边界测试。

<a id="day-012"></a>

##### Day 012｜2026-09-04 星期五｜2 小时｜SPI Flash 与掉电安全参数区

**详细执行指南：** [[#D012 详细执行｜SPI Flash 与掉电安全参数区|打开 Day 012 详细执行]]

**当天任务**

- [ ] 依据 JEDEC ID 确认 Flash，完成读 ID、页编程、扇区擦除和忙状态轮询。
- [ ] 设计双副本参数页，包含版本、长度、序号和 CRC；写入流程避免覆盖最后一份有效配置。
- [ ] 在写入不同阶段模拟复位，验证启动后选择最新有效副本。

**所需资源：** [R37 Arm CMSIS 与 Cortex-M 文档](https://arm-software.github.io/CMSIS_6/latest/General/index.html)；H13 I2C传感器、SPI Flash与基础接线；H15 逻辑分析仪/示波器与安全供电

**当天交付物：** firmware/drivers/spi_flash、firmware/storage/config_store 与掉电测试表

**完成验收：** 跨页读写和擦除测试通过；至少 6 个复位注入点均能恢复一个有效配置；不把仿真复位写成真实断电。

<a id="day-013"></a>

##### Day 013｜2026-09-05 星期六｜4 小时｜外设故障注入与波形复核

**详细执行指南：** [[#D013 详细执行｜外设故障注入与波形复核|打开 Day 013 详细执行]]

**当天任务**

- [ ] 建立 I2C NACK、UART 噪声、SPI 超时和按键抖动四类故障用例。
- [ ] 逐项运行并记录故障检测时间、恢复动作、错误计数和是否需要人工重启。
- [ ] 整理关键波形、固件版本、测试接线和复现命令，剔除没有测试条件的漂亮截图。

**所需资源：** [R37 Arm CMSIS 与 Cortex-M 文档](https://arm-software.github.io/CMSIS_6/latest/General/index.html)；H12 可持续使用的 HC32/STM32 开发板；H13 I2C传感器、SPI Flash与基础接线；H15 逻辑分析仪/示波器与安全供电

**当天交付物：** reports/peripheral-fault-matrix.csv 与 evidence/peripheral-waveforms

**完成验收：** 四类故障均有预期/实际结果；至少一项负面结论被保留；同一固件版本可重复复现。

<a id="day-014"></a>

##### Day 014｜2026-09-06 星期日｜2 小时｜第二周阶段门与硬件采购决策

**详细执行指南：** [[#D014 详细执行｜第二周阶段门与硬件采购决策|打开 Day 014 详细执行]]

**当天任务**

- [ ] 从清空 build 目录开始重新编译下载，逐项执行 GPIO/UART/I2C/SPI 冒烟。
- [ ] 检查硬件是否足以进入 FreeRTOS 与 CAN；缺 CAN 时确定收发器/USB-CAN 的具体获取方式和最晚日期。
- [ ] 用 10 分钟口述解释四种总线的电气、时序和典型失败差异，记录答不上来的问题。

**所需资源：** [R37 Arm CMSIS 与 Cortex-M 文档](https://arm-software.github.io/CMSIS_6/latest/General/index.html)；[R38 FreeRTOS 官方文档](https://www.freertos.org/Documentation/00-Overview)；H12 可持续使用的 HC32/STM32 开发板；H14 CAN收发器与USB-CAN/第二节点；H15 逻辑分析仪/示波器与安全供电

**当天交付物：** reviews/week-02.md、硬件决策记录与复现日志

**完成验收：** 真实硬件项按 PASS/PARTIAL/BLOCKED 标注；不存在用仿真波形替代实测的条目；下周依赖已落实。

#### 第 3 周｜FreeRTOS 多传感器节点｜2026-09-07～2026-09-13

**本周目标：** 把外设驱动组织成可测量的实时系统，形成采集、处理、存储、通信和故障恢复闭环。

**阶段门：** 多任务节点连续运行 24 小时；栈、CPU、周期抖动和异常恢复均有测量；不存在在 ISR 中阻塞或用高优先级掩盖设计问题。

<a id="day-015"></a>

##### Day 015｜2026-09-07 星期一｜2 小时｜任务模型与周期预算

**详细执行指南：** [[#D015 详细执行｜任务模型与周期预算|打开 Day 015 详细执行]]

**当天任务**

- [ ] 画出采集、解析、存储、通信和监控任务及数据流。
- [ ] 为每个任务定义周期、截止时间、优先级、栈预算和最坏阻塞点。
- [ ] 先建立空任务与运行时统计，测量空载 CPU 和调度基线。

**所需资源：** [R38 FreeRTOS 官方文档](https://www.freertos.org/Documentation/00-Overview)；H12 可持续使用的 HC32/STM32 开发板

**当天交付物：** docs/rtos-task-design.md 与 firmware/app/task_skeleton

**完成验收：** 任务表包含周期/优先级/栈/阻塞资源；空载统计可重复；没有凭感觉填写性能数字。

<a id="day-016"></a>

##### Day 016｜2026-09-08 星期二｜2 小时｜Queue、Semaphore 与所有权

**详细执行指南：** [[#D016 详细执行｜Queue、Semaphore 与所有权|打开 Day 016 详细执行]]

**当天任务**

- [ ] 用 Queue 传递传感器样本，定义值拷贝或对象池所有权。
- [ ] 用二值信号量连接 ISR 与任务，互斥锁只保护共享外设且设置超时。
- [ ] 构造队列满、消费者暂停和资源竞争测试，观察丢弃策略。

**所需资源：** [R38 FreeRTOS 官方文档](https://www.freertos.org/Documentation/00-Overview)；H12 可持续使用的 HC32/STM32 开发板

**当天交付物：** firmware/app/pipeline 与 tests/rtos_queue_cases.md

**完成验收：** 队列满不会覆盖未消费数据；所有等待都有上限；测试能解释 semaphore、mutex 和 queue 的选择。

<a id="day-017"></a>

##### Day 017｜2026-09-09 星期三｜2 小时｜ISR 到任务与 DMA 完成路径

**详细执行指南：** [[#D017 详细执行｜ISR 到任务与 DMA 完成路径|打开 Day 017 详细执行]]

**当天任务**

- [ ] 将 UART/I2C/SPI 完成事件统一转交任务处理，ISR 只做清标志和通知。
- [ ] 测量中断到任务被唤醒的延迟，并记录测试频率、优化级别和测量点。
- [ ] 加入中断风暴或重复完成事件，确认系统仍可响应看门狗任务。

**所需资源：** [R38 FreeRTOS 官方文档](https://www.freertos.org/Documentation/00-Overview)；H12 可持续使用的 HC32/STM32 开发板；H15 逻辑分析仪/示波器与安全供电

**当天交付物：** firmware/platform/isr_bridge 与 reports/isr-latency.csv

**完成验收：** 至少 1000 个样本；报告给出中位数/最大值而非单次最好值；ISR 路径无动态分配和阻塞日志。

<a id="day-018"></a>

##### Day 018｜2026-09-10 星期四｜2 小时｜多传感器采样与时间戳

**详细执行指南：** [[#D018 详细执行｜多传感器采样与时间戳|打开 Day 018 详细执行]]

**当天任务**

- [ ] 统一样本结构：source、sequence、monotonic timestamp、quality 和 raw value。
- [ ] 按各传感器速率采样并在处理层转换单位，不把协议接入描述成底层传感器融合。
- [ ] 模拟一类传感器延迟和一类掉线，验证其他采集通道继续工作。

**所需资源：** [R37 Arm CMSIS 与 Cortex-M 文档](https://arm-software.github.io/CMSIS_6/latest/General/index.html)；[R38 FreeRTOS 官方文档](https://www.freertos.org/Documentation/00-Overview)；H13 I2C传感器、SPI Flash与基础接线

**当天交付物：** firmware/app/sensor_pipeline 与 sample-log.csv

**完成验收：** 序号可检测丢样；时间戳单调；单设备掉线不阻塞整个采集任务。

<a id="day-019"></a>

##### Day 019｜2026-09-11 星期五｜2 小时｜看门狗、故障状态与受控恢复

**详细执行指南：** [[#D019 详细执行｜看门狗、故障状态与受控恢复|打开 Day 019 详细执行]]

**当天任务**

- [ ] 定义启动、运行、降级、故障和恢复状态，列出每个状态允许的动作。
- [ ] 为关键任务设置心跳窗口，只有全部健康才喂硬件看门狗。
- [ ] 注入任务卡死、队列堵塞和传感器故障，分别验证重启或降级路径。

**所需资源：** [R38 FreeRTOS 官方文档](https://www.freertos.org/Documentation/00-Overview)；H12 可持续使用的 HC32/STM32 开发板

**当天交付物：** firmware/safety/supervisor 与 reports/recovery-matrix.csv

**完成验收：** 至少三类故障有真实触发记录；看门狗不会被单一高优先级任务无条件喂；恢复原因可追溯。

<a id="day-020"></a>

##### Day 020｜2026-09-12 星期六｜4 小时｜设备协议与主机模拟器

**详细执行指南：** [[#D020 详细执行｜设备协议与主机模拟器|打开 Day 020 详细执行]]

**当天任务**

- [ ] 定义版本化二进制或 JSON 测试协议，包含设备 ID、序号、时间、状态和 CRC/长度。
- [ ] 实现 MCU 编解码器和 Python 主机模拟器，生成正常、边界和畸形帧。
- [ ] 用 golden vectors 验证两端一致，明确大小端和升级兼容策略。

**所需资源：** [R30 OASIS MQTT 5.0 规范](https://docs.oasis-open.org/mqtt/mqtt/v5.0/mqtt-v5.0.html)；[R38 FreeRTOS 官方文档](https://www.freertos.org/Documentation/00-Overview)；H02 Linux 开发主机；H12 可持续使用的 HC32/STM32 开发板

**当天交付物：** protocol/device-v1.md、firmware/protocol 与 tools/device_simulator.py

**完成验收：** 至少 20 个 golden vectors 双端通过；未知字段/版本行为明确；fuzzer 不导致 MCU 崩溃。

<a id="day-021"></a>

##### Day 021｜2026-09-13 星期日｜2 小时｜24 小时运行与第三周复盘

**详细执行指南：** [[#D021 详细执行｜24 小时运行与第三周复盘|打开 Day 021 详细执行]]

**当天任务**

- [ ] 冻结固件、接线和测试脚本版本，启动不少于 24 小时运行。
- [ ] 采集复位次数、错误计数、最小剩余栈、CPU 占用和采样缺口。
- [ ] 不等待墙钟空转：运行期间整理架构、问题单和下周 CAN 前置知识。

**所需资源：** [R38 FreeRTOS 官方文档](https://www.freertos.org/Documentation/00-Overview)；H11 原始数据独立备份介质；H12 可持续使用的 HC32/STM32 开发板；H15 逻辑分析仪/示波器与安全供电

**机器墙钟时间：** 预计 24 小时后台运行；硬上限 36 小时；超过上限停止并保留日志；不能因未满时长伪造 PASS。

**当天交付物：** reports/rtos-soak-24h.md、原始统计与 week-03-review.md

**完成验收：** 完成真实 24 小时或明确写 PARTIAL 并继续后台运行；所有指标带固件 commit 和采样条件。

#### 第 4 周｜CAN、Bootloader 与升级回滚｜2026-09-14～2026-09-20

**本周目标：** 完成 MCU CAN 节点、Linux SocketCAN 工具链及可恢复固件升级，补齐求职中最关键的总线和升级证据。

**阶段门：** 真实 CAN 链路可处理心跳、超时和 Bus-Off；升级在正常、损坏和断电场景均有确定结果；阶段产物可脱敏复现。

<a id="day-022"></a>

##### Day 022｜2026-09-14 星期一｜2 小时｜CAN 2.0 与 SocketCAN 基线

**详细执行指南：** [[#D022 详细执行｜CAN 2.0 与 SocketCAN 基线|打开 Day 022 详细执行]]

**当天任务**

- [ ] 整理仲裁、标准/扩展帧、DLC、错误计数、Bus-Off 和终端电阻。
- [ ] 在 Linux 建立 vcan0，用 candump/cansend 发送、过滤并记录错误输入。
- [ ] 写最小 SocketCAN 程序，使用 poll/epoll 接收并保留时间戳。

**所需资源：** [R39 Linux SocketCAN 官方文档](https://docs.kernel.org/networking/can.html)；H02 Linux 开发主机

**当天交付物：** labs/socketcan-baseline 与 docs/can-notes.md

**完成验收：** vcan 测试可重复；程序处理标准帧、扩展帧和无效长度；口述不把 CAN 等同 UART。

<a id="day-023"></a>

##### Day 023｜2026-09-15 星期二｜2 小时｜MCU CAN 收发与过滤

**详细执行指南：** [[#D023 详细执行｜MCU CAN 收发与过滤|打开 Day 023 详细执行]]

**当天任务**

- [ ] 配置波特率、采样点和过滤器，记录时钟推导。
- [ ] 使用两节点或 USB-CAN 完成收发，给每类报文固定 ID 和周期。
- [ ] 用示波器/分析仪核对终端电阻、电平和帧周期。

**所需资源：** [R39 Linux SocketCAN 官方文档](https://docs.kernel.org/networking/can.html)；H12 可持续使用的 HC32/STM32 开发板；H14 CAN收发器与USB-CAN/第二节点；H15 逻辑分析仪/示波器与安全供电

**当天交付物：** firmware/drivers/can、configs/can-matrix.csv 与波形

**完成验收：** 连续 10000 帧统计完成；过滤器拒绝非目标 ID；报告记录真实总线负载和错误计数。

<a id="day-024"></a>

##### Day 024｜2026-09-16 星期三｜2 小时｜心跳、命令确认与超时

**详细执行指南：** [[#D024 详细执行｜心跳、命令确认与超时|打开 Day 024 详细执行]]

**当天任务**

- [ ] 设计节点状态、心跳、命令、ACK/NACK 和诊断报文。
- [ ] 实现序号、重复命令幂等、确认超时和有限重试。
- [ ] 主机脚本随机丢弃/重复/乱序帧，验证状态机不会重复执行危险动作。

**所需资源：** [R39 Linux SocketCAN 官方文档](https://docs.kernel.org/networking/can.html)；H12 可持续使用的 HC32/STM32 开发板；H14 CAN收发器与USB-CAN/第二节点

**当天交付物：** protocol/can-v1.md、firmware/protocol/can 与 tools/can_fault_injector.py

**完成验收：** 协议有状态图；重复命令测试通过；所有重试有次数和总时限。

<a id="day-025"></a>

##### Day 025｜2026-09-17 星期四｜2 小时｜Bus-Off 与节点恢复

**详细执行指南：** [[#D025 详细执行｜Bus-Off 与节点恢复|打开 Day 025 详细执行]]

**当天任务**

- [ ] 制造断开终端、电缆拔插或软件错误帧场景，先定义安全预期。
- [ ] 记录 error-passive/Bus-Off 进入条件、检测方式和恢复策略。
- [ ] 验证恢复期间输出保持安全状态，避免无限快速重启。

**所需资源：** [R39 Linux SocketCAN 官方文档](https://docs.kernel.org/networking/can.html)；H12 可持续使用的 HC32/STM32 开发板；H14 CAN收发器与USB-CAN/第二节点；H15 逻辑分析仪/示波器与安全供电

**当天交付物：** reports/can-recovery.csv 与恢复实现

**完成验收：** 至少 5 次真实故障循环；每次检测/恢复时间有记录；无法制造的故障明确标为未验证。

<a id="day-026"></a>

##### Day 026｜2026-09-18 星期五｜2 小时｜Flash 分区与镜像格式

**详细执行指南：** [[#D026 详细执行｜Flash 分区与镜像格式|打开 Day 026 详细执行]]

**当天任务**

- [ ] 依据真实 Flash 容量画 boot/app-a/app-b/config 分区并核对链接脚本。
- [ ] 定义镜像头：magic、版本、长度、目标、hash/CRC 和签名预留。
- [ ] 编写主机打包器和解析测试，拒绝越界、降级或损坏镜像。

**所需资源：** [R37 Arm CMSIS 与 Cortex-M 文档](https://arm-software.github.io/CMSIS_6/latest/General/index.html)；H12 可持续使用的 HC32/STM32 开发板

**当天交付物：** docs/flash-layout.md、tools/firmware_pack.py 与 golden images

**完成验收：** 链接结果不越界；损坏/超长/错误目标镜像均拒绝；版本策略写明。

<a id="day-027"></a>

##### Day 027｜2026-09-19 星期六｜4 小时｜Bootloader、升级与断电恢复

**详细执行指南：** [[#D027 详细执行｜Bootloader、升级与断电恢复|打开 Day 027 详细执行]]

**当天任务**

- [ ] 实现最小 Bootloader 验证和跳转，保留回滚计数与启动确认。
- [ ] 通过 UART 或 CAN 分块写入非活动分区，逐块校验并限制重试。
- [ ] 在擦除、接收、校验、切换和首次启动阶段做复位注入。

**所需资源：** [R37 Arm CMSIS 与 Cortex-M 文档](https://arm-software.github.io/CMSIS_6/latest/General/index.html)；[R39 Linux SocketCAN 官方文档](https://docs.kernel.org/networking/can.html)；H12 可持续使用的 HC32/STM32 开发板；H14 CAN收发器与USB-CAN/第二节点；H15 逻辑分析仪/示波器与安全供电

**当天交付物：** firmware/bootloader、tools/updater 与升级测试矩阵

**完成验收：** 正常升级、损坏镜像和至少 5 个复位点有结果；任一失败不会破坏最后可启动镜像。

<a id="day-028"></a>

##### Day 028｜2026-09-20 星期日｜2 小时｜嵌入式阶段发布门

**详细执行指南：** [[#D028 详细执行｜嵌入式阶段发布门|打开 Day 028 详细执行]]

**当天任务**

- [ ] 从 tag 前的干净 clone 构建 application、bootloader 和主机工具。
- [ ] 重复运行外设、RTOS、CAN、升级及故障测试，汇总未通过项。
- [ ] 生成脱敏 v0.1.0 候选说明；硬件证据不足时只发布代码/仿真范围。

**所需资源：** [R20 GitHub Actions 文档](https://docs.github.com/en/actions)；[R37 Arm CMSIS 与 Cortex-M 文档](https://arm-software.github.io/CMSIS_6/latest/General/index.html)；[R39 Linux SocketCAN 官方文档](https://docs.kernel.org/networking/can.html)；H11 原始数据独立备份介质；H12 可持续使用的 HC32/STM32 开发板

**当天交付物：** releases/mcu-node-v0.1.0-rc.md 与 week-04-review.md

**完成验收：** 阶段门逐项 PASS/PARTIAL/BLOCKED；无公司代码、私有协议、设备序列号和联系方式；缓冲时间只用于复现或补失败项。

#### 第 5 周｜Cortex-A7 Linux 系统构建｜2026-09-21～2026-09-27

**本周目标：** 用独立学习板或可公开仿真目标完成 Buildroot、启动链、设备树和服务管理，不把应用层经验夸大成完整 BSP。

**阶段门：** 可从干净配置生成镜像并启动；启动日志、设备树变更、systemd 服务和 C++ daemon 均有可复现证据。

<a id="day-029"></a>

##### Day 029｜2026-09-21 星期一｜2 小时｜Linux 板卡与 BSP 边界

**详细执行指南：** [[#D029 详细执行｜Linux 板卡与 BSP 边界|打开 Day 029 详细执行]]

**当天任务**

- [ ] 确定真实 ARM 板或 QEMU 目标，记录 SoC、Cortex-A7/其他内核、启动介质和串口接线。
- [ ] 区分厂商 BSP、上游源码、本人配置和本人代码；列出不能公开的 SDK/镜像。
- [ ] 保存一次完整启动日志并标注 BootROM/U-Boot/Kernel/init/应用阶段。

**所需资源：** [R40 Buildroot 官方手册](https://buildroot.org/downloads/manual/manual.html)；[R41 Linux内核设备树文档](https://docs.kernel.org/devicetree/index.html)；H16 ARM Linux开发板或QEMU目标；H15 逻辑分析仪/示波器与安全供电

**当天交付物：** hardware/linux-board-inventory.md 与 boot/boot-baseline.log

**完成验收：** 每段启动责任边界清楚；若无真实板则标记 QEMU-only；不把厂商驱动算作本人开发。

<a id="day-030"></a>

##### Day 030｜2026-09-22 星期二｜2 小时｜Buildroot 最小镜像

**详细执行指南：** [[#D030 详细执行｜Buildroot 最小镜像|打开 Day 030 详细执行]]

**当天任务**

- [ ] 固定 Buildroot release 和 defconfig，首次只启用串口、网络和必要调试工具。
- [ ] 在独立输出目录构建，记录下载缓存、工具链和镜像 hash。
- [ ] 启动镜像并验证登录、时间、网络和只读/可写分区预期。

**所需资源：** [R40 Buildroot 官方手册](https://buildroot.org/downloads/manual/manual.html)；H02 Linux 开发主机；H16 ARM Linux开发板或QEMU目标

**机器墙钟时间：** 预计 首次构建 1～3 小时；硬上限 6 小时；构建可后台继续；当天人工时间仍限制为 2 小时，超时记录后停止排障。

**当天交付物：** buildroot/board/edge_gateway、defconfig 与 build-manifest.md

**完成验收：** 干净输出目录可重建；镜像 hash 与配置有记录；构建过程不依赖未说明的本机文件。

<a id="day-031"></a>

##### Day 031｜2026-09-23 星期三｜2 小时｜U-Boot 环境与可恢复启动

**详细执行指南：** [[#D031 详细执行｜U-Boot 环境与可恢复启动|打开 Day 031 详细执行]]

**当天任务**

- [ ] 记录 bootcmd、bootargs、分区和内核/DTB 加载位置。
- [ ] 添加主/备启动计数或可回退变量，不修改未知生产设备。
- [ ] 模拟主镜像缺失或校验失败，观察并记录回退行为。

**所需资源：** [R41 Linux内核设备树文档](https://docs.kernel.org/devicetree/index.html)；H16 ARM Linux开发板或QEMU目标；H15 逻辑分析仪/示波器与安全供电

**当天交付物：** boot/u-boot-flow.md、脱敏环境快照与回退日志

**完成验收：** 正常和失败启动均有日志；变量修改可恢复；不声称编写了未实际修改的 U-Boot 驱动。

<a id="day-032"></a>

##### Day 032｜2026-09-24 星期四｜2 小时｜设备树与一个可验证外设

**详细执行指南：** [[#D032 详细执行｜设备树与一个可验证外设|打开 Day 032 详细执行]]

**当天任务**

- [ ] 从原理图和现有 DTS 找到一个 GPIO/I2C/SPI 外设节点，记录 compatible、reg、interrupt 和 pinctrl。
- [ ] 用 overlay 或受控源码变更启停设备，编译 DTB 并用 dtc 反编译核对。
- [ ] 通过 sysfs/libgpiod/IIO 或最小用户态程序验证设备出现和错误路径。

**所需资源：** [R41 Linux内核设备树文档](https://docs.kernel.org/devicetree/index.html)；H16 ARM Linux开发板或QEMU目标；H13 I2C传感器、SPI Flash与基础接线

**当天交付物：** linux/dts/、docs/device-tree-case.md 与启动验证

**完成验收：** 变更前后现象可比较；DTB 可反编译；边界表述为设备树配置/用户态验证，除非确实写了驱动。

<a id="day-033"></a>

##### Day 033｜2026-09-25 星期五｜2 小时｜systemd 服务、看门狗与日志

**详细执行指南：** [[#D033 详细执行｜systemd 服务、看门狗与日志|打开 Day 033 详细执行]]

**当天任务**

- [ ] 将设备 daemon 定义为非 root systemd service，设置工作目录、权限、Restart 和启动依赖。
- [ ] 接入 watchdog/health 通知，限制重启频率并保留失败原因。
- [ ] 配置 journald 或日志轮转，验证磁盘上限和崩溃后自动恢复。

**所需资源：** [R42 GoogleTest 官方入门](https://google.github.io/googletest/primer.html)；H16 ARM Linux开发板或QEMU目标

**当天交付物：** deploy/systemd/、configs/logging 与 recovery-log.md

**完成验收：** 杀进程后在预期时间恢复；反复崩溃进入受控失败而非重启风暴；日志不会无限增长。

<a id="day-034"></a>

##### Day 034｜2026-09-26 星期六｜4 小时｜C++17 epoll 设备守护进程

**详细执行指南：** [[#D034 详细执行｜C++17 epoll 设备守护进程|打开 Day 034 详细执行]]

**当天任务**

- [ ] 实现 epoll 事件循环管理 timerfd、signal fd 和一个模拟串口/CAN fd。
- [ ] 用 RAII 管理 fd 和线程，定义停止顺序、背压和错误码。
- [ ] 编写并发、断连、半包和优雅退出测试，运行 Sanitizer。

**所需资源：** [R34 C++ Core Guidelines](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines)；[R35 CMake 官方教程](https://cmake.org/cmake/help/latest/guide/tutorial/)；[R42 GoogleTest 官方入门](https://google.github.io/googletest/primer.html)；H02 Linux 开发主机；H16 ARM Linux开发板或QEMU目标

**当天交付物：** gateway/device-daemon 与 unit/integration tests

**完成验收：** 1000 次连接/断连测试无 fd 泄漏；TSan/ASan 适用项无报告；SIGTERM 在限定时间退出。

<a id="day-035"></a>

##### Day 035｜2026-09-27 星期日｜2 小时｜Linux 系统阶段复现

**详细执行指南：** [[#D035 详细执行｜Linux 系统阶段复现|打开 Day 035 详细执行]]

**当天任务**

- [ ] 从 defconfig 和仓库重新构建/启动，执行 daemon 与服务测试。
- [ ] 统计启动时间、镜像尺寸、空载内存和服务恢复时间，注明测量方法。
- [ ] 更新 Linux 应用、系统构建、设备树和 BSP/驱动四者的简历边界。

**所需资源：** [R40 Buildroot 官方手册](https://buildroot.org/downloads/manual/manual.html)；[R41 Linux内核设备树文档](https://docs.kernel.org/devicetree/index.html)；[R42 GoogleTest 官方入门](https://google.github.io/googletest/primer.html)；H16 ARM Linux开发板或QEMU目标

**当天交付物：** reviews/week-05.md 与 reproducibility/linux-image.md

**完成验收：** 至少另一空目录复现；四项指标有原始命令；没有把一次设备树配置写成完整 BSP 经验。

#### 第 6 周｜边缘网关、可靠性与机器人前置｜2026-09-28～2026-10-04

**本周目标：** 把 MCU/CAN 节点接入 Linux 网关，完成存储转发、升级、观测和长稳，同时补齐机器人坐标系与安全基础。

**阶段门：** 端到端链路在断网、重启、CAN异常和进程崩溃下可恢复；完成至少 48 小时长稳或如实记录 PARTIAL。

<a id="day-036"></a>

##### Day 036｜2026-09-28 星期一｜2 小时｜SocketCAN 网关适配

**详细执行指南：** [[#D036 详细执行｜SocketCAN 网关适配|打开 Day 036 详细执行]]

**当天任务**

- [ ] 将 vcan 和真实 can0 统一封装，支持过滤、时间戳和错误帧。
- [ ] 把 MCU 心跳/传感器帧转换为内部类型，未知 ID 保留原始数据但不误解析。
- [ ] 用录制帧回放正常、超时、Bus-Off 和乱序场景。

**所需资源：** [R39 Linux SocketCAN 官方文档](https://docs.kernel.org/networking/can.html)；H14 CAN收发器与USB-CAN/第二节点；H16 ARM Linux开发板或QEMU目标

**当天交付物：** gateway/can-adapter、fixtures/can-replay 与诊断日志

**完成验收：** vcan CI 与真实 CAN 冒烟分开；错误帧可观测；解析器有 golden tests。

<a id="day-037"></a>

##### Day 037｜2026-09-29 星期二｜2 小时｜MQTT 遥测与命令边界

**详细执行指南：** [[#D037 详细执行｜MQTT 遥测与命令边界|打开 Day 037 详细执行]]

**当天任务**

- [ ] 定义设备状态、传感器、告警和命令 topic/schema，写清 QoS、retain 和过期策略。
- [ ] 实现本地 CAN 到 MQTT 遥测，以及云命令到本地受限动作的映射。
- [ ] 验证重复、离线、过期和未授权命令不会绕过本地安全状态。

**所需资源：** [R30 OASIS MQTT 5.0 规范](https://docs.oasis-open.org/mqtt/mqtt/v5.0/mqtt-v5.0.html)；H07 4G 网络与可控网络环境；H16 ARM Linux开发板或QEMU目标

**当天交付物：** gateway/mqtt-bridge、protocol/mqtt-v1.md 与集成测试

**完成验收：** 断网不阻塞 CAN；重复命令幂等；过期命令拒绝且有审计日志。

<a id="day-038"></a>

##### Day 038｜2026-09-30 星期三｜2 小时｜SQLite 存储转发

**详细执行指南：** [[#D038 详细执行｜SQLite 存储转发|打开 Day 038 详细执行]]

**当天任务**

- [ ] 设计遥测队列表：sequence、created_at、payload_version、retry_count 和状态。
- [ ] 使用事务和批量提交，设置容量、水位和删除策略。
- [ ] 断网写入、重启恢复、恢复网络后限速回传，统计重复和缺口。

**所需资源：** [R42 GoogleTest 官方入门](https://google.github.io/googletest/primer.html)；H16 ARM Linux开发板或QEMU目标

**当天交付物：** gateway/store-forward、schema.sql 与 reports/offline-replay.csv

**完成验收：** 重启后待发送记录不丢；容量达到上限行为明确；回传不会压垮本地实时链路。

<a id="day-039"></a>

##### Day 039｜2026-10-01 星期四｜2 小时｜应用升级与回滚

**详细执行指南：** [[#D039 详细执行｜应用升级与回滚|打开 Day 039 详细执行]]

**当天任务**

- [ ] 定义应用包 manifest、版本、hash 和最低兼容数据版本。
- [ ] 下载到临时位置、校验、原子切换并由 systemd 启动确认。
- [ ] 注入下载中断、hash错误、启动失败和数据库不兼容，验证回滚。

**所需资源：** [R21 Docker 文档](https://docs.docker.com/)；[R42 GoogleTest 官方入门](https://google.github.io/googletest/primer.html)；H16 ARM Linux开发板或QEMU目标

**当天交付物：** deploy/update-agent、release manifest 与 rollback-matrix.csv

**完成验收：** 四类失败均保留旧版本可运行；升级日志可追溯；不把应用回滚写成整机 A/B 系统 OTA。

<a id="day-040"></a>

##### Day 040｜2026-10-02 星期五｜2 小时｜性能与资源观测

**详细执行指南：** [[#D040 详细执行｜性能与资源观测|打开 Day 040 详细执行]]

**当天任务**

- [ ] 给事件循环、CAN处理、SQLite批次和MQTT队列增加延迟与水位指标。
- [ ] 用 pidstat/strace/perf/Valgrind 记录空载和压力下 CPU、内存、fd 与热点。
- [ ] 只优化一个有数据支持的瓶颈，并保留优化前后同条件结果。

**所需资源：** [R36 Linux tracing 与性能工具文档](https://docs.kernel.org/trace/index.html)；H16 ARM Linux开发板或QEMU目标

**当天交付物：** observability/、reports/gateway-performance.md

**完成验收：** 报告有相同负载/版本/时长；无内存和fd持续增长；优化结论可由原始数据复核。

<a id="day-041"></a>

##### Day 041｜2026-10-03 星期六｜4 小时｜48 小时端到端长稳与故障注入

**详细执行指南：** [[#D041 详细执行｜48 小时端到端长稳与故障注入|打开 Day 041 详细执行]]

**当天任务**

- [ ] 冻结 MCU、网关、协议和测试清单，启动不少于 48 小时运行。
- [ ] 定时注入断网、CAN断开、进程终止和设备重启，记录检测/恢复时间。
- [ ] 墙钟运行期间学习坐标系、关节/末端、控制周期和急停边界，整理机器人术语图。

**所需资源：** [R03 Hugging Face Robot Learning Course](https://huggingface.co/learn/robotics-course/en/unit0/1)；[R13 MoveIt 2 Jazzy 入门](https://moveit.picknik.ai/main/doc/tutorials/getting_started/getting_started.html)；H07 4G 网络与可控网络环境；H11 原始数据独立备份介质；H12 可持续使用的 HC32/STM32 开发板；H16 ARM Linux开发板或QEMU目标

**机器墙钟时间：** 预计 48 小时后台运行；硬上限 72 小时；达到上限即结束并分析；不得无限等待或补写不存在的数据。

**当天交付物：** reports/e2e-soak-48h.md、fault-events.csv 与 docs/robotics-primer.md

**完成验收：** 真实运行时长、故障次数和恢复结果完整；不足48小时写PARTIAL；机器人笔记不暗示已有机械臂经验。

<a id="day-042"></a>

##### Day 042｜2026-10-04 星期日｜2 小时｜嵌入式作品阶段门

**详细执行指南：** [[#D042 详细执行｜嵌入式作品阶段门|打开 Day 042 详细执行]]

**当天任务**

- [ ] 汇总 MCU→CAN→Linux→MQTT 数据流、线程/任务模型和安全边界。
- [ ] 由本人从空环境演示构建、烧录、启动、断网恢复和升级回滚。
- [ ] 决定后续 R 真机或 S 仿真轨；未取得机械臂授权、急停和排期时默认 S 轨。

**所需资源：** [R03 Hugging Face Robot Learning Course](https://huggingface.co/learn/robotics-course/en/unit0/1)；[R05 LeRobot 自定义硬件](https://huggingface.co/docs/lerobot/v0.6.0/en/integrate_hardware)；A05 机械臂所有者授权与使用排期；H01 同学的机械臂与厂商 SDK；H05 独立急停与安全工作区；H10 示教 / 遥操作输入源

**当天交付物：** reviews/week-06.md、embedded-edge-demo.md 与机器人轨道预决策

**完成验收：** 嵌入式核心演示可独立完成；失败项进入 backlog；机器人轨道选择不依赖口头承诺。

#### 第 7 周｜ROS 2、相机与系统接口｜2026-10-05～2026-10-11

**本周目标：** 完成可回放、可诊断、包含相机和虚拟关节状态的 ROS2 小系统，并在周末作正式硬件轨道决策。

**阶段门：** ROS2 工作区可从新 shell 构建运行；MCAP、tf2、标定和 diagnostics 均通过；Day 49 后 R/S 轨选择有书面证据。

<a id="day-043"></a>

##### Day 043｜2026-10-05 星期一｜2 小时｜ROS 2 Jazzy 安装与工作区

**详细执行指南：** [[#D043 详细执行｜ROS 2 Jazzy 安装与工作区|打开 Day 043 详细执行]]

**当天任务**

- [ ] 在原生 Ubuntu 24.04 使用系统 Python 安装 ROS 2 Jazzy 和 colcon 工作区，禁止直接复用 LeRobot Conda/uv 解释器。
- [ ] 创建 rclpy 与 rclcpp 两个最小 package，C++ 使用可安装 CMake target 和测试。
- [ ] 验证 ROS 与 LeRobot 通过 topic/独立进程桥接，并记录两个环境的启动脚本。

**所需资源：** [R12 ROS 2 官方文档](https://docs.ros.org/en/jazzy/index.html)；[R29 ROS 2 Jazzy Python 环境指南](https://docs.ros.org/en/jazzy/How-To-Guides/Using-Python-Packages.html)；[R34 C++ Core Guidelines](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines)；[R35 CMake 官方教程](https://cmake.org/cmake/help/latest/guide/tutorial/)；H02 Linux 开发主机

**当天交付物：** ros2_ws 与 docs/ros2-environment.md

**完成验收：** 全新终端中可构建并运行两个 package；ROS 与 LeRobot 分别使用独立启动脚本，`python3` 路径和 rclpy ABI 检查写入日志。

<a id="day-044"></a>

##### Day 044｜2026-10-06 星期二｜2 小时｜Node、Topic、Service、Action

**详细执行指南：** [[#D044 详细执行｜Node、Topic、Service、Action|打开 Day 044 详细执行]]

**当天任务**

- [ ] 使用 rclcpp 实现关节状态 publisher，使用 rclpy 实现状态 monitor subscriber。
- [ ] 实现校准 service 与长任务 action 示例。
- [ ] 比较三种通信语义和错误处理。

**所需资源：** [R12 ROS 2 官方文档](https://docs.ros.org/en/jazzy/index.html)；[R34 C++ Core Guidelines](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines)；[R35 CMake 官方教程](https://cmake.org/cmake/help/latest/guide/tutorial/)

**当天交付物：** ros2_ws/src/edgevla_interfaces_demo

**完成验收：** 节点可互通；service/action 的取消、超时和失败路径均被测试。

<a id="day-045"></a>

##### Day 045｜2026-10-07 星期三｜2 小时｜URDF 与 tf2

**详细执行指南：** [[#D045 详细执行｜URDF 与 tf2|打开 Day 045 详细执行]]

**当天任务**

- [ ] 创建简化机械臂 URDF。
- [ ] 发布 base、camera、end_effector 的 tf2。
- [ ] 用可视化检查坐标轴方向和树结构。

**所需资源：** [R12 ROS 2 官方文档](https://docs.ros.org/en/jazzy/index.html)；[R13 MoveIt 2 Jazzy 入门](https://moveit.picknik.ai/main/doc/tutorials/getting_started/getting_started.html)

**当天交付物：** robot_description 与 tf 树截图

**完成验收：** tf 树无环、时间戳有效，能查询相机到末端的变换。

<a id="day-046"></a>

##### Day 046｜2026-10-08 星期四｜2 小时｜rosbag2、MCAP 与时间戳

**详细执行指南：** [[#D046 详细执行｜rosbag2、MCAP 与时间戳|打开 Day 046 详细执行]]

**当天任务**

- [ ] 录制图像、关节状态和命令 topic。
- [ ] 回放并计算消息频率、丢帧和时间偏差。
- [ ] 定义跨进程使用单调时钟与墙上时钟的规则。

**所需资源：** [R12 ROS 2 官方文档](https://docs.ros.org/en/jazzy/index.html)；[R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)

**当天交付物：** sample.mcap 与 tools/bag_quality_report.py

**完成验收：** 质量报告能输出每个 topic 的数量、频率、时间范围和最大间隔。

<a id="day-047"></a>

##### Day 047｜2026-10-09 星期五｜2 小时｜OpenCV 相机标定

**详细执行指南：** [[#D047 详细执行｜OpenCV 相机标定|打开 Day 047 详细执行]]

**当天任务**

- [ ] 准备棋盘格并采集不同姿态标定图。
- [ ] 计算内参与畸变参数，保存 YAML。
- [ ] 可视化去畸变前后结果并记录重投影误差。

**所需资源：** [R15 OpenCV 相机标定](https://docs.opencv.org/4.x/dc/dbb/tutorial_py_calibration.html)；H04 固定机位 RGB 摄像头；H06 标定与任务物料

**当天交付物：** calibration/camera.yaml 与标定报告

**完成验收：** 标定样本覆盖画面各区域；误差与失败样本均写入报告。

<a id="day-048"></a>

##### Day 048｜2026-10-10 星期六｜4 小时｜Lifecycle、参数与诊断

**详细执行指南：** [[#D048 详细执行｜Lifecycle、参数与诊断|打开 Day 048 详细执行]]

**当天任务**

- [ ] 给 rclcpp 虚拟机器人节点增加 configure/activate/deactivate 生命周期和 RAII 资源管理。
- [ ] 增加参数校验、心跳、频率和错误状态诊断。
- [ ] 模拟设备断开和恢复。

**所需资源：** [R12 ROS 2 官方文档](https://docs.ros.org/en/jazzy/index.html)；[R34 C++ Core Guidelines](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines)；[R35 CMake 官方教程](https://cmake.org/cmake/help/latest/guide/tutorial/)

**当天交付物：** 可诊断的 virtual_robot_node 与故障测试

**完成验收：** 断开后进入安全非活动状态，恢复必须显式重新激活。

<a id="day-049"></a>

##### Day 049｜2026-10-11 星期日｜2 小时｜ROS2 阶段验收与 R/S 轨决策

**详细执行指南：** [[#D049 详细执行｜ROS2 阶段验收与 R/S 轨决策|打开 Day 049 详细执行]]

**当天任务**

- [ ] 从新 shell 构建并启动 ROS2 小系统，回放 MCAP、检查 tf 树、相机标定和 diagnostics。
- [ ] 核对机械臂授权、SDK许可、独立急停、示教输入和未来 6 周可用时段；逐项保存证据。
- [ ] 全部满足才选择 R 真机轨，否则选择 S mock/回放轨；写清切换条件和简历边界。

**所需资源：** [R12 ROS 2 官方文档](https://docs.ros.org/en/jazzy/index.html)；[R15 OpenCV 相机标定](https://docs.opencv.org/4.x/dc/dbb/tutorial_py_calibration.html)；[R20 GitHub Actions 文档](https://docs.github.com/en/actions)

**当天交付物：** week-07-demo.md、启动脚本与 ADR-robot-track.md

**完成验收：** ROS2 演示可重复；R/S 决策每个前置条件均有 PASS/BLOCKED；未满足时不会因赶进度选择 R 轨。

#### 第 8 周｜机器人接口、Mock/真机与安全｜2026-10-12～2026-10-18

**本周目标：** 用同一 Robot I/O 契约完成 S 轨 mock/replay；只有安全门全部通过时才在 R 轨低速接入真机。

**阶段门：** 契约测试、动作限制、超时、状态机和遥操作流程通过；R轨额外要求物理急停与人工看护，S轨材料明确simulation-only。

<a id="day-050"></a>

##### Day 050｜2026-10-12 星期一｜2 小时｜机械臂与 SDK 资产盘点

**详细执行指南：** [[#D050 详细执行｜机械臂与 SDK 资产盘点|打开 Day 050 详细执行]]

**当天任务**

- [ ] 记录型号、自由度、控制器、舵机/电机、通信方式和 SDK 版本。
- [ ] 核实 ROS/ROS2、Python/C++、Linux 版本和许可证。
- [ ] 确认代码、协议截图、日志和视频的公开边界。

**所需资源：** [R05 LeRobot 自定义硬件](https://huggingface.co/docs/lerobot/v0.6.0/en/integrate_hardware)；H01 同学的机械臂与厂商 SDK；H10 示教 / 遥操作输入源；H11 原始数据独立备份介质；A05 机械臂所有者授权与使用排期

**当天交付物：** hardware-inventory.md 与 license-boundary.md

**完成验收：** 所有未知项有负责人和截止日；无授权的厂商源码不会进入公开仓库。

<a id="day-051"></a>

##### Day 051｜2026-10-13 星期二｜2 小时｜Robot I/O 契约

**详细执行指南：** [[#D051 详细执行｜Robot I/O 契约|打开 Day 051 详细执行]]

**当天任务**

- [ ] 定义 connect、calibrate、get_observation、send_action、disconnect。
- [ ] 固定关节顺序、单位、范围、fps、timestamp 和错误码。
- [ ] 用 JSON 示例描述 observation/action。

**所需资源：** [R05 LeRobot 自定义硬件](https://huggingface.co/docs/lerobot/v0.6.0/en/integrate_hardware)；[R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)

**当天交付物：** docs/robot-io-contract.md

**完成验收：** 契约可在不知道厂商内部实现的情况下编写 mock 和测试。

<a id="day-052"></a>

##### Day 052｜2026-10-14 星期三｜2 小时｜安全风险评审

**详细执行指南：** [[#D052 详细执行｜安全风险评审|打开 Day 052 详细执行]]

**当天任务**

- [ ] 按启动、校准、遥操作、策略控制、断线、恢复分阶段做风险分析。
- [ ] 确认物理急停、低速模式、工作区和人工看护。
- [ ] 定义禁止自动测试的危险条件。

**所需资源：** H05 独立急停与安全工作区；H06 标定与任务物料

**当天交付物：** safety/risk-assessment.md

**完成验收：** 每个高风险项都有预防、检测、响应和责任人；未满足 H05 则禁止上电动作。

<a id="day-053"></a>

##### Day 053｜2026-10-15 星期四｜2 小时｜适配器骨架

**详细执行指南：** [[#D053 详细执行｜适配器骨架|打开 Day 053 详细执行]]

**当天任务**

- [ ] 基于 LeRobot 扩展方式创建独立 robot 插件。
- [ ] 隔离通用接口、厂商薄适配层和配置。
- [ ] 使用假数据完成注册与 CLI 加载。

**所需资源：** [R01 LeRobot v0.6.0 官方仓库](https://github.com/huggingface/lerobot/tree/v0.6.0)；[R05 LeRobot 自定义硬件](https://huggingface.co/docs/lerobot/v0.6.0/en/integrate_hardware)；[R20 GitHub Actions 文档](https://docs.github.com/en/actions)

**当天交付物：** packages/lerobot_robot_edgevla 骨架

**完成验收：** 不修改 LeRobot 上游源码即可发现插件；默认配置不连接真实硬件。

<a id="day-054"></a>

##### Day 054｜2026-10-16 星期五｜2 小时｜Mock、契约测试与故障注入

**详细执行指南：** [[#D054 详细执行｜Mock、契约测试与故障注入|打开 Day 054 详细执行]]

**当天任务**

- [ ] 实现确定性 mock 机械臂。
- [ ] 覆盖断线、超时、越界、时间倒退和部分关节缺失。
- [ ] 编写契约测试供真实适配器复用。

**所需资源：** [R05 LeRobot 自定义硬件](https://huggingface.co/docs/lerobot/v0.6.0/en/integrate_hardware)；[R20 GitHub Actions 文档](https://docs.github.com/en/actions)

**当天交付物：** MockRobot 与 contract test suite

**完成验收：** 正常路径和至少五类故障均自动测试，错误不会静默转成动作。

<a id="day-055"></a>

##### Day 055｜2026-10-17 星期六｜4 小时｜R 遥操作 / S 仿真示教

**详细执行指南：** [[#D055 详细执行｜R 遥操作 / S 仿真示教|打开 Day 055 详细执行]]

**当天任务**

- [ ] R 轨接入获准的 leader/示教器/gamepad；S 轨用键盘或脚本在仿真中生成示范。
- [ ] 两轨增加 dead-man、人工接管/暂停和状态提示。
- [ ] 完成 10 次标准取放或对应仿真任务演练。

**所需资源：** [R05 LeRobot 自定义硬件](https://huggingface.co/docs/lerobot/v0.6.0/en/integrate_hardware)；H01 同学的机械臂与厂商 SDK；H05 独立急停与安全工作区；H06 标定与任务物料；H10 示教 / 遥操作输入源

**当天交付物：** teleop adapter 与操作规程

**完成验收：** 松开 dead-man 后下一控制周期不再产生新动作；10 次演练无越界，R/S 证据明确分开。

<a id="day-056"></a>

##### Day 056｜2026-10-18 星期日｜2 小时｜可靠性与阶段验收

**详细执行指南：** [[#D056 详细执行｜可靠性与阶段验收|打开 Day 056 详细执行]]

**当天任务**

- [ ] 运行 R 或 S 轨的连接、标定/映射、采集/回放、动作、遥操作完整契约测试。
- [ ] 做 USB/网络断开、程序崩溃和重新连接演练。
- [ ] 记录遗留风险。

**所需资源：** [R20 GitHub Actions 文档](https://docs.github.com/en/actions)；H05 独立急停与安全工作区

**当天交付物：** week-06-hardware-acceptance.md

**完成验收：** 不少于 25 个契约/故障用例全部通过；任一断线不会继续消费旧动作，恢复需要显式确认。

#### 第 9 周｜小规模数据采集与质量控制｜2026-10-19～2026-10-25

**本周目标：** 在 R 轨采集 25 个有效 Episode，或在 S 轨固定 25 个公开数据 Episode/窗口；重点验证工具和质量，不追求数量。

**阶段门：** 25 个样本全部有 manifest、校验和、质量报告和明确来源；R/S 轨永久分开。

<a id="day-057"></a>

##### Day 057｜2026-10-19 星期一｜2 小时｜任务定义与成功标准

**详细执行指南：** [[#D057 详细执行｜任务定义与成功标准|打开 Day 057 详细执行]]

**当天任务**

- [ ] 选择低风险单任务，如多起点抓取并放入盒中。
- [ ] 定义对象、起点、终点、成功、失败、超时和中止。
- [ ] 设计位置和演示风格覆盖表。

**所需资源：** [R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；[R18 Hugging Face Dataset Cards](https://huggingface.co/docs/hub/en/datasets-cards)；H06 标定与任务物料；A06 独立评审者

**当天交付物：** dataset/task-spec-v1.md

**完成验收：** 两名未参与编写者独立判断 10 个预录案例，至少 9 个案例结论一致；分歧案例在采集前修正规范。

<a id="day-058"></a>

##### Day 058｜2026-10-20 星期二｜2 小时｜Schema、同步与版本规则

**详细执行指南：** [[#D058 详细执行｜Schema、同步与版本规则|打开 Day 058 详细执行]]

**当天任务**

- [ ] 固定 feature、单位、fps、相机命名、task 文本和 episode 元数据。
- [ ] 定义时钟、丢帧、过期动作和中途失败的记录规则。
- [ ] 建立数据版本与不可变原始区。

**所需资源：** [R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；[R18 Hugging Face Dataset Cards](https://huggingface.co/docs/hub/en/datasets-cards)

**当天交付物：** dataset/schema-v1.json 与 versioning.md

**完成验收：** schema 可机器校验；原始 episode 不被后处理覆盖。

<a id="day-059"></a>

##### Day 059｜2026-10-21 星期三｜2 小时｜R 试采 / S 公开数据试切片（5个）

**详细执行指南：** [[#D059 详细执行｜R 试采 / S 公开数据试切片（5个）|打开 Day 059 详细执行]]

**当天任务**

- [ ] R 轨按标准流程采集 10 个试验 episode；S 轨从固定公开数据 revision 选择 10 个兼容 episode。
- [ ] 每轮记录起点、操作者、成功、异常和重采原因。
- [ ] 回放抽查动作与图像同步。

**所需资源：** [R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；H04 固定机位 RGB 摄像头；H05 独立急停与安全工作区；H06 标定与任务物料；H10 示教 / 遥操作输入源；H11 原始数据独立备份介质

**当天交付物：** dataset/raw/pilot-5 或 dataset/public-manifest/pilot-5 与日志

**完成验收：** 10 个 episode 全部可解码回放；S 轨保留来源/revision，任何中止或坏样本均保留原因。

<a id="day-060"></a>

##### Day 060｜2026-10-22 星期四｜2 小时｜自动质量检查器

**详细执行指南：** [[#D060 详细执行｜自动质量检查器|打开 Day 060 详细执行]]

**当天任务**

- [ ] 检查帧数、fps、时间单调、NaN、关节范围、视频和元数据。
- [ ] 输出 episode 级 pass/warn/fail 与原因。
- [ ] 为已知坏样本建立回归测试。

**所需资源：** [R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；[R20 GitHub Actions 文档](https://docs.github.com/en/actions)

**当天交付物：** tools/validate_dataset.py 与测试夹具

**完成验收：** 六类错误各制作 2 个固定夹具，共 12 个坏样本全部检出且错误类型正确；结果可导出 CSV/JSON。

<a id="day-061"></a>

##### Day 061｜2026-10-23 星期五｜2 小时｜R 第一批采集 / S 第一批兼容样本（10个）

**详细执行指南：** [[#D061 详细执行｜R 第一批采集 / S 第一批兼容样本（10个）|打开 Day 061 详细执行]]

**当天任务**

- [ ] R 轨按 5 个起始区域各 5 次采集 25 个 episode；S 轨按同一任务/场景层次选择 25 个公开 episode。
- [ ] 每 5 个 episode 运行质量检查并备份。
- [ ] 控制示范速度与动作风格一致。

**所需资源：** [R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；H04 固定机位 RGB 摄像头；H05 独立急停与安全工作区；H06 标定与任务物料；H10 示教 / 遥操作输入源；H11 原始数据独立备份介质

**当天交付物：** dataset/raw/batch-a-10 或 dataset/public-manifest/batch-a-10

**完成验收：** 25 个有效 episode 覆盖 5 个层次且每层 5 个；质量失败样本被隔离并记录来源和原因。

<a id="day-062"></a>

##### Day 062｜2026-10-24 星期六｜4 小时｜R 第二批采集 / S 第二批兼容样本（10个）

**详细执行指南：** [[#D062 详细执行｜R 第二批采集 / S 第二批兼容样本（10个）|打开 Day 062 详细执行]]

**当天任务**

- [ ] R 轨补齐另 25 个有效 episode；S 轨选择另一组不重叠的 25 个公开 episode。
- [ ] 由同一判定规则标注成功、失败与中止。
- [ ] 生成采集统计和数据备份校验和。

**所需资源：** [R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；[R18 Hugging Face Dataset Cards](https://huggingface.co/docs/hub/en/datasets-cards)；H04 固定机位 RGB 摄像头；H05 独立急停与安全工作区；H06 标定与任务物料；H10 示教 / 遥操作输入源；H11 原始数据独立备份介质

**当天交付物：** dataset/raw/batch-b-10 或 dataset/public-manifest/batch-b-10 与 checksums

**完成验收：** 累计至少 50 个通过检查的有效 episode；备份校验一致。

<a id="day-063"></a>

##### Day 063｜2026-10-25 星期日｜2 小时｜划分、Dataset Card 与阶段门

**详细执行指南：** [[#D063 详细执行｜划分、Dataset Card 与阶段门|打开 Day 063 详细执行]]

**当天任务**

- [ ] 按初始条件而非随机帧划分 train/val/test。
- [ ] 撰写来源、任务、硬件、采集、许可、限制和隐私说明。
- [ ] 生成只含获准内容的候选发布包。

**所需资源：** [R18 Hugging Face Dataset Cards](https://huggingface.co/docs/hub/en/datasets-cards)；[R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)

**当天交付物：** DATASET_CARD.md 与 split manifest

**完成验收：** 25 个样本来源、任务、划分和限制均可追溯；无效样本未静默删除；S轨不声称自行采集。

#### 第 10 周｜ACT 小基线与冻结评测｜2026-10-26～2026-11-01

**本周目标：** 先用小数据和低成本 ACT 验证训练、恢复、推理和评测链路；训练墙钟时间不计入人工工时。

**阶段门：** 训练任务可恢复；R轨完成10次、S轨完成20次冻结评测；成功率带样本量和条件，失败逐条保留。

<a id="day-064"></a>

##### Day 064｜2026-10-26 星期一｜2 小时｜ACT 配置与数据审查

**详细执行指南：** [[#D064 详细执行｜ACT 配置与数据审查|打开 Day 064 详细执行]]

**当天任务**

- [ ] 确认 observation/action feature 与归一化统计。
- [ ] 定义 batch、chunk、训练步数、种子和评测协议。
- [ ] 检查 train/test 泄漏。

**所需资源：** [R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；[R06 LeRobot ACT 策略文档](https://huggingface.co/docs/lerobot/v0.6.0/en/act)；[R09 LeRobot 算力指南](https://huggingface.co/docs/lerobot/v0.6.0/en/hardware_guide)

**当天交付物：** configs/act-task-v1.yaml

**完成验收：** 配置含精确数据版本、代码 commit、随机种子和硬件信息。

<a id="day-065"></a>

##### Day 065｜2026-10-27 星期二｜2 小时｜ACT 冒烟训练

**详细执行指南：** [[#D065 详细执行｜ACT 冒烟训练|打开 Day 065 详细执行]]

**当天任务**

- [ ] 小步数训练验证显存、数据加载和 checkpoint。
- [ ] 对一个小 batch 过拟合以检查管线。
- [ ] 估算完整训练成本。

**所需资源：** [R06 LeRobot ACT 策略文档](https://huggingface.co/docs/lerobot/v0.6.0/en/act)；[R09 LeRobot 算力指南](https://huggingface.co/docs/lerobot/v0.6.0/en/hardware_guide)；[R17 Weights & Biases 文档](https://docs.wandb.ai/)；H03 NVIDIA GPU 或按量云 GPU

**当天交付物：** experiments/act-smoke

**完成验收：** 固定 16-episode 子集训练无 NaN，最终 loss 不高于初始值 20%；checkpoint 重载输出最大绝对差不超过 1e-5。

<a id="day-066"></a>

##### Day 066｜2026-10-28 星期三｜2 小时｜ACT 正式训练启动与恢复验证

**详细执行指南：** [[#D066 详细执行｜ACT 正式训练启动与恢复验证|打开 Day 066 详细执行]]

**当天任务**

- [ ] 冻结数据 revision、配置、随机种子和代码 commit，先估算显存与最长墙钟时间。
- [ ] 启动训练并设置定时 checkpoint、日志和预算/运行时上限；人工观察首个验证周期后离开。
- [ ] 主动中断一次并从 checkpoint 恢复，确认 step、优化器和指标连续；训练未结束可标记 RUNNING。

**所需资源：** [R06 LeRobot ACT 策略文档](https://huggingface.co/docs/lerobot/v0.6.0/en/act)；[R09 LeRobot 算力指南](https://huggingface.co/docs/lerobot/v0.6.0/en/hardware_guide)；[R17 Weights & Biases 文档](https://docs.wandb.ai/)；[R28 Hugging Face Jobs GPU 价格](https://huggingface.co/docs/hub/jobs-pricing)；H03 NVIDIA GPU 或按量云 GPU；[A04 按量 GPU 与预算告警](https://huggingface.co/docs/hub/jobs)

**机器墙钟时间：** 预计 4～12 小时；硬上限 24 小时；云 GPU 必须设置预算和自动停止；超时保留最后 checkpoint，不追加无上限费用。

**当天交付物：** experiments/act-v1 完整产物

**完成验收：** 训练可从 checkpoint 恢复；启动两小时不等于训练完成；达到墙钟上限自动停止并保留结果。

<a id="day-067"></a>

##### Day 067｜2026-10-29 星期四｜2 小时｜曲线、过拟合与离线检查

**详细执行指南：** [[#D067 详细执行｜曲线、过拟合与离线检查|打开 Day 067 详细执行]]

**当天任务**

- [ ] 比较 train/val loss 和动作预测误差。
- [ ] 检查不同关节和时间步的误差。
- [ ] 选择 checkpoint 时不使用真机测试集调参。

**所需资源：** [R17 Weights & Biases 文档](https://docs.wandb.ai/)；[R06 LeRobot ACT 策略文档](https://huggingface.co/docs/lerobot/v0.6.0/en/act)

**当天交付物：** reports/act-training-analysis.md

**完成验收：** 报告明确 checkpoint 选择规则、异常曲线和至少两个风险假设。

<a id="day-068"></a>

##### Day 068｜2026-10-30 星期五｜2 小时｜R 真机 / S 回放推理预检

**详细执行指南：** [[#D068 详细执行｜R 真机 / S 回放推理预检|打开 Day 068 详细执行]]

**当天任务**

- [ ] 离线回放 checkpoint 输出并经过安全动作层。
- [ ] 检查单位、顺序、范围、动作年龄和初始姿态。
- [ ] R 轨用低速空载完成 3 次受控预检；S 轨向 mock/replay 分别注入单位、顺序、范围、动作年龄和初始姿态 5 类错误。

**所需资源：** [R24 LeRobot Policy Rollout](https://huggingface.co/docs/lerobot/v0.6.0/en/inference)；H05 独立急停与安全工作区

**当天交付物：** safety/policy-preflight-v1.md

**完成验收：** 正常输出通过安全检查，任一异常均被拒绝而不是临时绕过；R 轨保留 3 次真机预检记录，S 轨 5 类注入均被拒绝并标记 simulation-only。

<a id="day-069"></a>

##### Day 069｜2026-10-31 星期六｜4 小时｜R 10 次真机 / S 20 次仿真冻结评测

**详细执行指南：** [[#D069 详细执行｜R 10 次真机 / S 20 次仿真冻结评测|打开 Day 069 详细执行]]

**当天任务**

- [ ] 确认评测协议、成功定义、超时和失败分类在看结果前已冻结。
- [ ] R轨低速执行10轮且每轮有人看护；S轨执行20轮固定seed仿真，不混合统计。
- [ ] 逐轮记录成功、失败原因、耗时、恢复动作和原始证据，不只保留最佳视频。

**所需资源：** [R24 LeRobot Policy Rollout](https://huggingface.co/docs/lerobot/v0.6.0/en/inference)；H01 同学的机械臂与厂商 SDK；H04 固定机位 RGB 摄像头；H05 独立急停与安全工作区；H06 标定与任务物料

**当天交付物：** evaluations/act-v1/results.csv 与 R/S 原始证据

**完成验收：** 结果行数与计划轮数一致；所有失败存在；成功率附R/S、任务、样本数和版本。

<a id="day-070"></a>

##### Day 070｜2026-11-01 星期日｜2 小时｜失败分类与 ACT 阶段门

**详细执行指南：** [[#D070 详细执行｜失败分类与 ACT 阶段门|打开 Day 070 详细执行]]

**当天任务**

- [ ] 将失败归为视觉、初态、动作、机械、通信、安全或评测问题。
- [ ] 计算成功率置信区间、耗时和接管次数。
- [ ] 确定下一轮优先补数据还是改训练。

**所需资源：** [R17 Weights & Biases 文档](https://docs.wandb.ai/)；[R19 Hugging Face Model Cards](https://huggingface.co/docs/hub/en/model-cards)

**当天交付物：** reports/act-v1-evaluation.md

**完成验收：** 所有失败均有证据或标注“根因未知”；未达到目标也如实发布。

#### 第 11 周｜SmolVLA 小规模验证与泛化｜2026-11-02～2026-11-08

**本周目标：** 在 ACT 链路稳定后才进行 SmolVLA 冒烟和小规模微调，用三个最有价值的变化维度做冻结评测。

**阶段门：** 微调可恢复；至少完成语言改写、位置和光照三类评测；算力或数据不足时允许停在smoke，不把未完成写成成果。

<a id="day-071"></a>

##### Day 071｜2026-11-02 星期一｜2 小时｜SmolVLA 架构与输入输出审计

**详细执行指南：** [[#D071 详细执行｜SmolVLA 架构与输入输出审计|打开 Day 071 详细执行]]

**当天任务**

- [ ] 梳理视觉编码、语言、本体状态、动作专家和 flow matching。
- [ ] 分别打印 R 轨自采或 S 轨 LIBERO batch 的每个 tensor shape。
- [ ] 对照 ACT 标出共享和不同的管线。

**所需资源：** [R07 SmolVLA 官方说明](https://huggingface.co/blog/smolvla)；[R25 SmolVLA 官方微调指南](https://huggingface.co/docs/lerobot/v0.6.0/en/smolvla)；[R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)

**当天交付物：** docs/smolvla-dataflow.md

**完成验收：** 完成 15 道 shape/归一化/action chunk 自测且正确不少于 12 道；不照抄模型宣传语。

<a id="day-072"></a>

##### Day 072｜2026-11-03 星期二｜2 小时｜算力、依赖与显存冒烟

**详细执行指南：** [[#D072 详细执行｜算力、依赖与显存冒烟|打开 Day 072 详细执行]]

**当天任务**

- [ ] 建立独立 SmolVLA 配置和依赖快照。
- [ ] 用小 batch 做前向/反向并记录显存。
- [ ] 设置云任务最大时长与预算。

**所需资源：** [R07 SmolVLA 官方说明](https://huggingface.co/blog/smolvla)；[R09 LeRobot 算力指南](https://huggingface.co/docs/lerobot/v0.6.0/en/hardware_guide)；[R28 Hugging Face Jobs GPU 价格](https://huggingface.co/docs/hub/jobs-pricing)；H03 NVIDIA GPU 或按量云 GPU；[A04 按量 GPU 与预算告警](https://huggingface.co/docs/hub/jobs)

**机器墙钟时间：** 预计 15–30 分钟；硬上限 30 分钟；仅使用最小 batch；超过配置上限自动终止

**当天交付物：** experiments/smolvla-smoke

**完成验收：** 冒烟任务 30 分钟内完成或被自动终止；记录峰值显存、step/s，并据此填写 max_runtime 与 max_cost。

<a id="day-073"></a>

##### Day 073｜2026-11-04 星期三｜2 小时｜语言条件任务设计

**详细执行指南：** [[#D073 详细执行｜语言条件任务设计|打开 Day 073 详细执行]]

**当天任务**

- [ ] 定义三种必须依靠语言区分、且动作/状态 schema 相同的取放任务。
- [ ] 每任务冻结训练指令和 10 条未见同义改写，并设计错误/含糊指令边界。
- [ ] 冻结训练与泛化评测指令集。

**所需资源：** [R07 SmolVLA 官方说明](https://huggingface.co/blog/smolvla)；[R25 SmolVLA 官方微调指南](https://huggingface.co/docs/lerobot/v0.6.0/en/smolvla)；[R18 Hugging Face Dataset Cards](https://huggingface.co/docs/hub/en/datasets-cards)；H06 标定与任务物料

**当天交付物：** dataset/language-task-spec.md

**完成验收：** 如果去掉语言，至少两种场景无法由视觉唯一决定；3×10 条测试改写与训练文本零重叠。

<a id="day-074"></a>

##### Day 074｜2026-11-05 星期四｜2 小时｜数据总审与 SmolVLA 微调启动

**详细执行指南：** [[#D074 详细执行｜数据总审与 SmolVLA 微调启动|打开 Day 074 详细执行]]

**当天任务**

- [ ] 对 150 个 episode 做最终质量、划分和泄漏检查，并在 16-episode 子集上过拟合。
- [ ] 过拟合门通过后启动预注册配置的完整微调，保存模型、数据 revision、环境、预算和成本。
- [ ] 设置 max_runtime/max_cost/OOM 自动终止；所有重试生成新 experiment_id。

**所需资源：** [R07 SmolVLA 官方说明](https://huggingface.co/blog/smolvla)；[R25 SmolVLA 官方微调指南](https://huggingface.co/docs/lerobot/v0.6.0/en/smolvla)；[R09 LeRobot 算力指南](https://huggingface.co/docs/lerobot/v0.6.0/en/hardware_guide)；[R17 Weights & Biases 文档](https://docs.wandb.ai/)；[R28 Hugging Face Jobs GPU 价格](https://huggingface.co/docs/hub/jobs-pricing)；H03 NVIDIA GPU 或按量云 GPU；[A03 实验跟踪账号](https://wandb.ai/)；[A04 按量 GPU 与预算告警](https://huggingface.co/docs/hub/jobs)

**机器墙钟时间：** 预计 8～24 小时；硬上限 36 小时；先smoke再付费；超过预算或墙钟上限自动停止。

**当天交付物：** experiments/smolvla-v1

**完成验收：** 数据审计通过后才启动；训练配置、模型revision、数据revision和预算上限均已冻结；未完成可写RUNNING。

<a id="day-075"></a>

##### Day 075｜2026-11-06 星期五｜2 小时｜训练收尾、Checkpoint 初评与上线门

**详细执行指南：** [[#D075 详细执行｜训练收尾、Checkpoint 初评与上线门|打开 Day 075 详细执行]]

**当天任务**

- [ ] 检查训练是否在硬上限内完成；未完成则终止并保留负面结果，不无限续费。
- [ ] 完成离线输出、动作范围、语言敏感性和 checkpoint 加载检查。
- [ ] 选择 checkpoint 并冻结真机评测配置。
- [ ] 更新 R 轨真机或 S 轨仿真预检清单。

**所需资源：** [R07 SmolVLA 官方说明](https://huggingface.co/blog/smolvla)；[R24 LeRobot Policy Rollout](https://huggingface.co/docs/lerobot/v0.6.0/en/inference)；H05 独立急停与安全工作区

**当天交付物：** safety/smolvla-preflight.md

**完成验收：** checkpoint 可加载、无 NaN、所有测试动作通过守卫；R 轨另需 3 次低速预检。任一失败则阻断第 10 周自动 rollout。

<a id="day-076"></a>

##### Day 076｜2026-11-07 星期六｜4 小时｜未见位置评测

**详细执行指南：** [[#D076 详细执行｜未见位置评测|打开 Day 076 详细执行]]

**当天任务**

- [ ] 在训练集未覆盖的预定义位置运行 ACT 与 SmolVLA。
- [ ] 每模型使用相同起点和判定。
- [ ] 记录成功率、耗时和失败类型。

**所需资源：** [R24 LeRobot Policy Rollout](https://huggingface.co/docs/lerobot/v0.6.0/en/inference)；H05 独立急停与安全工作区；H06 标定与任务物料

**当天交付物：** evaluations/generalization/unseen-position.csv

**完成验收：** ACT 与 SmolVLA 各完成 10 个冻结起点 episode；20 轮均有逐轮结果和失败视频索引。

<a id="day-077"></a>

##### Day 077｜2026-11-08 星期日｜2 小时｜语言、位置与光照三类汇总

**详细执行指南：** [[#D077 详细执行｜语言、位置与光照三类汇总|打开 Day 077 详细执行]]

**当天任务**

- [ ] 完成未见位置、指令改写和光照变化结果校验，其他变化维度留到后续90天。
- [ ] 按同一表结构比较 ACT 与 SmolVLA，禁止合并 R/S、不同任务或不同样本量。
- [ ] 写出至少三个失败案例、适用边界和下一轮数据决策。

**所需资源：** [R07 SmolVLA 官方说明](https://huggingface.co/blog/smolvla)；[R24 LeRobot Policy Rollout](https://huggingface.co/docs/lerobot/v0.6.0/en/inference)；H05 独立急停与安全工作区

**当天交付物：** reports/act-vs-smolvla-small.md

**完成验收：** 三类评测均有冻结协议和逐轮记录；结论不外推到未测试对象、相机或真实环境。

#### 第 12 周｜异步推理、弱网与本地安全｜2026-11-09～2026-11-15

**本周目标：** 建立 Policy Server/Robot Client、动作年龄/队列守卫和本地安全状态机，再用 netem/真实4G量化弱网影响。

**阶段门：** 断线、旧动作、队列堆积和进程故障均进入安全状态；报告明确4G不承担硬实时安全控制。

<a id="day-078"></a>

##### Day 078｜2026-11-09 星期一｜2 小时｜Policy Server 与 Robot Client

**详细执行指南：** [[#D078 详细执行｜Policy Server 与 Robot Client|打开 Day 078 详细执行]]

**当天任务**

- [ ] 按 D70 选择分支：ACT 使用同步/通用 async queue；SmolVLA 等 flow-matching policy 才启用 RTC。
- [ ] 记录 observation 请求、动作 chunk 返回和消费时序。
- [ ] 隔离推理通道与安全控制通道。

**所需资源：** [R10 LeRobot 异步推理](https://huggingface.co/docs/lerobot/v0.6.0/en/async)；[R11 LeRobot RTC](https://huggingface.co/docs/lerobot/v0.6.0/en/rtc)；[R24 LeRobot Policy Rollout](https://huggingface.co/docs/lerobot/v0.6.0/en/inference)

**当天交付物：** async/local-baseline 与时序图

**完成验收：** 局域网连续运行 30 分钟无未处理异常；停止 server 后 2 个控制周期内停止接收新动作，超时后旧动作执行数为 0。

<a id="day-079"></a>

##### Day 079｜2026-11-10 星期二｜2 小时｜端到端时延可观测性

**详细执行指南：** [[#D079 详细执行｜端到端时延可观测性|打开 Day 079 详细执行]]

**当天任务**

- [ ] 在采集、发送、排队、推理、接收、执行各处增加时间戳。
- [ ] 计算 P50/P95/P99 和时钟偏差。
- [ ] 建立 trace_id 关联日志。

**所需资源：** [R10 LeRobot 异步推理](https://huggingface.co/docs/lerobot/v0.6.0/en/async)；[R22 Linux tc-netem](https://man7.org/linux/man-pages/man8/tc-netem.8.html)

**当天交付物：** observability/latency_metrics.py

**完成验收：** 单个动作可追溯完整链路；指标能区分网络、排队和推理耗时。

<a id="day-080"></a>

##### Day 080｜2026-11-11 星期三｜2 小时｜动作年龄与队列水位

**详细执行指南：** [[#D080 详细执行｜动作年龄与队列水位|打开 Day 080 详细执行]]

**当天任务**

- [ ] 记录动作生成时间、消费时间、队列水位和欠载。
- [ ] 实现 stale action 丢弃与最小/最大队列阈值。
- [ ] 通过人工延迟验证。

**所需资源：** [R10 LeRobot 异步推理](https://huggingface.co/docs/lerobot/v0.6.0/en/async)；[R11 LeRobot RTC](https://huggingface.co/docs/lerobot/v0.6.0/en/rtc)

**当天交付物：** safety/action_queue_guard.py

**完成验收：** 超过阈值的旧动作不会执行；每次丢弃都有原因和计数。

<a id="day-081"></a>

##### Day 081｜2026-11-12 星期四｜2 小时｜限位、看门狗与状态机

**详细执行指南：** [[#D081 详细执行｜限位、看门狗与状态机|打开 Day 081 详细执行]]

**当天任务**

- [ ] 将软限位、步长、速度、心跳和状态新鲜度统一进安全状态机。
- [ ] 定义 SAFE_IDLE、READY、RUNNING、FAULT、ESTOP。
- [ ] 覆盖非法状态转换。

**所需资源：** H05 独立急停与安全工作区；[R20 GitHub Actions 文档](https://docs.github.com/en/actions)

**当天交付物：** safety/supervisor_state_machine.py

**完成验收：** 所有危险状态只能进入 FAULT/ESTOP；复位需要显式操作且不能跳过标定。

<a id="day-082"></a>

##### Day 082｜2026-11-13 星期五｜2 小时｜断线与恢复策略

**详细执行指南：** [[#D082 详细执行｜断线与恢复策略|打开 Day 082 详细执行]]

**当天任务**

- [ ] 分别模拟相机、机器人、Policy Server 和网络断开。
- [ ] 定义停止、保持、安全姿态与重连行为。
- [ ] 测量检测和恢复时间。

**所需资源：** [R10 LeRobot 异步推理](https://huggingface.co/docs/lerobot/v0.6.0/en/async)；[R22 Linux tc-netem](https://man7.org/linux/man-pages/man8/tc-netem.8.html)；H05 独立急停与安全工作区

**当天交付物：** tests/fault_disconnect_matrix.md

**完成验收：** 四类断线均不会消费旧动作；恢复必须通过健康检查和人工确认。

<a id="day-083"></a>

##### Day 083｜2026-11-14 星期六｜4 小时｜局域网、netem 与一次真实4G对比

**详细执行指南：** [[#D083 详细执行｜局域网、netem 与一次真实4G对比|打开 Day 083 详细执行]]

**当天任务**

- [ ] 按冻结协议运行三类网络条件。
- [ ] 记录任务成功、完成时间、P95 时延、欠载、旧动作和安全拦截。
- [ ] R 轨在真实 4G 环境保持人工看护与独立急停；S 轨让 mock/replay 经过相同网络链路并明确不做物理安全声明。

**所需资源：** [R10 LeRobot 异步推理](https://huggingface.co/docs/lerobot/v0.6.0/en/async)；[R11 LeRobot RTC](https://huggingface.co/docs/lerobot/v0.6.0/en/rtc)；[R22 Linux tc-netem](https://man7.org/linux/man-pages/man8/tc-netem.8.html)；H05 独立急停与安全工作区；H07 4G 网络与可控网络环境

**当天交付物：** evaluations/network-v1/results.csv

**完成验收：** 每种网络配置至少3轮且保留原始时延/丢包；真实4G受环境限制单独报告；不声称网络结论具有普遍性。

<a id="day-084"></a>

##### Day 084｜2026-11-15 星期日｜2 小时｜弱网结论与安全阶段门

**详细执行指南：** [[#D084 详细执行｜弱网结论与安全阶段门|打开 Day 084 详细执行]]

**当天任务**

- [ ] 计算指标和置信区间，分析动作队列阈值。
- [ ] 明确哪些网络条件只允许遥测、哪些可低速实验。
- [ ] 形成边云安全限制声明。

**所需资源：** [R19 Hugging Face Model Cards](https://huggingface.co/docs/hub/en/model-cards)；H05 独立急停与安全工作区

**当天交付物：** reports/network-and-safety-v1.md

**完成验收：** 报告不宣称 4G 是硬实时控制；所有建议都由测量或安全原则支持。

#### 第 13 周｜实验记录平台与最小 HMI｜2026-11-16～2026-11-22

**本周目标：** 只实现支撑实验复现和人工接管的最小平台，不在一周内重造完整IoT产品。

**阶段门：** 能登记实验、查看健康和时间线、标注失败并触发受限人工接管；认证和隐私检查通过。

<a id="day-085"></a>

##### Day 085｜2026-11-16 星期一｜2 小时｜实验注册表后端

**详细执行指南：** [[#D085 详细执行｜实验注册表后端|打开 Day 085 详细执行]]

**当天任务**

- [ ] 用 Go 或 Python 实现设备、数据、模型、实验和评测元数据 API。
- [ ] 采用不可变实验记录和显式状态转换。
- [ ] 增加输入校验和最小权限。

**所需资源：** [R20 GitHub Actions 文档](https://docs.github.com/en/actions)；[R21 Docker 文档](https://docs.docker.com/)

**当天交付物：** platform/api 与 OpenAPI 文档

**完成验收：** 实验记录不可被静默改写；错误输入和未授权请求有测试。

<a id="day-086"></a>

##### Day 086｜2026-11-17 星期二｜2 小时｜Web 实验与健康面板

**详细执行指南：** [[#D086 详细执行｜Web 实验与健康面板|打开 Day 086 详细执行]]

**当天任务**

- [ ] 展示设备健康、网络、动作队列、模型版本和任务结果。
- [ ] 支持按 experiment_id 定位日志和视频。
- [ ] 显式区分实时值、延迟值和离线统计。

**所需资源：** [R20 GitHub Actions 文档](https://docs.github.com/en/actions)

**当天交付物：** platform/web-dashboard

**完成验收：** 超过 2 个预期遥测周期即显示 STALE；断网、过期、FAULT 三类快照测试全部标红且不显示“实时正常”。

<a id="day-087"></a>

##### Day 087｜2026-11-18 星期三｜2 小时｜Flutter 移动 HMI

**详细执行指南：** [[#D087 详细执行｜Flutter 移动 HMI|打开 Day 087 详细执行]]

**当天任务**

- [ ] 复用现有 Flutter 能力实现状态查看、采集控制和人工接管入口。
- [ ] 高风险动作要求二次确认并受服务端状态机约束。
- [ ] 离线时只读并提示过期。

**所需资源：** [R31 OWASP MASVS 移动端安全标准](https://mas.owasp.org/MASVS/)；H07 4G 网络与可控网络环境

**当天交付物：** apps/edgevla_hmi 最小版本

**完成验收：** 覆盖离线、三种角色、二次确认、服务端拒绝共不少于 12 个测试；所有非法场景的动作请求数为 0。

<a id="day-088"></a>

##### Day 088｜2026-11-19 星期四｜2 小时｜视频、日志与轨迹同步

**详细执行指南：** [[#D088 详细执行｜视频、日志与轨迹同步|打开 Day 088 详细执行]]

**当天任务**

- [ ] 在面板中对齐 episode 视频、状态、动作和网络事件。
- [ ] 支持跳转失败时间点。
- [ ] 用同一时钟基准展示误差。

**所需资源：** [R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；[R20 GitHub Actions 文档](https://docs.github.com/en/actions)

**当天交付物：** platform/timeline-viewer

**完成验收：** 从失败结果一键定位到对应视频帧、动作、日志和网络事件。

<a id="day-089"></a>

##### Day 089｜2026-11-20 星期五｜2 小时｜失败标注与数据闭环

**详细执行指南：** [[#D089 详细执行｜失败标注与数据闭环|打开 Day 089 详细执行]]

**当天任务**

- [ ] 增加失败类别、严重度、根因置信度和处理建议。
- [ ] 从评测选择待补采场景，不直接修改原始数据。
- [ ] 导出下一轮采集清单。

**所需资源：** [R18 Hugging Face Dataset Cards](https://huggingface.co/docs/hub/en/datasets-cards)；[R20 GitHub Actions 文档](https://docs.github.com/en/actions)

**当天交付物：** platform/failure-review 与采集清单

**完成验收：** 标注有审计记录；新数据与原评测测试集隔离。

<a id="day-090"></a>

##### Day 090｜2026-11-21 星期六｜4 小时｜认证、配置与安全审查

**详细执行指南：** [[#D090 详细执行｜认证、配置与安全审查|打开 Day 090 详细执行]]

**当天任务**

- [ ] 区分观察者、操作者和管理员权限。
- [ ] 将密钥、设备配置和模型配置外置。
- [ ] 审查上传、日志隐私和远程控制入口。

**所需资源：** [R20 GitHub Actions 文档](https://docs.github.com/en/actions)；[R21 Docker 文档](https://docs.docker.com/)

**当天交付物：** platform/security-review.md

**完成验收：** 无默认弱密码、硬编码密钥或匿名控制接口；高风险操作均可审计。

<a id="day-091"></a>

##### Day 091｜2026-11-22 星期日｜2 小时｜平台端到端阶段门

**详细执行指南：** [[#D091 详细执行｜平台端到端阶段门|打开 Day 091 详细执行]]

**当天任务**

- [ ] 演练采集、训练登记、部署、评测、失败标注和告警。
- [ ] 模拟设备和网络断开。
- [ ] 录制未经剪辑的端到端演示。

**所需资源：** [R20 GitHub Actions 文档](https://docs.github.com/en/actions)；H07 4G 网络与可控网络环境

**当天交付物：** week-13-e2e-report.md 与原始演示视频

**完成验收：** 采集、登记、部署、评测、标注、告警六条主链路及设备/网络两条故障链路共 8 项全部通过；平台停止后本地安全状态机测试仍通过。

#### 第 14 周｜测试、容器、性能与恢复｜2026-11-23～2026-11-29

**本周目标：** 将作品提升为可重建、可测试、可恢复的工程系统，硬件测试与模拟CI分离。

**阶段门：** CI绿色；镜像/环境可重建；48小时长稳或如实PARTIAL；关键故障有恢复证据。

<a id="day-092"></a>

##### Day 092｜2026-11-23 星期一｜2 小时｜容器与依赖分层

**详细执行指南：** [[#D092 详细执行｜容器与依赖分层|打开 Day 092 详细执行]]

**当天任务**

- [ ] 为 CPU 工具、GPU 训练和平台服务分别设计镜像。
- [ ] 固定基础镜像与依赖哈希。
- [ ] 排除数据、权重和设备私有 SDK。

**所需资源：** [R21 Docker 文档](https://docs.docker.com/)；[R20 GitHub Actions 文档](https://docs.github.com/en/actions)

**当天交付物：** containers/ 与 compose.yaml

**完成验收：** CPU 镜像可在无 GPU 环境运行测试；镜像不含隐私数据或许可证不明文件。

<a id="day-093"></a>

##### Day 093｜2026-11-24 星期二｜2 小时｜配置、密钥与环境校验

**详细执行指南：** [[#D093 详细执行｜配置、密钥与环境校验|打开 Day 093 详细执行]]

**当天任务**

- [ ] 建立分层配置和 schema 校验。
- [ ] 增加启动前硬件、端口、模型和数据兼容性检查。
- [ ] 提供安全示例配置。

**所需资源：** [R20 GitHub Actions 文档](https://docs.github.com/en/actions)；[R21 Docker 文档](https://docs.docker.com/)

**当天交付物：** config schema 与 preflight 命令

**完成验收：** 缺失密钥、错误关节数、错误模型或危险参数均在运动前失败。

<a id="day-094"></a>

##### Day 094｜2026-11-25 星期三｜2 小时｜单元测试补齐

**详细执行指南：** [[#D094 详细执行｜单元测试补齐|打开 Day 094 详细执行]]

**当天任务**

- [ ] 覆盖 Python 与 C++ 的接口映射、归一化、时间戳、动作限幅、状态机和报告统计。
- [ ] 加入边界值和性质测试。
- [ ] 设置覆盖率基线但不以覆盖率代替场景测试。

**所需资源：** [R20 GitHub Actions 文档](https://docs.github.com/en/actions)；[R34 C++ Core Guidelines](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines)；[R35 CMake 官方教程](https://cmake.org/cmake/help/latest/guide/tutorial/)

**当天交付物：** unit test suite 与覆盖率报告

**完成验收：** 所有安全关键分支有直接测试；测试不依赖真实机械臂。

<a id="day-095"></a>

##### Day 095｜2026-11-26 星期四｜2 小时｜R 硬件在环 / S 模拟集成测试

**详细执行指南：** [[#D095 详细执行｜R 硬件在环 / S 模拟集成测试|打开 Day 095 详细执行]]

**当天任务**

- [ ] R 轨建立 mock、回放和低速真机三层测试；S 轨建立 mock、回放和仿真设备三层测试，不称为硬件在环。
- [ ] 覆盖启动、运行、断线、恢复和急停。
- [ ] 仅为 R 轨真实硬件测试设置显式 opt-in；S 轨默认测试不得探测或驱动物理设备。

**所需资源：** [R20 GitHub Actions 文档](https://docs.github.com/en/actions)；H05 独立急停与安全工作区

**当天交付物：** integration test matrix

**完成验收：** 默认 CI 不驱动真机；R 轨人工真机套件有安全清单和记录，S 轨三层测试全部标记 simulation/mock 且无 HIL 声称。

<a id="day-096"></a>

##### Day 096｜2026-11-27 星期五｜2 小时｜GitHub Actions CI

**详细执行指南：** [[#D096 详细执行｜GitHub Actions CI|打开 Day 096 详细执行]]

**当天任务**

- [ ] 配置 lint、typecheck、unit、dataset fixture、容器构建和文档链接检查。
- [ ] 固定 action 版本和最小权限。
- [ ] 生成可下载测试产物。

**所需资源：** [R20 GitHub Actions 文档](https://docs.github.com/en/actions)；[R21 Docker 文档](https://docs.docker.com/)

**当天交付物：** .github/workflows/ci.yml

**完成验收：** 全新 commit 的 CI 全绿；失败能定位具体阶段且无密钥泄漏。

<a id="day-097"></a>

##### Day 097｜2026-11-28 星期六｜4 小时｜性能分析与瓶颈

**详细执行指南：** [[#D097 详细执行｜性能分析与瓶颈|打开 Day 097 详细执行]]

**当天任务**

- [ ] 测量采集、编码、网络、推理、动作消费、平台写入的 CPU/GPU/内存。
- [ ] 识别一个真实瓶颈并优化。
- [ ] 保留优化前后相同负载数据。

**所需资源：** [R17 Weights & Biases 文档](https://docs.wandb.ai/)；[R21 Docker 文档](https://docs.docker.com/)

**当天交付物：** reports/performance-v1.md

**完成验收：** 优化结论由同一基准支持，不用不同配置制造提升。

<a id="day-098"></a>

##### Day 098｜2026-11-29 星期日｜2 小时｜48小时长稳与恢复验收

**详细执行指南：** [[#D098 详细执行｜48小时长稳与恢复验收|打开 Day 098 详细执行]]

**当天任务**

- [ ] 运行至少 2 小时采集/回放或安全的闭环 soak test。
- [ ] 期间注入网络中断和服务重启。
- [ ] 检查内存、句柄、队列、数据完整性和恢复时间。

**所需资源：** [R20 GitHub Actions 文档](https://docs.github.com/en/actions)；[R22 Linux tc-netem](https://man7.org/linux/man-pages/man8/tc-netem.8.html)；H05 独立急停与安全工作区

**机器墙钟时间：** 预计 48 小时；硬上限 72 小时；后台运行不占满人工时间；达到上限停止并分析。

**当天交付物：** reports/soak-and-recovery.md

**完成验收：** 达到48小时且故障注入完成才PASS；否则保留PARTIAL和后台继续计划；无资源持续增长趋势。

#### 第 15 周｜脱敏开源、证据与技术表达｜2026-11-30～2026-12-06

**本周目标：** 形成招聘方可复现、可质疑的公开证据，不以必须被上游接受PR作为完成条件。

**阶段门：** README、架构、数据/模型卡、失败演示、许可证和隐私审计完整；外部贡献按真实结果记录。

<a id="day-099"></a>

##### Day 099｜2026-11-30 星期一｜2 小时｜README 与快速开始

**详细执行指南：** [[#D099 详细执行｜README 与快速开始|打开 Day 099 详细执行]]

**当天任务**

- [ ] 说明问题、架构、状态、硬件、安装、仿真和真机安全。
- [ ] 区分上游项目与 EdgeVLA Lab 自研模块。
- [ ] 提供 30 分钟内可运行的无硬件路径。

**所需资源：** [R01 LeRobot v0.6.0 官方仓库](https://github.com/huggingface/lerobot/tree/v0.6.0)；[R20 GitHub Actions 文档](https://docs.github.com/en/actions)；[R21 Docker 文档](https://docs.docker.com/)；A06 独立评审者

**当天交付物：** README.md 候选版

**完成验收：** 在干净容器中仅按 README，30 分钟内完成 mock/回放且命令退出码为 0；全文检索无把 EdgeVLA Lab 写成官方项目的表述。

<a id="day-100"></a>

##### Day 100｜2026-12-01 星期二｜2 小时｜架构与威胁边界图

**详细执行指南：** [[#D100 详细执行｜架构与威胁边界图|打开 Day 100 详细执行]]

**当天任务**

- [ ] 绘制设备、相机、安全层、Policy Server、平台和 HMI。
- [ ] 标注实时/非实时、信任边界和故障域。
- [ ] 链接对应代码和测试。

**所需资源：** [R10 LeRobot 异步推理](https://huggingface.co/docs/lerobot/v0.6.0/en/async)；H05 独立急停与安全工作区

**当天交付物：** docs/architecture.md

**完成验收：** 每个关键组件有责任、输入输出和失败响应，不存在“云端急停”误导。

<a id="day-101"></a>

##### Day 101｜2026-12-02 星期三｜2 小时｜Dataset Card 定稿

**详细执行指南：** [[#D101 详细执行｜Dataset Card 定稿|打开 Day 101 详细执行]]

**当天任务**

- [ ] 补充采集协议、分布、质量指标、划分、许可、隐私和限制。
- [ ] 增加已知失败和不适用用途。
- [ ] 执行发布包去隐私检查。

**所需资源：** [R18 Hugging Face Dataset Cards](https://huggingface.co/docs/hub/en/datasets-cards)；[R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；[A02 Hugging Face Hub 账号](https://huggingface.co/)

**当天交付物：** 公开 DATASET_CARD.md 与 manifest

**完成验收：** 数据来源和许可可证明；无面部、手机号、密钥或厂商私有内容。

<a id="day-102"></a>

##### Day 102｜2026-12-03 星期四｜2 小时｜Model Card 与评测证据

**详细执行指南：** [[#D102 详细执行｜Model Card 与评测证据|打开 Day 102 详细执行]]

**当天任务**

- [ ] 记录模型基座、数据版本、训练配置、算力、指标和限制。
- [ ] 链接逐 episode 结果与失败视频。
- [ ] 明确不能用于无人看护或安全关键控制。

**所需资源：** [R19 Hugging Face Model Cards](https://huggingface.co/docs/hub/en/model-cards)；[R17 Weights & Biases 文档](https://docs.wandb.ai/)；[R26 LeRobot Adding a Policy](https://huggingface.co/docs/lerobot/v0.6.0/en/bring_your_own_policies)；[A02 Hugging Face Hub 账号](https://huggingface.co/)

**当天交付物：** MODEL_CARD_ACT.md 与 MODEL_CARD_SMOLVLA.md

**完成验收：** 每个数字可追溯；未完成或失败实验不会被省略。

<a id="day-103"></a>

##### Day 103｜2026-12-04 星期五｜2 小时｜成功与失败演示视频

**详细执行指南：** [[#D103 详细执行｜成功与失败演示视频|打开 Day 103 详细执行]]

**当天任务**

- [ ] 制作 3–5 分钟技术演示，包含架构、数据、训练、真机、弱网与安全。
- [ ] 保留至少一个典型失败和恢复过程。
- [ ] 为全部画面去除隐私与密钥。

**所需资源：** [R18 Hugging Face Dataset Cards](https://huggingface.co/docs/hub/en/datasets-cards)；[R19 Hugging Face Model Cards](https://huggingface.co/docs/hub/en/model-cards)

**当天交付物：** demo/video-v1 与旁白稿

**完成验收：** 视频中的指标与报告一致，不用剪辑掩盖评测轮次或危险行为。

<a id="day-104"></a>

##### Day 104｜2026-12-05 星期六｜4 小时｜上游贡献候选与真实反馈

**详细执行指南：** [[#D104 详细执行｜上游贡献候选与真实反馈|打开 Day 104 详细执行]]

**当天任务**

- [ ] 从学习中筛选一个可复现的上游文档、测试或bug问题，先搜索现有issue。
- [ ] 能给最小复现时提交issue/PR；证据不足时只在本仓库写调查报告，不制造低质量贡献。
- [ ] 记录链接、审查意见、未被接受或关闭原因；是否合并不作为当天PASS条件。

**所需资源：** [R01 LeRobot v0.6.0 官方仓库](https://github.com/huggingface/lerobot/tree/v0.6.0)；[R05 LeRobot 自定义硬件](https://huggingface.co/docs/lerobot/v0.6.0/en/integrate_hardware)；[R20 GitHub Actions 文档](https://docs.github.com/en/actions)；[R27 LeRobot 贡献指南](https://huggingface.co/docs/lerobot/main/en/contributing)；[A01 GitHub 账号与独立仓库](https://github.com/)

**当天交付物：** 一个高质量issue/PR链接，或一份可复核的no-submit调查报告

**完成验收：** 提交内容有版本、最小复现和期望/实际结果；没有为了KPI重复issue；未合并不包装成上游贡献。

<a id="day-105"></a>

##### Day 105｜2026-12-06 星期日｜2 小时｜开源、安全与发布阶段门

**详细执行指南：** [[#D105 详细执行｜开源、安全与发布阶段门|打开 Day 105 详细执行]]

**当天任务**

- [ ] 检查许可证、依赖、密钥、隐私、模型与数据使用条件。
- [ ] 由同学确认厂商/机械臂相关公开边界。
- [ ] R 轨门槛全过创建 v1.0.0-rc；否则创建 v0.x simulation/data-tooling rc 或延期。

**所需资源：** [R20 GitHub Actions 文档](https://docs.github.com/en/actions)；[R21 Docker 文档](https://docs.docker.com/)；H01 同学的机械臂与厂商 SDK；[A01 GitHub 账号与独立仓库](https://github.com/)；A05 机械臂所有者授权与使用排期

**当天交付物：** release-checklist.md 与条件化 release candidate

**完成验收：** 复现、安全、许可、隐私四项均签字/记录；任何未决高风险项阻止公开。

#### 第 16 周｜求职材料、投递实验与后续迭代｜2026-12-07～2026-12-13

**本周目标：** 只把已通过证据门的内容同步到简历，完成三类定向材料、面试复盘和首批小规模投递。

**阶段门：** 证据与简历逐条可追溯；完成3～5个高匹配岗位投递和反馈记录；发布范围与R/S轨一致。

<a id="day-106"></a>

##### Day 106｜2026-12-07 星期一｜2 小时｜可写入简历的指标审计

**详细执行指南：** [[#D106 详细执行｜可写入简历的指标审计|打开 Day 106 详细执行]]

**当天任务**

- [ ] 从实验产物提取 episode、成功率、P95 时延、恢复和安全指标。
- [ ] 逐项链接证据并标注样本和条件。
- [ ] 删除无法证明的数字和“熟练”表述。

**所需资源：** [R18 Hugging Face Dataset Cards](https://huggingface.co/docs/hub/en/datasets-cards)；[R19 Hugging Face Model Cards](https://huggingface.co/docs/hub/en/model-cards)

**当天交付物：** career/resume-evidence-v1.csv

**完成验收：** 每个简历要点都有公开或可提供的证据路径，无提前虚构成果。

<a id="day-107"></a>

##### Day 107｜2026-12-08 星期二｜2 小时｜GitHub 与作品集页面

**详细执行指南：** [[#D107 详细执行｜GitHub 与作品集页面|打开 Day 107 详细执行]]

**当天任务**

- [ ] 优化仓库简介、topic、README 首屏和导航。
- [ ] 在个人作品集中加入架构、责任、结果、限制和链接。
- [ ] 保留“拟建”到“已发布”的状态变更记录。

**所需资源：** [R20 GitHub Actions 文档](https://docs.github.com/en/actions)；A06 独立评审者

**当天交付物：** 公开项目页与作品集草稿

**完成验收：** 两名未参与项目者各浏览首页 60 秒后，能正确回答问题、个人贡献、一个真实指标、限制、复现入口 5 问中的至少 4 问。

<a id="day-108"></a>

##### Day 108｜2026-12-09 星期三｜2 小时｜三类定向简历

**详细执行指南：** [[#D108 详细执行｜三类定向简历|打开 Day 108 详细执行]]

**当天任务**

- [ ] 生成机器人软件/系统、数据闭环/部署、VLA 应用工程三类版本。
- [ ] 按岗位高频栈排序，不改事实。
- [ ] 将核心研究岗列为后续目标而非当前主投。

**所需资源：** [R20 GitHub Actions 文档](https://docs.github.com/en/actions)

**当天交付物：** career/resume-robot-system.md、resume-data-deploy.md、resume-vla-application.md

**完成验收：** 三个版本事实一致、侧重点不同；不声称论文、BSP、CAN 或伺服项目经验。

<a id="day-109"></a>

##### Day 109｜2026-12-10 星期四｜2 小时｜项目面试故事与技术深挖

**详细执行指南：** [[#D109 详细执行｜项目面试故事与技术深挖|打开 Day 109 详细执行]]

**当天任务**

- [ ] 准备架构、数据、模型、安全、弱网、失败和取舍七段 STAR/技术故事。
- [ ] 整理 tensor shape、归一化、chunk、时延和断线追问。
- [ ] 准备诚实回答个人与同学分工。

**所需资源：** [R06 LeRobot ACT 策略文档](https://huggingface.co/docs/lerobot/v0.6.0/en/act)；[R07 SmolVLA 官方说明](https://huggingface.co/blog/smolvla)；[R10 LeRobot 异步推理](https://huggingface.co/docs/lerobot/v0.6.0/en/async)

**当天交付物：** career/interview-story-bank.md

**完成验收：** 能在 2 分钟概述并在 20 分钟深挖；所有回答可指向代码或数据。

<a id="day-110"></a>

##### Day 110｜2026-12-11 星期五｜2 小时｜模拟面试与缺口修正

**详细执行指南：** [[#D110 详细执行｜模拟面试与缺口修正|打开 Day 110 详细执行]]

**当天任务**

- [ ] 完成一次 C++/Linux/ROS2 和一次 PyTorch/VLA/系统设计模拟面试。
- [ ] 将不会的问题分为概念、实践和证据缺口。
- [ ] 只修正高频且与目标岗位相关的前三项。

**所需资源：** [R12 ROS 2 官方文档](https://docs.ros.org/en/jazzy/index.html)；[R14 PyTorch Tutorials](https://docs.pytorch.org/tutorials/)

**当天交付物：** career/mock-interview-review.md

**完成验收：** 两次面试均有录音/评分；前三缺口各有具体练习或修复提交。

<a id="day-111"></a>

##### Day 111｜2026-12-12 星期六｜4 小时｜100岗位再分层与首批3～5个申请

**详细执行指南：** [[#D111 详细执行｜100岗位再分层与首批3～5个申请|打开 Day 111 详细执行]]

**当天任务**

- [ ] 用现有100岗位报告更新已失效链接，从中选择15个仍开放且地点/学历/年限可行的样本。
- [ ] 逐个做硬门槛和证据映射，选出3～5个高匹配岗位；为每个岗位调整项目顺序和自我介绍。
- [ ] 人工完成首批申请并记录日期、版本和结果；不使用高频自动化投递或抓取。

**所需资源：** [R20 GitHub Actions 文档](https://docs.github.com/en/actions)

**当天交付物：** career/application-tracker.csv 与3～5份投递记录

**完成验收：** 每个申请都链接简历版本和匹配证据；未申请的岗位不标已投；不承诺当天获得反馈。

<a id="day-112"></a>

##### Day 112｜2026-12-13 星期日｜2 小时｜条件发布、总复盘与下一90天

**详细执行指南：** [[#D112 详细执行｜条件发布、总复盘与下一90天|打开 Day 112 详细执行]]

**当天任务**

- [ ] 按R/S轨、许可证、隐私、复现和测试清单决定发布v0.x、v1.0或延期，不为日期强行升级版本。
- [ ] 统计112天真实投入、完成率、阻塞、硬件/GPU成本、面试反馈和最有价值证据。
- [ ] 从未完成项和岗位反馈中只选3个下一阶段目标，为每个目标定义进入/退出条件。

**所需资源：** [R20 GitHub Actions 文档](https://docs.github.com/en/actions)；[R21 Docker 文档](https://docs.docker.com/)；[A01 GitHub 账号与独立仓库](https://github.com/)；[A02 Hugging Face Hub 账号](https://huggingface.co/)

**当天交付物：** 条件化 release、retrospective.md 与 next-90-days.md

**完成验收：** Git状态干净、公开范围与证据一致；未完成内容保持未完成；下一90天不超过3个主目标。

### 里程碑与简历开放条件

| 里程碑 | 最早时间 | 必须具备的证据 | 简历可写范围 |
|---|---|---|---|
| M0 工程基线 | 第 1 周 | 私有仓库、证据账本、固定环境、C/C++与Python最小测试 | 只能写既有能力；新项目仍是学习计划 |
| M1 MCU/CAN 实证 | 第 4 周 | 真实I2C/SPI/UART/CAN、FreeRTOS测量、Bootloader与故障测试 | 只能按真实硬件、测试条件和个人实现范围描述 |
| M2 Linux 边缘系统 | 第 6 周 | Buildroot/启动链/设备树配置、C++ daemon、存储转发、回滚和长稳 | 可写系统构建与应用工程；未写内核驱动时不得称完整BSP |
| M3 机器人数据闭环 | 第 10 周 | R/S轨明确、25个小样本、ACT checkpoint、冻结评测与失败报告 | R轨可写真实样本；S轨只能写仿真/公开数据工具 |
| M4 VLA 与弱网安全 | 第 12 周 | SmolVLA smoke/小微调、三类泛化、异步队列、故障注入和网络对比 | 只写实际完成范围；4G不描述为硬实时安全控制 |
| M5 条件开源 | 第 16 周 | CI、复现、许可、隐私和证据门通过；按实际范围发布v0.x/v1.0或延期 | 简历内容必须逐条链接证据，S轨不得写真机成果 |

### 偏航处理

- 同学机械臂不可持续使用：继续 mock/仿真，并在第 5 周采购门后决定 SO-101；不要临时把他人项目包装成自己的。
- GPU 不足：先用 ACT 和小数据验证，再租按量 GPU；每个任务设置最长时长和成本上限。
- SDK 不允许开源：只公开通用接口、mock、测试和经授权的薄适配示例，不提交厂商源码或协议材料。
- 真机安全门不通过：停止自动控制，只做回放、数据工具和仿真；安全不因进度而降级。
- SmolVLA 结果不佳：如实保留负面结果，从数据覆盖、归一化、同步、任务设计和模型基线逐项排查。
- 求职压力增加：P0 岗位继续投递；本计划是能力升级路线，不要求暂停现有求职。

## 逐日详细执行

### 第 1 周详细执行｜真实边界、环境与工程基线

> [!info]- 当日导航
> [[#导航|↑ 文档导航]] · [[#D002 详细执行｜Linux 与 Python 环境固定|Day 002 →]]

#### D001 详细执行｜项目启动与真实性边界

> 计划日期：2026-08-24｜主动投入：2 小时
>
> 状态：执行指南，不代表已经完成。所有时间、证据和结论都必须按实际执行结果填写。
>

##### 今天只完成什么

今天不安装 LeRobot、不训练模型、不创建公开项目，也不把学习计划写成简历成果。只完成两件事：

1. 判断“现在可以投什么、完成作品后可以投什么、暂时只作为长期目标的岗位”。
2. 建立证据账本，使今后的每一条项目描述、指标和简历表述都能追溯到真实证据。

EdgeVLA Lab 在今天仍是“拟建开源作品”。Day 003 才建立私有学习仓库；是否公开，要等后续完成硬件授权、隐私和作品质量评审后再决定。

岗位分层以同一快照中的 [100 个岗位研究报告](../VLA-100-JOBS-REPORT.md) 为依据；报告是启发式市场样本，不代表招聘方的录用结论。

如果实际执行日期晚于 2026-08-24，必须分别填写 `scheduled_date` 和真实的 `actual_started_at`，不得倒填日期、补造日志或伪造提交时间。

##### 开始前：建立私有工作区（5 分钟）

Day 001/002 的实际证据不放进公开个人网站仓库。建议先放在本机 Linux 私有目录，Day 003 再纳入私有学习仓库的版本管理。

```bash
umask 077
export EDGEVLA_WORKSPACE="${HOME}/edgevla-learning-private"
mkdir -p \
  "${EDGEVLA_WORKSPACE}/docs" \
  "${EDGEVLA_WORKSPACE}/evidence" \
  "${EDGEVLA_WORKSPACE}/logs"
chmod 700 "${EDGEVLA_WORKSPACE}"
```

今天应产生三个文件：

```text
<EDGEVLA_WORKSPACE>/
├── docs/positioning.md
├── evidence/evidence-ledger.csv
└── logs/2026-08-24-day-001.md
```

如实际日期不同，只修改日志文件的日期。不要在公开仓库中记录 Windows/Linux 用户名、绝对路径、公司内部仓库、设备序列号、个人联系方式或未授权材料。

##### 120 分钟执行表

| 时间 | 工作 | 必须留下的结果 |
|---|---|---|
| 00:00–00:05 | 启动记录 | 写入计划日、真实开始时间、计划结束时间；确认当前目录不公开同步。 |
| 00:05–00:15 | 先写真实性红线 | 在 `positioning.md` 写“当前状态”和“不得声称”，防止后面模糊边界。 |
| 00:15–00:30 | 快读岗位报告 | 只读结论、高频技能、硬门槛、P0/P1/P2 和 P0 样本；提取 3 个岗位簇。 |
| 00:30–00:45 | 确定 P0 | 选 1 个主投簇、最多 1 个备选簇；写核心交付、已有证据和阻断项。 |
| 00:45–00:55 | 确定 P1/P2 | P1 选 1–2 个可通过作品补证的方向；P2 只保留 1 个长期方向。 |
| 00:55–01:20 | 原子化能力盘点 | 至少拆出 12 项能力，逐项标记状态、证据强度、边界和下一动作。 |
| 01:20–01:40 | 建证据账本 | 建 CSV 表头并至少填写 8 行；必须单列 CAN、伺服、ROS2、LeRobot/VLA。 |
| 01:40–01:52 | 完成定位页 | 写 P0/P1/P2 表、30 秒定位、升级门槛和不声明清单。 |
| 01:52–02:00 | 真实性复核 | 跑完验收清单，记录真实结束时间、遗留项和 Day 002 入口。 |

卡住超过 30 分钟时，记录问题后缩小范围。不要为了勾选“已完成”而编造证据。

##### 第一步：按证据距离划分 P0/P1/P2（40 分钟）

P0/P1/P2 表示“距离可验证胜任证据还有多远”，不是兴趣排序，也不是岗位级别高低。

###### 1. 先检查硬门槛

对每个岗位簇依次判断：

1. 学历与学籍是否满足；“硕士及以上”“在读实习”不能用技能重合抵消。
2. 总工作年限和机器人专项年限是否满足；IoT 年限不能自动替代真机、运控或算法年限。
3. CAN/EtherCAT、伺服、ROS2、运动控制、真机安全等是否属于核心职责；没有项目证据时不能算“部分掌握”。
4. 城市、出差、语言、工作许可等条件是否满足；未知就写“待核验”。

每项结果只写：`通过`、`待核验` 或 `阻断`。

###### 2. 再映射真实交付

每个岗位簇只抽取 3 项核心交付，并逐项标记：

- `E`：已有直接、可核验的证据。
- `T`：有相邻经验，可以迁移，但还没有机器人领域证据。
- `G`：明确缺口。

每个 `E` 或 `T` 必须引用一个 evidence ID；没有 ID 就先按 `G` 处理。

###### 3. 初始岗位分层建议

| 层级 | 判断条件 | 建议岗位簇 | 现在的动作 |
|---|---|---|---|
| P0 现在 | 无硬阻断；3 项核心交付中至少 1 项有 `E`，另 1 项有 `E/T`，且核心硬技能没有 `G` | 机器人 Linux 应用、系统集成、设备/边缘通信、数据采集平台、测试评测、现场部署、智能硬件全栈 | 可以继续投递；按 JD 重排既有项目，不添加 VLA 经历。 |
| P1 3–6 个月补证后 | 工程底座可迁移，但缺少 1–3 项机器人专属证据 | LeRobot 数据工具、机器人数据闭环、VLA 推理部署、具身系统应用、机器人端云平台 | 把缺口转成 EdgeVLA 验收项；达到证据门后再主投。 |
| P2 6–12 个月或更久 | 存在算法、学历、研究经历或多项基础性缺口 | VLA/世界模型/RL 核心算法、运动控制算法、基础模型训练研究 | 作为技术上限观察，不占近期主投配额。 |

结合现有经历，Day 001 可先采用以下假设，随后用证据账本修正：

- P0 主线：机器人 Linux 应用 / 系统集成 / 边缘与现场部署。
- P0 备选：机器人数据采集平台 / 测试工具 / IoT + 机器人全栈。
- P1 主线：LeRobot 数据闭环 + VLA 推理与系统集成。
- P2 观察：VLA / 世界模型 / 强化学习核心算法。

###### `positioning.md` 的 P0/P1/P2 表

```markdown
## P0 / P1 / P2

| tier | role_cluster | hard_gate | core_deliverables | evidence_ids | blockers | entry_gate | action |
|---|---|---|---|---|---|---|---|
| P0 | <主投岗位簇> | <通过/待核验/阻断> | <3 项真实交付> | <E-...> | <缺口> | <现在可投的最低条件> | <下一动作> |
| P1 | <补证后岗位簇> | <结果> | <3 项真实交付> | <E-...> | <缺口> | <作品需要达到什么标准> | <下一动作> |
| P2 | <长期岗位簇> | <结果> | <3 项真实交付> | <E-...> | <缺口> | <学历/理论/真机/论文门槛> | <观察，不主投> |
```

##### 第二步：原子化能力盘点（25 分钟）

不要写一个宽泛的“熟悉 Python/机器人/AI”。一项能力必须能由一个明确动作验证。

###### 字段规则

| 字段 | 填写规则 |
|---|---|
| `capability_id` | 从 `CAP-001` 递增；ID 永不复用。 |
| `domain` | Linux、嵌入式、通信、平台、机器人、AI/ML、数据、安全等。 |
| `capability` | 原子化，例如“ROS2 topic/service/QoS”，不能只写“ROS2”。 |
| `status` | 只能是 `已有证据`、`学习中`、`未开始`。当天未真实开始的不能写“学习中”。 |
| `evidence_strength` | `强/中/弱/无`，并由 evidence ID 支撑。 |
| `evidence_ids` | 对应证据账本中的一个或多个 ID；多个 ID 用分号分隔。 |
| `reproducibility` | `可复现/部分可复现/不可复现/未验证`。 |
| `scope_boundary` | 明确该证据不能推出什么。 |
| `target_tier` | 对应 P0/P1/P2 中哪个方向。 |
| `gap` | 当前缺少的具体知识或产物。 |
| `next_action` | 下一次能产生证据的最小动作。 |
| `resume_state` | `可写/条件可写/不可写`。 |

如需分级，使用证据级别，不使用“精通/熟练”的主观标签：

- L0：未开始。
- L1：能解释基本概念；阅读文档最高只能到 L1。
- L2：能按教程复现并解释关键步骤。
- L3：能独立完成可复现产物、测试和故障分析。
- L4：有生产交付、公开评审、上游贡献或多环境验证。

###### 初始盘点提示

以下只是待核验的盘点提示，不会自动成为简历事实：

| 能力 | Day 001 建议状态 | 必须写清的边界 |
|---|---|---|
| C / Embedded Linux 应用 | 已有证据（需关联既有项目） | 可写应用层、设备通信、交叉编译和稳定性排查；不等于 BSP/内核驱动。 |
| MCU / RTOS / LwIP / UART / DMA | 按既有证据填写 | MCU 与模组联调不等于机器人电机闭环。 |
| 4G / MQTT / RS485 / 设备接入 | 已有证据（需核验范围） | 协议解析、链路和异常恢复不等于 CAN/EtherCAT。 |
| IoT 后台 / Flutter / 端边云 | 已有证据（需核验范围） | 可迁移到机器人平台，不等于已完成 VLA 数据管线。 |
| Python 基础 | 按真实代码和测试填写 | 不等于 PyTorch、模型训练或机器人数据工程。 |
| C++17 / CMake | 按真实情况填写 | C 开发和“能阅读 C++”不等于职业级现代 C++。 |
| 传感器应用联调 | 已有证据（如证据成立） | 红外/雷达应用与协议联调不等于多类型底层驱动或传感器融合。 |
| ROS2 / tf2 / URDF / rosbag2 | 未开始 | 不得写“熟悉 ROS2”。 |
| PyTorch / 行为克隆 / ACT | 未开始 | 不得写模型训练或策略评测经验。 |
| LeRobot | 未开始 | 安装成功或跑官方 Demo 也不等于完整项目。 |
| 机械臂真机与安全 | 未开始 | 同学有机械臂不等于本人有项目经验。 |
| CAN / 伺服正式项目 | 未开始 | “接触过/连接过”不能写成项目开发经验。 |
| VLA 微调与泛化评测 | 未开始 | Dify/RAG、AI Coding 不等于 VLA。 |

##### 第三步：建立证据账本（20 分钟）

###### CSV 表头

复制到 `evidence/evidence-ledger.csv`，保存为 UTF-8：

```csv
evidence_id,capability_ids,record_kind,day_id,recorded_at,domain,capability_or_claim,capability_status,evidence_type,evidence_ref,source_version,environment,protocol_id,metric_name,metric_value,sample_size,verification_state,scope_limit,personal_contribution,assistance,visibility,resume_allowed,allowed_wording,forbidden_wording,notes
```

###### 关键字段

- `recorded_at`：真实 ISO 时间，不倒填。
- `capability_ids`：关联能力盘点中的 `CAP-...`；多个 ID 用分号分隔，确保双向追溯。
- `record_kind`：只用 `existing/planned_gate/prohibited/experiment`，避免把学习目标或禁止表述误读成既有成果。
- `evidence_type`：使用 `source_code/test_log/raw_data/video/report/public_resume/private_index/none`。
- `evidence_ref`：稳定的相对路径、commit、日志或私有证据索引；不要公开公司路径和私有 URL。
- `protocol_id`：指向测试前冻结的协议；没有协议就不能发布正式指标。
- `metric_*`：指标必须同时说明数值、样本量、环境和范围限制。
- `verification_state`：只用 `待核验/已核验/被否决/待产生`。
- `personal_contribution`：只写本人实际完成部分，团队、上游和朋友的贡献分开记录。
- `assistance`：记录 `team/upstream/peer/AI-assisted/none`；AI 辅助产物仍需本人解释、审查和测试。
- `visibility`：使用 `private/sanitized-public/public`；公司项目证据默认 `private`。
- `resume_allowed`：使用 `no/conditional/yes`；新学习记录默认 `no`。

###### 示例行

以下仅示范记录方法，不代表这些证据已经核验。把时间、CAP 编号和私有索引全部替换为实际盘点结果：

```csv
"E-0001","CAP-001","existing","D001","<实际执行时间>","Embedded Linux","嵌入式 Linux 应用层设备通信与异常排查","已有证据","private_index","<待填写私有证据索引>","","ARM Linux","<待填写复核协议 ID>","","","","待核验","应用层；不含 BSP、内核驱动和机器人控制","既有项目中的应用开发、联调与问题闭环","team","private","conditional","嵌入式 Linux 应用与设备通信经验","BSP/内核驱动或机器人控制经验","既有经历索引，不属于 EdgeVLA 成果"
"E-0002","CAP-008","planned_gate","D001","<实际执行时间>","ROS2","目标验收：独立实现并诊断 ROS2 topic/service/QoS 实验","未开始","none","","","","","","","","待产生","尚未完成 ROS2 实验","","none","private","no","计划学习 ROS2","熟悉 ROS2；拥有 ROS2 项目经验","完成真实实验后新增 experiment 记录，不覆盖本行"
"E-0003","CAP-010;CAP-011;CAP-013","prohibited","D001","<实际执行时间>","LeRobot/VLA","当前边界：尚未完成机械臂数据采集、VLA 微调或评测","未开始","none","","","","","","","","被否决","当前只有计划；无代码、数据、checkpoint 或评测","","none","private","no","EdgeVLA Lab 处于计划阶段","已完成 LeRobot/VLA 项目","后续按里程碑建立新 evidence ID"
"E-0004","CAP-012","prohibited","D001","<实际执行时间>","CAN/伺服","当前边界：尚无 CAN 总线或伺服电机正式项目证据","未开始","none","","","","","","","","被否决","基础接触不能替代正式项目证据","","none","private","no","基础接触，尚无正式项目证据","熟悉 CAN；负责伺服控制","需另做专项实证"
```

证据结论改变时新增一行，并在 `notes` 引用旧 evidence ID；不要覆盖旧记录。失败、被否决的表述和负面结果也要保留。

##### 第四步：完成 `positioning.md`（12 分钟）

```markdown
# Day 001 Positioning

## 执行信息
- plan_day: D001
- scheduled_date: 2026-08-24
- actual_started_at: <真实 ISO 时间>
- actual_finished_at: <完成后填写>
- actual_minutes: <实际用时>
- project_status: 拟建/学习准备阶段
- public_repo_status: 未创建

## 当前已验证底座
- <能力 + evidence ID + 范围限制>

## P0 / P1 / P2
<填写前述表格>

## 30 秒定位
<事实性表述>

## 不得声称
- <禁用表述 + 原因 + 何时可以复审>

## 下一次复审
- trigger: <里程碑或真实日期>
- required_evidence: <证据门>
```

可先使用下面这段，再按真实证据收紧或改写：

> 我当前的已验证优势在嵌入式 Linux 应用、设备通信、物联网端边云和现场交付。近期主要关注机器人 Linux 应用、系统集成、数据采集与部署类岗位；通过系统学习补齐 Python/PyTorch、ROS2、LeRobot 数据闭环和真机安全。在形成可复现代码、原始记录和冻结评测前，不把 VLA、机械臂、CAN 或伺服写成已完成项目经验。

##### 真实性规则

1. 上游项目不等于个人作品：LeRobot、ROS2、PyTorch、SO-101 等功能不能写成本人开发。
2. 阅读不等于掌握；安装成功只证明特定环境下安装成功。
3. 跑通官方 Demo 只能写“复现上游示例”，并注明版本和个人修改范围。
4. AI Coding 不等于 AI 算法；AI 辅助必须记录，本人要能解释、审查并用测试承担结果。
5. Dify/RAG/大模型 API 集成不等于 VLA 训练与机器人学习。
6. Linux 应用、交叉编译和设备接入不等于 BSP、内核或底层驱动。
7. MQTT/场景/状态机控制不等于运动学、动力学、轨迹规划或伺服闭环。
8. 传感器协议接入不等于底层驱动或多传感器融合；必须写明真实层级。
9. QEMU 不等于机器人仿真；仿真与真机结果永久分轨。
10. 同学提供机械臂不等于本人已有机械臂项目；必须有授权、个人贡献和安全记录。
11. 指标必须先冻结测试协议，再保留全部轮次、失败样本、环境、样本量和统计口径。
12. 原始记录、配置、数据 revision、commit 和修正记录不可静默改写。
13. 真机必须有人看护、低速和物理急停；4G 不承担无保护的硬实时闭环控制。
14. 不提交公司源码、受限 SDK/协议、密钥、私人联系方式、个人原始视频、未授权数据或权重。
15. 只有达到计划中的里程碑证据门，相关能力才允许进入简历。

###### 待证据索引的经历线索

下列项目来自既有简历材料或本人说明，但仍要在 evidence ledger 中建立索引。`待核验` 完成前，不自动开放为新简历表述。

| 经历线索 | 状态 / evidence ID | 核验后可说的最大范围 | 当前不可以说 |
|---|---|---|---|
| 全志 Cortex-A7 4G 网关 | 待核验 / `<E-...>` | 嵌入式 Linux 应用、设备通信、协议处理、联调与交付 | Linux BSP、内核驱动、机器人控制器开发 |
| CAN/伺服有基础接触 | 待核验 / `<E-...>` | 接触过，尚无完整项目经验 | 熟悉 CAN/CANopen；负责伺服电机控制 |
| 红外、雷达等传感器应用 | 待核验 / `<E-...>` | 传感器应用接入、协议联调或业务逻辑（按事实选词） | 多类型底层传感器驱动；多传感器融合算法 |
| AI 辅助开发现有项目 | 待核验 / `<E-...>` | 使用 AI 工具辅助需求拆解、实现、审查和测试（须能解释） | VLA 算法研发；机器人学习模型训练经验 |
| 即将学习 LeRobot | 已确认是计划 / `E-0003` | EdgeVLA Lab 处于规划/学习阶段 | 已完成 LeRobot/VLA 开源项目 |

##### 8 分钟验收

只有全部通过，Day 001 才算完成：

- [ ] 两个交付文件和当日日志已在本地私有工作区创建，编码为 UTF-8。
- [ ] 定位页写明“拟建/学习阶段”，没有暗示 EdgeVLA 已完成或已公开。
- [ ] 明确 1 个 P0 主线、最多 1 个 P0 备选、1–2 个 P1 和 1 个 P2，并写清进入条件。
- [ ] 岗位先经过学历、年限、机器人专项经验、地点/许可等硬门槛检查。
- [ ] 能力盘点不少于 12 项，状态只使用“已有证据/学习中/未开始”。
- [ ] 每个“已有证据”都有 evidence ID；没有 evidence ID 的能力没有写成“熟悉”。
- [ ] CAN、伺服、ROS2、LeRobot、VLA、机械臂真机均有单独边界记录。
- [ ] Python 与 PyTorch、C 与现代 C++、Linux 应用与 BSP 被拆开记录。
- [ ] evidence ID 唯一，日期真实；既有经历和未来 EdgeVLA 证据没有混在一起。
- [ ] 没有虚构指标、成功率、样本量、训练结果或真机成果。
- [ ] 文档中无联系方式、密钥、公司源码路径、受限协议或未授权材料。
- [ ] 记录了真实结束时间、实际用时、未完成项和 Day 002 入口。

最后做一次禁词复核。命中不一定代表错误，但每一处都必须人工说明证据和边界：

```bash
cd "${EDGEVLA_WORKSPACE}"
rg -n "精通|熟悉 ROS2|VLA 项目经验|机械臂项目经验|CAN 驱动|伺服控制项目|BSP 驱动|底层传感器驱动|真机成功率" \
  docs evidence logs || true
```

##### 日志收尾模板

```markdown
# D001 Execution Log

- scheduled_date: 2026-08-24
- actual_started_at:
- actual_finished_at:
- actual_minutes:
- result: PASS / PARTIAL / BLOCKED

## 今天完成
-

## 未完成与原因
-

## 被否决的表述
-

## Day 002 入口
- chosen_environment: native-ubuntu / wsl2
- compute_mode: local-nvidia-gpu / no-local-gpu
- known_hardware:
- unresolved_questions:
```

##### 常见误区

- 按“最想做算法”确定 P0，而不是按当前证据确定。
- 花两小时浏览 100 个岗位，却没有做出 P0/P1/P2 决策。
- 把全部缺口标成“学习中”；没有真实动作的应写“未开始”。
- 把 C 自动映射成现代 C++，Linux 应用自动映射成 BSP，传感器接入自动映射成驱动。
- 把 AI 辅助开发速度当成 VLA/Agent 算法能力。
- 把安装、跑 notebook 或观看 Demo 当成可写简历的项目。
- 只保留最好结果，不保存失败轮次、测试条件和样本量。
- 用仿真视频或同学的机械臂暗示本人已有真机项目。
- 为追赶日历倒填日期、回写旧证据或跳过安全门。

Day 001 的完成标志不是文档漂亮，而是任何一句能力表述都能回答：我做了什么、在什么条件下、证据在哪里、又不能推出什么。

> [!info]- 当日导航
> [[#D001 详细执行｜项目启动与真实性边界|← Day 001]] · [[#导航|↑ 文档导航]] · [[#D003 详细执行｜仓库、分支与基础 CI|Day 003 →]]

#### D002 详细执行｜Linux 与 Python 环境固定

> 计划日期：2026-08-25｜主动投入：2 小时
>
> 状态：执行指南，不代表环境已经安装或验收。命令输出必须来自实际机器。
>

##### 今天只完成什么

今天固定一个可重建、可诊断的 LeRobot v0.6.0 基础环境。只要求：

1. 明确原生 Ubuntu 或 WSL2 路径，并记录本地 NVIDIA GPU 是否可用。
2. 固定 Python 3.12、LeRobot tag/commit 和官方 `uv.lock`。
3. 在全新 shell 中导入 `torch`、`lerobot`、`cv2`，完成 CPU 或 GPU 冒烟测试。
4. 形成脱敏的 `environment.md`、锁定记录和私有诊断输出。

今天不下载模型或数据集，不训练，不连接机械臂、相机、CAN 或串口，不安装 ROS2，也不把“安装成功”写成项目经验。

前置条件：Day 001 至少已经按真实结果记录为 `PASS`、`PARTIAL` 或 `BLOCKED`，且真实性边界与证据账本文件已建立。若尚未完成，先补 Day 001，不要把两天压缩成同一个 2 小时任务后倒填结果。

##### 版本基线与事实边界

本指南固定：

| 项目 | Day 002 基线 |
|---|---|
| Linux | 优先 Ubuntu 24.04 x86_64；最终版本仍需服从机械臂/相机厂商 SDK 的支持矩阵 |
| Python | 3.12.x |
| 环境工具 | `uv` + 项目内 `.venv` |
| LeRobot | tag `v0.6.0` |
| LeRobot commit | `30da8e687a6dfc617fcd94afc367ac7071c376ce` |
| PyTorch 范围 | LeRobot v0.6.0 声明 `torch>=2.7,<2.12.0` |
| TorchVision 范围 | LeRobot v0.6.0 声明 `torchvision>=0.22,<0.27.0` |
| Linux uv 锁定值 | `torch==2.11.0+cu128`、`torchvision==0.26.0+cu128` |
| Linux uv 默认源 | PyTorch CUDA 12.8 索引；上游注释给出的驱动下限为 570.86 |
| ROS2 | 今天不安装；系统 ROS 环境与 LeRobot venv 分离 |

版本依据来自 [LeRobot v0.6.0 的 `pyproject.toml`](https://github.com/huggingface/lerobot/blob/v0.6.0/pyproject.toml) 和 [v0.6.0 发布说明](https://huggingface.co/blog/lerobot-release-v060)。如果未来官方 `main` 已变化，Day 002 仍以这个 tag 为准，不能混用新文档里的未锁定命令。

重要概念：

- NVIDIA 驱动、系统 CUDA Toolkit、PyTorch wheel 自带的 CUDA runtime 是三件不同的事。
- `nvidia-smi` 显示的 “CUDA Version” 是驱动可支持的上限，不等于已经安装了同版本 Toolkit。
- 今天不编译自定义 CUDA 算子，因此不要为了“补齐环境”盲目安装系统 CUDA Toolkit。
- Linux 下 v0.6.0 的 uv 配置默认选择 cu128。无 GPU 时仍可用 CPU 导入和冒烟，但安装的仍是 cu128 wheel，并会下载 CUDA 依赖；这不是真正的 CPU-only 环境，也不能承担正式 VLA 训练。

##### 环境路径怎么选

| 路径 | 建议 | Day 002 可做 | 限制 |
|---|---|---|---|
| 原生 Ubuntu 24.04 | 长期推荐 | 数据、训练、USB/串口/CAN、后续真机 | 需确认现有硬件 SDK 支持；安装系统前先备份。 |
| WSL2 + Ubuntu 24.04 | 当前 Windows 学习环境推荐 | 源码、Python、数据处理、仿真、GPU 训练 | USB 需 `usbipd-win`；真机阶段可能仍需原生 Ubuntu。 |
| Ubuntu/WSL2 无可用 NVIDIA GPU | 可接受基础路径 | 导入、数据检查、CPU 冒烟、代码开发 | 仍按上游锁下载 cu128 依赖；不做正式训练，后续使用云 GPU 或独立 GPU 主机。 |
| Windows 原生 Python | 本计划不采用 | — | 与后续 ROS2、Linux 工具链和真机环境产生额外分叉。 |

如果使用 WSL2，项目必须放在 Linux 文件系统，如 `~/src`，不要放在 `/mnt/c` 或 `/mnt/e`。Microsoft 说明 WSL2 的 USB 设备需要额外连接流程；因此 WSL2 中“看不到机械臂”不是 Day 002 的失败项。参考 [WSL 文件系统说明](https://learn.microsoft.com/en-us/windows/wsl/filesystems) 和 [WSL USB 连接说明](https://learn.microsoft.com/en-us/windows/wsl/connect-usb)。

##### 120 分钟执行表

| 时间 | 工作 | 必须留下的结果 |
|---|---|---|
| 00:00–00:10 | 选择环境路径 | 在 `environment.md` 写原生 Ubuntu / WSL2，以及 local-NVIDIA / no-local-GPU 计算模式、理由和限制。 |
| 00:10–00:25 | 主机诊断 | 生成私有 `system-private.txt`；确认 OS、架构、CPU、内存、磁盘和 GPU 状态。 |
| 00:25–00:40 | 基础依赖与 uv | 安装 Git、curl、编译工具、FFmpeg 和 uv；记录实际版本。 |
| 00:40–00:55 | 固定源码 | checkout `v0.6.0`，校验完整 commit 和 `uv.lock` 哈希。 |
| 00:55–01:25 | 创建并同步环境 | 创建 Python 3.12 `.venv`，使用官方锁文件完成基础安装。 |
| 01:25–01:42 | 导入与计算冒烟 | 导入 3 个模块、检查版本，完成 CPU/GPU 张量计算。 |
| 01:42–01:52 | 新 shell 重建验证 | 在未加载 ROS 的新 shell 中重新激活并执行检查。 |
| 01:52–02:00 | 文档和隐私复核 | 补齐兼容矩阵、云 GPU 方案、遗留问题和真实结束时间。 |

安装或下载超过 10 分钟但没有明确进度时，按 `Ctrl+C` 停止，记录最后输出、已完成部分和下一动作。不要反复执行同一条命令或切换到来历不明的镜像。

##### 第一步：确认 WSL2 或原生 Ubuntu（10 分钟）

###### 如果当前是 Windows

先在 PowerShell 中只检查状态：

```powershell
wsl --status
wsl -l -v
```

目标发行版应显示 `VERSION 2`。如果尚未安装，先查看 Microsoft 当前提供的准确名称，再安装：

```powershell
wsl --list --online
wsl --install -d <列表中的 Ubuntu 24.04 名称>
wsl --update
```

安装发行版或重启属于一次明确的系统变更；执行前先保存其他工作。完整流程以 [Microsoft WSL 安装文档](https://learn.microsoft.com/en-us/windows/wsl/install) 为准。

###### 在 Ubuntu shell 中确认

```bash
. /etc/os-release
printf 'os=%s\n' "$PRETTY_NAME"
printf 'arch=%s\n' "$(uname -m)"
if grep -qi microsoft /proc/version; then
  echo 'environment=wsl2'
else
  echo 'environment=native-linux'
fi
```

如果是 WSL2：

- NVIDIA 驱动只安装在 Windows 主机。
- 不在 WSL 内安装 Linux NVIDIA 显示驱动，也不安装会捆绑驱动的 `cuda`/`cuda-drivers` 元包。
- 需要 GPU 时按 [NVIDIA CUDA on WSL 指南](https://docs.nvidia.com/cuda/wsl-user-guide/) 核对 Windows 驱动和 WSL 状态。

##### 第二步：生成安全诊断（15 分钟）

```bash
set -Eeuo pipefail
umask 077

export EDGEVLA_WORKSPACE="${HOME}/edgevla-learning-private"
export LEROBOT_SRC="${HOME}/src/lerobot-v0.6.0"

mkdir -p \
  "${EDGEVLA_WORKSPACE}/docs" \
  "${EDGEVLA_WORKSPACE}/diagnostics" \
  "${EDGEVLA_WORKSPACE}/locks" \
  "${HOME}/src"

{
  printf 'captured_at=%s\n' "$(date -Iseconds)"
  . /etc/os-release
  printf 'os=%s\n' "$PRETTY_NAME"
  printf 'kernel=%s\n' "$(uname -srmo)"
  printf 'architecture=%s\n' "$(uname -m)"
  lscpu | grep -E '^(Architecture|CPU\(s\)|Model name):' || true
  free -h
  df -h --output=size,avail,pcent /
  if grep -qi microsoft /proc/version; then echo 'wsl2=yes'; else echo 'wsl2=no'; fi
  if command -v nvidia-smi >/dev/null 2>&1; then
    nvidia-smi --query-gpu=name,driver_version,memory.total --format=csv,noheader
  else
    echo 'nvidia_gpu=not_detected'
  fi
  if command -v nvcc >/dev/null 2>&1; then
    nvcc --version | tail -n 1
  else
    echo 'system_cuda_toolkit=not_installed_or_not_in_path'
  fi
} | tee "${EDGEVLA_WORKSPACE}/diagnostics/system-private.txt"
```

这组命令刻意不采集主机名、IP、MAC、GPU UUID、USB 序列号或完整环境变量。不要为了“信息更全”执行并公开 `env`、`printenv`、`ip addr`、`git config --list`、`lsusb -v` 或任何 token 查询命令。

整套 112 天计划建议预留约 200 GB SSD；如果当前空间明显不足，在 `environment.md` 标记风险，今天不要下载数据集或模型。

##### 第三步：安装基础工具和 uv（15 分钟）

```bash
sudo apt-get update
sudo apt-get install -y \
  git \
  curl \
  ca-certificates \
  build-essential \
  pkg-config \
  ffmpeg
```

按 uv 官方安装方式安装，并把用户级二进制目录加入当前 shell：

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
export PATH="${HOME}/.local/bin:${PATH}"
uv --version
uv python install 3.12
uv python find 3.12
ffmpeg -version | head -n 1
git --version
```

uv 的安装与 Python 管理方式参考 [uv 官方文档](https://docs.astral.sh/uv/guides/install-python/)。不要把 `sudo pip`、系统 Python 包和项目 venv 混用。

##### 第四步：固定 LeRobot v0.6.0（15 分钟）

```bash
set -Eeuo pipefail
export LEROBOT_SRC="${HOME}/src/lerobot-v0.6.0"
export EXPECTED_LEROBOT_COMMIT="30da8e687a6dfc617fcd94afc367ac7071c376ce"

if [ -e "${LEROBOT_SRC}" ]; then
  echo "目标目录已存在：${LEROBOT_SRC}"
  echo "先检查它是否为正确仓库，不要直接覆盖。"
  exit 2
fi

git clone \
  --branch v0.6.0 \
  --depth 1 \
  https://github.com/huggingface/lerobot.git \
  "${LEROBOT_SRC}"

cd "${LEROBOT_SRC}"
test "$(git describe --tags --exact-match)" = 'v0.6.0'
test "$(git rev-parse HEAD)" = "${EXPECTED_LEROBOT_COMMIT}"
test -z "$(git status --porcelain)"
test -f uv.lock

printf 'tag=%s\n' "$(git describe --tags --exact-match)"
printf 'commit=%s\n' "$(git rev-parse HEAD)"
sha256sum uv.lock
```

不要 checkout `main`，不要手工修改上游 `pyproject.toml` 或 `uv.lock`。如果完整 commit 与本指南不一致，停止并核对远端 tag；不要忽略检查继续安装。

##### 第五步：创建 Python 3.12 环境并按锁文件安装（30 分钟）

```bash
set -Eeuo pipefail
export PATH="${HOME}/.local/bin:${PATH}"
export LEROBOT_SRC="${HOME}/src/lerobot-v0.6.0"

cd "${LEROBOT_SRC}"
uv venv --python 3.12 .venv
source .venv/bin/activate
python --version

uv lock --check
uv sync --locked --no-dev
uv sync --check --locked --no-dev
uv pip check
```

为什么 Day 002 先装基础环境：

- `lerobot` 基础依赖已经包含 PyTorch、TorchVision、NumPy 和 OpenCV，足以完成当天导入验收。
- `core_scripts` 会再引入数据、硬件和可视化依赖；`training` 会引入训练与实验追踪依赖。
- 这些 extras 应在真正使用前按任务添加，避免今天把硬件、仿真、策略模型和训练问题混成一个故障面。

后续需要时使用同一个锁文件增加功能，而不是安装 `[all]`。`uv sync` 默认执行精确同步，因此每次都要列出当前环境需要保留的完整 extras；漏写的 extra 可能被移除：

```bash
# 后续做数据采集/回放/标定时
uv sync --locked --no-dev --extra core_scripts

# 后续同时保留采集工具并进入训练时
uv sync --locked --no-dev \
  --extra core_scripts \
  --extra training

# 后续同时保留采集、训练并增加 SmolVLA 时
uv sync --locked --no-dev \
  --extra core_scripts \
  --extra training \
  --extra smolvla
```

不要在 Day 002 执行上面三条扩展命令。它们是后续入口，不是今天的验收项。

###### GPU 与 CPU 分支

v0.6.0 的 Linux uv 配置固定 PyTorch cu128 源，上游注释给出的驱动下限为 570.86。今天先保持官方锁不变：

- 有兼容 NVIDIA GPU：后面的 `cuda_available` 应为 `True`，再执行 GPU 冒烟。
- 事先选择“无本地 GPU”路径：`cuda_available=False` 是可接受结果，只做 CPU 冒烟并填写云 GPU 计划；安装仍会包含 cu128 依赖，要预留下载时间和磁盘。
- 选择“本地 NVIDIA GPU”路径，但显卡、驱动或 `cuda_available` 不满足：结果只能写 `PARTIAL` 或 `BLOCKED`，即使 CPU 冒烟通过也不能标记 GPU 路径 `PASS`。不要随机安装 CUDA/驱动；之后按 [PyTorch 官方安装选择器](https://pytorch.org/get-started/locally/) 和 Ubuntu/NVIDIA 官方文档单独处理。

本指南不提供覆盖上游锁的 CPU wheel 安装命令。若磁盘或带宽无法接受 cu128 依赖，应另建 CPU 专用方案，并明确它不再是“按 v0.6.0 上游 `uv.lock` 精确重建”；之后再次运行 `uv sync` 也可能把环境恢复为 cu128 锁定值。

“PyTorch 可导入但 GPU 不可用”不能在日志中写成 GPU 环境通过。

##### 第六步：导入和计算冒烟（17 分钟）

```bash
source "${HOME}/src/lerobot-v0.6.0/.venv/bin/activate"
cd "${HOME}/src/lerobot-v0.6.0"

python - <<'PY'
import sys
from importlib.metadata import version

import cv2
import lerobot
import torch
import torchvision
from packaging.version import Version

torch_version = Version(str(torch.__version__).split("+")[0])
torchvision_version = Version(str(torchvision.__version__).split("+")[0])

assert sys.version_info[:2] == (3, 12)
assert version("lerobot") == "0.6.0"
assert Version("2.7") <= torch_version < Version("2.12")
assert Version("0.22") <= torchvision_version < Version("0.27")
assert str(torch.__version__) == "2.11.0+cu128"
assert str(torchvision.__version__) == "0.26.0+cu128"

print("python:", sys.version.split()[0])
print("lerobot:", version("lerobot"))
print("torch:", torch.__version__)
print("torchvision:", torchvision.__version__)
print("opencv:", cv2.__version__)
print("torch_cuda_build:", torch.version.cuda)
print("cuda_available:", torch.cuda.is_available())
print("cuda_devices:", torch.cuda.device_count())

if torch.cuda.is_available():
    print("gpu0:", torch.cuda.get_device_name(0))
    x = torch.rand((1024, 1024), device="cuda")
    y = x @ x
    torch.cuda.synchronize()
    print("gpu_smoke:", tuple(y.shape))
else:
    x = torch.rand((128, 128))
    y = x @ x
    print("cpu_smoke:", tuple(y.shape))
PY

uv pip check
```

本地 NVIDIA GPU 路径通过必须同时满足 `cuda_available: True` 和 `gpu_smoke: (1024, 1024)`。只有事先选择“无本地 GPU”路径时，才允许以 `cuda_available: False` 和 `cpu_smoke: (128, 128)` 验收，并明确“不用于正式训练”。

##### 第七步：锁定和诊断证据（10 分钟）

```bash
set -Eeuo pipefail
export EDGEVLA_WORKSPACE="${HOME}/edgevla-learning-private"
export LEROBOT_SRC="${HOME}/src/lerobot-v0.6.0"

cd "${LEROBOT_SRC}"
source .venv/bin/activate

cp uv.lock "${EDGEVLA_WORKSPACE}/locks/lerobot-v0.6.0.uv.lock"

{
  printf 'lerobot_tag=%s\n' "$(git describe --tags --exact-match)"
  printf 'lerobot_commit=%s\n' "$(git rev-parse HEAD)"
  printf 'uv_lock_sha256='
  sha256sum uv.lock | awk '{print $1}'
  printf 'python=%s\n' "$(python --version 2>&1)"
  printf 'uv=%s\n' "$(uv --version)"
  printf 'ffmpeg=%s\n' "$(ffmpeg -version | head -n 1)"
} | tee "${EDGEVLA_WORKSPACE}/locks/environment-lock.txt"

uv pip list --format freeze \
  | LC_ALL=C sort \
  > "${EDGEVLA_WORKSPACE}/diagnostics/python-packages-private.txt"

python -m torch.utils.collect_env \
  > "${EDGEVLA_WORKSPACE}/diagnostics/torch-environment-private.txt"
```

`uv.lock` 是精确依赖依据；包列表与 `collect_env` 只作为实际安装诊断。它们保持私有，公开前必须检查用户名、绝对路径、设备标识和网络配置。

##### 第八步：新 shell 和 ROS 隔离验收（10 分钟）

关闭当前 shell，再打开一个没有加载 ROS 的 Ubuntu shell，执行：

```bash
export PATH="${HOME}/.local/bin:${PATH}"
cd "${HOME}/src/lerobot-v0.6.0"
source .venv/bin/activate

test -z "${ROS_DISTRO:-}"
test -z "${AMENT_PREFIX_PATH:-}"
test -z "${COLCON_PREFIX_PATH:-}"

python -c 'import cv2, lerobot, torch; from importlib.metadata import version; print(version("lerobot"), torch.__version__, cv2.__version__)'
test "$(git rev-parse HEAD)" = '30da8e687a6dfc617fcd94afc367ac7071c376ce'
uv pip check
uv sync --check --locked --no-dev
```

如果 `.bashrc` 会自动 source ROS，请在专用终端中移除自动加载，或使用独立 shell 启动脚本。后续 ROS2 使用系统安装和单独工作空间；LeRobot 使用本目录 `.venv`。两边通过 topic/service、文件或独立进程桥接，不把 `/opt/ros/.../site-packages` 塞进 LeRobot venv。

##### `environment.md` 模板

保存到私有工作区的 `docs/environment.md`：

```markdown
# Day 002 Environment Baseline

## 执行信息
- plan_day: D002
- scheduled_date: 2026-08-25
- actual_started_at:
- actual_finished_at:
- actual_minutes:
- result: PASS / PARTIAL / BLOCKED

## 环境决策
- os_type: native-ubuntu / wsl2
- compute_mode: local-nvidia-gpu / no-local-gpu
- reason:
- current_limits:
- hardware_sdk_check: pending / passed / blocked

## 主机信息（脱敏）
- os:
- kernel:
- architecture:
- cpu:
- memory:
- disk_available:
- gpu_name:
- nvidia_driver:
- gpu_memory:
- wsl_version:

## 固定版本
- python:
- uv:
- lerobot_tag: v0.6.0
- lerobot_commit: 30da8e687a6dfc617fcd94afc367ac7071c376ce
- uv_lock_sha256:
- torch:
- torchvision:
- torch_cuda_build:
- opencv:
- ffmpeg:

## 兼容矩阵
| component | required_or_pinned | actual | source | result | note |
|---|---|---|---|---|---|
| Ubuntu | 服从硬件 SDK；当前优先 24.04 | | OS release | PASS/PARTIAL/BLOCKED | |
| Python | 3.12.x | | uv | | |
| LeRobot | v0.6.0 / fixed commit | | git | | |
| PyTorch | pyproject `>=2.7,<2.12`；Linux lock `2.11.0+cu128` | | uv.lock | | |
| TorchVision | pyproject `>=0.22,<0.27`；Linux lock `0.26.0+cu128` | | uv.lock | | |
| GPU driver | 与锁定 CUDA wheel 兼容 | | nvidia-smi | | |
| FFmpeg | 可执行 | | apt | | |
| ROS2 | 独立系统环境，今天不安装 | not installed | boundary | PASS | |

## 验证结果
- imports:
- pip_check:
- cuda_available:
- cpu_or_gpu_smoke:
- clean_shell_recheck:

## 云 GPU 预案（无可用本地 GPU 时填写）
- provider: 待选，不在 Day 002 付费
- target_workload:
- required_vram:
- maximum_budget:
- image_or_setup:
- data_sync_method:
- secret_injection_method:
- shutdown_rule:

## 已知限制与下一动作
-

## 隐私复核
- [ ] 无用户名、主机名、IP、MAC、UUID、序列号
- [ ] 无 token、cookie、代理口令、SSH/密钥路径
- [ ] 无公司内部 URL、源码路径或未授权 SDK
```

##### Day 002 完成验收

只有全部满足才标记 `PASS`：

- [ ] 已选择并记录原生 Ubuntu / WSL2，以及本地 NVIDIA GPU / 无本地 GPU 路径。
- [ ] Ubuntu、架构、内存、磁盘和 GPU 状态来自真实诊断，不是推测。
- [ ] Python 为 3.12.x，环境位于 LeRobot 源码目录的 `.venv`。
- [ ] tag 精确为 `v0.6.0`，commit 精确为 `30da8e687a6dfc617fcd94afc367ac7071c376ce`。
- [ ] 上游 `uv.lock` 未被修改，且已记录 SHA-256。
- [ ] `torch`、`torchvision`、`lerobot`、`cv2` 均可导入；Linux 锁定版本精确为 `2.11.0+cu128`、`0.26.0+cu128` 和 `0.6.0`。
- [ ] `uv pip check` 无依赖冲突。
- [ ] `uv lock --check` 与 `uv sync --check --locked --no-dev` 均通过。
- [ ] 所选计算路径的 CPU 或 GPU 张量冒烟通过；本地 GPU 路径若 `cuda_available=False`，结果没有误标为 `PASS`。
- [ ] 新 shell 可重新激活环境并重复导入。
- [ ] LeRobot shell 没有加载 `ROS_DISTRO`、`AMENT_PREFIX_PATH` 或 `COLCON_PREFIX_PATH`。
- [ ] 无 GPU 时已记录云 GPU 预案，但今天没有无授权付费。
- [ ] `environment.md` 只包含脱敏结果；原始诊断保持私有。
- [ ] 没有下载大模型/数据集、连接硬件或把安装结果写成项目经验。

如果安装未完成，但诊断、阻塞位置和下一动作已经记录，结果写 `PARTIAL` 或 `BLOCKED`，不要写 `PASS`。

##### 常见故障

###### `nvidia-smi` 正常，但 `torch.cuda.is_available()` 为 `False`

```bash
python -c 'import torch; print(torch.__version__); print(torch.version.cuda); print(torch.cuda.is_available())'
uv pip show torch torchvision
```

- `torch.version.cuda` 为 `None` 通常表示 CPU wheel。
- 有 CUDA build 但仍不可用时，比较主机驱动、WSL 状态和 LeRobot 锁定源。
- 不要先安装随机版本的系统 CUDA Toolkit；保留输出后查 PyTorch/NVIDIA 官方矩阵。

###### WSL 内找不到 GPU

1. 更新 Windows 主机 NVIDIA 驱动。
2. 管理员 PowerShell 执行 `wsl --update`。
3. 执行 `wsl --shutdown` 后重新进入 WSL。
4. 不要在 WSL 内安装 Linux NVIDIA 驱动。

###### Python 不是 3.12

不要直接删除现有环境。先确认路径并把失败环境改名保留，再重新创建：

```bash
cd "${HOME}/src/lerobot-v0.6.0"
pwd
test -f pyproject.toml
mv .venv ".venv.failed-$(date +%Y%m%d-%H%M%S)"
uv venv --python 3.12 .venv
uv lock --check
uv sync --locked --no-dev
```

执行 `mv` 前仍需人工确认 `pwd` 正是预期 LeRobot 目录；否则停止。

###### `uv sync` 修改了锁文件或解析出不同版本

- 确认安装命令含 `--locked`，且安装前 `uv lock --check` 通过。
- 确认当前 commit 是固定 commit，`git status --short` 无 `uv.lock` 修改。
- 不要运行 `uv lock --upgrade`，也不要切换 `main`。

###### OpenCV 导入失败

```bash
uv pip show opencv-python-headless
uv pip check
```

先核对锁文件和完整错误；不要同时混装多个 OpenCV wheel。若缺系统库，只按 LeRobot 官方安装文档补充对应 Ubuntu 包。

###### FFmpeg / TorchCodec 报错

```bash
ffmpeg -version
uv pip show torchcodec av
```

Day 002 的基础导入不要求视频解码。记录错误；进入数据集任务前，按 [LeRobot v0.6.0 安装文档](https://huggingface.co/docs/lerobot/v0.6.0/en/installation) 核对 FFmpeg 和 TorchCodec 支持矩阵。

###### WSL 看不到机械臂、串口或 USB 相机

这不是 Day 002 失败。今天未进入硬件阶段；后续按 Microsoft `usbipd-win` 路径连接，或切换到原生 Ubuntu，并始终保留真机安全门。

###### ROS2 与 LeRobot Python 冲突

不要把 ROS2 的 `rclpy` 或系统 `PYTHONPATH` 强行装入 LeRobot venv。退出当前 shell，分别验证两个环境，再通过独立进程接口连接。

##### 官方参考

- [LeRobot v0.6.0 源码](https://github.com/huggingface/lerobot/tree/v0.6.0)
- [LeRobot v0.6.0 `pyproject.toml`](https://github.com/huggingface/lerobot/blob/v0.6.0/pyproject.toml)
- [LeRobot v0.6.0 发布说明](https://huggingface.co/blog/lerobot-release-v060)
- [LeRobot 安装指南](https://huggingface.co/docs/lerobot/v0.6.0/en/installation)
- [uv：安装与管理 Python](https://docs.astral.sh/uv/guides/install-python/)
- [PyTorch 官方安装选择器](https://pytorch.org/get-started/locally/)
- [Microsoft WSL FAQ](https://learn.microsoft.com/en-us/windows/wsl/faq)
- [NVIDIA CUDA on WSL](https://docs.nvidia.com/cuda/wsl-user-guide/)

Day 002 的完成标志不是“命令看起来跑过”，而是从一个新 shell 能重现同一版本、同一 commit 和同一验收结果，并且别人不会从公开文档中获得你的私人设备或账号信息。

> [!info]- 当日导航
> [[#D002 详细执行｜Linux 与 Python 环境固定|← Day 002]] · [[#导航|↑ 文档导航]] · [[#D004 详细执行｜C 与现代 C++ 基线测评|Day 004 →]]

#### D003 详细执行｜仓库、分支与基础 CI

> 计划日期：2026-08-26｜主动投入：2 小时｜第 1 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“仓库骨架、README 状态声明、首个绿色 CI”，并满足：从空目录按 README 可完成安装和测试；仓库中无密钥、权重或隐私数据。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 002 的结果记录，确认其状态和交付物“environment.md、依赖锁文件与诊断输出”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-003.md` 和 `evidence/day-003/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R20 GitHub Actions 文档](https://docs.github.com/en/actions)；[R21 Docker 文档](https://docs.docker.com/)；[R34 C++ Core Guidelines](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines)；[R35 CMake 官方教程](https://cmake.org/cmake/help/latest/guide/tutorial/)；[A01 GitHub 账号与独立仓库](https://github.com/)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 建立独立私有 EdgeVLA/Embedded 学习仓库，写明当前是学习与作品建设阶段，不复制任何公司源码。 |
| 00:35–01:00 | 任务 2 | 配置 Python、C++17/CMake 的格式检查、构建和最小单元测试；CI 只跑小型、无硬件任务。 |
| 01:00–01:25 | 任务 3 | 加入密钥、数据、模型、原始视频、设备标识和本机诊断文件的忽略与隐私检查规则。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜建立独立私有 EdgeVLA/Embedded 学习仓库，写明当前是学习与作品建设阶段，不复制任何公司源码。

1. 在 `logs/day-003.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 只读列出的官方/一手资料，先写出要回答的 3～5 个问题；阅读时逐条记录“结论、出处、适用版本、仍不确定项”，禁止只收藏链接。
3. 合上资料后用自己的话重写结论，并用一个反例或边界条件检验理解；无法解释的术语放入问题清单，不用“熟悉”代替掌握。
4. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
5. 把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
6. 每条实际执行命令连同退出码追加到 `evidence/day-003/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜配置 Python、C++17/CMake 的格式检查、构建和最小单元测试；CI 只跑小型、无硬件任务。

1. 在 `logs/day-003.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 执行前记录当前版本、磁盘空间和回滚点；只按固定版本/commit操作，命令失败时保留完整 stderr，不连续尝试多个来源的安装方案。
5. 完成后从新 shell 或干净 build 目录复验；记录实际版本、产物 hash、退出码和启动现象，避免依赖当前终端的隐式环境变量。
6. 每条实际执行命令连同退出码追加到 `evidence/day-003/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜加入密钥、数据、模型、原始视频、设备标识和本机诊断文件的忽略与隐私检查规则。

1. 在 `logs/day-003.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 先用 1 batch/少量 step 验证 shape、loss、保存和恢复，再冻结数据 revision、配置、seed、代码 commit 与算力预算后启动正式任务。
5. 观察首个训练/验证周期并主动验证一次 checkpoint 恢复；训练仍在运行时写 RUNNING，不把开始训练、下载权重或官方 demo 当成完成微调。
6. 每条实际执行命令连同退出码追加到 `evidence/day-003/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `cmake -S . -B build -DCMAKE_BUILD_TYPE=Debug`
- `cmake --build build --parallel`
- `ctest --test-dir build --output-on-failure`
- `python -m compileall -q src tools tests`
- `python -m pytest -q`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：仓库骨架、README 状态声明、首个绿色 CI
- 日志：`logs/day-003.md`
- 原始证据目录：`evidence/day-003/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：从空目录按 README 可完成安装和测试；仓库中无密钥、权重或隐私数据。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 硬件未到、损坏或无授权：保留接口/解析器/mock测试，真实硬件验收标记 `BLOCKED`；写明预计获得日期，不得用 mock 结果替代波形、总线或真机结果。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-003.md`：

    # Day 003 Result

    - plan_day: D003
    - scheduled_date: 2026-08-26
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D003 详细执行｜仓库、分支与基础 CI|← Day 003]] · [[#导航|↑ 文档导航]] · [[#D005 详细执行｜CMake、GoogleTest 与可重复构建|Day 005 →]]

#### D004 详细执行｜C 与现代 C++ 基线测评

> 计划日期：2026-08-27｜主动投入：2 小时｜第 1 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“cpp/ring_buffer、tests/ring_buffer_test.cpp 与 docs/c-cpp-baseline.md”，并满足：Debug/Release 均构建；至少 8 个测试通过；ASan/UBSan 无报告；基线文档列出不少于 5 个真实缺口。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 003 的结果记录，确认其状态和交付物“仓库骨架、README 状态声明、首个绿色 CI”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-004.md` 和 `evidence/day-004/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R34 C++ Core Guidelines](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines)；[R35 CMake 官方教程](https://cmake.org/cmake/help/latest/guide/tutorial/)；[R42 GoogleTest 官方入门](https://google.github.io/googletest/primer.html)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 完成 20 题闭卷自测：指针、生命周期、内存布局、volatile、大小端、对齐、线程安全与 RAII；不会的题原样记录。 |
| 00:35–01:00 | 任务 2 | 分别用 C11 和 C++17 实现定长环形缓冲区，明确满/空策略、越界行为和所有权，不使用未定义行为。 |
| 01:00–01:25 | 任务 3 | 为正常写读、回绕、满队列、空队列和并发边界编写测试，并用 AddressSanitizer/UBSan 运行。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜完成 20 题闭卷自测：指针、生命周期、内存布局、volatile、大小端、对齐、线程安全与 RAII；不会的题原样记录。

1. 在 `logs/day-004.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-004/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜分别用 C11 和 C++17 实现定长环形缓冲区，明确满/空策略、越界行为和所有权，不使用未定义行为。

1. 在 `logs/day-004.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
5. 把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
6. 每条实际执行命令连同退出码追加到 `evidence/day-004/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜为正常写读、回绕、满队列、空队列和并发边界编写测试，并用 AddressSanitizer/UBSan 运行。

1. 在 `logs/day-004.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
5. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
6. 每条实际执行命令连同退出码追加到 `evidence/day-004/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `cmake -S . -B build -DCMAKE_BUILD_TYPE=Debug`
- `cmake --build build --parallel`
- `ctest --test-dir build --output-on-failure`
- `python -m compileall -q src tools tests`
- `python -m pytest -q`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：cpp/ring_buffer、tests/ring_buffer_test.cpp 与 docs/c-cpp-baseline.md
- 日志：`logs/day-004.md`
- 原始证据目录：`evidence/day-004/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：Debug/Release 均构建；至少 8 个测试通过；ASan/UBSan 无报告；基线文档列出不少于 5 个真实缺口。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 单点卡住超过 30 分钟：保存完整错误、最小复现和已排除项；把范围缩到一个可测试子问题，剩余项写 `PARTIAL`，不通过延长到深夜制造假进度。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-004.md`：

    # Day 004 Result

    - plan_day: D004
    - scheduled_date: 2026-08-27
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D004 详细执行｜C 与现代 C++ 基线测评|← Day 004]] · [[#导航|↑ 文档导航]] · [[#D006 详细执行｜Linux 调试工具最小闭环|Day 006 →]]

#### D005 详细执行｜CMake、GoogleTest 与可重复构建

> 计划日期：2026-08-28｜主动投入：2 小时｜第 1 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“CMakeLists.txt、cmake/、scripts/build-and-test.sh 与构建日志”，并满足：两个干净 build 目录均能 configure/build/ctest；脚本无依赖手工修改的绝对路径。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 004 的结果记录，确认其状态和交付物“cpp/ring_buffer、tests/ring_buffer_test.cpp 与 docs/c-cpp-baseline.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-005.md` 和 `evidence/day-005/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R35 CMake 官方教程](https://cmake.org/cmake/help/latest/guide/tutorial/)；[R42 GoogleTest 官方入门](https://google.github.io/googletest/primer.html)；[R20 GitHub Actions 文档](https://docs.github.com/en/actions)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 将环形缓冲区拆为 library、test、example 三个 target，不使用全局 include_directories。 |
| 00:35–01:00 | 任务 2 | 加入编译告警并在学习代码中按错误处理；生成 compile_commands.json，记录编译器和 CMake 版本。 |
| 01:00–01:25 | 任务 3 | 写一份从空 build 目录开始的构建脚本，并在第二个干净目录重复执行。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜将环形缓冲区拆为 library、test、example 三个 target，不使用全局 include_directories。

1. 在 `logs/day-005.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-005/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜加入编译告警并在学习代码中按错误处理；生成 compile_commands.json，记录编译器和 CMake 版本。

1. 在 `logs/day-005.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 只读列出的官方/一手资料，先写出要回答的 3～5 个问题；阅读时逐条记录“结论、出处、适用版本、仍不确定项”，禁止只收藏链接。
3. 合上资料后用自己的话重写结论，并用一个反例或边界条件检验理解；无法解释的术语放入问题清单，不用“熟悉”代替掌握。
4. 执行前记录当前版本、磁盘空间和回滚点；只按固定版本/commit操作，命令失败时保留完整 stderr，不连续尝试多个来源的安装方案。
5. 完成后从新 shell 或干净 build 目录复验；记录实际版本、产物 hash、退出码和启动现象，避免依赖当前终端的隐式环境变量。
6. 每条实际执行命令连同退出码追加到 `evidence/day-005/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜写一份从空 build 目录开始的构建脚本，并在第二个干净目录重复执行。

1. 在 `logs/day-005.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 执行前记录当前版本、磁盘空间和回滚点；只按固定版本/commit操作，命令失败时保留完整 stderr，不连续尝试多个来源的安装方案。
3. 完成后从新 shell 或干净 build 目录复验；记录实际版本、产物 hash、退出码和启动现象，避免依赖当前终端的隐式环境变量。
4. 每条实际执行命令连同退出码追加到 `evidence/day-005/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `cmake -S . -B build -DCMAKE_BUILD_TYPE=Debug`
- `cmake --build build --parallel`
- `ctest --test-dir build --output-on-failure`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：CMakeLists.txt、cmake/、scripts/build-and-test.sh 与构建日志
- 日志：`logs/day-005.md`
- 原始证据目录：`evidence/day-005/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：两个干净 build 目录均能 configure/build/ctest；脚本无依赖手工修改的绝对路径。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 单点卡住超过 30 分钟：保存完整错误、最小复现和已排除项；把范围缩到一个可测试子问题，剩余项写 `PARTIAL`，不通过延长到深夜制造假进度。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-005.md`：

    # Day 005 Result

    - plan_day: D005
    - scheduled_date: 2026-08-28
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D005 详细执行｜CMake、GoogleTest 与可重复构建|← Day 005]] · [[#导航|↑ 文档导航]] · [[#D007 详细执行｜第一周复现与能力边界复盘|Day 007 →]]

#### D006 详细执行｜Linux 调试工具最小闭环

> 计划日期：2026-08-29｜主动投入：4 小时｜第 1 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“labs/linux-debugging、reports/linux-debugging-baseline.md”，并满足：三个故障都有复现步骤、定位证据、修复提交和回归测试；报告中不包含用户名、主机名或公司路径。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 005 的结果记录，确认其状态和交付物“CMakeLists.txt、cmake/、scripts/build-and-test.sh 与构建日志”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-006.md` 和 `evidence/day-006/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R36 Linux tracing 与性能工具文档](https://docs.kernel.org/trace/index.html)；[R34 C++ Core Guidelines](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines)；H02 Linux 开发主机。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 4 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–01:05 | 任务 1 | 为示例程序制造一次内存越界、一次死锁风险和一次系统调用失败，先记录症状再修复。 |
| 01:05–02:00 | 任务 2 | 分别使用 gdb、strace、Valgrind 或 Sanitizer 定位问题，保存脱敏命令与关键结论。 |
| 02:00–02:55 | 任务 3 | 给程序增加退出信号处理、错误码和结构化日志，验证异常退出不会留下临时文件。 |
| 02:55–03:40 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 03:40–04:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜为示例程序制造一次内存越界、一次死锁风险和一次系统调用失败，先记录症状再修复。

1. 在 `logs/day-006.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-006/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜分别使用 gdb、strace、Valgrind 或 Sanitizer 定位问题，保存脱敏命令与关键结论。

1. 在 `logs/day-006.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-006/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜给程序增加退出信号处理、错误码和结构化日志，验证异常退出不会留下临时文件。

1. 在 `logs/day-006.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
5. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
6. 每条实际执行命令连同退出码追加到 `evidence/day-006/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `python -m compileall -q src tools tests`
- `python -m pytest -q`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：labs/linux-debugging、reports/linux-debugging-baseline.md
- 日志：`logs/day-006.md`
- 原始证据目录：`evidence/day-006/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：三个故障都有复现步骤、定位证据、修复提交和回归测试；报告中不包含用户名、主机名或公司路径。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 单点卡住超过 30 分钟：保存完整错误、最小复现和已排除项；把范围缩到一个可测试子问题，剩余项写 `PARTIAL`，不通过延长到深夜制造假进度。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-006.md`：

    # Day 006 Result

    - plan_day: D006
    - scheduled_date: 2026-08-29
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D006 详细执行｜Linux 调试工具最小闭环|← Day 006]] · [[#导航|↑ 文档导航]] · [[#D008 详细执行｜开发板、原理图与引脚清单|Day 008 →]]

#### D007 详细执行｜第一周复现与能力边界复盘

> 计划日期：2026-08-30｜主动投入：2 小时｜第 1 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“reviews/week-01.md、可复现构建日志与更新后的证据账本”，并满足：干净环境在 30 分钟内完成构建测试；所有失败都有 issue/下一动作；没有把学习代码写成生产项目经验。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 006 的结果记录，确认其状态和交付物“labs/linux-debugging、reports/linux-debugging-baseline.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-007.md` 和 `evidence/day-007/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R20 GitHub Actions 文档](https://docs.github.com/en/actions)；[R34 C++ Core Guidelines](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines)；[R35 CMake 官方教程](https://cmake.org/cmake/help/latest/guide/tutorial/)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 从新 clone 或干净工作树按 README 重建，计时并记录每个失败点，不复用当前 shell 的隐式环境。 |
| 00:35–01:00 | 任务 2 | 运行 C/C++、Python、隐私和格式检查；将结果链接回 evidence ledger，而不是只截图。 |
| 01:00–01:25 | 任务 3 | 更新 P0/P1/P2 定位：主投嵌入式 Linux/设备系统，补强 MCU/RTOS，机器人部署作为中期方向。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜从新 clone 或干净工作树按 README 重建，计时并记录每个失败点，不复用当前 shell 的隐式环境。

1. 在 `logs/day-007.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 执行前记录当前版本、磁盘空间和回滚点；只按固定版本/commit操作，命令失败时保留完整 stderr，不连续尝试多个来源的安装方案。
3. 完成后从新 shell 或干净 build 目录复验；记录实际版本、产物 hash、退出码和启动现象，避免依赖当前终端的隐式环境变量。
4. 发布/提交前逐条核对证据 ID、个人贡献、上游来源、R/S轨和禁用表述；运行隐私检查并人工搜索联系方式、设备标识、密钥和公司材料。
5. 记录实际提交版本、目标链接和时间；外部是否回复、合并或录用是后续状态，不在当天伪造成果，也不高频自动化操作网站。
6. 每条实际执行命令连同退出码追加到 `evidence/day-007/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜运行 C/C++、Python、隐私和格式检查；将结果链接回 evidence ledger，而不是只截图。

1. 在 `logs/day-007.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-007/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜更新 P0/P1/P2 定位：主投嵌入式 Linux/设备系统，补强 MCU/RTOS，机器人部署作为中期方向。

1. 在 `logs/day-007.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-007/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `cmake -S . -B build -DCMAKE_BUILD_TYPE=Debug`
- `cmake --build build --parallel`
- `ctest --test-dir build --output-on-failure`
- `python -m compileall -q src tools tests`
- `python -m pytest -q`
- `<执行 docs/toolchain.md 中已固定的 MCU clean build 命令>`
- `<执行对应烧录/硬件测试命令，并保存固件 hash 与串口日志>`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：reviews/week-01.md、可复现构建日志与更新后的证据账本
- 日志：`logs/day-007.md`
- 原始证据目录：`evidence/day-007/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：干净环境在 30 分钟内完成构建测试；所有失败都有 issue/下一动作；没有把学习代码写成生产项目经验。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 硬件未到、损坏或无授权：保留接口/解析器/mock测试，真实硬件验收标记 `BLOCKED`；写明预计获得日期，不得用 mock 结果替代波形、总线或真机结果。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-007.md`：

    # Day 007 Result

    - plan_day: D007
    - scheduled_date: 2026-08-30
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

### 第 2 周详细执行｜MCU 外设驱动与硬件测量

> [!info]- 当日导航
> [[#D007 详细执行｜第一周复现与能力边界复盘|← Day 007]] · [[#导航|↑ 文档导航]] · [[#D009 详细执行｜GPIO、按键与去抖状态机|Day 009 →]]

#### D008 详细执行｜开发板、原理图与引脚清单

> 计划日期：2026-08-31｜主动投入：2 小时｜第 2 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“hardware/mcu-inventory.md 与 firmware/board-smoke”，并满足：文档能让他人接对电源和调试器；最小工程可重复编译下载；没有猜测未核验的芯片参数。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 007 的结果记录，确认其状态和交付物“reviews/week-01.md、可复现构建日志与更新后的证据账本”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-008.md` 和 `evidence/day-008/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R37 Arm CMSIS 与 Cortex-M 文档](https://arm-software.github.io/CMSIS_6/latest/General/index.html)；H12 可持续使用的 HC32/STM32 开发板；H15 逻辑分析仪/示波器与安全供电。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 选定一块本人可持续使用的 HC32/STM32 开发板，保存准确型号、芯片手册、原理图和调试器版本。 |
| 00:35–01:00 | 任务 2 | 列出时钟、Flash/RAM、GPIO、UART、I2C、SPI、CAN 与调试引脚，标记电平和复用冲突。 |
| 01:00–01:25 | 任务 3 | 运行厂商最小工程并保存编译尺寸、下载日志和 LED 现象；失败时只诊断，不同时升级全部工具链。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜选定一块本人可持续使用的 HC32/STM32 开发板，保存准确型号、芯片手册、原理图和调试器版本。

1. 在 `logs/day-008.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 每条实际执行命令连同退出码追加到 `evidence/day-008/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜列出时钟、Flash/RAM、GPIO、UART、I2C、SPI、CAN 与调试引脚，标记电平和复用冲突。

1. 在 `logs/day-008.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 每条实际执行命令连同退出码追加到 `evidence/day-008/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜运行厂商最小工程并保存编译尺寸、下载日志和 LED 现象；失败时只诊断，不同时升级全部工具链。

1. 在 `logs/day-008.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 执行前记录当前版本、磁盘空间和回滚点；只按固定版本/commit操作，命令失败时保留完整 stderr，不连续尝试多个来源的安装方案。
3. 完成后从新 shell 或干净 build 目录复验；记录实际版本、产物 hash、退出码和启动现象，避免依赖当前终端的隐式环境变量。
4. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
5. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
6. 每条实际执行命令连同退出码追加到 `evidence/day-008/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `python -m compileall -q src tools tests`
- `python -m pytest -q`
- `ip -details -statistics link show can0  # 无真机时改为 vcan0，并在结果中标记 simulation`
- `<执行 docs/toolchain.md 中已固定的 MCU clean build 命令>`
- `<执行对应烧录/硬件测试命令，并保存固件 hash 与串口日志>`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：hardware/mcu-inventory.md 与 firmware/board-smoke
- 日志：`logs/day-008.md`
- 原始证据目录：`evidence/day-008/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：文档能让他人接对电源和调试器；最小工程可重复编译下载；没有猜测未核验的芯片参数。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 硬件未到、损坏或无授权：保留接口/解析器/mock测试，真实硬件验收标记 `BLOCKED`；写明预计获得日期，不得用 mock 结果替代波形、总线或真机结果。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-008.md`：

    # Day 008 Result

    - plan_day: D008
    - scheduled_date: 2026-08-31
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D008 详细执行｜开发板、原理图与引脚清单|← Day 008]] · [[#导航|↑ 文档导航]] · [[#D010 详细执行｜UART DMA 环形缓冲区|Day 010 →]]

#### D009 详细执行｜GPIO、按键与去抖状态机

> 计划日期：2026-09-01｜主动投入：2 小时｜第 2 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“firmware/drivers/gpio_button、tests/button_fsm 与波形记录”，并满足：10 次短按和 5 次长按均正确；ISR 无阻塞调用；报告写明采样率、阈值与最大响应时间。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 008 的结果记录，确认其状态和交付物“hardware/mcu-inventory.md 与 firmware/board-smoke”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-009.md` 和 `evidence/day-009/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R37 Arm CMSIS 与 Cortex-M 文档](https://arm-software.github.io/CMSIS_6/latest/General/index.html)；H12 可持续使用的 HC32/STM32 开发板；H15 逻辑分析仪/示波器与安全供电。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 用寄存器/HAL 的明确边界实现 LED 输出与按键输入，记录上拉、有效电平和中断触发方式。 |
| 00:35–01:00 | 任务 2 | 实现非阻塞去抖状态机，不在中断中延时；加入短按、长按和抖动输入测试。 |
| 01:00–01:25 | 任务 3 | 用逻辑分析仪测量按键抖动和响应延迟，保存原始采样与结论。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜用寄存器/HAL 的明确边界实现 LED 输出与按键输入，记录上拉、有效电平和中断触发方式。

1. 在 `logs/day-009.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 每条实际执行命令连同退出码追加到 `evidence/day-009/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜实现非阻塞去抖状态机，不在中断中延时；加入短按、长按和抖动输入测试。

1. 在 `logs/day-009.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
5. 把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
6. 每条实际执行命令连同退出码追加到 `evidence/day-009/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜用逻辑分析仪测量按键抖动和响应延迟，保存原始采样与结论。

1. 在 `logs/day-009.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-009/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `<执行 docs/toolchain.md 中已固定的 MCU clean build 命令>`
- `<执行对应烧录/硬件测试命令，并保存固件 hash 与串口日志>`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：firmware/drivers/gpio_button、tests/button_fsm 与波形记录
- 日志：`logs/day-009.md`
- 原始证据目录：`evidence/day-009/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：10 次短按和 5 次长按均正确；ISR 无阻塞调用；报告写明采样率、阈值与最大响应时间。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 硬件未到、损坏或无授权：保留接口/解析器/mock测试，真实硬件验收标记 `BLOCKED`；写明预计获得日期，不得用 mock 结果替代波形、总线或真机结果。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-009.md`：

    # Day 009 Result

    - plan_day: D009
    - scheduled_date: 2026-09-01
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D009 详细执行｜GPIO、按键与去抖状态机|← Day 009]] · [[#导航|↑ 文档导航]] · [[#D011 详细执行｜I2C 传感器独立驱动|Day 011 →]]

#### D010 详细执行｜UART DMA 环形缓冲区

> 计划日期：2026-09-02｜主动投入：2 小时｜第 2 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“firmware/drivers/uart_dma、tools/uart_fuzzer.py 与测试报告”，并满足：连续发送不少于 1000 帧无死锁；所有非法帧被计数；缓冲区越界测试通过。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 009 的结果记录，确认其状态和交付物“firmware/drivers/gpio_button、tests/button_fsm 与波形记录”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-010.md` 和 `evidence/day-010/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R37 Arm CMSIS 与 Cortex-M 文档](https://arm-software.github.io/CMSIS_6/latest/General/index.html)；H12 可持续使用的 HC32/STM32 开发板；H15 逻辑分析仪/示波器与安全供电。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 配置 UART RX DMA 或空闲中断，使用定长环形缓冲区接收分段数据。 |
| 00:35–01:00 | 任务 2 | 实现长度校验、超时、溢出计数和错误恢复；协议解析器与硬件收发分层。 |
| 01:00–01:25 | 任务 3 | 用脚本发送粘包、拆包、超长帧和随机字节，统计处理与丢弃结果。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜配置 UART RX DMA 或空闲中断，使用定长环形缓冲区接收分段数据。

1. 在 `logs/day-010.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 每条实际执行命令连同退出码追加到 `evidence/day-010/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜实现长度校验、超时、溢出计数和错误恢复；协议解析器与硬件收发分层。

1. 在 `logs/day-010.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
5. 把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
6. 每条实际执行命令连同退出码追加到 `evidence/day-010/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜用脚本发送粘包、拆包、超长帧和随机字节，统计处理与丢弃结果。

1. 在 `logs/day-010.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-010/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `cmake -S . -B build -DCMAKE_BUILD_TYPE=Debug`
- `cmake --build build --parallel`
- `ctest --test-dir build --output-on-failure`
- `python -m compileall -q src tools tests`
- `python -m pytest -q`
- `<执行 docs/toolchain.md 中已固定的 MCU clean build 命令>`
- `<执行对应烧录/硬件测试命令，并保存固件 hash 与串口日志>`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：firmware/drivers/uart_dma、tools/uart_fuzzer.py 与测试报告
- 日志：`logs/day-010.md`
- 原始证据目录：`evidence/day-010/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：连续发送不少于 1000 帧无死锁；所有非法帧被计数；缓冲区越界测试通过。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 硬件未到、损坏或无授权：保留接口/解析器/mock测试，真实硬件验收标记 `BLOCKED`；写明预计获得日期，不得用 mock 结果替代波形、总线或真机结果。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-010.md`：

    # Day 010 Result

    - plan_day: D010
    - scheduled_date: 2026-09-02
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D010 详细执行｜UART DMA 环形缓冲区|← Day 010]] · [[#导航|↑ 文档导航]] · [[#D012 详细执行｜SPI Flash 与掉电安全参数区|Day 012 →]]

#### D011 详细执行｜I2C 传感器独立驱动

> 计划日期：2026-09-03｜主动投入：2 小时｜第 2 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“firmware/drivers/i2c_sensor、docs/i2c-timing.md 与波形”，并满足：冷启动 20 次均识别设备；拔掉传感器后在限定时间内报错且任务不阻塞；物理量转换有边界测试。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 010 的结果记录，确认其状态和交付物“firmware/drivers/uart_dma、tools/uart_fuzzer.py 与测试报告”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-011.md` 和 `evidence/day-011/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R37 Arm CMSIS 与 Cortex-M 文档](https://arm-software.github.io/CMSIS_6/latest/General/index.html)；H13 I2C传感器、SPI Flash与基础接线；H15 逻辑分析仪/示波器与安全供电。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 根据传感器 datasheet 写寄存器表、上电时序和量程配置，不直接复制不明来源驱动。 |
| 00:35–01:00 | 任务 2 | 实现设备 ID 检查、读写、超时、NACK 与重初始化路径，将原始值和物理量转换分开。 |
| 01:00–01:25 | 任务 3 | 用逻辑分析仪核对地址、ACK、时钟频率和一次完整采样事务。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜根据传感器 datasheet 写寄存器表、上电时序和量程配置，不直接复制不明来源驱动。

1. 在 `logs/day-011.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 每条实际执行命令连同退出码追加到 `evidence/day-011/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜实现设备 ID 检查、读写、超时、NACK 与重初始化路径，将原始值和物理量转换分开。

1. 在 `logs/day-011.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 每条实际执行命令连同退出码追加到 `evidence/day-011/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜用逻辑分析仪核对地址、ACK、时钟频率和一次完整采样事务。

1. 在 `logs/day-011.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 只读列出的官方/一手资料，先写出要回答的 3～5 个问题；阅读时逐条记录“结论、出处、适用版本、仍不确定项”，禁止只收藏链接。
3. 合上资料后用自己的话重写结论，并用一个反例或边界条件检验理解；无法解释的术语放入问题清单，不用“熟悉”代替掌握。
4. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
5. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
6. 每条实际执行命令连同退出码追加到 `evidence/day-011/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `<执行 docs/toolchain.md 中已固定的 MCU clean build 命令>`
- `<执行对应烧录/硬件测试命令，并保存固件 hash 与串口日志>`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：firmware/drivers/i2c_sensor、docs/i2c-timing.md 与波形
- 日志：`logs/day-011.md`
- 原始证据目录：`evidence/day-011/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：冷启动 20 次均识别设备；拔掉传感器后在限定时间内报错且任务不阻塞；物理量转换有边界测试。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 硬件未到、损坏或无授权：保留接口/解析器/mock测试，真实硬件验收标记 `BLOCKED`；写明预计获得日期，不得用 mock 结果替代波形、总线或真机结果。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-011.md`：

    # Day 011 Result

    - plan_day: D011
    - scheduled_date: 2026-09-03
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D011 详细执行｜I2C 传感器独立驱动|← Day 011]] · [[#导航|↑ 文档导航]] · [[#D013 详细执行｜外设故障注入与波形复核|Day 013 →]]

#### D012 详细执行｜SPI Flash 与掉电安全参数区

> 计划日期：2026-09-04｜主动投入：2 小时｜第 2 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“firmware/drivers/spi_flash、firmware/storage/config_store 与掉电测试表”，并满足：跨页读写和擦除测试通过；至少 6 个复位注入点均能恢复一个有效配置；不把仿真复位写成真实断电。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 011 的结果记录，确认其状态和交付物“firmware/drivers/i2c_sensor、docs/i2c-timing.md 与波形”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-012.md` 和 `evidence/day-012/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R37 Arm CMSIS 与 Cortex-M 文档](https://arm-software.github.io/CMSIS_6/latest/General/index.html)；H13 I2C传感器、SPI Flash与基础接线；H15 逻辑分析仪/示波器与安全供电。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 依据 JEDEC ID 确认 Flash，完成读 ID、页编程、扇区擦除和忙状态轮询。 |
| 00:35–01:00 | 任务 2 | 设计双副本参数页，包含版本、长度、序号和 CRC；写入流程避免覆盖最后一份有效配置。 |
| 01:00–01:25 | 任务 3 | 在写入不同阶段模拟复位，验证启动后选择最新有效副本。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜依据 JEDEC ID 确认 Flash，完成读 ID、页编程、扇区擦除和忙状态轮询。

1. 在 `logs/day-012.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-012/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜设计双副本参数页，包含版本、长度、序号和 CRC；写入流程避免覆盖最后一份有效配置。

1. 在 `logs/day-012.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
5. 把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
6. 每条实际执行命令连同退出码追加到 `evidence/day-012/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜在写入不同阶段模拟复位，验证启动后选择最新有效副本。

1. 在 `logs/day-012.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 执行前记录当前版本、磁盘空间和回滚点；只按固定版本/commit操作，命令失败时保留完整 stderr，不连续尝试多个来源的安装方案。
3. 完成后从新 shell 或干净 build 目录复验；记录实际版本、产物 hash、退出码和启动现象，避免依赖当前终端的隐式环境变量。
4. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
5. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
6. 每条实际执行命令连同退出码追加到 `evidence/day-012/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `<执行 docs/toolchain.md 中已固定的 MCU clean build 命令>`
- `<执行对应烧录/硬件测试命令，并保存固件 hash 与串口日志>`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：firmware/drivers/spi_flash、firmware/storage/config_store 与掉电测试表
- 日志：`logs/day-012.md`
- 原始证据目录：`evidence/day-012/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：跨页读写和擦除测试通过；至少 6 个复位注入点均能恢复一个有效配置；不把仿真复位写成真实断电。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 硬件未到、损坏或无授权：保留接口/解析器/mock测试，真实硬件验收标记 `BLOCKED`；写明预计获得日期，不得用 mock 结果替代波形、总线或真机结果。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-012.md`：

    # Day 012 Result

    - plan_day: D012
    - scheduled_date: 2026-09-04
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D012 详细执行｜SPI Flash 与掉电安全参数区|← Day 012]] · [[#导航|↑ 文档导航]] · [[#D014 详细执行｜第二周阶段门与硬件采购决策|Day 014 →]]

#### D013 详细执行｜外设故障注入与波形复核

> 计划日期：2026-09-05｜主动投入：4 小时｜第 2 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“reports/peripheral-fault-matrix.csv 与 evidence/peripheral-waveforms”，并满足：四类故障均有预期/实际结果；至少一项负面结论被保留；同一固件版本可重复复现。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 012 的结果记录，确认其状态和交付物“firmware/drivers/spi_flash、firmware/storage/config_store 与掉电测试表”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-013.md` 和 `evidence/day-013/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R37 Arm CMSIS 与 Cortex-M 文档](https://arm-software.github.io/CMSIS_6/latest/General/index.html)；H12 可持续使用的 HC32/STM32 开发板；H13 I2C传感器、SPI Flash与基础接线；H15 逻辑分析仪/示波器与安全供电。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 4 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–01:05 | 任务 1 | 建立 I2C NACK、UART 噪声、SPI 超时和按键抖动四类故障用例。 |
| 01:05–02:00 | 任务 2 | 逐项运行并记录故障检测时间、恢复动作、错误计数和是否需要人工重启。 |
| 02:00–02:55 | 任务 3 | 整理关键波形、固件版本、测试接线和复现命令，剔除没有测试条件的漂亮截图。 |
| 02:55–03:40 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 03:40–04:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜建立 I2C NACK、UART 噪声、SPI 超时和按键抖动四类故障用例。

1. 在 `logs/day-013.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 每条实际执行命令连同退出码追加到 `evidence/day-013/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜逐项运行并记录故障检测时间、恢复动作、错误计数和是否需要人工重启。

1. 在 `logs/day-013.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-013/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜整理关键波形、固件版本、测试接线和复现命令，剔除没有测试条件的漂亮截图。

1. 在 `logs/day-013.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 只读列出的官方/一手资料，先写出要回答的 3～5 个问题；阅读时逐条记录“结论、出处、适用版本、仍不确定项”，禁止只收藏链接。
3. 合上资料后用自己的话重写结论，并用一个反例或边界条件检验理解；无法解释的术语放入问题清单，不用“熟悉”代替掌握。
4. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
5. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
6. 每条实际执行命令连同退出码追加到 `evidence/day-013/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `<执行 docs/toolchain.md 中已固定的 MCU clean build 命令>`
- `<执行对应烧录/硬件测试命令，并保存固件 hash 与串口日志>`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：reports/peripheral-fault-matrix.csv 与 evidence/peripheral-waveforms
- 日志：`logs/day-013.md`
- 原始证据目录：`evidence/day-013/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：四类故障均有预期/实际结果；至少一项负面结论被保留；同一固件版本可重复复现。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 硬件未到、损坏或无授权：保留接口/解析器/mock测试，真实硬件验收标记 `BLOCKED`；写明预计获得日期，不得用 mock 结果替代波形、总线或真机结果。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-013.md`：

    # Day 013 Result

    - plan_day: D013
    - scheduled_date: 2026-09-05
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D013 详细执行｜外设故障注入与波形复核|← Day 013]] · [[#导航|↑ 文档导航]] · [[#D015 详细执行｜任务模型与周期预算|Day 015 →]]

#### D014 详细执行｜第二周阶段门与硬件采购决策

> 计划日期：2026-09-06｜主动投入：2 小时｜第 2 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“reviews/week-02.md、硬件决策记录与复现日志”，并满足：真实硬件项按 PASS/PARTIAL/BLOCKED 标注；不存在用仿真波形替代实测的条目；下周依赖已落实。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 013 的结果记录，确认其状态和交付物“reports/peripheral-fault-matrix.csv 与 evidence/peripheral-waveforms”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-014.md` 和 `evidence/day-014/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R37 Arm CMSIS 与 Cortex-M 文档](https://arm-software.github.io/CMSIS_6/latest/General/index.html)；[R38 FreeRTOS 官方文档](https://www.freertos.org/Documentation/00-Overview)；H12 可持续使用的 HC32/STM32 开发板；H14 CAN收发器与USB-CAN/第二节点；H15 逻辑分析仪/示波器与安全供电。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 从清空 build 目录开始重新编译下载，逐项执行 GPIO/UART/I2C/SPI 冒烟。 |
| 00:35–01:00 | 任务 2 | 检查硬件是否足以进入 FreeRTOS 与 CAN；缺 CAN 时确定收发器/USB-CAN 的具体获取方式和最晚日期。 |
| 01:00–01:25 | 任务 3 | 用 10 分钟口述解释四种总线的电气、时序和典型失败差异，记录答不上来的问题。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜从清空 build 目录开始重新编译下载，逐项执行 GPIO/UART/I2C/SPI 冒烟。

1. 在 `logs/day-014.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 执行前记录当前版本、磁盘空间和回滚点；只按固定版本/commit操作，命令失败时保留完整 stderr，不连续尝试多个来源的安装方案。
3. 完成后从新 shell 或干净 build 目录复验；记录实际版本、产物 hash、退出码和启动现象，避免依赖当前终端的隐式环境变量。
4. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
5. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
6. 每条实际执行命令连同退出码追加到 `evidence/day-014/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜检查硬件是否足以进入 FreeRTOS 与 CAN；缺 CAN 时确定收发器/USB-CAN 的具体获取方式和最晚日期。

1. 在 `logs/day-014.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-014/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜用 10 分钟口述解释四种总线的电气、时序和典型失败差异，记录答不上来的问题。

1. 在 `logs/day-014.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 只读列出的官方/一手资料，先写出要回答的 3～5 个问题；阅读时逐条记录“结论、出处、适用版本、仍不确定项”，禁止只收藏链接。
3. 合上资料后用自己的话重写结论，并用一个反例或边界条件检验理解；无法解释的术语放入问题清单，不用“熟悉”代替掌握。
4. 每条实际执行命令连同退出码追加到 `evidence/day-014/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `ip -details -statistics link show can0  # 无真机时改为 vcan0，并在结果中标记 simulation`
- `<执行 docs/toolchain.md 中已固定的 MCU clean build 命令>`
- `<执行对应烧录/硬件测试命令，并保存固件 hash 与串口日志>`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：reviews/week-02.md、硬件决策记录与复现日志
- 日志：`logs/day-014.md`
- 原始证据目录：`evidence/day-014/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：真实硬件项按 PASS/PARTIAL/BLOCKED 标注；不存在用仿真波形替代实测的条目；下周依赖已落实。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 硬件未到、损坏或无授权：保留接口/解析器/mock测试，真实硬件验收标记 `BLOCKED`；写明预计获得日期，不得用 mock 结果替代波形、总线或真机结果。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-014.md`：

    # Day 014 Result

    - plan_day: D014
    - scheduled_date: 2026-09-06
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

### 第 3 周详细执行｜FreeRTOS 多传感器节点

> [!info]- 当日导航
> [[#D014 详细执行｜第二周阶段门与硬件采购决策|← Day 014]] · [[#导航|↑ 文档导航]] · [[#D016 详细执行｜Queue、Semaphore 与所有权|Day 016 →]]

#### D015 详细执行｜任务模型与周期预算

> 计划日期：2026-09-07｜主动投入：2 小时｜第 3 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“docs/rtos-task-design.md 与 firmware/app/task_skeleton”，并满足：任务表包含周期/优先级/栈/阻塞资源；空载统计可重复；没有凭感觉填写性能数字。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 014 的结果记录，确认其状态和交付物“reviews/week-02.md、硬件决策记录与复现日志”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-015.md` 和 `evidence/day-015/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R38 FreeRTOS 官方文档](https://www.freertos.org/Documentation/00-Overview)；H12 可持续使用的 HC32/STM32 开发板。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 画出采集、解析、存储、通信和监控任务及数据流。 |
| 00:35–01:00 | 任务 2 | 为每个任务定义周期、截止时间、优先级、栈预算和最坏阻塞点。 |
| 01:00–01:25 | 任务 3 | 先建立空任务与运行时统计，测量空载 CPU 和调度基线。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜画出采集、解析、存储、通信和监控任务及数据流。

1. 在 `logs/day-015.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 每批开始前锁定 task/spec 与数据 schema；每个样本生成唯一 ID，记录来源、R/S轨、时间、操作者/上游、有效性和失败原因。
5. 每完成一小批立即跑质量检查和 checksum；原始数据只追加不静默改写，无效样本保留在 manifest 并标明排除原因。
6. 每条实际执行命令连同退出码追加到 `evidence/day-015/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜为每个任务定义周期、截止时间、优先级、栈预算和最坏阻塞点。

1. 在 `logs/day-015.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 每条实际执行命令连同退出码追加到 `evidence/day-015/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜先建立空任务与运行时统计，测量空载 CPU 和调度基线。

1. 在 `logs/day-015.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
5. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
6. 每条实际执行命令连同退出码追加到 `evidence/day-015/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `python -m compileall -q src tools tests`
- `python -m pytest -q`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：docs/rtos-task-design.md 与 firmware/app/task_skeleton
- 日志：`logs/day-015.md`
- 原始证据目录：`evidence/day-015/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：任务表包含周期/优先级/栈/阻塞资源；空载统计可重复；没有凭感觉填写性能数字。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 硬件未到、损坏或无授权：保留接口/解析器/mock测试，真实硬件验收标记 `BLOCKED`；写明预计获得日期，不得用 mock 结果替代波形、总线或真机结果。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-015.md`：

    # Day 015 Result

    - plan_day: D015
    - scheduled_date: 2026-09-07
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D015 详细执行｜任务模型与周期预算|← Day 015]] · [[#导航|↑ 文档导航]] · [[#D017 详细执行｜ISR 到任务与 DMA 完成路径|Day 017 →]]

#### D016 详细执行｜Queue、Semaphore 与所有权

> 计划日期：2026-09-08｜主动投入：2 小时｜第 3 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“firmware/app/pipeline 与 tests/rtos_queue_cases.md”，并满足：队列满不会覆盖未消费数据；所有等待都有上限；测试能解释 semaphore、mutex 和 queue 的选择。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 015 的结果记录，确认其状态和交付物“docs/rtos-task-design.md 与 firmware/app/task_skeleton”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-016.md` 和 `evidence/day-016/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R38 FreeRTOS 官方文档](https://www.freertos.org/Documentation/00-Overview)；H12 可持续使用的 HC32/STM32 开发板。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 用 Queue 传递传感器样本，定义值拷贝或对象池所有权。 |
| 00:35–01:00 | 任务 2 | 用二值信号量连接 ISR 与任务，互斥锁只保护共享外设且设置超时。 |
| 01:00–01:25 | 任务 3 | 构造队列满、消费者暂停和资源竞争测试，观察丢弃策略。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜用 Queue 传递传感器样本，定义值拷贝或对象池所有权。

1. 在 `logs/day-016.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 每批开始前锁定 task/spec 与数据 schema；每个样本生成唯一 ID，记录来源、R/S轨、时间、操作者/上游、有效性和失败原因。
5. 每完成一小批立即跑质量检查和 checksum；原始数据只追加不静默改写，无效样本保留在 manifest 并标明排除原因。
6. 每条实际执行命令连同退出码追加到 `evidence/day-016/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜用二值信号量连接 ISR 与任务，互斥锁只保护共享外设且设置超时。

1. 在 `logs/day-016.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-016/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜构造队列满、消费者暂停和资源竞争测试，观察丢弃策略。

1. 在 `logs/day-016.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
5. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
6. 每条实际执行命令连同退出码追加到 `evidence/day-016/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `python -m compileall -q src tools tests`
- `python -m pytest -q`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：firmware/app/pipeline 与 tests/rtos_queue_cases.md
- 日志：`logs/day-016.md`
- 原始证据目录：`evidence/day-016/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：队列满不会覆盖未消费数据；所有等待都有上限；测试能解释 semaphore、mutex 和 queue 的选择。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 硬件未到、损坏或无授权：保留接口/解析器/mock测试，真实硬件验收标记 `BLOCKED`；写明预计获得日期，不得用 mock 结果替代波形、总线或真机结果。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-016.md`：

    # Day 016 Result

    - plan_day: D016
    - scheduled_date: 2026-09-08
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D016 详细执行｜Queue、Semaphore 与所有权|← Day 016]] · [[#导航|↑ 文档导航]] · [[#D018 详细执行｜多传感器采样与时间戳|Day 018 →]]

#### D017 详细执行｜ISR 到任务与 DMA 完成路径

> 计划日期：2026-09-09｜主动投入：2 小时｜第 3 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“firmware/platform/isr_bridge 与 reports/isr-latency.csv”，并满足：至少 1000 个样本；报告给出中位数/最大值而非单次最好值；ISR 路径无动态分配和阻塞日志。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 016 的结果记录，确认其状态和交付物“firmware/app/pipeline 与 tests/rtos_queue_cases.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-017.md` 和 `evidence/day-017/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R38 FreeRTOS 官方文档](https://www.freertos.org/Documentation/00-Overview)；H12 可持续使用的 HC32/STM32 开发板；H15 逻辑分析仪/示波器与安全供电。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 将 UART/I2C/SPI 完成事件统一转交任务处理，ISR 只做清标志和通知。 |
| 00:35–01:00 | 任务 2 | 测量中断到任务被唤醒的延迟，并记录测试频率、优化级别和测量点。 |
| 01:00–01:25 | 任务 3 | 加入中断风暴或重复完成事件，确认系统仍可响应看门狗任务。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜将 UART/I2C/SPI 完成事件统一转交任务处理，ISR 只做清标志和通知。

1. 在 `logs/day-017.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-017/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜测量中断到任务被唤醒的延迟，并记录测试频率、优化级别和测量点。

1. 在 `logs/day-017.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-017/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜加入中断风暴或重复完成事件，确认系统仍可响应看门狗任务。

1. 在 `logs/day-017.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-017/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `<执行 docs/toolchain.md 中已固定的 MCU clean build 命令>`
- `<执行对应烧录/硬件测试命令，并保存固件 hash 与串口日志>`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：firmware/platform/isr_bridge 与 reports/isr-latency.csv
- 日志：`logs/day-017.md`
- 原始证据目录：`evidence/day-017/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：至少 1000 个样本；报告给出中位数/最大值而非单次最好值；ISR 路径无动态分配和阻塞日志。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 硬件未到、损坏或无授权：保留接口/解析器/mock测试，真实硬件验收标记 `BLOCKED`；写明预计获得日期，不得用 mock 结果替代波形、总线或真机结果。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-017.md`：

    # Day 017 Result

    - plan_day: D017
    - scheduled_date: 2026-09-09
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D017 详细执行｜ISR 到任务与 DMA 完成路径|← Day 017]] · [[#导航|↑ 文档导航]] · [[#D019 详细执行｜看门狗、故障状态与受控恢复|Day 019 →]]

#### D018 详细执行｜多传感器采样与时间戳

> 计划日期：2026-09-10｜主动投入：2 小时｜第 3 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“firmware/app/sensor_pipeline 与 sample-log.csv”，并满足：序号可检测丢样；时间戳单调；单设备掉线不阻塞整个采集任务。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 017 的结果记录，确认其状态和交付物“firmware/platform/isr_bridge 与 reports/isr-latency.csv”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-018.md` 和 `evidence/day-018/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R37 Arm CMSIS 与 Cortex-M 文档](https://arm-software.github.io/CMSIS_6/latest/General/index.html)；[R38 FreeRTOS 官方文档](https://www.freertos.org/Documentation/00-Overview)；H13 I2C传感器、SPI Flash与基础接线。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 统一样本结构：source、sequence、monotonic timestamp、quality 和 raw value。 |
| 00:35–01:00 | 任务 2 | 按各传感器速率采样并在处理层转换单位，不把协议接入描述成底层传感器融合。 |
| 01:00–01:25 | 任务 3 | 模拟一类传感器延迟和一类掉线，验证其他采集通道继续工作。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜统一样本结构：source、sequence、monotonic timestamp、quality 和 raw value。

1. 在 `logs/day-018.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 每批开始前锁定 task/spec 与数据 schema；每个样本生成唯一 ID，记录来源、R/S轨、时间、操作者/上游、有效性和失败原因。
3. 每完成一小批立即跑质量检查和 checksum；原始数据只追加不静默改写，无效样本保留在 manifest 并标明排除原因。
4. 每条实际执行命令连同退出码追加到 `evidence/day-018/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜按各传感器速率采样并在处理层转换单位，不把协议接入描述成底层传感器融合。

1. 在 `logs/day-018.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
5. 把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
6. 每条实际执行命令连同退出码追加到 `evidence/day-018/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜模拟一类传感器延迟和一类掉线，验证其他采集通道继续工作。

1. 在 `logs/day-018.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
4. 每批开始前锁定 task/spec 与数据 schema；每个样本生成唯一 ID，记录来源、R/S轨、时间、操作者/上游、有效性和失败原因。
5. 每完成一小批立即跑质量检查和 checksum；原始数据只追加不静默改写，无效样本保留在 manifest 并标明排除原因。
6. 每条实际执行命令连同退出码追加到 `evidence/day-018/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：firmware/app/sensor_pipeline 与 sample-log.csv
- 日志：`logs/day-018.md`
- 原始证据目录：`evidence/day-018/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：序号可检测丢样；时间戳单调；单设备掉线不阻塞整个采集任务。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 硬件未到、损坏或无授权：保留接口/解析器/mock测试，真实硬件验收标记 `BLOCKED`；写明预计获得日期，不得用 mock 结果替代波形、总线或真机结果。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-018.md`：

    # Day 018 Result

    - plan_day: D018
    - scheduled_date: 2026-09-10
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D018 详细执行｜多传感器采样与时间戳|← Day 018]] · [[#导航|↑ 文档导航]] · [[#D020 详细执行｜设备协议与主机模拟器|Day 020 →]]

#### D019 详细执行｜看门狗、故障状态与受控恢复

> 计划日期：2026-09-11｜主动投入：2 小时｜第 3 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“firmware/safety/supervisor 与 reports/recovery-matrix.csv”，并满足：至少三类故障有真实触发记录；看门狗不会被单一高优先级任务无条件喂；恢复原因可追溯。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 018 的结果记录，确认其状态和交付物“firmware/app/sensor_pipeline 与 sample-log.csv”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-019.md` 和 `evidence/day-019/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R38 FreeRTOS 官方文档](https://www.freertos.org/Documentation/00-Overview)；H12 可持续使用的 HC32/STM32 开发板。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 定义启动、运行、降级、故障和恢复状态，列出每个状态允许的动作。 |
| 00:35–01:00 | 任务 2 | 为关键任务设置心跳窗口，只有全部健康才喂硬件看门狗。 |
| 01:00–01:25 | 任务 3 | 注入任务卡死、队列堵塞和传感器故障，分别验证重启或降级路径。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜定义启动、运行、降级、故障和恢复状态，列出每个状态允许的动作。

1. 在 `logs/day-019.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 执行前记录当前版本、磁盘空间和回滚点；只按固定版本/commit操作，命令失败时保留完整 stderr，不连续尝试多个来源的安装方案。
5. 完成后从新 shell 或干净 build 目录复验；记录实际版本、产物 hash、退出码和启动现象，避免依赖当前终端的隐式环境变量。
6. 每条实际执行命令连同退出码追加到 `evidence/day-019/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜为关键任务设置心跳窗口，只有全部健康才喂硬件看门狗。

1. 在 `logs/day-019.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-019/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜注入任务卡死、队列堵塞和传感器故障，分别验证重启或降级路径。

1. 在 `logs/day-019.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-019/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：firmware/safety/supervisor 与 reports/recovery-matrix.csv
- 日志：`logs/day-019.md`
- 原始证据目录：`evidence/day-019/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：至少三类故障有真实触发记录；看门狗不会被单一高优先级任务无条件喂；恢复原因可追溯。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 硬件未到、损坏或无授权：保留接口/解析器/mock测试，真实硬件验收标记 `BLOCKED`；写明预计获得日期，不得用 mock 结果替代波形、总线或真机结果。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-019.md`：

    # Day 019 Result

    - plan_day: D019
    - scheduled_date: 2026-09-11
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D019 详细执行｜看门狗、故障状态与受控恢复|← Day 019]] · [[#导航|↑ 文档导航]] · [[#D021 详细执行｜24 小时运行与第三周复盘|Day 021 →]]

#### D020 详细执行｜设备协议与主机模拟器

> 计划日期：2026-09-12｜主动投入：4 小时｜第 3 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“protocol/device-v1.md、firmware/protocol 与 tools/device_simulator.py”，并满足：至少 20 个 golden vectors 双端通过；未知字段/版本行为明确；fuzzer 不导致 MCU 崩溃。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 019 的结果记录，确认其状态和交付物“firmware/safety/supervisor 与 reports/recovery-matrix.csv”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-020.md` 和 `evidence/day-020/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R30 OASIS MQTT 5.0 规范](https://docs.oasis-open.org/mqtt/mqtt/v5.0/mqtt-v5.0.html)；[R38 FreeRTOS 官方文档](https://www.freertos.org/Documentation/00-Overview)；H02 Linux 开发主机；H12 可持续使用的 HC32/STM32 开发板。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 4 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–01:05 | 任务 1 | 定义版本化二进制或 JSON 测试协议，包含设备 ID、序号、时间、状态和 CRC/长度。 |
| 01:05–02:00 | 任务 2 | 实现 MCU 编解码器和 Python 主机模拟器，生成正常、边界和畸形帧。 |
| 02:00–02:55 | 任务 3 | 用 golden vectors 验证两端一致，明确大小端和升级兼容策略。 |
| 02:55–03:40 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 03:40–04:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜定义版本化二进制或 JSON 测试协议，包含设备 ID、序号、时间、状态和 CRC/长度。

1. 在 `logs/day-020.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
5. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
6. 每条实际执行命令连同退出码追加到 `evidence/day-020/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜实现 MCU 编解码器和 Python 主机模拟器，生成正常、边界和畸形帧。

1. 在 `logs/day-020.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
5. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
6. 每条实际执行命令连同退出码追加到 `evidence/day-020/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜用 golden vectors 验证两端一致，明确大小端和升级兼容策略。

1. 在 `logs/day-020.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
5. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
6. 每条实际执行命令连同退出码追加到 `evidence/day-020/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `python -m compileall -q src tools tests`
- `python -m pytest -q`
- `<执行 docs/toolchain.md 中已固定的 MCU clean build 命令>`
- `<执行对应烧录/硬件测试命令，并保存固件 hash 与串口日志>`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：protocol/device-v1.md、firmware/protocol 与 tools/device_simulator.py
- 日志：`logs/day-020.md`
- 原始证据目录：`evidence/day-020/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：至少 20 个 golden vectors 双端通过；未知字段/版本行为明确；fuzzer 不导致 MCU 崩溃。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 硬件未到、损坏或无授权：保留接口/解析器/mock测试，真实硬件验收标记 `BLOCKED`；写明预计获得日期，不得用 mock 结果替代波形、总线或真机结果。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-020.md`：

    # Day 020 Result

    - plan_day: D020
    - scheduled_date: 2026-09-12
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D020 详细执行｜设备协议与主机模拟器|← Day 020]] · [[#导航|↑ 文档导航]] · [[#D022 详细执行｜CAN 2.0 与 SocketCAN 基线|Day 022 →]]

#### D021 详细执行｜24 小时运行与第三周复盘

> 计划日期：2026-09-13｜主动投入：2 小时｜第 3 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“reports/rtos-soak-24h.md、原始统计与 week-03-review.md”，并满足：完成真实 24 小时或明确写 PARTIAL 并继续后台运行；所有指标带固件 commit 和采样条件。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 020 的结果记录，确认其状态和交付物“protocol/device-v1.md、firmware/protocol 与 tools/device_simulator.py”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-021.md` 和 `evidence/day-021/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R38 FreeRTOS 官方文档](https://www.freertos.org/Documentation/00-Overview)；H11 原始数据独立备份介质；H12 可持续使用的 HC32/STM32 开发板；H15 逻辑分析仪/示波器与安全供电。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 冻结固件、接线和测试脚本版本，启动不少于 24 小时运行。 |
| 00:35–01:00 | 任务 2 | 采集复位次数、错误计数、最小剩余栈、CPU 占用和采样缺口。 |
| 01:00–01:25 | 任务 3 | 不等待墙钟空转：运行期间整理架构、问题单和下周 CAN 前置知识。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜冻结固件、接线和测试脚本版本，启动不少于 24 小时运行。

1. 在 `logs/day-021.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 执行前记录当前版本、磁盘空间和回滚点；只按固定版本/commit操作，命令失败时保留完整 stderr，不连续尝试多个来源的安装方案。
3. 完成后从新 shell 或干净 build 目录复验；记录实际版本、产物 hash、退出码和启动现象，避免依赖当前终端的隐式环境变量。
4. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
5. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
6. 每条实际执行命令连同退出码追加到 `evidence/day-021/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜采集复位次数、错误计数、最小剩余栈、CPU 占用和采样缺口。

1. 在 `logs/day-021.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
4. 每批开始前锁定 task/spec 与数据 schema；每个样本生成唯一 ID，记录来源、R/S轨、时间、操作者/上游、有效性和失败原因。
5. 每完成一小批立即跑质量检查和 checksum；原始数据只追加不静默改写，无效样本保留在 manifest 并标明排除原因。
6. 每条实际执行命令连同退出码追加到 `evidence/day-021/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜不等待墙钟空转：运行期间整理架构、问题单和下周 CAN 前置知识。

1. 在 `logs/day-021.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 只读列出的官方/一手资料，先写出要回答的 3～5 个问题；阅读时逐条记录“结论、出处、适用版本、仍不确定项”，禁止只收藏链接。
3. 合上资料后用自己的话重写结论，并用一个反例或边界条件检验理解；无法解释的术语放入问题清单，不用“熟悉”代替掌握。
4. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
5. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
6. 每条实际执行命令连同退出码追加到 `evidence/day-021/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `ip -details -statistics link show can0  # 无真机时改为 vcan0，并在结果中标记 simulation`
- `<执行 docs/toolchain.md 中已固定的 MCU clean build 命令>`
- `<执行对应烧录/硬件测试命令，并保存固件 hash 与串口日志>`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：reports/rtos-soak-24h.md、原始统计与 week-03-review.md
- 日志：`logs/day-021.md`
- 原始证据目录：`evidence/day-021/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：完成真实 24 小时或明确写 PARTIAL 并继续后台运行；所有指标带固件 commit 和采样条件。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 硬件未到、损坏或无授权：保留接口/解析器/mock测试，真实硬件验收标记 `BLOCKED`；写明预计获得日期，不得用 mock 结果替代波形、总线或真机结果。
- 墙钟任务预计 24 小时后台运行，硬上限 36 小时。超过上限停止并保留日志；不能因未满时长伪造 PASS。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-021.md`：

    # Day 021 Result

    - plan_day: D021
    - scheduled_date: 2026-09-13
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

### 第 4 周详细执行｜CAN、Bootloader 与升级回滚

> [!info]- 当日导航
> [[#D021 详细执行｜24 小时运行与第三周复盘|← Day 021]] · [[#导航|↑ 文档导航]] · [[#D023 详细执行｜MCU CAN 收发与过滤|Day 023 →]]

#### D022 详细执行｜CAN 2.0 与 SocketCAN 基线

> 计划日期：2026-09-14｜主动投入：2 小时｜第 4 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“labs/socketcan-baseline 与 docs/can-notes.md”，并满足：vcan 测试可重复；程序处理标准帧、扩展帧和无效长度；口述不把 CAN 等同 UART。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 021 的结果记录，确认其状态和交付物“reports/rtos-soak-24h.md、原始统计与 week-03-review.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-022.md` 和 `evidence/day-022/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R39 Linux SocketCAN 官方文档](https://docs.kernel.org/networking/can.html)；H02 Linux 开发主机。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 整理仲裁、标准/扩展帧、DLC、错误计数、Bus-Off 和终端电阻。 |
| 00:35–01:00 | 任务 2 | 在 Linux 建立 vcan0，用 candump/cansend 发送、过滤并记录错误输入。 |
| 01:00–01:25 | 任务 3 | 写最小 SocketCAN 程序，使用 poll/epoll 接收并保留时间戳。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜整理仲裁、标准/扩展帧、DLC、错误计数、Bus-Off 和终端电阻。

1. 在 `logs/day-022.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 只读列出的官方/一手资料，先写出要回答的 3～5 个问题；阅读时逐条记录“结论、出处、适用版本、仍不确定项”，禁止只收藏链接。
3. 合上资料后用自己的话重写结论，并用一个反例或边界条件检验理解；无法解释的术语放入问题清单，不用“熟悉”代替掌握。
4. 每条实际执行命令连同退出码追加到 `evidence/day-022/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜在 Linux 建立 vcan0，用 candump/cansend 发送、过滤并记录错误输入。

1. 在 `logs/day-022.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 每条实际执行命令连同退出码追加到 `evidence/day-022/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜写最小 SocketCAN 程序，使用 poll/epoll 接收并保留时间戳。

1. 在 `logs/day-022.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-022/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `cmake -S . -B build -DCMAKE_BUILD_TYPE=Debug`
- `cmake --build build --parallel`
- `ctest --test-dir build --output-on-failure`
- `ip -details -statistics link show can0  # 无真机时改为 vcan0，并在结果中标记 simulation`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：labs/socketcan-baseline 与 docs/can-notes.md
- 日志：`logs/day-022.md`
- 原始证据目录：`evidence/day-022/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：vcan 测试可重复；程序处理标准帧、扩展帧和无效长度；口述不把 CAN 等同 UART。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 硬件未到、损坏或无授权：保留接口/解析器/mock测试，真实硬件验收标记 `BLOCKED`；写明预计获得日期，不得用 mock 结果替代波形、总线或真机结果。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-022.md`：

    # Day 022 Result

    - plan_day: D022
    - scheduled_date: 2026-09-14
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D022 详细执行｜CAN 2.0 与 SocketCAN 基线|← Day 022]] · [[#导航|↑ 文档导航]] · [[#D024 详细执行｜心跳、命令确认与超时|Day 024 →]]

#### D023 详细执行｜MCU CAN 收发与过滤

> 计划日期：2026-09-15｜主动投入：2 小时｜第 4 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“firmware/drivers/can、configs/can-matrix.csv 与波形”，并满足：连续 10000 帧统计完成；过滤器拒绝非目标 ID；报告记录真实总线负载和错误计数。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 022 的结果记录，确认其状态和交付物“labs/socketcan-baseline 与 docs/can-notes.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-023.md` 和 `evidence/day-023/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R39 Linux SocketCAN 官方文档](https://docs.kernel.org/networking/can.html)；H12 可持续使用的 HC32/STM32 开发板；H14 CAN收发器与USB-CAN/第二节点；H15 逻辑分析仪/示波器与安全供电。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 配置波特率、采样点和过滤器，记录时钟推导。 |
| 00:35–01:00 | 任务 2 | 使用两节点或 USB-CAN 完成收发，给每类报文固定 ID 和周期。 |
| 01:00–01:25 | 任务 3 | 用示波器/分析仪核对终端电阻、电平和帧周期。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜配置波特率、采样点和过滤器，记录时钟推导。

1. 在 `logs/day-023.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
5. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
6. 每条实际执行命令连同退出码追加到 `evidence/day-023/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜使用两节点或 USB-CAN 完成收发，给每类报文固定 ID 和周期。

1. 在 `logs/day-023.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-023/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜用示波器/分析仪核对终端电阻、电平和帧周期。

1. 在 `logs/day-023.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 只读列出的官方/一手资料，先写出要回答的 3～5 个问题；阅读时逐条记录“结论、出处、适用版本、仍不确定项”，禁止只收藏链接。
3. 合上资料后用自己的话重写结论，并用一个反例或边界条件检验理解；无法解释的术语放入问题清单，不用“熟悉”代替掌握。
4. 每条实际执行命令连同退出码追加到 `evidence/day-023/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `ip -details -statistics link show can0  # 无真机时改为 vcan0，并在结果中标记 simulation`
- `<执行 docs/toolchain.md 中已固定的 MCU clean build 命令>`
- `<执行对应烧录/硬件测试命令，并保存固件 hash 与串口日志>`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：firmware/drivers/can、configs/can-matrix.csv 与波形
- 日志：`logs/day-023.md`
- 原始证据目录：`evidence/day-023/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：连续 10000 帧统计完成；过滤器拒绝非目标 ID；报告记录真实总线负载和错误计数。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 硬件未到、损坏或无授权：保留接口/解析器/mock测试，真实硬件验收标记 `BLOCKED`；写明预计获得日期，不得用 mock 结果替代波形、总线或真机结果。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-023.md`：

    # Day 023 Result

    - plan_day: D023
    - scheduled_date: 2026-09-15
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D023 详细执行｜MCU CAN 收发与过滤|← Day 023]] · [[#导航|↑ 文档导航]] · [[#D025 详细执行｜Bus-Off 与节点恢复|Day 025 →]]

#### D024 详细执行｜心跳、命令确认与超时

> 计划日期：2026-09-16｜主动投入：2 小时｜第 4 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“protocol/can-v1.md、firmware/protocol/can 与 tools/can_fault_injector.py”，并满足：协议有状态图；重复命令测试通过；所有重试有次数和总时限。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 023 的结果记录，确认其状态和交付物“firmware/drivers/can、configs/can-matrix.csv 与波形”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-024.md` 和 `evidence/day-024/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R39 Linux SocketCAN 官方文档](https://docs.kernel.org/networking/can.html)；H12 可持续使用的 HC32/STM32 开发板；H14 CAN收发器与USB-CAN/第二节点。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 设计节点状态、心跳、命令、ACK/NACK 和诊断报文。 |
| 00:35–01:00 | 任务 2 | 实现序号、重复命令幂等、确认超时和有限重试。 |
| 01:00–01:25 | 任务 3 | 主机脚本随机丢弃/重复/乱序帧，验证状态机不会重复执行危险动作。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜设计节点状态、心跳、命令、ACK/NACK 和诊断报文。

1. 在 `logs/day-024.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 每条实际执行命令连同退出码追加到 `evidence/day-024/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜实现序号、重复命令幂等、确认超时和有限重试。

1. 在 `logs/day-024.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 每条实际执行命令连同退出码追加到 `evidence/day-024/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜主机脚本随机丢弃/重复/乱序帧，验证状态机不会重复执行危险动作。

1. 在 `logs/day-024.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
5. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
6. 每条实际执行命令连同退出码追加到 `evidence/day-024/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：protocol/can-v1.md、firmware/protocol/can 与 tools/can_fault_injector.py
- 日志：`logs/day-024.md`
- 原始证据目录：`evidence/day-024/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：协议有状态图；重复命令测试通过；所有重试有次数和总时限。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 硬件未到、损坏或无授权：保留接口/解析器/mock测试，真实硬件验收标记 `BLOCKED`；写明预计获得日期，不得用 mock 结果替代波形、总线或真机结果。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-024.md`：

    # Day 024 Result

    - plan_day: D024
    - scheduled_date: 2026-09-16
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D024 详细执行｜心跳、命令确认与超时|← Day 024]] · [[#导航|↑ 文档导航]] · [[#D026 详细执行｜Flash 分区与镜像格式|Day 026 →]]

#### D025 详细执行｜Bus-Off 与节点恢复

> 计划日期：2026-09-17｜主动投入：2 小时｜第 4 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“reports/can-recovery.csv 与恢复实现”，并满足：至少 5 次真实故障循环；每次检测/恢复时间有记录；无法制造的故障明确标为未验证。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 024 的结果记录，确认其状态和交付物“protocol/can-v1.md、firmware/protocol/can 与 tools/can_fault_injector.py”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-025.md` 和 `evidence/day-025/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R39 Linux SocketCAN 官方文档](https://docs.kernel.org/networking/can.html)；H12 可持续使用的 HC32/STM32 开发板；H14 CAN收发器与USB-CAN/第二节点；H15 逻辑分析仪/示波器与安全供电。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 制造断开终端、电缆拔插或软件错误帧场景，先定义安全预期。 |
| 00:35–01:00 | 任务 2 | 记录 error-passive/Bus-Off 进入条件、检测方式和恢复策略。 |
| 01:00–01:25 | 任务 3 | 验证恢复期间输出保持安全状态，避免无限快速重启。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜制造断开终端、电缆拔插或软件错误帧场景，先定义安全预期。

1. 在 `logs/day-025.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 每条实际执行命令连同退出码追加到 `evidence/day-025/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜记录 error-passive/Bus-Off 进入条件、检测方式和恢复策略。

1. 在 `logs/day-025.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 每条实际执行命令连同退出码追加到 `evidence/day-025/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜验证恢复期间输出保持安全状态，避免无限快速重启。

1. 在 `logs/day-025.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-025/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `python -m compileall -q src tools tests`
- `python -m pytest -q`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：reports/can-recovery.csv 与恢复实现
- 日志：`logs/day-025.md`
- 原始证据目录：`evidence/day-025/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：至少 5 次真实故障循环；每次检测/恢复时间有记录；无法制造的故障明确标为未验证。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 硬件未到、损坏或无授权：保留接口/解析器/mock测试，真实硬件验收标记 `BLOCKED`；写明预计获得日期，不得用 mock 结果替代波形、总线或真机结果。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-025.md`：

    # Day 025 Result

    - plan_day: D025
    - scheduled_date: 2026-09-17
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D025 详细执行｜Bus-Off 与节点恢复|← Day 025]] · [[#导航|↑ 文档导航]] · [[#D027 详细执行｜Bootloader、升级与断电恢复|Day 027 →]]

#### D026 详细执行｜Flash 分区与镜像格式

> 计划日期：2026-09-18｜主动投入：2 小时｜第 4 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“docs/flash-layout.md、tools/firmware_pack.py 与 golden images”，并满足：链接结果不越界；损坏/超长/错误目标镜像均拒绝；版本策略写明。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 025 的结果记录，确认其状态和交付物“reports/can-recovery.csv 与恢复实现”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-026.md` 和 `evidence/day-026/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R37 Arm CMSIS 与 Cortex-M 文档](https://arm-software.github.io/CMSIS_6/latest/General/index.html)；H12 可持续使用的 HC32/STM32 开发板。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 依据真实 Flash 容量画 boot/app-a/app-b/config 分区并核对链接脚本。 |
| 00:35–01:00 | 任务 2 | 定义镜像头：magic、版本、长度、目标、hash/CRC 和签名预留。 |
| 01:00–01:25 | 任务 3 | 编写主机打包器和解析测试，拒绝越界、降级或损坏镜像。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜依据真实 Flash 容量画 boot/app-a/app-b/config 分区并核对链接脚本。

1. 在 `logs/day-026.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 只读列出的官方/一手资料，先写出要回答的 3～5 个问题；阅读时逐条记录“结论、出处、适用版本、仍不确定项”，禁止只收藏链接。
3. 合上资料后用自己的话重写结论，并用一个反例或边界条件检验理解；无法解释的术语放入问题清单，不用“熟悉”代替掌握。
4. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
5. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
6. 每条实际执行命令连同退出码追加到 `evidence/day-026/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜定义镜像头：magic、版本、长度、目标、hash/CRC 和签名预留。

1. 在 `logs/day-026.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 每条实际执行命令连同退出码追加到 `evidence/day-026/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜编写主机打包器和解析测试，拒绝越界、降级或损坏镜像。

1. 在 `logs/day-026.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
5. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
6. 每条实际执行命令连同退出码追加到 `evidence/day-026/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：docs/flash-layout.md、tools/firmware_pack.py 与 golden images
- 日志：`logs/day-026.md`
- 原始证据目录：`evidence/day-026/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：链接结果不越界；损坏/超长/错误目标镜像均拒绝；版本策略写明。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 硬件未到、损坏或无授权：保留接口/解析器/mock测试，真实硬件验收标记 `BLOCKED`；写明预计获得日期，不得用 mock 结果替代波形、总线或真机结果。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-026.md`：

    # Day 026 Result

    - plan_day: D026
    - scheduled_date: 2026-09-18
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D026 详细执行｜Flash 分区与镜像格式|← Day 026]] · [[#导航|↑ 文档导航]] · [[#D028 详细执行｜嵌入式阶段发布门|Day 028 →]]

#### D027 详细执行｜Bootloader、升级与断电恢复

> 计划日期：2026-09-19｜主动投入：4 小时｜第 4 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“firmware/bootloader、tools/updater 与升级测试矩阵”，并满足：正常升级、损坏镜像和至少 5 个复位点有结果；任一失败不会破坏最后可启动镜像。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 026 的结果记录，确认其状态和交付物“docs/flash-layout.md、tools/firmware_pack.py 与 golden images”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-027.md` 和 `evidence/day-027/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R37 Arm CMSIS 与 Cortex-M 文档](https://arm-software.github.io/CMSIS_6/latest/General/index.html)；[R39 Linux SocketCAN 官方文档](https://docs.kernel.org/networking/can.html)；H12 可持续使用的 HC32/STM32 开发板；H14 CAN收发器与USB-CAN/第二节点；H15 逻辑分析仪/示波器与安全供电。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 4 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–01:05 | 任务 1 | 实现最小 Bootloader 验证和跳转，保留回滚计数与启动确认。 |
| 01:05–02:00 | 任务 2 | 通过 UART 或 CAN 分块写入非活动分区，逐块校验并限制重试。 |
| 02:00–02:55 | 任务 3 | 在擦除、接收、校验、切换和首次启动阶段做复位注入。 |
| 02:55–03:40 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 03:40–04:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜实现最小 Bootloader 验证和跳转，保留回滚计数与启动确认。

1. 在 `logs/day-027.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 执行前记录当前版本、磁盘空间和回滚点；只按固定版本/commit操作，命令失败时保留完整 stderr，不连续尝试多个来源的安装方案。
5. 完成后从新 shell 或干净 build 目录复验；记录实际版本、产物 hash、退出码和启动现象，避免依赖当前终端的隐式环境变量。
6. 每条实际执行命令连同退出码追加到 `evidence/day-027/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜通过 UART 或 CAN 分块写入非活动分区，逐块校验并限制重试。

1. 在 `logs/day-027.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 每条实际执行命令连同退出码追加到 `evidence/day-027/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜在擦除、接收、校验、切换和首次启动阶段做复位注入。

1. 在 `logs/day-027.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 执行前记录当前版本、磁盘空间和回滚点；只按固定版本/commit操作，命令失败时保留完整 stderr，不连续尝试多个来源的安装方案。
3. 完成后从新 shell 或干净 build 目录复验；记录实际版本、产物 hash、退出码和启动现象，避免依赖当前终端的隐式环境变量。
4. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
5. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
6. 每条实际执行命令连同退出码追加到 `evidence/day-027/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `ip -details -statistics link show can0  # 无真机时改为 vcan0，并在结果中标记 simulation`
- `<执行 docs/toolchain.md 中已固定的 MCU clean build 命令>`
- `<执行对应烧录/硬件测试命令，并保存固件 hash 与串口日志>`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：firmware/bootloader、tools/updater 与升级测试矩阵
- 日志：`logs/day-027.md`
- 原始证据目录：`evidence/day-027/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：正常升级、损坏镜像和至少 5 个复位点有结果；任一失败不会破坏最后可启动镜像。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 硬件未到、损坏或无授权：保留接口/解析器/mock测试，真实硬件验收标记 `BLOCKED`；写明预计获得日期，不得用 mock 结果替代波形、总线或真机结果。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-027.md`：

    # Day 027 Result

    - plan_day: D027
    - scheduled_date: 2026-09-19
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D027 详细执行｜Bootloader、升级与断电恢复|← Day 027]] · [[#导航|↑ 文档导航]] · [[#D029 详细执行｜Linux 板卡与 BSP 边界|Day 029 →]]

#### D028 详细执行｜嵌入式阶段发布门

> 计划日期：2026-09-20｜主动投入：2 小时｜第 4 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“releases/mcu-node-v0.1.0-rc.md 与 week-04-review.md”，并满足：阶段门逐项 PASS/PARTIAL/BLOCKED；无公司代码、私有协议、设备序列号和联系方式；缓冲时间只用于复现或补失败项。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 027 的结果记录，确认其状态和交付物“firmware/bootloader、tools/updater 与升级测试矩阵”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-028.md` 和 `evidence/day-028/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R20 GitHub Actions 文档](https://docs.github.com/en/actions)；[R37 Arm CMSIS 与 Cortex-M 文档](https://arm-software.github.io/CMSIS_6/latest/General/index.html)；[R39 Linux SocketCAN 官方文档](https://docs.kernel.org/networking/can.html)；H11 原始数据独立备份介质；H12 可持续使用的 HC32/STM32 开发板。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 从 tag 前的干净 clone 构建 application、bootloader 和主机工具。 |
| 00:35–01:00 | 任务 2 | 重复运行外设、RTOS、CAN、升级及故障测试，汇总未通过项。 |
| 01:00–01:25 | 任务 3 | 生成脱敏 v0.1.0 候选说明；硬件证据不足时只发布代码/仿真范围。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜从 tag 前的干净 clone 构建 application、bootloader 和主机工具。

1. 在 `logs/day-028.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 执行前记录当前版本、磁盘空间和回滚点；只按固定版本/commit操作，命令失败时保留完整 stderr，不连续尝试多个来源的安装方案。
3. 完成后从新 shell 或干净 build 目录复验；记录实际版本、产物 hash、退出码和启动现象，避免依赖当前终端的隐式环境变量。
4. 每条实际执行命令连同退出码追加到 `evidence/day-028/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜重复运行外设、RTOS、CAN、升级及故障测试，汇总未通过项。

1. 在 `logs/day-028.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-028/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜生成脱敏 v0.1.0 候选说明；硬件证据不足时只发布代码/仿真范围。

1. 在 `logs/day-028.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 发布/提交前逐条核对证据 ID、个人贡献、上游来源、R/S轨和禁用表述；运行隐私检查并人工搜索联系方式、设备标识、密钥和公司材料。
3. 记录实际提交版本、目标链接和时间；外部是否回复、合并或录用是后续状态，不在当天伪造成果，也不高频自动化操作网站。
4. 每条实际执行命令连同退出码追加到 `evidence/day-028/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `python -m compileall -q src tools tests`
- `python -m pytest -q`
- `ip -details -statistics link show can0  # 无真机时改为 vcan0，并在结果中标记 simulation`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：releases/mcu-node-v0.1.0-rc.md 与 week-04-review.md
- 日志：`logs/day-028.md`
- 原始证据目录：`evidence/day-028/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：阶段门逐项 PASS/PARTIAL/BLOCKED；无公司代码、私有协议、设备序列号和联系方式；缓冲时间只用于复现或补失败项。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 硬件未到、损坏或无授权：保留接口/解析器/mock测试，真实硬件验收标记 `BLOCKED`；写明预计获得日期，不得用 mock 结果替代波形、总线或真机结果。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-028.md`：

    # Day 028 Result

    - plan_day: D028
    - scheduled_date: 2026-09-20
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

### 第 5 周详细执行｜Cortex-A7 Linux 系统构建

> [!info]- 当日导航
> [[#D028 详细执行｜嵌入式阶段发布门|← Day 028]] · [[#导航|↑ 文档导航]] · [[#D030 详细执行｜Buildroot 最小镜像|Day 030 →]]

#### D029 详细执行｜Linux 板卡与 BSP 边界

> 计划日期：2026-09-21｜主动投入：2 小时｜第 5 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“hardware/linux-board-inventory.md 与 boot/boot-baseline.log”，并满足：每段启动责任边界清楚；若无真实板则标记 QEMU-only；不把厂商驱动算作本人开发。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 028 的结果记录，确认其状态和交付物“releases/mcu-node-v0.1.0-rc.md 与 week-04-review.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-029.md` 和 `evidence/day-029/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R40 Buildroot 官方手册](https://buildroot.org/downloads/manual/manual.html)；[R41 Linux内核设备树文档](https://docs.kernel.org/devicetree/index.html)；H16 ARM Linux开发板或QEMU目标；H15 逻辑分析仪/示波器与安全供电。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 确定真实 ARM 板或 QEMU 目标，记录 SoC、Cortex-A7/其他内核、启动介质和串口接线。 |
| 00:35–01:00 | 任务 2 | 区分厂商 BSP、上游源码、本人配置和本人代码；列出不能公开的 SDK/镜像。 |
| 01:00–01:25 | 任务 3 | 保存一次完整启动日志并标注 BootROM/U-Boot/Kernel/init/应用阶段。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜确定真实 ARM 板或 QEMU 目标，记录 SoC、Cortex-A7/其他内核、启动介质和串口接线。

1. 在 `logs/day-029.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 执行前记录当前版本、磁盘空间和回滚点；只按固定版本/commit操作，命令失败时保留完整 stderr，不连续尝试多个来源的安装方案。
3. 完成后从新 shell 或干净 build 目录复验；记录实际版本、产物 hash、退出码和启动现象，避免依赖当前终端的隐式环境变量。
4. 每条实际执行命令连同退出码追加到 `evidence/day-029/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜区分厂商 BSP、上游源码、本人配置和本人代码；列出不能公开的 SDK/镜像。

1. 在 `logs/day-029.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
5. 把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
6. 每条实际执行命令连同退出码追加到 `evidence/day-029/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜保存一次完整启动日志并标注 BootROM/U-Boot/Kernel/init/应用阶段。

1. 在 `logs/day-029.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 执行前记录当前版本、磁盘空间和回滚点；只按固定版本/commit操作，命令失败时保留完整 stderr，不连续尝试多个来源的安装方案。
3. 完成后从新 shell 或干净 build 目录复验；记录实际版本、产物 hash、退出码和启动现象，避免依赖当前终端的隐式环境变量。
4. 每条实际执行命令连同退出码追加到 `evidence/day-029/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：hardware/linux-board-inventory.md 与 boot/boot-baseline.log
- 日志：`logs/day-029.md`
- 原始证据目录：`evidence/day-029/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：每段启动责任边界清楚；若无真实板则标记 QEMU-only；不把厂商驱动算作本人开发。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 硬件未到、损坏或无授权：保留接口/解析器/mock测试，真实硬件验收标记 `BLOCKED`；写明预计获得日期，不得用 mock 结果替代波形、总线或真机结果。
- 外部结果不可控：当天只验收本人可控的高质量材料、提交动作和记录；PR 合并、面试回复或 offer 不能作为 PASS 的必要条件，也不能伪造。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-029.md`：

    # Day 029 Result

    - plan_day: D029
    - scheduled_date: 2026-09-21
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D029 详细执行｜Linux 板卡与 BSP 边界|← Day 029]] · [[#导航|↑ 文档导航]] · [[#D031 详细执行｜U-Boot 环境与可恢复启动|Day 031 →]]

#### D030 详细执行｜Buildroot 最小镜像

> 计划日期：2026-09-22｜主动投入：2 小时｜第 5 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“buildroot/board/edge_gateway、defconfig 与 build-manifest.md”，并满足：干净输出目录可重建；镜像 hash 与配置有记录；构建过程不依赖未说明的本机文件。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 029 的结果记录，确认其状态和交付物“hardware/linux-board-inventory.md 与 boot/boot-baseline.log”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-030.md` 和 `evidence/day-030/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R40 Buildroot 官方手册](https://buildroot.org/downloads/manual/manual.html)；H02 Linux 开发主机；H16 ARM Linux开发板或QEMU目标。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 固定 Buildroot release 和 defconfig，首次只启用串口、网络和必要调试工具。 |
| 00:35–01:00 | 任务 2 | 在独立输出目录构建，记录下载缓存、工具链和镜像 hash。 |
| 01:00–01:25 | 任务 3 | 启动镜像并验证登录、时间、网络和只读/可写分区预期。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜固定 Buildroot release 和 defconfig，首次只启用串口、网络和必要调试工具。

1. 在 `logs/day-030.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-030/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜在独立输出目录构建，记录下载缓存、工具链和镜像 hash。

1. 在 `logs/day-030.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 执行前记录当前版本、磁盘空间和回滚点；只按固定版本/commit操作，命令失败时保留完整 stderr，不连续尝试多个来源的安装方案。
3. 完成后从新 shell 或干净 build 目录复验；记录实际版本、产物 hash、退出码和启动现象，避免依赖当前终端的隐式环境变量。
4. 每条实际执行命令连同退出码追加到 `evidence/day-030/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜启动镜像并验证登录、时间、网络和只读/可写分区预期。

1. 在 `logs/day-030.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 执行前记录当前版本、磁盘空间和回滚点；只按固定版本/commit操作，命令失败时保留完整 stderr，不连续尝试多个来源的安装方案。
5. 完成后从新 shell 或干净 build 目录复验；记录实际版本、产物 hash、退出码和启动现象，避免依赖当前终端的隐式环境变量。
6. 每条实际执行命令连同退出码追加到 `evidence/day-030/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `python -m compileall -q src tools tests`
- `python -m pytest -q`
- `make O=output edge_gateway_defconfig && make O=output`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：buildroot/board/edge_gateway、defconfig 与 build-manifest.md
- 日志：`logs/day-030.md`
- 原始证据目录：`evidence/day-030/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：干净输出目录可重建；镜像 hash 与配置有记录；构建过程不依赖未说明的本机文件。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 硬件未到、损坏或无授权：保留接口/解析器/mock测试，真实硬件验收标记 `BLOCKED`；写明预计获得日期，不得用 mock 结果替代波形、总线或真机结果。
- 墙钟任务预计 首次构建 1～3 小时，硬上限 6 小时。构建可后台继续；当天人工时间仍限制为 2 小时，超时记录后停止排障。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-030.md`：

    # Day 030 Result

    - plan_day: D030
    - scheduled_date: 2026-09-22
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D030 详细执行｜Buildroot 最小镜像|← Day 030]] · [[#导航|↑ 文档导航]] · [[#D032 详细执行｜设备树与一个可验证外设|Day 032 →]]

#### D031 详细执行｜U-Boot 环境与可恢复启动

> 计划日期：2026-09-23｜主动投入：2 小时｜第 5 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“boot/u-boot-flow.md、脱敏环境快照与回退日志”，并满足：正常和失败启动均有日志；变量修改可恢复；不声称编写了未实际修改的 U-Boot 驱动。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 030 的结果记录，确认其状态和交付物“buildroot/board/edge_gateway、defconfig 与 build-manifest.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-031.md` 和 `evidence/day-031/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R41 Linux内核设备树文档](https://docs.kernel.org/devicetree/index.html)；H16 ARM Linux开发板或QEMU目标；H15 逻辑分析仪/示波器与安全供电。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 记录 bootcmd、bootargs、分区和内核/DTB 加载位置。 |
| 00:35–01:00 | 任务 2 | 添加主/备启动计数或可回退变量，不修改未知生产设备。 |
| 01:00–01:25 | 任务 3 | 模拟主镜像缺失或校验失败，观察并记录回退行为。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜记录 bootcmd、bootargs、分区和内核/DTB 加载位置。

1. 在 `logs/day-031.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 每条实际执行命令连同退出码追加到 `evidence/day-031/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜添加主/备启动计数或可回退变量，不修改未知生产设备。

1. 在 `logs/day-031.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 执行前记录当前版本、磁盘空间和回滚点；只按固定版本/commit操作，命令失败时保留完整 stderr，不连续尝试多个来源的安装方案。
3. 完成后从新 shell 或干净 build 目录复验；记录实际版本、产物 hash、退出码和启动现象，避免依赖当前终端的隐式环境变量。
4. 每条实际执行命令连同退出码追加到 `evidence/day-031/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜模拟主镜像缺失或校验失败，观察并记录回退行为。

1. 在 `logs/day-031.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-031/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：boot/u-boot-flow.md、脱敏环境快照与回退日志
- 日志：`logs/day-031.md`
- 原始证据目录：`evidence/day-031/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：正常和失败启动均有日志；变量修改可恢复；不声称编写了未实际修改的 U-Boot 驱动。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 硬件未到、损坏或无授权：保留接口/解析器/mock测试，真实硬件验收标记 `BLOCKED`；写明预计获得日期，不得用 mock 结果替代波形、总线或真机结果。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-031.md`：

    # Day 031 Result

    - plan_day: D031
    - scheduled_date: 2026-09-23
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D031 详细执行｜U-Boot 环境与可恢复启动|← Day 031]] · [[#导航|↑ 文档导航]] · [[#D033 详细执行｜systemd 服务、看门狗与日志|Day 033 →]]

#### D032 详细执行｜设备树与一个可验证外设

> 计划日期：2026-09-24｜主动投入：2 小时｜第 5 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“linux/dts/、docs/device-tree-case.md 与启动验证”，并满足：变更前后现象可比较；DTB 可反编译；边界表述为设备树配置/用户态验证，除非确实写了驱动。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 031 的结果记录，确认其状态和交付物“boot/u-boot-flow.md、脱敏环境快照与回退日志”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-032.md` 和 `evidence/day-032/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R41 Linux内核设备树文档](https://docs.kernel.org/devicetree/index.html)；H16 ARM Linux开发板或QEMU目标；H13 I2C传感器、SPI Flash与基础接线。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 从原理图和现有 DTS 找到一个 GPIO/I2C/SPI 外设节点，记录 compatible、reg、interrupt 和 pinctrl。 |
| 00:35–01:00 | 任务 2 | 用 overlay 或受控源码变更启停设备，编译 DTB 并用 dtc 反编译核对。 |
| 01:00–01:25 | 任务 3 | 通过 sysfs/libgpiod/IIO 或最小用户态程序验证设备出现和错误路径。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜从原理图和现有 DTS 找到一个 GPIO/I2C/SPI 外设节点，记录 compatible、reg、interrupt 和 pinctrl。

1. 在 `logs/day-032.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-032/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜用 overlay 或受控源码变更启停设备，编译 DTB 并用 dtc 反编译核对。

1. 在 `logs/day-032.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 只读列出的官方/一手资料，先写出要回答的 3～5 个问题；阅读时逐条记录“结论、出处、适用版本、仍不确定项”，禁止只收藏链接。
3. 合上资料后用自己的话重写结论，并用一个反例或边界条件检验理解；无法解释的术语放入问题清单，不用“熟悉”代替掌握。
4. 执行前记录当前版本、磁盘空间和回滚点；只按固定版本/commit操作，命令失败时保留完整 stderr，不连续尝试多个来源的安装方案。
5. 完成后从新 shell 或干净 build 目录复验；记录实际版本、产物 hash、退出码和启动现象，避免依赖当前终端的隐式环境变量。
6. 每条实际执行命令连同退出码追加到 `evidence/day-032/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜通过 sysfs/libgpiod/IIO 或最小用户态程序验证设备出现和错误路径。

1. 在 `logs/day-032.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-032/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `<执行 docs/toolchain.md 中已固定的 MCU clean build 命令>`
- `<执行对应烧录/硬件测试命令，并保存固件 hash 与串口日志>`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：linux/dts/、docs/device-tree-case.md 与启动验证
- 日志：`logs/day-032.md`
- 原始证据目录：`evidence/day-032/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：变更前后现象可比较；DTB 可反编译；边界表述为设备树配置/用户态验证，除非确实写了驱动。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 硬件未到、损坏或无授权：保留接口/解析器/mock测试，真实硬件验收标记 `BLOCKED`；写明预计获得日期，不得用 mock 结果替代波形、总线或真机结果。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-032.md`：

    # Day 032 Result

    - plan_day: D032
    - scheduled_date: 2026-09-24
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D032 详细执行｜设备树与一个可验证外设|← Day 032]] · [[#导航|↑ 文档导航]] · [[#D034 详细执行｜C++17 epoll 设备守护进程|Day 034 →]]

#### D033 详细执行｜systemd 服务、看门狗与日志

> 计划日期：2026-09-25｜主动投入：2 小时｜第 5 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“deploy/systemd/、configs/logging 与 recovery-log.md”，并满足：杀进程后在预期时间恢复；反复崩溃进入受控失败而非重启风暴；日志不会无限增长。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 032 的结果记录，确认其状态和交付物“linux/dts/、docs/device-tree-case.md 与启动验证”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-033.md` 和 `evidence/day-033/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R42 GoogleTest 官方入门](https://google.github.io/googletest/primer.html)；H16 ARM Linux开发板或QEMU目标。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 将设备 daemon 定义为非 root systemd service，设置工作目录、权限、Restart 和启动依赖。 |
| 00:35–01:00 | 任务 2 | 接入 watchdog/health 通知，限制重启频率并保留失败原因。 |
| 01:00–01:25 | 任务 3 | 配置 journald 或日志轮转，验证磁盘上限和崩溃后自动恢复。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜将设备 daemon 定义为非 root systemd service，设置工作目录、权限、Restart 和启动依赖。

1. 在 `logs/day-033.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 执行前记录当前版本、磁盘空间和回滚点；只按固定版本/commit操作，命令失败时保留完整 stderr，不连续尝试多个来源的安装方案。
5. 完成后从新 shell 或干净 build 目录复验；记录实际版本、产物 hash、退出码和启动现象，避免依赖当前终端的隐式环境变量。
6. 每条实际执行命令连同退出码追加到 `evidence/day-033/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜接入 watchdog/health 通知，限制重启频率并保留失败原因。

1. 在 `logs/day-033.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 每条实际执行命令连同退出码追加到 `evidence/day-033/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜配置 journald 或日志轮转，验证磁盘上限和崩溃后自动恢复。

1. 在 `logs/day-033.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
5. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
6. 每条实际执行命令连同退出码追加到 `evidence/day-033/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：deploy/systemd/、configs/logging 与 recovery-log.md
- 日志：`logs/day-033.md`
- 原始证据目录：`evidence/day-033/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：杀进程后在预期时间恢复；反复崩溃进入受控失败而非重启风暴；日志不会无限增长。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 硬件未到、损坏或无授权：保留接口/解析器/mock测试，真实硬件验收标记 `BLOCKED`；写明预计获得日期，不得用 mock 结果替代波形、总线或真机结果。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-033.md`：

    # Day 033 Result

    - plan_day: D033
    - scheduled_date: 2026-09-25
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D033 详细执行｜systemd 服务、看门狗与日志|← Day 033]] · [[#导航|↑ 文档导航]] · [[#D035 详细执行｜Linux 系统阶段复现|Day 035 →]]

#### D034 详细执行｜C++17 epoll 设备守护进程

> 计划日期：2026-09-26｜主动投入：4 小时｜第 5 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“gateway/device-daemon 与 unit/integration tests”，并满足：1000 次连接/断连测试无 fd 泄漏；TSan/ASan 适用项无报告；SIGTERM 在限定时间退出。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 033 的结果记录，确认其状态和交付物“deploy/systemd/、configs/logging 与 recovery-log.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-034.md` 和 `evidence/day-034/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R34 C++ Core Guidelines](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines)；[R35 CMake 官方教程](https://cmake.org/cmake/help/latest/guide/tutorial/)；[R42 GoogleTest 官方入门](https://google.github.io/googletest/primer.html)；H02 Linux 开发主机；H16 ARM Linux开发板或QEMU目标。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 4 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–01:05 | 任务 1 | 实现 epoll 事件循环管理 timerfd、signal fd 和一个模拟串口/CAN fd。 |
| 01:05–02:00 | 任务 2 | 用 RAII 管理 fd 和线程，定义停止顺序、背压和错误码。 |
| 02:00–02:55 | 任务 3 | 编写并发、断连、半包和优雅退出测试，运行 Sanitizer。 |
| 02:55–03:40 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 03:40–04:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜实现 epoll 事件循环管理 timerfd、signal fd 和一个模拟串口/CAN fd。

1. 在 `logs/day-034.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
5. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
6. 每条实际执行命令连同退出码追加到 `evidence/day-034/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜用 RAII 管理 fd 和线程，定义停止顺序、背压和错误码。

1. 在 `logs/day-034.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 每条实际执行命令连同退出码追加到 `evidence/day-034/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜编写并发、断连、半包和优雅退出测试，运行 Sanitizer。

1. 在 `logs/day-034.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
5. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
6. 每条实际执行命令连同退出码追加到 `evidence/day-034/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `cmake -S . -B build -DCMAKE_BUILD_TYPE=Debug`
- `cmake --build build --parallel`
- `ctest --test-dir build --output-on-failure`
- `ip -details -statistics link show can0  # 无真机时改为 vcan0，并在结果中标记 simulation`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：gateway/device-daemon 与 unit/integration tests
- 日志：`logs/day-034.md`
- 原始证据目录：`evidence/day-034/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：1000 次连接/断连测试无 fd 泄漏；TSan/ASan 适用项无报告；SIGTERM 在限定时间退出。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 硬件未到、损坏或无授权：保留接口/解析器/mock测试，真实硬件验收标记 `BLOCKED`；写明预计获得日期，不得用 mock 结果替代波形、总线或真机结果。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-034.md`：

    # Day 034 Result

    - plan_day: D034
    - scheduled_date: 2026-09-26
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D034 详细执行｜C++17 epoll 设备守护进程|← Day 034]] · [[#导航|↑ 文档导航]] · [[#D036 详细执行｜SocketCAN 网关适配|Day 036 →]]

#### D035 详细执行｜Linux 系统阶段复现

> 计划日期：2026-09-27｜主动投入：2 小时｜第 5 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“reviews/week-05.md 与 reproducibility/linux-image.md”，并满足：至少另一空目录复现；四项指标有原始命令；没有把一次设备树配置写成完整 BSP 经验。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 034 的结果记录，确认其状态和交付物“gateway/device-daemon 与 unit/integration tests”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-035.md` 和 `evidence/day-035/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R40 Buildroot 官方手册](https://buildroot.org/downloads/manual/manual.html)；[R41 Linux内核设备树文档](https://docs.kernel.org/devicetree/index.html)；[R42 GoogleTest 官方入门](https://google.github.io/googletest/primer.html)；H16 ARM Linux开发板或QEMU目标。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 从 defconfig 和仓库重新构建/启动，执行 daemon 与服务测试。 |
| 00:35–01:00 | 任务 2 | 统计启动时间、镜像尺寸、空载内存和服务恢复时间，注明测量方法。 |
| 01:00–01:25 | 任务 3 | 更新 Linux 应用、系统构建、设备树和 BSP/驱动四者的简历边界。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜从 defconfig 和仓库重新构建/启动，执行 daemon 与服务测试。

1. 在 `logs/day-035.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 执行前记录当前版本、磁盘空间和回滚点；只按固定版本/commit操作，命令失败时保留完整 stderr，不连续尝试多个来源的安装方案。
3. 完成后从新 shell 或干净 build 目录复验；记录实际版本、产物 hash、退出码和启动现象，避免依赖当前终端的隐式环境变量。
4. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
5. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
6. 每条实际执行命令连同退出码追加到 `evidence/day-035/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜统计启动时间、镜像尺寸、空载内存和服务恢复时间，注明测量方法。

1. 在 `logs/day-035.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 执行前记录当前版本、磁盘空间和回滚点；只按固定版本/commit操作，命令失败时保留完整 stderr，不连续尝试多个来源的安装方案。
3. 完成后从新 shell 或干净 build 目录复验；记录实际版本、产物 hash、退出码和启动现象，避免依赖当前终端的隐式环境变量。
4. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
5. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
6. 每条实际执行命令连同退出码追加到 `evidence/day-035/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜更新 Linux 应用、系统构建、设备树和 BSP/驱动四者的简历边界。

1. 在 `logs/day-035.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 执行前记录当前版本、磁盘空间和回滚点；只按固定版本/commit操作，命令失败时保留完整 stderr，不连续尝试多个来源的安装方案。
3. 完成后从新 shell 或干净 build 目录复验；记录实际版本、产物 hash、退出码和启动现象，避免依赖当前终端的隐式环境变量。
4. 发布/提交前逐条核对证据 ID、个人贡献、上游来源、R/S轨和禁用表述；运行隐私检查并人工搜索联系方式、设备标识、密钥和公司材料。
5. 记录实际提交版本、目标链接和时间；外部是否回复、合并或录用是后续状态，不在当天伪造成果，也不高频自动化操作网站。
6. 每条实际执行命令连同退出码追加到 `evidence/day-035/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：reviews/week-05.md 与 reproducibility/linux-image.md
- 日志：`logs/day-035.md`
- 原始证据目录：`evidence/day-035/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：至少另一空目录复现；四项指标有原始命令；没有把一次设备树配置写成完整 BSP 经验。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 硬件未到、损坏或无授权：保留接口/解析器/mock测试，真实硬件验收标记 `BLOCKED`；写明预计获得日期，不得用 mock 结果替代波形、总线或真机结果。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-035.md`：

    # Day 035 Result

    - plan_day: D035
    - scheduled_date: 2026-09-27
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

### 第 6 周详细执行｜边缘网关、可靠性与机器人前置

> [!info]- 当日导航
> [[#D035 详细执行｜Linux 系统阶段复现|← Day 035]] · [[#导航|↑ 文档导航]] · [[#D037 详细执行｜MQTT 遥测与命令边界|Day 037 →]]

#### D036 详细执行｜SocketCAN 网关适配

> 计划日期：2026-09-28｜主动投入：2 小时｜第 6 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“gateway/can-adapter、fixtures/can-replay 与诊断日志”，并满足：vcan CI 与真实 CAN 冒烟分开；错误帧可观测；解析器有 golden tests。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 035 的结果记录，确认其状态和交付物“reviews/week-05.md 与 reproducibility/linux-image.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-036.md` 和 `evidence/day-036/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R39 Linux SocketCAN 官方文档](https://docs.kernel.org/networking/can.html)；H14 CAN收发器与USB-CAN/第二节点；H16 ARM Linux开发板或QEMU目标。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 将 vcan 和真实 can0 统一封装，支持过滤、时间戳和错误帧。 |
| 00:35–01:00 | 任务 2 | 把 MCU 心跳/传感器帧转换为内部类型，未知 ID 保留原始数据但不误解析。 |
| 01:00–01:25 | 任务 3 | 用录制帧回放正常、超时、Bus-Off 和乱序场景。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜将 vcan 和真实 can0 统一封装，支持过滤、时间戳和错误帧。

1. 在 `logs/day-036.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 每条实际执行命令连同退出码追加到 `evidence/day-036/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜把 MCU 心跳/传感器帧转换为内部类型，未知 ID 保留原始数据但不误解析。

1. 在 `logs/day-036.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 每条实际执行命令连同退出码追加到 `evidence/day-036/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜用录制帧回放正常、超时、Bus-Off 和乱序场景。

1. 在 `logs/day-036.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-036/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `python -m compileall -q src tools tests`
- `python -m pytest -q`
- `ip -details -statistics link show can0  # 无真机时改为 vcan0，并在结果中标记 simulation`
- `<执行 docs/toolchain.md 中已固定的 MCU clean build 命令>`
- `<执行对应烧录/硬件测试命令，并保存固件 hash 与串口日志>`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：gateway/can-adapter、fixtures/can-replay 与诊断日志
- 日志：`logs/day-036.md`
- 原始证据目录：`evidence/day-036/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：vcan CI 与真实 CAN 冒烟分开；错误帧可观测；解析器有 golden tests。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 硬件未到、损坏或无授权：保留接口/解析器/mock测试，真实硬件验收标记 `BLOCKED`；写明预计获得日期，不得用 mock 结果替代波形、总线或真机结果。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-036.md`：

    # Day 036 Result

    - plan_day: D036
    - scheduled_date: 2026-09-28
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D036 详细执行｜SocketCAN 网关适配|← Day 036]] · [[#导航|↑ 文档导航]] · [[#D038 详细执行｜SQLite 存储转发|Day 038 →]]

#### D037 详细执行｜MQTT 遥测与命令边界

> 计划日期：2026-09-29｜主动投入：2 小时｜第 6 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“gateway/mqtt-bridge、protocol/mqtt-v1.md 与集成测试”，并满足：断网不阻塞 CAN；重复命令幂等；过期命令拒绝且有审计日志。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 036 的结果记录，确认其状态和交付物“gateway/can-adapter、fixtures/can-replay 与诊断日志”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-037.md` 和 `evidence/day-037/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R30 OASIS MQTT 5.0 规范](https://docs.oasis-open.org/mqtt/mqtt/v5.0/mqtt-v5.0.html)；H07 4G 网络与可控网络环境；H16 ARM Linux开发板或QEMU目标。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 定义设备状态、传感器、告警和命令 topic/schema，写清 QoS、retain 和过期策略。 |
| 00:35–01:00 | 任务 2 | 实现本地 CAN 到 MQTT 遥测，以及云命令到本地受限动作的映射。 |
| 01:00–01:25 | 任务 3 | 验证重复、离线、过期和未授权命令不会绕过本地安全状态。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜定义设备状态、传感器、告警和命令 topic/schema，写清 QoS、retain 和过期策略。

1. 在 `logs/day-037.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 每条实际执行命令连同退出码追加到 `evidence/day-037/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜实现本地 CAN 到 MQTT 遥测，以及云命令到本地受限动作的映射。

1. 在 `logs/day-037.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 每条实际执行命令连同退出码追加到 `evidence/day-037/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜验证重复、离线、过期和未授权命令不会绕过本地安全状态。

1. 在 `logs/day-037.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-037/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `python -m compileall -q src tools tests`
- `python -m pytest -q`
- `ip -details -statistics link show can0  # 无真机时改为 vcan0，并在结果中标记 simulation`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：gateway/mqtt-bridge、protocol/mqtt-v1.md 与集成测试
- 日志：`logs/day-037.md`
- 原始证据目录：`evidence/day-037/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：断网不阻塞 CAN；重复命令幂等；过期命令拒绝且有审计日志。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 硬件未到、损坏或无授权：保留接口/解析器/mock测试，真实硬件验收标记 `BLOCKED`；写明预计获得日期，不得用 mock 结果替代波形、总线或真机结果。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-037.md`：

    # Day 037 Result

    - plan_day: D037
    - scheduled_date: 2026-09-29
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D037 详细执行｜MQTT 遥测与命令边界|← Day 037]] · [[#导航|↑ 文档导航]] · [[#D039 详细执行｜应用升级与回滚|Day 039 →]]

#### D038 详细执行｜SQLite 存储转发

> 计划日期：2026-09-30｜主动投入：2 小时｜第 6 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“gateway/store-forward、schema.sql 与 reports/offline-replay.csv”，并满足：重启后待发送记录不丢；容量达到上限行为明确；回传不会压垮本地实时链路。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 037 的结果记录，确认其状态和交付物“gateway/mqtt-bridge、protocol/mqtt-v1.md 与集成测试”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-038.md` 和 `evidence/day-038/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R42 GoogleTest 官方入门](https://google.github.io/googletest/primer.html)；H16 ARM Linux开发板或QEMU目标。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 设计遥测队列表：sequence、created_at、payload_version、retry_count 和状态。 |
| 00:35–01:00 | 任务 2 | 使用事务和批量提交，设置容量、水位和删除策略。 |
| 01:00–01:25 | 任务 3 | 断网写入、重启恢复、恢复网络后限速回传，统计重复和缺口。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜设计遥测队列表：sequence、created_at、payload_version、retry_count 和状态。

1. 在 `logs/day-038.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 每条实际执行命令连同退出码追加到 `evidence/day-038/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜使用事务和批量提交，设置容量、水位和删除策略。

1. 在 `logs/day-038.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 发布/提交前逐条核对证据 ID、个人贡献、上游来源、R/S轨和禁用表述；运行隐私检查并人工搜索联系方式、设备标识、密钥和公司材料。
5. 记录实际提交版本、目标链接和时间；外部是否回复、合并或录用是后续状态，不在当天伪造成果，也不高频自动化操作网站。
6. 每条实际执行命令连同退出码追加到 `evidence/day-038/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜断网写入、重启恢复、恢复网络后限速回传，统计重复和缺口。

1. 在 `logs/day-038.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-038/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `python -m compileall -q src tools tests`
- `python -m pytest -q`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：gateway/store-forward、schema.sql 与 reports/offline-replay.csv
- 日志：`logs/day-038.md`
- 原始证据目录：`evidence/day-038/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：重启后待发送记录不丢；容量达到上限行为明确；回传不会压垮本地实时链路。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 硬件未到、损坏或无授权：保留接口/解析器/mock测试，真实硬件验收标记 `BLOCKED`；写明预计获得日期，不得用 mock 结果替代波形、总线或真机结果。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-038.md`：

    # Day 038 Result

    - plan_day: D038
    - scheduled_date: 2026-09-30
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D038 详细执行｜SQLite 存储转发|← Day 038]] · [[#导航|↑ 文档导航]] · [[#D040 详细执行｜性能与资源观测|Day 040 →]]

#### D039 详细执行｜应用升级与回滚

> 计划日期：2026-10-01｜主动投入：2 小时｜第 6 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“deploy/update-agent、release manifest 与 rollback-matrix.csv”，并满足：四类失败均保留旧版本可运行；升级日志可追溯；不把应用回滚写成整机 A/B 系统 OTA。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 038 的结果记录，确认其状态和交付物“gateway/store-forward、schema.sql 与 reports/offline-replay.csv”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-039.md` 和 `evidence/day-039/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R21 Docker 文档](https://docs.docker.com/)；[R42 GoogleTest 官方入门](https://google.github.io/googletest/primer.html)；H16 ARM Linux开发板或QEMU目标。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 定义应用包 manifest、版本、hash 和最低兼容数据版本。 |
| 00:35–01:00 | 任务 2 | 下载到临时位置、校验、原子切换并由 systemd 启动确认。 |
| 01:00–01:25 | 任务 3 | 注入下载中断、hash错误、启动失败和数据库不兼容，验证回滚。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜定义应用包 manifest、版本、hash 和最低兼容数据版本。

1. 在 `logs/day-039.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 每条实际执行命令连同退出码追加到 `evidence/day-039/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜下载到临时位置、校验、原子切换并由 systemd 启动确认。

1. 在 `logs/day-039.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 执行前记录当前版本、磁盘空间和回滚点；只按固定版本/commit操作，命令失败时保留完整 stderr，不连续尝试多个来源的安装方案。
3. 完成后从新 shell 或干净 build 目录复验；记录实际版本、产物 hash、退出码和启动现象，避免依赖当前终端的隐式环境变量。
4. 每条实际执行命令连同退出码追加到 `evidence/day-039/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜注入下载中断、hash错误、启动失败和数据库不兼容，验证回滚。

1. 在 `logs/day-039.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 执行前记录当前版本、磁盘空间和回滚点；只按固定版本/commit操作，命令失败时保留完整 stderr，不连续尝试多个来源的安装方案。
3. 完成后从新 shell 或干净 build 目录复验；记录实际版本、产物 hash、退出码和启动现象，避免依赖当前终端的隐式环境变量。
4. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
5. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
6. 每条实际执行命令连同退出码追加到 `evidence/day-039/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `python -m compileall -q src tools tests`
- `python -m pytest -q`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：deploy/update-agent、release manifest 与 rollback-matrix.csv
- 日志：`logs/day-039.md`
- 原始证据目录：`evidence/day-039/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：四类失败均保留旧版本可运行；升级日志可追溯；不把应用回滚写成整机 A/B 系统 OTA。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 硬件未到、损坏或无授权：保留接口/解析器/mock测试，真实硬件验收标记 `BLOCKED`；写明预计获得日期，不得用 mock 结果替代波形、总线或真机结果。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-039.md`：

    # Day 039 Result

    - plan_day: D039
    - scheduled_date: 2026-10-01
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D039 详细执行｜应用升级与回滚|← Day 039]] · [[#导航|↑ 文档导航]] · [[#D041 详细执行｜48 小时端到端长稳与故障注入|Day 041 →]]

#### D040 详细执行｜性能与资源观测

> 计划日期：2026-10-02｜主动投入：2 小时｜第 6 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“observability/、reports/gateway-performance.md”，并满足：报告有相同负载/版本/时长；无内存和fd持续增长；优化结论可由原始数据复核。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 039 的结果记录，确认其状态和交付物“deploy/update-agent、release manifest 与 rollback-matrix.csv”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-040.md` 和 `evidence/day-040/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R36 Linux tracing 与性能工具文档](https://docs.kernel.org/trace/index.html)；H16 ARM Linux开发板或QEMU目标。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 给事件循环、CAN处理、SQLite批次和MQTT队列增加延迟与水位指标。 |
| 00:35–01:00 | 任务 2 | 用 pidstat/strace/perf/Valgrind 记录空载和压力下 CPU、内存、fd 与热点。 |
| 01:00–01:25 | 任务 3 | 只优化一个有数据支持的瓶颈，并保留优化前后同条件结果。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜给事件循环、CAN处理、SQLite批次和MQTT队列增加延迟与水位指标。

1. 在 `logs/day-040.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 每条实际执行命令连同退出码追加到 `evidence/day-040/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜用 pidstat/strace/perf/Valgrind 记录空载和压力下 CPU、内存、fd 与热点。

1. 在 `logs/day-040.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-040/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜只优化一个有数据支持的瓶颈，并保留优化前后同条件结果。

1. 在 `logs/day-040.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-040/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `python -m compileall -q src tools tests`
- `python -m pytest -q`
- `ip -details -statistics link show can0  # 无真机时改为 vcan0，并在结果中标记 simulation`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：observability/、reports/gateway-performance.md
- 日志：`logs/day-040.md`
- 原始证据目录：`evidence/day-040/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：报告有相同负载/版本/时长；无内存和fd持续增长；优化结论可由原始数据复核。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 硬件未到、损坏或无授权：保留接口/解析器/mock测试，真实硬件验收标记 `BLOCKED`；写明预计获得日期，不得用 mock 结果替代波形、总线或真机结果。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-040.md`：

    # Day 040 Result

    - plan_day: D040
    - scheduled_date: 2026-10-02
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D040 详细执行｜性能与资源观测|← Day 040]] · [[#导航|↑ 文档导航]] · [[#D042 详细执行｜嵌入式作品阶段门|Day 042 →]]

#### D041 详细执行｜48 小时端到端长稳与故障注入

> 计划日期：2026-10-03｜主动投入：4 小时｜第 6 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“reports/e2e-soak-48h.md、fault-events.csv 与 docs/robotics-primer.md”，并满足：真实运行时长、故障次数和恢复结果完整；不足48小时写PARTIAL；机器人笔记不暗示已有机械臂经验。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 040 的结果记录，确认其状态和交付物“observability/、reports/gateway-performance.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-041.md` 和 `evidence/day-041/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R03 Hugging Face Robot Learning Course](https://huggingface.co/learn/robotics-course/en/unit0/1)；[R13 MoveIt 2 Jazzy 入门](https://moveit.picknik.ai/main/doc/tutorials/getting_started/getting_started.html)；H07 4G 网络与可控网络环境；H11 原始数据独立备份介质；H12 可持续使用的 HC32/STM32 开发板；H16 ARM Linux开发板或QEMU目标。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 4 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–01:05 | 任务 1 | 冻结 MCU、网关、协议和测试清单，启动不少于 48 小时运行。 |
| 01:05–02:00 | 任务 2 | 定时注入断网、CAN断开、进程终止和设备重启，记录检测/恢复时间。 |
| 02:00–02:55 | 任务 3 | 墙钟运行期间学习坐标系、关节/末端、控制周期和急停边界，整理机器人术语图。 |
| 02:55–03:40 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 03:40–04:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜冻结 MCU、网关、协议和测试清单，启动不少于 48 小时运行。

1. 在 `logs/day-041.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 执行前记录当前版本、磁盘空间和回滚点；只按固定版本/commit操作，命令失败时保留完整 stderr，不连续尝试多个来源的安装方案。
5. 完成后从新 shell 或干净 build 目录复验；记录实际版本、产物 hash、退出码和启动现象，避免依赖当前终端的隐式环境变量。
6. 每条实际执行命令连同退出码追加到 `evidence/day-041/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜定时注入断网、CAN断开、进程终止和设备重启，记录检测/恢复时间。

1. 在 `logs/day-041.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-041/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜墙钟运行期间学习坐标系、关节/末端、控制周期和急停边界，整理机器人术语图。

1. 在 `logs/day-041.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 只读列出的官方/一手资料，先写出要回答的 3～5 个问题；阅读时逐条记录“结论、出处、适用版本、仍不确定项”，禁止只收藏链接。
3. 合上资料后用自己的话重写结论，并用一个反例或边界条件检验理解；无法解释的术语放入问题清单，不用“熟悉”代替掌握。
4. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
5. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
6. 每条实际执行命令连同退出码追加到 `evidence/day-041/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `ip -details -statistics link show can0  # 无真机时改为 vcan0，并在结果中标记 simulation`
- `<执行 docs/toolchain.md 中已固定的 MCU clean build 命令>`
- `<执行对应烧录/硬件测试命令，并保存固件 hash 与串口日志>`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：reports/e2e-soak-48h.md、fault-events.csv 与 docs/robotics-primer.md
- 日志：`logs/day-041.md`
- 原始证据目录：`evidence/day-041/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：真实运行时长、故障次数和恢复结果完整；不足48小时写PARTIAL；机器人笔记不暗示已有机械臂经验。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 硬件未到、损坏或无授权：保留接口/解析器/mock测试，真实硬件验收标记 `BLOCKED`；写明预计获得日期，不得用 mock 结果替代波形、总线或真机结果。
- 墙钟任务预计 48 小时后台运行，硬上限 72 小时。达到上限即结束并分析；不得无限等待或补写不存在的数据。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-041.md`：

    # Day 041 Result

    - plan_day: D041
    - scheduled_date: 2026-10-03
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D041 详细执行｜48 小时端到端长稳与故障注入|← Day 041]] · [[#导航|↑ 文档导航]] · [[#D043 详细执行｜ROS 2 Jazzy 安装与工作区|Day 043 →]]

#### D042 详细执行｜嵌入式作品阶段门

> 计划日期：2026-10-04｜主动投入：2 小时｜第 6 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“reviews/week-06.md、embedded-edge-demo.md 与机器人轨道预决策”，并满足：嵌入式核心演示可独立完成；失败项进入 backlog；机器人轨道选择不依赖口头承诺。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 041 的结果记录，确认其状态和交付物“reports/e2e-soak-48h.md、fault-events.csv 与 docs/robotics-primer.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-042.md` 和 `evidence/day-042/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R03 Hugging Face Robot Learning Course](https://huggingface.co/learn/robotics-course/en/unit0/1)；[R05 LeRobot 自定义硬件](https://huggingface.co/docs/lerobot/v0.6.0/en/integrate_hardware)；A05 机械臂所有者授权与使用排期；H01 同学的机械臂与厂商 SDK；H05 独立急停与安全工作区；H10 示教 / 遥操作输入源。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 汇总 MCU→CAN→Linux→MQTT 数据流、线程/任务模型和安全边界。 |
| 00:35–01:00 | 任务 2 | 由本人从空环境演示构建、烧录、启动、断网恢复和升级回滚。 |
| 01:00–01:25 | 任务 3 | 决定后续 R 真机或 S 仿真轨；未取得机械臂授权、急停和排期时默认 S 轨。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜汇总 MCU→CAN→Linux→MQTT 数据流、线程/任务模型和安全边界。

1. 在 `logs/day-042.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先用 1 batch/少量 step 验证 shape、loss、保存和恢复，再冻结数据 revision、配置、seed、代码 commit 与算力预算后启动正式任务。
3. 观察首个训练/验证周期并主动验证一次 checkpoint 恢复；训练仍在运行时写 RUNNING，不把开始训练、下载权重或官方 demo 当成完成微调。
4. 每条实际执行命令连同退出码追加到 `evidence/day-042/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜由本人从空环境演示构建、烧录、启动、断网恢复和升级回滚。

1. 在 `logs/day-042.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 执行前记录当前版本、磁盘空间和回滚点；只按固定版本/commit操作，命令失败时保留完整 stderr，不连续尝试多个来源的安装方案。
3. 完成后从新 shell 或干净 build 目录复验；记录实际版本、产物 hash、退出码和启动现象，避免依赖当前终端的隐式环境变量。
4. 每条实际执行命令连同退出码追加到 `evidence/day-042/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜决定后续 R 真机或 S 仿真轨；未取得机械臂授权、急停和排期时默认 S 轨。

1. 在 `logs/day-042.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-042/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `python -m compileall -q src tools tests`
- `python -m pytest -q`
- `ip -details -statistics link show can0  # 无真机时改为 vcan0，并在结果中标记 simulation`
- `<执行 docs/toolchain.md 中已固定的 MCU clean build 命令>`
- `<执行对应烧录/硬件测试命令，并保存固件 hash 与串口日志>`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：reviews/week-06.md、embedded-edge-demo.md 与机器人轨道预决策
- 日志：`logs/day-042.md`
- 原始证据目录：`evidence/day-042/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：嵌入式核心演示可独立完成；失败项进入 backlog；机器人轨道选择不依赖口头承诺。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 硬件未到、损坏或无授权：保留接口/解析器/mock测试，真实硬件验收标记 `BLOCKED`；写明预计获得日期，不得用 mock 结果替代波形、总线或真机结果。
- 机械臂授权、独立急停、示教输入、SDK许可或持续排期任一缺失：立即执行 S 轨；不得发送真实动作，也不得在简历中使用“真机”“机械臂项目经验”。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-042.md`：

    # Day 042 Result

    - plan_day: D042
    - scheduled_date: 2026-10-04
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

### 第 7 周详细执行｜ROS 2、相机与系统接口

> [!info]- 当日导航
> [[#D042 详细执行｜嵌入式作品阶段门|← Day 042]] · [[#导航|↑ 文档导航]] · [[#D044 详细执行｜Node、Topic、Service、Action|Day 044 →]]

#### D043 详细执行｜ROS 2 Jazzy 安装与工作区

> 计划日期：2026-10-05｜主动投入：2 小时｜第 7 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“ros2_ws 与 docs/ros2-environment.md”，并满足：全新终端中可构建并运行两个 package；ROS 与 LeRobot 分别使用独立启动脚本，`python3` 路径和 rclpy ABI 检查写入日志。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 042 的结果记录，确认其状态和交付物“reviews/week-06.md、embedded-edge-demo.md 与机器人轨道预决策”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-043.md` 和 `evidence/day-043/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R12 ROS 2 官方文档](https://docs.ros.org/en/jazzy/index.html)；[R29 ROS 2 Jazzy Python 环境指南](https://docs.ros.org/en/jazzy/How-To-Guides/Using-Python-Packages.html)；[R34 C++ Core Guidelines](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines)；[R35 CMake 官方教程](https://cmake.org/cmake/help/latest/guide/tutorial/)；H02 Linux 开发主机。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 在原生 Ubuntu 24.04 使用系统 Python 安装 ROS 2 Jazzy 和 colcon 工作区，禁止直接复用 LeRobot Conda/uv 解释器。 |
| 00:35–01:00 | 任务 2 | 创建 rclpy 与 rclcpp 两个最小 package，C++ 使用可安装 CMake target 和测试。 |
| 01:00–01:25 | 任务 3 | 验证 ROS 与 LeRobot 通过 topic/独立进程桥接，并记录两个环境的启动脚本。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜在原生 Ubuntu 24.04 使用系统 Python 安装 ROS 2 Jazzy 和 colcon 工作区，禁止直接复用 LeRobot Conda/uv 解释器。

1. 在 `logs/day-043.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 只读列出的官方/一手资料，先写出要回答的 3～5 个问题；阅读时逐条记录“结论、出处、适用版本、仍不确定项”，禁止只收藏链接。
3. 合上资料后用自己的话重写结论，并用一个反例或边界条件检验理解；无法解释的术语放入问题清单，不用“熟悉”代替掌握。
4. 执行前记录当前版本、磁盘空间和回滚点；只按固定版本/commit操作，命令失败时保留完整 stderr，不连续尝试多个来源的安装方案。
5. 完成后从新 shell 或干净 build 目录复验；记录实际版本、产物 hash、退出码和启动现象，避免依赖当前终端的隐式环境变量。
6. 每条实际执行命令连同退出码追加到 `evidence/day-043/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜创建 rclpy 与 rclcpp 两个最小 package，C++ 使用可安装 CMake target 和测试。

1. 在 `logs/day-043.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 执行前记录当前版本、磁盘空间和回滚点；只按固定版本/commit操作，命令失败时保留完整 stderr，不连续尝试多个来源的安装方案。
5. 完成后从新 shell 或干净 build 目录复验；记录实际版本、产物 hash、退出码和启动现象，避免依赖当前终端的隐式环境变量。
6. 每条实际执行命令连同退出码追加到 `evidence/day-043/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜验证 ROS 与 LeRobot 通过 topic/独立进程桥接，并记录两个环境的启动脚本。

1. 在 `logs/day-043.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 执行前记录当前版本、磁盘空间和回滚点；只按固定版本/commit操作，命令失败时保留完整 stderr，不连续尝试多个来源的安装方案。
3. 完成后从新 shell 或干净 build 目录复验；记录实际版本、产物 hash、退出码和启动现象，避免依赖当前终端的隐式环境变量。
4. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
5. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
6. 每条实际执行命令连同退出码追加到 `evidence/day-043/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `cmake -S . -B build -DCMAKE_BUILD_TYPE=Debug`
- `cmake --build build --parallel`
- `ctest --test-dir build --output-on-failure`
- `python -m compileall -q src tools tests`
- `python -m pytest -q`
- `colcon build --symlink-install`
- `colcon test`
- `colcon test-result --verbose`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：ros2_ws 与 docs/ros2-environment.md
- 日志：`logs/day-043.md`
- 原始证据目录：`evidence/day-043/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：全新终端中可构建并运行两个 package；ROS 与 LeRobot 分别使用独立启动脚本，`python3` 路径和 rclpy ABI 检查写入日志。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 单点卡住超过 30 分钟：保存完整错误、最小复现和已排除项；把范围缩到一个可测试子问题，剩余项写 `PARTIAL`，不通过延长到深夜制造假进度。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-043.md`：

    # Day 043 Result

    - plan_day: D043
    - scheduled_date: 2026-10-05
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D043 详细执行｜ROS 2 Jazzy 安装与工作区|← Day 043]] · [[#导航|↑ 文档导航]] · [[#D045 详细执行｜URDF 与 tf2|Day 045 →]]

#### D044 详细执行｜Node、Topic、Service、Action

> 计划日期：2026-10-06｜主动投入：2 小时｜第 7 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“ros2_ws/src/edgevla_interfaces_demo”，并满足：节点可互通；service/action 的取消、超时和失败路径均被测试。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 043 的结果记录，确认其状态和交付物“ros2_ws 与 docs/ros2-environment.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-044.md` 和 `evidence/day-044/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R12 ROS 2 官方文档](https://docs.ros.org/en/jazzy/index.html)；[R34 C++ Core Guidelines](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines)；[R35 CMake 官方教程](https://cmake.org/cmake/help/latest/guide/tutorial/)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 使用 rclcpp 实现关节状态 publisher，使用 rclpy 实现状态 monitor subscriber。 |
| 00:35–01:00 | 任务 2 | 实现校准 service 与长任务 action 示例。 |
| 01:00–01:25 | 任务 3 | 比较三种通信语义和错误处理。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜使用 rclcpp 实现关节状态 publisher，使用 rclpy 实现状态 monitor subscriber。

1. 在 `logs/day-044.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 每条实际执行命令连同退出码追加到 `evidence/day-044/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜实现校准 service 与长任务 action 示例。

1. 在 `logs/day-044.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 每条实际执行命令连同退出码追加到 `evidence/day-044/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜比较三种通信语义和错误处理。

1. 在 `logs/day-044.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-044/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：ros2_ws/src/edgevla_interfaces_demo
- 日志：`logs/day-044.md`
- 原始证据目录：`evidence/day-044/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：节点可互通；service/action 的取消、超时和失败路径均被测试。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 单点卡住超过 30 分钟：保存完整错误、最小复现和已排除项；把范围缩到一个可测试子问题，剩余项写 `PARTIAL`，不通过延长到深夜制造假进度。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-044.md`：

    # Day 044 Result

    - plan_day: D044
    - scheduled_date: 2026-10-06
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D044 详细执行｜Node、Topic、Service、Action|← Day 044]] · [[#导航|↑ 文档导航]] · [[#D046 详细执行｜rosbag2、MCAP 与时间戳|Day 046 →]]

#### D045 详细执行｜URDF 与 tf2

> 计划日期：2026-10-07｜主动投入：2 小时｜第 7 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“robot_description 与 tf 树截图”，并满足：tf 树无环、时间戳有效，能查询相机到末端的变换。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 044 的结果记录，确认其状态和交付物“ros2_ws/src/edgevla_interfaces_demo”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-045.md` 和 `evidence/day-045/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R12 ROS 2 官方文档](https://docs.ros.org/en/jazzy/index.html)；[R13 MoveIt 2 Jazzy 入门](https://moveit.picknik.ai/main/doc/tutorials/getting_started/getting_started.html)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 创建简化机械臂 URDF。 |
| 00:35–01:00 | 任务 2 | 发布 base、camera、end_effector 的 tf2。 |
| 01:00–01:25 | 任务 3 | 用可视化检查坐标轴方向和树结构。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜创建简化机械臂 URDF。

1. 在 `logs/day-045.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 每条实际执行命令连同退出码追加到 `evidence/day-045/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜发布 base、camera、end_effector 的 tf2。

1. 在 `logs/day-045.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 发布/提交前逐条核对证据 ID、个人贡献、上游来源、R/S轨和禁用表述；运行隐私检查并人工搜索联系方式、设备标识、密钥和公司材料。
3. 记录实际提交版本、目标链接和时间；外部是否回复、合并或录用是后续状态，不在当天伪造成果，也不高频自动化操作网站。
4. 每条实际执行命令连同退出码追加到 `evidence/day-045/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜用可视化检查坐标轴方向和树结构。

1. 在 `logs/day-045.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-045/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `colcon build --symlink-install`
- `colcon test`
- `colcon test-result --verbose`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：robot_description 与 tf 树截图
- 日志：`logs/day-045.md`
- 原始证据目录：`evidence/day-045/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：tf 树无环、时间戳有效，能查询相机到末端的变换。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 机械臂授权、独立急停、示教输入、SDK许可或持续排期任一缺失：立即执行 S 轨；不得发送真实动作，也不得在简历中使用“真机”“机械臂项目经验”。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-045.md`：

    # Day 045 Result

    - plan_day: D045
    - scheduled_date: 2026-10-07
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D045 详细执行｜URDF 与 tf2|← Day 045]] · [[#导航|↑ 文档导航]] · [[#D047 详细执行｜OpenCV 相机标定|Day 047 →]]

#### D046 详细执行｜rosbag2、MCAP 与时间戳

> 计划日期：2026-10-08｜主动投入：2 小时｜第 7 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“sample.mcap 与 tools/bag_quality_report.py”，并满足：质量报告能输出每个 topic 的数量、频率、时间范围和最大间隔。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 045 的结果记录，确认其状态和交付物“robot_description 与 tf 树截图”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-046.md` 和 `evidence/day-046/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R12 ROS 2 官方文档](https://docs.ros.org/en/jazzy/index.html)；[R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 录制图像、关节状态和命令 topic。 |
| 00:35–01:00 | 任务 2 | 回放并计算消息频率、丢帧和时间偏差。 |
| 01:00–01:25 | 任务 3 | 定义跨进程使用单调时钟与墙上时钟的规则。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜录制图像、关节状态和命令 topic。

1. 在 `logs/day-046.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-046/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜回放并计算消息频率、丢帧和时间偏差。

1. 在 `logs/day-046.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-046/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜定义跨进程使用单调时钟与墙上时钟的规则。

1. 在 `logs/day-046.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 每条实际执行命令连同退出码追加到 `evidence/day-046/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `colcon build --symlink-install`
- `colcon test`
- `colcon test-result --verbose`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：sample.mcap 与 tools/bag_quality_report.py
- 日志：`logs/day-046.md`
- 原始证据目录：`evidence/day-046/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：质量报告能输出每个 topic 的数量、频率、时间范围和最大间隔。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 单点卡住超过 30 分钟：保存完整错误、最小复现和已排除项；把范围缩到一个可测试子问题，剩余项写 `PARTIAL`，不通过延长到深夜制造假进度。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-046.md`：

    # Day 046 Result

    - plan_day: D046
    - scheduled_date: 2026-10-08
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D046 详细执行｜rosbag2、MCAP 与时间戳|← Day 046]] · [[#导航|↑ 文档导航]] · [[#D048 详细执行｜Lifecycle、参数与诊断|Day 048 →]]

#### D047 详细执行｜OpenCV 相机标定

> 计划日期：2026-10-09｜主动投入：2 小时｜第 7 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“calibration/camera.yaml 与标定报告”，并满足：标定样本覆盖画面各区域；误差与失败样本均写入报告。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 046 的结果记录，确认其状态和交付物“sample.mcap 与 tools/bag_quality_report.py”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-047.md` 和 `evidence/day-047/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R15 OpenCV 相机标定](https://docs.opencv.org/4.x/dc/dbb/tutorial_py_calibration.html)；H04 固定机位 RGB 摄像头；H06 标定与任务物料。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 准备棋盘格并采集不同姿态标定图。 |
| 00:35–01:00 | 任务 2 | 计算内参与畸变参数，保存 YAML。 |
| 01:00–01:25 | 任务 3 | 可视化去畸变前后结果并记录重投影误差。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜准备棋盘格并采集不同姿态标定图。

1. 在 `logs/day-047.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 每批开始前锁定 task/spec 与数据 schema；每个样本生成唯一 ID，记录来源、R/S轨、时间、操作者/上游、有效性和失败原因。
3. 每完成一小批立即跑质量检查和 checksum；原始数据只追加不静默改写，无效样本保留在 manifest 并标明排除原因。
4. 每条实际执行命令连同退出码追加到 `evidence/day-047/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜计算内参与畸变参数，保存 YAML。

1. 在 `logs/day-047.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-047/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜可视化去畸变前后结果并记录重投影误差。

1. 在 `logs/day-047.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-047/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `colcon build --symlink-install`
- `colcon test`
- `colcon test-result --verbose`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：calibration/camera.yaml 与标定报告
- 日志：`logs/day-047.md`
- 原始证据目录：`evidence/day-047/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：标定样本覆盖画面各区域；误差与失败样本均写入报告。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 单点卡住超过 30 分钟：保存完整错误、最小复现和已排除项；把范围缩到一个可测试子问题，剩余项写 `PARTIAL`，不通过延长到深夜制造假进度。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-047.md`：

    # Day 047 Result

    - plan_day: D047
    - scheduled_date: 2026-10-09
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D047 详细执行｜OpenCV 相机标定|← Day 047]] · [[#导航|↑ 文档导航]] · [[#D049 详细执行｜ROS2 阶段验收与 R/S 轨决策|Day 049 →]]

#### D048 详细执行｜Lifecycle、参数与诊断

> 计划日期：2026-10-10｜主动投入：4 小时｜第 7 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“可诊断的 virtual_robot_node 与故障测试”，并满足：断开后进入安全非活动状态，恢复必须显式重新激活。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 047 的结果记录，确认其状态和交付物“calibration/camera.yaml 与标定报告”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-048.md` 和 `evidence/day-048/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R12 ROS 2 官方文档](https://docs.ros.org/en/jazzy/index.html)；[R34 C++ Core Guidelines](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines)；[R35 CMake 官方教程](https://cmake.org/cmake/help/latest/guide/tutorial/)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 4 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–01:05 | 任务 1 | 给 rclcpp 虚拟机器人节点增加 configure/activate/deactivate 生命周期和 RAII 资源管理。 |
| 01:05–02:00 | 任务 2 | 增加参数校验、心跳、频率和错误状态诊断。 |
| 02:00–02:55 | 任务 3 | 模拟设备断开和恢复。 |
| 02:55–03:40 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 03:40–04:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜给 rclcpp 虚拟机器人节点增加 configure/activate/deactivate 生命周期和 RAII 资源管理。

1. 在 `logs/day-048.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 每条实际执行命令连同退出码追加到 `evidence/day-048/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜增加参数校验、心跳、频率和错误状态诊断。

1. 在 `logs/day-048.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 每条实际执行命令连同退出码追加到 `evidence/day-048/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜模拟设备断开和恢复。

1. 在 `logs/day-048.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-048/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `colcon build --symlink-install`
- `colcon test`
- `colcon test-result --verbose`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：可诊断的 virtual_robot_node 与故障测试
- 日志：`logs/day-048.md`
- 原始证据目录：`evidence/day-048/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：断开后进入安全非活动状态，恢复必须显式重新激活。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 单点卡住超过 30 分钟：保存完整错误、最小复现和已排除项；把范围缩到一个可测试子问题，剩余项写 `PARTIAL`，不通过延长到深夜制造假进度。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-048.md`：

    # Day 048 Result

    - plan_day: D048
    - scheduled_date: 2026-10-10
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D048 详细执行｜Lifecycle、参数与诊断|← Day 048]] · [[#导航|↑ 文档导航]] · [[#D050 详细执行｜机械臂与 SDK 资产盘点|Day 050 →]]

#### D049 详细执行｜ROS2 阶段验收与 R/S 轨决策

> 计划日期：2026-10-11｜主动投入：2 小时｜第 7 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“week-07-demo.md、启动脚本与 ADR-robot-track.md”，并满足：ROS2 演示可重复；R/S 决策每个前置条件均有 PASS/BLOCKED；未满足时不会因赶进度选择 R 轨。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 048 的结果记录，确认其状态和交付物“可诊断的 virtual_robot_node 与故障测试”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-049.md` 和 `evidence/day-049/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R12 ROS 2 官方文档](https://docs.ros.org/en/jazzy/index.html)；[R15 OpenCV 相机标定](https://docs.opencv.org/4.x/dc/dbb/tutorial_py_calibration.html)；[R20 GitHub Actions 文档](https://docs.github.com/en/actions)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 从新 shell 构建并启动 ROS2 小系统，回放 MCAP、检查 tf 树、相机标定和 diagnostics。 |
| 00:35–01:00 | 任务 2 | 核对机械臂授权、SDK许可、独立急停、示教输入和未来 6 周可用时段；逐项保存证据。 |
| 01:00–01:25 | 任务 3 | 全部满足才选择 R 真机轨，否则选择 S mock/回放轨；写清切换条件和简历边界。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜从新 shell 构建并启动 ROS2 小系统，回放 MCAP、检查 tf 树、相机标定和 diagnostics。

1. 在 `logs/day-049.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 执行前记录当前版本、磁盘空间和回滚点；只按固定版本/commit操作，命令失败时保留完整 stderr，不连续尝试多个来源的安装方案。
3. 完成后从新 shell 或干净 build 目录复验；记录实际版本、产物 hash、退出码和启动现象，避免依赖当前终端的隐式环境变量。
4. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
5. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
6. 每条实际执行命令连同退出码追加到 `evidence/day-049/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜核对机械臂授权、SDK许可、独立急停、示教输入和未来 6 周可用时段；逐项保存证据。

1. 在 `logs/day-049.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 只读列出的官方/一手资料，先写出要回答的 3～5 个问题；阅读时逐条记录“结论、出处、适用版本、仍不确定项”，禁止只收藏链接。
3. 合上资料后用自己的话重写结论，并用一个反例或边界条件检验理解；无法解释的术语放入问题清单，不用“熟悉”代替掌握。
4. 每条实际执行命令连同退出码追加到 `evidence/day-049/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜全部满足才选择 R 真机轨，否则选择 S mock/回放轨；写清切换条件和简历边界。

1. 在 `logs/day-049.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
4. 发布/提交前逐条核对证据 ID、个人贡献、上游来源、R/S轨和禁用表述；运行隐私检查并人工搜索联系方式、设备标识、密钥和公司材料。
5. 记录实际提交版本、目标链接和时间；外部是否回复、合并或录用是后续状态，不在当天伪造成果，也不高频自动化操作网站。
6. 每条实际执行命令连同退出码追加到 `evidence/day-049/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `colcon build --symlink-install`
- `colcon test`
- `colcon test-result --verbose`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：week-07-demo.md、启动脚本与 ADR-robot-track.md
- 日志：`logs/day-049.md`
- 原始证据目录：`evidence/day-049/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：ROS2 演示可重复；R/S 决策每个前置条件均有 PASS/BLOCKED；未满足时不会因赶进度选择 R 轨。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 硬件未到、损坏或无授权：保留接口/解析器/mock测试，真实硬件验收标记 `BLOCKED`；写明预计获得日期，不得用 mock 结果替代波形、总线或真机结果。
- 机械臂授权、独立急停、示教输入、SDK许可或持续排期任一缺失：立即执行 S 轨；不得发送真实动作，也不得在简历中使用“真机”“机械臂项目经验”。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-049.md`：

    # Day 049 Result

    - plan_day: D049
    - scheduled_date: 2026-10-11
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

### 第 8 周详细执行｜机器人接口、Mock/真机与安全

> [!info]- 当日导航
> [[#D049 详细执行｜ROS2 阶段验收与 R/S 轨决策|← Day 049]] · [[#导航|↑ 文档导航]] · [[#D051 详细执行｜Robot I/O 契约|Day 051 →]]

#### D050 详细执行｜机械臂与 SDK 资产盘点

> 计划日期：2026-10-12｜主动投入：2 小时｜第 8 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“hardware-inventory.md 与 license-boundary.md”，并满足：所有未知项有负责人和截止日；无授权的厂商源码不会进入公开仓库。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 049 的结果记录，确认其状态和交付物“week-07-demo.md、启动脚本与 ADR-robot-track.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-050.md` 和 `evidence/day-050/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R05 LeRobot 自定义硬件](https://huggingface.co/docs/lerobot/v0.6.0/en/integrate_hardware)；H01 同学的机械臂与厂商 SDK；H10 示教 / 遥操作输入源；H11 原始数据独立备份介质；A05 机械臂所有者授权与使用排期。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 记录型号、自由度、控制器、舵机/电机、通信方式和 SDK 版本。 |
| 00:35–01:00 | 任务 2 | 核实 ROS/ROS2、Python/C++、Linux 版本和许可证。 |
| 01:00–01:25 | 任务 3 | 确认代码、协议截图、日志和视频的公开边界。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜记录型号、自由度、控制器、舵机/电机、通信方式和 SDK 版本。

1. 在 `logs/day-050.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-050/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜核实 ROS/ROS2、Python/C++、Linux 版本和许可证。

1. 在 `logs/day-050.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-050/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜确认代码、协议截图、日志和视频的公开边界。

1. 在 `logs/day-050.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 发布/提交前逐条核对证据 ID、个人贡献、上游来源、R/S轨和禁用表述；运行隐私检查并人工搜索联系方式、设备标识、密钥和公司材料。
5. 记录实际提交版本、目标链接和时间；外部是否回复、合并或录用是后续状态，不在当天伪造成果，也不高频自动化操作网站。
6. 每条实际执行命令连同退出码追加到 `evidence/day-050/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `cmake -S . -B build -DCMAKE_BUILD_TYPE=Debug`
- `cmake --build build --parallel`
- `ctest --test-dir build --output-on-failure`
- `python -m compileall -q src tools tests`
- `python -m pytest -q`
- `colcon build --symlink-install`
- `colcon test`
- `colcon test-result --verbose`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：hardware-inventory.md 与 license-boundary.md
- 日志：`logs/day-050.md`
- 原始证据目录：`evidence/day-050/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：所有未知项有负责人和截止日；无授权的厂商源码不会进入公开仓库。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 机械臂授权、独立急停、示教输入、SDK许可或持续排期任一缺失：立即执行 S 轨；不得发送真实动作，也不得在简历中使用“真机”“机械臂项目经验”。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-050.md`：

    # Day 050 Result

    - plan_day: D050
    - scheduled_date: 2026-10-12
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D050 详细执行｜机械臂与 SDK 资产盘点|← Day 050]] · [[#导航|↑ 文档导航]] · [[#D052 详细执行｜安全风险评审|Day 052 →]]

#### D051 详细执行｜Robot I/O 契约

> 计划日期：2026-10-13｜主动投入：2 小时｜第 8 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“docs/robot-io-contract.md”，并满足：契约可在不知道厂商内部实现的情况下编写 mock 和测试。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 050 的结果记录，确认其状态和交付物“hardware-inventory.md 与 license-boundary.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-051.md` 和 `evidence/day-051/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R05 LeRobot 自定义硬件](https://huggingface.co/docs/lerobot/v0.6.0/en/integrate_hardware)；[R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 定义 connect、calibrate、get_observation、send_action、disconnect。 |
| 00:35–01:00 | 任务 2 | 固定关节顺序、单位、范围、fps、timestamp 和错误码。 |
| 01:00–01:25 | 任务 3 | 用 JSON 示例描述 observation/action。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜定义 connect、calibrate、get_observation、send_action、disconnect。

1. 在 `logs/day-051.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 每条实际执行命令连同退出码追加到 `evidence/day-051/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜固定关节顺序、单位、范围、fps、timestamp 和错误码。

1. 在 `logs/day-051.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-051/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜用 JSON 示例描述 observation/action。

1. 在 `logs/day-051.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-051/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：docs/robot-io-contract.md
- 日志：`logs/day-051.md`
- 原始证据目录：`evidence/day-051/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：契约可在不知道厂商内部实现的情况下编写 mock 和测试。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 单点卡住超过 30 分钟：保存完整错误、最小复现和已排除项；把范围缩到一个可测试子问题，剩余项写 `PARTIAL`，不通过延长到深夜制造假进度。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-051.md`：

    # Day 051 Result

    - plan_day: D051
    - scheduled_date: 2026-10-13
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D051 详细执行｜Robot I/O 契约|← Day 051]] · [[#导航|↑ 文档导航]] · [[#D053 详细执行｜适配器骨架|Day 053 →]]

#### D052 详细执行｜安全风险评审

> 计划日期：2026-10-14｜主动投入：2 小时｜第 8 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“safety/risk-assessment.md”，并满足：每个高风险项都有预防、检测、响应和责任人；未满足 H05 则禁止上电动作。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 051 的结果记录，确认其状态和交付物“docs/robot-io-contract.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-052.md` 和 `evidence/day-052/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：H05 独立急停与安全工作区；H06 标定与任务物料。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 按启动、校准、遥操作、策略控制、断线、恢复分阶段做风险分析。 |
| 00:35–01:00 | 任务 2 | 确认物理急停、低速模式、工作区和人工看护。 |
| 01:00–01:25 | 任务 3 | 定义禁止自动测试的危险条件。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜按启动、校准、遥操作、策略控制、断线、恢复分阶段做风险分析。

1. 在 `logs/day-052.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 执行前记录当前版本、磁盘空间和回滚点；只按固定版本/commit操作，命令失败时保留完整 stderr，不连续尝试多个来源的安装方案。
5. 完成后从新 shell 或干净 build 目录复验；记录实际版本、产物 hash、退出码和启动现象，避免依赖当前终端的隐式环境变量。
6. 每条实际执行命令连同退出码追加到 `evidence/day-052/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜确认物理急停、低速模式、工作区和人工看护。

1. 在 `logs/day-052.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-052/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜定义禁止自动测试的危险条件。

1. 在 `logs/day-052.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
5. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
6. 每条实际执行命令连同退出码追加到 `evidence/day-052/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `python -m compileall -q src tools tests`
- `python -m pytest -q`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：safety/risk-assessment.md
- 日志：`logs/day-052.md`
- 原始证据目录：`evidence/day-052/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：每个高风险项都有预防、检测、响应和责任人；未满足 H05 则禁止上电动作。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 机械臂授权、独立急停、示教输入、SDK许可或持续排期任一缺失：立即执行 S 轨；不得发送真实动作，也不得在简历中使用“真机”“机械臂项目经验”。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-052.md`：

    # Day 052 Result

    - plan_day: D052
    - scheduled_date: 2026-10-14
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D052 详细执行｜安全风险评审|← Day 052]] · [[#导航|↑ 文档导航]] · [[#D054 详细执行｜Mock、契约测试与故障注入|Day 054 →]]

#### D053 详细执行｜适配器骨架

> 计划日期：2026-10-15｜主动投入：2 小时｜第 8 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“packages/lerobot_robot_edgevla 骨架”，并满足：不修改 LeRobot 上游源码即可发现插件；默认配置不连接真实硬件。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 052 的结果记录，确认其状态和交付物“safety/risk-assessment.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-053.md` 和 `evidence/day-053/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R01 LeRobot v0.6.0 官方仓库](https://github.com/huggingface/lerobot/tree/v0.6.0)；[R05 LeRobot 自定义硬件](https://huggingface.co/docs/lerobot/v0.6.0/en/integrate_hardware)；[R20 GitHub Actions 文档](https://docs.github.com/en/actions)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 基于 LeRobot 扩展方式创建独立 robot 插件。 |
| 00:35–01:00 | 任务 2 | 隔离通用接口、厂商薄适配层和配置。 |
| 01:00–01:25 | 任务 3 | 使用假数据完成注册与 CLI 加载。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜基于 LeRobot 扩展方式创建独立 robot 插件。

1. 在 `logs/day-053.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 每条实际执行命令连同退出码追加到 `evidence/day-053/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜隔离通用接口、厂商薄适配层和配置。

1. 在 `logs/day-053.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 每条实际执行命令连同退出码追加到 `evidence/day-053/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜使用假数据完成注册与 CLI 加载。

1. 在 `logs/day-053.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-053/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `python -m compileall -q src tools tests`
- `python -m pytest -q`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：packages/lerobot_robot_edgevla 骨架
- 日志：`logs/day-053.md`
- 原始证据目录：`evidence/day-053/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：不修改 LeRobot 上游源码即可发现插件；默认配置不连接真实硬件。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 单点卡住超过 30 分钟：保存完整错误、最小复现和已排除项；把范围缩到一个可测试子问题，剩余项写 `PARTIAL`，不通过延长到深夜制造假进度。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-053.md`：

    # Day 053 Result

    - plan_day: D053
    - scheduled_date: 2026-10-15
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D053 详细执行｜适配器骨架|← Day 053]] · [[#导航|↑ 文档导航]] · [[#D055 详细执行｜R 遥操作 / S 仿真示教|Day 055 →]]

#### D054 详细执行｜Mock、契约测试与故障注入

> 计划日期：2026-10-16｜主动投入：2 小时｜第 8 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“MockRobot 与 contract test suite”，并满足：正常路径和至少五类故障均自动测试，错误不会静默转成动作。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 053 的结果记录，确认其状态和交付物“packages/lerobot_robot_edgevla 骨架”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-054.md` 和 `evidence/day-054/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R05 LeRobot 自定义硬件](https://huggingface.co/docs/lerobot/v0.6.0/en/integrate_hardware)；[R20 GitHub Actions 文档](https://docs.github.com/en/actions)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 实现确定性 mock 机械臂。 |
| 00:35–01:00 | 任务 2 | 覆盖断线、超时、越界、时间倒退和部分关节缺失。 |
| 01:00–01:25 | 任务 3 | 编写契约测试供真实适配器复用。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜实现确定性 mock 机械臂。

1. 在 `logs/day-054.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 每条实际执行命令连同退出码追加到 `evidence/day-054/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜覆盖断线、超时、越界、时间倒退和部分关节缺失。

1. 在 `logs/day-054.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-054/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜编写契约测试供真实适配器复用。

1. 在 `logs/day-054.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
5. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
6. 每条实际执行命令连同退出码追加到 `evidence/day-054/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：MockRobot 与 contract test suite
- 日志：`logs/day-054.md`
- 原始证据目录：`evidence/day-054/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：正常路径和至少五类故障均自动测试，错误不会静默转成动作。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 机械臂授权、独立急停、示教输入、SDK许可或持续排期任一缺失：立即执行 S 轨；不得发送真实动作，也不得在简历中使用“真机”“机械臂项目经验”。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-054.md`：

    # Day 054 Result

    - plan_day: D054
    - scheduled_date: 2026-10-16
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D054 详细执行｜Mock、契约测试与故障注入|← Day 054]] · [[#导航|↑ 文档导航]] · [[#D056 详细执行｜可靠性与阶段验收|Day 056 →]]

#### D055 详细执行｜R 遥操作 / S 仿真示教

> 计划日期：2026-10-17｜主动投入：4 小时｜第 8 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“teleop adapter 与操作规程”，并满足：松开 dead-man 后下一控制周期不再产生新动作；10 次演练无越界，R/S 证据明确分开。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 054 的结果记录，确认其状态和交付物“MockRobot 与 contract test suite”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-055.md` 和 `evidence/day-055/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R05 LeRobot 自定义硬件](https://huggingface.co/docs/lerobot/v0.6.0/en/integrate_hardware)；H01 同学的机械臂与厂商 SDK；H05 独立急停与安全工作区；H06 标定与任务物料；H10 示教 / 遥操作输入源。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 4 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–01:05 | 任务 1 | R 轨接入获准的 leader/示教器/gamepad；S 轨用键盘或脚本在仿真中生成示范。 |
| 01:05–02:00 | 任务 2 | 两轨增加 dead-man、人工接管/暂停和状态提示。 |
| 02:00–02:55 | 任务 3 | 完成 10 次标准取放或对应仿真任务演练。 |
| 02:55–03:40 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 03:40–04:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜R 轨接入获准的 leader/示教器/gamepad；S 轨用键盘或脚本在仿真中生成示范。

1. 在 `logs/day-055.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 每条实际执行命令连同退出码追加到 `evidence/day-055/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜两轨增加 dead-man、人工接管/暂停和状态提示。

1. 在 `logs/day-055.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 每条实际执行命令连同退出码追加到 `evidence/day-055/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜完成 10 次标准取放或对应仿真任务演练。

1. 在 `logs/day-055.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-055/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：teleop adapter 与操作规程
- 日志：`logs/day-055.md`
- 原始证据目录：`evidence/day-055/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：松开 dead-man 后下一控制周期不再产生新动作；10 次演练无越界，R/S 证据明确分开。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 机械臂授权、独立急停、示教输入、SDK许可或持续排期任一缺失：立即执行 S 轨；不得发送真实动作，也不得在简历中使用“真机”“机械臂项目经验”。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-055.md`：

    # Day 055 Result

    - plan_day: D055
    - scheduled_date: 2026-10-17
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D055 详细执行｜R 遥操作 / S 仿真示教|← Day 055]] · [[#导航|↑ 文档导航]] · [[#D057 详细执行｜任务定义与成功标准|Day 057 →]]

#### D056 详细执行｜可靠性与阶段验收

> 计划日期：2026-10-18｜主动投入：2 小时｜第 8 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“week-06-hardware-acceptance.md”，并满足：不少于 25 个契约/故障用例全部通过；任一断线不会继续消费旧动作，恢复需要显式确认。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 055 的结果记录，确认其状态和交付物“teleop adapter 与操作规程”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-056.md` 和 `evidence/day-056/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R20 GitHub Actions 文档](https://docs.github.com/en/actions)；H05 独立急停与安全工作区。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 运行 R 或 S 轨的连接、标定/映射、采集/回放、动作、遥操作完整契约测试。 |
| 00:35–01:00 | 任务 2 | 做 USB/网络断开、程序崩溃和重新连接演练。 |
| 01:00–01:25 | 任务 3 | 记录遗留风险。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜运行 R 或 S 轨的连接、标定/映射、采集/回放、动作、遥操作完整契约测试。

1. 在 `logs/day-056.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
4. 每批开始前锁定 task/spec 与数据 schema；每个样本生成唯一 ID，记录来源、R/S轨、时间、操作者/上游、有效性和失败原因。
5. 每完成一小批立即跑质量检查和 checksum；原始数据只追加不静默改写，无效样本保留在 manifest 并标明排除原因。
6. 每条实际执行命令连同退出码追加到 `evidence/day-056/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜做 USB/网络断开、程序崩溃和重新连接演练。

1. 在 `logs/day-056.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-056/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜记录遗留风险。

1. 在 `logs/day-056.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-056/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：week-06-hardware-acceptance.md
- 日志：`logs/day-056.md`
- 原始证据目录：`evidence/day-056/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：不少于 25 个契约/故障用例全部通过；任一断线不会继续消费旧动作，恢复需要显式确认。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 机械臂授权、独立急停、示教输入、SDK许可或持续排期任一缺失：立即执行 S 轨；不得发送真实动作，也不得在简历中使用“真机”“机械臂项目经验”。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-056.md`：

    # Day 056 Result

    - plan_day: D056
    - scheduled_date: 2026-10-18
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

### 第 9 周详细执行｜小规模数据采集与质量控制

> [!info]- 当日导航
> [[#D056 详细执行｜可靠性与阶段验收|← Day 056]] · [[#导航|↑ 文档导航]] · [[#D058 详细执行｜Schema、同步与版本规则|Day 058 →]]

#### D057 详细执行｜任务定义与成功标准

> 计划日期：2026-10-19｜主动投入：2 小时｜第 9 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“dataset/task-spec-v1.md”，并满足：两名未参与编写者独立判断 10 个预录案例，至少 9 个案例结论一致；分歧案例在采集前修正规范。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 056 的结果记录，确认其状态和交付物“week-06-hardware-acceptance.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-057.md` 和 `evidence/day-057/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；[R18 Hugging Face Dataset Cards](https://huggingface.co/docs/hub/en/datasets-cards)；H06 标定与任务物料；A06 独立评审者。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 选择低风险单任务，如多起点抓取并放入盒中。 |
| 00:35–01:00 | 任务 2 | 定义对象、起点、终点、成功、失败、超时和中止。 |
| 01:00–01:25 | 任务 3 | 设计位置和演示风格覆盖表。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜选择低风险单任务，如多起点抓取并放入盒中。

1. 在 `logs/day-057.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-057/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜定义对象、起点、终点、成功、失败、超时和中止。

1. 在 `logs/day-057.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 每条实际执行命令连同退出码追加到 `evidence/day-057/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜设计位置和演示风格覆盖表。

1. 在 `logs/day-057.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 每条实际执行命令连同退出码追加到 `evidence/day-057/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：dataset/task-spec-v1.md
- 日志：`logs/day-057.md`
- 原始证据目录：`evidence/day-057/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：两名未参与编写者独立判断 10 个预录案例，至少 9 个案例结论一致；分歧案例在采集前修正规范。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 单点卡住超过 30 分钟：保存完整错误、最小复现和已排除项；把范围缩到一个可测试子问题，剩余项写 `PARTIAL`，不通过延长到深夜制造假进度。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-057.md`：

    # Day 057 Result

    - plan_day: D057
    - scheduled_date: 2026-10-19
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D057 详细执行｜任务定义与成功标准|← Day 057]] · [[#导航|↑ 文档导航]] · [[#D059 详细执行｜R 试采 / S 公开数据试切片（5个）|Day 059 →]]

#### D058 详细执行｜Schema、同步与版本规则

> 计划日期：2026-10-20｜主动投入：2 小时｜第 9 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“dataset/schema-v1.json 与 versioning.md”，并满足：schema 可机器校验；原始 episode 不被后处理覆盖。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 057 的结果记录，确认其状态和交付物“dataset/task-spec-v1.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-058.md` 和 `evidence/day-058/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；[R18 Hugging Face Dataset Cards](https://huggingface.co/docs/hub/en/datasets-cards)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 固定 feature、单位、fps、相机命名、task 文本和 episode 元数据。 |
| 00:35–01:00 | 任务 2 | 定义时钟、丢帧、过期动作和中途失败的记录规则。 |
| 01:00–01:25 | 任务 3 | 建立数据版本与不可变原始区。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜固定 feature、单位、fps、相机命名、task 文本和 episode 元数据。

1. 在 `logs/day-058.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 每批开始前锁定 task/spec 与数据 schema；每个样本生成唯一 ID，记录来源、R/S轨、时间、操作者/上游、有效性和失败原因。
3. 每完成一小批立即跑质量检查和 checksum；原始数据只追加不静默改写，无效样本保留在 manifest 并标明排除原因。
4. 每条实际执行命令连同退出码追加到 `evidence/day-058/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜定义时钟、丢帧、过期动作和中途失败的记录规则。

1. 在 `logs/day-058.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 每条实际执行命令连同退出码追加到 `evidence/day-058/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜建立数据版本与不可变原始区。

1. 在 `logs/day-058.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 每条实际执行命令连同退出码追加到 `evidence/day-058/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `python -m compileall -q src tools tests`
- `python -m pytest -q`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：dataset/schema-v1.json 与 versioning.md
- 日志：`logs/day-058.md`
- 原始证据目录：`evidence/day-058/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：schema 可机器校验；原始 episode 不被后处理覆盖。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 单点卡住超过 30 分钟：保存完整错误、最小复现和已排除项；把范围缩到一个可测试子问题，剩余项写 `PARTIAL`，不通过延长到深夜制造假进度。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-058.md`：

    # Day 058 Result

    - plan_day: D058
    - scheduled_date: 2026-10-20
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D058 详细执行｜Schema、同步与版本规则|← Day 058]] · [[#导航|↑ 文档导航]] · [[#D060 详细执行｜自动质量检查器|Day 060 →]]

#### D059 详细执行｜R 试采 / S 公开数据试切片（5个）

> 计划日期：2026-10-21｜主动投入：2 小时｜第 9 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“dataset/raw/pilot-5 或 dataset/public-manifest/pilot-5 与日志”，并满足：10 个 episode 全部可解码回放；S 轨保留来源/revision，任何中止或坏样本均保留原因。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 058 的结果记录，确认其状态和交付物“dataset/schema-v1.json 与 versioning.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-059.md` 和 `evidence/day-059/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；H04 固定机位 RGB 摄像头；H05 独立急停与安全工作区；H06 标定与任务物料；H10 示教 / 遥操作输入源；H11 原始数据独立备份介质。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | R 轨按标准流程采集 10 个试验 episode；S 轨从固定公开数据 revision 选择 10 个兼容 episode。 |
| 00:35–01:00 | 任务 2 | 每轮记录起点、操作者、成功、异常和重采原因。 |
| 01:00–01:25 | 任务 3 | 回放抽查动作与图像同步。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜R 轨按标准流程采集 10 个试验 episode；S 轨从固定公开数据 revision 选择 10 个兼容 episode。

1. 在 `logs/day-059.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 每批开始前锁定 task/spec 与数据 schema；每个样本生成唯一 ID，记录来源、R/S轨、时间、操作者/上游、有效性和失败原因。
3. 每完成一小批立即跑质量检查和 checksum；原始数据只追加不静默改写，无效样本保留在 manifest 并标明排除原因。
4. 发布/提交前逐条核对证据 ID、个人贡献、上游来源、R/S轨和禁用表述；运行隐私检查并人工搜索联系方式、设备标识、密钥和公司材料。
5. 记录实际提交版本、目标链接和时间；外部是否回复、合并或录用是后续状态，不在当天伪造成果，也不高频自动化操作网站。
6. 每条实际执行命令连同退出码追加到 `evidence/day-059/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜每轮记录起点、操作者、成功、异常和重采原因。

1. 在 `logs/day-059.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-059/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜回放抽查动作与图像同步。

1. 在 `logs/day-059.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-059/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `python -m compileall -q src tools tests`
- `python -m pytest -q`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：dataset/raw/pilot-5 或 dataset/public-manifest/pilot-5 与日志
- 日志：`logs/day-059.md`
- 原始证据目录：`evidence/day-059/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：10 个 episode 全部可解码回放；S 轨保留来源/revision，任何中止或坏样本均保留原因。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 机械臂授权、独立急停、示教输入、SDK许可或持续排期任一缺失：立即执行 S 轨；不得发送真实动作，也不得在简历中使用“真机”“机械臂项目经验”。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-059.md`：

    # Day 059 Result

    - plan_day: D059
    - scheduled_date: 2026-10-21
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D059 详细执行｜R 试采 / S 公开数据试切片（5个）|← Day 059]] · [[#导航|↑ 文档导航]] · [[#D061 详细执行｜R 第一批采集 / S 第一批兼容样本（10个）|Day 061 →]]

#### D060 详细执行｜自动质量检查器

> 计划日期：2026-10-22｜主动投入：2 小时｜第 9 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“tools/validate_dataset.py 与测试夹具”，并满足：六类错误各制作 2 个固定夹具，共 12 个坏样本全部检出且错误类型正确；结果可导出 CSV/JSON。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 059 的结果记录，确认其状态和交付物“dataset/raw/pilot-5 或 dataset/public-manifest/pilot-5 与日志”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-060.md` 和 `evidence/day-060/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；[R20 GitHub Actions 文档](https://docs.github.com/en/actions)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 检查帧数、fps、时间单调、NaN、关节范围、视频和元数据。 |
| 00:35–01:00 | 任务 2 | 输出 episode 级 pass/warn/fail 与原因。 |
| 01:00–01:25 | 任务 3 | 为已知坏样本建立回归测试。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜检查帧数、fps、时间单调、NaN、关节范围、视频和元数据。

1. 在 `logs/day-060.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-060/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜输出 episode 级 pass/warn/fail 与原因。

1. 在 `logs/day-060.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 每批开始前锁定 task/spec 与数据 schema；每个样本生成唯一 ID，记录来源、R/S轨、时间、操作者/上游、有效性和失败原因。
3. 每完成一小批立即跑质量检查和 checksum；原始数据只追加不静默改写，无效样本保留在 manifest 并标明排除原因。
4. 每条实际执行命令连同退出码追加到 `evidence/day-060/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜为已知坏样本建立回归测试。

1. 在 `logs/day-060.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
5. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
6. 每条实际执行命令连同退出码追加到 `evidence/day-060/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `python -m compileall -q src tools tests`
- `python -m pytest -q`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：tools/validate_dataset.py 与测试夹具
- 日志：`logs/day-060.md`
- 原始证据目录：`evidence/day-060/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：六类错误各制作 2 个固定夹具，共 12 个坏样本全部检出且错误类型正确；结果可导出 CSV/JSON。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 单点卡住超过 30 分钟：保存完整错误、最小复现和已排除项；把范围缩到一个可测试子问题，剩余项写 `PARTIAL`，不通过延长到深夜制造假进度。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-060.md`：

    # Day 060 Result

    - plan_day: D060
    - scheduled_date: 2026-10-22
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D060 详细执行｜自动质量检查器|← Day 060]] · [[#导航|↑ 文档导航]] · [[#D062 详细执行｜R 第二批采集 / S 第二批兼容样本（10个）|Day 062 →]]

#### D061 详细执行｜R 第一批采集 / S 第一批兼容样本（10个）

> 计划日期：2026-10-23｜主动投入：2 小时｜第 9 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“dataset/raw/batch-a-10 或 dataset/public-manifest/batch-a-10”，并满足：25 个有效 episode 覆盖 5 个层次且每层 5 个；质量失败样本被隔离并记录来源和原因。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 060 的结果记录，确认其状态和交付物“tools/validate_dataset.py 与测试夹具”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-061.md` 和 `evidence/day-061/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；H04 固定机位 RGB 摄像头；H05 独立急停与安全工作区；H06 标定与任务物料；H10 示教 / 遥操作输入源；H11 原始数据独立备份介质。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | R 轨按 5 个起始区域各 5 次采集 25 个 episode；S 轨按同一任务/场景层次选择 25 个公开 episode。 |
| 00:35–01:00 | 任务 2 | 每 5 个 episode 运行质量检查并备份。 |
| 01:00–01:25 | 任务 3 | 控制示范速度与动作风格一致。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜R 轨按 5 个起始区域各 5 次采集 25 个 episode；S 轨按同一任务/场景层次选择 25 个公开 episode。

1. 在 `logs/day-061.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 每批开始前锁定 task/spec 与数据 schema；每个样本生成唯一 ID，记录来源、R/S轨、时间、操作者/上游、有效性和失败原因。
3. 每完成一小批立即跑质量检查和 checksum；原始数据只追加不静默改写，无效样本保留在 manifest 并标明排除原因。
4. 发布/提交前逐条核对证据 ID、个人贡献、上游来源、R/S轨和禁用表述；运行隐私检查并人工搜索联系方式、设备标识、密钥和公司材料。
5. 记录实际提交版本、目标链接和时间；外部是否回复、合并或录用是后续状态，不在当天伪造成果，也不高频自动化操作网站。
6. 每条实际执行命令连同退出码追加到 `evidence/day-061/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜每 5 个 episode 运行质量检查并备份。

1. 在 `logs/day-061.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
4. 每批开始前锁定 task/spec 与数据 schema；每个样本生成唯一 ID，记录来源、R/S轨、时间、操作者/上游、有效性和失败原因。
5. 每完成一小批立即跑质量检查和 checksum；原始数据只追加不静默改写，无效样本保留在 manifest 并标明排除原因。
6. 每条实际执行命令连同退出码追加到 `evidence/day-061/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜控制示范速度与动作风格一致。

1. 在 `logs/day-061.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-061/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：dataset/raw/batch-a-10 或 dataset/public-manifest/batch-a-10
- 日志：`logs/day-061.md`
- 原始证据目录：`evidence/day-061/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：25 个有效 episode 覆盖 5 个层次且每层 5 个；质量失败样本被隔离并记录来源和原因。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 机械臂授权、独立急停、示教输入、SDK许可或持续排期任一缺失：立即执行 S 轨；不得发送真实动作，也不得在简历中使用“真机”“机械臂项目经验”。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-061.md`：

    # Day 061 Result

    - plan_day: D061
    - scheduled_date: 2026-10-23
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D061 详细执行｜R 第一批采集 / S 第一批兼容样本（10个）|← Day 061]] · [[#导航|↑ 文档导航]] · [[#D063 详细执行｜划分、Dataset Card 与阶段门|Day 063 →]]

#### D062 详细执行｜R 第二批采集 / S 第二批兼容样本（10个）

> 计划日期：2026-10-24｜主动投入：4 小时｜第 9 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“dataset/raw/batch-b-10 或 dataset/public-manifest/batch-b-10 与 checksums”，并满足：累计至少 50 个通过检查的有效 episode；备份校验一致。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 061 的结果记录，确认其状态和交付物“dataset/raw/batch-a-10 或 dataset/public-manifest/batch-a-10”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-062.md` 和 `evidence/day-062/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；[R18 Hugging Face Dataset Cards](https://huggingface.co/docs/hub/en/datasets-cards)；H04 固定机位 RGB 摄像头；H05 独立急停与安全工作区；H06 标定与任务物料；H10 示教 / 遥操作输入源；H11 原始数据独立备份介质。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 4 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–01:05 | 任务 1 | R 轨补齐另 25 个有效 episode；S 轨选择另一组不重叠的 25 个公开 episode。 |
| 01:05–02:00 | 任务 2 | 由同一判定规则标注成功、失败与中止。 |
| 02:00–02:55 | 任务 3 | 生成采集统计和数据备份校验和。 |
| 02:55–03:40 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 03:40–04:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜R 轨补齐另 25 个有效 episode；S 轨选择另一组不重叠的 25 个公开 episode。

1. 在 `logs/day-062.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 每批开始前锁定 task/spec 与数据 schema；每个样本生成唯一 ID，记录来源、R/S轨、时间、操作者/上游、有效性和失败原因。
3. 每完成一小批立即跑质量检查和 checksum；原始数据只追加不静默改写，无效样本保留在 manifest 并标明排除原因。
4. 发布/提交前逐条核对证据 ID、个人贡献、上游来源、R/S轨和禁用表述；运行隐私检查并人工搜索联系方式、设备标识、密钥和公司材料。
5. 记录实际提交版本、目标链接和时间；外部是否回复、合并或录用是后续状态，不在当天伪造成果，也不高频自动化操作网站。
6. 每条实际执行命令连同退出码追加到 `evidence/day-062/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜由同一判定规则标注成功、失败与中止。

1. 在 `logs/day-062.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 每条实际执行命令连同退出码追加到 `evidence/day-062/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜生成采集统计和数据备份校验和。

1. 在 `logs/day-062.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
4. 每批开始前锁定 task/spec 与数据 schema；每个样本生成唯一 ID，记录来源、R/S轨、时间、操作者/上游、有效性和失败原因。
5. 每完成一小批立即跑质量检查和 checksum；原始数据只追加不静默改写，无效样本保留在 manifest 并标明排除原因。
6. 每条实际执行命令连同退出码追加到 `evidence/day-062/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `python -m compileall -q src tools tests`
- `python -m pytest -q`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：dataset/raw/batch-b-10 或 dataset/public-manifest/batch-b-10 与 checksums
- 日志：`logs/day-062.md`
- 原始证据目录：`evidence/day-062/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：累计至少 50 个通过检查的有效 episode；备份校验一致。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 机械臂授权、独立急停、示教输入、SDK许可或持续排期任一缺失：立即执行 S 轨；不得发送真实动作，也不得在简历中使用“真机”“机械臂项目经验”。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-062.md`：

    # Day 062 Result

    - plan_day: D062
    - scheduled_date: 2026-10-24
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D062 详细执行｜R 第二批采集 / S 第二批兼容样本（10个）|← Day 062]] · [[#导航|↑ 文档导航]] · [[#D064 详细执行｜ACT 配置与数据审查|Day 064 →]]

#### D063 详细执行｜划分、Dataset Card 与阶段门

> 计划日期：2026-10-25｜主动投入：2 小时｜第 9 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“DATASET_CARD.md 与 split manifest”，并满足：25 个样本来源、任务、划分和限制均可追溯；无效样本未静默删除；S轨不声称自行采集。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 062 的结果记录，确认其状态和交付物“dataset/raw/batch-b-10 或 dataset/public-manifest/batch-b-10 与 checksums”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-063.md` 和 `evidence/day-063/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R18 Hugging Face Dataset Cards](https://huggingface.co/docs/hub/en/datasets-cards)；[R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 按初始条件而非随机帧划分 train/val/test。 |
| 00:35–01:00 | 任务 2 | 撰写来源、任务、硬件、采集、许可、限制和隐私说明。 |
| 01:00–01:25 | 任务 3 | 生成只含获准内容的候选发布包。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜按初始条件而非随机帧划分 train/val/test。

1. 在 `logs/day-063.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-063/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜撰写来源、任务、硬件、采集、许可、限制和隐私说明。

1. 在 `logs/day-063.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 每批开始前锁定 task/spec 与数据 schema；每个样本生成唯一 ID，记录来源、R/S轨、时间、操作者/上游、有效性和失败原因。
3. 每完成一小批立即跑质量检查和 checksum；原始数据只追加不静默改写，无效样本保留在 manifest 并标明排除原因。
4. 每条实际执行命令连同退出码追加到 `evidence/day-063/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜生成只含获准内容的候选发布包。

1. 在 `logs/day-063.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 发布/提交前逐条核对证据 ID、个人贡献、上游来源、R/S轨和禁用表述；运行隐私检查并人工搜索联系方式、设备标识、密钥和公司材料。
3. 记录实际提交版本、目标链接和时间；外部是否回复、合并或录用是后续状态，不在当天伪造成果，也不高频自动化操作网站。
4. 每条实际执行命令连同退出码追加到 `evidence/day-063/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `python -m compileall -q src tools tests`
- `python -m pytest -q`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：DATASET_CARD.md 与 split manifest
- 日志：`logs/day-063.md`
- 原始证据目录：`evidence/day-063/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：25 个样本来源、任务、划分和限制均可追溯；无效样本未静默删除；S轨不声称自行采集。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 硬件未到、损坏或无授权：保留接口/解析器/mock测试，真实硬件验收标记 `BLOCKED`；写明预计获得日期，不得用 mock 结果替代波形、总线或真机结果。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-063.md`：

    # Day 063 Result

    - plan_day: D063
    - scheduled_date: 2026-10-25
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

### 第 10 周详细执行｜ACT 小基线与冻结评测

> [!info]- 当日导航
> [[#D063 详细执行｜划分、Dataset Card 与阶段门|← Day 063]] · [[#导航|↑ 文档导航]] · [[#D065 详细执行｜ACT 冒烟训练|Day 065 →]]

#### D064 详细执行｜ACT 配置与数据审查

> 计划日期：2026-10-26｜主动投入：2 小时｜第 10 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“configs/act-task-v1.yaml”，并满足：配置含精确数据版本、代码 commit、随机种子和硬件信息。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 063 的结果记录，确认其状态和交付物“DATASET_CARD.md 与 split manifest”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-064.md` 和 `evidence/day-064/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；[R06 LeRobot ACT 策略文档](https://huggingface.co/docs/lerobot/v0.6.0/en/act)；[R09 LeRobot 算力指南](https://huggingface.co/docs/lerobot/v0.6.0/en/hardware_guide)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 确认 observation/action feature 与归一化统计。 |
| 00:35–01:00 | 任务 2 | 定义 batch、chunk、训练步数、种子和评测协议。 |
| 01:00–01:25 | 任务 3 | 检查 train/test 泄漏。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜确认 observation/action feature 与归一化统计。

1. 在 `logs/day-064.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-064/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜定义 batch、chunk、训练步数、种子和评测协议。

1. 在 `logs/day-064.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
5. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
6. 每条实际执行命令连同退出码追加到 `evidence/day-064/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜检查 train/test 泄漏。

1. 在 `logs/day-064.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-064/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `python -m compileall -q src tools tests`
- `python -m pytest -q`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：configs/act-task-v1.yaml
- 日志：`logs/day-064.md`
- 原始证据目录：`evidence/day-064/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：配置含精确数据版本、代码 commit、随机种子和硬件信息。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- GPU、显存或预算不足：缩小到 1 batch/少量 step 的 smoke，验证数据和恢复链路后停止；完整训练写 `RUNNING` 或 `BLOCKED`，不能因启动成功写成微调完成。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-064.md`：

    # Day 064 Result

    - plan_day: D064
    - scheduled_date: 2026-10-26
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D064 详细执行｜ACT 配置与数据审查|← Day 064]] · [[#导航|↑ 文档导航]] · [[#D066 详细执行｜ACT 正式训练启动与恢复验证|Day 066 →]]

#### D065 详细执行｜ACT 冒烟训练

> 计划日期：2026-10-27｜主动投入：2 小时｜第 10 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“experiments/act-smoke”，并满足：固定 16-episode 子集训练无 NaN，最终 loss 不高于初始值 20%；checkpoint 重载输出最大绝对差不超过 1e-5。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 064 的结果记录，确认其状态和交付物“configs/act-task-v1.yaml”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-065.md` 和 `evidence/day-065/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R06 LeRobot ACT 策略文档](https://huggingface.co/docs/lerobot/v0.6.0/en/act)；[R09 LeRobot 算力指南](https://huggingface.co/docs/lerobot/v0.6.0/en/hardware_guide)；[R17 Weights & Biases 文档](https://docs.wandb.ai/)；H03 NVIDIA GPU 或按量云 GPU。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 小步数训练验证显存、数据加载和 checkpoint。 |
| 00:35–01:00 | 任务 2 | 对一个小 batch 过拟合以检查管线。 |
| 01:00–01:25 | 任务 3 | 估算完整训练成本。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜小步数训练验证显存、数据加载和 checkpoint。

1. 在 `logs/day-065.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
4. 先用 1 batch/少量 step 验证 shape、loss、保存和恢复，再冻结数据 revision、配置、seed、代码 commit 与算力预算后启动正式任务。
5. 观察首个训练/验证周期并主动验证一次 checkpoint 恢复；训练仍在运行时写 RUNNING，不把开始训练、下载权重或官方 demo 当成完成微调。
6. 每条实际执行命令连同退出码追加到 `evidence/day-065/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜对一个小 batch 过拟合以检查管线。

1. 在 `logs/day-065.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-065/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜估算完整训练成本。

1. 在 `logs/day-065.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先用 1 batch/少量 step 验证 shape、loss、保存和恢复，再冻结数据 revision、配置、seed、代码 commit 与算力预算后启动正式任务。
3. 观察首个训练/验证周期并主动验证一次 checkpoint 恢复；训练仍在运行时写 RUNNING，不把开始训练、下载权重或官方 demo 当成完成微调。
4. 每条实际执行命令连同退出码追加到 `evidence/day-065/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `python -m compileall -q src tools tests`
- `python -m pytest -q`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：experiments/act-smoke
- 日志：`logs/day-065.md`
- 原始证据目录：`evidence/day-065/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：固定 16-episode 子集训练无 NaN，最终 loss 不高于初始值 20%；checkpoint 重载输出最大绝对差不超过 1e-5。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- GPU、显存或预算不足：缩小到 1 batch/少量 step 的 smoke，验证数据和恢复链路后停止；完整训练写 `RUNNING` 或 `BLOCKED`，不能因启动成功写成微调完成。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-065.md`：

    # Day 065 Result

    - plan_day: D065
    - scheduled_date: 2026-10-27
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D065 详细执行｜ACT 冒烟训练|← Day 065]] · [[#导航|↑ 文档导航]] · [[#D067 详细执行｜曲线、过拟合与离线检查|Day 067 →]]

#### D066 详细执行｜ACT 正式训练启动与恢复验证

> 计划日期：2026-10-28｜主动投入：2 小时｜第 10 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“experiments/act-v1 完整产物”，并满足：训练可从 checkpoint 恢复；启动两小时不等于训练完成；达到墙钟上限自动停止并保留结果。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 065 的结果记录，确认其状态和交付物“experiments/act-smoke”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-066.md` 和 `evidence/day-066/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R06 LeRobot ACT 策略文档](https://huggingface.co/docs/lerobot/v0.6.0/en/act)；[R09 LeRobot 算力指南](https://huggingface.co/docs/lerobot/v0.6.0/en/hardware_guide)；[R17 Weights & Biases 文档](https://docs.wandb.ai/)；[R28 Hugging Face Jobs GPU 价格](https://huggingface.co/docs/hub/jobs-pricing)；H03 NVIDIA GPU 或按量云 GPU；[A04 按量 GPU 与预算告警](https://huggingface.co/docs/hub/jobs)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 冻结数据 revision、配置、随机种子和代码 commit，先估算显存与最长墙钟时间。 |
| 00:35–01:00 | 任务 2 | 启动训练并设置定时 checkpoint、日志和预算/运行时上限；人工观察首个验证周期后离开。 |
| 01:00–01:25 | 任务 3 | 主动中断一次并从 checkpoint 恢复，确认 step、优化器和指标连续；训练未结束可标记 RUNNING。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜冻结数据 revision、配置、随机种子和代码 commit，先估算显存与最长墙钟时间。

1. 在 `logs/day-066.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 每条实际执行命令连同退出码追加到 `evidence/day-066/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜启动训练并设置定时 checkpoint、日志和预算/运行时上限；人工观察首个验证周期后离开。

1. 在 `logs/day-066.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 执行前记录当前版本、磁盘空间和回滚点；只按固定版本/commit操作，命令失败时保留完整 stderr，不连续尝试多个来源的安装方案。
3. 完成后从新 shell 或干净 build 目录复验；记录实际版本、产物 hash、退出码和启动现象，避免依赖当前终端的隐式环境变量。
4. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
5. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
6. 每条实际执行命令连同退出码追加到 `evidence/day-066/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜主动中断一次并从 checkpoint 恢复，确认 step、优化器和指标连续；训练未结束可标记 RUNNING。

1. 在 `logs/day-066.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先用 1 batch/少量 step 验证 shape、loss、保存和恢复，再冻结数据 revision、配置、seed、代码 commit 与算力预算后启动正式任务。
3. 观察首个训练/验证周期并主动验证一次 checkpoint 恢复；训练仍在运行时写 RUNNING，不把开始训练、下载权重或官方 demo 当成完成微调。
4. 每条实际执行命令连同退出码追加到 `evidence/day-066/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `python -m compileall -q src tools tests`
- `python -m pytest -q`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：experiments/act-v1 完整产物
- 日志：`logs/day-066.md`
- 原始证据目录：`evidence/day-066/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：训练可从 checkpoint 恢复；启动两小时不等于训练完成；达到墙钟上限自动停止并保留结果。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- GPU、显存或预算不足：缩小到 1 batch/少量 step 的 smoke，验证数据和恢复链路后停止；完整训练写 `RUNNING` 或 `BLOCKED`，不能因启动成功写成微调完成。
- 墙钟任务预计 4～12 小时，硬上限 24 小时。云 GPU 必须设置预算和自动停止；超时保留最后 checkpoint，不追加无上限费用。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-066.md`：

    # Day 066 Result

    - plan_day: D066
    - scheduled_date: 2026-10-28
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D066 详细执行｜ACT 正式训练启动与恢复验证|← Day 066]] · [[#导航|↑ 文档导航]] · [[#D068 详细执行｜R 真机 / S 回放推理预检|Day 068 →]]

#### D067 详细执行｜曲线、过拟合与离线检查

> 计划日期：2026-10-29｜主动投入：2 小时｜第 10 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“reports/act-training-analysis.md”，并满足：报告明确 checkpoint 选择规则、异常曲线和至少两个风险假设。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 066 的结果记录，确认其状态和交付物“experiments/act-v1 完整产物”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-067.md` 和 `evidence/day-067/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R17 Weights & Biases 文档](https://docs.wandb.ai/)；[R06 LeRobot ACT 策略文档](https://huggingface.co/docs/lerobot/v0.6.0/en/act)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 比较 train/val loss 和动作预测误差。 |
| 00:35–01:00 | 任务 2 | 检查不同关节和时间步的误差。 |
| 01:00–01:25 | 任务 3 | 选择 checkpoint 时不使用真机测试集调参。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜比较 train/val loss 和动作预测误差。

1. 在 `logs/day-067.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-067/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜检查不同关节和时间步的误差。

1. 在 `logs/day-067.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-067/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜选择 checkpoint 时不使用真机测试集调参。

1. 在 `logs/day-067.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
4. 先用 1 batch/少量 step 验证 shape、loss、保存和恢复，再冻结数据 revision、配置、seed、代码 commit 与算力预算后启动正式任务。
5. 观察首个训练/验证周期并主动验证一次 checkpoint 恢复；训练仍在运行时写 RUNNING，不把开始训练、下载权重或官方 demo 当成完成微调。
6. 每条实际执行命令连同退出码追加到 `evidence/day-067/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：reports/act-training-analysis.md
- 日志：`logs/day-067.md`
- 原始证据目录：`evidence/day-067/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：报告明确 checkpoint 选择规则、异常曲线和至少两个风险假设。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 硬件未到、损坏或无授权：保留接口/解析器/mock测试，真实硬件验收标记 `BLOCKED`；写明预计获得日期，不得用 mock 结果替代波形、总线或真机结果。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-067.md`：

    # Day 067 Result

    - plan_day: D067
    - scheduled_date: 2026-10-29
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D067 详细执行｜曲线、过拟合与离线检查|← Day 067]] · [[#导航|↑ 文档导航]] · [[#D069 详细执行｜R 10 次真机 / S 20 次仿真冻结评测|Day 069 →]]

#### D068 详细执行｜R 真机 / S 回放推理预检

> 计划日期：2026-10-30｜主动投入：2 小时｜第 10 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“safety/policy-preflight-v1.md”，并满足：正常输出通过安全检查，任一异常均被拒绝而不是临时绕过；R 轨保留 3 次真机预检记录，S 轨 5 类注入均被拒绝并标记 simulation-only。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 067 的结果记录，确认其状态和交付物“reports/act-training-analysis.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-068.md` 和 `evidence/day-068/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R24 LeRobot Policy Rollout](https://huggingface.co/docs/lerobot/v0.6.0/en/inference)；H05 独立急停与安全工作区。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 离线回放 checkpoint 输出并经过安全动作层。 |
| 00:35–01:00 | 任务 2 | 检查单位、顺序、范围、动作年龄和初始姿态。 |
| 01:00–01:25 | 任务 3 | R 轨用低速空载完成 3 次受控预检；S 轨向 mock/replay 分别注入单位、顺序、范围、动作年龄和初始姿态 5 类错误。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜离线回放 checkpoint 输出并经过安全动作层。

1. 在 `logs/day-068.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
4. 先用 1 batch/少量 step 验证 shape、loss、保存和恢复，再冻结数据 revision、配置、seed、代码 commit 与算力预算后启动正式任务。
5. 观察首个训练/验证周期并主动验证一次 checkpoint 恢复；训练仍在运行时写 RUNNING，不把开始训练、下载权重或官方 demo 当成完成微调。
6. 每条实际执行命令连同退出码追加到 `evidence/day-068/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜检查单位、顺序、范围、动作年龄和初始姿态。

1. 在 `logs/day-068.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-068/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜R 轨用低速空载完成 3 次受控预检；S 轨向 mock/replay 分别注入单位、顺序、范围、动作年龄和初始姿态 5 类错误。

1. 在 `logs/day-068.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-068/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：safety/policy-preflight-v1.md
- 日志：`logs/day-068.md`
- 原始证据目录：`evidence/day-068/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：正常输出通过安全检查，任一异常均被拒绝而不是临时绕过；R 轨保留 3 次真机预检记录，S 轨 5 类注入均被拒绝并标记 simulation-only。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 硬件未到、损坏或无授权：保留接口/解析器/mock测试，真实硬件验收标记 `BLOCKED`；写明预计获得日期，不得用 mock 结果替代波形、总线或真机结果。
- 机械臂授权、独立急停、示教输入、SDK许可或持续排期任一缺失：立即执行 S 轨；不得发送真实动作，也不得在简历中使用“真机”“机械臂项目经验”。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-068.md`：

    # Day 068 Result

    - plan_day: D068
    - scheduled_date: 2026-10-30
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D068 详细执行｜R 真机 / S 回放推理预检|← Day 068]] · [[#导航|↑ 文档导航]] · [[#D070 详细执行｜失败分类与 ACT 阶段门|Day 070 →]]

#### D069 详细执行｜R 10 次真机 / S 20 次仿真冻结评测

> 计划日期：2026-10-31｜主动投入：4 小时｜第 10 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“evaluations/act-v1/results.csv 与 R/S 原始证据”，并满足：结果行数与计划轮数一致；所有失败存在；成功率附R/S、任务、样本数和版本。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 068 的结果记录，确认其状态和交付物“safety/policy-preflight-v1.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-069.md` 和 `evidence/day-069/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R24 LeRobot Policy Rollout](https://huggingface.co/docs/lerobot/v0.6.0/en/inference)；H01 同学的机械臂与厂商 SDK；H04 固定机位 RGB 摄像头；H05 独立急停与安全工作区；H06 标定与任务物料。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 4 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–01:05 | 任务 1 | 确认评测协议、成功定义、超时和失败分类在看结果前已冻结。 |
| 01:05–02:00 | 任务 2 | R轨低速执行10轮且每轮有人看护；S轨执行20轮固定seed仿真，不混合统计。 |
| 02:00–02:55 | 任务 3 | 逐轮记录成功、失败原因、耗时、恢复动作和原始证据，不只保留最佳视频。 |
| 02:55–03:40 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 03:40–04:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜确认评测协议、成功定义、超时和失败分类在看结果前已冻结。

1. 在 `logs/day-069.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
5. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
6. 每条实际执行命令连同退出码追加到 `evidence/day-069/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜R轨低速执行10轮且每轮有人看护；S轨执行20轮固定seed仿真，不混合统计。

1. 在 `logs/day-069.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-069/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜逐轮记录成功、失败原因、耗时、恢复动作和原始证据，不只保留最佳视频。

1. 在 `logs/day-069.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-069/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `python -m compileall -q src tools tests`
- `python -m pytest -q`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：evaluations/act-v1/results.csv 与 R/S 原始证据
- 日志：`logs/day-069.md`
- 原始证据目录：`evidence/day-069/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：结果行数与计划轮数一致；所有失败存在；成功率附R/S、任务、样本数和版本。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 硬件未到、损坏或无授权：保留接口/解析器/mock测试，真实硬件验收标记 `BLOCKED`；写明预计获得日期，不得用 mock 结果替代波形、总线或真机结果。
- 机械臂授权、独立急停、示教输入、SDK许可或持续排期任一缺失：立即执行 S 轨；不得发送真实动作，也不得在简历中使用“真机”“机械臂项目经验”。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-069.md`：

    # Day 069 Result

    - plan_day: D069
    - scheduled_date: 2026-10-31
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D069 详细执行｜R 10 次真机 / S 20 次仿真冻结评测|← Day 069]] · [[#导航|↑ 文档导航]] · [[#D071 详细执行｜SmolVLA 架构与输入输出审计|Day 071 →]]

#### D070 详细执行｜失败分类与 ACT 阶段门

> 计划日期：2026-11-01｜主动投入：2 小时｜第 10 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“reports/act-v1-evaluation.md”，并满足：所有失败均有证据或标注“根因未知”；未达到目标也如实发布。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 069 的结果记录，确认其状态和交付物“evaluations/act-v1/results.csv 与 R/S 原始证据”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-070.md` 和 `evidence/day-070/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R17 Weights & Biases 文档](https://docs.wandb.ai/)；[R19 Hugging Face Model Cards](https://huggingface.co/docs/hub/en/model-cards)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 将失败归为视觉、初态、动作、机械、通信、安全或评测问题。 |
| 00:35–01:00 | 任务 2 | 计算成功率置信区间、耗时和接管次数。 |
| 01:00–01:25 | 任务 3 | 确定下一轮优先补数据还是改训练。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜将失败归为视觉、初态、动作、机械、通信、安全或评测问题。

1. 在 `logs/day-070.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-070/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜计算成功率置信区间、耗时和接管次数。

1. 在 `logs/day-070.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-070/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜确定下一轮优先补数据还是改训练。

1. 在 `logs/day-070.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先用 1 batch/少量 step 验证 shape、loss、保存和恢复，再冻结数据 revision、配置、seed、代码 commit 与算力预算后启动正式任务。
3. 观察首个训练/验证周期并主动验证一次 checkpoint 恢复；训练仍在运行时写 RUNNING，不把开始训练、下载权重或官方 demo 当成完成微调。
4. 每条实际执行命令连同退出码追加到 `evidence/day-070/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `python -m compileall -q src tools tests`
- `python -m pytest -q`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：reports/act-v1-evaluation.md
- 日志：`logs/day-070.md`
- 原始证据目录：`evidence/day-070/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：所有失败均有证据或标注“根因未知”；未达到目标也如实发布。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- GPU、显存或预算不足：缩小到 1 batch/少量 step 的 smoke，验证数据和恢复链路后停止；完整训练写 `RUNNING` 或 `BLOCKED`，不能因启动成功写成微调完成。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-070.md`：

    # Day 070 Result

    - plan_day: D070
    - scheduled_date: 2026-11-01
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

### 第 11 周详细执行｜SmolVLA 小规模验证与泛化

> [!info]- 当日导航
> [[#D070 详细执行｜失败分类与 ACT 阶段门|← Day 070]] · [[#导航|↑ 文档导航]] · [[#D072 详细执行｜算力、依赖与显存冒烟|Day 072 →]]

#### D071 详细执行｜SmolVLA 架构与输入输出审计

> 计划日期：2026-11-02｜主动投入：2 小时｜第 11 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“docs/smolvla-dataflow.md”，并满足：完成 15 道 shape/归一化/action chunk 自测且正确不少于 12 道；不照抄模型宣传语。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 070 的结果记录，确认其状态和交付物“reports/act-v1-evaluation.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-071.md` 和 `evidence/day-071/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R07 SmolVLA 官方说明](https://huggingface.co/blog/smolvla)；[R25 SmolVLA 官方微调指南](https://huggingface.co/docs/lerobot/v0.6.0/en/smolvla)；[R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 梳理视觉编码、语言、本体状态、动作专家和 flow matching。 |
| 00:35–01:00 | 任务 2 | 分别打印 R 轨自采或 S 轨 LIBERO batch 的每个 tensor shape。 |
| 01:00–01:25 | 任务 3 | 对照 ACT 标出共享和不同的管线。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜梳理视觉编码、语言、本体状态、动作专家和 flow matching。

1. 在 `logs/day-071.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 只读列出的官方/一手资料，先写出要回答的 3～5 个问题；阅读时逐条记录“结论、出处、适用版本、仍不确定项”，禁止只收藏链接。
3. 合上资料后用自己的话重写结论，并用一个反例或边界条件检验理解；无法解释的术语放入问题清单，不用“熟悉”代替掌握。
4. 每条实际执行命令连同退出码追加到 `evidence/day-071/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜分别打印 R 轨自采或 S 轨 LIBERO batch 的每个 tensor shape。

1. 在 `logs/day-071.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-071/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜对照 ACT 标出共享和不同的管线。

1. 在 `logs/day-071.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-071/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `python -m compileall -q src tools tests`
- `python -m pytest -q`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：docs/smolvla-dataflow.md
- 日志：`logs/day-071.md`
- 原始证据目录：`evidence/day-071/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：完成 15 道 shape/归一化/action chunk 自测且正确不少于 12 道；不照抄模型宣传语。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 机械臂授权、独立急停、示教输入、SDK许可或持续排期任一缺失：立即执行 S 轨；不得发送真实动作，也不得在简历中使用“真机”“机械臂项目经验”。
- GPU、显存或预算不足：缩小到 1 batch/少量 step 的 smoke，验证数据和恢复链路后停止；完整训练写 `RUNNING` 或 `BLOCKED`，不能因启动成功写成微调完成。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-071.md`：

    # Day 071 Result

    - plan_day: D071
    - scheduled_date: 2026-11-02
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D071 详细执行｜SmolVLA 架构与输入输出审计|← Day 071]] · [[#导航|↑ 文档导航]] · [[#D073 详细执行｜语言条件任务设计|Day 073 →]]

#### D072 详细执行｜算力、依赖与显存冒烟

> 计划日期：2026-11-03｜主动投入：2 小时｜第 11 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“experiments/smolvla-smoke”，并满足：冒烟任务 30 分钟内完成或被自动终止；记录峰值显存、step/s，并据此填写 max_runtime 与 max_cost。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 071 的结果记录，确认其状态和交付物“docs/smolvla-dataflow.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-072.md` 和 `evidence/day-072/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R07 SmolVLA 官方说明](https://huggingface.co/blog/smolvla)；[R09 LeRobot 算力指南](https://huggingface.co/docs/lerobot/v0.6.0/en/hardware_guide)；[R28 Hugging Face Jobs GPU 价格](https://huggingface.co/docs/hub/jobs-pricing)；H03 NVIDIA GPU 或按量云 GPU；[A04 按量 GPU 与预算告警](https://huggingface.co/docs/hub/jobs)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 建立独立 SmolVLA 配置和依赖快照。 |
| 00:35–01:00 | 任务 2 | 用小 batch 做前向/反向并记录显存。 |
| 01:00–01:25 | 任务 3 | 设置云任务最大时长与预算。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜建立独立 SmolVLA 配置和依赖快照。

1. 在 `logs/day-072.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 每条实际执行命令连同退出码追加到 `evidence/day-072/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜用小 batch 做前向/反向并记录显存。

1. 在 `logs/day-072.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-072/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜设置云任务最大时长与预算。

1. 在 `logs/day-072.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-072/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `python -m compileall -q src tools tests`
- `python -m pytest -q`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：experiments/smolvla-smoke
- 日志：`logs/day-072.md`
- 原始证据目录：`evidence/day-072/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：冒烟任务 30 分钟内完成或被自动终止；记录峰值显存、step/s，并据此填写 max_runtime 与 max_cost。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- GPU、显存或预算不足：缩小到 1 batch/少量 step 的 smoke，验证数据和恢复链路后停止；完整训练写 `RUNNING` 或 `BLOCKED`，不能因启动成功写成微调完成。
- 墙钟任务预计 15–30 分钟，硬上限 30 分钟。仅使用最小 batch；超过配置上限自动终止

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-072.md`：

    # Day 072 Result

    - plan_day: D072
    - scheduled_date: 2026-11-03
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D072 详细执行｜算力、依赖与显存冒烟|← Day 072]] · [[#导航|↑ 文档导航]] · [[#D074 详细执行｜数据总审与 SmolVLA 微调启动|Day 074 →]]

#### D073 详细执行｜语言条件任务设计

> 计划日期：2026-11-04｜主动投入：2 小时｜第 11 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“dataset/language-task-spec.md”，并满足：如果去掉语言，至少两种场景无法由视觉唯一决定；3×10 条测试改写与训练文本零重叠。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 072 的结果记录，确认其状态和交付物“experiments/smolvla-smoke”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-073.md` 和 `evidence/day-073/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R07 SmolVLA 官方说明](https://huggingface.co/blog/smolvla)；[R25 SmolVLA 官方微调指南](https://huggingface.co/docs/lerobot/v0.6.0/en/smolvla)；[R18 Hugging Face Dataset Cards](https://huggingface.co/docs/hub/en/datasets-cards)；H06 标定与任务物料。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 定义三种必须依靠语言区分、且动作/状态 schema 相同的取放任务。 |
| 00:35–01:00 | 任务 2 | 每任务冻结训练指令和 10 条未见同义改写，并设计错误/含糊指令边界。 |
| 01:00–01:25 | 任务 3 | 冻结训练与泛化评测指令集。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜定义三种必须依靠语言区分、且动作/状态 schema 相同的取放任务。

1. 在 `logs/day-073.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 每条实际执行命令连同退出码追加到 `evidence/day-073/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜每任务冻结训练指令和 10 条未见同义改写，并设计错误/含糊指令边界。

1. 在 `logs/day-073.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 先用 1 batch/少量 step 验证 shape、loss、保存和恢复，再冻结数据 revision、配置、seed、代码 commit 与算力预算后启动正式任务。
5. 观察首个训练/验证周期并主动验证一次 checkpoint 恢复；训练仍在运行时写 RUNNING，不把开始训练、下载权重或官方 demo 当成完成微调。
6. 每条实际执行命令连同退出码追加到 `evidence/day-073/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜冻结训练与泛化评测指令集。

1. 在 `logs/day-073.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
4. 先用 1 batch/少量 step 验证 shape、loss、保存和恢复，再冻结数据 revision、配置、seed、代码 commit 与算力预算后启动正式任务。
5. 观察首个训练/验证周期并主动验证一次 checkpoint 恢复；训练仍在运行时写 RUNNING，不把开始训练、下载权重或官方 demo 当成完成微调。
6. 每条实际执行命令连同退出码追加到 `evidence/day-073/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `python -m compileall -q src tools tests`
- `python -m pytest -q`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：dataset/language-task-spec.md
- 日志：`logs/day-073.md`
- 原始证据目录：`evidence/day-073/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：如果去掉语言，至少两种场景无法由视觉唯一决定；3×10 条测试改写与训练文本零重叠。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- GPU、显存或预算不足：缩小到 1 batch/少量 step 的 smoke，验证数据和恢复链路后停止；完整训练写 `RUNNING` 或 `BLOCKED`，不能因启动成功写成微调完成。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-073.md`：

    # Day 073 Result

    - plan_day: D073
    - scheduled_date: 2026-11-04
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D073 详细执行｜语言条件任务设计|← Day 073]] · [[#导航|↑ 文档导航]] · [[#D075 详细执行｜训练收尾、Checkpoint 初评与上线门|Day 075 →]]

#### D074 详细执行｜数据总审与 SmolVLA 微调启动

> 计划日期：2026-11-05｜主动投入：2 小时｜第 11 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“experiments/smolvla-v1”，并满足：数据审计通过后才启动；训练配置、模型revision、数据revision和预算上限均已冻结；未完成可写RUNNING。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 073 的结果记录，确认其状态和交付物“dataset/language-task-spec.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-074.md` 和 `evidence/day-074/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R07 SmolVLA 官方说明](https://huggingface.co/blog/smolvla)；[R25 SmolVLA 官方微调指南](https://huggingface.co/docs/lerobot/v0.6.0/en/smolvla)；[R09 LeRobot 算力指南](https://huggingface.co/docs/lerobot/v0.6.0/en/hardware_guide)；[R17 Weights & Biases 文档](https://docs.wandb.ai/)；[R28 Hugging Face Jobs GPU 价格](https://huggingface.co/docs/hub/jobs-pricing)；H03 NVIDIA GPU 或按量云 GPU；[A03 实验跟踪账号](https://wandb.ai/)；[A04 按量 GPU 与预算告警](https://huggingface.co/docs/hub/jobs)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 对 150 个 episode 做最终质量、划分和泄漏检查，并在 16-episode 子集上过拟合。 |
| 00:35–01:00 | 任务 2 | 过拟合门通过后启动预注册配置的完整微调，保存模型、数据 revision、环境、预算和成本。 |
| 01:00–01:25 | 任务 3 | 设置 max_runtime/max_cost/OOM 自动终止；所有重试生成新 experiment_id。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜对 150 个 episode 做最终质量、划分和泄漏检查，并在 16-episode 子集上过拟合。

1. 在 `logs/day-074.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 每批开始前锁定 task/spec 与数据 schema；每个样本生成唯一 ID，记录来源、R/S轨、时间、操作者/上游、有效性和失败原因。
3. 每完成一小批立即跑质量检查和 checksum；原始数据只追加不静默改写，无效样本保留在 manifest 并标明排除原因。
4. 每条实际执行命令连同退出码追加到 `evidence/day-074/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜过拟合门通过后启动预注册配置的完整微调，保存模型、数据 revision、环境、预算和成本。

1. 在 `logs/day-074.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 执行前记录当前版本、磁盘空间和回滚点；只按固定版本/commit操作，命令失败时保留完整 stderr，不连续尝试多个来源的安装方案。
5. 完成后从新 shell 或干净 build 目录复验；记录实际版本、产物 hash、退出码和启动现象，避免依赖当前终端的隐式环境变量。
6. 每条实际执行命令连同退出码追加到 `evidence/day-074/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜设置 max_runtime/max_cost/OOM 自动终止；所有重试生成新 experiment_id。

1. 在 `logs/day-074.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-074/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `python -m compileall -q src tools tests`
- `python -m pytest -q`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：experiments/smolvla-v1
- 日志：`logs/day-074.md`
- 原始证据目录：`evidence/day-074/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：数据审计通过后才启动；训练配置、模型revision、数据revision和预算上限均已冻结；未完成可写RUNNING。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- GPU、显存或预算不足：缩小到 1 batch/少量 step 的 smoke，验证数据和恢复链路后停止；完整训练写 `RUNNING` 或 `BLOCKED`，不能因启动成功写成微调完成。
- 墙钟任务预计 8～24 小时，硬上限 36 小时。先smoke再付费；超过预算或墙钟上限自动停止。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-074.md`：

    # Day 074 Result

    - plan_day: D074
    - scheduled_date: 2026-11-05
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D074 详细执行｜数据总审与 SmolVLA 微调启动|← Day 074]] · [[#导航|↑ 文档导航]] · [[#D076 详细执行｜未见位置评测|Day 076 →]]

#### D075 详细执行｜训练收尾、Checkpoint 初评与上线门

> 计划日期：2026-11-06｜主动投入：2 小时｜第 11 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“safety/smolvla-preflight.md”，并满足：checkpoint 可加载、无 NaN、所有测试动作通过守卫；R 轨另需 3 次低速预检。任一失败则阻断第 10 周自动 rollout。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 074 的结果记录，确认其状态和交付物“experiments/smolvla-v1”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-075.md` 和 `evidence/day-075/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R07 SmolVLA 官方说明](https://huggingface.co/blog/smolvla)；[R24 LeRobot Policy Rollout](https://huggingface.co/docs/lerobot/v0.6.0/en/inference)；H05 独立急停与安全工作区。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:29 | 任务 1 | 检查训练是否在硬上限内完成；未完成则终止并保留负面结果，不无限续费。 |
| 00:29–00:48 | 任务 2 | 完成离线输出、动作范围、语言敏感性和 checkpoint 加载检查。 |
| 00:48–01:07 | 任务 3 | 选择 checkpoint 并冻结真机评测配置。 |
| 01:07–01:25 | 任务 4 | 更新 R 轨真机或 S 轨仿真预检清单。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜检查训练是否在硬上限内完成；未完成则终止并保留负面结果，不无限续费。

1. 在 `logs/day-075.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先用 1 batch/少量 step 验证 shape、loss、保存和恢复，再冻结数据 revision、配置、seed、代码 commit 与算力预算后启动正式任务。
3. 观察首个训练/验证周期并主动验证一次 checkpoint 恢复；训练仍在运行时写 RUNNING，不把开始训练、下载权重或官方 demo 当成完成微调。
4. 每条实际执行命令连同退出码追加到 `evidence/day-075/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜完成离线输出、动作范围、语言敏感性和 checkpoint 加载检查。

1. 在 `logs/day-075.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先用 1 batch/少量 step 验证 shape、loss、保存和恢复，再冻结数据 revision、配置、seed、代码 commit 与算力预算后启动正式任务。
3. 观察首个训练/验证周期并主动验证一次 checkpoint 恢复；训练仍在运行时写 RUNNING，不把开始训练、下载权重或官方 demo 当成完成微调。
4. 每条实际执行命令连同退出码追加到 `evidence/day-075/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜选择 checkpoint 并冻结真机评测配置。

1. 在 `logs/day-075.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
5. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
6. 每条实际执行命令连同退出码追加到 `evidence/day-075/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 4｜更新 R 轨真机或 S 轨仿真预检清单。

1. 在 `logs/day-075.md` 的 `task_04` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-075/task-04-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `python -m compileall -q src tools tests`
- `python -m pytest -q`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：safety/smolvla-preflight.md
- 日志：`logs/day-075.md`
- 原始证据目录：`evidence/day-075/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：checkpoint 可加载、无 NaN、所有测试动作通过守卫；R 轨另需 3 次低速预检。任一失败则阻断第 10 周自动 rollout。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 硬件未到、损坏或无授权：保留接口/解析器/mock测试，真实硬件验收标记 `BLOCKED`；写明预计获得日期，不得用 mock 结果替代波形、总线或真机结果。
- 机械臂授权、独立急停、示教输入、SDK许可或持续排期任一缺失：立即执行 S 轨；不得发送真实动作，也不得在简历中使用“真机”“机械臂项目经验”。
- GPU、显存或预算不足：缩小到 1 batch/少量 step 的 smoke，验证数据和恢复链路后停止；完整训练写 `RUNNING` 或 `BLOCKED`，不能因启动成功写成微调完成。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-075.md`：

    # Day 075 Result

    - plan_day: D075
    - scheduled_date: 2026-11-06
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D075 详细执行｜训练收尾、Checkpoint 初评与上线门|← Day 075]] · [[#导航|↑ 文档导航]] · [[#D077 详细执行｜语言、位置与光照三类汇总|Day 077 →]]

#### D076 详细执行｜未见位置评测

> 计划日期：2026-11-07｜主动投入：4 小时｜第 11 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“evaluations/generalization/unseen-position.csv”，并满足：ACT 与 SmolVLA 各完成 10 个冻结起点 episode；20 轮均有逐轮结果和失败视频索引。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 075 的结果记录，确认其状态和交付物“safety/smolvla-preflight.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-076.md` 和 `evidence/day-076/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R24 LeRobot Policy Rollout](https://huggingface.co/docs/lerobot/v0.6.0/en/inference)；H05 独立急停与安全工作区；H06 标定与任务物料。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 4 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–01:05 | 任务 1 | 在训练集未覆盖的预定义位置运行 ACT 与 SmolVLA。 |
| 01:05–02:00 | 任务 2 | 每模型使用相同起点和判定。 |
| 02:00–02:55 | 任务 3 | 记录成功率、耗时和失败类型。 |
| 02:55–03:40 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 03:40–04:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜在训练集未覆盖的预定义位置运行 ACT 与 SmolVLA。

1. 在 `logs/day-076.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
5. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
6. 每条实际执行命令连同退出码追加到 `evidence/day-076/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜每模型使用相同起点和判定。

1. 在 `logs/day-076.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先用 1 batch/少量 step 验证 shape、loss、保存和恢复，再冻结数据 revision、配置、seed、代码 commit 与算力预算后启动正式任务。
3. 观察首个训练/验证周期并主动验证一次 checkpoint 恢复；训练仍在运行时写 RUNNING，不把开始训练、下载权重或官方 demo 当成完成微调。
4. 每条实际执行命令连同退出码追加到 `evidence/day-076/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜记录成功率、耗时和失败类型。

1. 在 `logs/day-076.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-076/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `python -m compileall -q src tools tests`
- `python -m pytest -q`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：evaluations/generalization/unseen-position.csv
- 日志：`logs/day-076.md`
- 原始证据目录：`evidence/day-076/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：ACT 与 SmolVLA 各完成 10 个冻结起点 episode；20 轮均有逐轮结果和失败视频索引。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 机械臂授权、独立急停、示教输入、SDK许可或持续排期任一缺失：立即执行 S 轨；不得发送真实动作，也不得在简历中使用“真机”“机械臂项目经验”。
- GPU、显存或预算不足：缩小到 1 batch/少量 step 的 smoke，验证数据和恢复链路后停止；完整训练写 `RUNNING` 或 `BLOCKED`，不能因启动成功写成微调完成。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-076.md`：

    # Day 076 Result

    - plan_day: D076
    - scheduled_date: 2026-11-07
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D076 详细执行｜未见位置评测|← Day 076]] · [[#导航|↑ 文档导航]] · [[#D078 详细执行｜Policy Server 与 Robot Client|Day 078 →]]

#### D077 详细执行｜语言、位置与光照三类汇总

> 计划日期：2026-11-08｜主动投入：2 小时｜第 11 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“reports/act-vs-smolvla-small.md”，并满足：三类评测均有冻结协议和逐轮记录；结论不外推到未测试对象、相机或真实环境。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 076 的结果记录，确认其状态和交付物“evaluations/generalization/unseen-position.csv”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-077.md` 和 `evidence/day-077/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R07 SmolVLA 官方说明](https://huggingface.co/blog/smolvla)；[R24 LeRobot Policy Rollout](https://huggingface.co/docs/lerobot/v0.6.0/en/inference)；H05 独立急停与安全工作区。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 完成未见位置、指令改写和光照变化结果校验，其他变化维度留到后续90天。 |
| 00:35–01:00 | 任务 2 | 按同一表结构比较 ACT 与 SmolVLA，禁止合并 R/S、不同任务或不同样本量。 |
| 01:00–01:25 | 任务 3 | 写出至少三个失败案例、适用边界和下一轮数据决策。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜完成未见位置、指令改写和光照变化结果校验，其他变化维度留到后续90天。

1. 在 `logs/day-077.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-077/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜按同一表结构比较 ACT 与 SmolVLA，禁止合并 R/S、不同任务或不同样本量。

1. 在 `logs/day-077.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 每批开始前锁定 task/spec 与数据 schema；每个样本生成唯一 ID，记录来源、R/S轨、时间、操作者/上游、有效性和失败原因。
3. 每完成一小批立即跑质量检查和 checksum；原始数据只追加不静默改写，无效样本保留在 manifest 并标明排除原因。
4. 每条实际执行命令连同退出码追加到 `evidence/day-077/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜写出至少三个失败案例、适用边界和下一轮数据决策。

1. 在 `logs/day-077.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-077/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `python -m compileall -q src tools tests`
- `python -m pytest -q`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：reports/act-vs-smolvla-small.md
- 日志：`logs/day-077.md`
- 原始证据目录：`evidence/day-077/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：三类评测均有冻结协议和逐轮记录；结论不外推到未测试对象、相机或真实环境。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 机械臂授权、独立急停、示教输入、SDK许可或持续排期任一缺失：立即执行 S 轨；不得发送真实动作，也不得在简历中使用“真机”“机械臂项目经验”。
- GPU、显存或预算不足：缩小到 1 batch/少量 step 的 smoke，验证数据和恢复链路后停止；完整训练写 `RUNNING` 或 `BLOCKED`，不能因启动成功写成微调完成。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-077.md`：

    # Day 077 Result

    - plan_day: D077
    - scheduled_date: 2026-11-08
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

### 第 12 周详细执行｜异步推理、弱网与本地安全

> [!info]- 当日导航
> [[#D077 详细执行｜语言、位置与光照三类汇总|← Day 077]] · [[#导航|↑ 文档导航]] · [[#D079 详细执行｜端到端时延可观测性|Day 079 →]]

#### D078 详细执行｜Policy Server 与 Robot Client

> 计划日期：2026-11-09｜主动投入：2 小时｜第 12 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“async/local-baseline 与时序图”，并满足：局域网连续运行 30 分钟无未处理异常；停止 server 后 2 个控制周期内停止接收新动作，超时后旧动作执行数为 0。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 077 的结果记录，确认其状态和交付物“reports/act-vs-smolvla-small.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-078.md` 和 `evidence/day-078/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R10 LeRobot 异步推理](https://huggingface.co/docs/lerobot/v0.6.0/en/async)；[R11 LeRobot RTC](https://huggingface.co/docs/lerobot/v0.6.0/en/rtc)；[R24 LeRobot Policy Rollout](https://huggingface.co/docs/lerobot/v0.6.0/en/inference)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 按 D70 选择分支：ACT 使用同步/通用 async queue；SmolVLA 等 flow-matching policy 才启用 RTC。 |
| 00:35–01:00 | 任务 2 | 记录 observation 请求、动作 chunk 返回和消费时序。 |
| 01:00–01:25 | 任务 3 | 隔离推理通道与安全控制通道。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜按 D70 选择分支：ACT 使用同步/通用 async queue；SmolVLA 等 flow-matching policy 才启用 RTC。

1. 在 `logs/day-078.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-078/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜记录 observation 请求、动作 chunk 返回和消费时序。

1. 在 `logs/day-078.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-078/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜隔离推理通道与安全控制通道。

1. 在 `logs/day-078.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-078/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `python -m compileall -q src tools tests`
- `python -m pytest -q`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：async/local-baseline 与时序图
- 日志：`logs/day-078.md`
- 原始证据目录：`evidence/day-078/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：局域网连续运行 30 分钟无未处理异常；停止 server 后 2 个控制周期内停止接收新动作，超时后旧动作执行数为 0。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- GPU、显存或预算不足：缩小到 1 batch/少量 step 的 smoke，验证数据和恢复链路后停止；完整训练写 `RUNNING` 或 `BLOCKED`，不能因启动成功写成微调完成。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-078.md`：

    # Day 078 Result

    - plan_day: D078
    - scheduled_date: 2026-11-09
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D078 详细执行｜Policy Server 与 Robot Client|← Day 078]] · [[#导航|↑ 文档导航]] · [[#D080 详细执行｜动作年龄与队列水位|Day 080 →]]

#### D079 详细执行｜端到端时延可观测性

> 计划日期：2026-11-10｜主动投入：2 小时｜第 12 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“observability/latency_metrics.py”，并满足：单个动作可追溯完整链路；指标能区分网络、排队和推理耗时。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 078 的结果记录，确认其状态和交付物“async/local-baseline 与时序图”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-079.md` 和 `evidence/day-079/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R10 LeRobot 异步推理](https://huggingface.co/docs/lerobot/v0.6.0/en/async)；[R22 Linux tc-netem](https://man7.org/linux/man-pages/man8/tc-netem.8.html)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 在采集、发送、排队、推理、接收、执行各处增加时间戳。 |
| 00:35–01:00 | 任务 2 | 计算 P50/P95/P99 和时钟偏差。 |
| 01:00–01:25 | 任务 3 | 建立 trace_id 关联日志。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜在采集、发送、排队、推理、接收、执行各处增加时间戳。

1. 在 `logs/day-079.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 每批开始前锁定 task/spec 与数据 schema；每个样本生成唯一 ID，记录来源、R/S轨、时间、操作者/上游、有效性和失败原因。
5. 每完成一小批立即跑质量检查和 checksum；原始数据只追加不静默改写，无效样本保留在 manifest 并标明排除原因。
6. 每条实际执行命令连同退出码追加到 `evidence/day-079/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜计算 P50/P95/P99 和时钟偏差。

1. 在 `logs/day-079.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-079/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜建立 trace_id 关联日志。

1. 在 `logs/day-079.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 每条实际执行命令连同退出码追加到 `evidence/day-079/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：observability/latency_metrics.py
- 日志：`logs/day-079.md`
- 原始证据目录：`evidence/day-079/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：单个动作可追溯完整链路；指标能区分网络、排队和推理耗时。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 单点卡住超过 30 分钟：保存完整错误、最小复现和已排除项；把范围缩到一个可测试子问题，剩余项写 `PARTIAL`，不通过延长到深夜制造假进度。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-079.md`：

    # Day 079 Result

    - plan_day: D079
    - scheduled_date: 2026-11-10
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D079 详细执行｜端到端时延可观测性|← Day 079]] · [[#导航|↑ 文档导航]] · [[#D081 详细执行｜限位、看门狗与状态机|Day 081 →]]

#### D080 详细执行｜动作年龄与队列水位

> 计划日期：2026-11-11｜主动投入：2 小时｜第 12 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“safety/action_queue_guard.py”，并满足：超过阈值的旧动作不会执行；每次丢弃都有原因和计数。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 079 的结果记录，确认其状态和交付物“observability/latency_metrics.py”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-080.md` 和 `evidence/day-080/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R10 LeRobot 异步推理](https://huggingface.co/docs/lerobot/v0.6.0/en/async)；[R11 LeRobot RTC](https://huggingface.co/docs/lerobot/v0.6.0/en/rtc)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 记录动作生成时间、消费时间、队列水位和欠载。 |
| 00:35–01:00 | 任务 2 | 实现 stale action 丢弃与最小/最大队列阈值。 |
| 01:00–01:25 | 任务 3 | 通过人工延迟验证。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜记录动作生成时间、消费时间、队列水位和欠载。

1. 在 `logs/day-080.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-080/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜实现 stale action 丢弃与最小/最大队列阈值。

1. 在 `logs/day-080.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 每条实际执行命令连同退出码追加到 `evidence/day-080/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜通过人工延迟验证。

1. 在 `logs/day-080.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-080/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：safety/action_queue_guard.py
- 日志：`logs/day-080.md`
- 原始证据目录：`evidence/day-080/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：超过阈值的旧动作不会执行；每次丢弃都有原因和计数。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 单点卡住超过 30 分钟：保存完整错误、最小复现和已排除项；把范围缩到一个可测试子问题，剩余项写 `PARTIAL`，不通过延长到深夜制造假进度。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-080.md`：

    # Day 080 Result

    - plan_day: D080
    - scheduled_date: 2026-11-11
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D080 详细执行｜动作年龄与队列水位|← Day 080]] · [[#导航|↑ 文档导航]] · [[#D082 详细执行｜断线与恢复策略|Day 082 →]]

#### D081 详细执行｜限位、看门狗与状态机

> 计划日期：2026-11-12｜主动投入：2 小时｜第 12 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“safety/supervisor_state_machine.py”，并满足：所有危险状态只能进入 FAULT/ESTOP；复位需要显式操作且不能跳过标定。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 080 的结果记录，确认其状态和交付物“safety/action_queue_guard.py”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-081.md` 和 `evidence/day-081/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：H05 独立急停与安全工作区；[R20 GitHub Actions 文档](https://docs.github.com/en/actions)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 将软限位、步长、速度、心跳和状态新鲜度统一进安全状态机。 |
| 00:35–01:00 | 任务 2 | 定义 SAFE_IDLE、READY、RUNNING、FAULT、ESTOP。 |
| 01:00–01:25 | 任务 3 | 覆盖非法状态转换。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜将软限位、步长、速度、心跳和状态新鲜度统一进安全状态机。

1. 在 `logs/day-081.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 每条实际执行命令连同退出码追加到 `evidence/day-081/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜定义 SAFE_IDLE、READY、RUNNING、FAULT、ESTOP。

1. 在 `logs/day-081.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 每条实际执行命令连同退出码追加到 `evidence/day-081/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜覆盖非法状态转换。

1. 在 `logs/day-081.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 每条实际执行命令连同退出码追加到 `evidence/day-081/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：safety/supervisor_state_machine.py
- 日志：`logs/day-081.md`
- 原始证据目录：`evidence/day-081/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：所有危险状态只能进入 FAULT/ESTOP；复位需要显式操作且不能跳过标定。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 机械臂授权、独立急停、示教输入、SDK许可或持续排期任一缺失：立即执行 S 轨；不得发送真实动作，也不得在简历中使用“真机”“机械臂项目经验”。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-081.md`：

    # Day 081 Result

    - plan_day: D081
    - scheduled_date: 2026-11-12
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D081 详细执行｜限位、看门狗与状态机|← Day 081]] · [[#导航|↑ 文档导航]] · [[#D083 详细执行｜局域网、netem 与一次真实4G对比|Day 083 →]]

#### D082 详细执行｜断线与恢复策略

> 计划日期：2026-11-13｜主动投入：2 小时｜第 12 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“tests/fault_disconnect_matrix.md”，并满足：四类断线均不会消费旧动作；恢复必须通过健康检查和人工确认。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 081 的结果记录，确认其状态和交付物“safety/supervisor_state_machine.py”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-082.md` 和 `evidence/day-082/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R10 LeRobot 异步推理](https://huggingface.co/docs/lerobot/v0.6.0/en/async)；[R22 Linux tc-netem](https://man7.org/linux/man-pages/man8/tc-netem.8.html)；H05 独立急停与安全工作区。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 分别模拟相机、机器人、Policy Server 和网络断开。 |
| 00:35–01:00 | 任务 2 | 定义停止、保持、安全姿态与重连行为。 |
| 01:00–01:25 | 任务 3 | 测量检测和恢复时间。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜分别模拟相机、机器人、Policy Server 和网络断开。

1. 在 `logs/day-082.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-082/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜定义停止、保持、安全姿态与重连行为。

1. 在 `logs/day-082.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 每条实际执行命令连同退出码追加到 `evidence/day-082/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜测量检测和恢复时间。

1. 在 `logs/day-082.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-082/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `python -m compileall -q src tools tests`
- `python -m pytest -q`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：tests/fault_disconnect_matrix.md
- 日志：`logs/day-082.md`
- 原始证据目录：`evidence/day-082/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：四类断线均不会消费旧动作；恢复必须通过健康检查和人工确认。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 机械臂授权、独立急停、示教输入、SDK许可或持续排期任一缺失：立即执行 S 轨；不得发送真实动作，也不得在简历中使用“真机”“机械臂项目经验”。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-082.md`：

    # Day 082 Result

    - plan_day: D082
    - scheduled_date: 2026-11-13
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D082 详细执行｜断线与恢复策略|← Day 082]] · [[#导航|↑ 文档导航]] · [[#D084 详细执行｜弱网结论与安全阶段门|Day 084 →]]

#### D083 详细执行｜局域网、netem 与一次真实4G对比

> 计划日期：2026-11-14｜主动投入：4 小时｜第 12 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“evaluations/network-v1/results.csv”，并满足：每种网络配置至少3轮且保留原始时延/丢包；真实4G受环境限制单独报告；不声称网络结论具有普遍性。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 082 的结果记录，确认其状态和交付物“tests/fault_disconnect_matrix.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-083.md` 和 `evidence/day-083/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R10 LeRobot 异步推理](https://huggingface.co/docs/lerobot/v0.6.0/en/async)；[R11 LeRobot RTC](https://huggingface.co/docs/lerobot/v0.6.0/en/rtc)；[R22 Linux tc-netem](https://man7.org/linux/man-pages/man8/tc-netem.8.html)；H05 独立急停与安全工作区；H07 4G 网络与可控网络环境。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 4 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–01:05 | 任务 1 | 按冻结协议运行三类网络条件。 |
| 01:05–02:00 | 任务 2 | 记录任务成功、完成时间、P95 时延、欠载、旧动作和安全拦截。 |
| 02:00–02:55 | 任务 3 | R 轨在真实 4G 环境保持人工看护与独立急停；S 轨让 mock/replay 经过相同网络链路并明确不做物理安全声明。 |
| 02:55–03:40 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 03:40–04:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜按冻结协议运行三类网络条件。

1. 在 `logs/day-083.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
5. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
6. 每条实际执行命令连同退出码追加到 `evidence/day-083/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜记录任务成功、完成时间、P95 时延、欠载、旧动作和安全拦截。

1. 在 `logs/day-083.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-083/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜R 轨在真实 4G 环境保持人工看护与独立急停；S 轨让 mock/replay 经过相同网络链路并明确不做物理安全声明。

1. 在 `logs/day-083.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 执行前记录当前版本、磁盘空间和回滚点；只按固定版本/commit操作，命令失败时保留完整 stderr，不连续尝试多个来源的安装方案。
3. 完成后从新 shell 或干净 build 目录复验；记录实际版本、产物 hash、退出码和启动现象，避免依赖当前终端的隐式环境变量。
4. 每条实际执行命令连同退出码追加到 `evidence/day-083/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：evaluations/network-v1/results.csv
- 日志：`logs/day-083.md`
- 原始证据目录：`evidence/day-083/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：每种网络配置至少3轮且保留原始时延/丢包；真实4G受环境限制单独报告；不声称网络结论具有普遍性。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 机械臂授权、独立急停、示教输入、SDK许可或持续排期任一缺失：立即执行 S 轨；不得发送真实动作，也不得在简历中使用“真机”“机械臂项目经验”。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-083.md`：

    # Day 083 Result

    - plan_day: D083
    - scheduled_date: 2026-11-14
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D083 详细执行｜局域网、netem 与一次真实4G对比|← Day 083]] · [[#导航|↑ 文档导航]] · [[#D085 详细执行｜实验注册表后端|Day 085 →]]

#### D084 详细执行｜弱网结论与安全阶段门

> 计划日期：2026-11-15｜主动投入：2 小时｜第 12 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“reports/network-and-safety-v1.md”，并满足：报告不宣称 4G 是硬实时控制；所有建议都由测量或安全原则支持。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 083 的结果记录，确认其状态和交付物“evaluations/network-v1/results.csv”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-084.md` 和 `evidence/day-084/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R19 Hugging Face Model Cards](https://huggingface.co/docs/hub/en/model-cards)；H05 独立急停与安全工作区。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 计算指标和置信区间，分析动作队列阈值。 |
| 00:35–01:00 | 任务 2 | 明确哪些网络条件只允许遥测、哪些可低速实验。 |
| 01:00–01:25 | 任务 3 | 形成边云安全限制声明。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜计算指标和置信区间，分析动作队列阈值。

1. 在 `logs/day-084.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-084/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜明确哪些网络条件只允许遥测、哪些可低速实验。

1. 在 `logs/day-084.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-084/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜形成边云安全限制声明。

1. 在 `logs/day-084.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-084/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：reports/network-and-safety-v1.md
- 日志：`logs/day-084.md`
- 原始证据目录：`evidence/day-084/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：报告不宣称 4G 是硬实时控制；所有建议都由测量或安全原则支持。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 机械臂授权、独立急停、示教输入、SDK许可或持续排期任一缺失：立即执行 S 轨；不得发送真实动作，也不得在简历中使用“真机”“机械臂项目经验”。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-084.md`：

    # Day 084 Result

    - plan_day: D084
    - scheduled_date: 2026-11-15
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

### 第 13 周详细执行｜实验记录平台与最小 HMI

> [!info]- 当日导航
> [[#D084 详细执行｜弱网结论与安全阶段门|← Day 084]] · [[#导航|↑ 文档导航]] · [[#D086 详细执行｜Web 实验与健康面板|Day 086 →]]

#### D085 详细执行｜实验注册表后端

> 计划日期：2026-11-16｜主动投入：2 小时｜第 13 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“platform/api 与 OpenAPI 文档”，并满足：实验记录不可被静默改写；错误输入和未授权请求有测试。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 084 的结果记录，确认其状态和交付物“reports/network-and-safety-v1.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-085.md` 和 `evidence/day-085/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R20 GitHub Actions 文档](https://docs.github.com/en/actions)；[R21 Docker 文档](https://docs.docker.com/)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 用 Go 或 Python 实现设备、数据、模型、实验和评测元数据 API。 |
| 00:35–01:00 | 任务 2 | 采用不可变实验记录和显式状态转换。 |
| 01:00–01:25 | 任务 3 | 增加输入校验和最小权限。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜用 Go 或 Python 实现设备、数据、模型、实验和评测元数据 API。

1. 在 `logs/day-085.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
5. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
6. 每条实际执行命令连同退出码追加到 `evidence/day-085/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜采用不可变实验记录和显式状态转换。

1. 在 `logs/day-085.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 每条实际执行命令连同退出码追加到 `evidence/day-085/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜增加输入校验和最小权限。

1. 在 `logs/day-085.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 每条实际执行命令连同退出码追加到 `evidence/day-085/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `python -m compileall -q src tools tests`
- `python -m pytest -q`
- `npm run typecheck`
- `npm test`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：platform/api 与 OpenAPI 文档
- 日志：`logs/day-085.md`
- 原始证据目录：`evidence/day-085/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：实验记录不可被静默改写；错误输入和未授权请求有测试。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 单点卡住超过 30 分钟：保存完整错误、最小复现和已排除项；把范围缩到一个可测试子问题，剩余项写 `PARTIAL`，不通过延长到深夜制造假进度。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-085.md`：

    # Day 085 Result

    - plan_day: D085
    - scheduled_date: 2026-11-16
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D085 详细执行｜实验注册表后端|← Day 085]] · [[#导航|↑ 文档导航]] · [[#D087 详细执行｜Flutter 移动 HMI|Day 087 →]]

#### D086 详细执行｜Web 实验与健康面板

> 计划日期：2026-11-17｜主动投入：2 小时｜第 13 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“platform/web-dashboard”，并满足：超过 2 个预期遥测周期即显示 STALE；断网、过期、FAULT 三类快照测试全部标红且不显示“实时正常”。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 085 的结果记录，确认其状态和交付物“platform/api 与 OpenAPI 文档”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-086.md` 和 `evidence/day-086/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R20 GitHub Actions 文档](https://docs.github.com/en/actions)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 展示设备健康、网络、动作队列、模型版本和任务结果。 |
| 00:35–01:00 | 任务 2 | 支持按 experiment_id 定位日志和视频。 |
| 01:00–01:25 | 任务 3 | 显式区分实时值、延迟值和离线统计。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜展示设备健康、网络、动作队列、模型版本和任务结果。

1. 在 `logs/day-086.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先用 1 batch/少量 step 验证 shape、loss、保存和恢复，再冻结数据 revision、配置、seed、代码 commit 与算力预算后启动正式任务。
3. 观察首个训练/验证周期并主动验证一次 checkpoint 恢复；训练仍在运行时写 RUNNING，不把开始训练、下载权重或官方 demo 当成完成微调。
4. 每条实际执行命令连同退出码追加到 `evidence/day-086/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜支持按 experiment_id 定位日志和视频。

1. 在 `logs/day-086.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-086/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜显式区分实时值、延迟值和离线统计。

1. 在 `logs/day-086.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-086/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `npm run typecheck`
- `npm test`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：platform/web-dashboard
- 日志：`logs/day-086.md`
- 原始证据目录：`evidence/day-086/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：超过 2 个预期遥测周期即显示 STALE；断网、过期、FAULT 三类快照测试全部标红且不显示“实时正常”。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 单点卡住超过 30 分钟：保存完整错误、最小复现和已排除项；把范围缩到一个可测试子问题，剩余项写 `PARTIAL`，不通过延长到深夜制造假进度。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-086.md`：

    # Day 086 Result

    - plan_day: D086
    - scheduled_date: 2026-11-17
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D086 详细执行｜Web 实验与健康面板|← Day 086]] · [[#导航|↑ 文档导航]] · [[#D088 详细执行｜视频、日志与轨迹同步|Day 088 →]]

#### D087 详细执行｜Flutter 移动 HMI

> 计划日期：2026-11-18｜主动投入：2 小时｜第 13 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“apps/edgevla_hmi 最小版本”，并满足：覆盖离线、三种角色、二次确认、服务端拒绝共不少于 12 个测试；所有非法场景的动作请求数为 0。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 086 的结果记录，确认其状态和交付物“platform/web-dashboard”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-087.md` 和 `evidence/day-087/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R31 OWASP MASVS 移动端安全标准](https://mas.owasp.org/MASVS/)；H07 4G 网络与可控网络环境。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 复用现有 Flutter 能力实现状态查看、采集控制和人工接管入口。 |
| 00:35–01:00 | 任务 2 | 高风险动作要求二次确认并受服务端状态机约束。 |
| 01:00–01:25 | 任务 3 | 离线时只读并提示过期。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜复用现有 Flutter 能力实现状态查看、采集控制和人工接管入口。

1. 在 `logs/day-087.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 每批开始前锁定 task/spec 与数据 schema；每个样本生成唯一 ID，记录来源、R/S轨、时间、操作者/上游、有效性和失败原因。
5. 每完成一小批立即跑质量检查和 checksum；原始数据只追加不静默改写，无效样本保留在 manifest 并标明排除原因。
6. 每条实际执行命令连同退出码追加到 `evidence/day-087/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜高风险动作要求二次确认并受服务端状态机约束。

1. 在 `logs/day-087.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 每条实际执行命令连同退出码追加到 `evidence/day-087/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜离线时只读并提示过期。

1. 在 `logs/day-087.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-087/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `flutter analyze`
- `flutter test`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：apps/edgevla_hmi 最小版本
- 日志：`logs/day-087.md`
- 原始证据目录：`evidence/day-087/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：覆盖离线、三种角色、二次确认、服务端拒绝共不少于 12 个测试；所有非法场景的动作请求数为 0。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 单点卡住超过 30 分钟：保存完整错误、最小复现和已排除项；把范围缩到一个可测试子问题，剩余项写 `PARTIAL`，不通过延长到深夜制造假进度。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-087.md`：

    # Day 087 Result

    - plan_day: D087
    - scheduled_date: 2026-11-18
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D087 详细执行｜Flutter 移动 HMI|← Day 087]] · [[#导航|↑ 文档导航]] · [[#D089 详细执行｜失败标注与数据闭环|Day 089 →]]

#### D088 详细执行｜视频、日志与轨迹同步

> 计划日期：2026-11-19｜主动投入：2 小时｜第 13 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“platform/timeline-viewer”，并满足：从失败结果一键定位到对应视频帧、动作、日志和网络事件。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 087 的结果记录，确认其状态和交付物“apps/edgevla_hmi 最小版本”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-088.md` 和 `evidence/day-088/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；[R20 GitHub Actions 文档](https://docs.github.com/en/actions)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 在面板中对齐 episode 视频、状态、动作和网络事件。 |
| 00:35–01:00 | 任务 2 | 支持跳转失败时间点。 |
| 01:00–01:25 | 任务 3 | 用同一时钟基准展示误差。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜在面板中对齐 episode 视频、状态、动作和网络事件。

1. 在 `logs/day-088.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 每批开始前锁定 task/spec 与数据 schema；每个样本生成唯一 ID，记录来源、R/S轨、时间、操作者/上游、有效性和失败原因。
3. 每完成一小批立即跑质量检查和 checksum；原始数据只追加不静默改写，无效样本保留在 manifest 并标明排除原因。
4. 每条实际执行命令连同退出码追加到 `evidence/day-088/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜支持跳转失败时间点。

1. 在 `logs/day-088.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-088/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜用同一时钟基准展示误差。

1. 在 `logs/day-088.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-088/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `npm run typecheck`
- `npm test`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：platform/timeline-viewer
- 日志：`logs/day-088.md`
- 原始证据目录：`evidence/day-088/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：从失败结果一键定位到对应视频帧、动作、日志和网络事件。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 单点卡住超过 30 分钟：保存完整错误、最小复现和已排除项；把范围缩到一个可测试子问题，剩余项写 `PARTIAL`，不通过延长到深夜制造假进度。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-088.md`：

    # Day 088 Result

    - plan_day: D088
    - scheduled_date: 2026-11-19
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D088 详细执行｜视频、日志与轨迹同步|← Day 088]] · [[#导航|↑ 文档导航]] · [[#D090 详细执行｜认证、配置与安全审查|Day 090 →]]

#### D089 详细执行｜失败标注与数据闭环

> 计划日期：2026-11-20｜主动投入：2 小时｜第 13 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“platform/failure-review 与采集清单”，并满足：标注有审计记录；新数据与原评测测试集隔离。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 088 的结果记录，确认其状态和交付物“platform/timeline-viewer”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-089.md` 和 `evidence/day-089/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R18 Hugging Face Dataset Cards](https://huggingface.co/docs/hub/en/datasets-cards)；[R20 GitHub Actions 文档](https://docs.github.com/en/actions)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 增加失败类别、严重度、根因置信度和处理建议。 |
| 00:35–01:00 | 任务 2 | 从评测选择待补采场景，不直接修改原始数据。 |
| 01:00–01:25 | 任务 3 | 导出下一轮采集清单。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜增加失败类别、严重度、根因置信度和处理建议。

1. 在 `logs/day-089.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 每条实际执行命令连同退出码追加到 `evidence/day-089/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜从评测选择待补采场景，不直接修改原始数据。

1. 在 `logs/day-089.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-089/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜导出下一轮采集清单。

1. 在 `logs/day-089.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 每批开始前锁定 task/spec 与数据 schema；每个样本生成唯一 ID，记录来源、R/S轨、时间、操作者/上游、有效性和失败原因。
3. 每完成一小批立即跑质量检查和 checksum；原始数据只追加不静默改写，无效样本保留在 manifest 并标明排除原因。
4. 每条实际执行命令连同退出码追加到 `evidence/day-089/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `python -m compileall -q src tools tests`
- `python -m pytest -q`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：platform/failure-review 与采集清单
- 日志：`logs/day-089.md`
- 原始证据目录：`evidence/day-089/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：标注有审计记录；新数据与原评测测试集隔离。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 单点卡住超过 30 分钟：保存完整错误、最小复现和已排除项；把范围缩到一个可测试子问题，剩余项写 `PARTIAL`，不通过延长到深夜制造假进度。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-089.md`：

    # Day 089 Result

    - plan_day: D089
    - scheduled_date: 2026-11-20
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D089 详细执行｜失败标注与数据闭环|← Day 089]] · [[#导航|↑ 文档导航]] · [[#D091 详细执行｜平台端到端阶段门|Day 091 →]]

#### D090 详细执行｜认证、配置与安全审查

> 计划日期：2026-11-21｜主动投入：4 小时｜第 13 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“platform/security-review.md”，并满足：无默认弱密码、硬编码密钥或匿名控制接口；高风险操作均可审计。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 089 的结果记录，确认其状态和交付物“platform/failure-review 与采集清单”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-090.md` 和 `evidence/day-090/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R20 GitHub Actions 文档](https://docs.github.com/en/actions)；[R21 Docker 文档](https://docs.docker.com/)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 4 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–01:05 | 任务 1 | 区分观察者、操作者和管理员权限。 |
| 01:05–02:00 | 任务 2 | 将密钥、设备配置和模型配置外置。 |
| 02:00–02:55 | 任务 3 | 审查上传、日志隐私和远程控制入口。 |
| 02:55–03:40 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 03:40–04:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜区分观察者、操作者和管理员权限。

1. 在 `logs/day-090.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-090/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜将密钥、设备配置和模型配置外置。

1. 在 `logs/day-090.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 先用 1 batch/少量 step 验证 shape、loss、保存和恢复，再冻结数据 revision、配置、seed、代码 commit 与算力预算后启动正式任务。
5. 观察首个训练/验证周期并主动验证一次 checkpoint 恢复；训练仍在运行时写 RUNNING，不把开始训练、下载权重或官方 demo 当成完成微调。
6. 每条实际执行命令连同退出码追加到 `evidence/day-090/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜审查上传、日志隐私和远程控制入口。

1. 在 `logs/day-090.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-090/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：platform/security-review.md
- 日志：`logs/day-090.md`
- 原始证据目录：`evidence/day-090/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：无默认弱密码、硬编码密钥或匿名控制接口；高风险操作均可审计。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 单点卡住超过 30 分钟：保存完整错误、最小复现和已排除项；把范围缩到一个可测试子问题，剩余项写 `PARTIAL`，不通过延长到深夜制造假进度。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-090.md`：

    # Day 090 Result

    - plan_day: D090
    - scheduled_date: 2026-11-21
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D090 详细执行｜认证、配置与安全审查|← Day 090]] · [[#导航|↑ 文档导航]] · [[#D092 详细执行｜容器与依赖分层|Day 092 →]]

#### D091 详细执行｜平台端到端阶段门

> 计划日期：2026-11-22｜主动投入：2 小时｜第 13 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“week-13-e2e-report.md 与原始演示视频”，并满足：采集、登记、部署、评测、标注、告警六条主链路及设备/网络两条故障链路共 8 项全部通过；平台停止后本地安全状态机测试仍通过。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 090 的结果记录，确认其状态和交付物“platform/security-review.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-091.md` 和 `evidence/day-091/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R20 GitHub Actions 文档](https://docs.github.com/en/actions)；H07 4G 网络与可控网络环境。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 演练采集、训练登记、部署、评测、失败标注和告警。 |
| 00:35–01:00 | 任务 2 | 模拟设备和网络断开。 |
| 01:00–01:25 | 任务 3 | 录制未经剪辑的端到端演示。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜演练采集、训练登记、部署、评测、失败标注和告警。

1. 在 `logs/day-091.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
4. 每批开始前锁定 task/spec 与数据 schema；每个样本生成唯一 ID，记录来源、R/S轨、时间、操作者/上游、有效性和失败原因。
5. 每完成一小批立即跑质量检查和 checksum；原始数据只追加不静默改写，无效样本保留在 manifest 并标明排除原因。
6. 每条实际执行命令连同退出码追加到 `evidence/day-091/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜模拟设备和网络断开。

1. 在 `logs/day-091.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-091/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜录制未经剪辑的端到端演示。

1. 在 `logs/day-091.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-091/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `python -m compileall -q src tools tests`
- `python -m pytest -q`
- `npm run typecheck`
- `npm test`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：week-13-e2e-report.md 与原始演示视频
- 日志：`logs/day-091.md`
- 原始证据目录：`evidence/day-091/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：采集、登记、部署、评测、标注、告警六条主链路及设备/网络两条故障链路共 8 项全部通过；平台停止后本地安全状态机测试仍通过。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- GPU、显存或预算不足：缩小到 1 batch/少量 step 的 smoke，验证数据和恢复链路后停止；完整训练写 `RUNNING` 或 `BLOCKED`，不能因启动成功写成微调完成。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-091.md`：

    # Day 091 Result

    - plan_day: D091
    - scheduled_date: 2026-11-22
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

### 第 14 周详细执行｜测试、容器、性能与恢复

> [!info]- 当日导航
> [[#D091 详细执行｜平台端到端阶段门|← Day 091]] · [[#导航|↑ 文档导航]] · [[#D093 详细执行｜配置、密钥与环境校验|Day 093 →]]

#### D092 详细执行｜容器与依赖分层

> 计划日期：2026-11-23｜主动投入：2 小时｜第 14 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“containers/ 与 compose.yaml”，并满足：CPU 镜像可在无 GPU 环境运行测试；镜像不含隐私数据或许可证不明文件。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 091 的结果记录，确认其状态和交付物“week-13-e2e-report.md 与原始演示视频”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-092.md` 和 `evidence/day-092/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R21 Docker 文档](https://docs.docker.com/)；[R20 GitHub Actions 文档](https://docs.github.com/en/actions)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 为 CPU 工具、GPU 训练和平台服务分别设计镜像。 |
| 00:35–01:00 | 任务 2 | 固定基础镜像与依赖哈希。 |
| 01:00–01:25 | 任务 3 | 排除数据、权重和设备私有 SDK。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜为 CPU 工具、GPU 训练和平台服务分别设计镜像。

1. 在 `logs/day-092.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 先用 1 batch/少量 step 验证 shape、loss、保存和恢复，再冻结数据 revision、配置、seed、代码 commit 与算力预算后启动正式任务。
5. 观察首个训练/验证周期并主动验证一次 checkpoint 恢复；训练仍在运行时写 RUNNING，不把开始训练、下载权重或官方 demo 当成完成微调。
6. 每条实际执行命令连同退出码追加到 `evidence/day-092/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜固定基础镜像与依赖哈希。

1. 在 `logs/day-092.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-092/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜排除数据、权重和设备私有 SDK。

1. 在 `logs/day-092.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-092/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `python -m compileall -q src tools tests`
- `python -m pytest -q`
- `docker compose config --quiet`
- `docker compose build`
- `npm run typecheck`
- `npm test`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：containers/ 与 compose.yaml
- 日志：`logs/day-092.md`
- 原始证据目录：`evidence/day-092/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：CPU 镜像可在无 GPU 环境运行测试；镜像不含隐私数据或许可证不明文件。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- GPU、显存或预算不足：缩小到 1 batch/少量 step 的 smoke，验证数据和恢复链路后停止；完整训练写 `RUNNING` 或 `BLOCKED`，不能因启动成功写成微调完成。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-092.md`：

    # Day 092 Result

    - plan_day: D092
    - scheduled_date: 2026-11-23
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D092 详细执行｜容器与依赖分层|← Day 092]] · [[#导航|↑ 文档导航]] · [[#D094 详细执行｜单元测试补齐|Day 094 →]]

#### D093 详细执行｜配置、密钥与环境校验

> 计划日期：2026-11-24｜主动投入：2 小时｜第 14 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“config schema 与 preflight 命令”，并满足：缺失密钥、错误关节数、错误模型或危险参数均在运动前失败。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 092 的结果记录，确认其状态和交付物“containers/ 与 compose.yaml”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-093.md` 和 `evidence/day-093/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R20 GitHub Actions 文档](https://docs.github.com/en/actions)；[R21 Docker 文档](https://docs.docker.com/)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 建立分层配置和 schema 校验。 |
| 00:35–01:00 | 任务 2 | 增加启动前硬件、端口、模型和数据兼容性检查。 |
| 01:00–01:25 | 任务 3 | 提供安全示例配置。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜建立分层配置和 schema 校验。

1. 在 `logs/day-093.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
5. 把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
6. 每条实际执行命令连同退出码追加到 `evidence/day-093/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜增加启动前硬件、端口、模型和数据兼容性检查。

1. 在 `logs/day-093.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 执行前记录当前版本、磁盘空间和回滚点；只按固定版本/commit操作，命令失败时保留完整 stderr，不连续尝试多个来源的安装方案。
5. 完成后从新 shell 或干净 build 目录复验；记录实际版本、产物 hash、退出码和启动现象，避免依赖当前终端的隐式环境变量。
6. 每条实际执行命令连同退出码追加到 `evidence/day-093/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜提供安全示例配置。

1. 在 `logs/day-093.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 每条实际执行命令连同退出码追加到 `evidence/day-093/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `python -m compileall -q src tools tests`
- `python -m pytest -q`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：config schema 与 preflight 命令
- 日志：`logs/day-093.md`
- 原始证据目录：`evidence/day-093/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：缺失密钥、错误关节数、错误模型或危险参数均在运动前失败。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 硬件未到、损坏或无授权：保留接口/解析器/mock测试，真实硬件验收标记 `BLOCKED`；写明预计获得日期，不得用 mock 结果替代波形、总线或真机结果。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-093.md`：

    # Day 093 Result

    - plan_day: D093
    - scheduled_date: 2026-11-24
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D093 详细执行｜配置、密钥与环境校验|← Day 093]] · [[#导航|↑ 文档导航]] · [[#D095 详细执行｜R 硬件在环 / S 模拟集成测试|Day 095 →]]

#### D094 详细执行｜单元测试补齐

> 计划日期：2026-11-25｜主动投入：2 小时｜第 14 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“unit test suite 与覆盖率报告”，并满足：所有安全关键分支有直接测试；测试不依赖真实机械臂。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 093 的结果记录，确认其状态和交付物“config schema 与 preflight 命令”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-094.md` 和 `evidence/day-094/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R20 GitHub Actions 文档](https://docs.github.com/en/actions)；[R34 C++ Core Guidelines](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines)；[R35 CMake 官方教程](https://cmake.org/cmake/help/latest/guide/tutorial/)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 覆盖 Python 与 C++ 的接口映射、归一化、时间戳、动作限幅、状态机和报告统计。 |
| 00:35–01:00 | 任务 2 | 加入边界值和性质测试。 |
| 01:00–01:25 | 任务 3 | 设置覆盖率基线但不以覆盖率代替场景测试。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜覆盖 Python 与 C++ 的接口映射、归一化、时间戳、动作限幅、状态机和报告统计。

1. 在 `logs/day-094.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
5. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
6. 每条实际执行命令连同退出码追加到 `evidence/day-094/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜加入边界值和性质测试。

1. 在 `logs/day-094.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-094/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜设置覆盖率基线但不以覆盖率代替场景测试。

1. 在 `logs/day-094.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-094/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `cmake -S . -B build -DCMAKE_BUILD_TYPE=Debug`
- `cmake --build build --parallel`
- `ctest --test-dir build --output-on-failure`
- `python -m compileall -q src tools tests`
- `python -m pytest -q`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：unit test suite 与覆盖率报告
- 日志：`logs/day-094.md`
- 原始证据目录：`evidence/day-094/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：所有安全关键分支有直接测试；测试不依赖真实机械臂。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 单点卡住超过 30 分钟：保存完整错误、最小复现和已排除项；把范围缩到一个可测试子问题，剩余项写 `PARTIAL`，不通过延长到深夜制造假进度。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-094.md`：

    # Day 094 Result

    - plan_day: D094
    - scheduled_date: 2026-11-25
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D094 详细执行｜单元测试补齐|← Day 094]] · [[#导航|↑ 文档导航]] · [[#D096 详细执行｜GitHub Actions CI|Day 096 →]]

#### D095 详细执行｜R 硬件在环 / S 模拟集成测试

> 计划日期：2026-11-26｜主动投入：2 小时｜第 14 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“integration test matrix”，并满足：默认 CI 不驱动真机；R 轨人工真机套件有安全清单和记录，S 轨三层测试全部标记 simulation/mock 且无 HIL 声称。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 094 的结果记录，确认其状态和交付物“unit test suite 与覆盖率报告”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-095.md` 和 `evidence/day-095/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R20 GitHub Actions 文档](https://docs.github.com/en/actions)；H05 独立急停与安全工作区。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | R 轨建立 mock、回放和低速真机三层测试；S 轨建立 mock、回放和仿真设备三层测试，不称为硬件在环。 |
| 00:35–01:00 | 任务 2 | 覆盖启动、运行、断线、恢复和急停。 |
| 01:00–01:25 | 任务 3 | 仅为 R 轨真实硬件测试设置显式 opt-in；S 轨默认测试不得探测或驱动物理设备。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜R 轨建立 mock、回放和低速真机三层测试；S 轨建立 mock、回放和仿真设备三层测试，不称为硬件在环。

1. 在 `logs/day-095.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
5. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
6. 每条实际执行命令连同退出码追加到 `evidence/day-095/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜覆盖启动、运行、断线、恢复和急停。

1. 在 `logs/day-095.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 执行前记录当前版本、磁盘空间和回滚点；只按固定版本/commit操作，命令失败时保留完整 stderr，不连续尝试多个来源的安装方案。
3. 完成后从新 shell 或干净 build 目录复验；记录实际版本、产物 hash、退出码和启动现象，避免依赖当前终端的隐式环境变量。
4. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
5. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
6. 每条实际执行命令连同退出码追加到 `evidence/day-095/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜仅为 R 轨真实硬件测试设置显式 opt-in；S 轨默认测试不得探测或驱动物理设备。

1. 在 `logs/day-095.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-095/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：integration test matrix
- 日志：`logs/day-095.md`
- 原始证据目录：`evidence/day-095/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：默认 CI 不驱动真机；R 轨人工真机套件有安全清单和记录，S 轨三层测试全部标记 simulation/mock 且无 HIL 声称。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 硬件未到、损坏或无授权：保留接口/解析器/mock测试，真实硬件验收标记 `BLOCKED`；写明预计获得日期，不得用 mock 结果替代波形、总线或真机结果。
- 机械臂授权、独立急停、示教输入、SDK许可或持续排期任一缺失：立即执行 S 轨；不得发送真实动作，也不得在简历中使用“真机”“机械臂项目经验”。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-095.md`：

    # Day 095 Result

    - plan_day: D095
    - scheduled_date: 2026-11-26
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D095 详细执行｜R 硬件在环 / S 模拟集成测试|← Day 095]] · [[#导航|↑ 文档导航]] · [[#D097 详细执行｜性能分析与瓶颈|Day 097 →]]

#### D096 详细执行｜GitHub Actions CI

> 计划日期：2026-11-27｜主动投入：2 小时｜第 14 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“.github/workflows/ci.yml”，并满足：全新 commit 的 CI 全绿；失败能定位具体阶段且无密钥泄漏。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 095 的结果记录，确认其状态和交付物“integration test matrix”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-096.md` 和 `evidence/day-096/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R20 GitHub Actions 文档](https://docs.github.com/en/actions)；[R21 Docker 文档](https://docs.docker.com/)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 配置 lint、typecheck、unit、dataset fixture、容器构建和文档链接检查。 |
| 00:35–01:00 | 任务 2 | 固定 action 版本和最小权限。 |
| 01:00–01:25 | 任务 3 | 生成可下载测试产物。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜配置 lint、typecheck、unit、dataset fixture、容器构建和文档链接检查。

1. 在 `logs/day-096.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 执行前记录当前版本、磁盘空间和回滚点；只按固定版本/commit操作，命令失败时保留完整 stderr，不连续尝试多个来源的安装方案。
5. 完成后从新 shell 或干净 build 目录复验；记录实际版本、产物 hash、退出码和启动现象，避免依赖当前终端的隐式环境变量。
6. 每条实际执行命令连同退出码追加到 `evidence/day-096/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜固定 action 版本和最小权限。

1. 在 `logs/day-096.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-096/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜生成可下载测试产物。

1. 在 `logs/day-096.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 执行前记录当前版本、磁盘空间和回滚点；只按固定版本/commit操作，命令失败时保留完整 stderr，不连续尝试多个来源的安装方案。
3. 完成后从新 shell 或干净 build 目录复验；记录实际版本、产物 hash、退出码和启动现象，避免依赖当前终端的隐式环境变量。
4. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
5. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
6. 每条实际执行命令连同退出码追加到 `evidence/day-096/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `docker compose config --quiet`
- `docker compose build`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：.github/workflows/ci.yml
- 日志：`logs/day-096.md`
- 原始证据目录：`evidence/day-096/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：全新 commit 的 CI 全绿；失败能定位具体阶段且无密钥泄漏。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 单点卡住超过 30 分钟：保存完整错误、最小复现和已排除项；把范围缩到一个可测试子问题，剩余项写 `PARTIAL`，不通过延长到深夜制造假进度。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-096.md`：

    # Day 096 Result

    - plan_day: D096
    - scheduled_date: 2026-11-27
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D096 详细执行｜GitHub Actions CI|← Day 096]] · [[#导航|↑ 文档导航]] · [[#D098 详细执行｜48小时长稳与恢复验收|Day 098 →]]

#### D097 详细执行｜性能分析与瓶颈

> 计划日期：2026-11-28｜主动投入：4 小时｜第 14 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“reports/performance-v1.md”，并满足：优化结论由同一基准支持，不用不同配置制造提升。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 096 的结果记录，确认其状态和交付物“.github/workflows/ci.yml”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-097.md` 和 `evidence/day-097/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R17 Weights & Biases 文档](https://docs.wandb.ai/)；[R21 Docker 文档](https://docs.docker.com/)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 4 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–01:05 | 任务 1 | 测量采集、编码、网络、推理、动作消费、平台写入的 CPU/GPU/内存。 |
| 01:05–02:00 | 任务 2 | 识别一个真实瓶颈并优化。 |
| 02:00–02:55 | 任务 3 | 保留优化前后相同负载数据。 |
| 02:55–03:40 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 03:40–04:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜测量采集、编码、网络、推理、动作消费、平台写入的 CPU/GPU/内存。

1. 在 `logs/day-097.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
4. 每批开始前锁定 task/spec 与数据 schema；每个样本生成唯一 ID，记录来源、R/S轨、时间、操作者/上游、有效性和失败原因。
5. 每完成一小批立即跑质量检查和 checksum；原始数据只追加不静默改写，无效样本保留在 manifest 并标明排除原因。
6. 每条实际执行命令连同退出码追加到 `evidence/day-097/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜识别一个真实瓶颈并优化。

1. 在 `logs/day-097.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-097/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜保留优化前后相同负载数据。

1. 在 `logs/day-097.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-097/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `python -m compileall -q src tools tests`
- `python -m pytest -q`
- `npm run typecheck`
- `npm test`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：reports/performance-v1.md
- 日志：`logs/day-097.md`
- 原始证据目录：`evidence/day-097/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：优化结论由同一基准支持，不用不同配置制造提升。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- GPU、显存或预算不足：缩小到 1 batch/少量 step 的 smoke，验证数据和恢复链路后停止；完整训练写 `RUNNING` 或 `BLOCKED`，不能因启动成功写成微调完成。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-097.md`：

    # Day 097 Result

    - plan_day: D097
    - scheduled_date: 2026-11-28
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D097 详细执行｜性能分析与瓶颈|← Day 097]] · [[#导航|↑ 文档导航]] · [[#D099 详细执行｜README 与快速开始|Day 099 →]]

#### D098 详细执行｜48小时长稳与恢复验收

> 计划日期：2026-11-29｜主动投入：2 小时｜第 14 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“reports/soak-and-recovery.md”，并满足：达到48小时且故障注入完成才PASS；否则保留PARTIAL和后台继续计划；无资源持续增长趋势。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 097 的结果记录，确认其状态和交付物“reports/performance-v1.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-098.md` 和 `evidence/day-098/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R20 GitHub Actions 文档](https://docs.github.com/en/actions)；[R22 Linux tc-netem](https://man7.org/linux/man-pages/man8/tc-netem.8.html)；H05 独立急停与安全工作区。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 运行至少 2 小时采集/回放或安全的闭环 soak test。 |
| 00:35–01:00 | 任务 2 | 期间注入网络中断和服务重启。 |
| 01:00–01:25 | 任务 3 | 检查内存、句柄、队列、数据完整性和恢复时间。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜运行至少 2 小时采集/回放或安全的闭环 soak test。

1. 在 `logs/day-098.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
4. 每批开始前锁定 task/spec 与数据 schema；每个样本生成唯一 ID，记录来源、R/S轨、时间、操作者/上游、有效性和失败原因。
5. 每完成一小批立即跑质量检查和 checksum；原始数据只追加不静默改写，无效样本保留在 manifest 并标明排除原因。
6. 每条实际执行命令连同退出码追加到 `evidence/day-098/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜期间注入网络中断和服务重启。

1. 在 `logs/day-098.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-098/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜检查内存、句柄、队列、数据完整性和恢复时间。

1. 在 `logs/day-098.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-098/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `python -m compileall -q src tools tests`
- `python -m pytest -q`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：reports/soak-and-recovery.md
- 日志：`logs/day-098.md`
- 原始证据目录：`evidence/day-098/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：达到48小时且故障注入完成才PASS；否则保留PARTIAL和后台继续计划；无资源持续增长趋势。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 机械臂授权、独立急停、示教输入、SDK许可或持续排期任一缺失：立即执行 S 轨；不得发送真实动作，也不得在简历中使用“真机”“机械臂项目经验”。
- 墙钟任务预计 48 小时，硬上限 72 小时。后台运行不占满人工时间；达到上限停止并分析。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-098.md`：

    # Day 098 Result

    - plan_day: D098
    - scheduled_date: 2026-11-29
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

### 第 15 周详细执行｜脱敏开源、证据与技术表达

> [!info]- 当日导航
> [[#D098 详细执行｜48小时长稳与恢复验收|← Day 098]] · [[#导航|↑ 文档导航]] · [[#D100 详细执行｜架构与威胁边界图|Day 100 →]]

#### D099 详细执行｜README 与快速开始

> 计划日期：2026-11-30｜主动投入：2 小时｜第 15 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“README.md 候选版”，并满足：在干净容器中仅按 README，30 分钟内完成 mock/回放且命令退出码为 0；全文检索无把 EdgeVLA Lab 写成官方项目的表述。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 098 的结果记录，确认其状态和交付物“reports/soak-and-recovery.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-099.md` 和 `evidence/day-099/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R01 LeRobot v0.6.0 官方仓库](https://github.com/huggingface/lerobot/tree/v0.6.0)；[R20 GitHub Actions 文档](https://docs.github.com/en/actions)；[R21 Docker 文档](https://docs.docker.com/)；A06 独立评审者。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 说明问题、架构、状态、硬件、安装、仿真和真机安全。 |
| 00:35–01:00 | 任务 2 | 区分上游项目与 EdgeVLA Lab 自研模块。 |
| 01:00–01:25 | 任务 3 | 提供 30 分钟内可运行的无硬件路径。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜说明问题、架构、状态、硬件、安装、仿真和真机安全。

1. 在 `logs/day-099.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 执行前记录当前版本、磁盘空间和回滚点；只按固定版本/commit操作，命令失败时保留完整 stderr，不连续尝试多个来源的安装方案。
5. 完成后从新 shell 或干净 build 目录复验；记录实际版本、产物 hash、退出码和启动现象，避免依赖当前终端的隐式环境变量。
6. 每条实际执行命令连同退出码追加到 `evidence/day-099/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜区分上游项目与 EdgeVLA Lab 自研模块。

1. 在 `logs/day-099.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-099/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜提供 30 分钟内可运行的无硬件路径。

1. 在 `logs/day-099.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-099/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：README.md 候选版
- 日志：`logs/day-099.md`
- 原始证据目录：`evidence/day-099/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：在干净容器中仅按 README，30 分钟内完成 mock/回放且命令退出码为 0；全文检索无把 EdgeVLA Lab 写成官方项目的表述。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 硬件未到、损坏或无授权：保留接口/解析器/mock测试，真实硬件验收标记 `BLOCKED`；写明预计获得日期，不得用 mock 结果替代波形、总线或真机结果。
- 外部结果不可控：当天只验收本人可控的高质量材料、提交动作和记录；PR 合并、面试回复或 offer 不能作为 PASS 的必要条件，也不能伪造。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-099.md`：

    # Day 099 Result

    - plan_day: D099
    - scheduled_date: 2026-11-30
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D099 详细执行｜README 与快速开始|← Day 099]] · [[#导航|↑ 文档导航]] · [[#D101 详细执行｜Dataset Card 定稿|Day 101 →]]

#### D100 详细执行｜架构与威胁边界图

> 计划日期：2026-12-01｜主动投入：2 小时｜第 15 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“docs/architecture.md”，并满足：每个关键组件有责任、输入输出和失败响应，不存在“云端急停”误导。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 099 的结果记录，确认其状态和交付物“README.md 候选版”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-100.md` 和 `evidence/day-100/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R10 LeRobot 异步推理](https://huggingface.co/docs/lerobot/v0.6.0/en/async)；H05 独立急停与安全工作区。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 绘制设备、相机、安全层、Policy Server、平台和 HMI。 |
| 00:35–01:00 | 任务 2 | 标注实时/非实时、信任边界和故障域。 |
| 01:00–01:25 | 任务 3 | 链接对应代码和测试。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜绘制设备、相机、安全层、Policy Server、平台和 HMI。

1. 在 `logs/day-100.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-100/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜标注实时/非实时、信任边界和故障域。

1. 在 `logs/day-100.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-100/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜链接对应代码和测试。

1. 在 `logs/day-100.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-100/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `flutter analyze`
- `flutter test`
- `npm run typecheck`
- `npm test`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：docs/architecture.md
- 日志：`logs/day-100.md`
- 原始证据目录：`evidence/day-100/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：每个关键组件有责任、输入输出和失败响应，不存在“云端急停”误导。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 机械臂授权、独立急停、示教输入、SDK许可或持续排期任一缺失：立即执行 S 轨；不得发送真实动作，也不得在简历中使用“真机”“机械臂项目经验”。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-100.md`：

    # Day 100 Result

    - plan_day: D100
    - scheduled_date: 2026-12-01
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D100 详细执行｜架构与威胁边界图|← Day 100]] · [[#导航|↑ 文档导航]] · [[#D102 详细执行｜Model Card 与评测证据|Day 102 →]]

#### D101 详细执行｜Dataset Card 定稿

> 计划日期：2026-12-02｜主动投入：2 小时｜第 15 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“公开 DATASET_CARD.md 与 manifest”，并满足：数据来源和许可可证明；无面部、手机号、密钥或厂商私有内容。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 100 的结果记录，确认其状态和交付物“docs/architecture.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-101.md` 和 `evidence/day-101/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R18 Hugging Face Dataset Cards](https://huggingface.co/docs/hub/en/datasets-cards)；[R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；[A02 Hugging Face Hub 账号](https://huggingface.co/)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 补充采集协议、分布、质量指标、划分、许可、隐私和限制。 |
| 00:35–01:00 | 任务 2 | 增加已知失败和不适用用途。 |
| 01:00–01:25 | 任务 3 | 执行发布包去隐私检查。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜补充采集协议、分布、质量指标、划分、许可、隐私和限制。

1. 在 `logs/day-101.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 每批开始前锁定 task/spec 与数据 schema；每个样本生成唯一 ID，记录来源、R/S轨、时间、操作者/上游、有效性和失败原因。
5. 每完成一小批立即跑质量检查和 checksum；原始数据只追加不静默改写，无效样本保留在 manifest 并标明排除原因。
6. 每条实际执行命令连同退出码追加到 `evidence/day-101/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜增加已知失败和不适用用途。

1. 在 `logs/day-101.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 每条实际执行命令连同退出码追加到 `evidence/day-101/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜执行发布包去隐私检查。

1. 在 `logs/day-101.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 发布/提交前逐条核对证据 ID、个人贡献、上游来源、R/S轨和禁用表述；运行隐私检查并人工搜索联系方式、设备标识、密钥和公司材料。
3. 记录实际提交版本、目标链接和时间；外部是否回复、合并或录用是后续状态，不在当天伪造成果，也不高频自动化操作网站。
4. 每条实际执行命令连同退出码追加到 `evidence/day-101/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `python -m compileall -q src tools tests`
- `python -m pytest -q`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：公开 DATASET_CARD.md 与 manifest
- 日志：`logs/day-101.md`
- 原始证据目录：`evidence/day-101/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：数据来源和许可可证明；无面部、手机号、密钥或厂商私有内容。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 单点卡住超过 30 分钟：保存完整错误、最小复现和已排除项；把范围缩到一个可测试子问题，剩余项写 `PARTIAL`，不通过延长到深夜制造假进度。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-101.md`：

    # Day 101 Result

    - plan_day: D101
    - scheduled_date: 2026-12-02
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D101 详细执行｜Dataset Card 定稿|← Day 101]] · [[#导航|↑ 文档导航]] · [[#D103 详细执行｜成功与失败演示视频|Day 103 →]]

#### D102 详细执行｜Model Card 与评测证据

> 计划日期：2026-12-03｜主动投入：2 小时｜第 15 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“MODEL_CARD_ACT.md 与 MODEL_CARD_SMOLVLA.md”，并满足：每个数字可追溯；未完成或失败实验不会被省略。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 101 的结果记录，确认其状态和交付物“公开 DATASET_CARD.md 与 manifest”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-102.md` 和 `evidence/day-102/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R19 Hugging Face Model Cards](https://huggingface.co/docs/hub/en/model-cards)；[R17 Weights & Biases 文档](https://docs.wandb.ai/)；[R26 LeRobot Adding a Policy](https://huggingface.co/docs/lerobot/v0.6.0/en/bring_your_own_policies)；[A02 Hugging Face Hub 账号](https://huggingface.co/)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 记录模型基座、数据版本、训练配置、算力、指标和限制。 |
| 00:35–01:00 | 任务 2 | 链接逐 episode 结果与失败视频。 |
| 01:00–01:25 | 任务 3 | 明确不能用于无人看护或安全关键控制。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜记录模型基座、数据版本、训练配置、算力、指标和限制。

1. 在 `logs/day-102.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 先用 1 batch/少量 step 验证 shape、loss、保存和恢复，再冻结数据 revision、配置、seed、代码 commit 与算力预算后启动正式任务。
5. 观察首个训练/验证周期并主动验证一次 checkpoint 恢复；训练仍在运行时写 RUNNING，不把开始训练、下载权重或官方 demo 当成完成微调。
6. 每条实际执行命令连同退出码追加到 `evidence/day-102/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜链接逐 episode 结果与失败视频。

1. 在 `logs/day-102.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 每批开始前锁定 task/spec 与数据 schema；每个样本生成唯一 ID，记录来源、R/S轨、时间、操作者/上游、有效性和失败原因。
3. 每完成一小批立即跑质量检查和 checksum；原始数据只追加不静默改写，无效样本保留在 manifest 并标明排除原因。
4. 每条实际执行命令连同退出码追加到 `evidence/day-102/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜明确不能用于无人看护或安全关键控制。

1. 在 `logs/day-102.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-102/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `python -m compileall -q src tools tests`
- `python -m pytest -q`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：MODEL_CARD_ACT.md 与 MODEL_CARD_SMOLVLA.md
- 日志：`logs/day-102.md`
- 原始证据目录：`evidence/day-102/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：每个数字可追溯；未完成或失败实验不会被省略。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- GPU、显存或预算不足：缩小到 1 batch/少量 step 的 smoke，验证数据和恢复链路后停止；完整训练写 `RUNNING` 或 `BLOCKED`，不能因启动成功写成微调完成。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-102.md`：

    # Day 102 Result

    - plan_day: D102
    - scheduled_date: 2026-12-03
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D102 详细执行｜Model Card 与评测证据|← Day 102]] · [[#导航|↑ 文档导航]] · [[#D104 详细执行｜上游贡献候选与真实反馈|Day 104 →]]

#### D103 详细执行｜成功与失败演示视频

> 计划日期：2026-12-04｜主动投入：2 小时｜第 15 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“demo/video-v1 与旁白稿”，并满足：视频中的指标与报告一致，不用剪辑掩盖评测轮次或危险行为。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 102 的结果记录，确认其状态和交付物“MODEL_CARD_ACT.md 与 MODEL_CARD_SMOLVLA.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-103.md` 和 `evidence/day-103/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R18 Hugging Face Dataset Cards](https://huggingface.co/docs/hub/en/datasets-cards)；[R19 Hugging Face Model Cards](https://huggingface.co/docs/hub/en/model-cards)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 制作 3–5 分钟技术演示，包含架构、数据、训练、真机、弱网与安全。 |
| 00:35–01:00 | 任务 2 | 保留至少一个典型失败和恢复过程。 |
| 01:00–01:25 | 任务 3 | 为全部画面去除隐私与密钥。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜制作 3–5 分钟技术演示，包含架构、数据、训练、真机、弱网与安全。

1. 在 `logs/day-103.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 先用 1 batch/少量 step 验证 shape、loss、保存和恢复，再冻结数据 revision、配置、seed、代码 commit 与算力预算后启动正式任务。
5. 观察首个训练/验证周期并主动验证一次 checkpoint 恢复；训练仍在运行时写 RUNNING，不把开始训练、下载权重或官方 demo 当成完成微调。
6. 每条实际执行命令连同退出码追加到 `evidence/day-103/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜保留至少一个典型失败和恢复过程。

1. 在 `logs/day-103.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-103/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜为全部画面去除隐私与密钥。

1. 在 `logs/day-103.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-103/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `python -m compileall -q src tools tests`
- `python -m pytest -q`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：demo/video-v1 与旁白稿
- 日志：`logs/day-103.md`
- 原始证据目录：`evidence/day-103/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：视频中的指标与报告一致，不用剪辑掩盖评测轮次或危险行为。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 硬件未到、损坏或无授权：保留接口/解析器/mock测试，真实硬件验收标记 `BLOCKED`；写明预计获得日期，不得用 mock 结果替代波形、总线或真机结果。
- GPU、显存或预算不足：缩小到 1 batch/少量 step 的 smoke，验证数据和恢复链路后停止；完整训练写 `RUNNING` 或 `BLOCKED`，不能因启动成功写成微调完成。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-103.md`：

    # Day 103 Result

    - plan_day: D103
    - scheduled_date: 2026-12-04
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D103 详细执行｜成功与失败演示视频|← Day 103]] · [[#导航|↑ 文档导航]] · [[#D105 详细执行｜开源、安全与发布阶段门|Day 105 →]]

#### D104 详细执行｜上游贡献候选与真实反馈

> 计划日期：2026-12-05｜主动投入：4 小时｜第 15 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“一个高质量issue/PR链接，或一份可复核的no-submit调查报告”，并满足：提交内容有版本、最小复现和期望/实际结果；没有为了KPI重复issue；未合并不包装成上游贡献。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 103 的结果记录，确认其状态和交付物“demo/video-v1 与旁白稿”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-104.md` 和 `evidence/day-104/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R01 LeRobot v0.6.0 官方仓库](https://github.com/huggingface/lerobot/tree/v0.6.0)；[R05 LeRobot 自定义硬件](https://huggingface.co/docs/lerobot/v0.6.0/en/integrate_hardware)；[R20 GitHub Actions 文档](https://docs.github.com/en/actions)；[R27 LeRobot 贡献指南](https://huggingface.co/docs/lerobot/main/en/contributing)；[A01 GitHub 账号与独立仓库](https://github.com/)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 4 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–01:05 | 任务 1 | 从学习中筛选一个可复现的上游文档、测试或bug问题，先搜索现有issue。 |
| 01:05–02:00 | 任务 2 | 能给最小复现时提交issue/PR；证据不足时只在本仓库写调查报告，不制造低质量贡献。 |
| 02:00–02:55 | 任务 3 | 记录链接、审查意见、未被接受或关闭原因；是否合并不作为当天PASS条件。 |
| 02:55–03:40 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 03:40–04:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜从学习中筛选一个可复现的上游文档、测试或bug问题，先搜索现有issue。

1. 在 `logs/day-104.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 只读列出的官方/一手资料，先写出要回答的 3～5 个问题；阅读时逐条记录“结论、出处、适用版本、仍不确定项”，禁止只收藏链接。
3. 合上资料后用自己的话重写结论，并用一个反例或边界条件检验理解；无法解释的术语放入问题清单，不用“熟悉”代替掌握。
4. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
5. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
6. 每条实际执行命令连同退出码追加到 `evidence/day-104/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜能给最小复现时提交issue/PR；证据不足时只在本仓库写调查报告，不制造低质量贡献。

1. 在 `logs/day-104.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 发布/提交前逐条核对证据 ID、个人贡献、上游来源、R/S轨和禁用表述；运行隐私检查并人工搜索联系方式、设备标识、密钥和公司材料。
3. 记录实际提交版本、目标链接和时间；外部是否回复、合并或录用是后续状态，不在当天伪造成果，也不高频自动化操作网站。
4. 每条实际执行命令连同退出码追加到 `evidence/day-104/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜记录链接、审查意见、未被接受或关闭原因；是否合并不作为当天PASS条件。

1. 在 `logs/day-104.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-104/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：一个高质量issue/PR链接，或一份可复核的no-submit调查报告
- 日志：`logs/day-104.md`
- 原始证据目录：`evidence/day-104/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：提交内容有版本、最小复现和期望/实际结果；没有为了KPI重复issue；未合并不包装成上游贡献。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 外部结果不可控：当天只验收本人可控的高质量材料、提交动作和记录；PR 合并、面试回复或 offer 不能作为 PASS 的必要条件，也不能伪造。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-104.md`：

    # Day 104 Result

    - plan_day: D104
    - scheduled_date: 2026-12-05
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D104 详细执行｜上游贡献候选与真实反馈|← Day 104]] · [[#导航|↑ 文档导航]] · [[#D106 详细执行｜可写入简历的指标审计|Day 106 →]]

#### D105 详细执行｜开源、安全与发布阶段门

> 计划日期：2026-12-06｜主动投入：2 小时｜第 15 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“release-checklist.md 与条件化 release candidate”，并满足：复现、安全、许可、隐私四项均签字/记录；任何未决高风险项阻止公开。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 104 的结果记录，确认其状态和交付物“一个高质量issue/PR链接，或一份可复核的no-submit调查报告”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-105.md` 和 `evidence/day-105/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R20 GitHub Actions 文档](https://docs.github.com/en/actions)；[R21 Docker 文档](https://docs.docker.com/)；H01 同学的机械臂与厂商 SDK；[A01 GitHub 账号与独立仓库](https://github.com/)；A05 机械臂所有者授权与使用排期。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 检查许可证、依赖、密钥、隐私、模型与数据使用条件。 |
| 00:35–01:00 | 任务 2 | 由同学确认厂商/机械臂相关公开边界。 |
| 01:00–01:25 | 任务 3 | R 轨门槛全过创建 v1.0.0-rc；否则创建 v0.x simulation/data-tooling rc 或延期。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜检查许可证、依赖、密钥、隐私、模型与数据使用条件。

1. 在 `logs/day-105.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先用 1 batch/少量 step 验证 shape、loss、保存和恢复，再冻结数据 revision、配置、seed、代码 commit 与算力预算后启动正式任务。
3. 观察首个训练/验证周期并主动验证一次 checkpoint 恢复；训练仍在运行时写 RUNNING，不把开始训练、下载权重或官方 demo 当成完成微调。
4. 每条实际执行命令连同退出码追加到 `evidence/day-105/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜由同学确认厂商/机械臂相关公开边界。

1. 在 `logs/day-105.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 发布/提交前逐条核对证据 ID、个人贡献、上游来源、R/S轨和禁用表述；运行隐私检查并人工搜索联系方式、设备标识、密钥和公司材料。
3. 记录实际提交版本、目标链接和时间；外部是否回复、合并或录用是后续状态，不在当天伪造成果，也不高频自动化操作网站。
4. 每条实际执行命令连同退出码追加到 `evidence/day-105/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜R 轨门槛全过创建 v1.0.0-rc；否则创建 v0.x simulation/data-tooling rc 或延期。

1. 在 `logs/day-105.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把硬件访问、协议解析和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 每条实际执行命令连同退出码追加到 `evidence/day-105/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `python -m compileall -q src tools tests`
- `python -m pytest -q`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：release-checklist.md 与条件化 release candidate
- 日志：`logs/day-105.md`
- 原始证据目录：`evidence/day-105/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：复现、安全、许可、隐私四项均签字/记录；任何未决高风险项阻止公开。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 机械臂授权、独立急停、示教输入、SDK许可或持续排期任一缺失：立即执行 S 轨；不得发送真实动作，也不得在简历中使用“真机”“机械臂项目经验”。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-105.md`：

    # Day 105 Result

    - plan_day: D105
    - scheduled_date: 2026-12-06
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

### 第 16 周详细执行｜求职材料、投递实验与后续迭代

> [!info]- 当日导航
> [[#D105 详细执行｜开源、安全与发布阶段门|← Day 105]] · [[#导航|↑ 文档导航]] · [[#D107 详细执行｜GitHub 与作品集页面|Day 107 →]]

#### D106 详细执行｜可写入简历的指标审计

> 计划日期：2026-12-07｜主动投入：2 小时｜第 16 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“career/resume-evidence-v1.csv”，并满足：每个简历要点都有公开或可提供的证据路径，无提前虚构成果。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 105 的结果记录，确认其状态和交付物“release-checklist.md 与条件化 release candidate”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-106.md` 和 `evidence/day-106/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R18 Hugging Face Dataset Cards](https://huggingface.co/docs/hub/en/datasets-cards)；[R19 Hugging Face Model Cards](https://huggingface.co/docs/hub/en/model-cards)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 从实验产物提取 episode、成功率、P95 时延、恢复和安全指标。 |
| 00:35–01:00 | 任务 2 | 逐项链接证据并标注样本和条件。 |
| 01:00–01:25 | 任务 3 | 删除无法证明的数字和“熟练”表述。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜从实验产物提取 episode、成功率、P95 时延、恢复和安全指标。

1. 在 `logs/day-106.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 每批开始前锁定 task/spec 与数据 schema；每个样本生成唯一 ID，记录来源、R/S轨、时间、操作者/上游、有效性和失败原因。
3. 每完成一小批立即跑质量检查和 checksum；原始数据只追加不静默改写，无效样本保留在 manifest 并标明排除原因。
4. 每条实际执行命令连同退出码追加到 `evidence/day-106/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜逐项链接证据并标注样本和条件。

1. 在 `logs/day-106.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 每批开始前锁定 task/spec 与数据 schema；每个样本生成唯一 ID，记录来源、R/S轨、时间、操作者/上游、有效性和失败原因。
3. 每完成一小批立即跑质量检查和 checksum；原始数据只追加不静默改写，无效样本保留在 manifest 并标明排除原因。
4. 每条实际执行命令连同退出码追加到 `evidence/day-106/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜删除无法证明的数字和“熟练”表述。

1. 在 `logs/day-106.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-106/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：career/resume-evidence-v1.csv
- 日志：`logs/day-106.md`
- 原始证据目录：`evidence/day-106/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：每个简历要点都有公开或可提供的证据路径，无提前虚构成果。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 单点卡住超过 30 分钟：保存完整错误、最小复现和已排除项；把范围缩到一个可测试子问题，剩余项写 `PARTIAL`，不通过延长到深夜制造假进度。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-106.md`：

    # Day 106 Result

    - plan_day: D106
    - scheduled_date: 2026-12-07
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D106 详细执行｜可写入简历的指标审计|← Day 106]] · [[#导航|↑ 文档导航]] · [[#D108 详细执行｜三类定向简历|Day 108 →]]

#### D107 详细执行｜GitHub 与作品集页面

> 计划日期：2026-12-08｜主动投入：2 小时｜第 16 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“公开项目页与作品集草稿”，并满足：两名未参与项目者各浏览首页 60 秒后，能正确回答问题、个人贡献、一个真实指标、限制、复现入口 5 问中的至少 4 问。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 106 的结果记录，确认其状态和交付物“career/resume-evidence-v1.csv”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-107.md` 和 `evidence/day-107/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R20 GitHub Actions 文档](https://docs.github.com/en/actions)；A06 独立评审者。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 优化仓库简介、topic、README 首屏和导航。 |
| 00:35–01:00 | 任务 2 | 在个人作品集中加入架构、责任、结果、限制和链接。 |
| 01:00–01:25 | 任务 3 | 保留“拟建”到“已发布”的状态变更记录。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜优化仓库简介、topic、README 首屏和导航。

1. 在 `logs/day-107.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 发布/提交前逐条核对证据 ID、个人贡献、上游来源、R/S轨和禁用表述；运行隐私检查并人工搜索联系方式、设备标识、密钥和公司材料。
3. 记录实际提交版本、目标链接和时间；外部是否回复、合并或录用是后续状态，不在当天伪造成果，也不高频自动化操作网站。
4. 每条实际执行命令连同退出码追加到 `evidence/day-107/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜在个人作品集中加入架构、责任、结果、限制和链接。

1. 在 `logs/day-107.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 每条实际执行命令连同退出码追加到 `evidence/day-107/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜保留“拟建”到“已发布”的状态变更记录。

1. 在 `logs/day-107.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 发布/提交前逐条核对证据 ID、个人贡献、上游来源、R/S轨和禁用表述；运行隐私检查并人工搜索联系方式、设备标识、密钥和公司材料。
3. 记录实际提交版本、目标链接和时间；外部是否回复、合并或录用是后续状态，不在当天伪造成果，也不高频自动化操作网站。
4. 每条实际执行命令连同退出码追加到 `evidence/day-107/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：公开项目页与作品集草稿
- 日志：`logs/day-107.md`
- 原始证据目录：`evidence/day-107/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：两名未参与项目者各浏览首页 60 秒后，能正确回答问题、个人贡献、一个真实指标、限制、复现入口 5 问中的至少 4 问。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 单点卡住超过 30 分钟：保存完整错误、最小复现和已排除项；把范围缩到一个可测试子问题，剩余项写 `PARTIAL`，不通过延长到深夜制造假进度。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-107.md`：

    # Day 107 Result

    - plan_day: D107
    - scheduled_date: 2026-12-08
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D107 详细执行｜GitHub 与作品集页面|← Day 107]] · [[#导航|↑ 文档导航]] · [[#D109 详细执行｜项目面试故事与技术深挖|Day 109 →]]

#### D108 详细执行｜三类定向简历

> 计划日期：2026-12-09｜主动投入：2 小时｜第 16 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“career/resume-robot-system.md、resume-data-deploy.md、resume-vla-application.md”，并满足：三个版本事实一致、侧重点不同；不声称论文、BSP、CAN 或伺服项目经验。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 107 的结果记录，确认其状态和交付物“公开项目页与作品集草稿”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-108.md` 和 `evidence/day-108/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R20 GitHub Actions 文档](https://docs.github.com/en/actions)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 生成机器人软件/系统、数据闭环/部署、VLA 应用工程三类版本。 |
| 00:35–01:00 | 任务 2 | 按岗位高频栈排序，不改事实。 |
| 01:00–01:25 | 任务 3 | 将核心研究岗列为后续目标而非当前主投。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜生成机器人软件/系统、数据闭环/部署、VLA 应用工程三类版本。

1. 在 `logs/day-108.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-108/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜按岗位高频栈排序，不改事实。

1. 在 `logs/day-108.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-108/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜将核心研究岗列为后续目标而非当前主投。

1. 在 `logs/day-108.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-108/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `python -m compileall -q src tools tests`
- `python -m pytest -q`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：career/resume-robot-system.md、resume-data-deploy.md、resume-vla-application.md
- 日志：`logs/day-108.md`
- 原始证据目录：`evidence/day-108/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：三个版本事实一致、侧重点不同；不声称论文、BSP、CAN 或伺服项目经验。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 单点卡住超过 30 分钟：保存完整错误、最小复现和已排除项；把范围缩到一个可测试子问题，剩余项写 `PARTIAL`，不通过延长到深夜制造假进度。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-108.md`：

    # Day 108 Result

    - plan_day: D108
    - scheduled_date: 2026-12-09
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D108 详细执行｜三类定向简历|← Day 108]] · [[#导航|↑ 文档导航]] · [[#D110 详细执行｜模拟面试与缺口修正|Day 110 →]]

#### D109 详细执行｜项目面试故事与技术深挖

> 计划日期：2026-12-10｜主动投入：2 小时｜第 16 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“career/interview-story-bank.md”，并满足：能在 2 分钟概述并在 20 分钟深挖；所有回答可指向代码或数据。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 108 的结果记录，确认其状态和交付物“career/resume-robot-system.md、resume-data-deploy.md、resume-vla-application.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-109.md` 和 `evidence/day-109/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R06 LeRobot ACT 策略文档](https://huggingface.co/docs/lerobot/v0.6.0/en/act)；[R07 SmolVLA 官方说明](https://huggingface.co/blog/smolvla)；[R10 LeRobot 异步推理](https://huggingface.co/docs/lerobot/v0.6.0/en/async)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 准备架构、数据、模型、安全、弱网、失败和取舍七段 STAR/技术故事。 |
| 00:35–01:00 | 任务 2 | 整理 tensor shape、归一化、chunk、时延和断线追问。 |
| 01:00–01:25 | 任务 3 | 准备诚实回答个人与同学分工。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜准备架构、数据、模型、安全、弱网、失败和取舍七段 STAR/技术故事。

1. 在 `logs/day-109.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 先用 1 batch/少量 step 验证 shape、loss、保存和恢复，再冻结数据 revision、配置、seed、代码 commit 与算力预算后启动正式任务。
5. 观察首个训练/验证周期并主动验证一次 checkpoint 恢复；训练仍在运行时写 RUNNING，不把开始训练、下载权重或官方 demo 当成完成微调。
6. 每条实际执行命令连同退出码追加到 `evidence/day-109/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜整理 tensor shape、归一化、chunk、时延和断线追问。

1. 在 `logs/day-109.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 只读列出的官方/一手资料，先写出要回答的 3～5 个问题；阅读时逐条记录“结论、出处、适用版本、仍不确定项”，禁止只收藏链接。
3. 合上资料后用自己的话重写结论，并用一个反例或边界条件检验理解；无法解释的术语放入问题清单，不用“熟悉”代替掌握。
4. 每条实际执行命令连同退出码追加到 `evidence/day-109/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜准备诚实回答个人与同学分工。

1. 在 `logs/day-109.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-109/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `python -m compileall -q src tools tests`
- `python -m pytest -q`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：career/interview-story-bank.md
- 日志：`logs/day-109.md`
- 原始证据目录：`evidence/day-109/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：能在 2 分钟概述并在 20 分钟深挖；所有回答可指向代码或数据。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 单点卡住超过 30 分钟：保存完整错误、最小复现和已排除项；把范围缩到一个可测试子问题，剩余项写 `PARTIAL`，不通过延长到深夜制造假进度。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-109.md`：

    # Day 109 Result

    - plan_day: D109
    - scheduled_date: 2026-12-10
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D109 详细执行｜项目面试故事与技术深挖|← Day 109]] · [[#导航|↑ 文档导航]] · [[#D111 详细执行｜100岗位再分层与首批3～5个申请|Day 111 →]]

#### D110 详细执行｜模拟面试与缺口修正

> 计划日期：2026-12-11｜主动投入：2 小时｜第 16 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“career/mock-interview-review.md”，并满足：两次面试均有录音/评分；前三缺口各有具体练习或修复提交。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 109 的结果记录，确认其状态和交付物“career/interview-story-bank.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-110.md` 和 `evidence/day-110/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R12 ROS 2 官方文档](https://docs.ros.org/en/jazzy/index.html)；[R14 PyTorch Tutorials](https://docs.pytorch.org/tutorials/)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 完成一次 C++/Linux/ROS2 和一次 PyTorch/VLA/系统设计模拟面试。 |
| 00:35–01:00 | 任务 2 | 将不会的问题分为概念、实践和证据缺口。 |
| 01:00–01:25 | 任务 3 | 只修正高频且与目标岗位相关的前三项。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜完成一次 C++/Linux/ROS2 和一次 PyTorch/VLA/系统设计模拟面试。

1. 在 `logs/day-110.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
5. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
6. 每条实际执行命令连同退出码追加到 `evidence/day-110/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜将不会的问题分为概念、实践和证据缺口。

1. 在 `logs/day-110.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-110/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜只修正高频且与目标岗位相关的前三项。

1. 在 `logs/day-110.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-110/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `cmake -S . -B build -DCMAKE_BUILD_TYPE=Debug`
- `cmake --build build --parallel`
- `ctest --test-dir build --output-on-failure`
- `python -m compileall -q src tools tests`
- `python -m pytest -q`
- `colcon build --symlink-install`
- `colcon test`
- `colcon test-result --verbose`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：career/mock-interview-review.md
- 日志：`logs/day-110.md`
- 原始证据目录：`evidence/day-110/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：两次面试均有录音/评分；前三缺口各有具体练习或修复提交。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 单点卡住超过 30 分钟：保存完整错误、最小复现和已排除项；把范围缩到一个可测试子问题，剩余项写 `PARTIAL`，不通过延长到深夜制造假进度。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-110.md`：

    # Day 110 Result

    - plan_day: D110
    - scheduled_date: 2026-12-11
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D110 详细执行｜模拟面试与缺口修正|← Day 110]] · [[#导航|↑ 文档导航]] · [[#D112 详细执行｜条件发布、总复盘与下一90天|Day 112 →]]

#### D111 详细执行｜100岗位再分层与首批3～5个申请

> 计划日期：2026-12-12｜主动投入：4 小时｜第 16 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“career/application-tracker.csv 与3～5份投递记录”，并满足：每个申请都链接简历版本和匹配证据；未申请的岗位不标已投；不承诺当天获得反馈。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 110 的结果记录，确认其状态和交付物“career/mock-interview-review.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-111.md` 和 `evidence/day-111/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R20 GitHub Actions 文档](https://docs.github.com/en/actions)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 4 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–01:05 | 任务 1 | 用现有100岗位报告更新已失效链接，从中选择15个仍开放且地点/学历/年限可行的样本。 |
| 01:05–02:00 | 任务 2 | 逐个做硬门槛和证据映射，选出3～5个高匹配岗位；为每个岗位调整项目顺序和自我介绍。 |
| 02:00–02:55 | 任务 3 | 人工完成首批申请并记录日期、版本和结果；不使用高频自动化投递或抓取。 |
| 02:55–03:40 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 03:40–04:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜用现有100岗位报告更新已失效链接，从中选择15个仍开放且地点/学历/年限可行的样本。

1. 在 `logs/day-111.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 每批开始前锁定 task/spec 与数据 schema；每个样本生成唯一 ID，记录来源、R/S轨、时间、操作者/上游、有效性和失败原因。
3. 每完成一小批立即跑质量检查和 checksum；原始数据只追加不静默改写，无效样本保留在 manifest 并标明排除原因。
4. 发布/提交前逐条核对证据 ID、个人贡献、上游来源、R/S轨和禁用表述；运行隐私检查并人工搜索联系方式、设备标识、密钥和公司材料。
5. 记录实际提交版本、目标链接和时间；外部是否回复、合并或录用是后续状态，不在当天伪造成果，也不高频自动化操作网站。
6. 每条实际执行命令连同退出码追加到 `evidence/day-111/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜逐个做硬门槛和证据映射，选出3～5个高匹配岗位；为每个岗位调整项目顺序和自我介绍。

1. 在 `logs/day-111.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-111/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜人工完成首批申请并记录日期、版本和结果；不使用高频自动化投递或抓取。

1. 在 `logs/day-111.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 发布/提交前逐条核对证据 ID、个人贡献、上游来源、R/S轨和禁用表述；运行隐私检查并人工搜索联系方式、设备标识、密钥和公司材料。
3. 记录实际提交版本、目标链接和时间；外部是否回复、合并或录用是后续状态，不在当天伪造成果，也不高频自动化操作网站。
4. 每条实际执行命令连同退出码追加到 `evidence/day-111/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：career/application-tracker.csv 与3～5份投递记录
- 日志：`logs/day-111.md`
- 原始证据目录：`evidence/day-111/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：每个申请都链接简历版本和匹配证据；未申请的岗位不标已投；不承诺当天获得反馈。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 外部结果不可控：当天只验收本人可控的高质量材料、提交动作和记录；PR 合并、面试回复或 offer 不能作为 PASS 的必要条件，也不能伪造。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-111.md`：

    # Day 111 Result

    - plan_day: D111
    - scheduled_date: 2026-12-12
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

> [!info]- 当日导航
> [[#D111 详细执行｜100岗位再分层与首批3～5个申请|← Day 111]] · [[#导航|↑ 文档导航]]

#### D112 详细执行｜条件发布、总复盘与下一90天

> 计划日期：2026-12-13｜主动投入：2 小时｜第 16 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“条件化 release、retrospective.md 与 next-90-days.md”，并满足：Git状态干净、公开范围与证据一致；未完成内容保持未完成；下一90天不超过3个主目标。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 111 的结果记录，确认其状态和交付物“career/application-tracker.csv 与3～5份投递记录”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-112.md` 和 `evidence/day-112/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R20 GitHub Actions 文档](https://docs.github.com/en/actions)；[R21 Docker 文档](https://docs.docker.com/)；[A01 GitHub 账号与独立仓库](https://github.com/)；[A02 Hugging Face Hub 账号](https://huggingface.co/)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 按R/S轨、许可证、隐私、复现和测试清单决定发布v0.x、v1.0或延期，不为日期强行升级版本。 |
| 00:35–01:00 | 任务 2 | 统计112天真实投入、完成率、阻塞、硬件/GPU成本、面试反馈和最有价值证据。 |
| 01:00–01:25 | 任务 3 | 从未完成项和岗位反馈中只选3个下一阶段目标，为每个目标定义进入/退出条件。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜按R/S轨、许可证、隐私、复现和测试清单决定发布v0.x、v1.0或延期，不为日期强行升级版本。

1. 在 `logs/day-112.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
4. 发布/提交前逐条核对证据 ID、个人贡献、上游来源、R/S轨和禁用表述；运行隐私检查并人工搜索联系方式、设备标识、密钥和公司材料。
5. 记录实际提交版本、目标链接和时间；外部是否回复、合并或录用是后续状态，不在当天伪造成果，也不高频自动化操作网站。
6. 每条实际执行命令连同退出码追加到 `evidence/day-112/task-01-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜统计112天真实投入、完成率、阻塞、硬件/GPU成本、面试反馈和最有价值证据。

1. 在 `logs/day-112.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、波形、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-112/task-02-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜从未完成项和岗位反馈中只选3个下一阶段目标，为每个目标定义进入/退出条件。

1. 在 `logs/day-112.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 每条实际执行命令连同退出码追加到 `evidence/day-112/task-03-commands.txt`；硬件操作同时记录接线、固件 hash、测试次数和测量工具采样条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：条件化 release、retrospective.md 与 next-90-days.md
- 日志：`logs/day-112.md`
- 原始证据目录：`evidence/day-112/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：Git状态干净、公开范围与证据一致；未完成内容保持未完成；下一90天不超过3个主目标。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 硬件未到、损坏或无授权：保留接口/解析器/mock测试，真实硬件验收标记 `BLOCKED`；写明预计获得日期，不得用 mock 结果替代波形、总线或真机结果。
- GPU、显存或预算不足：缩小到 1 batch/少量 step 的 smoke，验证数据和恢复链路后停止；完整训练写 `RUNNING` 或 `BLOCKED`，不能因启动成功写成微调完成。
- 外部结果不可控：当天只验收本人可控的高质量材料、提交动作和记录；PR 合并、面试回复或 offer 不能作为 PASS 的必要条件，也不能伪造。

统一判定：

- `PASS`：主交付物存在，相关测试通过，原验收全部满足，证据可追溯。
- `PARTIAL`：产生了可复核中间产物，但仍有明确未完成验收；写出下一最小动作。
- `BLOCKED`：核心外部条件缺失或技术问题使主交付物无法产生；保留诊断、阻塞责任方和解除条件。

##### 当天结果模板

保存到 `logs/day-112.md`：

    # Day 112 Result

    - plan_day: D112
    - scheduled_date: 2026-12-13
    - actual_started_at:
    - actual_finished_at:
    - actual_minutes:
    - result: PASS / PARTIAL / BLOCKED
    - git_commit_before:
    - git_commit_after:
    - hardware_or_environment:
    - track: embedded / R-real / S-simulation / not-applicable
    - evidence_ids:
    - unfinished:
    - next_entry:

当天结束前，确认 `actual_*` 使用真实时间，未完成项没有被移到“已完成”，并为下一天留下唯一明确入口。

## 文档维护

> [!info] 生成规则
> - 结构化计划源：`data/career/vla-plan-weeks.json`
> - 资源与课程记录：`data/career/vla-plan-resources.json`
> - 每日源文档：`docs/career/daily-guides/day-001.md`～`day-112.md`
> - 重新生成：`npm run career:vla`
> - 一致性检查：`npm run career:vla:verify`

%% generated-by: scripts/generate-vla-obsidian.mjs %%
