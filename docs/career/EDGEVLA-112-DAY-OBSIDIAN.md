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
plan_version: "3.0"
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

# EdgeVLA Simulation-to-Cloud Lab｜112天 Obsidian 执行手册

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
| 电机、编码器、硬件执行单元 | 已观看，当前没有真实硬件证据 | [[#D009 详细执行｜关节、执行器与传感器观测|Day 009]]、[[#D012 详细执行｜安全边界、复位与确定性|Day 012]] | 只能写MuJoCo关节/执行器观测与安全测试，不写真实电机驱动 |
| URDF、遥操作、机械臂搭建 | 已观看，当前执行仿真主线 | [[#D015 详细执行｜键盘 XYZ 最小控制|Day 015]]～[[#D028 详细执行｜接口与数据工具 v0.1 阶段门|Day 028]] | 键盘/手柄、Robot I/O、数据录制和simulation-only标识 |
| 正逆运动学、PID与控制 | 已观看，不能称真实运动控制项目 | [[#D011 详细执行｜正运动学、逆运动学与末端位姿|Day 011]]、[[#D017 详细执行｜手柄 XYZ 增量与 dead-man|Day 017]] | 独立实现、限幅、坐标系、失败测试与控制周期；明确MuJoCo范围 |
| OpenCV、目标识别、手眼标定 | 已观看，本计划只做仿真视觉数据链路 | [[#D031 详细执行｜相机与视觉采集参数冻结|Day 031]]、[[#D038 详细执行｜图像、视频与磁盘完整性|Day 038]] | 图像参数、同步、媒体完整性和失败样本；不写真实相机标定 |
| 大模型、DeepSeek、MCP与具身智能 | 已观看，不等于VLA微调经验 | [[#D050 详细执行｜ACT 数据兼容与算力预算|Day 050]]～[[#D077 详细执行｜模型与异步推理阶段门|Day 077]] | 固定数据/模型版本、checkpoint、冻结评测和simulation-only说明 |

## 16周快速入口

| 周 | 主题 | 范围 | 入口 |
|---:|---|---|---|
| 1 | 真实性、环境与项目基线 | Day 001–007 | [[#D001 详细执行｜简历预填的职业与能力基线|进入本周第一天]] |
| 2 | MuJoCo 与 Franka 仿真环境 | Day 008–014 | [[#D008 详细执行｜Franka 模型、许可证与版本固定|进入本周第一天]] |
| 3 | 键盘与游戏手柄遥操作 | Day 015–021 | [[#D015 详细执行｜键盘 XYZ 最小控制|进入本周第一天]] |
| 4 | Robot I/O、LeRobot 适配与回放 | Day 022–028 | [[#D022 详细执行｜Observation/Action Schema 冻结|进入本周第一天]] |
| 5 | Pick-Cube 任务与第一版示范数据 | Day 029–035 | [[#D029 详细执行｜Pick-Cube 任务与成功标准|进入本周第一天]] |
| 6 | 数据质量、扩充与版本发布 | Day 036–042 | [[#D036 详细执行｜自动数据质量检查器|进入本周第一天]] |
| 7 | ROS2 与仿真系统集成 | Day 043–049 | [[#D043 详细执行｜ROS2 Jazzy 与环境隔离|进入本周第一天]] |
| 8 | ACT 模仿学习基线 | Day 050–056 | [[#D050 详细执行｜ACT 数据兼容与算力预算|进入本周第一天]] |
| 9 | ACT 仿真评测与鲁棒性 | Day 057–063 | [[#D057 详细执行｜ACT 评测协议冻结|进入本周第一天]] |
| 10 | SmolVLA 数据与微调 | Day 064–070 | [[#D064 详细执行｜SmolVLA 架构与数据流审计|进入本周第一天]] |
| 11 | SmolVLA 评测、对比与异步推理 | Day 071–077 | [[#D071 详细执行｜SmolVLA 冻结基线评测|进入本周第一天]] |
| 12 | 4核8GB云端控制平面与Headless仿真 | Day 078–084 | [[#D078 详细执行｜云服务器资源与安全基线|进入本周第一天]] |
| 13 | EdgeVLA Web 平台与实验闭环 | Day 085–091 | [[#D085 详细执行｜认证、项目与权限|进入本周第一天]] |
| 14 | 部署、CI、弱网、安全与恢复 | Day 092–098 | [[#D092 详细执行｜Local/Cloud/GPU Compose 分层|进入本周第一天]] |
| 15 | 公开交付、证据与技术表达 | Day 099–105 | [[#D099 详细执行｜README 与15分钟快速开始|进入本周第一天]] |
| 16 | 求职材料、面试与下一阶段 | Day 106–112 | [[#D106 详细执行｜可写入简历的证据审计|进入本周第一天]] |

## 我的学习记录

<!-- USER-NOTES-START -->
在这里记录只属于你的复盘、疑问、面试反馈或硬件采购状态。该区域会在重新生成文档时保留。
<!-- USER-NOTES-END -->

> [!tip] 如何使用这个区域
> 可以自由编辑上面两个标记之间的文字。重新执行 `npm run career:vla` 时，这个区域和你在本文勾选的 `- [x]` 任务会被保留；其余生成内容会随结构化计划更新。

## 总计划与逐日索引

> 项目状态：**拟建开源作品**。
> 这是个人拟开发作品，不是上游官方同名项目。当前没有真实机械臂，主线以MuJoCo simulation-only完成；真机、SO-101、GELLO或Franka物理设备均不得提前声称。
> 计划周期：2026-08-24 至 2026-12-13，共 16 周 / 112 天 / 256 小时。

### 项目定义与真实性边界

- 项目名称：**EdgeVLA Simulation-to-Cloud Lab**
- 副标题：用MuJoCo Franka、键盘/游戏手柄、LeRobotDataset、ACT/SmolVLA和4核8GB云端控制平面完成仿真到云端闭环
- 仓库状态：Day 3创建独立私有edgevla-lab仓库；第15周通过证据、隐私和许可证审查后，才按真实完成范围公开。
- 简历规则：仿真成果可以在证据门通过后明确写为MuJoCo仿真项目；不得写成真实Franka、SO-101或GELLO部署。
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

- 每周投入16小时：周一至周五各2小时、周六4小时、周日2小时；训练墙钟时间不计入人工时间。
- 当前没有可持续使用的真实机械臂；主线固定为个人电脑上的MuJoCo Franka仿真、键盘/游戏手柄遥操作和LeRobot数据闭环。
- 4核8GB云服务器只运行轻量API、数据库、MQTT、无界面MuJoCo smoke和CI worker；不运行VLA训练、不连接本地手柄、不承担实时控制。
- ACT/SmolVLA正式训练只在本地可用GPU或设置预算与自动终止的按需GPU上执行；CPU只做数据检查和小型smoke。
- 真实机械臂、SO-101和GELLO均为112天后的可选扩展；没有真机证据时所有材料必须标记MuJoCo simulation-only。
- 所有指标必须带代码、模型、数据、环境、样本量、协议和失败记录；公司源码、私有协议、个人隐私和密钥永不进入公开仓库。

### 资源总表

#### 环境隔离规则

| 环境 | 固定规则 |
|---|---|
| 个人电脑交互环境 | 运行MuJoCo viewer、键盘/游戏手柄遥操作、视觉数据采集和本地回放；固定操作系统、Python、LeRobot commit、MuJoCo和手柄映射。 |
| LeRobot 仿真环境 | 选择包含官方 imitation-learning-in-sim/gym_hil 路径的版本并固定tag或commit；使用独立uv环境，禁止浮动main。 |
| ROS2 Jazzy 环境 | 使用Ubuntu 24.04系统ROS2和独立ros2_ws；通过进程/消息桥连接LeRobot环境，不直接混用不兼容rclpy。 |
| 4核8GB云服务器 | 只运行API、数据库、MQTT、静态Web、OSMesa/无渲染MuJoCo smoke；容器限额、任务并发1、日志轮转，不安装GPU训练栈。 |
| 按需GPU训练 | ACT/SmolVLA先本地CPU小smoke，再以固定镜像和预算/时间上限运行；训练配置、数据revision、模型revision和checkpoint必须归档。 |

#### 软件、课程与官方文档

| ID | 资源 | 本计划用途 |
|---|---|---|
| R01 | [LeRobot v0.6.0 官方仓库](https://github.com/huggingface/lerobot/tree/v0.6.0) | 固定版本、阅读源码、提交 issue/PR |
| R02 | [LeRobot 安装指南](https://huggingface.co/docs/lerobot/v0.6.0/en/installation) | Python 3.12、PyTorch、FFmpeg 与可选依赖 |
| R03 | [Hugging Face Robot Learning Course](https://huggingface.co/learn/robotics-course/en/unit0/1) | 机器人学习入门与概念复习 |
| R04 | [LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3) | 多相机视频、状态、动作、时间戳和元数据 |
| R05 | [LeRobot 自定义硬件](https://huggingface.co/docs/lerobot/v0.6.0/en/integrate_hardware) | 理解Robot/Teleoperator插件边界，为112天后的可选真机适配预留接口 |
| R06 | [LeRobot ACT 策略文档](https://huggingface.co/docs/lerobot/v0.6.0/en/act) | 单任务模仿学习基线和 action chunk |
| R07 | [SmolVLA 官方说明](https://huggingface.co/blog/smolvla) | VLA 架构、微调与异步推理 |
| R09 | [LeRobot 算力指南](https://huggingface.co/docs/lerobot/v0.6.0/en/hardware_guide) | ACT、SmolVLA 与大型 VLA 的显存和训练时长规划 |
| R10 | [LeRobot 异步推理](https://huggingface.co/docs/lerobot/v0.6.0/en/async) | Policy Server、Robot Client 与动作队列 |
| R11 | [LeRobot RTC](https://huggingface.co/docs/lerobot/v0.6.0/en/rtc) | 新旧动作块衔接和实时动作更新 |
| R12 | [ROS 2 官方文档](https://docs.ros.org/en/jazzy/index.html) | 节点、Topic、Service、Action、tf2、rosbag2 |
| R13 | [MoveIt 2 Jazzy 入门](https://moveit.picknik.ai/main/doc/tutorials/getting_started/getting_started.html) | 按 Ubuntu 24.04 / ROS 2 Jazzy 安装路径学习运动学、规划场景和安全约束；记录 apt 包版本 |
| R14 | [PyTorch Tutorials](https://docs.pytorch.org/tutorials/) | Tensor、Autograd、Dataset、训练循环和保存模型 |
| R16 | [MuJoCo 文档](https://mujoco.readthedocs.io/en/stable/) | 仿真环境、可视化和故障复现 |
| R17 | [Weights & Biases 文档](https://docs.wandb.ai/) | 训练曲线、实验配置和模型产物追踪 |
| R18 | [Hugging Face Dataset Cards](https://huggingface.co/docs/hub/en/datasets-cards) | 数据来源、任务、划分、许可和限制说明 |
| R19 | [Hugging Face Model Cards](https://huggingface.co/docs/hub/en/model-cards) | 模型配置、指标、适用范围和限制说明 |
| R20 | [GitHub Actions 文档](https://docs.github.com/en/actions) | 测试、格式、容器构建和发布验证 |
| R21 | [Docker 文档](https://docs.docker.com/) | 固定运行环境与一键复现 |
| R22 | [Linux tc-netem](https://man7.org/linux/man-pages/man8/tc-netem.8.html) | 注入延迟、抖动、丢包和乱序 |
| R23 | [SO-101 开源硬件](https://github.com/TheRobotStudio/SO-ARM100) | 112天仿真v1.0完成后的可选低成本真机平台；当前不采购 |
| R24 | [LeRobot Policy Rollout](https://huggingface.co/docs/lerobot/v0.6.0/en/inference) | 真机策略部署与同步推理基线 |
| R25 | [SmolVLA 官方微调指南](https://huggingface.co/docs/lerobot/v0.6.0/en/smolvla) | 语言条件任务、数据量建议、训练配置与真机评测 |
| R28 | [Hugging Face Jobs GPU 价格](https://huggingface.co/docs/hub/jobs-pricing) | 云 GPU 实验预算、最长运行时间与费用上限 |
| R29 | [ROS 2 Jazzy Python 环境指南](https://docs.ros.org/en/jazzy/How-To-Guides/Using-Python-Packages.html) | 隔离系统 Python、virtualenv 与 LeRobot 环境，避免 Conda 和二进制 rclpy ABI 冲突 |
| R30 | [OASIS MQTT 5.0 规范](https://docs.oasis-open.org/mqtt/mqtt/v5.0/mqtt-v5.0.html) | 设计 QoS、Session Expiry、Message Expiry、幂等和遥测/控制消息边界 |
| R34 | [C++ Core Guidelines](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines) | 补齐 RAII、所有权、资源安全、错误处理和并发代码审查 |
| R35 | [CMake 官方教程](https://cmake.org/cmake/help/latest/guide/tutorial/) | 构建现代 C++/ROS2 组件、测试、依赖和可安装目标 |
| R42 | [GoogleTest 官方入门](https://google.github.io/googletest/primer.html) | C++单元测试 |
| R43 | [LeRobot Imitation Learning in Simulation](https://huggingface.co/docs/lerobot/main/il_sim) | MuJoCo Panda、键盘/游戏手柄示教、LeRobotDataset采集、训练和仿真评测 |
| R44 | [MuJoCo Menagerie](https://github.com/google-deepmind/mujoco_menagerie) | 固定Franka Panda高质量MJCF模型、资源与许可证 |
| R45 | [GELLO Software](https://github.com/wuphilipp/gello_software) | 112天后可选低成本遥操作扩展；当前只阅读接口和仿真实现 |
| R46 | [SDL Gamepad Documentation](https://wiki.libsdl.org/SDL3/CategoryGamepad) | 游戏手柄轴、按钮、映射、断连与跨平台输入参考 |
| R47 | [FastAPI Documentation](https://fastapi.tiangolo.com/) | 轻量实验注册表、任务和平台API |
| R48 | [PostgreSQL Documentation](https://www.postgresql.org/docs/) | 云端实验、模型、数据集与评测元数据 |
| R49 | [MinIO Documentation](https://min.io/docs/minio/linux/index.html) | 可选S3兼容ArtifactStore；资源不足时降级外部对象存储或本地目录 |
| R50 | [EMQX Documentation](https://docs.emqx.com/) | 设备心跳、任务状态与非实时命令；不用于伺服闭环 |
| R52 | [MuJoCo Headless Rendering](https://github.com/google-deepmind/dm_control#rendering) | EGL、GLFW与OSMesa边界；4核8GB无GPU服务器使用OSMesa或无渲染 |

#### 硬件与现场资源

| ID | 资源 | 优先级 | 要求 |
|---|---|---|---|
| H01 | 个人开发电脑 | 必须 | 运行MuJoCo viewer、手柄、数据采集和本地回放；8GB可做最小CPU仿真，16GB以上更稳；训练是否本地执行取决于NVIDIA GPU。 |
| H02 | 4核8GB云服务器 | 已有 | 仅运行轻量Web/API/DB/MQTT、OSMesa或无渲染MuJoCo smoke；任务并发1并设置内存、磁盘和日志上限。 |
| H03 | 现有游戏手柄 | 必须 | 普通双摇杆即可控制XYZ/姿态/夹爪；IMU可选；必须实现dead-man、死区、断连停止和校准配置。 |
| H04 | 按需GPU | 第8–11周 | ACT/SmolVLA训练前先smoke；设置预算、最长时间和自动终止；不得在CPU云服务器强行训练。 |
| H05 | 数据与模型存储 | 第5周前 | 本地至少预留100GB并做校验和；正式训练资产建议独立SSD或对象存储；原始区只追加。 |
| H06 | SO-101、GELLO或其他真实机械臂 | 112天后可选 | 没有也不阻塞v1.0；采购/借用前必须确认SDK、授权、急停、安全区和公开边界。 |

#### 账号、权限与协作资源

| ID | 资源 | 要求 |
|---|---|---|
| A01 | [GitHub 账号与独立仓库](https://github.com/) | 学习阶段可先私有；第 15 周通过许可、隐私与安全审查后再公开，启用 Issues、Actions 与 Release |
| A02 | [Hugging Face Hub 账号](https://huggingface.co/) | 用于获准数据集、模型、Dataset Card 和 Model Card；私有资料不得误上传到公开仓库 |
| A03 | [实验跟踪账号](https://wandb.ai/) | W&B 可选；若不用则以本地 MLflow 或结构化日志替代，严禁上传密钥、原始隐私视频和厂商私有数据 |
| A04 | [按量 GPU 与预算告警](https://huggingface.co/docs/hub/jobs) | 仅在本地冒烟和 ACT 验证通过后使用；每个任务必须设置最长时间、费用上限和自动终止 |
| A06 | 独立评审者 | 至少两名未参与对应文档编写的人，可由机械臂同学、软件同事或目标岗位从业者担任；用于任务判定、README 60 秒测试和发布前复核 |

#### 预算与采购门

- 前7周只使用现有个人电脑、游戏手柄和4核8GB云服务器，不购买机械臂、GELLO、Jetson或深度相机。
- 云服务器只部署轻量服务和headless smoke；设置容器内存、CPU、磁盘、日志与并发限制，不能影响现有网站。
- ACT/SmolVLA必须先通过本地CPU或小GPU smoke，再启动按需GPU；每个任务设置费用和墙钟上限。
- MuJoCo仿真v1.0可作为完整项目交付；真实硬件是下一阶段加分项，不因求职焦虑虚构迁移。
- 公开前删除公司源码、私有协议、密钥、主机信息、联系方式和未授权数据；所有视频醒目标记simulation。

### 仿真主线与 Day 112 后的可选真机扩展

- **真机扩展决策日：Day 112。仿真主线本身可以完成 v1.0。**
- **可选R轨：112天仿真作品完成后，只有获得真实机械臂授权、SDK许可、物理急停、安全区域和连续排期，才另开真机迁移计划。**
- **主S轨：全112天使用MuJoCo Franka、键盘/游戏手柄和仿真摄像头完成数据、训练、评测、ROS2、异步推理和云端平台。S轨本身可以完成v1.0。**

| 周次 | 可选 R 轨：未来真机扩展 | 主 S 轨：当前仿真完整项目 |
|---|---|---|
| 1–4 | 不需要真机；只建立环境、MuJoCo、遥操作和LeRobot接口。 | 个人电脑完成viewer与手柄；云服务器完成headless smoke。 |
| 5–7 | 不进行真机采集。 | 冻结Pick-Cube协议，采集并发布仿真Dataset v1，完成ROS2桥接。 |
| 8–11 | 不声称真机推理。 | 按需GPU训练ACT/SmolVLA，在MuJoCo冻结评测并建立异步Policy链路。 |
| 12–14 | 公网不承担真机实时控制。 | 4核8GB服务器部署轻量控制平面、headless worker、Web平台和恢复测试。 |
| 15–16 | 真机只作为下一90天候选。 | 公开仿真全链路证据并定向求职。 |

当前 112 天固定执行 S 轨。只有 Day 112 后获得设备授权、SDK、物理急停、安全区域和持续排期，才能另开 R 轨；仿真结果永远不能替代真机结果。

### 16 周总览

| 周 | 日期 | 主题 | 阶段目标 | 周验收门 | 工时 |
|---:|---|---|---|---|---:|
| 1 | 2026-08-24～2026-08-30 | 真实性、环境与项目基线 | 建立单一私有 EdgeVLA 仓库和可复现环境，明确个人电脑、4核8GB云服务器与按需GPU的职责边界。 | 从新 shell 可复现本地环境；MuJoCo CPU 冒烟通过；仓库、证据基线和隐私规则完整。 | 16 |
| 2 | 2026-08-31～2026-09-06 | MuJoCo 与 Franka 仿真环境 | 基于 MuJoCo Menagerie 的 Franka Panda 建立可测试、可重置、可离屏渲染的操作环境。 | 固定模型版本和许可证；场景、控制、观测、相机、安全边界和 headless 运行全部通过。 | 16 |
| 3 | 2026-09-07～2026-09-13 | 键盘与游戏手柄遥操作 | 完成带 dead-man、安全限幅、XYZ/姿态/夹爪控制和 Episode 状态机的低成本仿真示教。 | 键盘和现有游戏手柄至少一种稳定可用；遥操作可重复完成简单抓取准备动作并记录完整输入。 | 16 |
| 4 | 2026-09-14～2026-09-20 | Robot I/O、LeRobot 适配与回放 | 把 MuJoCo、键盘和游戏手柄接入统一 Robot/Teleoperator 契约，并生成 LeRobotDataset 兼容数据。 | 同一 Observation/Action schema 支持在线控制、录制、回放和契约测试；数据可被 LeRobot 工具读取。 | 16 |
| 5 | 2026-09-21～2026-09-27 | Pick-Cube 任务与第一版示范数据 | 冻结单任务协议，用游戏手柄采集第一批可回放、可质检的仿真示范数据。 | 任务、重置、成功定义和采集协议冻结；至少25个有效Episode通过自动与人工检查。 | 16 |
| 6 | 2026-09-28～2026-10-04 | 数据质量、扩充与版本发布 | 将手工示范提升为可自动检查、可分割、可版本化并适合训练的数据集。 | 累计至少50个有效Episode；数据校验、人工复核、split、Dataset Card和校验和全部通过。 | 16 |
| 7 | 2026-10-05～2026-10-11 | ROS2 与仿真系统集成 | 用 ROS2 Jazzy 暴露 MuJoCo 状态、控制、tf、录包和诊断，同时保持 LeRobot 环境隔离。 | ROS2进程与LeRobot进程通过明确IPC桥接；状态、动作、tf、rosbag和故障诊断可复现。 | 16 |
| 8 | 2026-10-12～2026-10-18 | ACT 模仿学习基线 | 用自采MuJoCo数据完成ACT的冒烟、训练、恢复、推理和第一轮冻结评测。 | ACT checkpoint可恢复、可推理；训练配置和数据版本固定；评测不使用训练集成功率冒充泛化。 | 16 |
| 9 | 2026-10-19～2026-10-25 | ACT 仿真评测与鲁棒性 | 用冻结协议评测ACT，并通过位置、光照、相机和失败分类形成可信的simulation-only结论。 | 评测包含原始逐轮结果、失败视频、样本量和环境版本；所有数字可重算。 | 16 |
| 10 | 2026-10-26～2026-11-01 | SmolVLA 数据与微调 | 在ACT链路稳定后，为同一仿真任务增加语言条件并完成SmolVLA小规模微调。 | 语言数据、算力、checkpoint、恢复和预检全部可复现；训练成本受控。 | 16 |
| 11 | 2026-11-02～2026-11-08 | SmolVLA 评测、对比与异步推理 | 完成语言与位置泛化评测，对比ACT，并建立Policy Server/Robot Client异步推理链路。 | SmolVLA和ACT在同一口径下可比较；异步动作队列有年龄、限幅和断连守卫。 | 16 |
| 12 | 2026-11-09～2026-11-15 | 4核8GB云端控制平面与Headless仿真 | 在现有CPU云服务器部署轻量控制平面、无界面MuJoCo测试和实验元数据服务，不承担VLA训练或手柄实时交互。 | 云端资源受限下API、任务、元数据、MQTT和headless smoke稳定；内存、磁盘和恢复有证据。 | 16 |
| 13 | 2026-11-16～2026-11-22 | EdgeVLA Web 平台与实验闭环 | 建立项目、设备、数据集、模型、实验、评测和失败审查的最小Web平台。 | 浏览器可完成从提交仿真任务到查看数据/模型/评测和失败Episode的端到端流程。 | 16 |
| 14 | 2026-11-23～2026-11-29 | 部署、CI、弱网、安全与恢复 | 将本地、云端和GPU任务分层容器化，完善CI、弱网、安全、备份和长稳。 | 三种部署profile清晰；CI全绿；云端恢复和24小时长稳通过；断网不产生危险动作。 | 16 |
| 15 | 2026-11-30～2026-12-06 | 公开交付、证据与技术表达 | 形成招聘方可复现的EdgeVLA仿真全链路作品，公开成功与失败，不伪造真机迁移。 | README、架构、Cards、演示、快速开始、隐私和许可证审查全部通过。 | 16 |
| 16 | 2026-12-07～2026-12-13 | 求职材料、面试与下一阶段 | 只把已验证的EdgeVLA仿真闭环同步到作品集和定向简历，并规划可选GELLO/真实机械臂阶段。 | 材料与证据一致；模拟面试能解释每个边界；完成小规模投递和下一90天决策。 | 16 |

### 112 天逐日执行表

#### 第 1 周｜真实性、环境与项目基线｜2026-08-24～2026-08-30

**本周目标：** 建立单一私有 EdgeVLA 仓库和可复现环境，明确个人电脑、4核8GB云服务器与按需GPU的职责边界。

**阶段门：** 从新 shell 可复现本地环境；MuJoCo CPU 冒烟通过；仓库、证据基线和隐私规则完整。

<a id="day-001"></a>

##### Day 001｜2026-08-24 星期一｜2 小时｜简历预填的职业与能力基线

**详细执行指南：** [[#D001 详细执行｜简历预填的职业与能力基线|打开 Day 001 详细执行]]

**当天任务**

- [ ] 核对根据现有简历预填的岗位定位与项目证据。
- [ ] 确认处理器、Python/C++、传感器和求职约束等少量未知项；机械臂已确认当前没有。
- [ ] 只保存一份 D001-baseline.md，不重复制作 CSV。

**所需资源：** [R03 Hugging Face Robot Learning Course](https://huggingface.co/learn/robotics-course/en/unit0/1)

**当天交付物：** 一份预填并经本人核对的 D001-baseline.md

**完成验收：** 既有项目和能力边界已核对；未知项可保留待确认；不得把仿真或课程写成真机经验。

<a id="day-002"></a>

##### Day 002｜2026-08-25 星期二｜2 小时｜本地 LeRobot、MuJoCo 与 Python 环境固定

**详细执行指南：** [[#D002 详细执行｜本地 LeRobot、MuJoCo 与 Python 环境固定|打开 Day 002 详细执行]]

**当天任务**

- [ ] 盘点个人电脑的操作系统、CPU、内存、GPU、手柄和磁盘，不把云服务器当作交互采集机。
- [ ] 从 LeRobot 官方仓库选择包含 imitation-learning-in-sim/gym_hil 的版本并固定 tag 或 commit，创建独立 uv 环境。
- [ ] 安装 MuJoCo 与仿真依赖，完成无模型训练的 CPU 导入和最小物理步进测试。

**所需资源：** [R01 LeRobot v0.6.0 官方仓库](https://github.com/huggingface/lerobot/tree/v0.6.0)；[R02 LeRobot 安装指南](https://huggingface.co/docs/lerobot/v0.6.0/en/installation)；[R16 MuJoCo 文档](https://mujoco.readthedocs.io/en/stable/)；[R43 LeRobot Imitation Learning in Simulation](https://huggingface.co/docs/lerobot/main/il_sim)；H01 个人开发电脑

**当天交付物：** docs/environment.md、uv.lock、scripts/smoke_mujoco.py

**完成验收：** 新 shell 可按文档重建环境；记录精确 commit；CPU 物理步进通过；未要求本地具备 NVIDIA GPU。

<a id="day-003"></a>

##### Day 003｜2026-08-26 星期三｜2 小时｜私有仓库、证据账本与基础 CI

**详细执行指南：** [[#D003 详细执行｜私有仓库、证据账本与基础 CI|打开 Day 003 详细执行]]

**当天任务**

- [ ] 创建独立私有 edgevla-lab 仓库并导入 D001-baseline.md。
- [ ] 从预填基线生成 positioning.md 与 evidence-ledger.csv，明确 simulation-only 和个人贡献。
- [ ] 建立 Python/C++ 格式、测试、隐私扫描和无硬件 CI 骨架。

**所需资源：** [R20 GitHub Actions 文档](https://docs.github.com/en/actions)；[R21 Docker 文档](https://docs.docker.com/)；[A01 GitHub 账号与独立仓库](https://github.com/)

**当天交付物：** 仓库骨架、D001 基线、证据账本、README 状态声明与首个绿色 CI

**完成验收：** 从空目录按 README 可运行最小测试；证据边界保留；仓库无密钥、联系方式、公司源码或私有协议。

<a id="day-004"></a>

##### Day 004｜2026-08-27 星期四｜2 小时｜Python、NumPy 与 PyTorch 数据基线

**详细执行指南：** [[#D004 详细执行｜Python、NumPy 与 PyTorch 数据基线|打开 Day 004 详细执行]]

**当天任务**

- [ ] 实现数组、张量、设备和 dtype 的最小实验并记录形状变化。
- [ ] 实现可复现随机种子、Dataset/DataLoader 和小型训练循环。
- [ ] 为错误形状、NaN、设备不一致和随机性编写失败测试。

**所需资源：** [R14 PyTorch Tutorials](https://docs.pytorch.org/tutorials/)

**当天交付物：** labs/python-torch-baseline、tests/test_tensor_pipeline.py

**完成验收：** CPU 上测试通过；两次相同种子结果一致；文档列出 Python/PyTorch 的真实缺口。

<a id="day-005"></a>

##### Day 005｜2026-08-28 星期五｜2 小时｜现代 C++17、CMake 与 Robot I/O 基线

**详细执行指南：** [[#D005 详细执行｜现代 C++17、CMake 与 Robot I/O 基线|打开 Day 005 详细执行]]

**当天任务**

- [ ] 用 C++17 定义最小 Observation、Action 和 RobotInterface。
- [ ] 用 CMake 构建库、示例和 GoogleTest，不依赖真实设备。
- [ ] 测试所有权、越界、超时和无效动作，记录 C 与现代 C++ 的能力边界。

**所需资源：** [R34 C++ Core Guidelines](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines)；[R35 CMake 官方教程](https://cmake.org/cmake/help/latest/guide/tutorial/)；[R42 GoogleTest 官方入门](https://google.github.io/googletest/primer.html)

**当天交付物：** cpp/robot_io_baseline、CMakeLists.txt、单元测试

**完成验收：** Debug/Release 构建通过；不少于8个测试通过；不得将基线练习写成生产级机器人控制经验。

<a id="day-006"></a>

##### Day 006｜2026-08-29 星期六｜4 小时｜MuJoCo 本地与云端无界面冒烟

**详细执行指南：** [[#D006 详细执行｜MuJoCo 本地与云端无界面冒烟|打开 Day 006 详细执行]]

**当天任务**

- [ ] 在个人电脑运行交互 viewer 和固定步数物理仿真，记录实时倍率。
- [ ] 在4核8GB云服务器或等价容器使用 OSMesa/无渲染模式运行同一模型。
- [ ] 比较本地、云端物理步进和低分辨率离屏渲染，确定云服务器只承担无界面测试。

**所需资源：** [R16 MuJoCo 文档](https://mujoco.readthedocs.io/en/stable/)；[R21 Docker 文档](https://docs.docker.com/)；[R52 MuJoCo Headless Rendering](https://github.com/google-deepmind/dm_control#rendering)；H01 个人开发电脑；H02 4核8GB云服务器

**当天交付物：** reports/mujoco-local-cloud-smoke.md、容器冒烟日志

**完成验收：** 本地交互和云端 headless 均通过；云端内存峰值有记录；未在云端承诺实时手柄操作或VLA训练。

<a id="day-007"></a>

##### Day 007｜2026-08-30 星期日｜2 小时｜第一周可复现与范围复盘

**详细执行指南：** [[#D007 详细执行｜第一周可复现与范围复盘|打开 Day 007 详细执行]]

**当天任务**

- [ ] 从干净目录重建环境并执行 Python、C++ 和 MuJoCo 测试。
- [ ] 审计依赖锁、许可证、隐私与磁盘占用。
- [ ] 将阻塞项转成 issue，并冻结第二周的 Franka MuJoCo 目标。

**所需资源：** [R20 GitHub Actions 文档](https://docs.github.com/en/actions)；[R21 Docker 文档](https://docs.docker.com/)

**当天交付物：** reviews/week-01.md 与重建日志

**完成验收：** 在60分钟内完成重建和测试；所有失败有 issue；项目仍明确为仿真优先、真机可选。

#### 第 2 周｜MuJoCo 与 Franka 仿真环境｜2026-08-31～2026-09-06

**本周目标：** 基于 MuJoCo Menagerie 的 Franka Panda 建立可测试、可重置、可离屏渲染的操作环境。

**阶段门：** 固定模型版本和许可证；场景、控制、观测、相机、安全边界和 headless 运行全部通过。

<a id="day-008"></a>

##### Day 008｜2026-08-31 星期一｜2 小时｜Franka 模型、许可证与版本固定

**详细执行指南：** [[#D008 详细执行｜Franka 模型、许可证与版本固定|打开 Day 008 详细执行]]

**当天任务**

- [ ] 从 MuJoCo Menagerie 获取 Franka Panda 模型并固定 commit。
- [ ] 记录模型、mesh、第三方许可证和可公开边界。
- [ ] 加载 scene.xml，输出关节、执行器、传感器和相机清单。

**所需资源：** [R16 MuJoCo 文档](https://mujoco.readthedocs.io/en/stable/)；[R44 MuJoCo Menagerie](https://github.com/google-deepmind/mujoco_menagerie)

**当天交付物：** sim/franka、docs/model-inventory.md、licenses/

**完成验收：** 模型在本地和CI可加载；commit与许可证明确；关节/执行器数量由脚本自动校验。

<a id="day-009"></a>

##### Day 009｜2026-09-01 星期二｜2 小时｜关节、执行器与传感器观测

**详细执行指南：** [[#D009 详细执行｜关节、执行器与传感器观测|打开 Day 009 详细执行]]

**当天任务**

- [ ] 逐项读取 qpos、qvel、ctrl、末端位姿和接触信息。
- [ ] 实现关节限位与控制范围检查。
- [ ] 对无效 ctrl、越界索引和缺失传感器编写测试。

**所需资源：** [R16 MuJoCo 文档](https://mujoco.readthedocs.io/en/stable/)；[R44 MuJoCo Menagerie](https://github.com/google-deepmind/mujoco_menagerie)

**当天交付物：** edgevla_sim/observation.py、tests/test_observation.py

**完成验收：** 固定模型下观测 schema 稳定；非法控制被拒绝；数值无 NaN/Inf。

<a id="day-010"></a>

##### Day 010｜2026-09-02 星期三｜2 小时｜桌面、方块、容器与相机场景

**详细执行指南：** [[#D010 详细执行｜桌面、方块、容器与相机场景|打开 Day 010 详细执行]]

**当天任务**

- [ ] 建立桌面、目标方块、放置区和固定世界坐标。
- [ ] 增加前视与腕部可选相机，先使用低分辨率。
- [ ] 保存场景随机种子并测试物体不穿模、不在不可达区生成。

**所需资源：** [R16 MuJoCo 文档](https://mujoco.readthedocs.io/en/stable/)；[R44 MuJoCo Menagerie](https://github.com/google-deepmind/mujoco_menagerie)

**当天交付物：** sim/scenes/pick_cube.xml、tests/test_scene_reset.py

**完成验收：** 100次重置无穿模；对象位姿可复现；相机输出尺寸和dtype固定。

<a id="day-011"></a>

##### Day 011｜2026-09-03 星期四｜2 小时｜正运动学、逆运动学与末端位姿

**详细执行指南：** [[#D011 详细执行｜正运动学、逆运动学与末端位姿|打开 Day 011 详细执行]]

**当天任务**

- [ ] 读取末端执行器位置和四元数并验证坐标系。
- [ ] 实现增量式 XYZ 目标到关节控制的 IK 路径。
- [ ] 对不可达、奇异和过大步长执行限幅或失败返回。

**所需资源：** [R16 MuJoCo 文档](https://mujoco.readthedocs.io/en/stable/)；[R44 MuJoCo Menagerie](https://github.com/google-deepmind/mujoco_menagerie)

**当天交付物：** edgevla_sim/kinematics.py、reports/ik-cases.csv

**完成验收：** 至少20个可达目标收敛；不可达目标不产生失控动作；坐标系图与代码一致。

<a id="day-012"></a>

##### Day 012｜2026-09-04 星期五｜2 小时｜安全边界、复位与确定性

**详细执行指南：** [[#D012 详细执行｜安全边界、复位与确定性|打开 Day 012 详细执行]]

**当天任务**

- [ ] 定义末端工作空间、关节、速度和单步位移上限。
- [ ] 实现 reset、暂停、急停状态和动作清空。
- [ ] 用相同种子复现初始状态并注入越界动作。

**所需资源：** [R16 MuJoCo 文档](https://mujoco.readthedocs.io/en/stable/)

**当天交付物：** edgevla_sim/safety.py、tests/test_safety.py

**完成验收：** 越界动作100%被夹紧或拒绝；急停后控制量归零；相同种子状态一致。

<a id="day-013"></a>

##### Day 013｜2026-09-05 星期六｜4 小时｜离屏渲染与性能基准

**详细执行指南：** [[#D013 详细执行｜离屏渲染与性能基准|打开 Day 013 详细执行]]

**当天任务**

- [ ] 分别测试无渲染、128×128、256×256 OSMesa 离屏渲染。
- [ ] 记录个人电脑和4核8GB云服务器的步进速度、CPU、内存和磁盘。
- [ ] 确定采集分辨率、FPS和云端CI配置，不追求漂亮高分辨率。

**所需资源：** [R16 MuJoCo 文档](https://mujoco.readthedocs.io/en/stable/)；[R52 MuJoCo Headless Rendering](https://github.com/google-deepmind/dm_control#rendering)；H02 4核8GB云服务器

**当天交付物：** benchmarks/mujoco-rendering.csv、reports/render-budget.md

**完成验收：** 三种模式均有原始数据；云端配置不会OOM；最终采集参数有明确理由。

<a id="day-014"></a>

##### Day 014｜2026-09-06 星期日｜2 小时｜仿真环境 v0.1 阶段门

**详细执行指南：** [[#D014 详细执行｜仿真环境 v0.1 阶段门|打开 Day 014 详细执行]]

**当天任务**

- [ ] 提供一条命令启动本地 viewer，一条命令运行 headless 测试。
- [ ] 录制30秒环境演示并同时保留失败案例。
- [ ] 冻结 v0.1 schema、模型commit和第二周复现说明。

**所需资源：** [R16 MuJoCo 文档](https://mujoco.readthedocs.io/en/stable/)；[R44 MuJoCo Menagerie](https://github.com/google-deepmind/mujoco_menagerie)

**当天交付物：** releases/sim-env-v0.1.md 与演示视频

**完成验收：** 新环境可在30分钟内复现；全部测试通过；演示明确标记 MuJoCo simulation。

#### 第 3 周｜键盘与游戏手柄遥操作｜2026-09-07～2026-09-13

**本周目标：** 完成带 dead-man、安全限幅、XYZ/姿态/夹爪控制和 Episode 状态机的低成本仿真示教。

**阶段门：** 键盘和现有游戏手柄至少一种稳定可用；遥操作可重复完成简单抓取准备动作并记录完整输入。

<a id="day-015"></a>

##### Day 015｜2026-09-07 星期一｜2 小时｜键盘 XYZ 最小控制

**详细执行指南：** [[#D015 详细执行｜键盘 XYZ 最小控制|打开 Day 015 详细执行]]

**当天任务**

- [ ] 实现方向键控制 XY、Shift 控制 Z、Ctrl 控制夹爪的映射。
- [ ] 加入 space dead-man，未按住时动作必须为零。
- [ ] 记录按键、目标增量、实际末端位姿和限幅结果。

**所需资源：** [R43 LeRobot Imitation Learning in Simulation](https://huggingface.co/docs/lerobot/main/il_sim)

**当天交付物：** teleop/keyboard.py、tests/test_keyboard_map.py

**完成验收：** 所有映射有测试；释放dead-man后下一周期动作归零；可完成末端三轴移动。

<a id="day-016"></a>

##### Day 016｜2026-09-08 星期二｜2 小时｜游戏手柄识别、轴校准与死区

**详细执行指南：** [[#D016 详细执行｜游戏手柄识别、轴校准与死区|打开 Day 016 详细执行]]

**当天任务**

- [ ] 在个人电脑识别现有手柄的轴、按钮、VID/PID和操作系统映射。
- [ ] 实现轴归一化、死区、反向、漂移检测和配置保存。
- [ ] 断开手柄、轴卡死和未知型号时进入安全停止。

**所需资源：** [R43 LeRobot Imitation Learning in Simulation](https://huggingface.co/docs/lerobot/main/il_sim)；[R46 SDL Gamepad Documentation](https://wiki.libsdl.org/SDL3/CategoryGamepad)；H03 现有游戏手柄

**当天交付物：** teleop/gamepad.py、configs/gamepad.yaml、校准日志

**完成验收：** 静止漂移低于配置死区；断连被检测；不在云服务器直连本地手柄。

<a id="day-017"></a>

##### Day 017｜2026-09-09 星期三｜2 小时｜手柄 XYZ 增量与 dead-man

**详细执行指南：** [[#D017 详细执行｜手柄 XYZ 增量与 dead-man|打开 Day 017 详细执行]]

**当天任务**

- [ ] 将左右摇杆映射为末端 XYZ 增量，保留可配置灵敏度。
- [ ] 指定肩键为 dead-man，并区分暂停、复位和退出。
- [ ] 用轨迹日志检查指令、IK结果和实际末端运动方向。

**所需资源：** [R43 LeRobot Imitation Learning in Simulation](https://huggingface.co/docs/lerobot/main/il_sim)；[R46 SDL Gamepad Documentation](https://wiki.libsdl.org/SDL3/CategoryGamepad)

**当天交付物：** teleop/gamepad_xyz.py、reports/gamepad-xyz.md

**完成验收：** 三个轴方向与文档一致；松开dead-man立即停止；无突然跳变。

<a id="day-018"></a>

##### Day 018｜2026-09-10 星期四｜2 小时｜姿态、夹爪与控制模式切换

**详细执行指南：** [[#D018 详细执行｜姿态、夹爪与控制模式切换|打开 Day 018 详细执行]]

**当天任务**

- [ ] 用第二摇杆/按键实现 roll-pitch-yaw 增量和夹爪。
- [ ] 实现位置模式、姿态模式切换及切换时的零增量。
- [ ] 若手柄有IMU，只作为可选实验，不作为计划完成条件。

**所需资源：** [R43 LeRobot Imitation Learning in Simulation](https://huggingface.co/docs/lerobot/main/il_sim)；[R46 SDL Gamepad Documentation](https://wiki.libsdl.org/SDL3/CategoryGamepad)

**当天交付物：** teleop/gamepad_pose.py、tests/test_mode_switch.py

**完成验收：** 模式切换无跳变；姿态和夹爪受限幅；无IMU手柄也能完成验收。

<a id="day-019"></a>

##### Day 019｜2026-09-11 星期五｜2 小时｜Episode 录制状态机

**详细执行指南：** [[#D019 详细执行｜Episode 录制状态机|打开 Day 019 详细执行]]

**当天任务**

- [ ] 定义 IDLE、ARMED、RECORDING、SUCCESS、FAILURE、DISCARDED 状态。
- [ ] 将开始、成功、失败、重置映射到键盘和手柄按钮。
- [ ] 保证失败Episode和丢弃原因也进入日志，不静默删除。

**所需资源：** [R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；[R43 LeRobot Imitation Learning in Simulation](https://huggingface.co/docs/lerobot/main/il_sim)

**当天交付物：** recording/episode_fsm.py、tests/test_episode_fsm.py

**完成验收：** 状态转换覆盖率完整；非法转换被拒绝；每个Episode有唯一ID和结束原因。

<a id="day-020"></a>

##### Day 020｜2026-09-12 星期六｜4 小时｜遥操作时延、抖动与故障注入

**详细执行指南：** [[#D020 详细执行｜遥操作时延、抖动与故障注入|打开 Day 020 详细执行]]

**当天任务**

- [ ] 测量输入采样、IK、物理步进和渲染的阶段时延。
- [ ] 注入低帧率、手柄断连、长按和动作尖峰。
- [ ] 调整控制频率、平滑和单步上限，同时保留原始对比。

**所需资源：** [R16 MuJoCo 文档](https://mujoco.readthedocs.io/en/stable/)；[R43 LeRobot Imitation Learning in Simulation](https://huggingface.co/docs/lerobot/main/il_sim)

**当天交付物：** reports/teleop-latency.csv、fault-cases/

**完成验收：** 每个阶段有P50/P95；断连和尖峰不会越界；参数写入版本化配置。

<a id="day-021"></a>

##### Day 021｜2026-09-13 星期日｜2 小时｜遥操作 v0.1 演示与复盘

**详细执行指南：** [[#D021 详细执行｜遥操作 v0.1 演示与复盘|打开 Day 021 详细执行]]

**当天任务**

- [ ] 用键盘和手柄各完成至少3次到达目标位姿。
- [ ] 录制成功与失败视频，叠加输入和末端轨迹。
- [ ] 决定后续主输入设备；GELLO仅列为可选扩展。

**所需资源：** [R43 LeRobot Imitation Learning in Simulation](https://huggingface.co/docs/lerobot/main/il_sim)；[R45 GELLO Software](https://github.com/wuphilipp/gello_software)；H03 现有游戏手柄

**当天交付物：** releases/teleop-v0.1.md、成功/失败演示

**完成验收：** 至少一种输入连续3次完成目标；失败可解释；没有把GELLO或真机写成已完成。

#### 第 4 周｜Robot I/O、LeRobot 适配与回放｜2026-09-14～2026-09-20

**本周目标：** 把 MuJoCo、键盘和游戏手柄接入统一 Robot/Teleoperator 契约，并生成 LeRobotDataset 兼容数据。

**阶段门：** 同一 Observation/Action schema 支持在线控制、录制、回放和契约测试；数据可被 LeRobot 工具读取。

<a id="day-022"></a>

##### Day 022｜2026-09-14 星期一｜2 小时｜Observation/Action Schema 冻结

**详细执行指南：** [[#D022 详细执行｜Observation/Action Schema 冻结|打开 Day 022 详细执行]]

**当天任务**

- [ ] 定义关节、末端位姿、夹爪、图像、时间戳和任务文本字段。
- [ ] 明确单位、坐标系、dtype、shape、频率和必选/可选字段。
- [ ] 为版本不兼容、字段缺失和shape错误提供显式报错。

**所需资源：** [R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；[R05 LeRobot 自定义硬件](https://huggingface.co/docs/lerobot/v0.6.0/en/integrate_hardware)

**当天交付物：** schemas/robot-io-v1.json、docs/robot-io-contract.md

**完成验收：** schema验证覆盖正常和失败样本；单位与坐标系无歧义；版本号不可省略。

<a id="day-023"></a>

##### Day 023｜2026-09-15 星期二｜2 小时｜MuJoCoRobot 适配器

**详细执行指南：** [[#D023 详细执行｜MuJoCoRobot 适配器|打开 Day 023 详细执行]]

**当天任务**

- [ ] 实现 connect、disconnect、get_observation、send_action、reset。
- [ ] 隔离 MuJoCo model/data，不让上层直接访问底层对象。
- [ ] 测试重复连接、断开后调用、重置和动作超时。

**所需资源：** [R05 LeRobot 自定义硬件](https://huggingface.co/docs/lerobot/v0.6.0/en/integrate_hardware)；[R16 MuJoCo 文档](https://mujoco.readthedocs.io/en/stable/)

**当天交付物：** packages/edgevla_robot/mujoco_robot.py

**完成验收：** Robot契约测试全部通过；错误状态不崩溃；无真实硬件依赖。

<a id="day-024"></a>

##### Day 024｜2026-09-16 星期三｜2 小时｜Keyboard/Gamepad Teleoperator 适配器

**详细执行指南：** [[#D024 详细执行｜Keyboard/Gamepad Teleoperator 适配器|打开 Day 024 详细执行]]

**当天任务**

- [ ] 实现统一 Teleoperator 接口和配置对象。
- [ ] 将dead-man、模式、复位和Episode事件从动作向量中分离。
- [ ] 用录制输入回放验证同一输入产生一致目标动作。

**所需资源：** [R05 LeRobot 自定义硬件](https://huggingface.co/docs/lerobot/v0.6.0/en/integrate_hardware)；[R43 LeRobot Imitation Learning in Simulation](https://huggingface.co/docs/lerobot/main/il_sim)

**当天交付物：** packages/edgevla_teleop/

**完成验收：** 键盘和手柄共享契约；控制事件不混入模型动作；回放结果可复现。

<a id="day-025"></a>

##### Day 025｜2026-09-17 星期四｜2 小时｜LeRobotDataset v3 字段映射

**详细执行指南：** [[#D025 详细执行｜LeRobotDataset v3 字段映射|打开 Day 025 详细执行]]

**当天任务**

- [ ] 将 robot schema 映射到 LeRobotDataset feature。
- [ ] 生成最小1个Episode，包含状态、动作、任务和相机。
- [ ] 用官方工具读取、统计和可视化，记录精确版本。

**所需资源：** [R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；[R43 LeRobot Imitation Learning in Simulation](https://huggingface.co/docs/lerobot/main/il_sim)

**当天交付物：** dataset/minimal-v3、docs/feature-map.md

**完成验收：** 官方读取/可视化通过；feature/action shape一致；没有上传私人数据。

<a id="day-026"></a>

##### Day 026｜2026-09-18 星期五｜2 小时｜时间戳、图像与动作同步

**详细执行指南：** [[#D026 详细执行｜时间戳、图像与动作同步|打开 Day 026 详细执行]]

**当天任务**

- [ ] 使用单调时钟记录采样、动作发送和物理步进时间。
- [ ] 实现低帧率、重复帧、动作缺失和延迟检测。
- [ ] 保存原始时间戳，不用事后修改掩盖同步问题。

**所需资源：** [R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)

**当天交付物：** recording/synchronizer.py、tests/test_sync.py

**完成验收：** 合成异常全部被发现；正常样本同步误差有统计；原始时间戳只追加。

<a id="day-027"></a>

##### Day 027｜2026-09-19 星期六｜4 小时｜录制、回放与契约测试

**详细执行指南：** [[#D027 详细执行｜录制、回放与契约测试|打开 Day 027 详细执行]]

**当天任务**

- [ ] 实现record/replay CLI和固定种子回放。
- [ ] 将录制动作重新输入 MuJoCo 并比较末端轨迹。
- [ ] 加入截断文件、schema升级和校验和失败测试。

**所需资源：** [R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；[R05 LeRobot 自定义硬件](https://huggingface.co/docs/lerobot/v0.6.0/en/integrate_hardware)

**当天交付物：** cli/record.py、cli/replay.py、contract-tests/

**完成验收：** 同版本回放轨迹误差在预设容差内；损坏数据被拒绝；CLI退出码可靠。

<a id="day-028"></a>

##### Day 028｜2026-09-20 星期日｜2 小时｜接口与数据工具 v0.1 阶段门

**详细执行指南：** [[#D028 详细执行｜接口与数据工具 v0.1 阶段门|打开 Day 028 详细执行]]

**当天任务**

- [ ] 从空目录运行键盘/手柄→MuJoCo→LeRobotDataset→回放闭环。
- [ ] 生成架构图、接口说明和一段脱敏示例数据。
- [ ] 复核许可证、版本和simulation-only标识。

**所需资源：** [R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；[R05 LeRobot 自定义硬件](https://huggingface.co/docs/lerobot/v0.6.0/en/integrate_hardware)；[R20 GitHub Actions 文档](https://docs.github.com/en/actions)

**当天交付物：** releases/io-dataset-v0.1.md

**完成验收：** 一条命令完成最小闭环；示例可复现；未暗示支持不存在的真机。

#### 第 5 周｜Pick-Cube 任务与第一版示范数据｜2026-09-21～2026-09-27

**本周目标：** 冻结单任务协议，用游戏手柄采集第一批可回放、可质检的仿真示范数据。

**阶段门：** 任务、重置、成功定义和采集协议冻结；至少25个有效Episode通过自动与人工检查。

<a id="day-029"></a>

##### Day 029｜2026-09-21 星期一｜2 小时｜Pick-Cube 任务与成功标准

**详细执行指南：** [[#D029 详细执行｜Pick-Cube 任务与成功标准|打开 Day 029 详细执行]]

**当天任务**

- [ ] 定义抓取方块并放入目标区的初始状态、控制时长和终止条件。
- [ ] 成功判定同时使用物体位置、夹爪状态和稳定保持时间。
- [ ] 先冻结协议ID，再开始正式采集。

**所需资源：** [R43 LeRobot Imitation Learning in Simulation](https://huggingface.co/docs/lerobot/main/il_sim)

**当天交付物：** dataset/task-spec-pick-cube-v1.md

**完成验收：** 第三方按文档可判断成功/失败；协议含超时和异常规则；协议ID进入每个Episode。

<a id="day-030"></a>

##### Day 030｜2026-09-22 星期二｜2 小时｜确定性重置与位置随机化

**详细执行指南：** [[#D030 详细执行｜确定性重置与位置随机化|打开 Day 030 详细执行]]

**当天任务**

- [ ] 实现固定种子和训练范围内的位置随机化。
- [ ] 区分训练位置、验证位置和不可达位置。
- [ ] 测试重置碰撞、物体掉落和失败后的状态清理。

**所需资源：** [R16 MuJoCo 文档](https://mujoco.readthedocs.io/en/stable/)

**当天交付物：** sim/task_reset.py、tests/test_task_reset.py

**完成验收：** 100次重置符合范围；同种子一致；失败Episode不污染下一次。

<a id="day-031"></a>

##### Day 031｜2026-09-23 星期三｜2 小时｜相机与视觉采集参数冻结

**详细执行指南：** [[#D031 详细执行｜相机与视觉采集参数冻结|打开 Day 031 详细执行]]

**当天任务**

- [ ] 比较单相机/双相机和128/256分辨率的资源成本。
- [ ] 冻结主相机、FPS、曝光等仿真假设和裁剪策略。
- [ ] 确保云端CI可关闭渲染，本地采集保留视觉观测。

**所需资源：** [R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；[R16 MuJoCo 文档](https://mujoco.readthedocs.io/en/stable/)

**当天交付物：** configs/cameras-v1.yaml、reports/camera-budget.md

**完成验收：** 配置能在8GB内存环境读取；图像字段稳定；不为追求画质牺牲采集稳定性。

<a id="day-032"></a>

##### Day 032｜2026-09-24 星期四｜2 小时｜5个 Pilot Episode

**详细执行指南：** [[#D032 详细执行｜5个 Pilot Episode|打开 Day 032 详细执行]]

**当天任务**

- [ ] 按冻结协议采集5个示范，保留成功和至少1个失败。
- [ ] 逐个回放并记录控制困难、无效动作和重置问题。
- [ ] 只修改工具缺陷，不在看到结果后改变成功定义。

**所需资源：** [R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；[R43 LeRobot Imitation Learning in Simulation](https://huggingface.co/docs/lerobot/main/il_sim)

**当天交付物：** dataset/pilot-5、reviews/pilot-5.md

**完成验收：** 5个Episode均可回放；失败原因明确；协议未被事后改写。

<a id="day-033"></a>

##### Day 033｜2026-09-25 星期五｜2 小时｜Pilot 复盘与采集工具修正

**详细执行指南：** [[#D033 详细执行｜Pilot 复盘与采集工具修正|打开 Day 033 详细执行]]

**当天任务**

- [ ] 统计Episode长度、动作范围、静止比例和同步异常。
- [ ] 修正dead-man、灵敏度、重置或UI问题并增加回归测试。
- [ ] 创建数据版本v0.1，不覆盖原Pilot。

**所需资源：** [R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)

**当天交付物：** reports/pilot-quality.csv、dataset/v0.1-manifest.json

**完成验收：** 所有修改有测试；原Pilot校验和保留；下一批参数已冻结。

<a id="day-034"></a>

##### Day 034｜2026-09-26 星期六｜4 小时｜正式采集20个 Episode

**详细执行指南：** [[#D034 详细执行｜正式采集20个 Episode|打开 Day 034 详细执行]]

**当天任务**

- [ ] 按相同协议分两批采集，每批后立即校验和备份。
- [ ] 保留失败、超时和人工放弃Episode及原因。
- [ ] 采集时记录手柄配置、模型commit、随机种子和环境版本。

**所需资源：** [R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；[R43 LeRobot Imitation Learning in Simulation](https://huggingface.co/docs/lerobot/main/il_sim)；H05 数据与模型存储

**当天交付物：** dataset/batch-a-20、checksums.sha256

**完成验收：** 至少20个原始Episode完整落盘；每个有版本和结束原因；损坏为0或有明确隔离记录。

<a id="day-035"></a>

##### Day 035｜2026-09-27 星期日｜2 小时｜第一版 Dataset Card

**详细执行指南：** [[#D035 详细执行｜第一版 Dataset Card|打开 Day 035 详细执行]]

**当天任务**

- [ ] 汇总Pilot和正式批次的来源、任务、字段、许可和限制。
- [ ] 标明全部数据来自MuJoCo仿真与游戏手柄示教。
- [ ] 列出失败分布、已知偏差和禁止推导的结论。

**所需资源：** [R18 Hugging Face Dataset Cards](https://huggingface.co/docs/hub/en/datasets-cards)

**当天交付物：** DATASET_CARD-v0.1.md 与 split-manifest.json

**完成验收：** 至少25个有效Episode进入清单；仿真来源醒目；统计可由脚本重算。

#### 第 6 周｜数据质量、扩充与版本发布｜2026-09-28～2026-10-04

**本周目标：** 将手工示范提升为可自动检查、可分割、可版本化并适合训练的数据集。

**阶段门：** 累计至少50个有效Episode；数据校验、人工复核、split、Dataset Card和校验和全部通过。

<a id="day-036"></a>

##### Day 036｜2026-09-28 星期一｜2 小时｜自动数据质量检查器

**详细执行指南：** [[#D036 详细执行｜自动数据质量检查器|打开 Day 036 详细执行]]

**当天任务**

- [ ] 检查schema、shape、dtype、时间戳单调、NaN、动作范围和文件完整性。
- [ ] 输出机器可读JSON和人工可读Markdown。
- [ ] 为每种损坏构造测试夹具。

**所需资源：** [R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)

**当天交付物：** tools/validate_dataset.py、tests/fixtures/bad-datasets

**完成验收：** 不少于10类异常被稳定识别；正常数据零误报或有解释；CI运行检查器。

<a id="day-037"></a>

##### Day 037｜2026-09-29 星期二｜2 小时｜状态、动作与视觉同步审计

**详细执行指南：** [[#D037 详细执行｜状态、动作与视觉同步审计|打开 Day 037 详细执行]]

**当天任务**

- [ ] 计算相邻时间间隔、动作滞后和图像帧间隔。
- [ ] 可视化末端轨迹、夹爪和物体位置。
- [ ] 识别并隔离同步异常，不做静默插值。

**所需资源：** [R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)

**当天交付物：** reports/sync-quality-v1.md、plots/

**完成验收：** 同步阈值事先定义；异常Episode列表固定；原数据不被改写。

<a id="day-038"></a>

##### Day 038｜2026-09-30 星期三｜2 小时｜图像、视频与磁盘完整性

**详细执行指南：** [[#D038 详细执行｜图像、视频与磁盘完整性|打开 Day 038 详细执行]]

**当天任务**

- [ ] 检查视频可解码、帧数、分辨率、编码和校验和。
- [ ] 模拟截断视频、缺帧和空间不足。
- [ ] 建立只追加原始区、工作区和公开脱敏区。

**所需资源：** [R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；H05 数据与模型存储

**当天交付物：** tools/check_media.py、docs/storage-layout.md

**完成验收：** 媒体异常可检测；磁盘不足安全停止；三个数据区权限和用途明确。

<a id="day-039"></a>

##### Day 039｜2026-10-01 星期四｜2 小时｜成功/失败人工复核界面

**详细执行指南：** [[#D039 详细执行｜成功/失败人工复核界面|打开 Day 039 详细执行]]

**当天任务**

- [ ] 生成Episode缩略图、轨迹和关键时间点。
- [ ] 提供成功、失败类型、是否保留和备注字段。
- [ ] 双重检查自动成功判定与人工标签不一致样本。

**所需资源：** [R18 Hugging Face Dataset Cards](https://huggingface.co/docs/hub/en/datasets-cards)

**当天交付物：** tools/review_episodes.py、annotations-v1.csv

**完成验收：** 全部候选Episode有人工标签；不一致样本有复核结论；标签修改可追溯。

<a id="day-040"></a>

##### Day 040｜2026-10-02 星期五｜2 小时｜去重、训练/验证/测试划分

**详细执行指南：** [[#D040 详细执行｜去重、训练/验证/测试划分|打开 Day 040 详细执行]]

**当天任务**

- [ ] 基于种子、初始位姿和轨迹特征检查重复。
- [ ] 按初始位置而非随机行划分，避免相近Episode泄漏。
- [ ] 冻结split manifest和生成脚本。

**所需资源：** [R18 Hugging Face Dataset Cards](https://huggingface.co/docs/hub/en/datasets-cards)

**当天交付物：** dataset/splits-v1.json、tools/make_splits.py

**完成验收：** 划分可重复；不同split无重复ID；测试集在训练前冻结。

<a id="day-041"></a>

##### Day 041｜2026-10-03 星期六｜4 小时｜补采与困难样本扩充

**详细执行指南：** [[#D041 详细执行｜补采与困难样本扩充|打开 Day 041 详细执行]]

**当天任务**

- [ ] 根据失败分布选择困难起点和操作路径。
- [ ] 再采集至少25个候选Episode并逐批校验。
- [ ] 保留成功率变化但不把采集成功率当策略成功率。

**所需资源：** [R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；[R43 LeRobot Imitation Learning in Simulation](https://huggingface.co/docs/lerobot/main/il_sim)

**当天交付物：** dataset/batch-b-25、reports/collection-v2.md

**完成验收：** 累计至少50个有效Episode；困难样本有明确选择依据；所有原始批次有校验和。

<a id="day-042"></a>

##### Day 042｜2026-10-04 星期日｜2 小时｜数据集 v1.0 发布门

**详细执行指南：** [[#D042 详细执行｜数据集 v1.0 发布门|打开 Day 042 详细执行]]

**当天任务**

- [ ] 重跑全部质量、同步、媒体和split检查。
- [ ] 定稿Dataset Card、统计表、许可和simulation-only声明。
- [ ] 生成私有v1.0 tag；公开上传仍需单独隐私审查。

**所需资源：** [R18 Hugging Face Dataset Cards](https://huggingface.co/docs/hub/en/datasets-cards)；[A02 Hugging Face Hub 账号](https://huggingface.co/)

**当天交付物：** releases/dataset-v1.0.md、DATASET_CARD.md

**完成验收：** 所有检查通过；统计可重算；没有自动上传私人仓库或原始身份数据。

#### 第 7 周｜ROS2 与仿真系统集成｜2026-10-05～2026-10-11

**本周目标：** 用 ROS2 Jazzy 暴露 MuJoCo 状态、控制、tf、录包和诊断，同时保持 LeRobot 环境隔离。

**阶段门：** ROS2进程与LeRobot进程通过明确IPC桥接；状态、动作、tf、rosbag和故障诊断可复现。

<a id="day-043"></a>

##### Day 043｜2026-10-05 星期一｜2 小时｜ROS2 Jazzy 与环境隔离

**详细执行指南：** [[#D043 详细执行｜ROS2 Jazzy 与环境隔离|打开 Day 043 详细执行]]

**当天任务**

- [ ] 在Ubuntu 24.04安装ROS2 Jazzy并记录apt版本。
- [ ] 建立独立ros2_ws，不在LeRobot uv环境直接混用二进制rclpy。
- [ ] 验证talker/listener和跨进程通信。

**所需资源：** [R12 ROS 2 官方文档](https://docs.ros.org/en/jazzy/index.html)；[R29 ROS 2 Jazzy Python 环境指南](https://docs.ros.org/en/jazzy/How-To-Guides/Using-Python-Packages.html)

**当天交付物：** docs/ros2-environment.md、ros2_ws

**完成验收：** 新shell可启动ROS2；两个Python环境边界清晰；基础通信通过。

<a id="day-044"></a>

##### Day 044｜2026-10-06 星期二｜2 小时｜EdgeVLA 消息、Service 与 Action

**详细执行指南：** [[#D044 详细执行｜EdgeVLA 消息、Service 与 Action|打开 Day 044 详细执行]]

**当天任务**

- [ ] 定义RobotState、TeleopCommand、EpisodeEvent和Reset服务。
- [ ] 为长操作使用Action并设计取消语义。
- [ ] 测试字段版本、超时和无订阅者情况。

**所需资源：** [R12 ROS 2 官方文档](https://docs.ros.org/en/jazzy/index.html)

**当天交付物：** ros2_ws/src/edgevla_interfaces

**完成验收：** 接口可构建；rosidl检查通过；取消和超时有测试。

<a id="day-045"></a>

##### Day 045｜2026-10-07 星期三｜2 小时｜Franka URDF、tf2 与坐标系

**详细执行指南：** [[#D045 详细执行｜Franka URDF、tf2 与坐标系|打开 Day 045 详细执行]]

**当天任务**

- [ ] 加载Franka描述并定义world、base、ee和camera坐标。
- [ ] 发布静态/动态tf并与MuJoCo坐标约定对照。
- [ ] 用脚本检查树断裂、重复frame和异常跳变。

**所需资源：** [R12 ROS 2 官方文档](https://docs.ros.org/en/jazzy/index.html)；[R13 MoveIt 2 Jazzy 入门](https://moveit.picknik.ai/main/doc/tutorials/getting_started/getting_started.html)；[R44 MuJoCo Menagerie](https://github.com/google-deepmind/mujoco_menagerie)

**当天交付物：** ros2_ws/src/edgevla_description、tf报告

**完成验收：** tf树连通；末端位姿与MuJoCo在容差内一致；坐标图可复核。

<a id="day-046"></a>

##### Day 046｜2026-10-08 星期四｜2 小时｜MuJoCo—ROS2 进程桥

**详细执行指南：** [[#D046 详细执行｜MuJoCo—ROS2 进程桥|打开 Day 046 详细执行]]

**当天任务**

- [ ] 选择socket/ZMQ或ROS消息桥接LeRobot环境与ROS2环境。
- [ ] 发布状态、图像与诊断，接收限幅后的动作。
- [ ] 断开任一进程时进入暂停并清空动作队列。

**所需资源：** [R12 ROS 2 官方文档](https://docs.ros.org/en/jazzy/index.html)；[R29 ROS 2 Jazzy Python 环境指南](https://docs.ros.org/en/jazzy/How-To-Guides/Using-Python-Packages.html)

**当天交付物：** bridge/mujoco_ros2_bridge、集成测试

**完成验收：** 双进程通信稳定；重连不跳变；断连安全停止。

<a id="day-047"></a>

##### Day 047｜2026-10-09 星期五｜2 小时｜rosbag2/MCAP 录制与回放

**详细执行指南：** [[#D047 详细执行｜rosbag2/MCAP 录制与回放|打开 Day 047 详细执行]]

**当天任务**

- [ ] 录制状态、动作、图像、tf和Episode事件。
- [ ] 从MCAP重建时间线并与LeRobotDataset Episode对齐。
- [ ] 测试缺topic、时间跳变和不完整bag。

**所需资源：** [R12 ROS 2 官方文档](https://docs.ros.org/en/jazzy/index.html)

**当天交付物：** bags/sample.mcap、tools/bag_dataset_compare.py

**完成验收：** bag可回放；关键字段与Dataset一致；异常bag有报告。

<a id="day-048"></a>

##### Day 048｜2026-10-10 星期六｜4 小时｜Lifecycle、参数与故障诊断

**详细执行指南：** [[#D048 详细执行｜Lifecycle、参数与故障诊断|打开 Day 048 详细执行]]

**当天任务**

- [ ] 将桥接节点实现为Lifecycle Node。
- [ ] 暴露控制频率、工作空间、dead-man和超时参数。
- [ ] 注入仿真暂停、消息积压、相机掉帧和动作过期。

**所需资源：** [R12 ROS 2 官方文档](https://docs.ros.org/en/jazzy/index.html)

**当天交付物：** ros2_ws/src/edgevla_bridge、diagnostics/

**完成验收：** 生命周期转换正确；故障可观测；动作过期不执行。

<a id="day-049"></a>

##### Day 049｜2026-10-11 星期日｜2 小时｜ROS2 仿真集成阶段门

**详细执行指南：** [[#D049 详细执行｜ROS2 仿真集成阶段门|打开 Day 049 详细执行]]

**当天任务**

- [ ] 用launch文件启动MuJoCo、桥接、tf、诊断和录包。
- [ ] 完成一次手柄操作与数据/MCAP双记录演示。
- [ ] 记录ROS2是仿真系统集成证据，不是真机驱动经验。

**所需资源：** [R12 ROS 2 官方文档](https://docs.ros.org/en/jazzy/index.html)；[R20 GitHub Actions 文档](https://docs.github.com/en/actions)

**当天交付物：** releases/ros2-sim-v0.1.md、launch脚本

**完成验收：** 一条命令启动；录制和回放通过；环境边界与真实性声明完整。

#### 第 8 周｜ACT 模仿学习基线｜2026-10-12～2026-10-18

**本周目标：** 用自采MuJoCo数据完成ACT的冒烟、训练、恢复、推理和第一轮冻结评测。

**阶段门：** ACT checkpoint可恢复、可推理；训练配置和数据版本固定；评测不使用训练集成功率冒充泛化。

<a id="day-050"></a>

##### Day 050｜2026-10-12 星期一｜2 小时｜ACT 数据兼容与算力预算

**详细执行指南：** [[#D050 详细执行｜ACT 数据兼容与算力预算|打开 Day 050 详细执行]]

**当天任务**

- [ ] 核对LeRobot ACT输入输出与自采feature/action schema。
- [ ] 计算图像、batch、steps和checkpoint的预计磁盘/显存。
- [ ] 确定本地CPU只做smoke，正式训练使用按需GPU并设置费用/时间上限。

**所需资源：** [R06 LeRobot ACT 策略文档](https://huggingface.co/docs/lerobot/v0.6.0/en/act)；[R09 LeRobot 算力指南](https://huggingface.co/docs/lerobot/v0.6.0/en/hardware_guide)；[R28 Hugging Face Jobs GPU 价格](https://huggingface.co/docs/hub/jobs-pricing)；H04 按需GPU

**当天交付物：** configs/act-budget-v1.md、compatibility-report.md

**完成验收：** schema兼容；预算有硬上限；不在4核8GB云服务器启动正式训练。

<a id="day-051"></a>

##### Day 051｜2026-10-13 星期二｜2 小时｜ACT 配置与数据审查

**详细执行指南：** [[#D051 详细执行｜ACT 配置与数据审查|打开 Day 051 详细执行]]

**当天任务**

- [ ] 固定dataset版本、split、seed、图像和action chunk配置。
- [ ] 抽样检查训练/验证batch和归一化统计。
- [ ] 将最终测试集权限设为训练阶段只读。

**所需资源：** [R06 LeRobot ACT 策略文档](https://huggingface.co/docs/lerobot/v0.6.0/en/act)；[R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)

**当天交付物：** configs/act-pick-cube-v1.yaml、data-audit.md

**完成验收：** 配置可序列化；batch shape通过；测试split未用于调参。

<a id="day-052"></a>

##### Day 052｜2026-10-14 星期三｜2 小时｜5个Episode过拟合诊断

**详细执行指南：** [[#D052 详细执行｜5个Episode过拟合诊断|打开 Day 052 详细执行]]

**当天任务**

- [ ] 只用5个训练Episode运行短训练。
- [ ] 验证loss下降、checkpoint保存和单样本推理。
- [ ] 若不能过拟合先修数据/模型链路，不扩大训练。

**所需资源：** [R06 LeRobot ACT 策略文档](https://huggingface.co/docs/lerobot/v0.6.0/en/act)；[R14 PyTorch Tutorials](https://docs.pytorch.org/tutorials/)

**当天交付物：** experiments/act-overfit-5

**完成验收：** 可在小样本上显著拟合或形成明确阻塞报告；checkpoint可加载；命令可复现。

<a id="day-053"></a>

##### Day 053｜2026-10-15 星期四｜2 小时｜GPU 冒烟与训练任务封装

**详细执行指南：** [[#D053 详细执行｜GPU 冒烟与训练任务封装|打开 Day 053 详细执行]]

**当天任务**

- [ ] 在按需GPU运行小步数smoke，记录驱动、CUDA、PyTorch和显存峰值。
- [ ] 封装启动、日志、超时、预算和自动停止。
- [ ] 验证任务失败不会丢失配置和最后checkpoint。

**所需资源：** [R06 LeRobot ACT 策略文档](https://huggingface.co/docs/lerobot/v0.6.0/en/act)；[R09 LeRobot 算力指南](https://huggingface.co/docs/lerobot/v0.6.0/en/hardware_guide)；[R28 Hugging Face Jobs GPU 价格](https://huggingface.co/docs/hub/jobs-pricing)

**当天交付物：** experiments/act-gpu-smoke、scripts/run_gpu_job.sh

**完成验收：** smoke通过；资源数据完整；超过预算/时间会自动终止。

<a id="day-054"></a>

##### Day 054｜2026-10-16 星期五｜2 小时｜ACT v1 正式训练

**详细执行指南：** [[#D054 详细执行｜ACT v1 正式训练|打开 Day 054 详细执行]]

**当天任务**

- [ ] 使用冻结数据与配置启动训练。
- [ ] 将训练墙钟与人工工作分开，人工只检查日志和异常。
- [ ] 保存配置、git commit、数据revision、曲线和checkpoint索引。

**所需资源：** [R06 LeRobot ACT 策略文档](https://huggingface.co/docs/lerobot/v0.6.0/en/act)；[R17 Weights & Biases 文档](https://docs.wandb.ai/)

**当天交付物：** experiments/act-v1

**完成验收：** 任务启动并产生有效checkpoint；元数据齐全；无须在2小时人工时间盒内强行训练结束。

<a id="day-055"></a>

##### Day 055｜2026-10-17 星期六｜4 小时｜恢复训练与Checkpoint治理

**详细执行指南：** [[#D055 详细执行｜恢复训练与Checkpoint治理|打开 Day 055 详细执行]]

**当天任务**

- [ ] 从中间checkpoint恢复并确认step、优化器和随机状态。
- [ ] 对中断、损坏checkpoint和磁盘不足做失败测试。
- [ ] 选择候选checkpoint时只参考验证指标，不查看冻结测试结果。

**所需资源：** [R06 LeRobot ACT 策略文档](https://huggingface.co/docs/lerobot/v0.6.0/en/act)

**当天交付物：** reports/act-resume.md、checkpoint-manifest.json

**完成验收：** 恢复轨迹连续；损坏文件被拒绝；候选选择规则事先记录。

<a id="day-056"></a>

##### Day 056｜2026-10-18 星期日｜2 小时｜ACT 离线检查与上线前门

**详细执行指南：** [[#D056 详细执行｜ACT 离线检查与上线前门|打开 Day 056 详细执行]]

**当天任务**

- [ ] 对验证batch运行推理并检查动作分布、饱和和NaN。
- [ ] 在MuJoCo中以低速、短时、可中止方式做预检。
- [ ] 冻结下一周评测协议和ACT候选checkpoint。

**所需资源：** [R06 LeRobot ACT 策略文档](https://huggingface.co/docs/lerobot/v0.6.0/en/act)；[R19 Hugging Face Model Cards](https://huggingface.co/docs/hub/en/model-cards)

**当天交付物：** safety/act-preflight.md、MODEL_CARD_ACT-draft.md

**完成验收：** 无NaN/越界动作；预检不崩溃；checkpoint和评测协议均已冻结。

#### 第 9 周｜ACT 仿真评测与鲁棒性｜2026-10-19～2026-10-25

**本周目标：** 用冻结协议评测ACT，并通过位置、光照、相机和失败分类形成可信的simulation-only结论。

**阶段门：** 评测包含原始逐轮结果、失败视频、样本量和环境版本；所有数字可重算。

<a id="day-057"></a>

##### Day 057｜2026-10-19 星期一｜2 小时｜ACT 评测协议冻结

**详细执行指南：** [[#D057 详细执行｜ACT 评测协议冻结|打开 Day 057 详细执行]]

**当天任务**

- [ ] 定义任务、初始位置、最大步数、成功保持和失败类型。
- [ ] 固定checkpoint、模型commit、仿真commit和随机种子列表。
- [ ] 在跑测试前生成只读protocol hash。

**所需资源：** [R19 Hugging Face Model Cards](https://huggingface.co/docs/hub/en/model-cards)

**当天交付物：** evaluations/act-v1/protocol.md 与 hash

**完成验收：** 协议在结果生成前冻结；修改需新版本；成功定义可程序化。

<a id="day-058"></a>

##### Day 058｜2026-10-20 星期二｜2 小时｜Rollout Harness 与逐轮记录

**详细执行指南：** [[#D058 详细执行｜Rollout Harness 与逐轮记录|打开 Day 058 详细执行]]

**当天任务**

- [ ] 实现批量重置、策略推理、动作守卫和视频/轨迹保存。
- [ ] 每轮保存seed、开始/结束状态、成功、失败类型和耗时。
- [ ] 策略异常时停止该轮但继续保留故障证据。

**所需资源：** [R24 LeRobot Policy Rollout](https://huggingface.co/docs/lerobot/v0.6.0/en/inference)

**当天交付物：** evaluation/rollout.py、tests/test_rollout.py

**完成验收：** 合成策略和失败策略测试通过；每轮产物完整；崩溃不覆盖已有结果。

<a id="day-059"></a>

##### Day 059｜2026-10-21 星期三｜2 小时｜ACT 冻结基线评测

**详细执行指南：** [[#D059 详细执行｜ACT 冻结基线评测|打开 Day 059 详细执行]]

**当天任务**

- [ ] 按协议运行不少于20个Episode。
- [ ] 不删除失败、卡住或超时轮次。
- [ ] 生成results.csv并从原始记录重算汇总。

**所需资源：** [R24 LeRobot Policy Rollout](https://huggingface.co/docs/lerobot/v0.6.0/en/inference)

**当天交付物：** evaluations/act-v1/results.csv、raw/

**完成验收：** 样本量达到协议；逐轮结果与汇总一致；所有视频标记仿真。

<a id="day-060"></a>

##### Day 060｜2026-10-22 星期四｜2 小时｜失败分类与可解释回放

**详细执行指南：** [[#D060 详细执行｜失败分类与可解释回放|打开 Day 060 详细执行]]

**当天任务**

- [ ] 按未抓取、提前闭合、掉落、越界、超时等分类。
- [ ] 为每类选择代表性成功/失败轨迹。
- [ ] 区分数据缺口、控制缺口和模型缺口，不凭单轮下结论。

**所需资源：** [R19 Hugging Face Model Cards](https://huggingface.co/docs/hub/en/model-cards)

**当天交付物：** reports/act-failure-taxonomy.md

**完成验收：** 每个失败有唯一主分类和可复核证据；未强行解释未知原因。

<a id="day-061"></a>

##### Day 061｜2026-10-23 星期五｜2 小时｜未见位置评测

**详细执行指南：** [[#D061 详细执行｜未见位置评测|打开 Day 061 详细执行]]

**当天任务**

- [ ] 在训练split未覆盖的位置运行冻结评测。
- [ ] 保持其他条件不变，隔离位置变化。
- [ ] 报告逐轮结果和置信区间/样本限制。

**所需资源：** [R19 Hugging Face Model Cards](https://huggingface.co/docs/hub/en/model-cards)

**当天交付物：** evaluations/act-v1/unseen-position.csv

**完成验收：** 测试位置未泄漏到训练；样本量明确；不把小样本结果外推为真实世界泛化。

<a id="day-062"></a>

##### Day 062｜2026-10-24 星期六｜4 小时｜光照与相机扰动评测

**详细执行指南：** [[#D062 详细执行｜光照与相机扰动评测|打开 Day 062 详细执行]]

**当天任务**

- [ ] 分别改变光照、相机小偏移和图像噪声。
- [ ] 一次只改变一个主变量并保存配置diff。
- [ ] 比较基线与扰动失败分布。

**所需资源：** [R16 MuJoCo 文档](https://mujoco.readthedocs.io/en/stable/)；[R19 Hugging Face Model Cards](https://huggingface.co/docs/hub/en/model-cards)

**当天交付物：** evaluations/act-v1/visual-robustness.csv

**完成验收：** 变量控制可复核；结果来自冻结checkpoint；不重新调参污染测试。

<a id="day-063"></a>

##### Day 063｜2026-10-25 星期日｜2 小时｜ACT v1 报告与阶段门

**详细执行指南：** [[#D063 详细执行｜ACT v1 报告与阶段门|打开 Day 063 详细执行]]

**当天任务**

- [ ] 汇总训练、基线、未见位置和视觉扰动。
- [ ] 列出最强结论、失败结论和不能推导的内容。
- [ ] 决定是否进入SmolVLA；ACT链路不稳定时先修复。

**所需资源：** [R19 Hugging Face Model Cards](https://huggingface.co/docs/hub/en/model-cards)

**当天交付物：** reports/act-v1-evaluation.md、MODEL_CARD_ACT.md

**完成验收：** 数字可由原始CSV重算；包含成功和失败演示；明确simulation-only。

#### 第 10 周｜SmolVLA 数据与微调｜2026-10-26～2026-11-01

**本周目标：** 在ACT链路稳定后，为同一仿真任务增加语言条件并完成SmolVLA小规模微调。

**阶段门：** 语言数据、算力、checkpoint、恢复和预检全部可复现；训练成本受控。

<a id="day-064"></a>

##### Day 064｜2026-10-26 星期一｜2 小时｜SmolVLA 架构与数据流审计

**详细执行指南：** [[#D064 详细执行｜SmolVLA 架构与数据流审计|打开 Day 064 详细执行]]

**当天任务**

- [ ] 阅读官方SmolVLA数据、processor、policy和推理路径。
- [ ] 绘制图像、状态、语言、动作进入模型的shape和dtype。
- [ ] 列出与ACT数据的兼容与转换点。

**所需资源：** [R07 SmolVLA 官方说明](https://huggingface.co/blog/smolvla)；[R25 SmolVLA 官方微调指南](https://huggingface.co/docs/lerobot/v0.6.0/en/smolvla)

**当天交付物：** docs/smolvla-dataflow.md

**完成验收：** 数据流图可对应代码；所有shape有实测；未把阅读写成模型研发经验。

<a id="day-065"></a>

##### Day 065｜2026-10-27 星期二｜2 小时｜语言任务与标注规则

**详细执行指南：** [[#D065 详细执行｜语言任务与标注规则|打开 Day 065 详细执行]]

**当天任务**

- [ ] 为同一Pick-Cube任务定义有限、等价和禁止的指令表达。
- [ ] 将语言加入Dataset，保留原任务ID和Episode来源。
- [ ] 检查语言split，避免测试表达直接复制到训练。

**所需资源：** [R25 SmolVLA 官方微调指南](https://huggingface.co/docs/lerobot/v0.6.0/en/smolvla)；[R18 Hugging Face Dataset Cards](https://huggingface.co/docs/hub/en/datasets-cards)

**当天交付物：** dataset/language-spec-v1.md、language-manifest.json

**完成验收：** 每个Episode语言可追溯；测试表达隔离；不凭空增加未示教任务。

<a id="day-066"></a>

##### Day 066｜2026-10-28 星期三｜2 小时｜SmolVLA GPU 与依赖冒烟

**详细执行指南：** [[#D066 详细执行｜SmolVLA GPU 与依赖冒烟|打开 Day 066 详细执行]]

**当天任务**

- [ ] 在最小batch/分辨率下加载模型和一个batch。
- [ ] 记录显存、系统内存、下载体积和模型revision。
- [ ] 设置费用、墙钟、自动终止和缓存策略。

**所需资源：** [R09 LeRobot 算力指南](https://huggingface.co/docs/lerobot/v0.6.0/en/hardware_guide)；[R25 SmolVLA 官方微调指南](https://huggingface.co/docs/lerobot/v0.6.0/en/smolvla)；[R28 Hugging Face Jobs GPU 价格](https://huggingface.co/docs/hub/jobs-pricing)

**当天交付物：** experiments/smolvla-smoke、reports/gpu-budget.md

**完成验收：** 前向/短反向通过或有明确阻塞；revision固定；不在4核8GB CPU服务器训练。

<a id="day-067"></a>

##### Day 067｜2026-10-29 星期四｜2 小时｜微调配置冻结

**详细执行指南：** [[#D067 详细执行｜微调配置冻结|打开 Day 067 详细执行]]

**当天任务**

- [ ] 固定dataset、语言split、冻结层、学习率、batch和seed。
- [ ] 对输入processor与动作反归一化做单元测试。
- [ ] 生成配置hash并锁定测试split。

**所需资源：** [R25 SmolVLA 官方微调指南](https://huggingface.co/docs/lerobot/v0.6.0/en/smolvla)

**当天交付物：** configs/smolvla-pick-cube-v1.yaml

**完成验收：** 配置可重建；processor测试通过；协议和预算在训练前冻结。

<a id="day-068"></a>

##### Day 068｜2026-10-30 星期五｜2 小时｜SmolVLA v1 微调启动

**详细执行指南：** [[#D068 详细执行｜SmolVLA v1 微调启动|打开 Day 068 详细执行]]

**当天任务**

- [ ] 按冻结配置启动按需GPU训练。
- [ ] 记录git、模型revision、数据revision、环境和日志URL/本地路径。
- [ ] 人工时间只用于检查启动与异常，不等待整个训练。

**所需资源：** [R25 SmolVLA 官方微调指南](https://huggingface.co/docs/lerobot/v0.6.0/en/smolvla)；[R17 Weights & Biases 文档](https://docs.wandb.ai/)

**当天交付物：** experiments/smolvla-v1

**完成验收：** 产生有效日志和checkpoint；训练任务有超时/预算；元数据完整。

<a id="day-069"></a>

##### Day 069｜2026-10-31 星期六｜4 小时｜训练恢复与Checkpoint 初评

**详细执行指南：** [[#D069 详细执行｜训练恢复与Checkpoint 初评|打开 Day 069 详细执行]]

**当天任务**

- [ ] 从checkpoint恢复并验证step与优化器状态。
- [ ] 在验证batch检查动作分布、语言输入和NaN。
- [ ] 按预先规则选择唯一候选checkpoint。

**所需资源：** [R25 SmolVLA 官方微调指南](https://huggingface.co/docs/lerobot/v0.6.0/en/smolvla)

**当天交付物：** reports/smolvla-resume.md、checkpoint-manifest.json

**完成验收：** 恢复一致；候选选择不看测试结果；损坏checkpoint被拒绝。

<a id="day-070"></a>

##### Day 070｜2026-11-01 星期日｜2 小时｜SmolVLA 仿真上线前门

**详细执行指南：** [[#D070 详细执行｜SmolVLA 仿真上线前门|打开 Day 070 详细执行]]

**当天任务**

- [ ] 在低速、短时、固定起点运行少量预检。
- [ ] 检查动作年龄、饱和、越界和语言缺失。
- [ ] 冻结下一周评测协议与候选checkpoint。

**所需资源：** [R25 SmolVLA 官方微调指南](https://huggingface.co/docs/lerobot/v0.6.0/en/smolvla)；[R19 Hugging Face Model Cards](https://huggingface.co/docs/hub/en/model-cards)

**当天交付物：** safety/smolvla-preflight.md、MODEL_CARD_SMOLVLA-draft.md

**完成验收：** 无NaN/越界动作；缺语言时安全失败；预检不计入正式评测。

#### 第 11 周｜SmolVLA 评测、对比与异步推理｜2026-11-02～2026-11-08

**本周目标：** 完成语言与位置泛化评测，对比ACT，并建立Policy Server/Robot Client异步推理链路。

**阶段门：** SmolVLA和ACT在同一口径下可比较；异步动作队列有年龄、限幅和断连守卫。

<a id="day-071"></a>

##### Day 071｜2026-11-02 星期一｜2 小时｜SmolVLA 冻结基线评测

**详细执行指南：** [[#D071 详细执行｜SmolVLA 冻结基线评测|打开 Day 071 详细执行]]

**当天任务**

- [ ] 复制ACT协议中可共用的任务和seed。
- [ ] 按SmolVLA协议运行不少于20个Episode。
- [ ] 保存语言、逐轮动作、轨迹、视频和失败类型。

**所需资源：** [R25 SmolVLA 官方微调指南](https://huggingface.co/docs/lerobot/v0.6.0/en/smolvla)

**当天交付物：** evaluations/smolvla-v1/baseline.csv

**完成验收：** 样本量与协议一致；逐轮证据齐全；不删除语言理解失败。

<a id="day-072"></a>

##### Day 072｜2026-11-03 星期二｜2 小时｜未见位置与物体属性变化

**详细执行指南：** [[#D072 详细执行｜未见位置与物体属性变化|打开 Day 072 详细执行]]

**当天任务**

- [ ] 在冻结的未见位置运行评测。
- [ ] 增加有限的颜色/目标区变化，但不声称新任务。
- [ ] 分别报告位置和视觉属性变化。

**所需资源：** [R25 SmolVLA 官方微调指南](https://huggingface.co/docs/lerobot/v0.6.0/en/smolvla)

**当天交付物：** evaluations/smolvla-v1/generalization.csv

**完成验收：** 变化维度分离；数据split无泄漏；结论受样本和仿真范围限制。

<a id="day-073"></a>

##### Day 073｜2026-11-04 星期三｜2 小时｜语言改写与歧义评测

**详细执行指南：** [[#D073 详细执行｜语言改写与歧义评测|打开 Day 073 详细执行]]

**当天任务**

- [ ] 测试等价改写、词序变化和不支持指令。
- [ ] 不支持或歧义指令必须拒绝/暂停而非随意动作。
- [ ] 记录每条语言与结果的对应关系。

**所需资源：** [R25 SmolVLA 官方微调指南](https://huggingface.co/docs/lerobot/v0.6.0/en/smolvla)

**当天交付物：** evaluations/smolvla-v1/language.csv

**完成验收：** 每类语言有预定义预期；歧义指令安全处理；所有结果可追溯。

<a id="day-074"></a>

##### Day 074｜2026-11-05 星期四｜2 小时｜ACT 与 SmolVLA 同口径对比

**详细执行指南：** [[#D074 详细执行｜ACT 与 SmolVLA 同口径对比|打开 Day 074 详细执行]]

**当天任务**

- [ ] 统一任务、seed、环境版本、成功规则和样本量。
- [ ] 比较成功、失败类型、推理时延和资源。
- [ ] 避免用不同协议选择性证明某模型更好。

**所需资源：** [R19 Hugging Face Model Cards](https://huggingface.co/docs/hub/en/model-cards)

**当天交付物：** reports/act-vs-smolvla.md

**完成验收：** 对比表可重算；差异有统计与限制；负面结果保留。

<a id="day-075"></a>

##### Day 075｜2026-11-06 星期五｜2 小时｜Policy Server 本地基线

**详细执行指南：** [[#D075 详细执行｜Policy Server 本地基线|打开 Day 075 详细执行]]

**当天任务**

- [ ] 将策略封装为版本化Policy Server。
- [ ] 定义请求ID、观测时间、模型版本、动作块和错误码。
- [ ] 测试重复请求、过期观测和模型加载失败。

**所需资源：** [R10 LeRobot 异步推理](https://huggingface.co/docs/lerobot/v0.6.0/en/async)

**当天交付物：** async/policy_server、OpenAPI/协议文档

**完成验收：** 接口测试通过；模型版本进入响应；过期观测不产生可执行动作。

<a id="day-076"></a>

##### Day 076｜2026-11-07 星期六｜4 小时｜Robot Client、队列与动作年龄

**详细执行指南：** [[#D076 详细执行｜Robot Client、队列与动作年龄|打开 Day 076 详细执行]]

**当天任务**

- [ ] 实现Robot Client和有限动作队列。
- [ ] 加入动作年龄、队列水位、dead-man和本地限幅。
- [ ] 注入延迟、乱序、断线和服务器重启。

**所需资源：** [R10 LeRobot 异步推理](https://huggingface.co/docs/lerobot/v0.6.0/en/async)；[R11 LeRobot RTC](https://huggingface.co/docs/lerobot/v0.6.0/en/rtc)

**当天交付物：** async/robot_client、tests/test_action_queue.py

**完成验收：** 过期/乱序动作被丢弃；断线后本地停止；恢复需重新握手。

<a id="day-077"></a>

##### Day 077｜2026-11-08 星期日｜2 小时｜模型与异步推理阶段门

**详细执行指南：** [[#D077 详细执行｜模型与异步推理阶段门|打开 Day 077 详细执行]]

**当天任务**

- [ ] 演示本地MuJoCo Robot Client连接独立Policy Server。
- [ ] 分别运行ACT和SmolVLA并记录资源与故障恢复。
- [ ] 冻结可进入云端平台的接口版本。

**所需资源：** [R10 LeRobot 异步推理](https://huggingface.co/docs/lerobot/v0.6.0/en/async)；[R11 LeRobot RTC](https://huggingface.co/docs/lerobot/v0.6.0/en/rtc)

**当天交付物：** releases/policy-stack-v0.1.md

**完成验收：** 两种策略至少一种完整通过；安全守卫测试通过；接口版本已冻结。

#### 第 12 周｜4核8GB云端控制平面与Headless仿真｜2026-11-09～2026-11-15

**本周目标：** 在现有CPU云服务器部署轻量控制平面、无界面MuJoCo测试和实验元数据服务，不承担VLA训练或手柄实时交互。

**阶段门：** 云端资源受限下API、任务、元数据、MQTT和headless smoke稳定；内存、磁盘和恢复有证据。

<a id="day-078"></a>

##### Day 078｜2026-11-09 星期一｜2 小时｜云服务器资源与安全基线

**详细执行指南：** [[#D078 详细执行｜云服务器资源与安全基线|打开 Day 078 详细执行]]

**当天任务**

- [ ] 记录4核8GB服务器OS、CPU、内存、磁盘、端口和现有容器占用。
- [ ] 为EdgeVLA设置独立目录、用户/容器、资源限制和日志轮转。
- [ ] 确认不影响现有个人网站与其他服务。

**所需资源：** [R21 Docker 文档](https://docs.docker.com/)；H02 4核8GB云服务器

**当天交付物：** deploy/cloud-inventory.md、resource-limits.yaml

**完成验收：** 有部署前资源快照；端口无冲突；服务内存和日志上限明确。

<a id="day-079"></a>

##### Day 079｜2026-11-10 星期二｜2 小时｜MuJoCo OSMesa Headless 容器

**详细执行指南：** [[#D079 详细执行｜MuJoCo OSMesa Headless 容器|打开 Day 079 详细执行]]

**当天任务**

- [ ] 构建只含CPU MuJoCo、OSMesa和测试依赖的镜像。
- [ ] 运行固定Franka模型的无渲染与低分辨率smoke。
- [ ] 限制CPU/内存并保存峰值和退出码。

**所需资源：** [R16 MuJoCo 文档](https://mujoco.readthedocs.io/en/stable/)；[R21 Docker 文档](https://docs.docker.com/)；[R52 MuJoCo Headless Rendering](https://github.com/google-deepmind/dm_control#rendering)

**当天交付物：** containers/mujoco-headless、benchmarks/cloud-smoke.csv

**完成验收：** 无显示服务器运行通过；内存不超过设定上限；镜像不包含训练权重。

<a id="day-080"></a>

##### Day 080｜2026-11-11 星期三｜2 小时｜实验注册表 API

**详细执行指南：** [[#D080 详细执行｜实验注册表 API|打开 Day 080 详细执行]]

**当天任务**

- [ ] 实现project、experiment、run、artifact metadata和evaluation接口。
- [ ] 所有对象使用不可变ID、版本和状态机。
- [ ] 为重复提交、非法状态转换和分页编写测试。

**所需资源：** [R47 FastAPI Documentation](https://fastapi.tiangolo.com/)

**当天交付物：** platform/api、OpenAPI文档

**完成验收：** API测试通过；状态转换原子；不存在把任务完成状态提前写入的路径。

<a id="day-081"></a>

##### Day 081｜2026-11-12 星期四｜2 小时｜轻量元数据数据库与迁移

**详细执行指南：** [[#D081 详细执行｜轻量元数据数据库与迁移|打开 Day 081 详细执行]]

**当天任务**

- [ ] 优先使用PostgreSQL；资源不足可用SQLite并记录限制。
- [ ] 设计项目、数据集、模型、评测、设备和审计表。
- [ ] 实现向前迁移、备份和恢复测试。

**所需资源：** [R48 PostgreSQL Documentation](https://www.postgresql.org/docs/)；H02 4核8GB云服务器

**当天交付物：** platform/migrations、schema.md、恢复日志

**完成验收：** 空库可迁移；备份可恢复；数据库不保存大视频或模型二进制。

<a id="day-082"></a>

##### Day 082｜2026-11-13 星期五｜2 小时｜Artifact 与对象存储接口

**详细执行指南：** [[#D082 详细执行｜Artifact 与对象存储接口|打开 Day 082 详细执行]]

**当天任务**

- [ ] 定义本地文件、S3/MinIO兼容的ArtifactStore接口。
- [ ] 只在云服务器保存小样本和清单，大数据指向对象存储。
- [ ] 实现校验和、断点上传和不存在对象处理。

**所需资源：** [R49 MinIO Documentation](https://min.io/docs/minio/linux/index.html)；H05 数据与模型存储

**当天交付物：** platform/artifacts、docs/storage-policy.md

**完成验收：** 校验和验证通过；大文件不进入数据库/Git；未配置对象存储时可降级本地目录。

<a id="day-083"></a>

##### Day 083｜2026-11-14 星期六｜4 小时｜MQTT/WebSocket 状态与任务

**详细执行指南：** [[#D083 详细执行｜MQTT/WebSocket 状态与任务|打开 Day 083 详细执行]]

**当天任务**

- [ ] 设计设备心跳、任务状态、日志摘要和非实时命令主题。
- [ ] 加入QoS、过期、幂等、重连和权限边界。
- [ ] 模拟Robot Client上线、断线、重复消息和过期任务。

**所需资源：** [R30 OASIS MQTT 5.0 规范](https://docs.oasis-open.org/mqtt/mqtt/v5.0/mqtt-v5.0.html)；[R50 EMQX Documentation](https://docs.emqx.com/)

**当天交付物：** platform/messaging、protocol/cloud-v1.md

**完成验收：** 重复/过期命令不重复执行；断线可见；MQTT不承载伺服实时闭环。

<a id="day-084"></a>

##### Day 084｜2026-11-15 星期日｜2 小时｜云端控制平面 v0.1 部署

**详细执行指南：** [[#D084 详细执行｜云端控制平面 v0.1 部署|打开 Day 084 详细执行]]

**当天任务**

- [ ] 用Compose部署API、数据库、MQTT和headless worker。
- [ ] 执行健康检查、资源监控、备份和回滚。
- [ ] 从本地提交一次仿真smoke任务并回收结果。

**所需资源：** [R21 Docker 文档](https://docs.docker.com/)；H02 4核8GB云服务器

**当天交付物：** deploy/cloud-compose、releases/cloud-v0.1.md

**完成验收：** 4核8GB服务器稳定运行；一次任务闭环通过；现有服务无回归。

#### 第 13 周｜EdgeVLA Web 平台与实验闭环｜2026-11-16～2026-11-22

**本周目标：** 建立项目、设备、数据集、模型、实验、评测和失败审查的最小Web平台。

**阶段门：** 浏览器可完成从提交仿真任务到查看数据/模型/评测和失败Episode的端到端流程。

<a id="day-085"></a>

##### Day 085｜2026-11-16 星期一｜2 小时｜认证、项目与权限

**详细执行指南：** [[#D085 详细执行｜认证、项目与权限|打开 Day 085 详细执行]]

**当天任务**

- [ ] 实现管理员登录、会话、CSRF/Origin和登录限流。
- [ ] 建立项目级资源隔离和只读演示角色。
- [ ] 测试未授权、越权和会话过期。

**所需资源：** [R47 FastAPI Documentation](https://fastapi.tiangolo.com/)

**当天交付物：** platform/auth、security/auth-tests.md

**完成验收：** 权限测试通过；密钥不进入前端；审计记录包含操作者和对象。

<a id="day-086"></a>

##### Day 086｜2026-11-17 星期二｜2 小时｜设备、Client 与心跳面板

**详细执行指南：** [[#D086 详细执行｜设备、Client 与心跳面板|打开 Day 086 详细执行]]

**当天任务**

- [ ] 展示Robot Client版本、仿真/真机类型、在线状态和最后心跳。
- [ ] 显示模型、环境和控制模式，不显示本机敏感标识。
- [ ] 实现断线、版本不兼容和时钟漂移告警。

**所需资源：** [R50 EMQX Documentation](https://docs.emqx.com/)

**当天交付物：** platform/web/devices

**完成验收：** 模拟Client可上线/离线；敏感主机信息已脱敏；告警可复现。

<a id="day-087"></a>

##### Day 087｜2026-11-18 星期三｜2 小时｜数据集与模型注册页面

**详细执行指南：** [[#D087 详细执行｜数据集与模型注册页面|打开 Day 087 详细执行]]

**当天任务**

- [ ] 展示Dataset Card、split、统计、校验和和来源。
- [ ] 展示Model Card、checkpoint、数据revision和兼容schema。
- [ ] 禁止删除被实验或评测引用的artifact。

**所需资源：** [R18 Hugging Face Dataset Cards](https://huggingface.co/docs/hub/en/datasets-cards)；[R19 Hugging Face Model Cards](https://huggingface.co/docs/hub/en/model-cards)

**当天交付物：** platform/web/registry

**完成验收：** 引用保护测试通过；来源和simulation-only醒目；大文件使用签名/受控链接。

<a id="day-088"></a>

##### Day 088｜2026-11-19 星期四｜2 小时｜实验任务与日志页面

**详细执行指南：** [[#D088 详细执行｜实验任务与日志页面|打开 Day 088 详细执行]]

**当天任务**

- [ ] 创建训练、评测和headless smoke任务记录。
- [ ] 流式展示状态、阶段日志、资源和失败原因。
- [ ] 任务取消只改变云端任务，不越权控制本地实时运动。

**所需资源：** [R47 FastAPI Documentation](https://fastapi.tiangolo.com/)

**当天交付物：** platform/web/experiments

**完成验收：** 状态与后端一致；取消幂等；日志无token和私人路径。

<a id="day-089"></a>

##### Day 089｜2026-11-20 星期五｜2 小时｜评测与失败时间线

**详细执行指南：** [[#D089 详细执行｜评测与失败时间线|打开 Day 089 详细执行]]

**当天任务**

- [ ] 按模型、任务、seed和失败类型筛选。
- [ ] 同步显示视频、动作、末端轨迹和关键事件。
- [ ] 支持人工备注但保留原始自动判定。

**所需资源：** [R19 Hugging Face Model Cards](https://huggingface.co/docs/hub/en/model-cards)

**当天交付物：** platform/web/evaluations

**完成验收：** 至少一组ACT/SmolVLA结果可浏览；原始判定不可静默覆盖；失败视频可定位。

<a id="day-090"></a>

##### Day 090｜2026-11-21 星期六｜4 小时｜远程非实时任务与安全边界

**详细执行指南：** [[#D090 详细执行｜远程非实时任务与安全边界|打开 Day 090 详细执行]]

**当天任务**

- [ ] 实现提交headless评测、下载artifact和停止后台任务。
- [ ] 所有远程命令带ID、过期时间、权限和审计。
- [ ] 明确禁止通过公网发送无保护关节/伺服实时控制。

**所需资源：** [R30 OASIS MQTT 5.0 规范](https://docs.oasis-open.org/mqtt/mqtt/v5.0/mqtt-v5.0.html)

**当天交付物：** platform/remote-jobs、threat-boundary.md

**完成验收：** 过期和重复任务被拒绝；权限测试通过；安全边界进入UI与文档。

<a id="day-091"></a>

##### Day 091｜2026-11-22 星期日｜2 小时｜平台端到端阶段门

**详细执行指南：** [[#D091 详细执行｜平台端到端阶段门|打开 Day 091 详细执行]]

**当天任务**

- [ ] 从Web创建一次MuJoCo headless smoke并显示结果。
- [ ] 注册数据集、ACT、SmolVLA和两份评测报告。
- [ ] 录制成功流程与一个故障恢复流程。

**所需资源：** [R21 Docker 文档](https://docs.docker.com/)；[R47 FastAPI Documentation](https://fastapi.tiangolo.com/)

**当天交付物：** releases/platform-v0.1.md、演示视频

**完成验收：** 端到端流程可重复；故障流程可恢复；平台不依赖真实机械臂。

#### 第 14 周｜部署、CI、弱网、安全与恢复｜2026-11-23～2026-11-29

**本周目标：** 将本地、云端和GPU任务分层容器化，完善CI、弱网、安全、备份和长稳。

**阶段门：** 三种部署profile清晰；CI全绿；云端恢复和24小时长稳通过；断网不产生危险动作。

<a id="day-092"></a>

##### Day 092｜2026-11-23 星期一｜2 小时｜Local/Cloud/GPU Compose 分层

**详细执行指南：** [[#D092 详细执行｜Local/Cloud/GPU Compose 分层|打开 Day 092 详细执行]]

**当天任务**

- [ ] 定义local-sim、cloud-control和gpu-train三套profile。
- [ ] 共享schema和协议，不把GPU依赖装进4核8GB云镜像。
- [ ] 生成镜像SBOM和精确版本。

**所需资源：** [R21 Docker 文档](https://docs.docker.com/)

**当天交付物：** compose.yaml、containers/、deployment-matrix.md

**完成验收：** 三套profile可独立解析；云镜像无CUDA；依赖边界与部署表一致。

<a id="day-093"></a>

##### Day 093｜2026-11-24 星期二｜2 小时｜配置、密钥与启动前检查

**详细执行指南：** [[#D093 详细执行｜配置、密钥与启动前检查|打开 Day 093 详细执行]]

**当天任务**

- [ ] 建立配置schema和环境变量模板。
- [ ] 检查磁盘、内存、端口、模型/data revision和对象存储。
- [ ] 缺少密钥或版本不兼容时拒绝启动。

**所需资源：** [R21 Docker 文档](https://docs.docker.com/)

**当天交付物：** config/schema.json、scripts/preflight.py

**完成验收：** 正常/失败配置测试通过；日志不打印密钥；检查结果可读。

<a id="day-094"></a>

##### Day 094｜2026-11-25 星期三｜2 小时｜GitHub Actions Headless CI

**详细执行指南：** [[#D094 详细执行｜GitHub Actions Headless CI|打开 Day 094 详细执行]]

**当天任务**

- [ ] 运行lint、unit、contract、schema和MuJoCo无渲染smoke。
- [ ] 缓存依赖但不缓存私人数据、模型或token。
- [ ] 固定OS、Python和关键依赖，上传脱敏测试报告。

**所需资源：** [R20 GitHub Actions 文档](https://docs.github.com/en/actions)；[R52 MuJoCo Headless Rendering](https://github.com/google-deepmind/dm_control#rendering)

**当天交付物：** .github/workflows/ci.yml

**完成验收：** 全新runner通过；失败能定位；CI不需要GPU或机械臂。

<a id="day-095"></a>

##### Day 095｜2026-11-26 星期四｜2 小时｜端到端集成与故障矩阵

**详细执行指南：** [[#D095 详细执行｜端到端集成与故障矩阵|打开 Day 095 详细执行]]

**当天任务**

- [ ] 覆盖teleop→sim→dataset→policy→evaluation→platform元数据。
- [ ] 注入损坏数据、模型不兼容、API失败和worker崩溃。
- [ ] 区分可重试、需人工和永久失败。

**所需资源：** [R20 GitHub Actions 文档](https://docs.github.com/en/actions)

**当天交付物：** tests/e2e、reports/fault-matrix.csv

**完成验收：** 关键链路自动化；每类故障有期望状态；没有假PASS。

<a id="day-096"></a>

##### Day 096｜2026-11-27 星期五｜2 小时｜弱网与断线安全

**详细执行指南：** [[#D096 详细执行｜弱网与断线安全|打开 Day 096 详细执行]]

**当天任务**

- [ ] 用netem注入延迟、抖动、丢包和乱序。
- [ ] 验证云端任务、Policy Server和Robot Client的动作年龄守卫。
- [ ] 证明断网后本地MuJoCo Client暂停而非继续旧动作。

**所需资源：** [R22 Linux tc-netem](https://man7.org/linux/man-pages/man8/tc-netem.8.html)

**当天交付物：** evaluations/network-v1/results.csv

**完成验收：** 所有网络条件有原始结果；旧动作不执行；远程通道明确非硬实时。

<a id="day-097"></a>

##### Day 097｜2026-11-28 星期六｜4 小时｜4核8GB资源与性能优化

**详细执行指南：** [[#D097 详细执行｜4核8GB资源与性能优化|打开 Day 097 详细执行]]

**当天任务**

- [ ] 测量API、数据库、MQTT、headless worker并发下的CPU/内存/磁盘。
- [ ] 设置容器限制、队列上限、日志轮转和任务并发1。
- [ ] 找到并修复至少一个真实瓶颈或记录无需优化的证据。

**所需资源：** [R21 Docker 文档](https://docs.docker.com/)；H02 4核8GB云服务器

**当天交付物：** reports/cloud-performance-v1.md

**完成验收：** 压力条件不OOM；资源限制生效；性能结论有命令和原始数据。

<a id="day-098"></a>

##### Day 098｜2026-11-29 星期日｜2 小时｜备份恢复与24小时长稳

**详细执行指南：** [[#D098 详细执行｜备份恢复与24小时长稳|打开 Day 098 详细执行]]

**当天任务**

- [ ] 备份数据库、配置和artifact清单，不重复备份大文件。
- [ ] 执行容器重启、服务器重启模拟和上一版本回滚。
- [ ] 运行24小时轻量心跳与周期headless smoke。

**所需资源：** [R21 Docker 文档](https://docs.docker.com/)

**当天交付物：** reports/soak-24h.md、restore-log.md

**完成验收：** 备份可恢复；任务状态一致；24小时无未解释资源增长。

#### 第 15 周｜公开交付、证据与技术表达｜2026-11-30～2026-12-06

**本周目标：** 形成招聘方可复现的EdgeVLA仿真全链路作品，公开成功与失败，不伪造真机迁移。

**阶段门：** README、架构、Cards、演示、快速开始、隐私和许可证审查全部通过。

<a id="day-099"></a>

##### Day 099｜2026-11-30 星期一｜2 小时｜README 与15分钟快速开始

**详细执行指南：** [[#D099 详细执行｜README 与15分钟快速开始|打开 Day 099 详细执行]]

**当天任务**

- [ ] 说明项目定位、硬件条件、仿真范围和完整闭环。
- [ ] 提供本地viewer、headless CI和云端平台三条路径。
- [ ] 请未参与者按README测试并记录卡点。

**所需资源：** [R20 GitHub Actions 文档](https://docs.github.com/en/actions)

**当天交付物：** README.md 候选版、quickstart-test.md

**完成验收：** 新用户15分钟内运行headless demo；前置条件明确；没有真机暗示。

<a id="day-100"></a>

##### Day 100｜2026-12-01 星期二｜2 小时｜架构、数据流与安全边界

**详细执行指南：** [[#D100 详细执行｜架构、数据流与安全边界|打开 Day 100 详细执行]]

**当天任务**

- [ ] 绘制本地、云端、GPU、Policy Server和Robot Client。
- [ ] 标出数据、模型、命令、非实时网络和安全守卫。
- [ ] 说明未来真机迁移只替换adapter且必须新增物理安全门。

**所需资源：** [R21 Docker 文档](https://docs.docker.com/)

**当天交付物：** docs/architecture.md、docs/security-boundary.md

**完成验收：** 图与部署一致；实时/非实时边界明确；真机是未来扩展而非已完成。

<a id="day-101"></a>

##### Day 101｜2026-12-02 星期三｜2 小时｜Dataset Card 定稿

**详细执行指南：** [[#D101 详细执行｜Dataset Card 定稿|打开 Day 101 详细执行]]

**当天任务**

- [ ] 更新数据量、split、任务、采集方式、失败和限制。
- [ ] 提供脱敏小样本或生成脚本，不强制公开全部视频。
- [ ] 核对许可证、校验和和版本。

**所需资源：** [R18 Hugging Face Dataset Cards](https://huggingface.co/docs/hub/en/datasets-cards)

**当天交付物：** DATASET_CARD.md、public-sample/

**完成验收：** 统计可重算；来源为游戏手柄+MuJoCo；不含私人路径和token。

<a id="day-102"></a>

##### Day 102｜2026-12-03 星期四｜2 小时｜ACT/SmolVLA Model Card

**详细执行指南：** [[#D102 详细执行｜ACT/SmolVLA Model Card|打开 Day 102 详细执行]]

**当天任务**

- [ ] 分别记录数据、配置、训练资源、评测和适用范围。
- [ ] 列出失败分类、已知偏差和不可推导结论。
- [ ] 所有数字链接到冻结协议和原始CSV。

**所需资源：** [R19 Hugging Face Model Cards](https://huggingface.co/docs/hub/en/model-cards)

**当天交付物：** MODEL_CARD_ACT.md、MODEL_CARD_SMOLVLA.md

**完成验收：** 每个数字可追溯；模型对比同口径；明确不是实机生产部署。

<a id="day-103"></a>

##### Day 103｜2026-12-04 星期五｜2 小时｜成功、失败与系统演示视频

**详细执行指南：** [[#D103 详细执行｜成功、失败与系统演示视频|打开 Day 103 详细执行]]

**当天任务**

- [ ] 录制手柄采集、数据回放、ACT/SmolVLA rollout和云端平台。
- [ ] 至少展示一个失败和安全停止。
- [ ] 画面和旁白持续标记MuJoCo simulation。

**所需资源：** [R16 MuJoCo 文档](https://mujoco.readthedocs.io/en/stable/)

**当天交付物：** demo/edgevla-v1.mp4、旁白稿

**完成验收：** 视频可在3–5分钟解释闭环；失败不剪掉；没有伪造Franka真机画面。

<a id="day-104"></a>

##### Day 104｜2026-12-05 星期六｜4 小时｜一条命令可复现演示

**详细执行指南：** [[#D104 详细执行｜一条命令可复现演示|打开 Day 104 详细执行]]

**当天任务**

- [ ] 实现make demo或等价命令启动headless闭环。
- [ ] 下载/生成最小合法资产并验证校验和。
- [ ] 在干净环境和4核8GB云服务器各运行一次。

**所需资源：** [R21 Docker 文档](https://docs.docker.com/)；H02 4核8GB云服务器

**当天交付物：** scripts/demo.sh、reproducibility-report.md

**完成验收：** 两处运行通过；失败时退出码非0；总资源在文档范围内。

<a id="day-105"></a>

##### Day 105｜2026-12-06 星期日｜2 小时｜隐私、许可证与v1.0候选发布

**详细执行指南：** [[#D105 详细执行｜隐私、许可证与v1.0候选发布|打开 Day 105 详细执行]]

**当天任务**

- [ ] 扫描密钥、联系方式、公司路径、设备标识和大文件。
- [ ] 核对Menagerie、LeRobot、模型和数据许可证。
- [ ] 只发布通过证据门的仿真、数据、模型和平台范围。

**所需资源：** [R20 GitHub Actions 文档](https://docs.github.com/en/actions)；[R44 MuJoCo Menagerie](https://github.com/google-deepmind/mujoco_menagerie)

**当天交付物：** release-checklist.md、v1.0.0-rc1

**完成验收：** 隐私检查通过；许可证齐全；发布说明明确无真实机械臂。

#### 第 16 周｜求职材料、面试与下一阶段｜2026-12-07～2026-12-13

**本周目标：** 只把已验证的EdgeVLA仿真闭环同步到作品集和定向简历，并规划可选GELLO/真实机械臂阶段。

**阶段门：** 材料与证据一致；模拟面试能解释每个边界；完成小规模投递和下一90天决策。

<a id="day-106"></a>

##### Day 106｜2026-12-07 星期一｜2 小时｜可写入简历的证据审计

**详细执行指南：** [[#D106 详细执行｜可写入简历的证据审计|打开 Day 106 详细执行]]

**当天任务**

- [ ] 逐条审计代码、数据、训练、评测、平台和部署成果。
- [ ] 为每个数字链接protocol、CSV、commit和环境。
- [ ] 删除任何无法证明的真机、迁移、部署成功或VLA算法研发表述。

**所需资源：** [R19 Hugging Face Model Cards](https://huggingface.co/docs/hub/en/model-cards)

**当天交付物：** career/resume-evidence-v1.csv

**完成验收：** 每条可写表述有证据ID；simulation-only显式；禁用表述为0。

<a id="day-107"></a>

##### Day 107｜2026-12-08 星期二｜2 小时｜GitHub 与作品集项目页

**详细执行指南：** [[#D107 详细执行｜GitHub 与作品集项目页|打开 Day 107 详细执行]]

**当天任务**

- [ ] 用问题—方案—架构—证据—限制介绍项目。
- [ ] 突出嵌入式Linux、通信、端云能力如何迁移到机器人系统。
- [ ] 避免堆砌上游功能或展示私人训练资产。

**所需资源：** [R20 GitHub Actions 文档](https://docs.github.com/en/actions)

**当天交付物：** career/portfolio-edgevla.md

**完成验收：** 60秒内能理解项目；链接有效；个人贡献与上游清晰。

<a id="day-108"></a>

##### Day 108｜2026-12-09 星期三｜2 小时｜三类定向简历

**详细执行指南：** [[#D108 详细执行｜三类定向简历|打开 Day 108 详细执行]]

**当天任务**

- [ ] 生成机器人Linux/系统集成、机器人数据/部署、VLA应用工程三版。
- [ ] 按岗位重排同一真实证据，不制造不同事实。
- [ ] 嵌入式传统版保留4G网关与单灯控制器主线。

**所需资源：** [R19 Hugging Face Model Cards](https://huggingface.co/docs/hub/en/model-cards)

**当天交付物：** career/resume-robot-system.md、resume-data-deploy.md、resume-vla-application.md

**完成验收：** 三版事实一致；每版不超过目标篇幅；未写真机或Franka物理部署。

<a id="day-109"></a>

##### Day 109｜2026-12-10 星期四｜2 小时｜项目面试故事与技术深挖

**详细执行指南：** [[#D109 详细执行｜项目面试故事与技术深挖|打开 Day 109 详细执行]]

**当天任务**

- [ ] 准备MuJoCo、遥操作、数据、ACT、SmolVLA、ROS2、云端和安全八类问题。
- [ ] 每类包含设计取舍、失败案例、证据和下一改进。
- [ ] 准备回答为何没有机械臂以及仿真证据的边界。

**所需资源：** [R03 Hugging Face Robot Learning Course](https://huggingface.co/learn/robotics-course/en/unit0/1)

**当天交付物：** career/interview-story-bank.md

**完成验收：** 每个故事可在2分钟/8分钟两种长度表达；无背诵式虚构。

<a id="day-110"></a>

##### Day 110｜2026-12-11 星期五｜2 小时｜模拟面试与反向验证

**详细执行指南：** [[#D110 详细执行｜模拟面试与反向验证|打开 Day 110 详细执行]]

**当天任务**

- [ ] 让评审者随机选择代码、指标和失败案例追问。
- [ ] 现场复现至少一个headless demo和一个数据检查。
- [ ] 记录回答不清、证据缺失和过度表述。

**所需资源：** A06 独立评审者

**当天交付物：** career/mock-interview-review.md

**完成验收：** 所有问题有PASS/PARTIAL；无法解释的表述从简历移除。

<a id="day-111"></a>

##### Day 111｜2026-12-12 星期六｜4 小时｜岗位再分层与首批申请

**详细执行指南：** [[#D111 详细执行｜岗位再分层与首批申请|打开 Day 111 详细执行]]

**当天任务**

- [ ] 用最新作品重新评估机器人Linux、系统集成、数据工具和VLA应用岗位。
- [ ] 选择3–5个无硬门槛冲突岗位并定向投递。
- [ ] 记录JD、版本、反馈和下一实验，不批量刷投。

**所需资源：** [R03 Hugging Face Robot Learning Course](https://huggingface.co/learn/robotics-course/en/unit0/1)

**当天交付物：** career/application-tracker.csv 与3–5份记录

**完成验收：** 岗位硬门槛已检查；材料版本可追溯；反馈不用于伪造经历。

<a id="day-112"></a>

##### Day 112｜2026-12-13 星期日｜2 小时｜总复盘与下一90天

**详细执行指南：** [[#D112 详细执行｜总复盘与下一90天|打开 Day 112 详细执行]]

**当天任务**

- [ ] 汇总256小时实际投入、完成率、成本、失败和最强证据。
- [ ] 根据岗位反馈决定继续仿真深化、购买SO-101/GELLO或寻找实验室真机。
- [ ] 若进入真机阶段，新建安全/授权/硬件计划，不把仿真结果直接写成迁移成功。

**所需资源：** [R23 SO-101 开源硬件](https://github.com/TheRobotStudio/SO-ARM100)；[R45 GELLO Software](https://github.com/wuphilipp/gello_software)；H06 SO-101、GELLO或其他真实机械臂

**当天交付物：** retrospective.md、next-90-days.md、条件化v1.0.0

**完成验收：** 复盘数字真实；下一阶段有预算和进入条件；发布范围与证据一致。

### 里程碑与简历开放条件

| 里程碑 | 最早时间 | 必须具备的证据 | 简历可写范围 |
|---|---|---|---|
| M0 工程基线 | 第 1 周 | 私有仓库、证据账本、固定LeRobot commit、Python/C++测试和MuJoCo CPU smoke | 只能写环境与工程基线；新项目仍在建设 |
| M1 仿真与遥操作 | 第 4 周 | Franka模型、MuJoCo场景、键盘/手柄dead-man、Robot I/O契约、LeRobotDataset回放 | 可写MuJoCo仿真与遥操作工具；不得写真机控制 |
| M2 数据与ROS2闭环 | 第 7 周 | 50个以上有效仿真Episode、质量检查、Dataset Card、ROS2桥接、tf与MCAP | 可写仿真数据工具和ROS2系统集成；不得写真实机械臂驱动 |
| M3 ACT 基线 | 第 9 周 | 自采数据、ACT checkpoint、恢复、冻结评测、失败分类和鲁棒性报告 | 可写ACT仿真训练/评测；所有数字标记simulation-only |
| M4 SmolVLA与云端 | 第 13 周 | SmolVLA微调/负面结论、同口径对比、异步推理、4核8GB控制平面和Web闭环 | 只写实际跑通范围；云端不得描述为实时伺服控制 |
| M5 仿真项目v1.0 | 第 16 周 | CI、快速开始、Cards、成功/失败视频、许可、隐私、恢复和证据门通过 | 可发布完整仿真作品；没有真机就不得写Franka/SO-101/GELLO物理部署 |

### 偏航处理

- 个人电脑图形或手柄不稳定：先用键盘与低分辨率MuJoCo完成闭环，再单独解决输入映射；不要改用云服务器做实时交互。
- 4核8GB云服务器资源不足：关闭渲染、任务并发固定为1、外置大文件；云端只保留控制平面和headless smoke。
- GPU 不足：先做ACT小样本和CPU数据检查，再租按量GPU；每个任务设置最长时长和成本上限。
- LeRobot主分支变化：选择包含官方仿真入口的公开版本并固定commit；不要持续浮动追main。
- SmolVLA 结果不佳：如实保留负面结果，从数据覆盖、归一化、同步、任务设计和模型基线逐项排查。
- 真机机会提前出现：仍需另建授权、急停、SDK和安全计划；不得把MuJoCo评测直接改名为迁移成功。
- 求职压力增加：P0 岗位继续投递；本计划是能力升级路线，不要求暂停现有求职。

## 逐日详细执行

### 第 1 周详细执行｜真实性、环境与项目基线

> [!info]- 当日导航
> [[#导航|↑ 文档导航]] · [[#D002 详细执行｜本地 LeRobot、MuJoCo 与 Python 环境固定|Day 002 →]]

#### D001 详细执行｜简历预填的职业与能力基线

> 计划日期：2026-08-24｜预期人工投入：30–45 分钟｜最长不超过 2 小时
>
> 完成状态：Codex 已依据现有三版简历预填，等待本人核对；这不是新增项目成果。
>

##### 今天只做一件事

核对这份已经预填的基线。你不需要重新阅读 100 个岗位、不需要另建 `positioning.md`、CSV 和多份日志，也不需要手工填写十几行能力表。

当天只保留一个私有文件：`D001-baseline.md`。可以直接复制本页，在末尾填写真实开始/结束时间和需要更正的内容。结构化 evidence ledger 推迟到 Day 003 建立私有仓库时，由本页自动拆分，不要求今天重复录入。

> [!important] 当前结论
> 你不是典型的 Linux BSP/内核驱动工程师，也还不是机器人算法工程师。你当前最有竞争力的是“嵌入式 Linux 应用 + 设备通信 + 物联网端边云交付”，向机器人方向迁移时应先切入 Linux 应用、设备接入、系统集成、数据采集和部署，再逐步补 ROS2、现代 C++、LeRobot 与真机证据。

##### 一、已经替你完成的岗位分层

| 层级 | 建议岗位 | 判断依据 | 目前动作 |
|---|---|---|---|
| P0 主投 | 嵌入式 Linux 应用工程师、物联网边缘软件工程师、设备通信工程师 | 已有 C、Embedded Linux、4G、MQTT、TCP/UDP、RS485、SQLite、升级恢复和现场部署证据 | 现在可以投；避开以 BSP、内核和底层驱动为主的 JD |
| P0 备选 | 物联网全栈工程师、智能硬件全栈、设备—平台集成工程师 | 已贯通设备、网关、服务端、Vue/Flutter、Linux 部署与客户交付 | 现在可以投；突出集中控制平台和 4G 单灯控制器的全链路能力 |
| P1 补证后 | 机器人 Linux 应用、机器人系统集成、机器人数据采集/工具链、具身系统应用工程师 | 既有通信、边缘和平台经验可迁移，但缺 ROS2、机器人接口和真机作品 | 完成 112 天计划中的 ROS2、LeRobot 数据闭环和真机/仿真作品后再主投 |
| P1 进阶 | LeRobot/VLA 推理部署、机器人端云平台 | 有 AI 应用、Linux 部署和数据链路底座，但没有策略训练与评测证据 | 达到可复现数据、checkpoint、冻结评测和个人贡献门槛后再写简历 |
| P2 长期 | VLA/世界模型/RL 核心算法、运动控制算法 | 当前缺少算法研究、PyTorch 训练、数学/论文和运动控制项目证据 | 作为长期方向，不占近期主要投递配额 |

###### 已预填的 30 秒自我定位

> 我有 3 年以上嵌入式与物联网研发经验，主要负责 Embedded Linux 设备通信、4G 网关和端—边—云系统交付。做过 MQTT、TCP/UDP、RS485、FreeRTOS/LwIP、Flutter 设备应用以及 Go、Java、.NET 和 Vue 平台开发，能够从设备协议、边缘控制一直排查到服务端和客户端。现在希望以 Linux 应用、设备接入和系统集成为切入点进入机器人行业，并通过 ROS2、LeRobot 数据闭环和真机安全实践补齐机器人专项证据。

这段定位可以用于机器人系统集成或 Linux 应用岗位；投传统嵌入式岗位时，去掉最后一句即可。

##### 二、从简历提取出的既有项目证据

以下内容来自现有正式简历。它们是 Day 001 的初始证据索引，不需要今天重新抄写。

| ID | 已有项目证据 | 可以使用的表述 | 明确边界 |
|---|---|---|---|
| E-LEGACY-001 | 嵌入式 4G 网关：C、Embedded Linux、MQTT/UDP/RS485、SQLite、GPS、升级恢复、主从转发、长期运行治理，并支持多个客户现场部署 | Embedded Linux 应用、设备通信、异常恢复、边缘网关与现场交付 | 不等于 Linux BSP、Bootloader、内核、设备驱动或机器人控制器开发 |
| E-LEGACY-002 | Air780E 与 HC32：Cat.1 网络、HTTP/HTTPS、TCP/UDP、FOTA、FreeRTOS、LwIP、USART/DMA、RAW API TCP 和多块样机验证 | MCU 与 4G 模组通信、RTOS 网络应用、串口/DMA 联调与调试 | 不等于 CAN/CANopen、EtherCAT、伺服闭环或运动控制项目 |
| E-LEGACY-003 | 物联网集中控制平台：Go、Vue 3、设备分层、批量控制、场景演绎、能耗、媒体任务、部署升级 | 设备—平台控制链路、IoT 全栈、系统接手迭代与交付 | 不等于机器人调度平台或 ROS2 系统已经完成 |
| E-LEGACY-004 | 跨端设备管理 APP：Flutter、FFI、C SDK、USB/BLE/SPP、文件与升级，Android/HarmonyOS 兼容版/iOS 上架维护 | 跨端设备通信、原生能力集成、文件传输、升级和兼容性治理 | 不等于机器人遥操作、实时控制或功能安全系统 |
| E-LEGACY-005 | 4G 单灯控制器：参与选型、协议和架构，完成模拟器、服务器网关、后台与 MQTT/HTTP 文件链路，约一个半月形成可联调核心版本 | 设备—4G—云端—Web 全链路、协议设计、模拟联调和 AI 协作研发 | 当前仍是照明物联网项目，不等于机械臂、VLA 或运动控制项目 |
| E-LEGACY-006 | DeepSeek/Dify：模型 API、产品知识库、文档处理和 Flutter 接入 | RAG/AI 应用集成和产品落地 | 不等于 PyTorch 模型训练、VLA 微调或 Agent 算法研究 |
| E-LEGACY-007 | QEMU：Cortex-A9 Linux、Cortex-M4 FreeRTOS、内核/设备树/根文件系统/U-Boot/网络/Framebuffer/GDB 环境实践 | 虚拟平台搭建、系统组件理解和调试入口配置 | 学习实践不等于量产 BSP 负责经历，也不等于机器人仿真 |

##### 三、已经预填的能力表

| 能力 | 当前状态 | 证据 | 简历处理 |
|---|---|---|---|
| C 与 Embedded Linux 应用 | 已有证据 | E-LEGACY-001 | 可写；限定在应用层和产品交付 |
| MQTT、TCP/UDP、RS485、4G | 已有证据 | E-LEGACY-001/002/005 | 可写 |
| FreeRTOS、LwIP、USART/DMA | 已有证据 | E-LEGACY-002 | 可写；不外推为电机控制 |
| SQLite、本地状态与场景编排 | 已有证据 | E-LEGACY-001 | 可写 |
| Go/Java/.NET/Vue 设备平台 | 已有证据 | E-LEGACY-003/005 | 可写；按目标岗位控制篇幅 |
| Flutter、FFI、USB/BLE/SPP | 已有证据 | E-LEGACY-004 | 可写 |
| Linux 部署、日志/网络/数据库排障 | 已有证据 | E-LEGACY-001/003/005 | 可写 |
| AI 协作开发与 RAG 应用 | 已有证据 | E-LEGACY-005/006 | 可写；不外推成算法研发 |
| QEMU 系统实践 | 已有证据 | E-LEGACY-007 | 条件可写；注明实践范围 |
| Python 工程能力 | 待确认 | 简历没有足够代码证据 | 暂不写“熟练 Python” |
| 现代 C++17/CMake | 待确认 | 简历主要证明 C/C++ 接口和阅读能力 | 暂不写“熟练现代 C++” |
| 传感器应用接入 | 有口述线索，待索引 | 红外、雷达等应用经历尚缺接口和个人贡献说明 | 只能按事实写应用接入，不能写底层驱动/融合 |
| CAN 与伺服 | 有基础接触，无项目证据 | 已说明连接/接触过，但没有完整项目 | 不进入项目技能；面试如实说明 |
| Linux BSP/内核驱动 | 未形成职业项目证据 | QEMU 和应用开发不能替代量产 BSP | 不写“熟悉 BSP/驱动” |
| ROS2/tf2/URDF/rosbag2 | 未开始正式实证 | 已看完入门课程不等于项目证据 | 暂不写“熟悉 ROS2” |
| LeRobot、PyTorch、ACT/VLA | 未开始正式实证 | 当前只有学习方向 | 不写项目经验 |
| 机械臂真机与安全 | 未开始 | 尚无本人真机记录 | 不写机械臂项目经验 |

##### 四、今天只需要你核对的 4 项

无需写长文。把每项后面的 `待确认` 改成一句事实；暂时不知道就保留“待确认”，不会阻塞 Day 002。

1. **4G 网关处理器：**已知为全志 Cortex-A7，但准确 SoC 型号、开发板型号和本人涉及层级仍为 `待确认`。
2. **Python / 现代 C++：**是否有能独立运行、测试并解释的非公司私密项目或代码，当前为 `待确认`。
3. **传感器范围：**红外、雷达分别使用什么接口/协议，本人负责接线、协议解析、业务应用还是底层驱动，当前为 `待确认`。
4. **求职约束：**目标城市、是否接受出差/现场部署、期望岗位优先级，当前为 `待确认`。

已经确认、无需再问：当前没有可用机械臂，112天执行MuJoCo仿真主线；CAN与伺服只有基础接触，没有正式项目；黑马具身智能机械臂课程已完整观看一遍。这些都不能提前升级成真机项目经验。

##### 五、今天的实际操作（30–45 分钟）

###### 任务 1：事实核对（15 分钟）

- 通读“项目证据”和“能力表”。
- 只标记确实错误或范围过大的句子。
- 不润色，不补指标，不查新资料。

###### 任务 2：回答 4 个待确认项（10–20 分钟）

- 知道就写一句事实。
- 不知道就保留 `待确认`，以后用代码、硬件或旧文档核验。
- 不需要今天寻找全部历史证据。

###### 任务 3：保存单一基线（5–10 分钟）

在私有学习目录保存一份 `D001-baseline.md`，内容就是本页加上下方执行记录。不要放入公开个人网站仓库。

```markdown
## D001 执行记录

- actual_started_at: <真实时间>
- actual_finished_at: <真实时间>
- result: PASS / PARTIAL
- corrections: <没有则写“无”>
- unresolved: <仍待确认的编号>
- next: Day 002 环境核验
```

##### 六、最低验收条件

满足以下 6 项即可结束 Day 001：

- [ ] 已核对 7 条既有项目证据，没有把团队成果全部归为个人成果。
- [ ] 已接受或修正 P0/P1/P2 岗位分层。
- [ ] 4 个待确认项已回答，或明确保留“待确认”。
- [ ] CAN、伺服、BSP/驱动、ROS2、机械臂、LeRobot、VLA 没有被提前写成项目经验。
- [ ] 文件只保存在私有目录，不含联系方式、公司源码路径、密钥或受限协议。
- [ ] 已填写真实开始/结束时间，然后停止，不额外制作 CSV 或重复文档。

结果规则：完成核对并保存即可记为 `PASS`；存在待确认项不影响通过。只有项目证据明显冲突、无法判断当前定位时才记为 `PARTIAL`。

##### 不得越过的真实性边界

- Embedded Linux 应用不等于 Linux BSP、内核或底层驱动。
- 串口/RS485/4G 设备通信不等于 CAN/EtherCAT 或伺服控制。
- 红外、雷达应用接入不等于多类型传感器底层驱动或融合算法。
- QEMU 系统实践不等于量产 BSP，也不等于机器人仿真。
- 看完 ROS2/机械臂课程不等于完成 ROS2 或机械臂项目。
- AI Coding、Dify/RAG 不等于 PyTorch、VLA 训练或具身算法研发。
- 同学能够提供机械臂，不等于本人已经有真机项目经验。
- 后续任何成功率、时延或稳定性数字，都必须带版本、环境、样本量、失败样本和原始记录。

Day 001 到此结束。下一步只进入 [Day 002：本地 LeRobot、MuJoCo 与 Python 环境固定](day-002.md)，不再扩写定位文档。

> [!info]- 当日导航
> [[#D001 详细执行｜简历预填的职业与能力基线|← Day 001]] · [[#导航|↑ 文档导航]] · [[#D003 详细执行｜私有仓库、证据账本与基础 CI|Day 003 →]]

#### D002 详细执行｜本地 LeRobot、MuJoCo 与 Python 环境固定

> 计划日期：2026-08-25｜主动投入：2 小时
>
> 主机定位：个人电脑负责 MuJoCo viewer、键盘/游戏手柄和数据采集；4 核 8GB 云服务器今天不安装训练栈。
>

##### 当天完成定义

今天只固定个人电脑上的 CPU 仿真开发环境，不训练 ACT/SmolVLA、不部署云端平台、不要求 NVIDIA GPU。

最终只交付：

```text
docs/environment.md
requirements-cpu-lock.txt
scripts/smoke_mujoco.py
```

Day 001 已保存的 `D001-baseline.md` 继续保留。结构化证据账本在 Day 003 建私有仓库时生成，今天不补 CSV。

##### 已确定的部署边界

| 位置 | 今天及后续职责 | 明确不做 |
|---|---|---|
| 个人电脑 | MuJoCo viewer、键盘/游戏手柄、数据采集、回放、本地调试 | 不要求今天训练VLA |
| 4核8GB云服务器 | 第12周部署API、数据库、MQTT和MuJoCo headless smoke | 不运行VLA训练，不接本地手柄，不承担实时控制 |
| 按需GPU | 第8–11周运行ACT/SmolVLA训练与批量评测 | 不长期空闲运行，不无预算启动 |
| 真实机械臂 | 112天后可选扩展 | 不作为当前计划完成条件 |

##### 120 分钟执行表

| 时间 | 工作 | 必须留下的结果 |
|---|---|---|
| 00:00–00:10 | 记录个人电脑 | OS、CPU、内存、GPU、磁盘、Python、手柄和显示环境 |
| 00:10–00:25 | 固定上游版本 | LeRobot仓库URL、分支/tag、精确commit与选择原因 |
| 00:25–00:45 | 建CPU环境 | Python 3.12虚拟环境、CPU PyTorch和基础工具 |
| 00:45–01:10 | 安装仿真依赖 | LeRobot仿真extra、MuJoCo、gym_hil及必要媒体依赖 |
| 01:10–01:30 | MuJoCo冒烟 | 加载最小模型并执行固定步数，检查NaN与最终状态 |
| 01:30–01:45 | 版本与冻结 | 导出精确包版本、commit和环境变量 |
| 01:45–02:00 | 复现与收尾 | 新shell重跑smoke，记录PASS/PARTIAL和唯一阻塞项 |

##### 步骤一：记录个人电脑，而不是云服务器（10分钟）

将结果写入 `docs/environment.md`：

```bash
python --version
git --version
uname -a 2>/dev/null || ver
```

另外人工填写：

```markdown
## Local workstation
- os:
- cpu:
- memory_gb:
- gpu: none / nvidia / amd / apple
- free_disk_gb:
- display_available: yes/no
- gamepad_model:
- gamepad_connection: usb/bluetooth/unknown
```

如果使用 Windows，优先选择以下一种真实可用路径：

1. 原生 Windows 能正常安装并打开 MuJoCo viewer：继续使用。
2. WSLg 能显示窗口并识别项目文件：可用于仿真，但游戏手柄映射需要单独验证。
3. WSL 无法稳定访问手柄或图形：将交互采集放在原生 Windows，ROS2 阶段再使用 Ubuntu/WSL。

不要为了形式统一强迫所有工具运行在同一个环境。

##### 步骤二：选择并固定 LeRobot commit（15分钟）

官方仿真主线应包含 MuJoCo 的 imitation-learning-in-sim/gym_hil 路径，能够以键盘或游戏手柄控制 Panda Pick Cube。不要长期浮动使用 `main`。

```bash
git clone https://github.com/huggingface/lerobot.git
cd lerobot
git fetch --tags
git log -1 --format='%H %cI %s'
```

确认当前源码实际包含仿真入口：

```bash
python -c "from pathlib import Path; assert Path('src/lerobot').is_dir()"
rg -n "gym_manipulator|PandaPickCubeGamepad|PandaPickCubeKeyboard" .
```

如果入口存在，把当前 SHA 写入 `docs/environment.md` 并创建本地分支：

```bash
git switch -c edgevla-pinned-setup
git rev-parse HEAD
```

如果入口不存在，不要猜命令：记录 `PARTIAL`，返回官方仿真教程选择包含该入口的公开 commit，再固定 SHA。

##### 步骤三：建立CPU仿真环境（20分钟）

今天的环境只服务于仿真开发和数据检查。正式GPU训练另建镜像，避免把CUDA依赖塞入个人电脑和4核8GB云服务器。

```bash
uv venv --python 3.12 .venv
```

激活命令按系统二选一：

```bash
# Linux / WSL / Git Bash
source .venv/bin/activate
```

```powershell
# Windows PowerShell
.\.venv\Scripts\Activate.ps1
```

激活后执行：

```bash
python -m pip install --upgrade pip
```

无NVIDIA GPU时先安装官方CPU PyTorch wheel：

```bash
uv pip install torch torchvision --index-url https://download.pytorch.org/whl/cpu
```

然后按固定commit中的 `pyproject.toml` 安装仿真extra。官方教程当前使用：

```bash
uv pip install -e ".[hilserl]"
```

如果固定版本的extra名称不同，以该commit的 `pyproject.toml` 和官方教程为准，并在环境文档记录差异。不要通过反复随机升级包解决冲突。

> [!warning] 锁文件边界
> CPU环境可能主动偏离上游GPU锁文件，因此不能声称“完全按上游uv.lock重建”。今天应导出本机CPU环境的精确版本；第8周GPU训练再建立独立锁定镜像。

##### 步骤四：MuJoCo最小冒烟（35分钟）

创建 `scripts/smoke_mujoco.py`：

```python
import json
import sys

import mujoco
import numpy as np

xml = """
<mujoco>
  <worldbody>
    <body pos="0 0 1">
      <freejoint/>
      <geom type="sphere" size="0.05" mass="1"/>
    </body>
    <geom type="plane" size="1 1 0.1"/>
  </worldbody>
</mujoco>
"""

model = mujoco.MjModel.from_xml_string(xml)
data = mujoco.MjData(model)
for _ in range(500):
    mujoco.mj_step(model, data)

result = {
    "python": sys.version.split()[0],
    "mujoco": mujoco.__version__,
    "steps": 500,
    "time": float(data.time),
    "qpos": data.qpos.tolist(),
    "finite": bool(np.isfinite(data.qpos).all()),
}
print(json.dumps(result, ensure_ascii=False, indent=2))
if not result["finite"]:
    raise SystemExit(1)
```

运行两次并保存输出：

```bash
python scripts/smoke_mujoco.py
python scripts/smoke_mujoco.py
```

两次输出应相同。如果只需要物理步进，不创建 OpenGL context；这样即使没有GPU也可以运行。

可选viewer检查：

```bash
python -m mujoco.viewer --mjcf <一个本地可用的MJCF文件>
```

viewer失败但物理smoke通过时，结果为 `PARTIAL`，只记录图形环境问题；不要因此破坏已工作的CPU环境。

##### 步骤五：冻结版本（15分钟）

```bash
git rev-parse HEAD
python -VV
python -c "import torch,mujoco; print(torch.__version__, torch.cuda.is_available(), mujoco.__version__)"
uv pip freeze > requirements-cpu-lock.txt
```

`docs/environment.md` 至少记录：

```markdown
## Pinned environment
- lerobot_repository: https://github.com/huggingface/lerobot
- lerobot_commit:
- python:
- torch:
- torch_cuda_available:
- mujoco:
- gym_hil:
- install_mode: CPU simulation development
- upstream_lock_deviation: yes/no + reason
- actual_started_at:
- actual_finished_at:
```

##### 最低验收条件

- [ ] 记录的是个人电脑，不是4核8GB云服务器。
- [ ] LeRobot使用精确commit，不浮动引用main。
- [ ] 固定源码确实包含MuJoCo仿真/键盘或手柄入口，或者明确标记PARTIAL。
- [ ] Python 3.12环境和CPU PyTorch可导入。
- [ ] `scripts/smoke_mujoco.py` 连续运行两次通过且数值有限。
- [ ] 导出了 `requirements-cpu-lock.txt`。
- [ ] 没有安装或声称完成ACT/SmolVLA训练。
- [ ] 没有把云服务器当作实时手柄与图形采集机。
- [ ] 没有公开用户名、绝对私人路径、token或公司资料。

##### 当天结果模板

```markdown
## D002 result
- result: PASS / PARTIAL / BLOCKED
- local_viewer: PASS / PARTIAL / NOT_TESTED
- cpu_physics_smoke: PASS / FAIL
- lerobot_commit:
- unresolved:
- next: Day 003 创建私有仓库并导入环境与D001基线
```

Day 002 到此结束。不要在今天提前训练模型或部署云服务器。

> [!info]- 当日导航
> [[#D002 详细执行｜本地 LeRobot、MuJoCo 与 Python 环境固定|← Day 002]] · [[#导航|↑ 文档导航]] · [[#D004 详细执行｜Python、NumPy 与 PyTorch 数据基线|Day 004 →]]

#### D003 详细执行｜私有仓库、证据账本与基础 CI

> 计划日期：2026-08-26｜主动投入：2 小时｜第 1 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“仓库骨架、D001 基线、证据账本、README 状态声明与首个绿色 CI”，并满足：从空目录按 README 可运行最小测试；证据边界保留；仓库无密钥、联系方式、公司源码或私有协议。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 002 的结果记录，确认其状态和交付物“docs/environment.md、uv.lock、scripts/smoke_mujoco.py”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-003.md` 和 `evidence/day-003/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R20 GitHub Actions 文档](https://docs.github.com/en/actions)；[R21 Docker 文档](https://docs.docker.com/)；[A01 GitHub 账号与独立仓库](https://github.com/)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 创建独立私有 edgevla-lab 仓库并导入 D001-baseline.md。 |
| 00:35–01:00 | 任务 2 | 从预填基线生成 positioning.md 与 evidence-ledger.csv，明确 simulation-only 和个人贡献。 |
| 01:00–01:25 | 任务 3 | 建立 Python/C++ 格式、测试、隐私扫描和无硬件 CI 骨架。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜创建独立私有 edgevla-lab 仓库并导入 D001-baseline.md。

1. 在 `logs/day-003.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把仿真器/适配器/外部服务访问、协议转换和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 每条实际执行命令连同退出码追加到 `evidence/day-003/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜从预填基线生成 positioning.md 与 evidence-ledger.csv，明确 simulation-only 和个人贡献。

1. 在 `logs/day-003.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-003/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜建立 Python/C++ 格式、测试、隐私扫描和无硬件 CI 骨架。

1. 在 `logs/day-003.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把仿真器/适配器/外部服务访问、协议转换和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
5. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
6. 每条实际执行命令连同退出码追加到 `evidence/day-003/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

- 主交付物：仓库骨架、D001 基线、证据账本、README 状态声明与首个绿色 CI
- 日志：`logs/day-003.md`
- 原始证据目录：`evidence/day-003/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：从空目录按 README 可运行最小测试；证据边界保留；仓库无密钥、联系方式、公司源码或私有协议。
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
> [[#D003 详细执行｜私有仓库、证据账本与基础 CI|← Day 003]] · [[#导航|↑ 文档导航]] · [[#D005 详细执行｜现代 C++17、CMake 与 Robot I/O 基线|Day 005 →]]

#### D004 详细执行｜Python、NumPy 与 PyTorch 数据基线

> 计划日期：2026-08-27｜主动投入：2 小时｜第 1 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“labs/python-torch-baseline、tests/test_tensor_pipeline.py”，并满足：CPU 上测试通过；两次相同种子结果一致；文档列出 Python/PyTorch 的真实缺口。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 003 的结果记录，确认其状态和交付物“仓库骨架、D001 基线、证据账本、README 状态声明与首个绿色 CI”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-004.md` 和 `evidence/day-004/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R14 PyTorch Tutorials](https://docs.pytorch.org/tutorials/)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 实现数组、张量、设备和 dtype 的最小实验并记录形状变化。 |
| 00:35–01:00 | 任务 2 | 实现可复现随机种子、Dataset/DataLoader 和小型训练循环。 |
| 01:00–01:25 | 任务 3 | 为错误形状、NaN、设备不一致和随机性编写失败测试。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜实现数组、张量、设备和 dtype 的最小实验并记录形状变化。

1. 在 `logs/day-004.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把仿真器/适配器/外部服务访问、协议转换和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 每条实际执行命令连同退出码追加到 `evidence/day-004/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜实现可复现随机种子、Dataset/DataLoader 和小型训练循环。

1. 在 `logs/day-004.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把仿真器/适配器/外部服务访问、协议转换和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 先用 1 batch/少量 step 验证 shape、loss、保存和恢复，再冻结数据 revision、配置、seed、代码 commit 与算力预算后启动正式任务。
5. 观察首个训练/验证周期并主动验证一次 checkpoint 恢复；训练仍在运行时写 RUNNING，不把开始训练、下载权重或官方 demo 当成完成微调。
6. 每条实际执行命令连同退出码追加到 `evidence/day-004/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜为错误形状、NaN、设备不一致和随机性编写失败测试。

1. 在 `logs/day-004.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把仿真器/适配器/外部服务访问、协议转换和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
5. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
6. 每条实际执行命令连同退出码追加到 `evidence/day-004/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

- 主交付物：labs/python-torch-baseline、tests/test_tensor_pipeline.py
- 日志：`logs/day-004.md`
- 原始证据目录：`evidence/day-004/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：CPU 上测试通过；两次相同种子结果一致；文档列出 Python/PyTorch 的真实缺口。
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
> [[#D004 详细执行｜Python、NumPy 与 PyTorch 数据基线|← Day 004]] · [[#导航|↑ 文档导航]] · [[#D006 详细执行｜MuJoCo 本地与云端无界面冒烟|Day 006 →]]

#### D005 详细执行｜现代 C++17、CMake 与 Robot I/O 基线

> 计划日期：2026-08-28｜主动投入：2 小时｜第 1 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“cpp/robot_io_baseline、CMakeLists.txt、单元测试”，并满足：Debug/Release 构建通过；不少于8个测试通过；不得将基线练习写成生产级机器人控制经验。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 004 的结果记录，确认其状态和交付物“labs/python-torch-baseline、tests/test_tensor_pipeline.py”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-005.md` 和 `evidence/day-005/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R34 C++ Core Guidelines](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines)；[R35 CMake 官方教程](https://cmake.org/cmake/help/latest/guide/tutorial/)；[R42 GoogleTest 官方入门](https://google.github.io/googletest/primer.html)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 用 C++17 定义最小 Observation、Action 和 RobotInterface。 |
| 00:35–01:00 | 任务 2 | 用 CMake 构建库、示例和 GoogleTest，不依赖真实设备。 |
| 01:00–01:25 | 任务 3 | 测试所有权、越界、超时和无效动作，记录 C 与现代 C++ 的能力边界。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜用 C++17 定义最小 Observation、Action 和 RobotInterface。

1. 在 `logs/day-005.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 每条实际执行命令连同退出码追加到 `evidence/day-005/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜用 CMake 构建库、示例和 GoogleTest，不依赖真实设备。

1. 在 `logs/day-005.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 执行前记录当前版本、磁盘空间和回滚点；只按固定版本/commit操作，命令失败时保留完整 stderr，不连续尝试多个来源的安装方案。
3. 完成后从新 shell 或干净 build 目录复验；记录实际版本、产物 hash、退出码和启动现象，避免依赖当前终端的隐式环境变量。
4. 每条实际执行命令连同退出码追加到 `evidence/day-005/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜测试所有权、越界、超时和无效动作，记录 C 与现代 C++ 的能力边界。

1. 在 `logs/day-005.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-005/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

- 主交付物：cpp/robot_io_baseline、CMakeLists.txt、单元测试
- 日志：`logs/day-005.md`
- 原始证据目录：`evidence/day-005/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：Debug/Release 构建通过；不少于8个测试通过；不得将基线练习写成生产级机器人控制经验。
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
> [[#D005 详细执行｜现代 C++17、CMake 与 Robot I/O 基线|← Day 005]] · [[#导航|↑ 文档导航]] · [[#D007 详细执行｜第一周可复现与范围复盘|Day 007 →]]

#### D006 详细执行｜MuJoCo 本地与云端无界面冒烟

> 计划日期：2026-08-29｜主动投入：4 小时｜第 1 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“reports/mujoco-local-cloud-smoke.md、容器冒烟日志”，并满足：本地交互和云端 headless 均通过；云端内存峰值有记录；未在云端承诺实时手柄操作或VLA训练。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 005 的结果记录，确认其状态和交付物“cpp/robot_io_baseline、CMakeLists.txt、单元测试”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-006.md` 和 `evidence/day-006/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R16 MuJoCo 文档](https://mujoco.readthedocs.io/en/stable/)；[R21 Docker 文档](https://docs.docker.com/)；[R52 MuJoCo Headless Rendering](https://github.com/google-deepmind/dm_control#rendering)；H01 个人开发电脑；H02 4核8GB云服务器。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 4 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–01:05 | 任务 1 | 在个人电脑运行交互 viewer 和固定步数物理仿真，记录实时倍率。 |
| 01:05–02:00 | 任务 2 | 在4核8GB云服务器或等价容器使用 OSMesa/无渲染模式运行同一模型。 |
| 02:00–02:55 | 任务 3 | 比较本地、云端物理步进和低分辨率离屏渲染，确定云服务器只承担无界面测试。 |
| 02:55–03:40 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 03:40–04:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜在个人电脑运行交互 viewer 和固定步数物理仿真，记录实时倍率。

1. 在 `logs/day-006.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-006/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜在4核8GB云服务器或等价容器使用 OSMesa/无渲染模式运行同一模型。

1. 在 `logs/day-006.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
4. 先用 1 batch/少量 step 验证 shape、loss、保存和恢复，再冻结数据 revision、配置、seed、代码 commit 与算力预算后启动正式任务。
5. 观察首个训练/验证周期并主动验证一次 checkpoint 恢复；训练仍在运行时写 RUNNING，不把开始训练、下载权重或官方 demo 当成完成微调。
6. 每条实际执行命令连同退出码追加到 `evidence/day-006/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜比较本地、云端物理步进和低分辨率离屏渲染，确定云服务器只承担无界面测试。

1. 在 `logs/day-006.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-006/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `docker compose config --quiet`
- `docker compose build`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：reports/mujoco-local-cloud-smoke.md、容器冒烟日志
- 日志：`logs/day-006.md`
- 原始证据目录：`evidence/day-006/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：本地交互和云端 headless 均通过；云端内存峰值有记录；未在云端承诺实时手柄操作或VLA训练。
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
> [[#D006 详细执行｜MuJoCo 本地与云端无界面冒烟|← Day 006]] · [[#导航|↑ 文档导航]] · [[#D008 详细执行｜Franka 模型、许可证与版本固定|Day 008 →]]

#### D007 详细执行｜第一周可复现与范围复盘

> 计划日期：2026-08-30｜主动投入：2 小时｜第 1 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“reviews/week-01.md 与重建日志”，并满足：在60分钟内完成重建和测试；所有失败有 issue；项目仍明确为仿真优先、真机可选。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 006 的结果记录，确认其状态和交付物“reports/mujoco-local-cloud-smoke.md、容器冒烟日志”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-007.md` 和 `evidence/day-007/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R20 GitHub Actions 文档](https://docs.github.com/en/actions)；[R21 Docker 文档](https://docs.docker.com/)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 从干净目录重建环境并执行 Python、C++ 和 MuJoCo 测试。 |
| 00:35–01:00 | 任务 2 | 审计依赖锁、许可证、隐私与磁盘占用。 |
| 01:00–01:25 | 任务 3 | 将阻塞项转成 issue，并冻结第二周的 Franka MuJoCo 目标。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜从干净目录重建环境并执行 Python、C++ 和 MuJoCo 测试。

1. 在 `logs/day-007.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 执行前记录当前版本、磁盘空间和回滚点；只按固定版本/commit操作，命令失败时保留完整 stderr，不连续尝试多个来源的安装方案。
3. 完成后从新 shell 或干净 build 目录复验；记录实际版本、产物 hash、退出码和启动现象，避免依赖当前终端的隐式环境变量。
4. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
5. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
6. 每条实际执行命令连同退出码追加到 `evidence/day-007/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜审计依赖锁、许可证、隐私与磁盘占用。

1. 在 `logs/day-007.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 只读列出的官方/一手资料，先写出要回答的 3～5 个问题；阅读时逐条记录“结论、出处、适用版本、仍不确定项”，禁止只收藏链接。
3. 合上资料后用自己的话重写结论，并用一个反例或边界条件检验理解；无法解释的术语放入问题清单，不用“熟悉”代替掌握。
4. 每条实际执行命令连同退出码追加到 `evidence/day-007/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜将阻塞项转成 issue，并冻结第二周的 Franka MuJoCo 目标。

1. 在 `logs/day-007.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 发布/提交前逐条核对证据 ID、个人贡献、上游来源、simulation-only/真实设备边界和禁用表述；运行隐私检查并人工搜索联系方式、设备标识、密钥和公司材料。
3. 记录实际提交版本、目标链接和时间；外部是否回复、合并或录用是后续状态，不在当天伪造成果，也不高频自动化操作网站。
4. 每条实际执行命令连同退出码追加到 `evidence/day-007/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

- 主交付物：reviews/week-01.md 与重建日志
- 日志：`logs/day-007.md`
- 原始证据目录：`evidence/day-007/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：在60分钟内完成重建和测试；所有失败有 issue；项目仍明确为仿真优先、真机可选。
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

### 第 2 周详细执行｜MuJoCo 与 Franka 仿真环境

> [!info]- 当日导航
> [[#D007 详细执行｜第一周可复现与范围复盘|← Day 007]] · [[#导航|↑ 文档导航]] · [[#D009 详细执行｜关节、执行器与传感器观测|Day 009 →]]

#### D008 详细执行｜Franka 模型、许可证与版本固定

> 计划日期：2026-08-31｜主动投入：2 小时｜第 2 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“sim/franka、docs/model-inventory.md、licenses/”，并满足：模型在本地和CI可加载；commit与许可证明确；关节/执行器数量由脚本自动校验。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 007 的结果记录，确认其状态和交付物“reviews/week-01.md 与重建日志”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-008.md` 和 `evidence/day-008/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R16 MuJoCo 文档](https://mujoco.readthedocs.io/en/stable/)；[R44 MuJoCo Menagerie](https://github.com/google-deepmind/mujoco_menagerie)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 从 MuJoCo Menagerie 获取 Franka Panda 模型并固定 commit。 |
| 00:35–01:00 | 任务 2 | 记录模型、mesh、第三方许可证和可公开边界。 |
| 01:00–01:25 | 任务 3 | 加载 scene.xml，输出关节、执行器、传感器和相机清单。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜从 MuJoCo Menagerie 获取 Franka Panda 模型并固定 commit。

1. 在 `logs/day-008.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先用 1 batch/少量 step 验证 shape、loss、保存和恢复，再冻结数据 revision、配置、seed、代码 commit 与算力预算后启动正式任务。
3. 观察首个训练/验证周期并主动验证一次 checkpoint 恢复；训练仍在运行时写 RUNNING，不把开始训练、下载权重或官方 demo 当成完成微调。
4. 每条实际执行命令连同退出码追加到 `evidence/day-008/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜记录模型、mesh、第三方许可证和可公开边界。

1. 在 `logs/day-008.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先用 1 batch/少量 step 验证 shape、loss、保存和恢复，再冻结数据 revision、配置、seed、代码 commit 与算力预算后启动正式任务。
3. 观察首个训练/验证周期并主动验证一次 checkpoint 恢复；训练仍在运行时写 RUNNING，不把开始训练、下载权重或官方 demo 当成完成微调。
4. 发布/提交前逐条核对证据 ID、个人贡献、上游来源、simulation-only/真实设备边界和禁用表述；运行隐私检查并人工搜索联系方式、设备标识、密钥和公司材料。
5. 记录实际提交版本、目标链接和时间；外部是否回复、合并或录用是后续状态，不在当天伪造成果，也不高频自动化操作网站。
6. 每条实际执行命令连同退出码追加到 `evidence/day-008/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜加载 scene.xml，输出关节、执行器、传感器和相机清单。

1. 在 `logs/day-008.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-008/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：sim/franka、docs/model-inventory.md、licenses/
- 日志：`logs/day-008.md`
- 原始证据目录：`evidence/day-008/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：模型在本地和CI可加载；commit与许可证明确；关节/执行器数量由脚本自动校验。
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
> [[#D008 详细执行｜Franka 模型、许可证与版本固定|← Day 008]] · [[#导航|↑ 文档导航]] · [[#D010 详细执行｜桌面、方块、容器与相机场景|Day 010 →]]

#### D009 详细执行｜关节、执行器与传感器观测

> 计划日期：2026-09-01｜主动投入：2 小时｜第 2 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“edgevla_sim/observation.py、tests/test_observation.py”，并满足：固定模型下观测 schema 稳定；非法控制被拒绝；数值无 NaN/Inf。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 008 的结果记录，确认其状态和交付物“sim/franka、docs/model-inventory.md、licenses/”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-009.md` 和 `evidence/day-009/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R16 MuJoCo 文档](https://mujoco.readthedocs.io/en/stable/)；[R44 MuJoCo Menagerie](https://github.com/google-deepmind/mujoco_menagerie)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 逐项读取 qpos、qvel、ctrl、末端位姿和接触信息。 |
| 00:35–01:00 | 任务 2 | 实现关节限位与控制范围检查。 |
| 01:00–01:25 | 任务 3 | 对无效 ctrl、越界索引和缺失传感器编写测试。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜逐项读取 qpos、qvel、ctrl、末端位姿和接触信息。

1. 在 `logs/day-009.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-009/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜实现关节限位与控制范围检查。

1. 在 `logs/day-009.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把仿真器/适配器/外部服务访问、协议转换和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 每条实际执行命令连同退出码追加到 `evidence/day-009/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜对无效 ctrl、越界索引和缺失传感器编写测试。

1. 在 `logs/day-009.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把仿真器/适配器/外部服务访问、协议转换和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
5. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
6. 每条实际执行命令连同退出码追加到 `evidence/day-009/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：edgevla_sim/observation.py、tests/test_observation.py
- 日志：`logs/day-009.md`
- 原始证据目录：`evidence/day-009/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：固定模型下观测 schema 稳定；非法控制被拒绝；数值无 NaN/Inf。
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
> [[#D009 详细执行｜关节、执行器与传感器观测|← Day 009]] · [[#导航|↑ 文档导航]] · [[#D011 详细执行｜正运动学、逆运动学与末端位姿|Day 011 →]]

#### D010 详细执行｜桌面、方块、容器与相机场景

> 计划日期：2026-09-02｜主动投入：2 小时｜第 2 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“sim/scenes/pick_cube.xml、tests/test_scene_reset.py”，并满足：100次重置无穿模；对象位姿可复现；相机输出尺寸和dtype固定。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 009 的结果记录，确认其状态和交付物“edgevla_sim/observation.py、tests/test_observation.py”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-010.md` 和 `evidence/day-010/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R16 MuJoCo 文档](https://mujoco.readthedocs.io/en/stable/)；[R44 MuJoCo Menagerie](https://github.com/google-deepmind/mujoco_menagerie)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 建立桌面、目标方块、放置区和固定世界坐标。 |
| 00:35–01:00 | 任务 2 | 增加前视与腕部可选相机，先使用低分辨率。 |
| 01:00–01:25 | 任务 3 | 保存场景随机种子并测试物体不穿模、不在不可达区生成。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜建立桌面、目标方块、放置区和固定世界坐标。

1. 在 `logs/day-010.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把仿真器/适配器/外部服务访问、协议转换和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 每条实际执行命令连同退出码追加到 `evidence/day-010/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜增加前视与腕部可选相机，先使用低分辨率。

1. 在 `logs/day-010.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把仿真器/适配器/外部服务访问、协议转换和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 每条实际执行命令连同退出码追加到 `evidence/day-010/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜保存场景随机种子并测试物体不穿模、不在不可达区生成。

1. 在 `logs/day-010.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-010/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `docker compose config --quiet`
- `docker compose build`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：sim/scenes/pick_cube.xml、tests/test_scene_reset.py
- 日志：`logs/day-010.md`
- 原始证据目录：`evidence/day-010/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：100次重置无穿模；对象位姿可复现；相机输出尺寸和dtype固定。
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
> [[#D010 详细执行｜桌面、方块、容器与相机场景|← Day 010]] · [[#导航|↑ 文档导航]] · [[#D012 详细执行｜安全边界、复位与确定性|Day 012 →]]

#### D011 详细执行｜正运动学、逆运动学与末端位姿

> 计划日期：2026-09-03｜主动投入：2 小时｜第 2 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“edgevla_sim/kinematics.py、reports/ik-cases.csv”，并满足：至少20个可达目标收敛；不可达目标不产生失控动作；坐标系图与代码一致。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 010 的结果记录，确认其状态和交付物“sim/scenes/pick_cube.xml、tests/test_scene_reset.py”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-011.md` 和 `evidence/day-011/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R16 MuJoCo 文档](https://mujoco.readthedocs.io/en/stable/)；[R44 MuJoCo Menagerie](https://github.com/google-deepmind/mujoco_menagerie)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 读取末端执行器位置和四元数并验证坐标系。 |
| 00:35–01:00 | 任务 2 | 实现增量式 XYZ 目标到关节控制的 IK 路径。 |
| 01:00–01:25 | 任务 3 | 对不可达、奇异和过大步长执行限幅或失败返回。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜读取末端执行器位置和四元数并验证坐标系。

1. 在 `logs/day-011.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-011/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜实现增量式 XYZ 目标到关节控制的 IK 路径。

1. 在 `logs/day-011.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把仿真器/适配器/外部服务访问、协议转换和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 每条实际执行命令连同退出码追加到 `evidence/day-011/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜对不可达、奇异和过大步长执行限幅或失败返回。

1. 在 `logs/day-011.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-011/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

- 主交付物：edgevla_sim/kinematics.py、reports/ik-cases.csv
- 日志：`logs/day-011.md`
- 原始证据目录：`evidence/day-011/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：至少20个可达目标收敛；不可达目标不产生失控动作；坐标系图与代码一致。
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
> [[#D011 详细执行｜正运动学、逆运动学与末端位姿|← Day 011]] · [[#导航|↑ 文档导航]] · [[#D013 详细执行｜离屏渲染与性能基准|Day 013 →]]

#### D012 详细执行｜安全边界、复位与确定性

> 计划日期：2026-09-04｜主动投入：2 小时｜第 2 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“edgevla_sim/safety.py、tests/test_safety.py”，并满足：越界动作100%被夹紧或拒绝；急停后控制量归零；相同种子状态一致。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 011 的结果记录，确认其状态和交付物“edgevla_sim/kinematics.py、reports/ik-cases.csv”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-012.md` 和 `evidence/day-012/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R16 MuJoCo 文档](https://mujoco.readthedocs.io/en/stable/)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 定义末端工作空间、关节、速度和单步位移上限。 |
| 00:35–01:00 | 任务 2 | 实现 reset、暂停、急停状态和动作清空。 |
| 01:00–01:25 | 任务 3 | 用相同种子复现初始状态并注入越界动作。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜定义末端工作空间、关节、速度和单步位移上限。

1. 在 `logs/day-012.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 每条实际执行命令连同退出码追加到 `evidence/day-012/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜实现 reset、暂停、急停状态和动作清空。

1. 在 `logs/day-012.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把仿真器/适配器/外部服务访问、协议转换和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 每条实际执行命令连同退出码追加到 `evidence/day-012/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜用相同种子复现初始状态并注入越界动作。

1. 在 `logs/day-012.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-012/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：edgevla_sim/safety.py、tests/test_safety.py
- 日志：`logs/day-012.md`
- 原始证据目录：`evidence/day-012/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：越界动作100%被夹紧或拒绝；急停后控制量归零；相同种子状态一致。
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
> [[#D012 详细执行｜安全边界、复位与确定性|← Day 012]] · [[#导航|↑ 文档导航]] · [[#D014 详细执行｜仿真环境 v0.1 阶段门|Day 014 →]]

#### D013 详细执行｜离屏渲染与性能基准

> 计划日期：2026-09-05｜主动投入：4 小时｜第 2 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“benchmarks/mujoco-rendering.csv、reports/render-budget.md”，并满足：三种模式均有原始数据；云端配置不会OOM；最终采集参数有明确理由。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 012 的结果记录，确认其状态和交付物“edgevla_sim/safety.py、tests/test_safety.py”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-013.md` 和 `evidence/day-013/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R16 MuJoCo 文档](https://mujoco.readthedocs.io/en/stable/)；[R52 MuJoCo Headless Rendering](https://github.com/google-deepmind/dm_control#rendering)；H02 4核8GB云服务器。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 4 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–01:05 | 任务 1 | 分别测试无渲染、128×128、256×256 OSMesa 离屏渲染。 |
| 01:05–02:00 | 任务 2 | 记录个人电脑和4核8GB云服务器的步进速度、CPU、内存和磁盘。 |
| 02:00–02:55 | 任务 3 | 确定采集分辨率、FPS和云端CI配置，不追求漂亮高分辨率。 |
| 02:55–03:40 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 03:40–04:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜分别测试无渲染、128×128、256×256 OSMesa 离屏渲染。

1. 在 `logs/day-013.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-013/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜记录个人电脑和4核8GB云服务器的步进速度、CPU、内存和磁盘。

1. 在 `logs/day-013.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-013/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜确定采集分辨率、FPS和云端CI配置，不追求漂亮高分辨率。

1. 在 `logs/day-013.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把仿真器/适配器/外部服务访问、协议转换和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 每批开始前锁定 task/spec 与数据 schema；每个样本生成唯一 ID，记录MuJoCo/真实设备来源、时间、操作者/上游、有效性和失败原因。
5. 每完成一小批立即跑质量检查和 checksum；原始数据只追加不静默改写，无效样本保留在 manifest 并标明排除原因。
6. 每条实际执行命令连同退出码追加到 `evidence/day-013/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：benchmarks/mujoco-rendering.csv、reports/render-budget.md
- 日志：`logs/day-013.md`
- 原始证据目录：`evidence/day-013/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：三种模式均有原始数据；云端配置不会OOM；最终采集参数有明确理由。
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
> [[#D013 详细执行｜离屏渲染与性能基准|← Day 013]] · [[#导航|↑ 文档导航]] · [[#D015 详细执行｜键盘 XYZ 最小控制|Day 015 →]]

#### D014 详细执行｜仿真环境 v0.1 阶段门

> 计划日期：2026-09-06｜主动投入：2 小时｜第 2 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“releases/sim-env-v0.1.md 与演示视频”，并满足：新环境可在30分钟内复现；全部测试通过；演示明确标记 MuJoCo simulation。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 013 的结果记录，确认其状态和交付物“benchmarks/mujoco-rendering.csv、reports/render-budget.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-014.md` 和 `evidence/day-014/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R16 MuJoCo 文档](https://mujoco.readthedocs.io/en/stable/)；[R44 MuJoCo Menagerie](https://github.com/google-deepmind/mujoco_menagerie)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 提供一条命令启动本地 viewer，一条命令运行 headless 测试。 |
| 00:35–01:00 | 任务 2 | 录制30秒环境演示并同时保留失败案例。 |
| 01:00–01:25 | 任务 3 | 冻结 v0.1 schema、模型commit和第二周复现说明。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜提供一条命令启动本地 viewer，一条命令运行 headless 测试。

1. 在 `logs/day-014.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 执行前记录当前版本、磁盘空间和回滚点；只按固定版本/commit操作，命令失败时保留完整 stderr，不连续尝试多个来源的安装方案。
3. 完成后从新 shell 或干净 build 目录复验；记录实际版本、产物 hash、退出码和启动现象，避免依赖当前终端的隐式环境变量。
4. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
5. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
6. 每条实际执行命令连同退出码追加到 `evidence/day-014/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜录制30秒环境演示并同时保留失败案例。

1. 在 `logs/day-014.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 执行前记录当前版本、磁盘空间和回滚点；只按固定版本/commit操作，命令失败时保留完整 stderr，不连续尝试多个来源的安装方案。
3. 完成后从新 shell 或干净 build 目录复验；记录实际版本、产物 hash、退出码和启动现象，避免依赖当前终端的隐式环境变量。
4. 每条实际执行命令连同退出码追加到 `evidence/day-014/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜冻结 v0.1 schema、模型commit和第二周复现说明。

1. 在 `logs/day-014.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 先用 1 batch/少量 step 验证 shape、loss、保存和恢复，再冻结数据 revision、配置、seed、代码 commit 与算力预算后启动正式任务。
5. 观察首个训练/验证周期并主动验证一次 checkpoint 恢复；训练仍在运行时写 RUNNING，不把开始训练、下载权重或官方 demo 当成完成微调。
6. 每条实际执行命令连同退出码追加到 `evidence/day-014/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：releases/sim-env-v0.1.md 与演示视频
- 日志：`logs/day-014.md`
- 原始证据目录：`evidence/day-014/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：新环境可在30分钟内复现；全部测试通过；演示明确标记 MuJoCo simulation。
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

### 第 3 周详细执行｜键盘与游戏手柄遥操作

> [!info]- 当日导航
> [[#D014 详细执行｜仿真环境 v0.1 阶段门|← Day 014]] · [[#导航|↑ 文档导航]] · [[#D016 详细执行｜游戏手柄识别、轴校准与死区|Day 016 →]]

#### D015 详细执行｜键盘 XYZ 最小控制

> 计划日期：2026-09-07｜主动投入：2 小时｜第 3 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“teleop/keyboard.py、tests/test_keyboard_map.py”，并满足：所有映射有测试；释放dead-man后下一周期动作归零；可完成末端三轴移动。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 014 的结果记录，确认其状态和交付物“releases/sim-env-v0.1.md 与演示视频”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-015.md` 和 `evidence/day-015/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R43 LeRobot Imitation Learning in Simulation](https://huggingface.co/docs/lerobot/main/il_sim)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 实现方向键控制 XY、Shift 控制 Z、Ctrl 控制夹爪的映射。 |
| 00:35–01:00 | 任务 2 | 加入 space dead-man，未按住时动作必须为零。 |
| 01:00–01:25 | 任务 3 | 记录按键、目标增量、实际末端位姿和限幅结果。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜实现方向键控制 XY、Shift 控制 Z、Ctrl 控制夹爪的映射。

1. 在 `logs/day-015.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把仿真器/适配器/外部服务访问、协议转换和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 每条实际执行命令连同退出码追加到 `evidence/day-015/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜加入 space dead-man，未按住时动作必须为零。

1. 在 `logs/day-015.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-015/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜记录按键、目标增量、实际末端位姿和限幅结果。

1. 在 `logs/day-015.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-015/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：teleop/keyboard.py、tests/test_keyboard_map.py
- 日志：`logs/day-015.md`
- 原始证据目录：`evidence/day-015/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：所有映射有测试；释放dead-man后下一周期动作归零；可完成末端三轴移动。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 手柄无法识别、漂移或断连：立即回到键盘输入或固定动作测试；dead-man和动作归零仍是必验项，不用云服务器远程桌面替代本地交互采集。

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
> [[#D015 详细执行｜键盘 XYZ 最小控制|← Day 015]] · [[#导航|↑ 文档导航]] · [[#D017 详细执行｜手柄 XYZ 增量与 dead-man|Day 017 →]]

#### D016 详细执行｜游戏手柄识别、轴校准与死区

> 计划日期：2026-09-08｜主动投入：2 小时｜第 3 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“teleop/gamepad.py、configs/gamepad.yaml、校准日志”，并满足：静止漂移低于配置死区；断连被检测；不在云服务器直连本地手柄。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 015 的结果记录，确认其状态和交付物“teleop/keyboard.py、tests/test_keyboard_map.py”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-016.md` 和 `evidence/day-016/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R43 LeRobot Imitation Learning in Simulation](https://huggingface.co/docs/lerobot/main/il_sim)；[R46 SDL Gamepad Documentation](https://wiki.libsdl.org/SDL3/CategoryGamepad)；H03 现有游戏手柄。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 在个人电脑识别现有手柄的轴、按钮、VID/PID和操作系统映射。 |
| 00:35–01:00 | 任务 2 | 实现轴归一化、死区、反向、漂移检测和配置保存。 |
| 01:00–01:25 | 任务 3 | 断开手柄、轴卡死和未知型号时进入安全停止。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜在个人电脑识别现有手柄的轴、按钮、VID/PID和操作系统映射。

1. 在 `logs/day-016.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-016/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜实现轴归一化、死区、反向、漂移检测和配置保存。

1. 在 `logs/day-016.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把仿真器/适配器/外部服务访问、协议转换和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 每条实际执行命令连同退出码追加到 `evidence/day-016/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜断开手柄、轴卡死和未知型号时进入安全停止。

1. 在 `logs/day-016.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-016/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：teleop/gamepad.py、configs/gamepad.yaml、校准日志
- 日志：`logs/day-016.md`
- 原始证据目录：`evidence/day-016/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：静止漂移低于配置死区；断连被检测；不在云服务器直连本地手柄。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 手柄无法识别、漂移或断连：立即回到键盘输入或固定动作测试；dead-man和动作归零仍是必验项，不用云服务器远程桌面替代本地交互采集。

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
> [[#D016 详细执行｜游戏手柄识别、轴校准与死区|← Day 016]] · [[#导航|↑ 文档导航]] · [[#D018 详细执行｜姿态、夹爪与控制模式切换|Day 018 →]]

#### D017 详细执行｜手柄 XYZ 增量与 dead-man

> 计划日期：2026-09-09｜主动投入：2 小时｜第 3 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“teleop/gamepad_xyz.py、reports/gamepad-xyz.md”，并满足：三个轴方向与文档一致；松开dead-man立即停止；无突然跳变。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 016 的结果记录，确认其状态和交付物“teleop/gamepad.py、configs/gamepad.yaml、校准日志”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-017.md` 和 `evidence/day-017/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R43 LeRobot Imitation Learning in Simulation](https://huggingface.co/docs/lerobot/main/il_sim)；[R46 SDL Gamepad Documentation](https://wiki.libsdl.org/SDL3/CategoryGamepad)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 将左右摇杆映射为末端 XYZ 增量，保留可配置灵敏度。 |
| 00:35–01:00 | 任务 2 | 指定肩键为 dead-man，并区分暂停、复位和退出。 |
| 01:00–01:25 | 任务 3 | 用轨迹日志检查指令、IK结果和实际末端运动方向。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜将左右摇杆映射为末端 XYZ 增量，保留可配置灵敏度。

1. 在 `logs/day-017.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把仿真器/适配器/外部服务访问、协议转换和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 每条实际执行命令连同退出码追加到 `evidence/day-017/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜指定肩键为 dead-man，并区分暂停、复位和退出。

1. 在 `logs/day-017.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-017/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜用轨迹日志检查指令、IK结果和实际末端运动方向。

1. 在 `logs/day-017.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-017/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：teleop/gamepad_xyz.py、reports/gamepad-xyz.md
- 日志：`logs/day-017.md`
- 原始证据目录：`evidence/day-017/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：三个轴方向与文档一致；松开dead-man立即停止；无突然跳变。
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
> [[#D017 详细执行｜手柄 XYZ 增量与 dead-man|← Day 017]] · [[#导航|↑ 文档导航]] · [[#D019 详细执行｜Episode 录制状态机|Day 019 →]]

#### D018 详细执行｜姿态、夹爪与控制模式切换

> 计划日期：2026-09-10｜主动投入：2 小时｜第 3 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“teleop/gamepad_pose.py、tests/test_mode_switch.py”，并满足：模式切换无跳变；姿态和夹爪受限幅；无IMU手柄也能完成验收。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 017 的结果记录，确认其状态和交付物“teleop/gamepad_xyz.py、reports/gamepad-xyz.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-018.md` 和 `evidence/day-018/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R43 LeRobot Imitation Learning in Simulation](https://huggingface.co/docs/lerobot/main/il_sim)；[R46 SDL Gamepad Documentation](https://wiki.libsdl.org/SDL3/CategoryGamepad)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 用第二摇杆/按键实现 roll-pitch-yaw 增量和夹爪。 |
| 00:35–01:00 | 任务 2 | 实现位置模式、姿态模式切换及切换时的零增量。 |
| 01:00–01:25 | 任务 3 | 若手柄有IMU，只作为可选实验，不作为计划完成条件。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜用第二摇杆/按键实现 roll-pitch-yaw 增量和夹爪。

1. 在 `logs/day-018.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把仿真器/适配器/外部服务访问、协议转换和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 每条实际执行命令连同退出码追加到 `evidence/day-018/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜实现位置模式、姿态模式切换及切换时的零增量。

1. 在 `logs/day-018.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把仿真器/适配器/外部服务访问、协议转换和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 每条实际执行命令连同退出码追加到 `evidence/day-018/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜若手柄有IMU，只作为可选实验，不作为计划完成条件。

1. 在 `logs/day-018.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-018/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：teleop/gamepad_pose.py、tests/test_mode_switch.py
- 日志：`logs/day-018.md`
- 原始证据目录：`evidence/day-018/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：模式切换无跳变；姿态和夹爪受限幅；无IMU手柄也能完成验收。
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
> [[#D018 详细执行｜姿态、夹爪与控制模式切换|← Day 018]] · [[#导航|↑ 文档导航]] · [[#D020 详细执行｜遥操作时延、抖动与故障注入|Day 020 →]]

#### D019 详细执行｜Episode 录制状态机

> 计划日期：2026-09-11｜主动投入：2 小时｜第 3 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“recording/episode_fsm.py、tests/test_episode_fsm.py”，并满足：状态转换覆盖率完整；非法转换被拒绝；每个Episode有唯一ID和结束原因。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 018 的结果记录，确认其状态和交付物“teleop/gamepad_pose.py、tests/test_mode_switch.py”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-019.md` 和 `evidence/day-019/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；[R43 LeRobot Imitation Learning in Simulation](https://huggingface.co/docs/lerobot/main/il_sim)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 定义 IDLE、ARMED、RECORDING、SUCCESS、FAILURE、DISCARDED 状态。 |
| 00:35–01:00 | 任务 2 | 将开始、成功、失败、重置映射到键盘和手柄按钮。 |
| 01:00–01:25 | 任务 3 | 保证失败Episode和丢弃原因也进入日志，不静默删除。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜定义 IDLE、ARMED、RECORDING、SUCCESS、FAILURE、DISCARDED 状态。

1. 在 `logs/day-019.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 每条实际执行命令连同退出码追加到 `evidence/day-019/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜将开始、成功、失败、重置映射到键盘和手柄按钮。

1. 在 `logs/day-019.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-019/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜保证失败Episode和丢弃原因也进入日志，不静默删除。

1. 在 `logs/day-019.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 每批开始前锁定 task/spec 与数据 schema；每个样本生成唯一 ID，记录MuJoCo/真实设备来源、时间、操作者/上游、有效性和失败原因。
3. 每完成一小批立即跑质量检查和 checksum；原始数据只追加不静默改写，无效样本保留在 manifest 并标明排除原因。
4. 每条实际执行命令连同退出码追加到 `evidence/day-019/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：recording/episode_fsm.py、tests/test_episode_fsm.py
- 日志：`logs/day-019.md`
- 原始证据目录：`evidence/day-019/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：状态转换覆盖率完整；非法转换被拒绝；每个Episode有唯一ID和结束原因。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 手柄无法识别、漂移或断连：立即回到键盘输入或固定动作测试；dead-man和动作归零仍是必验项，不用云服务器远程桌面替代本地交互采集。

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
> [[#D019 详细执行｜Episode 录制状态机|← Day 019]] · [[#导航|↑ 文档导航]] · [[#D021 详细执行｜遥操作 v0.1 演示与复盘|Day 021 →]]

#### D020 详细执行｜遥操作时延、抖动与故障注入

> 计划日期：2026-09-12｜主动投入：4 小时｜第 3 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“reports/teleop-latency.csv、fault-cases/”，并满足：每个阶段有P50/P95；断连和尖峰不会越界；参数写入版本化配置。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 019 的结果记录，确认其状态和交付物“recording/episode_fsm.py、tests/test_episode_fsm.py”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-020.md` 和 `evidence/day-020/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R16 MuJoCo 文档](https://mujoco.readthedocs.io/en/stable/)；[R43 LeRobot Imitation Learning in Simulation](https://huggingface.co/docs/lerobot/main/il_sim)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 4 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–01:05 | 任务 1 | 测量输入采样、IK、物理步进和渲染的阶段时延。 |
| 01:05–02:00 | 任务 2 | 注入低帧率、手柄断连、长按和动作尖峰。 |
| 02:00–02:55 | 任务 3 | 调整控制频率、平滑和单步上限，同时保留原始对比。 |
| 02:55–03:40 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 03:40–04:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜测量输入采样、IK、物理步进和渲染的阶段时延。

1. 在 `logs/day-020.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-020/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜注入低帧率、手柄断连、长按和动作尖峰。

1. 在 `logs/day-020.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-020/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜调整控制频率、平滑和单步上限，同时保留原始对比。

1. 在 `logs/day-020.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-020/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：reports/teleop-latency.csv、fault-cases/
- 日志：`logs/day-020.md`
- 原始证据目录：`evidence/day-020/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：每个阶段有P50/P95；断连和尖峰不会越界；参数写入版本化配置。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 手柄无法识别、漂移或断连：立即回到键盘输入或固定动作测试；dead-man和动作归零仍是必验项，不用云服务器远程桌面替代本地交互采集。

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
> [[#D020 详细执行｜遥操作时延、抖动与故障注入|← Day 020]] · [[#导航|↑ 文档导航]] · [[#D022 详细执行｜Observation/Action Schema 冻结|Day 022 →]]

#### D021 详细执行｜遥操作 v0.1 演示与复盘

> 计划日期：2026-09-13｜主动投入：2 小时｜第 3 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“releases/teleop-v0.1.md、成功/失败演示”，并满足：至少一种输入连续3次完成目标；失败可解释；没有把GELLO或真机写成已完成。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 020 的结果记录，确认其状态和交付物“reports/teleop-latency.csv、fault-cases/”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-021.md` 和 `evidence/day-021/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R43 LeRobot Imitation Learning in Simulation](https://huggingface.co/docs/lerobot/main/il_sim)；[R45 GELLO Software](https://github.com/wuphilipp/gello_software)；H03 现有游戏手柄。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 用键盘和手柄各完成至少3次到达目标位姿。 |
| 00:35–01:00 | 任务 2 | 录制成功与失败视频，叠加输入和末端轨迹。 |
| 01:00–01:25 | 任务 3 | 决定后续主输入设备；GELLO仅列为可选扩展。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜用键盘和手柄各完成至少3次到达目标位姿。

1. 在 `logs/day-021.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-021/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜录制成功与失败视频，叠加输入和末端轨迹。

1. 在 `logs/day-021.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-021/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜决定后续主输入设备；GELLO仅列为可选扩展。

1. 在 `logs/day-021.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-021/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：releases/teleop-v0.1.md、成功/失败演示
- 日志：`logs/day-021.md`
- 原始证据目录：`evidence/day-021/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：至少一种输入连续3次完成目标；失败可解释；没有把GELLO或真机写成已完成。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 真实机械臂、GELLO或SO-101当前均为可选扩展：没有授权、SDK、物理急停和安全区域时只执行MuJoCo仿真，不得发送真实动作或声称真机迁移。
- 手柄无法识别、漂移或断连：立即回到键盘输入或固定动作测试；dead-man和动作归零仍是必验项，不用云服务器远程桌面替代本地交互采集。

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

### 第 4 周详细执行｜Robot I/O、LeRobot 适配与回放

> [!info]- 当日导航
> [[#D021 详细执行｜遥操作 v0.1 演示与复盘|← Day 021]] · [[#导航|↑ 文档导航]] · [[#D023 详细执行｜MuJoCoRobot 适配器|Day 023 →]]

#### D022 详细执行｜Observation/Action Schema 冻结

> 计划日期：2026-09-14｜主动投入：2 小时｜第 4 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“schemas/robot-io-v1.json、docs/robot-io-contract.md”，并满足：schema验证覆盖正常和失败样本；单位与坐标系无歧义；版本号不可省略。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 021 的结果记录，确认其状态和交付物“releases/teleop-v0.1.md、成功/失败演示”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-022.md` 和 `evidence/day-022/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；[R05 LeRobot 自定义硬件](https://huggingface.co/docs/lerobot/v0.6.0/en/integrate_hardware)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 定义关节、末端位姿、夹爪、图像、时间戳和任务文本字段。 |
| 00:35–01:00 | 任务 2 | 明确单位、坐标系、dtype、shape、频率和必选/可选字段。 |
| 01:00–01:25 | 任务 3 | 为版本不兼容、字段缺失和shape错误提供显式报错。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜定义关节、末端位姿、夹爪、图像、时间戳和任务文本字段。

1. 在 `logs/day-022.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 每条实际执行命令连同退出码追加到 `evidence/day-022/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜明确单位、坐标系、dtype、shape、频率和必选/可选字段。

1. 在 `logs/day-022.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-022/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜为版本不兼容、字段缺失和shape错误提供显式报错。

1. 在 `logs/day-022.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-022/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：schemas/robot-io-v1.json、docs/robot-io-contract.md
- 日志：`logs/day-022.md`
- 原始证据目录：`evidence/day-022/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：schema验证覆盖正常和失败样本；单位与坐标系无歧义；版本号不可省略。
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
> [[#D022 详细执行｜Observation/Action Schema 冻结|← Day 022]] · [[#导航|↑ 文档导航]] · [[#D024 详细执行｜Keyboard/Gamepad Teleoperator 适配器|Day 024 →]]

#### D023 详细执行｜MuJoCoRobot 适配器

> 计划日期：2026-09-15｜主动投入：2 小时｜第 4 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“packages/edgevla_robot/mujoco_robot.py”，并满足：Robot契约测试全部通过；错误状态不崩溃；无真实硬件依赖。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 022 的结果记录，确认其状态和交付物“schemas/robot-io-v1.json、docs/robot-io-contract.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-023.md` 和 `evidence/day-023/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R05 LeRobot 自定义硬件](https://huggingface.co/docs/lerobot/v0.6.0/en/integrate_hardware)；[R16 MuJoCo 文档](https://mujoco.readthedocs.io/en/stable/)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 实现 connect、disconnect、get_observation、send_action、reset。 |
| 00:35–01:00 | 任务 2 | 隔离 MuJoCo model/data，不让上层直接访问底层对象。 |
| 01:00–01:25 | 任务 3 | 测试重复连接、断开后调用、重置和动作超时。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜实现 connect、disconnect、get_observation、send_action、reset。

1. 在 `logs/day-023.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把仿真器/适配器/外部服务访问、协议转换和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 每条实际执行命令连同退出码追加到 `evidence/day-023/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜隔离 MuJoCo model/data，不让上层直接访问底层对象。

1. 在 `logs/day-023.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-023/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜测试重复连接、断开后调用、重置和动作超时。

1. 在 `logs/day-023.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-023/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：packages/edgevla_robot/mujoco_robot.py
- 日志：`logs/day-023.md`
- 原始证据目录：`evidence/day-023/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：Robot契约测试全部通过；错误状态不崩溃；无真实硬件依赖。
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
> [[#D023 详细执行｜MuJoCoRobot 适配器|← Day 023]] · [[#导航|↑ 文档导航]] · [[#D025 详细执行｜LeRobotDataset v3 字段映射|Day 025 →]]

#### D024 详细执行｜Keyboard/Gamepad Teleoperator 适配器

> 计划日期：2026-09-16｜主动投入：2 小时｜第 4 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“packages/edgevla_teleop/”，并满足：键盘和手柄共享契约；控制事件不混入模型动作；回放结果可复现。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 023 的结果记录，确认其状态和交付物“packages/edgevla_robot/mujoco_robot.py”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-024.md` 和 `evidence/day-024/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R05 LeRobot 自定义硬件](https://huggingface.co/docs/lerobot/v0.6.0/en/integrate_hardware)；[R43 LeRobot Imitation Learning in Simulation](https://huggingface.co/docs/lerobot/main/il_sim)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 实现统一 Teleoperator 接口和配置对象。 |
| 00:35–01:00 | 任务 2 | 将dead-man、模式、复位和Episode事件从动作向量中分离。 |
| 01:00–01:25 | 任务 3 | 用录制输入回放验证同一输入产生一致目标动作。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜实现统一 Teleoperator 接口和配置对象。

1. 在 `logs/day-024.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把仿真器/适配器/外部服务访问、协议转换和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 每条实际执行命令连同退出码追加到 `evidence/day-024/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜将dead-man、模式、复位和Episode事件从动作向量中分离。

1. 在 `logs/day-024.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 每批开始前锁定 task/spec 与数据 schema；每个样本生成唯一 ID，记录MuJoCo/真实设备来源、时间、操作者/上游、有效性和失败原因。
3. 每完成一小批立即跑质量检查和 checksum；原始数据只追加不静默改写，无效样本保留在 manifest 并标明排除原因。
4. 每条实际执行命令连同退出码追加到 `evidence/day-024/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜用录制输入回放验证同一输入产生一致目标动作。

1. 在 `logs/day-024.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-024/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：packages/edgevla_teleop/
- 日志：`logs/day-024.md`
- 原始证据目录：`evidence/day-024/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：键盘和手柄共享契约；控制事件不混入模型动作；回放结果可复现。
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
> [[#D024 详细执行｜Keyboard/Gamepad Teleoperator 适配器|← Day 024]] · [[#导航|↑ 文档导航]] · [[#D026 详细执行｜时间戳、图像与动作同步|Day 026 →]]

#### D025 详细执行｜LeRobotDataset v3 字段映射

> 计划日期：2026-09-17｜主动投入：2 小时｜第 4 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“dataset/minimal-v3、docs/feature-map.md”，并满足：官方读取/可视化通过；feature/action shape一致；没有上传私人数据。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 024 的结果记录，确认其状态和交付物“packages/edgevla_teleop/”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-025.md` 和 `evidence/day-025/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；[R43 LeRobot Imitation Learning in Simulation](https://huggingface.co/docs/lerobot/main/il_sim)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 将 robot schema 映射到 LeRobotDataset feature。 |
| 00:35–01:00 | 任务 2 | 生成最小1个Episode，包含状态、动作、任务和相机。 |
| 01:00–01:25 | 任务 3 | 用官方工具读取、统计和可视化，记录精确版本。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜将 robot schema 映射到 LeRobotDataset feature。

1. 在 `logs/day-025.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 每条实际执行命令连同退出码追加到 `evidence/day-025/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜生成最小1个Episode，包含状态、动作、任务和相机。

1. 在 `logs/day-025.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 每批开始前锁定 task/spec 与数据 schema；每个样本生成唯一 ID，记录MuJoCo/真实设备来源、时间、操作者/上游、有效性和失败原因。
3. 每完成一小批立即跑质量检查和 checksum；原始数据只追加不静默改写，无效样本保留在 manifest 并标明排除原因。
4. 每条实际执行命令连同退出码追加到 `evidence/day-025/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜用官方工具读取、统计和可视化，记录精确版本。

1. 在 `logs/day-025.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-025/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

- 主交付物：dataset/minimal-v3、docs/feature-map.md
- 日志：`logs/day-025.md`
- 原始证据目录：`evidence/day-025/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：官方读取/可视化通过；feature/action shape一致；没有上传私人数据。
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
> [[#D025 详细执行｜LeRobotDataset v3 字段映射|← Day 025]] · [[#导航|↑ 文档导航]] · [[#D027 详细执行｜录制、回放与契约测试|Day 027 →]]

#### D026 详细执行｜时间戳、图像与动作同步

> 计划日期：2026-09-18｜主动投入：2 小时｜第 4 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“recording/synchronizer.py、tests/test_sync.py”，并满足：合成异常全部被发现；正常样本同步误差有统计；原始时间戳只追加。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 025 的结果记录，确认其状态和交付物“dataset/minimal-v3、docs/feature-map.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-026.md` 和 `evidence/day-026/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 使用单调时钟记录采样、动作发送和物理步进时间。 |
| 00:35–01:00 | 任务 2 | 实现低帧率、重复帧、动作缺失和延迟检测。 |
| 01:00–01:25 | 任务 3 | 保存原始时间戳，不用事后修改掩盖同步问题。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜使用单调时钟记录采样、动作发送和物理步进时间。

1. 在 `logs/day-026.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-026/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜实现低帧率、重复帧、动作缺失和延迟检测。

1. 在 `logs/day-026.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把仿真器/适配器/外部服务访问、协议转换和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 每条实际执行命令连同退出码追加到 `evidence/day-026/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜保存原始时间戳，不用事后修改掩盖同步问题。

1. 在 `logs/day-026.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-026/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：recording/synchronizer.py、tests/test_sync.py
- 日志：`logs/day-026.md`
- 原始证据目录：`evidence/day-026/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：合成异常全部被发现；正常样本同步误差有统计；原始时间戳只追加。
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
> [[#D026 详细执行｜时间戳、图像与动作同步|← Day 026]] · [[#导航|↑ 文档导航]] · [[#D028 详细执行｜接口与数据工具 v0.1 阶段门|Day 028 →]]

#### D027 详细执行｜录制、回放与契约测试

> 计划日期：2026-09-19｜主动投入：4 小时｜第 4 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“cli/record.py、cli/replay.py、contract-tests/”，并满足：同版本回放轨迹误差在预设容差内；损坏数据被拒绝；CLI退出码可靠。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 026 的结果记录，确认其状态和交付物“recording/synchronizer.py、tests/test_sync.py”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-027.md` 和 `evidence/day-027/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；[R05 LeRobot 自定义硬件](https://huggingface.co/docs/lerobot/v0.6.0/en/integrate_hardware)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 4 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–01:05 | 任务 1 | 实现record/replay CLI和固定种子回放。 |
| 01:05–02:00 | 任务 2 | 将录制动作重新输入 MuJoCo 并比较末端轨迹。 |
| 02:00–02:55 | 任务 3 | 加入截断文件、schema升级和校验和失败测试。 |
| 02:55–03:40 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 03:40–04:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜实现record/replay CLI和固定种子回放。

1. 在 `logs/day-027.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把仿真器/适配器/外部服务访问、协议转换和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
5. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
6. 每条实际执行命令连同退出码追加到 `evidence/day-027/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜将录制动作重新输入 MuJoCo 并比较末端轨迹。

1. 在 `logs/day-027.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-027/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜加入截断文件、schema升级和校验和失败测试。

1. 在 `logs/day-027.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
5. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
6. 每条实际执行命令连同退出码追加到 `evidence/day-027/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：cli/record.py、cli/replay.py、contract-tests/
- 日志：`logs/day-027.md`
- 原始证据目录：`evidence/day-027/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：同版本回放轨迹误差在预设容差内；损坏数据被拒绝；CLI退出码可靠。
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
> [[#D027 详细执行｜录制、回放与契约测试|← Day 027]] · [[#导航|↑ 文档导航]] · [[#D029 详细执行｜Pick-Cube 任务与成功标准|Day 029 →]]

#### D028 详细执行｜接口与数据工具 v0.1 阶段门

> 计划日期：2026-09-20｜主动投入：2 小时｜第 4 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“releases/io-dataset-v0.1.md”，并满足：一条命令完成最小闭环；示例可复现；未暗示支持不存在的真机。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 027 的结果记录，确认其状态和交付物“cli/record.py、cli/replay.py、contract-tests/”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-028.md` 和 `evidence/day-028/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；[R05 LeRobot 自定义硬件](https://huggingface.co/docs/lerobot/v0.6.0/en/integrate_hardware)；[R20 GitHub Actions 文档](https://docs.github.com/en/actions)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 从空目录运行键盘/手柄→MuJoCo→LeRobotDataset→回放闭环。 |
| 00:35–01:00 | 任务 2 | 生成架构图、接口说明和一段脱敏示例数据。 |
| 01:00–01:25 | 任务 3 | 复核许可证、版本和simulation-only标识。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜从空目录运行键盘/手柄→MuJoCo→LeRobotDataset→回放闭环。

1. 在 `logs/day-028.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-028/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜生成架构图、接口说明和一段脱敏示例数据。

1. 在 `logs/day-028.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 每条实际执行命令连同退出码追加到 `evidence/day-028/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜复核许可证、版本和simulation-only标识。

1. 在 `logs/day-028.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-028/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

- 主交付物：releases/io-dataset-v0.1.md
- 日志：`logs/day-028.md`
- 原始证据目录：`evidence/day-028/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：一条命令完成最小闭环；示例可复现；未暗示支持不存在的真机。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 手柄无法识别、漂移或断连：立即回到键盘输入或固定动作测试；dead-man和动作归零仍是必验项，不用云服务器远程桌面替代本地交互采集。

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

### 第 5 周详细执行｜Pick-Cube 任务与第一版示范数据

> [!info]- 当日导航
> [[#D028 详细执行｜接口与数据工具 v0.1 阶段门|← Day 028]] · [[#导航|↑ 文档导航]] · [[#D030 详细执行｜确定性重置与位置随机化|Day 030 →]]

#### D029 详细执行｜Pick-Cube 任务与成功标准

> 计划日期：2026-09-21｜主动投入：2 小时｜第 5 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“dataset/task-spec-pick-cube-v1.md”，并满足：第三方按文档可判断成功/失败；协议含超时和异常规则；协议ID进入每个Episode。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 028 的结果记录，确认其状态和交付物“releases/io-dataset-v0.1.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-029.md` 和 `evidence/day-029/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R43 LeRobot Imitation Learning in Simulation](https://huggingface.co/docs/lerobot/main/il_sim)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 定义抓取方块并放入目标区的初始状态、控制时长和终止条件。 |
| 00:35–01:00 | 任务 2 | 成功判定同时使用物体位置、夹爪状态和稳定保持时间。 |
| 01:00–01:25 | 任务 3 | 先冻结协议ID，再开始正式采集。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜定义抓取方块并放入目标区的初始状态、控制时长和终止条件。

1. 在 `logs/day-029.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 每条实际执行命令连同退出码追加到 `evidence/day-029/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜成功判定同时使用物体位置、夹爪状态和稳定保持时间。

1. 在 `logs/day-029.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-029/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜先冻结协议ID，再开始正式采集。

1. 在 `logs/day-029.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 每批开始前锁定 task/spec 与数据 schema；每个样本生成唯一 ID，记录MuJoCo/真实设备来源、时间、操作者/上游、有效性和失败原因。
5. 每完成一小批立即跑质量检查和 checksum；原始数据只追加不静默改写，无效样本保留在 manifest 并标明排除原因。
6. 每条实际执行命令连同退出码追加到 `evidence/day-029/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：dataset/task-spec-pick-cube-v1.md
- 日志：`logs/day-029.md`
- 原始证据目录：`evidence/day-029/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：第三方按文档可判断成功/失败；协议含超时和异常规则；协议ID进入每个Episode。
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
> [[#D029 详细执行｜Pick-Cube 任务与成功标准|← Day 029]] · [[#导航|↑ 文档导航]] · [[#D031 详细执行｜相机与视觉采集参数冻结|Day 031 →]]

#### D030 详细执行｜确定性重置与位置随机化

> 计划日期：2026-09-22｜主动投入：2 小时｜第 5 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“sim/task_reset.py、tests/test_task_reset.py”，并满足：100次重置符合范围；同种子一致；失败Episode不污染下一次。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 029 的结果记录，确认其状态和交付物“dataset/task-spec-pick-cube-v1.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-030.md` 和 `evidence/day-030/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R16 MuJoCo 文档](https://mujoco.readthedocs.io/en/stable/)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 实现固定种子和训练范围内的位置随机化。 |
| 00:35–01:00 | 任务 2 | 区分训练位置、验证位置和不可达位置。 |
| 01:00–01:25 | 任务 3 | 测试重置碰撞、物体掉落和失败后的状态清理。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜实现固定种子和训练范围内的位置随机化。

1. 在 `logs/day-030.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把仿真器/适配器/外部服务访问、协议转换和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 先用 1 batch/少量 step 验证 shape、loss、保存和恢复，再冻结数据 revision、配置、seed、代码 commit 与算力预算后启动正式任务。
5. 观察首个训练/验证周期并主动验证一次 checkpoint 恢复；训练仍在运行时写 RUNNING，不把开始训练、下载权重或官方 demo 当成完成微调。
6. 每条实际执行命令连同退出码追加到 `evidence/day-030/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜区分训练位置、验证位置和不可达位置。

1. 在 `logs/day-030.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
4. 先用 1 batch/少量 step 验证 shape、loss、保存和恢复，再冻结数据 revision、配置、seed、代码 commit 与算力预算后启动正式任务。
5. 观察首个训练/验证周期并主动验证一次 checkpoint 恢复；训练仍在运行时写 RUNNING，不把开始训练、下载权重或官方 demo 当成完成微调。
6. 每条实际执行命令连同退出码追加到 `evidence/day-030/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜测试重置碰撞、物体掉落和失败后的状态清理。

1. 在 `logs/day-030.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-030/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

- 主交付物：sim/task_reset.py、tests/test_task_reset.py
- 日志：`logs/day-030.md`
- 原始证据目录：`evidence/day-030/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：100次重置符合范围；同种子一致；失败Episode不污染下一次。
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
> [[#D030 详细执行｜确定性重置与位置随机化|← Day 030]] · [[#导航|↑ 文档导航]] · [[#D032 详细执行｜5个 Pilot Episode|Day 032 →]]

#### D031 详细执行｜相机与视觉采集参数冻结

> 计划日期：2026-09-23｜主动投入：2 小时｜第 5 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“configs/cameras-v1.yaml、reports/camera-budget.md”，并满足：配置能在8GB内存环境读取；图像字段稳定；不为追求画质牺牲采集稳定性。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 030 的结果记录，确认其状态和交付物“sim/task_reset.py、tests/test_task_reset.py”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-031.md` 和 `evidence/day-031/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；[R16 MuJoCo 文档](https://mujoco.readthedocs.io/en/stable/)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 比较单相机/双相机和128/256分辨率的资源成本。 |
| 00:35–01:00 | 任务 2 | 冻结主相机、FPS、曝光等仿真假设和裁剪策略。 |
| 01:00–01:25 | 任务 3 | 确保云端CI可关闭渲染，本地采集保留视觉观测。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜比较单相机/双相机和128/256分辨率的资源成本。

1. 在 `logs/day-031.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-031/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜冻结主相机、FPS、曝光等仿真假设和裁剪策略。

1. 在 `logs/day-031.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 每条实际执行命令连同退出码追加到 `evidence/day-031/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜确保云端CI可关闭渲染，本地采集保留视觉观测。

1. 在 `logs/day-031.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 每批开始前锁定 task/spec 与数据 schema；每个样本生成唯一 ID，记录MuJoCo/真实设备来源、时间、操作者/上游、有效性和失败原因。
3. 每完成一小批立即跑质量检查和 checksum；原始数据只追加不静默改写，无效样本保留在 manifest 并标明排除原因。
4. 每条实际执行命令连同退出码追加到 `evidence/day-031/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

- 主交付物：configs/cameras-v1.yaml、reports/camera-budget.md
- 日志：`logs/day-031.md`
- 原始证据目录：`evidence/day-031/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：配置能在8GB内存环境读取；图像字段稳定；不为追求画质牺牲采集稳定性。
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
> [[#D031 详细执行｜相机与视觉采集参数冻结|← Day 031]] · [[#导航|↑ 文档导航]] · [[#D033 详细执行｜Pilot 复盘与采集工具修正|Day 033 →]]

#### D032 详细执行｜5个 Pilot Episode

> 计划日期：2026-09-24｜主动投入：2 小时｜第 5 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“dataset/pilot-5、reviews/pilot-5.md”，并满足：5个Episode均可回放；失败原因明确；协议未被事后改写。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 031 的结果记录，确认其状态和交付物“configs/cameras-v1.yaml、reports/camera-budget.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-032.md` 和 `evidence/day-032/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；[R43 LeRobot Imitation Learning in Simulation](https://huggingface.co/docs/lerobot/main/il_sim)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 按冻结协议采集5个示范，保留成功和至少1个失败。 |
| 00:35–01:00 | 任务 2 | 逐个回放并记录控制困难、无效动作和重置问题。 |
| 01:00–01:25 | 任务 3 | 只修改工具缺陷，不在看到结果后改变成功定义。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜按冻结协议采集5个示范，保留成功和至少1个失败。

1. 在 `logs/day-032.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 每批开始前锁定 task/spec 与数据 schema；每个样本生成唯一 ID，记录MuJoCo/真实设备来源、时间、操作者/上游、有效性和失败原因。
5. 每完成一小批立即跑质量检查和 checksum；原始数据只追加不静默改写，无效样本保留在 manifest 并标明排除原因。
6. 每条实际执行命令连同退出码追加到 `evidence/day-032/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜逐个回放并记录控制困难、无效动作和重置问题。

1. 在 `logs/day-032.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-032/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜只修改工具缺陷，不在看到结果后改变成功定义。

1. 在 `logs/day-032.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 每条实际执行命令连同退出码追加到 `evidence/day-032/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

- 主交付物：dataset/pilot-5、reviews/pilot-5.md
- 日志：`logs/day-032.md`
- 原始证据目录：`evidence/day-032/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：5个Episode均可回放；失败原因明确；协议未被事后改写。
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
> [[#D032 详细执行｜5个 Pilot Episode|← Day 032]] · [[#导航|↑ 文档导航]] · [[#D034 详细执行｜正式采集20个 Episode|Day 034 →]]

#### D033 详细执行｜Pilot 复盘与采集工具修正

> 计划日期：2026-09-25｜主动投入：2 小时｜第 5 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“reports/pilot-quality.csv、dataset/v0.1-manifest.json”，并满足：所有修改有测试；原Pilot校验和保留；下一批参数已冻结。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 032 的结果记录，确认其状态和交付物“dataset/pilot-5、reviews/pilot-5.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-033.md` 和 `evidence/day-033/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 统计Episode长度、动作范围、静止比例和同步异常。 |
| 00:35–01:00 | 任务 2 | 修正dead-man、灵敏度、重置或UI问题并增加回归测试。 |
| 01:00–01:25 | 任务 3 | 创建数据版本v0.1，不覆盖原Pilot。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜统计Episode长度、动作范围、静止比例和同步异常。

1. 在 `logs/day-033.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
4. 每批开始前锁定 task/spec 与数据 schema；每个样本生成唯一 ID，记录MuJoCo/真实设备来源、时间、操作者/上游、有效性和失败原因。
5. 每完成一小批立即跑质量检查和 checksum；原始数据只追加不静默改写，无效样本保留在 manifest 并标明排除原因。
6. 每条实际执行命令连同退出码追加到 `evidence/day-033/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜修正dead-man、灵敏度、重置或UI问题并增加回归测试。

1. 在 `logs/day-033.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把仿真器/适配器/外部服务访问、协议转换和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
5. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
6. 每条实际执行命令连同退出码追加到 `evidence/day-033/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜创建数据版本v0.1，不覆盖原Pilot。

1. 在 `logs/day-033.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把仿真器/适配器/外部服务访问、协议转换和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 每条实际执行命令连同退出码追加到 `evidence/day-033/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

- 主交付物：reports/pilot-quality.csv、dataset/v0.1-manifest.json
- 日志：`logs/day-033.md`
- 原始证据目录：`evidence/day-033/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：所有修改有测试；原Pilot校验和保留；下一批参数已冻结。
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
> [[#D033 详细执行｜Pilot 复盘与采集工具修正|← Day 033]] · [[#导航|↑ 文档导航]] · [[#D035 详细执行｜第一版 Dataset Card|Day 035 →]]

#### D034 详细执行｜正式采集20个 Episode

> 计划日期：2026-09-26｜主动投入：4 小时｜第 5 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“dataset/batch-a-20、checksums.sha256”，并满足：至少20个原始Episode完整落盘；每个有版本和结束原因；损坏为0或有明确隔离记录。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 033 的结果记录，确认其状态和交付物“reports/pilot-quality.csv、dataset/v0.1-manifest.json”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-034.md` 和 `evidence/day-034/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；[R43 LeRobot Imitation Learning in Simulation](https://huggingface.co/docs/lerobot/main/il_sim)；H05 数据与模型存储。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 4 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–01:05 | 任务 1 | 按相同协议分两批采集，每批后立即校验和备份。 |
| 01:05–02:00 | 任务 2 | 保留失败、超时和人工放弃Episode及原因。 |
| 02:00–02:55 | 任务 3 | 采集时记录手柄配置、模型commit、随机种子和环境版本。 |
| 02:55–03:40 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 03:40–04:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜按相同协议分两批采集，每批后立即校验和备份。

1. 在 `logs/day-034.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 每批开始前锁定 task/spec 与数据 schema；每个样本生成唯一 ID，记录MuJoCo/真实设备来源、时间、操作者/上游、有效性和失败原因。
5. 每完成一小批立即跑质量检查和 checksum；原始数据只追加不静默改写，无效样本保留在 manifest 并标明排除原因。
6. 每条实际执行命令连同退出码追加到 `evidence/day-034/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜保留失败、超时和人工放弃Episode及原因。

1. 在 `logs/day-034.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 每批开始前锁定 task/spec 与数据 schema；每个样本生成唯一 ID，记录MuJoCo/真实设备来源、时间、操作者/上游、有效性和失败原因。
3. 每完成一小批立即跑质量检查和 checksum；原始数据只追加不静默改写，无效样本保留在 manifest 并标明排除原因。
4. 每条实际执行命令连同退出码追加到 `evidence/day-034/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜采集时记录手柄配置、模型commit、随机种子和环境版本。

1. 在 `logs/day-034.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把仿真器/适配器/外部服务访问、协议转换和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 执行前记录当前版本、磁盘空间和回滚点；只按固定版本/commit操作，命令失败时保留完整 stderr，不连续尝试多个来源的安装方案。
5. 完成后从新 shell 或干净 build 目录复验；记录实际版本、产物 hash、退出码和启动现象，避免依赖当前终端的隐式环境变量。
6. 每条实际执行命令连同退出码追加到 `evidence/day-034/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：dataset/batch-a-20、checksums.sha256
- 日志：`logs/day-034.md`
- 原始证据目录：`evidence/day-034/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：至少20个原始Episode完整落盘；每个有版本和结束原因；损坏为0或有明确隔离记录。
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
> [[#D034 详细执行｜正式采集20个 Episode|← Day 034]] · [[#导航|↑ 文档导航]] · [[#D036 详细执行｜自动数据质量检查器|Day 036 →]]

#### D035 详细执行｜第一版 Dataset Card

> 计划日期：2026-09-27｜主动投入：2 小时｜第 5 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“DATASET_CARD-v0.1.md 与 split-manifest.json”，并满足：至少25个有效Episode进入清单；仿真来源醒目；统计可由脚本重算。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 034 的结果记录，确认其状态和交付物“dataset/batch-a-20、checksums.sha256”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-035.md` 和 `evidence/day-035/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R18 Hugging Face Dataset Cards](https://huggingface.co/docs/hub/en/datasets-cards)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 汇总Pilot和正式批次的来源、任务、字段、许可和限制。 |
| 00:35–01:00 | 任务 2 | 标明全部数据来自MuJoCo仿真与游戏手柄示教。 |
| 01:00–01:25 | 任务 3 | 列出失败分布、已知偏差和禁止推导的结论。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜汇总Pilot和正式批次的来源、任务、字段、许可和限制。

1. 在 `logs/day-035.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-035/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜标明全部数据来自MuJoCo仿真与游戏手柄示教。

1. 在 `logs/day-035.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-035/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜列出失败分布、已知偏差和禁止推导的结论。

1. 在 `logs/day-035.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 每条实际执行命令连同退出码追加到 `evidence/day-035/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

- 主交付物：DATASET_CARD-v0.1.md 与 split-manifest.json
- 日志：`logs/day-035.md`
- 原始证据目录：`evidence/day-035/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：至少25个有效Episode进入清单；仿真来源醒目；统计可由脚本重算。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 手柄无法识别、漂移或断连：立即回到键盘输入或固定动作测试；dead-man和动作归零仍是必验项，不用云服务器远程桌面替代本地交互采集。

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

### 第 6 周详细执行｜数据质量、扩充与版本发布

> [!info]- 当日导航
> [[#D035 详细执行｜第一版 Dataset Card|← Day 035]] · [[#导航|↑ 文档导航]] · [[#D037 详细执行｜状态、动作与视觉同步审计|Day 037 →]]

#### D036 详细执行｜自动数据质量检查器

> 计划日期：2026-09-28｜主动投入：2 小时｜第 6 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“tools/validate_dataset.py、tests/fixtures/bad-datasets”，并满足：不少于10类异常被稳定识别；正常数据零误报或有解释；CI运行检查器。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 035 的结果记录，确认其状态和交付物“DATASET_CARD-v0.1.md 与 split-manifest.json”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-036.md` 和 `evidence/day-036/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 检查schema、shape、dtype、时间戳单调、NaN、动作范围和文件完整性。 |
| 00:35–01:00 | 任务 2 | 输出机器可读JSON和人工可读Markdown。 |
| 01:00–01:25 | 任务 3 | 为每种损坏构造测试夹具。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜检查schema、shape、dtype、时间戳单调、NaN、动作范围和文件完整性。

1. 在 `logs/day-036.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 每条实际执行命令连同退出码追加到 `evidence/day-036/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜输出机器可读JSON和人工可读Markdown。

1. 在 `logs/day-036.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-036/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜为每种损坏构造测试夹具。

1. 在 `logs/day-036.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-036/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

- 主交付物：tools/validate_dataset.py、tests/fixtures/bad-datasets
- 日志：`logs/day-036.md`
- 原始证据目录：`evidence/day-036/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：不少于10类异常被稳定识别；正常数据零误报或有解释；CI运行检查器。
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
> [[#D036 详细执行｜自动数据质量检查器|← Day 036]] · [[#导航|↑ 文档导航]] · [[#D038 详细执行｜图像、视频与磁盘完整性|Day 038 →]]

#### D037 详细执行｜状态、动作与视觉同步审计

> 计划日期：2026-09-29｜主动投入：2 小时｜第 6 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“reports/sync-quality-v1.md、plots/”，并满足：同步阈值事先定义；异常Episode列表固定；原数据不被改写。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 036 的结果记录，确认其状态和交付物“tools/validate_dataset.py、tests/fixtures/bad-datasets”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-037.md` 和 `evidence/day-037/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 计算相邻时间间隔、动作滞后和图像帧间隔。 |
| 00:35–01:00 | 任务 2 | 可视化末端轨迹、夹爪和物体位置。 |
| 01:00–01:25 | 任务 3 | 识别并隔离同步异常，不做静默插值。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜计算相邻时间间隔、动作滞后和图像帧间隔。

1. 在 `logs/day-037.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-037/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜可视化末端轨迹、夹爪和物体位置。

1. 在 `logs/day-037.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-037/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜识别并隔离同步异常，不做静默插值。

1. 在 `logs/day-037.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-037/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：reports/sync-quality-v1.md、plots/
- 日志：`logs/day-037.md`
- 原始证据目录：`evidence/day-037/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：同步阈值事先定义；异常Episode列表固定；原数据不被改写。
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
> [[#D037 详细执行｜状态、动作与视觉同步审计|← Day 037]] · [[#导航|↑ 文档导航]] · [[#D039 详细执行｜成功/失败人工复核界面|Day 039 →]]

#### D038 详细执行｜图像、视频与磁盘完整性

> 计划日期：2026-09-30｜主动投入：2 小时｜第 6 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“tools/check_media.py、docs/storage-layout.md”，并满足：媒体异常可检测；磁盘不足安全停止；三个数据区权限和用途明确。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 037 的结果记录，确认其状态和交付物“reports/sync-quality-v1.md、plots/”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-038.md` 和 `evidence/day-038/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；H05 数据与模型存储。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 检查视频可解码、帧数、分辨率、编码和校验和。 |
| 00:35–01:00 | 任务 2 | 模拟截断视频、缺帧和空间不足。 |
| 01:00–01:25 | 任务 3 | 建立只追加原始区、工作区和公开脱敏区。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜检查视频可解码、帧数、分辨率、编码和校验和。

1. 在 `logs/day-038.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-038/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜模拟截断视频、缺帧和空间不足。

1. 在 `logs/day-038.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-038/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜建立只追加原始区、工作区和公开脱敏区。

1. 在 `logs/day-038.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把仿真器/适配器/外部服务访问、协议转换和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 发布/提交前逐条核对证据 ID、个人贡献、上游来源、simulation-only/真实设备边界和禁用表述；运行隐私检查并人工搜索联系方式、设备标识、密钥和公司材料。
5. 记录实际提交版本、目标链接和时间；外部是否回复、合并或录用是后续状态，不在当天伪造成果，也不高频自动化操作网站。
6. 每条实际执行命令连同退出码追加到 `evidence/day-038/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：tools/check_media.py、docs/storage-layout.md
- 日志：`logs/day-038.md`
- 原始证据目录：`evidence/day-038/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：媒体异常可检测；磁盘不足安全停止；三个数据区权限和用途明确。
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
> [[#D038 详细执行｜图像、视频与磁盘完整性|← Day 038]] · [[#导航|↑ 文档导航]] · [[#D040 详细执行｜去重、训练/验证/测试划分|Day 040 →]]

#### D039 详细执行｜成功/失败人工复核界面

> 计划日期：2026-10-01｜主动投入：2 小时｜第 6 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“tools/review_episodes.py、annotations-v1.csv”，并满足：全部候选Episode有人工标签；不一致样本有复核结论；标签修改可追溯。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 038 的结果记录，确认其状态和交付物“tools/check_media.py、docs/storage-layout.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-039.md` 和 `evidence/day-039/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R18 Hugging Face Dataset Cards](https://huggingface.co/docs/hub/en/datasets-cards)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 生成Episode缩略图、轨迹和关键时间点。 |
| 00:35–01:00 | 任务 2 | 提供成功、失败类型、是否保留和备注字段。 |
| 01:00–01:25 | 任务 3 | 双重检查自动成功判定与人工标签不一致样本。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜生成Episode缩略图、轨迹和关键时间点。

1. 在 `logs/day-039.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 每批开始前锁定 task/spec 与数据 schema；每个样本生成唯一 ID，记录MuJoCo/真实设备来源、时间、操作者/上游、有效性和失败原因。
3. 每完成一小批立即跑质量检查和 checksum；原始数据只追加不静默改写，无效样本保留在 manifest 并标明排除原因。
4. 每条实际执行命令连同退出码追加到 `evidence/day-039/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜提供成功、失败类型、是否保留和备注字段。

1. 在 `logs/day-039.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-039/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜双重检查自动成功判定与人工标签不一致样本。

1. 在 `logs/day-039.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 每批开始前锁定 task/spec 与数据 schema；每个样本生成唯一 ID，记录MuJoCo/真实设备来源、时间、操作者/上游、有效性和失败原因。
3. 每完成一小批立即跑质量检查和 checksum；原始数据只追加不静默改写，无效样本保留在 manifest 并标明排除原因。
4. 每条实际执行命令连同退出码追加到 `evidence/day-039/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：tools/review_episodes.py、annotations-v1.csv
- 日志：`logs/day-039.md`
- 原始证据目录：`evidence/day-039/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：全部候选Episode有人工标签；不一致样本有复核结论；标签修改可追溯。
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
> [[#D039 详细执行｜成功/失败人工复核界面|← Day 039]] · [[#导航|↑ 文档导航]] · [[#D041 详细执行｜补采与困难样本扩充|Day 041 →]]

#### D040 详细执行｜去重、训练/验证/测试划分

> 计划日期：2026-10-02｜主动投入：2 小时｜第 6 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“dataset/splits-v1.json、tools/make_splits.py”，并满足：划分可重复；不同split无重复ID；测试集在训练前冻结。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 039 的结果记录，确认其状态和交付物“tools/review_episodes.py、annotations-v1.csv”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-040.md` 和 `evidence/day-040/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R18 Hugging Face Dataset Cards](https://huggingface.co/docs/hub/en/datasets-cards)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 基于种子、初始位姿和轨迹特征检查重复。 |
| 00:35–01:00 | 任务 2 | 按初始位置而非随机行划分，避免相近Episode泄漏。 |
| 01:00–01:25 | 任务 3 | 冻结split manifest和生成脚本。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜基于种子、初始位姿和轨迹特征检查重复。

1. 在 `logs/day-040.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-040/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜按初始位置而非随机行划分，避免相近Episode泄漏。

1. 在 `logs/day-040.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 每批开始前锁定 task/spec 与数据 schema；每个样本生成唯一 ID，记录MuJoCo/真实设备来源、时间、操作者/上游、有效性和失败原因。
3. 每完成一小批立即跑质量检查和 checksum；原始数据只追加不静默改写，无效样本保留在 manifest 并标明排除原因。
4. 每条实际执行命令连同退出码追加到 `evidence/day-040/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜冻结split manifest和生成脚本。

1. 在 `logs/day-040.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-040/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

- 主交付物：dataset/splits-v1.json、tools/make_splits.py
- 日志：`logs/day-040.md`
- 原始证据目录：`evidence/day-040/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：划分可重复；不同split无重复ID；测试集在训练前冻结。
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
> [[#D040 详细执行｜去重、训练/验证/测试划分|← Day 040]] · [[#导航|↑ 文档导航]] · [[#D042 详细执行｜数据集 v1.0 发布门|Day 042 →]]

#### D041 详细执行｜补采与困难样本扩充

> 计划日期：2026-10-03｜主动投入：4 小时｜第 6 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“dataset/batch-b-25、reports/collection-v2.md”，并满足：累计至少50个有效Episode；困难样本有明确选择依据；所有原始批次有校验和。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 040 的结果记录，确认其状态和交付物“dataset/splits-v1.json、tools/make_splits.py”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-041.md` 和 `evidence/day-041/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；[R43 LeRobot Imitation Learning in Simulation](https://huggingface.co/docs/lerobot/main/il_sim)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 4 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–01:05 | 任务 1 | 根据失败分布选择困难起点和操作路径。 |
| 01:05–02:00 | 任务 2 | 再采集至少25个候选Episode并逐批校验。 |
| 02:00–02:55 | 任务 3 | 保留成功率变化但不把采集成功率当策略成功率。 |
| 02:55–03:40 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 03:40–04:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜根据失败分布选择困难起点和操作路径。

1. 在 `logs/day-041.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-041/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜再采集至少25个候选Episode并逐批校验。

1. 在 `logs/day-041.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 每批开始前锁定 task/spec 与数据 schema；每个样本生成唯一 ID，记录MuJoCo/真实设备来源、时间、操作者/上游、有效性和失败原因。
3. 每完成一小批立即跑质量检查和 checksum；原始数据只追加不静默改写，无效样本保留在 manifest 并标明排除原因。
4. 每条实际执行命令连同退出码追加到 `evidence/day-041/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜保留成功率变化但不把采集成功率当策略成功率。

1. 在 `logs/day-041.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 每批开始前锁定 task/spec 与数据 schema；每个样本生成唯一 ID，记录MuJoCo/真实设备来源、时间、操作者/上游、有效性和失败原因。
5. 每完成一小批立即跑质量检查和 checksum；原始数据只追加不静默改写，无效样本保留在 manifest 并标明排除原因。
6. 每条实际执行命令连同退出码追加到 `evidence/day-041/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

- 主交付物：dataset/batch-b-25、reports/collection-v2.md
- 日志：`logs/day-041.md`
- 原始证据目录：`evidence/day-041/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：累计至少50个有效Episode；困难样本有明确选择依据；所有原始批次有校验和。
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
> [[#D041 详细执行｜补采与困难样本扩充|← Day 041]] · [[#导航|↑ 文档导航]] · [[#D043 详细执行｜ROS2 Jazzy 与环境隔离|Day 043 →]]

#### D042 详细执行｜数据集 v1.0 发布门

> 计划日期：2026-10-04｜主动投入：2 小时｜第 6 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“releases/dataset-v1.0.md、DATASET_CARD.md”，并满足：所有检查通过；统计可重算；没有自动上传私人仓库或原始身份数据。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 041 的结果记录，确认其状态和交付物“dataset/batch-b-25、reports/collection-v2.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-042.md` 和 `evidence/day-042/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R18 Hugging Face Dataset Cards](https://huggingface.co/docs/hub/en/datasets-cards)；[A02 Hugging Face Hub 账号](https://huggingface.co/)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 重跑全部质量、同步、媒体和split检查。 |
| 00:35–01:00 | 任务 2 | 定稿Dataset Card、统计表、许可和simulation-only声明。 |
| 01:00–01:25 | 任务 3 | 生成私有v1.0 tag；公开上传仍需单独隐私审查。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜重跑全部质量、同步、媒体和split检查。

1. 在 `logs/day-042.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-042/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜定稿Dataset Card、统计表、许可和simulation-only声明。

1. 在 `logs/day-042.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-042/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜生成私有v1.0 tag；公开上传仍需单独隐私审查。

1. 在 `logs/day-042.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 发布/提交前逐条核对证据 ID、个人贡献、上游来源、simulation-only/真实设备边界和禁用表述；运行隐私检查并人工搜索联系方式、设备标识、密钥和公司材料。
3. 记录实际提交版本、目标链接和时间；外部是否回复、合并或录用是后续状态，不在当天伪造成果，也不高频自动化操作网站。
4. 每条实际执行命令连同退出码追加到 `evidence/day-042/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

- 主交付物：releases/dataset-v1.0.md、DATASET_CARD.md
- 日志：`logs/day-042.md`
- 原始证据目录：`evidence/day-042/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：所有检查通过；统计可重算；没有自动上传私人仓库或原始身份数据。
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

### 第 7 周详细执行｜ROS2 与仿真系统集成

> [!info]- 当日导航
> [[#D042 详细执行｜数据集 v1.0 发布门|← Day 042]] · [[#导航|↑ 文档导航]] · [[#D044 详细执行｜EdgeVLA 消息、Service 与 Action|Day 044 →]]

#### D043 详细执行｜ROS2 Jazzy 与环境隔离

> 计划日期：2026-10-05｜主动投入：2 小时｜第 7 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“docs/ros2-environment.md、ros2_ws”，并满足：新shell可启动ROS2；两个Python环境边界清晰；基础通信通过。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 042 的结果记录，确认其状态和交付物“releases/dataset-v1.0.md、DATASET_CARD.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-043.md` 和 `evidence/day-043/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R12 ROS 2 官方文档](https://docs.ros.org/en/jazzy/index.html)；[R29 ROS 2 Jazzy Python 环境指南](https://docs.ros.org/en/jazzy/How-To-Guides/Using-Python-Packages.html)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 在Ubuntu 24.04安装ROS2 Jazzy并记录apt版本。 |
| 00:35–01:00 | 任务 2 | 建立独立ros2_ws，不在LeRobot uv环境直接混用二进制rclpy。 |
| 01:00–01:25 | 任务 3 | 验证talker/listener和跨进程通信。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜在Ubuntu 24.04安装ROS2 Jazzy并记录apt版本。

1. 在 `logs/day-043.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 执行前记录当前版本、磁盘空间和回滚点；只按固定版本/commit操作，命令失败时保留完整 stderr，不连续尝试多个来源的安装方案。
3. 完成后从新 shell 或干净 build 目录复验；记录实际版本、产物 hash、退出码和启动现象，避免依赖当前终端的隐式环境变量。
4. 每条实际执行命令连同退出码追加到 `evidence/day-043/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜建立独立ros2_ws，不在LeRobot uv环境直接混用二进制rclpy。

1. 在 `logs/day-043.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把仿真器/适配器/外部服务访问、协议转换和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 执行前记录当前版本、磁盘空间和回滚点；只按固定版本/commit操作，命令失败时保留完整 stderr，不连续尝试多个来源的安装方案。
5. 完成后从新 shell 或干净 build 目录复验；记录实际版本、产物 hash、退出码和启动现象，避免依赖当前终端的隐式环境变量。
6. 每条实际执行命令连同退出码追加到 `evidence/day-043/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜验证talker/listener和跨进程通信。

1. 在 `logs/day-043.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-043/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

- 主交付物：docs/ros2-environment.md、ros2_ws
- 日志：`logs/day-043.md`
- 原始证据目录：`evidence/day-043/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：新shell可启动ROS2；两个Python环境边界清晰；基础通信通过。
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
> [[#D043 详细执行｜ROS2 Jazzy 与环境隔离|← Day 043]] · [[#导航|↑ 文档导航]] · [[#D045 详细执行｜Franka URDF、tf2 与坐标系|Day 045 →]]

#### D044 详细执行｜EdgeVLA 消息、Service 与 Action

> 计划日期：2026-10-06｜主动投入：2 小时｜第 7 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“ros2_ws/src/edgevla_interfaces”，并满足：接口可构建；rosidl检查通过；取消和超时有测试。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 043 的结果记录，确认其状态和交付物“docs/ros2-environment.md、ros2_ws”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-044.md` 和 `evidence/day-044/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R12 ROS 2 官方文档](https://docs.ros.org/en/jazzy/index.html)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 定义RobotState、TeleopCommand、EpisodeEvent和Reset服务。 |
| 00:35–01:00 | 任务 2 | 为长操作使用Action并设计取消语义。 |
| 01:00–01:25 | 任务 3 | 测试字段版本、超时和无订阅者情况。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜定义RobotState、TeleopCommand、EpisodeEvent和Reset服务。

1. 在 `logs/day-044.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 每批开始前锁定 task/spec 与数据 schema；每个样本生成唯一 ID，记录MuJoCo/真实设备来源、时间、操作者/上游、有效性和失败原因。
5. 每完成一小批立即跑质量检查和 checksum；原始数据只追加不静默改写，无效样本保留在 manifest 并标明排除原因。
6. 每条实际执行命令连同退出码追加到 `evidence/day-044/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜为长操作使用Action并设计取消语义。

1. 在 `logs/day-044.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 每条实际执行命令连同退出码追加到 `evidence/day-044/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜测试字段版本、超时和无订阅者情况。

1. 在 `logs/day-044.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-044/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：ros2_ws/src/edgevla_interfaces
- 日志：`logs/day-044.md`
- 原始证据目录：`evidence/day-044/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：接口可构建；rosidl检查通过；取消和超时有测试。
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
> [[#D044 详细执行｜EdgeVLA 消息、Service 与 Action|← Day 044]] · [[#导航|↑ 文档导航]] · [[#D046 详细执行｜MuJoCo—ROS2 进程桥|Day 046 →]]

#### D045 详细执行｜Franka URDF、tf2 与坐标系

> 计划日期：2026-10-07｜主动投入：2 小时｜第 7 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“ros2_ws/src/edgevla_description、tf报告”，并满足：tf树连通；末端位姿与MuJoCo在容差内一致；坐标图可复核。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 044 的结果记录，确认其状态和交付物“ros2_ws/src/edgevla_interfaces”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-045.md` 和 `evidence/day-045/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R12 ROS 2 官方文档](https://docs.ros.org/en/jazzy/index.html)；[R13 MoveIt 2 Jazzy 入门](https://moveit.picknik.ai/main/doc/tutorials/getting_started/getting_started.html)；[R44 MuJoCo Menagerie](https://github.com/google-deepmind/mujoco_menagerie)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 加载Franka描述并定义world、base、ee和camera坐标。 |
| 00:35–01:00 | 任务 2 | 发布静态/动态tf并与MuJoCo坐标约定对照。 |
| 01:00–01:25 | 任务 3 | 用脚本检查树断裂、重复frame和异常跳变。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜加载Franka描述并定义world、base、ee和camera坐标。

1. 在 `logs/day-045.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 每条实际执行命令连同退出码追加到 `evidence/day-045/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜发布静态/动态tf并与MuJoCo坐标约定对照。

1. 在 `logs/day-045.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 发布/提交前逐条核对证据 ID、个人贡献、上游来源、simulation-only/真实设备边界和禁用表述；运行隐私检查并人工搜索联系方式、设备标识、密钥和公司材料。
3. 记录实际提交版本、目标链接和时间；外部是否回复、合并或录用是后续状态，不在当天伪造成果，也不高频自动化操作网站。
4. 每条实际执行命令连同退出码追加到 `evidence/day-045/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜用脚本检查树断裂、重复frame和异常跳变。

1. 在 `logs/day-045.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-045/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

- 主交付物：ros2_ws/src/edgevla_description、tf报告
- 日志：`logs/day-045.md`
- 原始证据目录：`evidence/day-045/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：tf树连通；末端位姿与MuJoCo在容差内一致；坐标图可复核。
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
> [[#D045 详细执行｜Franka URDF、tf2 与坐标系|← Day 045]] · [[#导航|↑ 文档导航]] · [[#D047 详细执行｜rosbag2/MCAP 录制与回放|Day 047 →]]

#### D046 详细执行｜MuJoCo—ROS2 进程桥

> 计划日期：2026-10-08｜主动投入：2 小时｜第 7 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“bridge/mujoco_ros2_bridge、集成测试”，并满足：双进程通信稳定；重连不跳变；断连安全停止。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 045 的结果记录，确认其状态和交付物“ros2_ws/src/edgevla_description、tf报告”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-046.md` 和 `evidence/day-046/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R12 ROS 2 官方文档](https://docs.ros.org/en/jazzy/index.html)；[R29 ROS 2 Jazzy Python 环境指南](https://docs.ros.org/en/jazzy/How-To-Guides/Using-Python-Packages.html)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 选择socket/ZMQ或ROS消息桥接LeRobot环境与ROS2环境。 |
| 00:35–01:00 | 任务 2 | 发布状态、图像与诊断，接收限幅后的动作。 |
| 01:00–01:25 | 任务 3 | 断开任一进程时进入暂停并清空动作队列。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜选择socket/ZMQ或ROS消息桥接LeRobot环境与ROS2环境。

1. 在 `logs/day-046.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 执行前记录当前版本、磁盘空间和回滚点；只按固定版本/commit操作，命令失败时保留完整 stderr，不连续尝试多个来源的安装方案。
3. 完成后从新 shell 或干净 build 目录复验；记录实际版本、产物 hash、退出码和启动现象，避免依赖当前终端的隐式环境变量。
4. 每条实际执行命令连同退出码追加到 `evidence/day-046/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜发布状态、图像与诊断，接收限幅后的动作。

1. 在 `logs/day-046.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 发布/提交前逐条核对证据 ID、个人贡献、上游来源、simulation-only/真实设备边界和禁用表述；运行隐私检查并人工搜索联系方式、设备标识、密钥和公司材料。
3. 记录实际提交版本、目标链接和时间；外部是否回复、合并或录用是后续状态，不在当天伪造成果，也不高频自动化操作网站。
4. 每条实际执行命令连同退出码追加到 `evidence/day-046/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜断开任一进程时进入暂停并清空动作队列。

1. 在 `logs/day-046.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-046/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

- 主交付物：bridge/mujoco_ros2_bridge、集成测试
- 日志：`logs/day-046.md`
- 原始证据目录：`evidence/day-046/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：双进程通信稳定；重连不跳变；断连安全停止。
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
> [[#D046 详细执行｜MuJoCo—ROS2 进程桥|← Day 046]] · [[#导航|↑ 文档导航]] · [[#D048 详细执行｜Lifecycle、参数与故障诊断|Day 048 →]]

#### D047 详细执行｜rosbag2/MCAP 录制与回放

> 计划日期：2026-10-09｜主动投入：2 小时｜第 7 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“bags/sample.mcap、tools/bag_dataset_compare.py”，并满足：bag可回放；关键字段与Dataset一致；异常bag有报告。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 046 的结果记录，确认其状态和交付物“bridge/mujoco_ros2_bridge、集成测试”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-047.md` 和 `evidence/day-047/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R12 ROS 2 官方文档](https://docs.ros.org/en/jazzy/index.html)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 录制状态、动作、图像、tf和Episode事件。 |
| 00:35–01:00 | 任务 2 | 从MCAP重建时间线并与LeRobotDataset Episode对齐。 |
| 01:00–01:25 | 任务 3 | 测试缺topic、时间跳变和不完整bag。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜录制状态、动作、图像、tf和Episode事件。

1. 在 `logs/day-047.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 每批开始前锁定 task/spec 与数据 schema；每个样本生成唯一 ID，记录MuJoCo/真实设备来源、时间、操作者/上游、有效性和失败原因。
3. 每完成一小批立即跑质量检查和 checksum；原始数据只追加不静默改写，无效样本保留在 manifest 并标明排除原因。
4. 每条实际执行命令连同退出码追加到 `evidence/day-047/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜从MCAP重建时间线并与LeRobotDataset Episode对齐。

1. 在 `logs/day-047.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 执行前记录当前版本、磁盘空间和回滚点；只按固定版本/commit操作，命令失败时保留完整 stderr，不连续尝试多个来源的安装方案。
3. 完成后从新 shell 或干净 build 目录复验；记录实际版本、产物 hash、退出码和启动现象，避免依赖当前终端的隐式环境变量。
4. 每批开始前锁定 task/spec 与数据 schema；每个样本生成唯一 ID，记录MuJoCo/真实设备来源、时间、操作者/上游、有效性和失败原因。
5. 每完成一小批立即跑质量检查和 checksum；原始数据只追加不静默改写，无效样本保留在 manifest 并标明排除原因。
6. 每条实际执行命令连同退出码追加到 `evidence/day-047/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜测试缺topic、时间跳变和不完整bag。

1. 在 `logs/day-047.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-047/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `python -m compileall -q src tools tests`
- `python -m pytest -q`
- `colcon build --symlink-install`
- `colcon test`
- `colcon test-result --verbose`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：bags/sample.mcap、tools/bag_dataset_compare.py
- 日志：`logs/day-047.md`
- 原始证据目录：`evidence/day-047/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：bag可回放；关键字段与Dataset一致；异常bag有报告。
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
> [[#D047 详细执行｜rosbag2/MCAP 录制与回放|← Day 047]] · [[#导航|↑ 文档导航]] · [[#D049 详细执行｜ROS2 仿真集成阶段门|Day 049 →]]

#### D048 详细执行｜Lifecycle、参数与故障诊断

> 计划日期：2026-10-10｜主动投入：4 小时｜第 7 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“ros2_ws/src/edgevla_bridge、diagnostics/”，并满足：生命周期转换正确；故障可观测；动作过期不执行。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 047 的结果记录，确认其状态和交付物“bags/sample.mcap、tools/bag_dataset_compare.py”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-048.md` 和 `evidence/day-048/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R12 ROS 2 官方文档](https://docs.ros.org/en/jazzy/index.html)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 4 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–01:05 | 任务 1 | 将桥接节点实现为Lifecycle Node。 |
| 01:05–02:00 | 任务 2 | 暴露控制频率、工作空间、dead-man和超时参数。 |
| 02:00–02:55 | 任务 3 | 注入仿真暂停、消息积压、相机掉帧和动作过期。 |
| 02:55–03:40 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 03:40–04:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜将桥接节点实现为Lifecycle Node。

1. 在 `logs/day-048.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把仿真器/适配器/外部服务访问、协议转换和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 每条实际执行命令连同退出码追加到 `evidence/day-048/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜暴露控制频率、工作空间、dead-man和超时参数。

1. 在 `logs/day-048.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-048/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜注入仿真暂停、消息积压、相机掉帧和动作过期。

1. 在 `logs/day-048.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-048/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

- 主交付物：ros2_ws/src/edgevla_bridge、diagnostics/
- 日志：`logs/day-048.md`
- 原始证据目录：`evidence/day-048/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：生命周期转换正确；故障可观测；动作过期不执行。
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
> [[#D048 详细执行｜Lifecycle、参数与故障诊断|← Day 048]] · [[#导航|↑ 文档导航]] · [[#D050 详细执行｜ACT 数据兼容与算力预算|Day 050 →]]

#### D049 详细执行｜ROS2 仿真集成阶段门

> 计划日期：2026-10-11｜主动投入：2 小时｜第 7 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“releases/ros2-sim-v0.1.md、launch脚本”，并满足：一条命令启动；录制和回放通过；环境边界与真实性声明完整。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 048 的结果记录，确认其状态和交付物“ros2_ws/src/edgevla_bridge、diagnostics/”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-049.md` 和 `evidence/day-049/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R12 ROS 2 官方文档](https://docs.ros.org/en/jazzy/index.html)；[R20 GitHub Actions 文档](https://docs.github.com/en/actions)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 用launch文件启动MuJoCo、桥接、tf、诊断和录包。 |
| 00:35–01:00 | 任务 2 | 完成一次手柄操作与数据/MCAP双记录演示。 |
| 01:00–01:25 | 任务 3 | 记录ROS2是仿真系统集成证据，不是真机驱动经验。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜用launch文件启动MuJoCo、桥接、tf、诊断和录包。

1. 在 `logs/day-049.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 执行前记录当前版本、磁盘空间和回滚点；只按固定版本/commit操作，命令失败时保留完整 stderr，不连续尝试多个来源的安装方案。
3. 完成后从新 shell 或干净 build 目录复验；记录实际版本、产物 hash、退出码和启动现象，避免依赖当前终端的隐式环境变量。
4. 每条实际执行命令连同退出码追加到 `evidence/day-049/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜完成一次手柄操作与数据/MCAP双记录演示。

1. 在 `logs/day-049.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-049/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜记录ROS2是仿真系统集成证据，不是真机驱动经验。

1. 在 `logs/day-049.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-049/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `python -m compileall -q src tools tests`
- `python -m pytest -q`
- `colcon build --symlink-install`
- `colcon test`
- `colcon test-result --verbose`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：releases/ros2-sim-v0.1.md、launch脚本
- 日志：`logs/day-049.md`
- 原始证据目录：`evidence/day-049/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：一条命令启动；录制和回放通过；环境边界与真实性声明完整。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 真实机械臂、GELLO或SO-101当前均为可选扩展：没有授权、SDK、物理急停和安全区域时只执行MuJoCo仿真，不得发送真实动作或声称真机迁移。

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

### 第 8 周详细执行｜ACT 模仿学习基线

> [!info]- 当日导航
> [[#D049 详细执行｜ROS2 仿真集成阶段门|← Day 049]] · [[#导航|↑ 文档导航]] · [[#D051 详细执行｜ACT 配置与数据审查|Day 051 →]]

#### D050 详细执行｜ACT 数据兼容与算力预算

> 计划日期：2026-10-12｜主动投入：2 小时｜第 8 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“configs/act-budget-v1.md、compatibility-report.md”，并满足：schema兼容；预算有硬上限；不在4核8GB云服务器启动正式训练。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 049 的结果记录，确认其状态和交付物“releases/ros2-sim-v0.1.md、launch脚本”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-050.md` 和 `evidence/day-050/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R06 LeRobot ACT 策略文档](https://huggingface.co/docs/lerobot/v0.6.0/en/act)；[R09 LeRobot 算力指南](https://huggingface.co/docs/lerobot/v0.6.0/en/hardware_guide)；[R28 Hugging Face Jobs GPU 价格](https://huggingface.co/docs/hub/jobs-pricing)；H04 按需GPU。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 核对LeRobot ACT输入输出与自采feature/action schema。 |
| 00:35–01:00 | 任务 2 | 计算图像、batch、steps和checkpoint的预计磁盘/显存。 |
| 01:00–01:25 | 任务 3 | 确定本地CPU只做smoke，正式训练使用按需GPU并设置费用/时间上限。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜核对LeRobot ACT输入输出与自采feature/action schema。

1. 在 `logs/day-050.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 只读列出的官方/一手资料，先写出要回答的 3～5 个问题；阅读时逐条记录“结论、出处、适用版本、仍不确定项”，禁止只收藏链接。
3. 合上资料后用自己的话重写结论，并用一个反例或边界条件检验理解；无法解释的术语放入问题清单，不用“熟悉”代替掌握。
4. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
5. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
6. 每条实际执行命令连同退出码追加到 `evidence/day-050/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜计算图像、batch、steps和checkpoint的预计磁盘/显存。

1. 在 `logs/day-050.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先用 1 batch/少量 step 验证 shape、loss、保存和恢复，再冻结数据 revision、配置、seed、代码 commit 与算力预算后启动正式任务。
3. 观察首个训练/验证周期并主动验证一次 checkpoint 恢复；训练仍在运行时写 RUNNING，不把开始训练、下载权重或官方 demo 当成完成微调。
4. 每条实际执行命令连同退出码追加到 `evidence/day-050/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜确定本地CPU只做smoke，正式训练使用按需GPU并设置费用/时间上限。

1. 在 `logs/day-050.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先用 1 batch/少量 step 验证 shape、loss、保存和恢复，再冻结数据 revision、配置、seed、代码 commit 与算力预算后启动正式任务。
3. 观察首个训练/验证周期并主动验证一次 checkpoint 恢复；训练仍在运行时写 RUNNING，不把开始训练、下载权重或官方 demo 当成完成微调。
4. 每条实际执行命令连同退出码追加到 `evidence/day-050/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

- 主交付物：configs/act-budget-v1.md、compatibility-report.md
- 日志：`logs/day-050.md`
- 原始证据目录：`evidence/day-050/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：schema兼容；预算有硬上限；不在4核8GB云服务器启动正式训练。
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
> [[#D050 详细执行｜ACT 数据兼容与算力预算|← Day 050]] · [[#导航|↑ 文档导航]] · [[#D052 详细执行｜5个Episode过拟合诊断|Day 052 →]]

#### D051 详细执行｜ACT 配置与数据审查

> 计划日期：2026-10-13｜主动投入：2 小时｜第 8 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“configs/act-pick-cube-v1.yaml、data-audit.md”，并满足：配置可序列化；batch shape通过；测试split未用于调参。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 050 的结果记录，确认其状态和交付物“configs/act-budget-v1.md、compatibility-report.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-051.md` 和 `evidence/day-051/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R06 LeRobot ACT 策略文档](https://huggingface.co/docs/lerobot/v0.6.0/en/act)；[R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 固定dataset版本、split、seed、图像和action chunk配置。 |
| 00:35–01:00 | 任务 2 | 抽样检查训练/验证batch和归一化统计。 |
| 01:00–01:25 | 任务 3 | 将最终测试集权限设为训练阶段只读。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜固定dataset版本、split、seed、图像和action chunk配置。

1. 在 `logs/day-051.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把仿真器/适配器/外部服务访问、协议转换和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 每条实际执行命令连同退出码追加到 `evidence/day-051/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜抽样检查训练/验证batch和归一化统计。

1. 在 `logs/day-051.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
4. 先用 1 batch/少量 step 验证 shape、loss、保存和恢复，再冻结数据 revision、配置、seed、代码 commit 与算力预算后启动正式任务。
5. 观察首个训练/验证周期并主动验证一次 checkpoint 恢复；训练仍在运行时写 RUNNING，不把开始训练、下载权重或官方 demo 当成完成微调。
6. 每条实际执行命令连同退出码追加到 `evidence/day-051/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜将最终测试集权限设为训练阶段只读。

1. 在 `logs/day-051.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
4. 先用 1 batch/少量 step 验证 shape、loss、保存和恢复，再冻结数据 revision、配置、seed、代码 commit 与算力预算后启动正式任务。
5. 观察首个训练/验证周期并主动验证一次 checkpoint 恢复；训练仍在运行时写 RUNNING，不把开始训练、下载权重或官方 demo 当成完成微调。
6. 每条实际执行命令连同退出码追加到 `evidence/day-051/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

- 主交付物：configs/act-pick-cube-v1.yaml、data-audit.md
- 日志：`logs/day-051.md`
- 原始证据目录：`evidence/day-051/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：配置可序列化；batch shape通过；测试split未用于调参。
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
> [[#D051 详细执行｜ACT 配置与数据审查|← Day 051]] · [[#导航|↑ 文档导航]] · [[#D053 详细执行｜GPU 冒烟与训练任务封装|Day 053 →]]

#### D052 详细执行｜5个Episode过拟合诊断

> 计划日期：2026-10-14｜主动投入：2 小时｜第 8 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“experiments/act-overfit-5”，并满足：可在小样本上显著拟合或形成明确阻塞报告；checkpoint可加载；命令可复现。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 051 的结果记录，确认其状态和交付物“configs/act-pick-cube-v1.yaml、data-audit.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-052.md` 和 `evidence/day-052/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R06 LeRobot ACT 策略文档](https://huggingface.co/docs/lerobot/v0.6.0/en/act)；[R14 PyTorch Tutorials](https://docs.pytorch.org/tutorials/)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 只用5个训练Episode运行短训练。 |
| 00:35–01:00 | 任务 2 | 验证loss下降、checkpoint保存和单样本推理。 |
| 01:00–01:25 | 任务 3 | 若不能过拟合先修数据/模型链路，不扩大训练。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜只用5个训练Episode运行短训练。

1. 在 `logs/day-052.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
4. 每批开始前锁定 task/spec 与数据 schema；每个样本生成唯一 ID，记录MuJoCo/真实设备来源、时间、操作者/上游、有效性和失败原因。
5. 每完成一小批立即跑质量检查和 checksum；原始数据只追加不静默改写，无效样本保留在 manifest 并标明排除原因。
6. 每条实际执行命令连同退出码追加到 `evidence/day-052/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜验证loss下降、checkpoint保存和单样本推理。

1. 在 `logs/day-052.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
4. 每批开始前锁定 task/spec 与数据 schema；每个样本生成唯一 ID，记录MuJoCo/真实设备来源、时间、操作者/上游、有效性和失败原因。
5. 每完成一小批立即跑质量检查和 checksum；原始数据只追加不静默改写，无效样本保留在 manifest 并标明排除原因。
6. 每条实际执行命令连同退出码追加到 `evidence/day-052/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜若不能过拟合先修数据/模型链路，不扩大训练。

1. 在 `logs/day-052.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先用 1 batch/少量 step 验证 shape、loss、保存和恢复，再冻结数据 revision、配置、seed、代码 commit 与算力预算后启动正式任务。
3. 观察首个训练/验证周期并主动验证一次 checkpoint 恢复；训练仍在运行时写 RUNNING，不把开始训练、下载权重或官方 demo 当成完成微调。
4. 每条实际执行命令连同退出码追加到 `evidence/day-052/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

- 主交付物：experiments/act-overfit-5
- 日志：`logs/day-052.md`
- 原始证据目录：`evidence/day-052/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：可在小样本上显著拟合或形成明确阻塞报告；checkpoint可加载；命令可复现。
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
> [[#D052 详细执行｜5个Episode过拟合诊断|← Day 052]] · [[#导航|↑ 文档导航]] · [[#D054 详细执行｜ACT v1 正式训练|Day 054 →]]

#### D053 详细执行｜GPU 冒烟与训练任务封装

> 计划日期：2026-10-15｜主动投入：2 小时｜第 8 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“experiments/act-gpu-smoke、scripts/run_gpu_job.sh”，并满足：smoke通过；资源数据完整；超过预算/时间会自动终止。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 052 的结果记录，确认其状态和交付物“experiments/act-overfit-5”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-053.md` 和 `evidence/day-053/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R06 LeRobot ACT 策略文档](https://huggingface.co/docs/lerobot/v0.6.0/en/act)；[R09 LeRobot 算力指南](https://huggingface.co/docs/lerobot/v0.6.0/en/hardware_guide)；[R28 Hugging Face Jobs GPU 价格](https://huggingface.co/docs/hub/jobs-pricing)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 在按需GPU运行小步数smoke，记录驱动、CUDA、PyTorch和显存峰值。 |
| 00:35–01:00 | 任务 2 | 封装启动、日志、超时、预算和自动停止。 |
| 01:00–01:25 | 任务 3 | 验证任务失败不会丢失配置和最后checkpoint。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜在按需GPU运行小步数smoke，记录驱动、CUDA、PyTorch和显存峰值。

1. 在 `logs/day-053.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-053/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜封装启动、日志、超时、预算和自动停止。

1. 在 `logs/day-053.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把仿真器/适配器/外部服务访问、协议转换和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 执行前记录当前版本、磁盘空间和回滚点；只按固定版本/commit操作，命令失败时保留完整 stderr，不连续尝试多个来源的安装方案。
5. 完成后从新 shell 或干净 build 目录复验；记录实际版本、产物 hash、退出码和启动现象，避免依赖当前终端的隐式环境变量。
6. 每条实际执行命令连同退出码追加到 `evidence/day-053/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜验证任务失败不会丢失配置和最后checkpoint。

1. 在 `logs/day-053.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把仿真器/适配器/外部服务访问、协议转换和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
5. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
6. 每条实际执行命令连同退出码追加到 `evidence/day-053/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

- 主交付物：experiments/act-gpu-smoke、scripts/run_gpu_job.sh
- 日志：`logs/day-053.md`
- 原始证据目录：`evidence/day-053/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：smoke通过；资源数据完整；超过预算/时间会自动终止。
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
> [[#D053 详细执行｜GPU 冒烟与训练任务封装|← Day 053]] · [[#导航|↑ 文档导航]] · [[#D055 详细执行｜恢复训练与Checkpoint治理|Day 055 →]]

#### D054 详细执行｜ACT v1 正式训练

> 计划日期：2026-10-16｜主动投入：2 小时｜第 8 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“experiments/act-v1”，并满足：任务启动并产生有效checkpoint；元数据齐全；无须在2小时人工时间盒内强行训练结束。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 053 的结果记录，确认其状态和交付物“experiments/act-gpu-smoke、scripts/run_gpu_job.sh”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-054.md` 和 `evidence/day-054/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R06 LeRobot ACT 策略文档](https://huggingface.co/docs/lerobot/v0.6.0/en/act)；[R17 Weights & Biases 文档](https://docs.wandb.ai/)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 使用冻结数据与配置启动训练。 |
| 00:35–01:00 | 任务 2 | 将训练墙钟与人工工作分开，人工只检查日志和异常。 |
| 01:00–01:25 | 任务 3 | 保存配置、git commit、数据revision、曲线和checkpoint索引。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜使用冻结数据与配置启动训练。

1. 在 `logs/day-054.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把仿真器/适配器/外部服务访问、协议转换和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 执行前记录当前版本、磁盘空间和回滚点；只按固定版本/commit操作，命令失败时保留完整 stderr，不连续尝试多个来源的安装方案。
5. 完成后从新 shell 或干净 build 目录复验；记录实际版本、产物 hash、退出码和启动现象，避免依赖当前终端的隐式环境变量。
6. 每条实际执行命令连同退出码追加到 `evidence/day-054/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜将训练墙钟与人工工作分开，人工只检查日志和异常。

1. 在 `logs/day-054.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先用 1 batch/少量 step 验证 shape、loss、保存和恢复，再冻结数据 revision、配置、seed、代码 commit 与算力预算后启动正式任务。
3. 观察首个训练/验证周期并主动验证一次 checkpoint 恢复；训练仍在运行时写 RUNNING，不把开始训练、下载权重或官方 demo 当成完成微调。
4. 每条实际执行命令连同退出码追加到 `evidence/day-054/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜保存配置、git commit、数据revision、曲线和checkpoint索引。

1. 在 `logs/day-054.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把仿真器/适配器/外部服务访问、协议转换和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 先用 1 batch/少量 step 验证 shape、loss、保存和恢复，再冻结数据 revision、配置、seed、代码 commit 与算力预算后启动正式任务。
5. 观察首个训练/验证周期并主动验证一次 checkpoint 恢复；训练仍在运行时写 RUNNING，不把开始训练、下载权重或官方 demo 当成完成微调。
6. 每条实际执行命令连同退出码追加到 `evidence/day-054/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

- 主交付物：experiments/act-v1
- 日志：`logs/day-054.md`
- 原始证据目录：`evidence/day-054/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：任务启动并产生有效checkpoint；元数据齐全；无须在2小时人工时间盒内强行训练结束。
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
> [[#D054 详细执行｜ACT v1 正式训练|← Day 054]] · [[#导航|↑ 文档导航]] · [[#D056 详细执行｜ACT 离线检查与上线前门|Day 056 →]]

#### D055 详细执行｜恢复训练与Checkpoint治理

> 计划日期：2026-10-17｜主动投入：4 小时｜第 8 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“reports/act-resume.md、checkpoint-manifest.json”，并满足：恢复轨迹连续；损坏文件被拒绝；候选选择规则事先记录。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 054 的结果记录，确认其状态和交付物“experiments/act-v1”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-055.md` 和 `evidence/day-055/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R06 LeRobot ACT 策略文档](https://huggingface.co/docs/lerobot/v0.6.0/en/act)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 4 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–01:05 | 任务 1 | 从中间checkpoint恢复并确认step、优化器和随机状态。 |
| 01:05–02:00 | 任务 2 | 对中断、损坏checkpoint和磁盘不足做失败测试。 |
| 02:00–02:55 | 任务 3 | 选择候选checkpoint时只参考验证指标，不查看冻结测试结果。 |
| 02:55–03:40 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 03:40–04:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜从中间checkpoint恢复并确认step、优化器和随机状态。

1. 在 `logs/day-055.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先用 1 batch/少量 step 验证 shape、loss、保存和恢复，再冻结数据 revision、配置、seed、代码 commit 与算力预算后启动正式任务。
3. 观察首个训练/验证周期并主动验证一次 checkpoint 恢复；训练仍在运行时写 RUNNING，不把开始训练、下载权重或官方 demo 当成完成微调。
4. 每条实际执行命令连同退出码追加到 `evidence/day-055/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜对中断、损坏checkpoint和磁盘不足做失败测试。

1. 在 `logs/day-055.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
4. 先用 1 batch/少量 step 验证 shape、loss、保存和恢复，再冻结数据 revision、配置、seed、代码 commit 与算力预算后启动正式任务。
5. 观察首个训练/验证周期并主动验证一次 checkpoint 恢复；训练仍在运行时写 RUNNING，不把开始训练、下载权重或官方 demo 当成完成微调。
6. 每条实际执行命令连同退出码追加到 `evidence/day-055/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜选择候选checkpoint时只参考验证指标，不查看冻结测试结果。

1. 在 `logs/day-055.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
4. 先用 1 batch/少量 step 验证 shape、loss、保存和恢复，再冻结数据 revision、配置、seed、代码 commit 与算力预算后启动正式任务。
5. 观察首个训练/验证周期并主动验证一次 checkpoint 恢复；训练仍在运行时写 RUNNING，不把开始训练、下载权重或官方 demo 当成完成微调。
6. 每条实际执行命令连同退出码追加到 `evidence/day-055/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

- 主交付物：reports/act-resume.md、checkpoint-manifest.json
- 日志：`logs/day-055.md`
- 原始证据目录：`evidence/day-055/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：恢复轨迹连续；损坏文件被拒绝；候选选择规则事先记录。
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
> [[#D055 详细执行｜恢复训练与Checkpoint治理|← Day 055]] · [[#导航|↑ 文档导航]] · [[#D057 详细执行｜ACT 评测协议冻结|Day 057 →]]

#### D056 详细执行｜ACT 离线检查与上线前门

> 计划日期：2026-10-18｜主动投入：2 小时｜第 8 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“safety/act-preflight.md、MODEL_CARD_ACT-draft.md”，并满足：无NaN/越界动作；预检不崩溃；checkpoint和评测协议均已冻结。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 055 的结果记录，确认其状态和交付物“reports/act-resume.md、checkpoint-manifest.json”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-056.md` 和 `evidence/day-056/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R06 LeRobot ACT 策略文档](https://huggingface.co/docs/lerobot/v0.6.0/en/act)；[R19 Hugging Face Model Cards](https://huggingface.co/docs/hub/en/model-cards)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 对验证batch运行推理并检查动作分布、饱和和NaN。 |
| 00:35–01:00 | 任务 2 | 在MuJoCo中以低速、短时、可中止方式做预检。 |
| 01:00–01:25 | 任务 3 | 冻结下一周评测协议和ACT候选checkpoint。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜对验证batch运行推理并检查动作分布、饱和和NaN。

1. 在 `logs/day-056.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-056/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜在MuJoCo中以低速、短时、可中止方式做预检。

1. 在 `logs/day-056.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-056/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜冻结下一周评测协议和ACT候选checkpoint。

1. 在 `logs/day-056.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
5. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
6. 每条实际执行命令连同退出码追加到 `evidence/day-056/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

- 主交付物：safety/act-preflight.md、MODEL_CARD_ACT-draft.md
- 日志：`logs/day-056.md`
- 原始证据目录：`evidence/day-056/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：无NaN/越界动作；预检不崩溃；checkpoint和评测协议均已冻结。
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

### 第 9 周详细执行｜ACT 仿真评测与鲁棒性

> [!info]- 当日导航
> [[#D056 详细执行｜ACT 离线检查与上线前门|← Day 056]] · [[#导航|↑ 文档导航]] · [[#D058 详细执行｜Rollout Harness 与逐轮记录|Day 058 →]]

#### D057 详细执行｜ACT 评测协议冻结

> 计划日期：2026-10-19｜主动投入：2 小时｜第 9 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“evaluations/act-v1/protocol.md 与 hash”，并满足：协议在结果生成前冻结；修改需新版本；成功定义可程序化。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 056 的结果记录，确认其状态和交付物“safety/act-preflight.md、MODEL_CARD_ACT-draft.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-057.md` 和 `evidence/day-057/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R19 Hugging Face Model Cards](https://huggingface.co/docs/hub/en/model-cards)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 定义任务、初始位置、最大步数、成功保持和失败类型。 |
| 00:35–01:00 | 任务 2 | 固定checkpoint、模型commit、仿真commit和随机种子列表。 |
| 01:00–01:25 | 任务 3 | 在跑测试前生成只读protocol hash。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜定义任务、初始位置、最大步数、成功保持和失败类型。

1. 在 `logs/day-057.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 每条实际执行命令连同退出码追加到 `evidence/day-057/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜固定checkpoint、模型commit、仿真commit和随机种子列表。

1. 在 `logs/day-057.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先用 1 batch/少量 step 验证 shape、loss、保存和恢复，再冻结数据 revision、配置、seed、代码 commit 与算力预算后启动正式任务。
3. 观察首个训练/验证周期并主动验证一次 checkpoint 恢复；训练仍在运行时写 RUNNING，不把开始训练、下载权重或官方 demo 当成完成微调。
4. 每条实际执行命令连同退出码追加到 `evidence/day-057/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜在跑测试前生成只读protocol hash。

1. 在 `logs/day-057.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-057/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

- 主交付物：evaluations/act-v1/protocol.md 与 hash
- 日志：`logs/day-057.md`
- 原始证据目录：`evidence/day-057/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：协议在结果生成前冻结；修改需新版本；成功定义可程序化。
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
> [[#D057 详细执行｜ACT 评测协议冻结|← Day 057]] · [[#导航|↑ 文档导航]] · [[#D059 详细执行｜ACT 冻结基线评测|Day 059 →]]

#### D058 详细执行｜Rollout Harness 与逐轮记录

> 计划日期：2026-10-20｜主动投入：2 小时｜第 9 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“evaluation/rollout.py、tests/test_rollout.py”，并满足：合成策略和失败策略测试通过；每轮产物完整；崩溃不覆盖已有结果。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 057 的结果记录，确认其状态和交付物“evaluations/act-v1/protocol.md 与 hash”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-058.md` 和 `evidence/day-058/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R24 LeRobot Policy Rollout](https://huggingface.co/docs/lerobot/v0.6.0/en/inference)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 实现批量重置、策略推理、动作守卫和视频/轨迹保存。 |
| 00:35–01:00 | 任务 2 | 每轮保存seed、开始/结束状态、成功、失败类型和耗时。 |
| 01:00–01:25 | 任务 3 | 策略异常时停止该轮但继续保留故障证据。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜实现批量重置、策略推理、动作守卫和视频/轨迹保存。

1. 在 `logs/day-058.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
5. 把仿真器/适配器/外部服务访问、协议转换和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
6. 每条实际执行命令连同退出码追加到 `evidence/day-058/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜每轮保存seed、开始/结束状态、成功、失败类型和耗时。

1. 在 `logs/day-058.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-058/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜策略异常时停止该轮但继续保留故障证据。

1. 在 `logs/day-058.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 每条实际执行命令连同退出码追加到 `evidence/day-058/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

- 主交付物：evaluation/rollout.py、tests/test_rollout.py
- 日志：`logs/day-058.md`
- 原始证据目录：`evidence/day-058/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：合成策略和失败策略测试通过；每轮产物完整；崩溃不覆盖已有结果。
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
> [[#D058 详细执行｜Rollout Harness 与逐轮记录|← Day 058]] · [[#导航|↑ 文档导航]] · [[#D060 详细执行｜失败分类与可解释回放|Day 060 →]]

#### D059 详细执行｜ACT 冻结基线评测

> 计划日期：2026-10-21｜主动投入：2 小时｜第 9 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“evaluations/act-v1/results.csv、raw/”，并满足：样本量达到协议；逐轮结果与汇总一致；所有视频标记仿真。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 058 的结果记录，确认其状态和交付物“evaluation/rollout.py、tests/test_rollout.py”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-059.md` 和 `evidence/day-059/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R24 LeRobot Policy Rollout](https://huggingface.co/docs/lerobot/v0.6.0/en/inference)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 按协议运行不少于20个Episode。 |
| 00:35–01:00 | 任务 2 | 不删除失败、卡住或超时轮次。 |
| 01:00–01:25 | 任务 3 | 生成results.csv并从原始记录重算汇总。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜按协议运行不少于20个Episode。

1. 在 `logs/day-059.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
5. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
6. 每条实际执行命令连同退出码追加到 `evidence/day-059/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜不删除失败、卡住或超时轮次。

1. 在 `logs/day-059.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-059/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜生成results.csv并从原始记录重算汇总。

1. 在 `logs/day-059.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-059/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

- 主交付物：evaluations/act-v1/results.csv、raw/
- 日志：`logs/day-059.md`
- 原始证据目录：`evidence/day-059/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：样本量达到协议；逐轮结果与汇总一致；所有视频标记仿真。
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
> [[#D059 详细执行｜ACT 冻结基线评测|← Day 059]] · [[#导航|↑ 文档导航]] · [[#D061 详细执行｜未见位置评测|Day 061 →]]

#### D060 详细执行｜失败分类与可解释回放

> 计划日期：2026-10-22｜主动投入：2 小时｜第 9 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“reports/act-failure-taxonomy.md”，并满足：每个失败有唯一主分类和可复核证据；未强行解释未知原因。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 059 的结果记录，确认其状态和交付物“evaluations/act-v1/results.csv、raw/”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-060.md` 和 `evidence/day-060/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R19 Hugging Face Model Cards](https://huggingface.co/docs/hub/en/model-cards)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 按未抓取、提前闭合、掉落、越界、超时等分类。 |
| 00:35–01:00 | 任务 2 | 为每类选择代表性成功/失败轨迹。 |
| 01:00–01:25 | 任务 3 | 区分数据缺口、控制缺口和模型缺口，不凭单轮下结论。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜按未抓取、提前闭合、掉落、越界、超时等分类。

1. 在 `logs/day-060.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-060/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜为每类选择代表性成功/失败轨迹。

1. 在 `logs/day-060.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-060/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜区分数据缺口、控制缺口和模型缺口，不凭单轮下结论。

1. 在 `logs/day-060.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先用 1 batch/少量 step 验证 shape、loss、保存和恢复，再冻结数据 revision、配置、seed、代码 commit 与算力预算后启动正式任务。
3. 观察首个训练/验证周期并主动验证一次 checkpoint 恢复；训练仍在运行时写 RUNNING，不把开始训练、下载权重或官方 demo 当成完成微调。
4. 每条实际执行命令连同退出码追加到 `evidence/day-060/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

- 主交付物：reports/act-failure-taxonomy.md
- 日志：`logs/day-060.md`
- 原始证据目录：`evidence/day-060/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：每个失败有唯一主分类和可复核证据；未强行解释未知原因。
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
> [[#D060 详细执行｜失败分类与可解释回放|← Day 060]] · [[#导航|↑ 文档导航]] · [[#D062 详细执行｜光照与相机扰动评测|Day 062 →]]

#### D061 详细执行｜未见位置评测

> 计划日期：2026-10-23｜主动投入：2 小时｜第 9 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“evaluations/act-v1/unseen-position.csv”，并满足：测试位置未泄漏到训练；样本量明确；不把小样本结果外推为真实世界泛化。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 060 的结果记录，确认其状态和交付物“reports/act-failure-taxonomy.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-061.md` 和 `evidence/day-061/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R19 Hugging Face Model Cards](https://huggingface.co/docs/hub/en/model-cards)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 在训练split未覆盖的位置运行冻结评测。 |
| 00:35–01:00 | 任务 2 | 保持其他条件不变，隔离位置变化。 |
| 01:00–01:25 | 任务 3 | 报告逐轮结果和置信区间/样本限制。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜在训练split未覆盖的位置运行冻结评测。

1. 在 `logs/day-061.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
4. 先用 1 batch/少量 step 验证 shape、loss、保存和恢复，再冻结数据 revision、配置、seed、代码 commit 与算力预算后启动正式任务。
5. 观察首个训练/验证周期并主动验证一次 checkpoint 恢复；训练仍在运行时写 RUNNING，不把开始训练、下载权重或官方 demo 当成完成微调。
6. 每条实际执行命令连同退出码追加到 `evidence/day-061/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜保持其他条件不变，隔离位置变化。

1. 在 `logs/day-061.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-061/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜报告逐轮结果和置信区间/样本限制。

1. 在 `logs/day-061.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 每批开始前锁定 task/spec 与数据 schema；每个样本生成唯一 ID，记录MuJoCo/真实设备来源、时间、操作者/上游、有效性和失败原因。
3. 每完成一小批立即跑质量检查和 checksum；原始数据只追加不静默改写，无效样本保留在 manifest 并标明排除原因。
4. 发布/提交前逐条核对证据 ID、个人贡献、上游来源、simulation-only/真实设备边界和禁用表述；运行隐私检查并人工搜索联系方式、设备标识、密钥和公司材料。
5. 记录实际提交版本、目标链接和时间；外部是否回复、合并或录用是后续状态，不在当天伪造成果，也不高频自动化操作网站。
6. 每条实际执行命令连同退出码追加到 `evidence/day-061/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

- 主交付物：evaluations/act-v1/unseen-position.csv
- 日志：`logs/day-061.md`
- 原始证据目录：`evidence/day-061/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：测试位置未泄漏到训练；样本量明确；不把小样本结果外推为真实世界泛化。
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
> [[#D061 详细执行｜未见位置评测|← Day 061]] · [[#导航|↑ 文档导航]] · [[#D063 详细执行｜ACT v1 报告与阶段门|Day 063 →]]

#### D062 详细执行｜光照与相机扰动评测

> 计划日期：2026-10-24｜主动投入：4 小时｜第 9 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“evaluations/act-v1/visual-robustness.csv”，并满足：变量控制可复核；结果来自冻结checkpoint；不重新调参污染测试。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 061 的结果记录，确认其状态和交付物“evaluations/act-v1/unseen-position.csv”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-062.md` 和 `evidence/day-062/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R16 MuJoCo 文档](https://mujoco.readthedocs.io/en/stable/)；[R19 Hugging Face Model Cards](https://huggingface.co/docs/hub/en/model-cards)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 4 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–01:05 | 任务 1 | 分别改变光照、相机小偏移和图像噪声。 |
| 01:05–02:00 | 任务 2 | 一次只改变一个主变量并保存配置diff。 |
| 02:00–02:55 | 任务 3 | 比较基线与扰动失败分布。 |
| 02:55–03:40 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 03:40–04:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜分别改变光照、相机小偏移和图像噪声。

1. 在 `logs/day-062.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-062/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜一次只改变一个主变量并保存配置diff。

1. 在 `logs/day-062.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把仿真器/适配器/外部服务访问、协议转换和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 每条实际执行命令连同退出码追加到 `evidence/day-062/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜比较基线与扰动失败分布。

1. 在 `logs/day-062.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-062/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

- 主交付物：evaluations/act-v1/visual-robustness.csv
- 日志：`logs/day-062.md`
- 原始证据目录：`evidence/day-062/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：变量控制可复核；结果来自冻结checkpoint；不重新调参污染测试。
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
> [[#D062 详细执行｜光照与相机扰动评测|← Day 062]] · [[#导航|↑ 文档导航]] · [[#D064 详细执行｜SmolVLA 架构与数据流审计|Day 064 →]]

#### D063 详细执行｜ACT v1 报告与阶段门

> 计划日期：2026-10-25｜主动投入：2 小时｜第 9 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“reports/act-v1-evaluation.md、MODEL_CARD_ACT.md”，并满足：数字可由原始CSV重算；包含成功和失败演示；明确simulation-only。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 062 的结果记录，确认其状态和交付物“evaluations/act-v1/visual-robustness.csv”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-063.md` 和 `evidence/day-063/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R19 Hugging Face Model Cards](https://huggingface.co/docs/hub/en/model-cards)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 汇总训练、基线、未见位置和视觉扰动。 |
| 00:35–01:00 | 任务 2 | 列出最强结论、失败结论和不能推导的内容。 |
| 01:00–01:25 | 任务 3 | 决定是否进入SmolVLA；ACT链路不稳定时先修复。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜汇总训练、基线、未见位置和视觉扰动。

1. 在 `logs/day-063.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先用 1 batch/少量 step 验证 shape、loss、保存和恢复，再冻结数据 revision、配置、seed、代码 commit 与算力预算后启动正式任务。
3. 观察首个训练/验证周期并主动验证一次 checkpoint 恢复；训练仍在运行时写 RUNNING，不把开始训练、下载权重或官方 demo 当成完成微调。
4. 每条实际执行命令连同退出码追加到 `evidence/day-063/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜列出最强结论、失败结论和不能推导的内容。

1. 在 `logs/day-063.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 每条实际执行命令连同退出码追加到 `evidence/day-063/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜决定是否进入SmolVLA；ACT链路不稳定时先修复。

1. 在 `logs/day-063.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-063/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

- 主交付物：reports/act-v1-evaluation.md、MODEL_CARD_ACT.md
- 日志：`logs/day-063.md`
- 原始证据目录：`evidence/day-063/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：数字可由原始CSV重算；包含成功和失败演示；明确simulation-only。
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

### 第 10 周详细执行｜SmolVLA 数据与微调

> [!info]- 当日导航
> [[#D063 详细执行｜ACT v1 报告与阶段门|← Day 063]] · [[#导航|↑ 文档导航]] · [[#D065 详细执行｜语言任务与标注规则|Day 065 →]]

#### D064 详细执行｜SmolVLA 架构与数据流审计

> 计划日期：2026-10-26｜主动投入：2 小时｜第 10 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“docs/smolvla-dataflow.md”，并满足：数据流图可对应代码；所有shape有实测；未把阅读写成模型研发经验。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 063 的结果记录，确认其状态和交付物“reports/act-v1-evaluation.md、MODEL_CARD_ACT.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-064.md` 和 `evidence/day-064/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R07 SmolVLA 官方说明](https://huggingface.co/blog/smolvla)；[R25 SmolVLA 官方微调指南](https://huggingface.co/docs/lerobot/v0.6.0/en/smolvla)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 阅读官方SmolVLA数据、processor、policy和推理路径。 |
| 00:35–01:00 | 任务 2 | 绘制图像、状态、语言、动作进入模型的shape和dtype。 |
| 01:00–01:25 | 任务 3 | 列出与ACT数据的兼容与转换点。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜阅读官方SmolVLA数据、processor、policy和推理路径。

1. 在 `logs/day-064.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 只读列出的官方/一手资料，先写出要回答的 3～5 个问题；阅读时逐条记录“结论、出处、适用版本、仍不确定项”，禁止只收藏链接。
3. 合上资料后用自己的话重写结论，并用一个反例或边界条件检验理解；无法解释的术语放入问题清单，不用“熟悉”代替掌握。
4. 每条实际执行命令连同退出码追加到 `evidence/day-064/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜绘制图像、状态、语言、动作进入模型的shape和dtype。

1. 在 `logs/day-064.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先用 1 batch/少量 step 验证 shape、loss、保存和恢复，再冻结数据 revision、配置、seed、代码 commit 与算力预算后启动正式任务。
3. 观察首个训练/验证周期并主动验证一次 checkpoint 恢复；训练仍在运行时写 RUNNING，不把开始训练、下载权重或官方 demo 当成完成微调。
4. 每条实际执行命令连同退出码追加到 `evidence/day-064/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜列出与ACT数据的兼容与转换点。

1. 在 `logs/day-064.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
5. 把仿真器/适配器/外部服务访问、协议转换和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
6. 每条实际执行命令连同退出码追加到 `evidence/day-064/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

- 主交付物：docs/smolvla-dataflow.md
- 日志：`logs/day-064.md`
- 原始证据目录：`evidence/day-064/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：数据流图可对应代码；所有shape有实测；未把阅读写成模型研发经验。
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
> [[#D064 详细执行｜SmolVLA 架构与数据流审计|← Day 064]] · [[#导航|↑ 文档导航]] · [[#D066 详细执行｜SmolVLA GPU 与依赖冒烟|Day 066 →]]

#### D065 详细执行｜语言任务与标注规则

> 计划日期：2026-10-27｜主动投入：2 小时｜第 10 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“dataset/language-spec-v1.md、language-manifest.json”，并满足：每个Episode语言可追溯；测试表达隔离；不凭空增加未示教任务。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 064 的结果记录，确认其状态和交付物“docs/smolvla-dataflow.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-065.md` 和 `evidence/day-065/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R25 SmolVLA 官方微调指南](https://huggingface.co/docs/lerobot/v0.6.0/en/smolvla)；[R18 Hugging Face Dataset Cards](https://huggingface.co/docs/hub/en/datasets-cards)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 为同一Pick-Cube任务定义有限、等价和禁止的指令表达。 |
| 00:35–01:00 | 任务 2 | 将语言加入Dataset，保留原任务ID和Episode来源。 |
| 01:00–01:25 | 任务 3 | 检查语言split，避免测试表达直接复制到训练。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜为同一Pick-Cube任务定义有限、等价和禁止的指令表达。

1. 在 `logs/day-065.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 每条实际执行命令连同退出码追加到 `evidence/day-065/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜将语言加入Dataset，保留原任务ID和Episode来源。

1. 在 `logs/day-065.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 每批开始前锁定 task/spec 与数据 schema；每个样本生成唯一 ID，记录MuJoCo/真实设备来源、时间、操作者/上游、有效性和失败原因。
3. 每完成一小批立即跑质量检查和 checksum；原始数据只追加不静默改写，无效样本保留在 manifest 并标明排除原因。
4. 每条实际执行命令连同退出码追加到 `evidence/day-065/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜检查语言split，避免测试表达直接复制到训练。

1. 在 `logs/day-065.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
4. 先用 1 batch/少量 step 验证 shape、loss、保存和恢复，再冻结数据 revision、配置、seed、代码 commit 与算力预算后启动正式任务。
5. 观察首个训练/验证周期并主动验证一次 checkpoint 恢复；训练仍在运行时写 RUNNING，不把开始训练、下载权重或官方 demo 当成完成微调。
6. 每条实际执行命令连同退出码追加到 `evidence/day-065/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

- 主交付物：dataset/language-spec-v1.md、language-manifest.json
- 日志：`logs/day-065.md`
- 原始证据目录：`evidence/day-065/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：每个Episode语言可追溯；测试表达隔离；不凭空增加未示教任务。
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
> [[#D065 详细执行｜语言任务与标注规则|← Day 065]] · [[#导航|↑ 文档导航]] · [[#D067 详细执行｜微调配置冻结|Day 067 →]]

#### D066 详细执行｜SmolVLA GPU 与依赖冒烟

> 计划日期：2026-10-28｜主动投入：2 小时｜第 10 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“experiments/smolvla-smoke、reports/gpu-budget.md”，并满足：前向/短反向通过或有明确阻塞；revision固定；不在4核8GB CPU服务器训练。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 065 的结果记录，确认其状态和交付物“dataset/language-spec-v1.md、language-manifest.json”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-066.md` 和 `evidence/day-066/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R09 LeRobot 算力指南](https://huggingface.co/docs/lerobot/v0.6.0/en/hardware_guide)；[R25 SmolVLA 官方微调指南](https://huggingface.co/docs/lerobot/v0.6.0/en/smolvla)；[R28 Hugging Face Jobs GPU 价格](https://huggingface.co/docs/hub/jobs-pricing)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 在最小batch/分辨率下加载模型和一个batch。 |
| 00:35–01:00 | 任务 2 | 记录显存、系统内存、下载体积和模型revision。 |
| 01:00–01:25 | 任务 3 | 设置费用、墙钟、自动终止和缓存策略。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜在最小batch/分辨率下加载模型和一个batch。

1. 在 `logs/day-066.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先用 1 batch/少量 step 验证 shape、loss、保存和恢复，再冻结数据 revision、配置、seed、代码 commit 与算力预算后启动正式任务。
3. 观察首个训练/验证周期并主动验证一次 checkpoint 恢复；训练仍在运行时写 RUNNING，不把开始训练、下载权重或官方 demo 当成完成微调。
4. 每条实际执行命令连同退出码追加到 `evidence/day-066/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜记录显存、系统内存、下载体积和模型revision。

1. 在 `logs/day-066.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 执行前记录当前版本、磁盘空间和回滚点；只按固定版本/commit操作，命令失败时保留完整 stderr，不连续尝试多个来源的安装方案。
3. 完成后从新 shell 或干净 build 目录复验；记录实际版本、产物 hash、退出码和启动现象，避免依赖当前终端的隐式环境变量。
4. 先用 1 batch/少量 step 验证 shape、loss、保存和恢复，再冻结数据 revision、配置、seed、代码 commit 与算力预算后启动正式任务。
5. 观察首个训练/验证周期并主动验证一次 checkpoint 恢复；训练仍在运行时写 RUNNING，不把开始训练、下载权重或官方 demo 当成完成微调。
6. 每条实际执行命令连同退出码追加到 `evidence/day-066/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜设置费用、墙钟、自动终止和缓存策略。

1. 在 `logs/day-066.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 每条实际执行命令连同退出码追加到 `evidence/day-066/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

- 主交付物：experiments/smolvla-smoke、reports/gpu-budget.md
- 日志：`logs/day-066.md`
- 原始证据目录：`evidence/day-066/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：前向/短反向通过或有明确阻塞；revision固定；不在4核8GB CPU服务器训练。
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
> [[#D066 详细执行｜SmolVLA GPU 与依赖冒烟|← Day 066]] · [[#导航|↑ 文档导航]] · [[#D068 详细执行｜SmolVLA v1 微调启动|Day 068 →]]

#### D067 详细执行｜微调配置冻结

> 计划日期：2026-10-29｜主动投入：2 小时｜第 10 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“configs/smolvla-pick-cube-v1.yaml”，并满足：配置可重建；processor测试通过；协议和预算在训练前冻结。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 066 的结果记录，确认其状态和交付物“experiments/smolvla-smoke、reports/gpu-budget.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-067.md` 和 `evidence/day-067/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R25 SmolVLA 官方微调指南](https://huggingface.co/docs/lerobot/v0.6.0/en/smolvla)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 固定dataset、语言split、冻结层、学习率、batch和seed。 |
| 00:35–01:00 | 任务 2 | 对输入processor与动作反归一化做单元测试。 |
| 01:00–01:25 | 任务 3 | 生成配置hash并锁定测试split。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜固定dataset、语言split、冻结层、学习率、batch和seed。

1. 在 `logs/day-067.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 只读列出的官方/一手资料，先写出要回答的 3～5 个问题；阅读时逐条记录“结论、出处、适用版本、仍不确定项”，禁止只收藏链接。
3. 合上资料后用自己的话重写结论，并用一个反例或边界条件检验理解；无法解释的术语放入问题清单，不用“熟悉”代替掌握。
4. 每条实际执行命令连同退出码追加到 `evidence/day-067/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜对输入processor与动作反归一化做单元测试。

1. 在 `logs/day-067.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-067/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜生成配置hash并锁定测试split。

1. 在 `logs/day-067.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把仿真器/适配器/外部服务访问、协议转换和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
5. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
6. 每条实际执行命令连同退出码追加到 `evidence/day-067/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：configs/smolvla-pick-cube-v1.yaml
- 日志：`logs/day-067.md`
- 原始证据目录：`evidence/day-067/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：配置可重建；processor测试通过；协议和预算在训练前冻结。
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
> [[#D067 详细执行｜微调配置冻结|← Day 067]] · [[#导航|↑ 文档导航]] · [[#D069 详细执行｜训练恢复与Checkpoint 初评|Day 069 →]]

#### D068 详细执行｜SmolVLA v1 微调启动

> 计划日期：2026-10-30｜主动投入：2 小时｜第 10 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“experiments/smolvla-v1”，并满足：产生有效日志和checkpoint；训练任务有超时/预算；元数据完整。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 067 的结果记录，确认其状态和交付物“configs/smolvla-pick-cube-v1.yaml”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-068.md` 和 `evidence/day-068/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R25 SmolVLA 官方微调指南](https://huggingface.co/docs/lerobot/v0.6.0/en/smolvla)；[R17 Weights & Biases 文档](https://docs.wandb.ai/)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 按冻结配置启动按需GPU训练。 |
| 00:35–01:00 | 任务 2 | 记录git、模型revision、数据revision、环境和日志URL/本地路径。 |
| 01:00–01:25 | 任务 3 | 人工时间只用于检查启动与异常，不等待整个训练。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜按冻结配置启动按需GPU训练。

1. 在 `logs/day-068.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把仿真器/适配器/外部服务访问、协议转换和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 执行前记录当前版本、磁盘空间和回滚点；只按固定版本/commit操作，命令失败时保留完整 stderr，不连续尝试多个来源的安装方案。
5. 完成后从新 shell 或干净 build 目录复验；记录实际版本、产物 hash、退出码和启动现象，避免依赖当前终端的隐式环境变量。
6. 每条实际执行命令连同退出码追加到 `evidence/day-068/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜记录git、模型revision、数据revision、环境和日志URL/本地路径。

1. 在 `logs/day-068.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 执行前记录当前版本、磁盘空间和回滚点；只按固定版本/commit操作，命令失败时保留完整 stderr，不连续尝试多个来源的安装方案。
3. 完成后从新 shell 或干净 build 目录复验；记录实际版本、产物 hash、退出码和启动现象，避免依赖当前终端的隐式环境变量。
4. 先用 1 batch/少量 step 验证 shape、loss、保存和恢复，再冻结数据 revision、配置、seed、代码 commit 与算力预算后启动正式任务。
5. 观察首个训练/验证周期并主动验证一次 checkpoint 恢复；训练仍在运行时写 RUNNING，不把开始训练、下载权重或官方 demo 当成完成微调。
6. 每条实际执行命令连同退出码追加到 `evidence/day-068/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜人工时间只用于检查启动与异常，不等待整个训练。

1. 在 `logs/day-068.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 执行前记录当前版本、磁盘空间和回滚点；只按固定版本/commit操作，命令失败时保留完整 stderr，不连续尝试多个来源的安装方案。
3. 完成后从新 shell 或干净 build 目录复验；记录实际版本、产物 hash、退出码和启动现象，避免依赖当前终端的隐式环境变量。
4. 先用 1 batch/少量 step 验证 shape、loss、保存和恢复，再冻结数据 revision、配置、seed、代码 commit 与算力预算后启动正式任务。
5. 观察首个训练/验证周期并主动验证一次 checkpoint 恢复；训练仍在运行时写 RUNNING，不把开始训练、下载权重或官方 demo 当成完成微调。
6. 每条实际执行命令连同退出码追加到 `evidence/day-068/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

- 主交付物：experiments/smolvla-v1
- 日志：`logs/day-068.md`
- 原始证据目录：`evidence/day-068/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：产生有效日志和checkpoint；训练任务有超时/预算；元数据完整。
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
> [[#D068 详细执行｜SmolVLA v1 微调启动|← Day 068]] · [[#导航|↑ 文档导航]] · [[#D070 详细执行｜SmolVLA 仿真上线前门|Day 070 →]]

#### D069 详细执行｜训练恢复与Checkpoint 初评

> 计划日期：2026-10-31｜主动投入：4 小时｜第 10 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“reports/smolvla-resume.md、checkpoint-manifest.json”，并满足：恢复一致；候选选择不看测试结果；损坏checkpoint被拒绝。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 068 的结果记录，确认其状态和交付物“experiments/smolvla-v1”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-069.md` 和 `evidence/day-069/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R25 SmolVLA 官方微调指南](https://huggingface.co/docs/lerobot/v0.6.0/en/smolvla)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 4 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–01:05 | 任务 1 | 从checkpoint恢复并验证step与优化器状态。 |
| 01:05–02:00 | 任务 2 | 在验证batch检查动作分布、语言输入和NaN。 |
| 02:00–02:55 | 任务 3 | 按预先规则选择唯一候选checkpoint。 |
| 02:55–03:40 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 03:40–04:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜从checkpoint恢复并验证step与优化器状态。

1. 在 `logs/day-069.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
4. 先用 1 batch/少量 step 验证 shape、loss、保存和恢复，再冻结数据 revision、配置、seed、代码 commit 与算力预算后启动正式任务。
5. 观察首个训练/验证周期并主动验证一次 checkpoint 恢复；训练仍在运行时写 RUNNING，不把开始训练、下载权重或官方 demo 当成完成微调。
6. 每条实际执行命令连同退出码追加到 `evidence/day-069/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜在验证batch检查动作分布、语言输入和NaN。

1. 在 `logs/day-069.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-069/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜按预先规则选择唯一候选checkpoint。

1. 在 `logs/day-069.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 先用 1 batch/少量 step 验证 shape、loss、保存和恢复，再冻结数据 revision、配置、seed、代码 commit 与算力预算后启动正式任务。
5. 观察首个训练/验证周期并主动验证一次 checkpoint 恢复；训练仍在运行时写 RUNNING，不把开始训练、下载权重或官方 demo 当成完成微调。
6. 每条实际执行命令连同退出码追加到 `evidence/day-069/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

- 主交付物：reports/smolvla-resume.md、checkpoint-manifest.json
- 日志：`logs/day-069.md`
- 原始证据目录：`evidence/day-069/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：恢复一致；候选选择不看测试结果；损坏checkpoint被拒绝。
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
> [[#D069 详细执行｜训练恢复与Checkpoint 初评|← Day 069]] · [[#导航|↑ 文档导航]] · [[#D071 详细执行｜SmolVLA 冻结基线评测|Day 071 →]]

#### D070 详细执行｜SmolVLA 仿真上线前门

> 计划日期：2026-11-01｜主动投入：2 小时｜第 10 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“safety/smolvla-preflight.md、MODEL_CARD_SMOLVLA-draft.md”，并满足：无NaN/越界动作；缺语言时安全失败；预检不计入正式评测。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 069 的结果记录，确认其状态和交付物“reports/smolvla-resume.md、checkpoint-manifest.json”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-070.md` 和 `evidence/day-070/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R25 SmolVLA 官方微调指南](https://huggingface.co/docs/lerobot/v0.6.0/en/smolvla)；[R19 Hugging Face Model Cards](https://huggingface.co/docs/hub/en/model-cards)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 在低速、短时、固定起点运行少量预检。 |
| 00:35–01:00 | 任务 2 | 检查动作年龄、饱和、越界和语言缺失。 |
| 01:00–01:25 | 任务 3 | 冻结下一周评测协议与候选checkpoint。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜在低速、短时、固定起点运行少量预检。

1. 在 `logs/day-070.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-070/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜检查动作年龄、饱和、越界和语言缺失。

1. 在 `logs/day-070.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-070/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜冻结下一周评测协议与候选checkpoint。

1. 在 `logs/day-070.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
5. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
6. 每条实际执行命令连同退出码追加到 `evidence/day-070/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

- 主交付物：safety/smolvla-preflight.md、MODEL_CARD_SMOLVLA-draft.md
- 日志：`logs/day-070.md`
- 原始证据目录：`evidence/day-070/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：无NaN/越界动作；缺语言时安全失败；预检不计入正式评测。
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

### 第 11 周详细执行｜SmolVLA 评测、对比与异步推理

> [!info]- 当日导航
> [[#D070 详细执行｜SmolVLA 仿真上线前门|← Day 070]] · [[#导航|↑ 文档导航]] · [[#D072 详细执行｜未见位置与物体属性变化|Day 072 →]]

#### D071 详细执行｜SmolVLA 冻结基线评测

> 计划日期：2026-11-02｜主动投入：2 小时｜第 11 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“evaluations/smolvla-v1/baseline.csv”，并满足：样本量与协议一致；逐轮证据齐全；不删除语言理解失败。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 070 的结果记录，确认其状态和交付物“safety/smolvla-preflight.md、MODEL_CARD_SMOLVLA-draft.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-071.md` 和 `evidence/day-071/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R25 SmolVLA 官方微调指南](https://huggingface.co/docs/lerobot/v0.6.0/en/smolvla)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 复制ACT协议中可共用的任务和seed。 |
| 00:35–01:00 | 任务 2 | 按SmolVLA协议运行不少于20个Episode。 |
| 01:00–01:25 | 任务 3 | 保存语言、逐轮动作、轨迹、视频和失败类型。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜复制ACT协议中可共用的任务和seed。

1. 在 `logs/day-071.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 每条实际执行命令连同退出码追加到 `evidence/day-071/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜按SmolVLA协议运行不少于20个Episode。

1. 在 `logs/day-071.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
5. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
6. 每条实际执行命令连同退出码追加到 `evidence/day-071/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜保存语言、逐轮动作、轨迹、视频和失败类型。

1. 在 `logs/day-071.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-071/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

- 主交付物：evaluations/smolvla-v1/baseline.csv
- 日志：`logs/day-071.md`
- 原始证据目录：`evidence/day-071/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：样本量与协议一致；逐轮证据齐全；不删除语言理解失败。
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
> [[#D071 详细执行｜SmolVLA 冻结基线评测|← Day 071]] · [[#导航|↑ 文档导航]] · [[#D073 详细执行｜语言改写与歧义评测|Day 073 →]]

#### D072 详细执行｜未见位置与物体属性变化

> 计划日期：2026-11-03｜主动投入：2 小时｜第 11 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“evaluations/smolvla-v1/generalization.csv”，并满足：变化维度分离；数据split无泄漏；结论受样本和仿真范围限制。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 071 的结果记录，确认其状态和交付物“evaluations/smolvla-v1/baseline.csv”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-072.md` 和 `evidence/day-072/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R25 SmolVLA 官方微调指南](https://huggingface.co/docs/lerobot/v0.6.0/en/smolvla)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 在冻结的未见位置运行评测。 |
| 00:35–01:00 | 任务 2 | 增加有限的颜色/目标区变化，但不声称新任务。 |
| 01:00–01:25 | 任务 3 | 分别报告位置和视觉属性变化。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜在冻结的未见位置运行评测。

1. 在 `logs/day-072.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-072/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜增加有限的颜色/目标区变化，但不声称新任务。

1. 在 `logs/day-072.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把仿真器/适配器/外部服务访问、协议转换和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 每条实际执行命令连同退出码追加到 `evidence/day-072/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜分别报告位置和视觉属性变化。

1. 在 `logs/day-072.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 发布/提交前逐条核对证据 ID、个人贡献、上游来源、simulation-only/真实设备边界和禁用表述；运行隐私检查并人工搜索联系方式、设备标识、密钥和公司材料。
3. 记录实际提交版本、目标链接和时间；外部是否回复、合并或录用是后续状态，不在当天伪造成果，也不高频自动化操作网站。
4. 每条实际执行命令连同退出码追加到 `evidence/day-072/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

- 主交付物：evaluations/smolvla-v1/generalization.csv
- 日志：`logs/day-072.md`
- 原始证据目录：`evidence/day-072/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：变化维度分离；数据split无泄漏；结论受样本和仿真范围限制。
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
> [[#D072 详细执行｜未见位置与物体属性变化|← Day 072]] · [[#导航|↑ 文档导航]] · [[#D074 详细执行｜ACT 与 SmolVLA 同口径对比|Day 074 →]]

#### D073 详细执行｜语言改写与歧义评测

> 计划日期：2026-11-04｜主动投入：2 小时｜第 11 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“evaluations/smolvla-v1/language.csv”，并满足：每类语言有预定义预期；歧义指令安全处理；所有结果可追溯。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 072 的结果记录，确认其状态和交付物“evaluations/smolvla-v1/generalization.csv”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-073.md` 和 `evidence/day-073/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R25 SmolVLA 官方微调指南](https://huggingface.co/docs/lerobot/v0.6.0/en/smolvla)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 测试等价改写、词序变化和不支持指令。 |
| 00:35–01:00 | 任务 2 | 不支持或歧义指令必须拒绝/暂停而非随意动作。 |
| 01:00–01:25 | 任务 3 | 记录每条语言与结果的对应关系。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜测试等价改写、词序变化和不支持指令。

1. 在 `logs/day-073.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-073/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜不支持或歧义指令必须拒绝/暂停而非随意动作。

1. 在 `logs/day-073.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-073/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜记录每条语言与结果的对应关系。

1. 在 `logs/day-073.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-073/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

- 主交付物：evaluations/smolvla-v1/language.csv
- 日志：`logs/day-073.md`
- 原始证据目录：`evidence/day-073/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：每类语言有预定义预期；歧义指令安全处理；所有结果可追溯。
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
> [[#D073 详细执行｜语言改写与歧义评测|← Day 073]] · [[#导航|↑ 文档导航]] · [[#D075 详细执行｜Policy Server 本地基线|Day 075 →]]

#### D074 详细执行｜ACT 与 SmolVLA 同口径对比

> 计划日期：2026-11-05｜主动投入：2 小时｜第 11 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“reports/act-vs-smolvla.md”，并满足：对比表可重算；差异有统计与限制；负面结果保留。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 073 的结果记录，确认其状态和交付物“evaluations/smolvla-v1/language.csv”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-074.md` 和 `evidence/day-074/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R19 Hugging Face Model Cards](https://huggingface.co/docs/hub/en/model-cards)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 统一任务、seed、环境版本、成功规则和样本量。 |
| 00:35–01:00 | 任务 2 | 比较成功、失败类型、推理时延和资源。 |
| 01:00–01:25 | 任务 3 | 避免用不同协议选择性证明某模型更好。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜统一任务、seed、环境版本、成功规则和样本量。

1. 在 `logs/day-074.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 执行前记录当前版本、磁盘空间和回滚点；只按固定版本/commit操作，命令失败时保留完整 stderr，不连续尝试多个来源的安装方案。
5. 完成后从新 shell 或干净 build 目录复验；记录实际版本、产物 hash、退出码和启动现象，避免依赖当前终端的隐式环境变量。
6. 每条实际执行命令连同退出码追加到 `evidence/day-074/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜比较成功、失败类型、推理时延和资源。

1. 在 `logs/day-074.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-074/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜避免用不同协议选择性证明某模型更好。

1. 在 `logs/day-074.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 先用 1 batch/少量 step 验证 shape、loss、保存和恢复，再冻结数据 revision、配置、seed、代码 commit 与算力预算后启动正式任务。
5. 观察首个训练/验证周期并主动验证一次 checkpoint 恢复；训练仍在运行时写 RUNNING，不把开始训练、下载权重或官方 demo 当成完成微调。
6. 每条实际执行命令连同退出码追加到 `evidence/day-074/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

- 主交付物：reports/act-vs-smolvla.md
- 日志：`logs/day-074.md`
- 原始证据目录：`evidence/day-074/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：对比表可重算；差异有统计与限制；负面结果保留。
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
> [[#D074 详细执行｜ACT 与 SmolVLA 同口径对比|← Day 074]] · [[#导航|↑ 文档导航]] · [[#D076 详细执行｜Robot Client、队列与动作年龄|Day 076 →]]

#### D075 详细执行｜Policy Server 本地基线

> 计划日期：2026-11-06｜主动投入：2 小时｜第 11 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“async/policy_server、OpenAPI/协议文档”，并满足：接口测试通过；模型版本进入响应；过期观测不产生可执行动作。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 074 的结果记录，确认其状态和交付物“reports/act-vs-smolvla.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-075.md` 和 `evidence/day-075/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R10 LeRobot 异步推理](https://huggingface.co/docs/lerobot/v0.6.0/en/async)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 将策略封装为版本化Policy Server。 |
| 00:35–01:00 | 任务 2 | 定义请求ID、观测时间、模型版本、动作块和错误码。 |
| 01:00–01:25 | 任务 3 | 测试重复请求、过期观测和模型加载失败。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜将策略封装为版本化Policy Server。

1. 在 `logs/day-075.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
5. 把仿真器/适配器/外部服务访问、协议转换和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
6. 每条实际执行命令连同退出码追加到 `evidence/day-075/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜定义请求ID、观测时间、模型版本、动作块和错误码。

1. 在 `logs/day-075.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 先用 1 batch/少量 step 验证 shape、loss、保存和恢复，再冻结数据 revision、配置、seed、代码 commit 与算力预算后启动正式任务。
5. 观察首个训练/验证周期并主动验证一次 checkpoint 恢复；训练仍在运行时写 RUNNING，不把开始训练、下载权重或官方 demo 当成完成微调。
6. 每条实际执行命令连同退出码追加到 `evidence/day-075/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜测试重复请求、过期观测和模型加载失败。

1. 在 `logs/day-075.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
4. 先用 1 batch/少量 step 验证 shape、loss、保存和恢复，再冻结数据 revision、配置、seed、代码 commit 与算力预算后启动正式任务。
5. 观察首个训练/验证周期并主动验证一次 checkpoint 恢复；训练仍在运行时写 RUNNING，不把开始训练、下载权重或官方 demo 当成完成微调。
6. 每条实际执行命令连同退出码追加到 `evidence/day-075/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

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

- 主交付物：async/policy_server、OpenAPI/协议文档
- 日志：`logs/day-075.md`
- 原始证据目录：`evidence/day-075/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：接口测试通过；模型版本进入响应；过期观测不产生可执行动作。
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
> [[#D075 详细执行｜Policy Server 本地基线|← Day 075]] · [[#导航|↑ 文档导航]] · [[#D077 详细执行｜模型与异步推理阶段门|Day 077 →]]

#### D076 详细执行｜Robot Client、队列与动作年龄

> 计划日期：2026-11-07｜主动投入：4 小时｜第 11 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“async/robot_client、tests/test_action_queue.py”，并满足：过期/乱序动作被丢弃；断线后本地停止；恢复需重新握手。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 075 的结果记录，确认其状态和交付物“async/policy_server、OpenAPI/协议文档”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-076.md` 和 `evidence/day-076/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R10 LeRobot 异步推理](https://huggingface.co/docs/lerobot/v0.6.0/en/async)；[R11 LeRobot RTC](https://huggingface.co/docs/lerobot/v0.6.0/en/rtc)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 4 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–01:05 | 任务 1 | 实现Robot Client和有限动作队列。 |
| 01:05–02:00 | 任务 2 | 加入动作年龄、队列水位、dead-man和本地限幅。 |
| 02:00–02:55 | 任务 3 | 注入延迟、乱序、断线和服务器重启。 |
| 02:55–03:40 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 03:40–04:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜实现Robot Client和有限动作队列。

1. 在 `logs/day-076.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把仿真器/适配器/外部服务访问、协议转换和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 每条实际执行命令连同退出码追加到 `evidence/day-076/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜加入动作年龄、队列水位、dead-man和本地限幅。

1. 在 `logs/day-076.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-076/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜注入延迟、乱序、断线和服务器重启。

1. 在 `logs/day-076.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-076/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：async/robot_client、tests/test_action_queue.py
- 日志：`logs/day-076.md`
- 原始证据目录：`evidence/day-076/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：过期/乱序动作被丢弃；断线后本地停止；恢复需重新握手。
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
> [[#D076 详细执行｜Robot Client、队列与动作年龄|← Day 076]] · [[#导航|↑ 文档导航]] · [[#D078 详细执行｜云服务器资源与安全基线|Day 078 →]]

#### D077 详细执行｜模型与异步推理阶段门

> 计划日期：2026-11-08｜主动投入：2 小时｜第 11 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“releases/policy-stack-v0.1.md”，并满足：两种策略至少一种完整通过；安全守卫测试通过；接口版本已冻结。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 076 的结果记录，确认其状态和交付物“async/robot_client、tests/test_action_queue.py”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-077.md` 和 `evidence/day-077/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R10 LeRobot 异步推理](https://huggingface.co/docs/lerobot/v0.6.0/en/async)；[R11 LeRobot RTC](https://huggingface.co/docs/lerobot/v0.6.0/en/rtc)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 演示本地MuJoCo Robot Client连接独立Policy Server。 |
| 00:35–01:00 | 任务 2 | 分别运行ACT和SmolVLA并记录资源与故障恢复。 |
| 01:00–01:25 | 任务 3 | 冻结可进入云端平台的接口版本。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜演示本地MuJoCo Robot Client连接独立Policy Server。

1. 在 `logs/day-077.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-077/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜分别运行ACT和SmolVLA并记录资源与故障恢复。

1. 在 `logs/day-077.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-077/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜冻结可进入云端平台的接口版本。

1. 在 `logs/day-077.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-077/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

- 主交付物：releases/policy-stack-v0.1.md
- 日志：`logs/day-077.md`
- 原始证据目录：`evidence/day-077/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：两种策略至少一种完整通过；安全守卫测试通过；接口版本已冻结。
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

### 第 12 周详细执行｜4核8GB云端控制平面与Headless仿真

> [!info]- 当日导航
> [[#D077 详细执行｜模型与异步推理阶段门|← Day 077]] · [[#导航|↑ 文档导航]] · [[#D079 详细执行｜MuJoCo OSMesa Headless 容器|Day 079 →]]

#### D078 详细执行｜云服务器资源与安全基线

> 计划日期：2026-11-09｜主动投入：2 小时｜第 12 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“deploy/cloud-inventory.md、resource-limits.yaml”，并满足：有部署前资源快照；端口无冲突；服务内存和日志上限明确。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 077 的结果记录，确认其状态和交付物“releases/policy-stack-v0.1.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-078.md` 和 `evidence/day-078/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R21 Docker 文档](https://docs.docker.com/)；H02 4核8GB云服务器。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 记录4核8GB服务器OS、CPU、内存、磁盘、端口和现有容器占用。 |
| 00:35–01:00 | 任务 2 | 为EdgeVLA设置独立目录、用户/容器、资源限制和日志轮转。 |
| 01:00–01:25 | 任务 3 | 确认不影响现有个人网站与其他服务。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜记录4核8GB服务器OS、CPU、内存、磁盘、端口和现有容器占用。

1. 在 `logs/day-078.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-078/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜为EdgeVLA设置独立目录、用户/容器、资源限制和日志轮转。

1. 在 `logs/day-078.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-078/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜确认不影响现有个人网站与其他服务。

1. 在 `logs/day-078.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-078/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `docker compose config --quiet`
- `docker compose build`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：deploy/cloud-inventory.md、resource-limits.yaml
- 日志：`logs/day-078.md`
- 原始证据目录：`evidence/day-078/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：有部署前资源快照；端口无冲突；服务内存和日志上限明确。
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
> [[#D078 详细执行｜云服务器资源与安全基线|← Day 078]] · [[#导航|↑ 文档导航]] · [[#D080 详细执行｜实验注册表 API|Day 080 →]]

#### D079 详细执行｜MuJoCo OSMesa Headless 容器

> 计划日期：2026-11-10｜主动投入：2 小时｜第 12 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“containers/mujoco-headless、benchmarks/cloud-smoke.csv”，并满足：无显示服务器运行通过；内存不超过设定上限；镜像不包含训练权重。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 078 的结果记录，确认其状态和交付物“deploy/cloud-inventory.md、resource-limits.yaml”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-079.md` 和 `evidence/day-079/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R16 MuJoCo 文档](https://mujoco.readthedocs.io/en/stable/)；[R21 Docker 文档](https://docs.docker.com/)；[R52 MuJoCo Headless Rendering](https://github.com/google-deepmind/dm_control#rendering)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 构建只含CPU MuJoCo、OSMesa和测试依赖的镜像。 |
| 00:35–01:00 | 任务 2 | 运行固定Franka模型的无渲染与低分辨率smoke。 |
| 01:00–01:25 | 任务 3 | 限制CPU/内存并保存峰值和退出码。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜构建只含CPU MuJoCo、OSMesa和测试依赖的镜像。

1. 在 `logs/day-079.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 执行前记录当前版本、磁盘空间和回滚点；只按固定版本/commit操作，命令失败时保留完整 stderr，不连续尝试多个来源的安装方案。
3. 完成后从新 shell 或干净 build 目录复验；记录实际版本、产物 hash、退出码和启动现象，避免依赖当前终端的隐式环境变量。
4. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
5. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
6. 每条实际执行命令连同退出码追加到 `evidence/day-079/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜运行固定Franka模型的无渲染与低分辨率smoke。

1. 在 `logs/day-079.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
4. 先用 1 batch/少量 step 验证 shape、loss、保存和恢复，再冻结数据 revision、配置、seed、代码 commit 与算力预算后启动正式任务。
5. 观察首个训练/验证周期并主动验证一次 checkpoint 恢复；训练仍在运行时写 RUNNING，不把开始训练、下载权重或官方 demo 当成完成微调。
6. 每条实际执行命令连同退出码追加到 `evidence/day-079/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜限制CPU/内存并保存峰值和退出码。

1. 在 `logs/day-079.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-079/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `docker compose config --quiet`
- `docker compose build`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：containers/mujoco-headless、benchmarks/cloud-smoke.csv
- 日志：`logs/day-079.md`
- 原始证据目录：`evidence/day-079/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：无显示服务器运行通过；内存不超过设定上限；镜像不包含训练权重。
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
> [[#D079 详细执行｜MuJoCo OSMesa Headless 容器|← Day 079]] · [[#导航|↑ 文档导航]] · [[#D081 详细执行｜轻量元数据数据库与迁移|Day 081 →]]

#### D080 详细执行｜实验注册表 API

> 计划日期：2026-11-11｜主动投入：2 小时｜第 12 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“platform/api、OpenAPI文档”，并满足：API测试通过；状态转换原子；不存在把任务完成状态提前写入的路径。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 079 的结果记录，确认其状态和交付物“containers/mujoco-headless、benchmarks/cloud-smoke.csv”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-080.md` 和 `evidence/day-080/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R47 FastAPI Documentation](https://fastapi.tiangolo.com/)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 实现project、experiment、run、artifact metadata和evaluation接口。 |
| 00:35–01:00 | 任务 2 | 所有对象使用不可变ID、版本和状态机。 |
| 01:00–01:25 | 任务 3 | 为重复提交、非法状态转换和分页编写测试。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜实现project、experiment、run、artifact metadata和evaluation接口。

1. 在 `logs/day-080.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把仿真器/适配器/外部服务访问、协议转换和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 每条实际执行命令连同退出码追加到 `evidence/day-080/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜所有对象使用不可变ID、版本和状态机。

1. 在 `logs/day-080.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 每条实际执行命令连同退出码追加到 `evidence/day-080/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜为重复提交、非法状态转换和分页编写测试。

1. 在 `logs/day-080.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把仿真器/适配器/外部服务访问、协议转换和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
5. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
6. 每条实际执行命令连同退出码追加到 `evidence/day-080/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `npm run typecheck`
- `npm test`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：platform/api、OpenAPI文档
- 日志：`logs/day-080.md`
- 原始证据目录：`evidence/day-080/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：API测试通过；状态转换原子；不存在把任务完成状态提前写入的路径。
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
> [[#D080 详细执行｜实验注册表 API|← Day 080]] · [[#导航|↑ 文档导航]] · [[#D082 详细执行｜Artifact 与对象存储接口|Day 082 →]]

#### D081 详细执行｜轻量元数据数据库与迁移

> 计划日期：2026-11-12｜主动投入：2 小时｜第 12 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“platform/migrations、schema.md、恢复日志”，并满足：空库可迁移；备份可恢复；数据库不保存大视频或模型二进制。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 080 的结果记录，确认其状态和交付物“platform/api、OpenAPI文档”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-081.md` 和 `evidence/day-081/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R48 PostgreSQL Documentation](https://www.postgresql.org/docs/)；H02 4核8GB云服务器。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 优先使用PostgreSQL；资源不足可用SQLite并记录限制。 |
| 00:35–01:00 | 任务 2 | 设计项目、数据集、模型、评测、设备和审计表。 |
| 01:00–01:25 | 任务 3 | 实现向前迁移、备份和恢复测试。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜优先使用PostgreSQL；资源不足可用SQLite并记录限制。

1. 在 `logs/day-081.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-081/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜设计项目、数据集、模型、评测、设备和审计表。

1. 在 `logs/day-081.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 只读列出的官方/一手资料，先写出要回答的 3～5 个问题；阅读时逐条记录“结论、出处、适用版本、仍不确定项”，禁止只收藏链接。
3. 合上资料后用自己的话重写结论，并用一个反例或边界条件检验理解；无法解释的术语放入问题清单，不用“熟悉”代替掌握。
4. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
5. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
6. 每条实际执行命令连同退出码追加到 `evidence/day-081/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜实现向前迁移、备份和恢复测试。

1. 在 `logs/day-081.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把仿真器/适配器/外部服务访问、协议转换和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
5. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
6. 每条实际执行命令连同退出码追加到 `evidence/day-081/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

- 主交付物：platform/migrations、schema.md、恢复日志
- 日志：`logs/day-081.md`
- 原始证据目录：`evidence/day-081/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：空库可迁移；备份可恢复；数据库不保存大视频或模型二进制。
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
> [[#D081 详细执行｜轻量元数据数据库与迁移|← Day 081]] · [[#导航|↑ 文档导航]] · [[#D083 详细执行｜MQTT/WebSocket 状态与任务|Day 083 →]]

#### D082 详细执行｜Artifact 与对象存储接口

> 计划日期：2026-11-13｜主动投入：2 小时｜第 12 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“platform/artifacts、docs/storage-policy.md”，并满足：校验和验证通过；大文件不进入数据库/Git；未配置对象存储时可降级本地目录。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 081 的结果记录，确认其状态和交付物“platform/migrations、schema.md、恢复日志”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-082.md` 和 `evidence/day-082/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R49 MinIO Documentation](https://min.io/docs/minio/linux/index.html)；H05 数据与模型存储。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 定义本地文件、S3/MinIO兼容的ArtifactStore接口。 |
| 00:35–01:00 | 任务 2 | 只在云服务器保存小样本和清单，大数据指向对象存储。 |
| 01:00–01:25 | 任务 3 | 实现校验和、断点上传和不存在对象处理。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜定义本地文件、S3/MinIO兼容的ArtifactStore接口。

1. 在 `logs/day-082.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 每条实际执行命令连同退出码追加到 `evidence/day-082/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜只在云服务器保存小样本和清单，大数据指向对象存储。

1. 在 `logs/day-082.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 每批开始前锁定 task/spec 与数据 schema；每个样本生成唯一 ID，记录MuJoCo/真实设备来源、时间、操作者/上游、有效性和失败原因。
3. 每完成一小批立即跑质量检查和 checksum；原始数据只追加不静默改写，无效样本保留在 manifest 并标明排除原因。
4. 每条实际执行命令连同退出码追加到 `evidence/day-082/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜实现校验和、断点上传和不存在对象处理。

1. 在 `logs/day-082.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把仿真器/适配器/外部服务访问、协议转换和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 每条实际执行命令连同退出码追加到 `evidence/day-082/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

- 主交付物：platform/artifacts、docs/storage-policy.md
- 日志：`logs/day-082.md`
- 原始证据目录：`evidence/day-082/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：校验和验证通过；大文件不进入数据库/Git；未配置对象存储时可降级本地目录。
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
> [[#D082 详细执行｜Artifact 与对象存储接口|← Day 082]] · [[#导航|↑ 文档导航]] · [[#D084 详细执行｜云端控制平面 v0.1 部署|Day 084 →]]

#### D083 详细执行｜MQTT/WebSocket 状态与任务

> 计划日期：2026-11-14｜主动投入：4 小时｜第 12 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“platform/messaging、protocol/cloud-v1.md”，并满足：重复/过期命令不重复执行；断线可见；MQTT不承载伺服实时闭环。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 082 的结果记录，确认其状态和交付物“platform/artifacts、docs/storage-policy.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-083.md` 和 `evidence/day-083/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R30 OASIS MQTT 5.0 规范](https://docs.oasis-open.org/mqtt/mqtt/v5.0/mqtt-v5.0.html)；[R50 EMQX Documentation](https://docs.emqx.com/)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 4 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–01:05 | 任务 1 | 设计设备心跳、任务状态、日志摘要和非实时命令主题。 |
| 01:05–02:00 | 任务 2 | 加入QoS、过期、幂等、重连和权限边界。 |
| 02:00–02:55 | 任务 3 | 模拟Robot Client上线、断线、重复消息和过期任务。 |
| 02:55–03:40 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 03:40–04:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜设计设备心跳、任务状态、日志摘要和非实时命令主题。

1. 在 `logs/day-083.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 每条实际执行命令连同退出码追加到 `evidence/day-083/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜加入QoS、过期、幂等、重连和权限边界。

1. 在 `logs/day-083.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-083/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜模拟Robot Client上线、断线、重复消息和过期任务。

1. 在 `logs/day-083.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-083/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

- 主交付物：platform/messaging、protocol/cloud-v1.md
- 日志：`logs/day-083.md`
- 原始证据目录：`evidence/day-083/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：重复/过期命令不重复执行；断线可见；MQTT不承载伺服实时闭环。
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
> [[#D083 详细执行｜MQTT/WebSocket 状态与任务|← Day 083]] · [[#导航|↑ 文档导航]] · [[#D085 详细执行｜认证、项目与权限|Day 085 →]]

#### D084 详细执行｜云端控制平面 v0.1 部署

> 计划日期：2026-11-15｜主动投入：2 小时｜第 12 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“deploy/cloud-compose、releases/cloud-v0.1.md”，并满足：4核8GB服务器稳定运行；一次任务闭环通过；现有服务无回归。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 083 的结果记录，确认其状态和交付物“platform/messaging、protocol/cloud-v1.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-084.md` 和 `evidence/day-084/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R21 Docker 文档](https://docs.docker.com/)；H02 4核8GB云服务器。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 用Compose部署API、数据库、MQTT和headless worker。 |
| 00:35–01:00 | 任务 2 | 执行健康检查、资源监控、备份和回滚。 |
| 01:00–01:25 | 任务 3 | 从本地提交一次仿真smoke任务并回收结果。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜用Compose部署API、数据库、MQTT和headless worker。

1. 在 `logs/day-084.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-084/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜执行健康检查、资源监控、备份和回滚。

1. 在 `logs/day-084.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-084/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜从本地提交一次仿真smoke任务并回收结果。

1. 在 `logs/day-084.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 发布/提交前逐条核对证据 ID、个人贡献、上游来源、simulation-only/真实设备边界和禁用表述；运行隐私检查并人工搜索联系方式、设备标识、密钥和公司材料。
3. 记录实际提交版本、目标链接和时间；外部是否回复、合并或录用是后续状态，不在当天伪造成果，也不高频自动化操作网站。
4. 每条实际执行命令连同退出码追加到 `evidence/day-084/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

- 主交付物：deploy/cloud-compose、releases/cloud-v0.1.md
- 日志：`logs/day-084.md`
- 原始证据目录：`evidence/day-084/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：4核8GB服务器稳定运行；一次任务闭环通过；现有服务无回归。
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

### 第 13 周详细执行｜EdgeVLA Web 平台与实验闭环

> [!info]- 当日导航
> [[#D084 详细执行｜云端控制平面 v0.1 部署|← Day 084]] · [[#导航|↑ 文档导航]] · [[#D086 详细执行｜设备、Client 与心跳面板|Day 086 →]]

#### D085 详细执行｜认证、项目与权限

> 计划日期：2026-11-16｜主动投入：2 小时｜第 13 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“platform/auth、security/auth-tests.md”，并满足：权限测试通过；密钥不进入前端；审计记录包含操作者和对象。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 084 的结果记录，确认其状态和交付物“deploy/cloud-compose、releases/cloud-v0.1.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-085.md` 和 `evidence/day-085/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R47 FastAPI Documentation](https://fastapi.tiangolo.com/)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 实现管理员登录、会话、CSRF/Origin和登录限流。 |
| 00:35–01:00 | 任务 2 | 建立项目级资源隔离和只读演示角色。 |
| 01:00–01:25 | 任务 3 | 测试未授权、越权和会话过期。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜实现管理员登录、会话、CSRF/Origin和登录限流。

1. 在 `logs/day-085.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把仿真器/适配器/外部服务访问、协议转换和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 每条实际执行命令连同退出码追加到 `evidence/day-085/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜建立项目级资源隔离和只读演示角色。

1. 在 `logs/day-085.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把仿真器/适配器/外部服务访问、协议转换和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 每条实际执行命令连同退出码追加到 `evidence/day-085/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜测试未授权、越权和会话过期。

1. 在 `logs/day-085.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-085/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：platform/auth、security/auth-tests.md
- 日志：`logs/day-085.md`
- 原始证据目录：`evidence/day-085/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：权限测试通过；密钥不进入前端；审计记录包含操作者和对象。
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
> [[#D085 详细执行｜认证、项目与权限|← Day 085]] · [[#导航|↑ 文档导航]] · [[#D087 详细执行｜数据集与模型注册页面|Day 087 →]]

#### D086 详细执行｜设备、Client 与心跳面板

> 计划日期：2026-11-17｜主动投入：2 小时｜第 13 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“platform/web/devices”，并满足：模拟Client可上线/离线；敏感主机信息已脱敏；告警可复现。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 085 的结果记录，确认其状态和交付物“platform/auth、security/auth-tests.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-086.md` 和 `evidence/day-086/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R50 EMQX Documentation](https://docs.emqx.com/)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 展示Robot Client版本、仿真/真机类型、在线状态和最后心跳。 |
| 00:35–01:00 | 任务 2 | 显示模型、环境和控制模式，不显示本机敏感标识。 |
| 01:00–01:25 | 任务 3 | 实现断线、版本不兼容和时钟漂移告警。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜展示Robot Client版本、仿真/真机类型、在线状态和最后心跳。

1. 在 `logs/day-086.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-086/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜显示模型、环境和控制模式，不显示本机敏感标识。

1. 在 `logs/day-086.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 执行前记录当前版本、磁盘空间和回滚点；只按固定版本/commit操作，命令失败时保留完整 stderr，不连续尝试多个来源的安装方案。
3. 完成后从新 shell 或干净 build 目录复验；记录实际版本、产物 hash、退出码和启动现象，避免依赖当前终端的隐式环境变量。
4. 先用 1 batch/少量 step 验证 shape、loss、保存和恢复，再冻结数据 revision、配置、seed、代码 commit 与算力预算后启动正式任务。
5. 观察首个训练/验证周期并主动验证一次 checkpoint 恢复；训练仍在运行时写 RUNNING，不把开始训练、下载权重或官方 demo 当成完成微调。
6. 每条实际执行命令连同退出码追加到 `evidence/day-086/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜实现断线、版本不兼容和时钟漂移告警。

1. 在 `logs/day-086.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把仿真器/适配器/外部服务访问、协议转换和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 每条实际执行命令连同退出码追加到 `evidence/day-086/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

- 主交付物：platform/web/devices
- 日志：`logs/day-086.md`
- 原始证据目录：`evidence/day-086/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：模拟Client可上线/离线；敏感主机信息已脱敏；告警可复现。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 真实机械臂、GELLO或SO-101当前均为可选扩展：没有授权、SDK、物理急停和安全区域时只执行MuJoCo仿真，不得发送真实动作或声称真机迁移。

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
> [[#D086 详细执行｜设备、Client 与心跳面板|← Day 086]] · [[#导航|↑ 文档导航]] · [[#D088 详细执行｜实验任务与日志页面|Day 088 →]]

#### D087 详细执行｜数据集与模型注册页面

> 计划日期：2026-11-18｜主动投入：2 小时｜第 13 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“platform/web/registry”，并满足：引用保护测试通过；来源和simulation-only醒目；大文件使用签名/受控链接。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 086 的结果记录，确认其状态和交付物“platform/web/devices”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-087.md` 和 `evidence/day-087/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R18 Hugging Face Dataset Cards](https://huggingface.co/docs/hub/en/datasets-cards)；[R19 Hugging Face Model Cards](https://huggingface.co/docs/hub/en/model-cards)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 展示Dataset Card、split、统计、校验和和来源。 |
| 00:35–01:00 | 任务 2 | 展示Model Card、checkpoint、数据revision和兼容schema。 |
| 01:00–01:25 | 任务 3 | 禁止删除被实验或评测引用的artifact。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜展示Dataset Card、split、统计、校验和和来源。

1. 在 `logs/day-087.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-087/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜展示Model Card、checkpoint、数据revision和兼容schema。

1. 在 `logs/day-087.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 先用 1 batch/少量 step 验证 shape、loss、保存和恢复，再冻结数据 revision、配置、seed、代码 commit 与算力预算后启动正式任务。
5. 观察首个训练/验证周期并主动验证一次 checkpoint 恢复；训练仍在运行时写 RUNNING，不把开始训练、下载权重或官方 demo 当成完成微调。
6. 每条实际执行命令连同退出码追加到 `evidence/day-087/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜禁止删除被实验或评测引用的artifact。

1. 在 `logs/day-087.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-087/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

- 主交付物：platform/web/registry
- 日志：`logs/day-087.md`
- 原始证据目录：`evidence/day-087/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：引用保护测试通过；来源和simulation-only醒目；大文件使用签名/受控链接。
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
> [[#D087 详细执行｜数据集与模型注册页面|← Day 087]] · [[#导航|↑ 文档导航]] · [[#D089 详细执行｜评测与失败时间线|Day 089 →]]

#### D088 详细执行｜实验任务与日志页面

> 计划日期：2026-11-19｜主动投入：2 小时｜第 13 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“platform/web/experiments”，并满足：状态与后端一致；取消幂等；日志无token和私人路径。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 087 的结果记录，确认其状态和交付物“platform/web/registry”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-088.md` 和 `evidence/day-088/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R47 FastAPI Documentation](https://fastapi.tiangolo.com/)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 创建训练、评测和headless smoke任务记录。 |
| 00:35–01:00 | 任务 2 | 流式展示状态、阶段日志、资源和失败原因。 |
| 01:00–01:25 | 任务 3 | 任务取消只改变云端任务，不越权控制本地实时运动。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜创建训练、评测和headless smoke任务记录。

1. 在 `logs/day-088.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把仿真器/适配器/外部服务访问、协议转换和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
5. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
6. 每条实际执行命令连同退出码追加到 `evidence/day-088/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜流式展示状态、阶段日志、资源和失败原因。

1. 在 `logs/day-088.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-088/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜任务取消只改变云端任务，不越权控制本地实时运动。

1. 在 `logs/day-088.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-088/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

- 主交付物：platform/web/experiments
- 日志：`logs/day-088.md`
- 原始证据目录：`evidence/day-088/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：状态与后端一致；取消幂等；日志无token和私人路径。
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
> [[#D088 详细执行｜实验任务与日志页面|← Day 088]] · [[#导航|↑ 文档导航]] · [[#D090 详细执行｜远程非实时任务与安全边界|Day 090 →]]

#### D089 详细执行｜评测与失败时间线

> 计划日期：2026-11-20｜主动投入：2 小时｜第 13 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“platform/web/evaluations”，并满足：至少一组ACT/SmolVLA结果可浏览；原始判定不可静默覆盖；失败视频可定位。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 088 的结果记录，确认其状态和交付物“platform/web/experiments”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-089.md` 和 `evidence/day-089/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R19 Hugging Face Model Cards](https://huggingface.co/docs/hub/en/model-cards)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 按模型、任务、seed和失败类型筛选。 |
| 00:35–01:00 | 任务 2 | 同步显示视频、动作、末端轨迹和关键事件。 |
| 01:00–01:25 | 任务 3 | 支持人工备注但保留原始自动判定。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜按模型、任务、seed和失败类型筛选。

1. 在 `logs/day-089.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先用 1 batch/少量 step 验证 shape、loss、保存和恢复，再冻结数据 revision、配置、seed、代码 commit 与算力预算后启动正式任务。
3. 观察首个训练/验证周期并主动验证一次 checkpoint 恢复；训练仍在运行时写 RUNNING，不把开始训练、下载权重或官方 demo 当成完成微调。
4. 每条实际执行命令连同退出码追加到 `evidence/day-089/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜同步显示视频、动作、末端轨迹和关键事件。

1. 在 `logs/day-089.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-089/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜支持人工备注但保留原始自动判定。

1. 在 `logs/day-089.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-089/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

- 主交付物：platform/web/evaluations
- 日志：`logs/day-089.md`
- 原始证据目录：`evidence/day-089/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：至少一组ACT/SmolVLA结果可浏览；原始判定不可静默覆盖；失败视频可定位。
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
> [[#D089 详细执行｜评测与失败时间线|← Day 089]] · [[#导航|↑ 文档导航]] · [[#D091 详细执行｜平台端到端阶段门|Day 091 →]]

#### D090 详细执行｜远程非实时任务与安全边界

> 计划日期：2026-11-21｜主动投入：4 小时｜第 13 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“platform/remote-jobs、threat-boundary.md”，并满足：过期和重复任务被拒绝；权限测试通过；安全边界进入UI与文档。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 089 的结果记录，确认其状态和交付物“platform/web/evaluations”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-090.md` 和 `evidence/day-090/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R30 OASIS MQTT 5.0 规范](https://docs.oasis-open.org/mqtt/mqtt/v5.0/mqtt-v5.0.html)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 4 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–01:05 | 任务 1 | 实现提交headless评测、下载artifact和停止后台任务。 |
| 01:05–02:00 | 任务 2 | 所有远程命令带ID、过期时间、权限和审计。 |
| 02:00–02:55 | 任务 3 | 明确禁止通过公网发送无保护关节/伺服实时控制。 |
| 02:55–03:40 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 03:40–04:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜实现提交headless评测、下载artifact和停止后台任务。

1. 在 `logs/day-090.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把仿真器/适配器/外部服务访问、协议转换和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 执行前记录当前版本、磁盘空间和回滚点；只按固定版本/commit操作，命令失败时保留完整 stderr，不连续尝试多个来源的安装方案。
5. 完成后从新 shell 或干净 build 目录复验；记录实际版本、产物 hash、退出码和启动现象，避免依赖当前终端的隐式环境变量。
6. 每条实际执行命令连同退出码追加到 `evidence/day-090/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜所有远程命令带ID、过期时间、权限和审计。

1. 在 `logs/day-090.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 只读列出的官方/一手资料，先写出要回答的 3～5 个问题；阅读时逐条记录“结论、出处、适用版本、仍不确定项”，禁止只收藏链接。
3. 合上资料后用自己的话重写结论，并用一个反例或边界条件检验理解；无法解释的术语放入问题清单，不用“熟悉”代替掌握。
4. 每条实际执行命令连同退出码追加到 `evidence/day-090/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜明确禁止通过公网发送无保护关节/伺服实时控制。

1. 在 `logs/day-090.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-090/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

- 主交付物：platform/remote-jobs、threat-boundary.md
- 日志：`logs/day-090.md`
- 原始证据目录：`evidence/day-090/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：过期和重复任务被拒绝；权限测试通过；安全边界进入UI与文档。
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
> [[#D090 详细执行｜远程非实时任务与安全边界|← Day 090]] · [[#导航|↑ 文档导航]] · [[#D092 详细执行｜Local/Cloud/GPU Compose 分层|Day 092 →]]

#### D091 详细执行｜平台端到端阶段门

> 计划日期：2026-11-22｜主动投入：2 小时｜第 13 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“releases/platform-v0.1.md、演示视频”，并满足：端到端流程可重复；故障流程可恢复；平台不依赖真实机械臂。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 090 的结果记录，确认其状态和交付物“platform/remote-jobs、threat-boundary.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-091.md` 和 `evidence/day-091/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R21 Docker 文档](https://docs.docker.com/)；[R47 FastAPI Documentation](https://fastapi.tiangolo.com/)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 从Web创建一次MuJoCo headless smoke并显示结果。 |
| 00:35–01:00 | 任务 2 | 注册数据集、ACT、SmolVLA和两份评测报告。 |
| 01:00–01:25 | 任务 3 | 录制成功流程与一个故障恢复流程。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜从Web创建一次MuJoCo headless smoke并显示结果。

1. 在 `logs/day-091.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把仿真器/适配器/外部服务访问、协议转换和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 每条实际执行命令连同退出码追加到 `evidence/day-091/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜注册数据集、ACT、SmolVLA和两份评测报告。

1. 在 `logs/day-091.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
4. 每批开始前锁定 task/spec 与数据 schema；每个样本生成唯一 ID，记录MuJoCo/真实设备来源、时间、操作者/上游、有效性和失败原因。
5. 每完成一小批立即跑质量检查和 checksum；原始数据只追加不静默改写，无效样本保留在 manifest 并标明排除原因。
6. 每条实际执行命令连同退出码追加到 `evidence/day-091/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜录制成功流程与一个故障恢复流程。

1. 在 `logs/day-091.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-091/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

- 主交付物：releases/platform-v0.1.md、演示视频
- 日志：`logs/day-091.md`
- 原始证据目录：`evidence/day-091/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：端到端流程可重复；故障流程可恢复；平台不依赖真实机械臂。
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

### 第 14 周详细执行｜部署、CI、弱网、安全与恢复

> [!info]- 当日导航
> [[#D091 详细执行｜平台端到端阶段门|← Day 091]] · [[#导航|↑ 文档导航]] · [[#D093 详细执行｜配置、密钥与启动前检查|Day 093 →]]

#### D092 详细执行｜Local/Cloud/GPU Compose 分层

> 计划日期：2026-11-23｜主动投入：2 小时｜第 14 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“compose.yaml、containers/、deployment-matrix.md”，并满足：三套profile可独立解析；云镜像无CUDA；依赖边界与部署表一致。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 091 的结果记录，确认其状态和交付物“releases/platform-v0.1.md、演示视频”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-092.md` 和 `evidence/day-092/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R21 Docker 文档](https://docs.docker.com/)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 定义local-sim、cloud-control和gpu-train三套profile。 |
| 00:35–01:00 | 任务 2 | 共享schema和协议，不把GPU依赖装进4核8GB云镜像。 |
| 01:00–01:25 | 任务 3 | 生成镜像SBOM和精确版本。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜定义local-sim、cloud-control和gpu-train三套profile。

1. 在 `logs/day-092.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 每条实际执行命令连同退出码追加到 `evidence/day-092/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜共享schema和协议，不把GPU依赖装进4核8GB云镜像。

1. 在 `logs/day-092.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 每条实际执行命令连同退出码追加到 `evidence/day-092/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜生成镜像SBOM和精确版本。

1. 在 `logs/day-092.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-092/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `docker compose config --quiet`
- `docker compose build`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：compose.yaml、containers/、deployment-matrix.md
- 日志：`logs/day-092.md`
- 原始证据目录：`evidence/day-092/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：三套profile可独立解析；云镜像无CUDA；依赖边界与部署表一致。
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
> [[#D092 详细执行｜Local/Cloud/GPU Compose 分层|← Day 092]] · [[#导航|↑ 文档导航]] · [[#D094 详细执行｜GitHub Actions Headless CI|Day 094 →]]

#### D093 详细执行｜配置、密钥与启动前检查

> 计划日期：2026-11-24｜主动投入：2 小时｜第 14 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“config/schema.json、scripts/preflight.py”，并满足：正常/失败配置测试通过；日志不打印密钥；检查结果可读。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 092 的结果记录，确认其状态和交付物“compose.yaml、containers/、deployment-matrix.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-093.md` 和 `evidence/day-093/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R21 Docker 文档](https://docs.docker.com/)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 建立配置schema和环境变量模板。 |
| 00:35–01:00 | 任务 2 | 检查磁盘、内存、端口、模型/data revision和对象存储。 |
| 01:00–01:25 | 任务 3 | 缺少密钥或版本不兼容时拒绝启动。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜建立配置schema和环境变量模板。

1. 在 `logs/day-093.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
5. 把仿真器/适配器/外部服务访问、协议转换和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
6. 每条实际执行命令连同退出码追加到 `evidence/day-093/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜检查磁盘、内存、端口、模型/data revision和对象存储。

1. 在 `logs/day-093.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先用 1 batch/少量 step 验证 shape、loss、保存和恢复，再冻结数据 revision、配置、seed、代码 commit 与算力预算后启动正式任务。
3. 观察首个训练/验证周期并主动验证一次 checkpoint 恢复；训练仍在运行时写 RUNNING，不把开始训练、下载权重或官方 demo 当成完成微调。
4. 每条实际执行命令连同退出码追加到 `evidence/day-093/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜缺少密钥或版本不兼容时拒绝启动。

1. 在 `logs/day-093.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 执行前记录当前版本、磁盘空间和回滚点；只按固定版本/commit操作，命令失败时保留完整 stderr，不连续尝试多个来源的安装方案。
3. 完成后从新 shell 或干净 build 目录复验；记录实际版本、产物 hash、退出码和启动现象，避免依赖当前终端的隐式环境变量。
4. 每条实际执行命令连同退出码追加到 `evidence/day-093/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：config/schema.json、scripts/preflight.py
- 日志：`logs/day-093.md`
- 原始证据目录：`evidence/day-093/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：正常/失败配置测试通过；日志不打印密钥；检查结果可读。
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
> [[#D093 详细执行｜配置、密钥与启动前检查|← Day 093]] · [[#导航|↑ 文档导航]] · [[#D095 详细执行｜端到端集成与故障矩阵|Day 095 →]]

#### D094 详细执行｜GitHub Actions Headless CI

> 计划日期：2026-11-25｜主动投入：2 小时｜第 14 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“.github/workflows/ci.yml”，并满足：全新runner通过；失败能定位；CI不需要GPU或机械臂。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 093 的结果记录，确认其状态和交付物“config/schema.json、scripts/preflight.py”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-094.md` 和 `evidence/day-094/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R20 GitHub Actions 文档](https://docs.github.com/en/actions)；[R52 MuJoCo Headless Rendering](https://github.com/google-deepmind/dm_control#rendering)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 运行lint、unit、contract、schema和MuJoCo无渲染smoke。 |
| 00:35–01:00 | 任务 2 | 缓存依赖但不缓存私人数据、模型或token。 |
| 01:00–01:25 | 任务 3 | 固定OS、Python和关键依赖，上传脱敏测试报告。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜运行lint、unit、contract、schema和MuJoCo无渲染smoke。

1. 在 `logs/day-094.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
5. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
6. 每条实际执行命令连同退出码追加到 `evidence/day-094/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜缓存依赖但不缓存私人数据、模型或token。

1. 在 `logs/day-094.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先用 1 batch/少量 step 验证 shape、loss、保存和恢复，再冻结数据 revision、配置、seed、代码 commit 与算力预算后启动正式任务。
3. 观察首个训练/验证周期并主动验证一次 checkpoint 恢复；训练仍在运行时写 RUNNING，不把开始训练、下载权重或官方 demo 当成完成微调。
4. 每条实际执行命令连同退出码追加到 `evidence/day-094/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜固定OS、Python和关键依赖，上传脱敏测试报告。

1. 在 `logs/day-094.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
4. 发布/提交前逐条核对证据 ID、个人贡献、上游来源、simulation-only/真实设备边界和禁用表述；运行隐私检查并人工搜索联系方式、设备标识、密钥和公司材料。
5. 记录实际提交版本、目标链接和时间；外部是否回复、合并或录用是后续状态，不在当天伪造成果，也不高频自动化操作网站。
6. 每条实际执行命令连同退出码追加到 `evidence/day-094/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

- 主交付物：.github/workflows/ci.yml
- 日志：`logs/day-094.md`
- 原始证据目录：`evidence/day-094/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：全新runner通过；失败能定位；CI不需要GPU或机械臂。
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
> [[#D094 详细执行｜GitHub Actions Headless CI|← Day 094]] · [[#导航|↑ 文档导航]] · [[#D096 详细执行｜弱网与断线安全|Day 096 →]]

#### D095 详细执行｜端到端集成与故障矩阵

> 计划日期：2026-11-26｜主动投入：2 小时｜第 14 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“tests/e2e、reports/fault-matrix.csv”，并满足：关键链路自动化；每类故障有期望状态；没有假PASS。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 094 的结果记录，确认其状态和交付物“.github/workflows/ci.yml”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-095.md` 和 `evidence/day-095/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R20 GitHub Actions 文档](https://docs.github.com/en/actions)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 覆盖teleop→sim→dataset→policy→evaluation→platform元数据。 |
| 00:35–01:00 | 任务 2 | 注入损坏数据、模型不兼容、API失败和worker崩溃。 |
| 01:00–01:25 | 任务 3 | 区分可重试、需人工和永久失败。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜覆盖teleop→sim→dataset→policy→evaluation→platform元数据。

1. 在 `logs/day-095.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-095/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜注入损坏数据、模型不兼容、API失败和worker崩溃。

1. 在 `logs/day-095.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
4. 先用 1 batch/少量 step 验证 shape、loss、保存和恢复，再冻结数据 revision、配置、seed、代码 commit 与算力预算后启动正式任务。
5. 观察首个训练/验证周期并主动验证一次 checkpoint 恢复；训练仍在运行时写 RUNNING，不把开始训练、下载权重或官方 demo 当成完成微调。
6. 每条实际执行命令连同退出码追加到 `evidence/day-095/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜区分可重试、需人工和永久失败。

1. 在 `logs/day-095.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-095/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

- 主交付物：tests/e2e、reports/fault-matrix.csv
- 日志：`logs/day-095.md`
- 原始证据目录：`evidence/day-095/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：关键链路自动化；每类故障有期望状态；没有假PASS。
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
> [[#D095 详细执行｜端到端集成与故障矩阵|← Day 095]] · [[#导航|↑ 文档导航]] · [[#D097 详细执行｜4核8GB资源与性能优化|Day 097 →]]

#### D096 详细执行｜弱网与断线安全

> 计划日期：2026-11-27｜主动投入：2 小时｜第 14 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“evaluations/network-v1/results.csv”，并满足：所有网络条件有原始结果；旧动作不执行；远程通道明确非硬实时。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 095 的结果记录，确认其状态和交付物“tests/e2e、reports/fault-matrix.csv”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-096.md` 和 `evidence/day-096/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R22 Linux tc-netem](https://man7.org/linux/man-pages/man8/tc-netem.8.html)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 用netem注入延迟、抖动、丢包和乱序。 |
| 00:35–01:00 | 任务 2 | 验证云端任务、Policy Server和Robot Client的动作年龄守卫。 |
| 01:00–01:25 | 任务 3 | 证明断网后本地MuJoCo Client暂停而非继续旧动作。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜用netem注入延迟、抖动、丢包和乱序。

1. 在 `logs/day-096.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-096/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜验证云端任务、Policy Server和Robot Client的动作年龄守卫。

1. 在 `logs/day-096.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-096/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜证明断网后本地MuJoCo Client暂停而非继续旧动作。

1. 在 `logs/day-096.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-096/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：evaluations/network-v1/results.csv
- 日志：`logs/day-096.md`
- 原始证据目录：`evidence/day-096/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：所有网络条件有原始结果；旧动作不执行；远程通道明确非硬实时。
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
> [[#D096 详细执行｜弱网与断线安全|← Day 096]] · [[#导航|↑ 文档导航]] · [[#D098 详细执行｜备份恢复与24小时长稳|Day 098 →]]

#### D097 详细执行｜4核8GB资源与性能优化

> 计划日期：2026-11-28｜主动投入：4 小时｜第 14 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“reports/cloud-performance-v1.md”，并满足：压力条件不OOM；资源限制生效；性能结论有命令和原始数据。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 096 的结果记录，确认其状态和交付物“evaluations/network-v1/results.csv”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-097.md` 和 `evidence/day-097/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R21 Docker 文档](https://docs.docker.com/)；H02 4核8GB云服务器。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 4 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–01:05 | 任务 1 | 测量API、数据库、MQTT、headless worker并发下的CPU/内存/磁盘。 |
| 01:05–02:00 | 任务 2 | 设置容器限制、队列上限、日志轮转和任务并发1。 |
| 02:00–02:55 | 任务 3 | 找到并修复至少一个真实瓶颈或记录无需优化的证据。 |
| 02:55–03:40 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 03:40–04:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜测量API、数据库、MQTT、headless worker并发下的CPU/内存/磁盘。

1. 在 `logs/day-097.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-097/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜设置容器限制、队列上限、日志轮转和任务并发1。

1. 在 `logs/day-097.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-097/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜找到并修复至少一个真实瓶颈或记录无需优化的证据。

1. 在 `logs/day-097.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-097/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

- 主交付物：reports/cloud-performance-v1.md
- 日志：`logs/day-097.md`
- 原始证据目录：`evidence/day-097/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：压力条件不OOM；资源限制生效；性能结论有命令和原始数据。
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
> [[#D097 详细执行｜4核8GB资源与性能优化|← Day 097]] · [[#导航|↑ 文档导航]] · [[#D099 详细执行｜README 与15分钟快速开始|Day 099 →]]

#### D098 详细执行｜备份恢复与24小时长稳

> 计划日期：2026-11-29｜主动投入：2 小时｜第 14 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“reports/soak-24h.md、restore-log.md”，并满足：备份可恢复；任务状态一致；24小时无未解释资源增长。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 097 的结果记录，确认其状态和交付物“reports/cloud-performance-v1.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-098.md` 和 `evidence/day-098/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R21 Docker 文档](https://docs.docker.com/)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 备份数据库、配置和artifact清单，不重复备份大文件。 |
| 00:35–01:00 | 任务 2 | 执行容器重启、服务器重启模拟和上一版本回滚。 |
| 01:00–01:25 | 任务 3 | 运行24小时轻量心跳与周期headless smoke。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜备份数据库、配置和artifact清单，不重复备份大文件。

1. 在 `logs/day-098.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把仿真器/适配器/外部服务访问、协议转换和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 每条实际执行命令连同退出码追加到 `evidence/day-098/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜执行容器重启、服务器重启模拟和上一版本回滚。

1. 在 `logs/day-098.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-098/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜运行24小时轻量心跳与周期headless smoke。

1. 在 `logs/day-098.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
4. 每条实际执行命令连同退出码追加到 `evidence/day-098/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：reports/soak-24h.md、restore-log.md
- 日志：`logs/day-098.md`
- 原始证据目录：`evidence/day-098/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：备份可恢复；任务状态一致；24小时无未解释资源增长。
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

### 第 15 周详细执行｜公开交付、证据与技术表达

> [!info]- 当日导航
> [[#D098 详细执行｜备份恢复与24小时长稳|← Day 098]] · [[#导航|↑ 文档导航]] · [[#D100 详细执行｜架构、数据流与安全边界|Day 100 →]]

#### D099 详细执行｜README 与15分钟快速开始

> 计划日期：2026-11-30｜主动投入：2 小时｜第 15 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“README.md 候选版、quickstart-test.md”，并满足：新用户15分钟内运行headless demo；前置条件明确；没有真机暗示。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 098 的结果记录，确认其状态和交付物“reports/soak-24h.md、restore-log.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-099.md` 和 `evidence/day-099/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R20 GitHub Actions 文档](https://docs.github.com/en/actions)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 说明项目定位、硬件条件、仿真范围和完整闭环。 |
| 00:35–01:00 | 任务 2 | 提供本地viewer、headless CI和云端平台三条路径。 |
| 01:00–01:25 | 任务 3 | 请未参与者按README测试并记录卡点。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜说明项目定位、硬件条件、仿真范围和完整闭环。

1. 在 `logs/day-099.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-099/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜提供本地viewer、headless CI和云端平台三条路径。

1. 在 `logs/day-099.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-099/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜请未参与者按README测试并记录卡点。

1. 在 `logs/day-099.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
4. 发布/提交前逐条核对证据 ID、个人贡献、上游来源、simulation-only/真实设备边界和禁用表述；运行隐私检查并人工搜索联系方式、设备标识、密钥和公司材料。
5. 记录实际提交版本、目标链接和时间；外部是否回复、合并或录用是后续状态，不在当天伪造成果，也不高频自动化操作网站。
6. 每条实际执行命令连同退出码追加到 `evidence/day-099/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `npm run typecheck`
- `npm test`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：README.md 候选版、quickstart-test.md
- 日志：`logs/day-099.md`
- 原始证据目录：`evidence/day-099/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：新用户15分钟内运行headless demo；前置条件明确；没有真机暗示。
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
> [[#D099 详细执行｜README 与15分钟快速开始|← Day 099]] · [[#导航|↑ 文档导航]] · [[#D101 详细执行｜Dataset Card 定稿|Day 101 →]]

#### D100 详细执行｜架构、数据流与安全边界

> 计划日期：2026-12-01｜主动投入：2 小时｜第 15 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“docs/architecture.md、docs/security-boundary.md”，并满足：图与部署一致；实时/非实时边界明确；真机是未来扩展而非已完成。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 099 的结果记录，确认其状态和交付物“README.md 候选版、quickstart-test.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-100.md` 和 `evidence/day-100/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R21 Docker 文档](https://docs.docker.com/)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 绘制本地、云端、GPU、Policy Server和Robot Client。 |
| 00:35–01:00 | 任务 2 | 标出数据、模型、命令、非实时网络和安全守卫。 |
| 01:00–01:25 | 任务 3 | 说明未来真机迁移只替换adapter且必须新增物理安全门。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜绘制本地、云端、GPU、Policy Server和Robot Client。

1. 在 `logs/day-100.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-100/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜标出数据、模型、命令、非实时网络和安全守卫。

1. 在 `logs/day-100.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先用 1 batch/少量 step 验证 shape、loss、保存和恢复，再冻结数据 revision、配置、seed、代码 commit 与算力预算后启动正式任务。
3. 观察首个训练/验证周期并主动验证一次 checkpoint 恢复；训练仍在运行时写 RUNNING，不把开始训练、下载权重或官方 demo 当成完成微调。
4. 每条实际执行命令连同退出码追加到 `evidence/day-100/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜说明未来真机迁移只替换adapter且必须新增物理安全门。

1. 在 `logs/day-100.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-100/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

- 主交付物：docs/architecture.md、docs/security-boundary.md
- 日志：`logs/day-100.md`
- 原始证据目录：`evidence/day-100/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：图与部署一致；实时/非实时边界明确；真机是未来扩展而非已完成。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 真实机械臂、GELLO或SO-101当前均为可选扩展：没有授权、SDK、物理急停和安全区域时只执行MuJoCo仿真，不得发送真实动作或声称真机迁移。
- GPU、显存或预算不足：缩小到 1 batch/少量 step 的 smoke，验证数据和恢复链路后停止；完整训练写 `RUNNING` 或 `BLOCKED`，不能因启动成功写成微调完成。

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
> [[#D100 详细执行｜架构、数据流与安全边界|← Day 100]] · [[#导航|↑ 文档导航]] · [[#D102 详细执行｜ACT/SmolVLA Model Card|Day 102 →]]

#### D101 详细执行｜Dataset Card 定稿

> 计划日期：2026-12-02｜主动投入：2 小时｜第 15 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“DATASET_CARD.md、public-sample/”，并满足：统计可重算；来源为游戏手柄+MuJoCo；不含私人路径和token。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 100 的结果记录，确认其状态和交付物“docs/architecture.md、docs/security-boundary.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-101.md` 和 `evidence/day-101/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R18 Hugging Face Dataset Cards](https://huggingface.co/docs/hub/en/datasets-cards)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 更新数据量、split、任务、采集方式、失败和限制。 |
| 00:35–01:00 | 任务 2 | 提供脱敏小样本或生成脚本，不强制公开全部视频。 |
| 01:00–01:25 | 任务 3 | 核对许可证、校验和和版本。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜更新数据量、split、任务、采集方式、失败和限制。

1. 在 `logs/day-101.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 每批开始前锁定 task/spec 与数据 schema；每个样本生成唯一 ID，记录MuJoCo/真实设备来源、时间、操作者/上游、有效性和失败原因。
3. 每完成一小批立即跑质量检查和 checksum；原始数据只追加不静默改写，无效样本保留在 manifest 并标明排除原因。
4. 每条实际执行命令连同退出码追加到 `evidence/day-101/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜提供脱敏小样本或生成脚本，不强制公开全部视频。

1. 在 `logs/day-101.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 每批开始前锁定 task/spec 与数据 schema；每个样本生成唯一 ID，记录MuJoCo/真实设备来源、时间、操作者/上游、有效性和失败原因。
3. 每完成一小批立即跑质量检查和 checksum；原始数据只追加不静默改写，无效样本保留在 manifest 并标明排除原因。
4. 发布/提交前逐条核对证据 ID、个人贡献、上游来源、simulation-only/真实设备边界和禁用表述；运行隐私检查并人工搜索联系方式、设备标识、密钥和公司材料。
5. 记录实际提交版本、目标链接和时间；外部是否回复、合并或录用是后续状态，不在当天伪造成果，也不高频自动化操作网站。
6. 每条实际执行命令连同退出码追加到 `evidence/day-101/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜核对许可证、校验和和版本。

1. 在 `logs/day-101.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 只读列出的官方/一手资料，先写出要回答的 3～5 个问题；阅读时逐条记录“结论、出处、适用版本、仍不确定项”，禁止只收藏链接。
3. 合上资料后用自己的话重写结论，并用一个反例或边界条件检验理解；无法解释的术语放入问题清单，不用“熟悉”代替掌握。
4. 每条实际执行命令连同退出码追加到 `evidence/day-101/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

- 主交付物：DATASET_CARD.md、public-sample/
- 日志：`logs/day-101.md`
- 原始证据目录：`evidence/day-101/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：统计可重算；来源为游戏手柄+MuJoCo；不含私人路径和token。
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
> [[#D101 详细执行｜Dataset Card 定稿|← Day 101]] · [[#导航|↑ 文档导航]] · [[#D103 详细执行｜成功、失败与系统演示视频|Day 103 →]]

#### D102 详细执行｜ACT/SmolVLA Model Card

> 计划日期：2026-12-03｜主动投入：2 小时｜第 15 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“MODEL_CARD_ACT.md、MODEL_CARD_SMOLVLA.md”，并满足：每个数字可追溯；模型对比同口径；明确不是实机生产部署。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 101 的结果记录，确认其状态和交付物“DATASET_CARD.md、public-sample/”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-102.md` 和 `evidence/day-102/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R19 Hugging Face Model Cards](https://huggingface.co/docs/hub/en/model-cards)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 分别记录数据、配置、训练资源、评测和适用范围。 |
| 00:35–01:00 | 任务 2 | 列出失败分类、已知偏差和不可推导结论。 |
| 01:00–01:25 | 任务 3 | 所有数字链接到冻结协议和原始CSV。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜分别记录数据、配置、训练资源、评测和适用范围。

1. 在 `logs/day-102.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把仿真器/适配器/外部服务访问、协议转换和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
5. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
6. 每条实际执行命令连同退出码追加到 `evidence/day-102/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜列出失败分类、已知偏差和不可推导结论。

1. 在 `logs/day-102.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 每条实际执行命令连同退出码追加到 `evidence/day-102/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜所有数字链接到冻结协议和原始CSV。

1. 在 `logs/day-102.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 每条实际执行命令连同退出码追加到 `evidence/day-102/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

- 主交付物：MODEL_CARD_ACT.md、MODEL_CARD_SMOLVLA.md
- 日志：`logs/day-102.md`
- 原始证据目录：`evidence/day-102/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：每个数字可追溯；模型对比同口径；明确不是实机生产部署。
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
> [[#D102 详细执行｜ACT/SmolVLA Model Card|← Day 102]] · [[#导航|↑ 文档导航]] · [[#D104 详细执行｜一条命令可复现演示|Day 104 →]]

#### D103 详细执行｜成功、失败与系统演示视频

> 计划日期：2026-12-04｜主动投入：2 小时｜第 15 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“demo/edgevla-v1.mp4、旁白稿”，并满足：视频可在3–5分钟解释闭环；失败不剪掉；没有伪造Franka真机画面。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 102 的结果记录，确认其状态和交付物“MODEL_CARD_ACT.md、MODEL_CARD_SMOLVLA.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-103.md` 和 `evidence/day-103/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R16 MuJoCo 文档](https://mujoco.readthedocs.io/en/stable/)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 录制手柄采集、数据回放、ACT/SmolVLA rollout和云端平台。 |
| 00:35–01:00 | 任务 2 | 至少展示一个失败和安全停止。 |
| 01:00–01:25 | 任务 3 | 画面和旁白持续标记MuJoCo simulation。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜录制手柄采集、数据回放、ACT/SmolVLA rollout和云端平台。

1. 在 `logs/day-103.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
3. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
4. 每批开始前锁定 task/spec 与数据 schema；每个样本生成唯一 ID，记录MuJoCo/真实设备来源、时间、操作者/上游、有效性和失败原因。
5. 每完成一小批立即跑质量检查和 checksum；原始数据只追加不静默改写，无效样本保留在 manifest 并标明排除原因。
6. 每条实际执行命令连同退出码追加到 `evidence/day-103/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜至少展示一个失败和安全停止。

1. 在 `logs/day-103.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-103/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜画面和旁白持续标记MuJoCo simulation。

1. 在 `logs/day-103.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-103/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

- 主交付物：demo/edgevla-v1.mp4、旁白稿
- 日志：`logs/day-103.md`
- 原始证据目录：`evidence/day-103/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：视频可在3–5分钟解释闭环；失败不剪掉；没有伪造Franka真机画面。
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
> [[#D103 详细执行｜成功、失败与系统演示视频|← Day 103]] · [[#导航|↑ 文档导航]] · [[#D105 详细执行｜隐私、许可证与v1.0候选发布|Day 105 →]]

#### D104 详细执行｜一条命令可复现演示

> 计划日期：2026-12-05｜主动投入：4 小时｜第 15 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“scripts/demo.sh、reproducibility-report.md”，并满足：两处运行通过；失败时退出码非0；总资源在文档范围内。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 103 的结果记录，确认其状态和交付物“demo/edgevla-v1.mp4、旁白稿”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-104.md` 和 `evidence/day-104/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R21 Docker 文档](https://docs.docker.com/)；H02 4核8GB云服务器。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 4 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–01:05 | 任务 1 | 实现make demo或等价命令启动headless闭环。 |
| 01:05–02:00 | 任务 2 | 下载/生成最小合法资产并验证校验和。 |
| 02:00–02:55 | 任务 3 | 在干净环境和4核8GB云服务器各运行一次。 |
| 02:55–03:40 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 03:40–04:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜实现make demo或等价命令启动headless闭环。

1. 在 `logs/day-104.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先固定接口和一个会失败的测试/夹具；实现最小正常路径后立即运行测试，再补超时、非法输入、重复调用、资源耗尽或断连中的至少一个错误路径。
3. 把仿真器/适配器/外部服务访问、协议转换和业务状态分层；记录关键返回值和错误码，不用无限重试、阻塞延时或全局变量掩盖问题。
4. 执行前记录当前版本、磁盘空间和回滚点；只按固定版本/commit操作，命令失败时保留完整 stderr，不连续尝试多个来源的安装方案。
5. 完成后从新 shell 或干净 build 目录复验；记录实际版本、产物 hash、退出码和启动现象，避免依赖当前终端的隐式环境变量。
6. 每条实际执行命令连同退出码追加到 `evidence/day-104/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜下载/生成最小合法资产并验证校验和。

1. 在 `logs/day-104.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 执行前记录当前版本、磁盘空间和回滚点；只按固定版本/commit操作，命令失败时保留完整 stderr，不连续尝试多个来源的安装方案。
3. 完成后从新 shell 或干净 build 目录复验；记录实际版本、产物 hash、退出码和启动现象，避免依赖当前终端的隐式环境变量。
4. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
5. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
6. 每条实际执行命令连同退出码追加到 `evidence/day-104/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜在干净环境和4核8GB云服务器各运行一次。

1. 在 `logs/day-104.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 执行前记录当前版本、磁盘空间和回滚点；只按固定版本/commit操作，命令失败时保留完整 stderr，不连续尝试多个来源的安装方案。
3. 完成后从新 shell 或干净 build 目录复验；记录实际版本、产物 hash、退出码和启动现象，避免依赖当前终端的隐式环境变量。
4. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
5. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
6. 每条实际执行命令连同退出码追加到 `evidence/day-104/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：scripts/demo.sh、reproducibility-report.md
- 日志：`logs/day-104.md`
- 原始证据目录：`evidence/day-104/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：两处运行通过；失败时退出码非0；总资源在文档范围内。
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
> [[#D104 详细执行｜一条命令可复现演示|← Day 104]] · [[#导航|↑ 文档导航]] · [[#D106 详细执行｜可写入简历的证据审计|Day 106 →]]

#### D105 详细执行｜隐私、许可证与v1.0候选发布

> 计划日期：2026-12-06｜主动投入：2 小时｜第 15 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“release-checklist.md、v1.0.0-rc1”，并满足：隐私检查通过；许可证齐全；发布说明明确无真实机械臂。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 104 的结果记录，确认其状态和交付物“scripts/demo.sh、reproducibility-report.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-105.md` 和 `evidence/day-105/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R20 GitHub Actions 文档](https://docs.github.com/en/actions)；[R44 MuJoCo Menagerie](https://github.com/google-deepmind/mujoco_menagerie)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 扫描密钥、联系方式、公司路径、设备标识和大文件。 |
| 00:35–01:00 | 任务 2 | 核对Menagerie、LeRobot、模型和数据许可证。 |
| 01:00–01:25 | 任务 3 | 只发布通过证据门的仿真、数据、模型和平台范围。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜扫描密钥、联系方式、公司路径、设备标识和大文件。

1. 在 `logs/day-105.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-105/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜核对Menagerie、LeRobot、模型和数据许可证。

1. 在 `logs/day-105.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 只读列出的官方/一手资料，先写出要回答的 3～5 个问题；阅读时逐条记录“结论、出处、适用版本、仍不确定项”，禁止只收藏链接。
3. 合上资料后用自己的话重写结论，并用一个反例或边界条件检验理解；无法解释的术语放入问题清单，不用“熟悉”代替掌握。
4. 先用 1 batch/少量 step 验证 shape、loss、保存和恢复，再冻结数据 revision、配置、seed、代码 commit 与算力预算后启动正式任务。
5. 观察首个训练/验证周期并主动验证一次 checkpoint 恢复；训练仍在运行时写 RUNNING，不把开始训练、下载权重或官方 demo 当成完成微调。
6. 每条实际执行命令连同退出码追加到 `evidence/day-105/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜只发布通过证据门的仿真、数据、模型和平台范围。

1. 在 `logs/day-105.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先用 1 batch/少量 step 验证 shape、loss、保存和恢复，再冻结数据 revision、配置、seed、代码 commit 与算力预算后启动正式任务。
3. 观察首个训练/验证周期并主动验证一次 checkpoint 恢复；训练仍在运行时写 RUNNING，不把开始训练、下载权重或官方 demo 当成完成微调。
4. 发布/提交前逐条核对证据 ID、个人贡献、上游来源、simulation-only/真实设备边界和禁用表述；运行隐私检查并人工搜索联系方式、设备标识、密钥和公司材料。
5. 记录实际提交版本、目标链接和时间；外部是否回复、合并或录用是后续状态，不在当天伪造成果，也不高频自动化操作网站。
6. 每条实际执行命令连同退出码追加到 `evidence/day-105/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

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

- 主交付物：release-checklist.md、v1.0.0-rc1
- 日志：`logs/day-105.md`
- 原始证据目录：`evidence/day-105/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：隐私检查通过；许可证齐全；发布说明明确无真实机械臂。
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

### 第 16 周详细执行｜求职材料、面试与下一阶段

> [!info]- 当日导航
> [[#D105 详细执行｜隐私、许可证与v1.0候选发布|← Day 105]] · [[#导航|↑ 文档导航]] · [[#D107 详细执行｜GitHub 与作品集项目页|Day 107 →]]

#### D106 详细执行｜可写入简历的证据审计

> 计划日期：2026-12-07｜主动投入：2 小时｜第 16 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“career/resume-evidence-v1.csv”，并满足：每条可写表述有证据ID；simulation-only显式；禁用表述为0。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 105 的结果记录，确认其状态和交付物“release-checklist.md、v1.0.0-rc1”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-106.md` 和 `evidence/day-106/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R19 Hugging Face Model Cards](https://huggingface.co/docs/hub/en/model-cards)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 逐条审计代码、数据、训练、评测、平台和部署成果。 |
| 00:35–01:00 | 任务 2 | 为每个数字链接protocol、CSV、commit和环境。 |
| 01:00–01:25 | 任务 3 | 删除任何无法证明的真机、迁移、部署成功或VLA算法研发表述。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜逐条审计代码、数据、训练、评测、平台和部署成果。

1. 在 `logs/day-106.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 只读列出的官方/一手资料，先写出要回答的 3～5 个问题；阅读时逐条记录“结论、出处、适用版本、仍不确定项”，禁止只收藏链接。
3. 合上资料后用自己的话重写结论，并用一个反例或边界条件检验理解；无法解释的术语放入问题清单，不用“熟悉”代替掌握。
4. 在运行前冻结测试对象、版本、环境、样本数、成功/失败定义和停止条件；先做 1 次 pilot 检查记录格式，再批量执行。
5. 保存全部轮次而非最好结果；同时记录中位数/最大值或成功/失败数量，并把异常轮次链接到原始日志、轨迹、视频或数据行。
6. 每条实际执行命令连同退出码追加到 `evidence/day-106/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
7. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
8. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜为每个数字链接protocol、CSV、commit和环境。

1. 在 `logs/day-106.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 执行前记录当前版本、磁盘空间和回滚点；只按固定版本/commit操作，命令失败时保留完整 stderr，不连续尝试多个来源的安装方案。
3. 完成后从新 shell 或干净 build 目录复验；记录实际版本、产物 hash、退出码和启动现象，避免依赖当前终端的隐式环境变量。
4. 每条实际执行命令连同退出码追加到 `evidence/day-106/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜删除任何无法证明的真机、迁移、部署成功或VLA算法研发表述。

1. 在 `logs/day-106.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-106/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

- 主交付物：career/resume-evidence-v1.csv
- 日志：`logs/day-106.md`
- 原始证据目录：`evidence/day-106/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：每条可写表述有证据ID；simulation-only显式；禁用表述为0。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 真实机械臂、GELLO或SO-101当前均为可选扩展：没有授权、SDK、物理急停和安全区域时只执行MuJoCo仿真，不得发送真实动作或声称真机迁移。
- GPU、显存或预算不足：缩小到 1 batch/少量 step 的 smoke，验证数据和恢复链路后停止；完整训练写 `RUNNING` 或 `BLOCKED`，不能因启动成功写成微调完成。

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
> [[#D106 详细执行｜可写入简历的证据审计|← Day 106]] · [[#导航|↑ 文档导航]] · [[#D108 详细执行｜三类定向简历|Day 108 →]]

#### D107 详细执行｜GitHub 与作品集项目页

> 计划日期：2026-12-08｜主动投入：2 小时｜第 16 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“career/portfolio-edgevla.md”，并满足：60秒内能理解项目；链接有效；个人贡献与上游清晰。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 106 的结果记录，确认其状态和交付物“career/resume-evidence-v1.csv”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-107.md` 和 `evidence/day-107/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R20 GitHub Actions 文档](https://docs.github.com/en/actions)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 用问题—方案—架构—证据—限制介绍项目。 |
| 00:35–01:00 | 任务 2 | 突出嵌入式Linux、通信、端云能力如何迁移到机器人系统。 |
| 01:00–01:25 | 任务 3 | 避免堆砌上游功能或展示私人训练资产。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜用问题—方案—架构—证据—限制介绍项目。

1. 在 `logs/day-107.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 每条实际执行命令连同退出码追加到 `evidence/day-107/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜突出嵌入式Linux、通信、端云能力如何迁移到机器人系统。

1. 在 `logs/day-107.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-107/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜避免堆砌上游功能或展示私人训练资产。

1. 在 `logs/day-107.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先用 1 batch/少量 step 验证 shape、loss、保存和恢复，再冻结数据 revision、配置、seed、代码 commit 与算力预算后启动正式任务。
3. 观察首个训练/验证周期并主动验证一次 checkpoint 恢复；训练仍在运行时写 RUNNING，不把开始训练、下载权重或官方 demo 当成完成微调。
4. 每条实际执行命令连同退出码追加到 `evidence/day-107/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

- 主交付物：career/portfolio-edgevla.md
- 日志：`logs/day-107.md`
- 原始证据目录：`evidence/day-107/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：60秒内能理解项目；链接有效；个人贡献与上游清晰。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- GPU、显存或预算不足：缩小到 1 batch/少量 step 的 smoke，验证数据和恢复链路后停止；完整训练写 `RUNNING` 或 `BLOCKED`，不能因启动成功写成微调完成。
- 外部结果不可控：当天只验收本人可控的高质量材料、提交动作和记录；PR 合并、面试回复或 offer 不能作为 PASS 的必要条件，也不能伪造。

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
> [[#D107 详细执行｜GitHub 与作品集项目页|← Day 107]] · [[#导航|↑ 文档导航]] · [[#D109 详细执行｜项目面试故事与技术深挖|Day 109 →]]

#### D108 详细执行｜三类定向简历

> 计划日期：2026-12-09｜主动投入：2 小时｜第 16 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“career/resume-robot-system.md、resume-data-deploy.md、resume-vla-application.md”，并满足：三版事实一致；每版不超过目标篇幅；未写真机或Franka物理部署。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 107 的结果记录，确认其状态和交付物“career/portfolio-edgevla.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-108.md` 和 `evidence/day-108/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R19 Hugging Face Model Cards](https://huggingface.co/docs/hub/en/model-cards)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 生成机器人Linux/系统集成、机器人数据/部署、VLA应用工程三版。 |
| 00:35–01:00 | 任务 2 | 按岗位重排同一真实证据，不制造不同事实。 |
| 01:00–01:25 | 任务 3 | 嵌入式传统版保留4G网关与单灯控制器主线。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜生成机器人Linux/系统集成、机器人数据/部署、VLA应用工程三版。

1. 在 `logs/day-108.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-108/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜按岗位重排同一真实证据，不制造不同事实。

1. 在 `logs/day-108.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-108/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜嵌入式传统版保留4G网关与单灯控制器主线。

1. 在 `logs/day-108.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-108/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

1. 按原文逐字核对：三版事实一致；每版不超过目标篇幅；未写真机或Franka物理部署。
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
> [[#D108 详细执行｜三类定向简历|← Day 108]] · [[#导航|↑ 文档导航]] · [[#D110 详细执行｜模拟面试与反向验证|Day 110 →]]

#### D109 详细执行｜项目面试故事与技术深挖

> 计划日期：2026-12-10｜主动投入：2 小时｜第 16 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“career/interview-story-bank.md”，并满足：每个故事可在2分钟/8分钟两种长度表达；无背诵式虚构。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 108 的结果记录，确认其状态和交付物“career/resume-robot-system.md、resume-data-deploy.md、resume-vla-application.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-109.md` 和 `evidence/day-109/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R03 Hugging Face Robot Learning Course](https://huggingface.co/learn/robotics-course/en/unit0/1)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 准备MuJoCo、遥操作、数据、ACT、SmolVLA、ROS2、云端和安全八类问题。 |
| 00:35–01:00 | 任务 2 | 每类包含设计取舍、失败案例、证据和下一改进。 |
| 01:00–01:25 | 任务 3 | 准备回答为何没有机械臂以及仿真证据的边界。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜准备MuJoCo、遥操作、数据、ACT、SmolVLA、ROS2、云端和安全八类问题。

1. 在 `logs/day-109.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-109/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜每类包含设计取舍、失败案例、证据和下一改进。

1. 在 `logs/day-109.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 先写输入、输出、状态/数据所有权、超时、失败行为和不负责范围；至少比较两个方案，并记录选择理由与放弃方案。
3. 为设计补一个正常序列图和一个故障序列图，再从验收标准反推是否缺少可观测字段、版本或恢复入口。
4. 每条实际执行命令连同退出码追加到 `evidence/day-109/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜准备回答为何没有机械臂以及仿真证据的边界。

1. 在 `logs/day-109.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-109/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`
- `python -m compileall -q src tools tests`
- `python -m pytest -q`
- `colcon build --symlink-install`
- `colcon test`
- `colcon test-result --verbose`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：career/interview-story-bank.md
- 日志：`logs/day-109.md`
- 原始证据目录：`evidence/day-109/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：每个故事可在2分钟/8分钟两种长度表达；无背诵式虚构。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 手柄无法识别、漂移或断连：立即回到键盘输入或固定动作测试；dead-man和动作归零仍是必验项，不用云服务器远程桌面替代本地交互采集。
- GPU、显存或预算不足：缩小到 1 batch/少量 step 的 smoke，验证数据和恢复链路后停止；完整训练写 `RUNNING` 或 `BLOCKED`，不能因启动成功写成微调完成。

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
> [[#D109 详细执行｜项目面试故事与技术深挖|← Day 109]] · [[#导航|↑ 文档导航]] · [[#D111 详细执行｜岗位再分层与首批申请|Day 111 →]]

#### D110 详细执行｜模拟面试与反向验证

> 计划日期：2026-12-11｜主动投入：2 小时｜第 16 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“career/mock-interview-review.md”，并满足：所有问题有PASS/PARTIAL；无法解释的表述从简历移除。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 109 的结果记录，确认其状态和交付物“career/interview-story-bank.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-110.md` 和 `evidence/day-110/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：A06 独立评审者。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 让评审者随机选择代码、指标和失败案例追问。 |
| 00:35–01:00 | 任务 2 | 现场复现至少一个headless demo和一个数据检查。 |
| 01:00–01:25 | 任务 3 | 记录回答不清、证据缺失和过度表述。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜让评审者随机选择代码、指标和失败案例追问。

1. 在 `logs/day-110.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-110/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜现场复现至少一个headless demo和一个数据检查。

1. 在 `logs/day-110.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-110/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜记录回答不清、证据缺失和过度表述。

1. 在 `logs/day-110.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-110/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

- 主交付物：career/mock-interview-review.md
- 日志：`logs/day-110.md`
- 原始证据目录：`evidence/day-110/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：所有问题有PASS/PARTIAL；无法解释的表述从简历移除。
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
> [[#D110 详细执行｜模拟面试与反向验证|← Day 110]] · [[#导航|↑ 文档导航]] · [[#D112 详细执行｜总复盘与下一90天|Day 112 →]]

#### D111 详细执行｜岗位再分层与首批申请

> 计划日期：2026-12-12｜主动投入：4 小时｜第 16 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“career/application-tracker.csv 与3–5份记录”，并满足：岗位硬门槛已检查；材料版本可追溯；反馈不用于伪造经历。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 110 的结果记录，确认其状态和交付物“career/mock-interview-review.md”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-111.md` 和 `evidence/day-111/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R03 Hugging Face Robot Learning Course](https://huggingface.co/learn/robotics-course/en/unit0/1)。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 4 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–01:05 | 任务 1 | 用最新作品重新评估机器人Linux、系统集成、数据工具和VLA应用岗位。 |
| 01:05–02:00 | 任务 2 | 选择3–5个无硬门槛冲突岗位并定向投递。 |
| 02:00–02:55 | 任务 3 | 记录JD、版本、反馈和下一实验，不批量刷投。 |
| 02:55–03:40 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 03:40–04:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜用最新作品重新评估机器人Linux、系统集成、数据工具和VLA应用岗位。

1. 在 `logs/day-111.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-111/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜选择3–5个无硬门槛冲突岗位并定向投递。

1. 在 `logs/day-111.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 发布/提交前逐条核对证据 ID、个人贡献、上游来源、simulation-only/真实设备边界和禁用表述；运行隐私检查并人工搜索联系方式、设备标识、密钥和公司材料。
3. 记录实际提交版本、目标链接和时间；外部是否回复、合并或录用是后续状态，不在当天伪造成果，也不高频自动化操作网站。
4. 每条实际执行命令连同退出码追加到 `evidence/day-111/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜记录JD、版本、反馈和下一实验，不批量刷投。

1. 在 `logs/day-111.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-111/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
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

- 主交付物：career/application-tracker.csv 与3–5份记录
- 日志：`logs/day-111.md`
- 原始证据目录：`evidence/day-111/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：岗位硬门槛已检查；材料版本可追溯；反馈不用于伪造经历。
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
> [[#D111 详细执行｜岗位再分层与首批申请|← Day 111]] · [[#导航|↑ 文档导航]]

#### D112 详细执行｜总复盘与下一90天

> 计划日期：2026-12-13｜主动投入：2 小时｜第 16 周


##### 当天完成定义

今天只在私有学习仓库执行。完成不等于“看过”或“命令跑过”，而是交付“retrospective.md、next-90-days.md、条件化v1.0.0”，并满足：复盘数字真实；下一阶段有预算和进入条件；发布范围与证据一致。

任何没有原始日志、代码版本、环境/硬件条件和失败记录支撑的结论，都不能进入简历或公开项目说明。

##### 开始前检查（10 分钟内）

- [ ] 先打开 Day 111 的结果记录，确认其状态和交付物“career/application-tracker.csv 与3–5份记录”。若为 BLOCKED，只继续与阻塞无关的部分。
- [ ] 进入正确仓库，执行 `git status --short --branch`，记录当前 commit；有不明修改时先停下确认归属，不覆盖旧工作。
- [ ] 创建或打开 `logs/day-112.md` 和 `evidence/day-112/`；填写真实开始时间，不倒填计划日期。
- [ ] 核对资源与设备：[R23 SO-101 开源硬件](https://github.com/TheRobotStudio/SO-ARM100)；[R45 GELLO Software](https://github.com/wuphilipp/gello_software)；H06 SO-101、GELLO或其他真实机械臂。
- [ ] 在日志中写出今天的最小成功条件和明确不做事项；2 小时日最多解决一个主要技术风险，4 小时日最多两个。

##### 2 小时时间盒

| 时间 | 阶段 | 必须完成的动作 |
|---|---|---|
| 00:00–00:10 | 启动与基线 | 记录真实开始时间、commit、环境/硬件状态；确认上一日结果。 |
| 00:10–00:35 | 任务 1 | 汇总256小时实际投入、完成率、成本、失败和最强证据。 |
| 00:35–01:00 | 任务 2 | 根据岗位反馈决定继续仿真深化、购买SO-101/GELLO或寻找实验室真机。 |
| 01:00–01:25 | 任务 3 | 若进入真机阶段，新建安全/授权/硬件计划，不把仿真结果直接写成迁移成功。 |
| 01:25–01:45 | 测试与验收 | 运行当天相关检查，保存原始输出，并逐字核对验收标准。 |
| 01:45–02:00 | 收尾与提交 | 更新证据账本、结果状态和下一入口；测试通过后再提交。 |

到点即停止扩张范围。后台训练、构建和长稳不计入主动工时，但必须遵守墙钟上限。

##### 逐项操作

###### 任务 1｜汇总256小时实际投入、完成率、成本、失败和最强证据。

1. 在 `logs/day-112.md` 的 `task_01` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-112/task-01-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 2｜根据岗位反馈决定继续仿真深化、购买SO-101/GELLO或寻找实验室真机。

1. 在 `logs/day-112.md` 的 `task_02` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-112/task-02-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

###### 任务 3｜若进入真机阶段，新建安全/授权/硬件计划，不把仿真结果直接写成迁移成功。

1. 在 `logs/day-112.md` 的 `task_03` 下先写：输入、预期现象、一个正常用例、一个失败/边界用例。没写预期前不要开始调参。
2. 把任务拆为输入准备、最小动作、可观察结果和失败处理四步；一次只改变一个变量，并保留每一步的命令、版本和结果。
3. 至少完成一个正常场景和一个边界/失败场景；无法触发的场景明确写“未验证”，不凭推测判定通过。
4. 每条实际执行命令连同退出码追加到 `evidence/day-112/task-03-commands.txt`；仿真记录模型/场景commit、seed和配置，只有实际涉及硬件时才追加接线、设备版本与安全条件。
5. 将代码/文档写入当天交付物对应路径；如果使用上游示例，记录上游 URL、tag/commit、原始文件和本人修改范围。
6. 运行正常与失败用例，把结果记为 `PASS`、`PARTIAL` 或 `BLOCKED`。失败记录必须保留，禁止只截取最好的一次。

##### 推荐检查命令

只运行与当天产物有关的命令。尖括号命令是必须根据实际工具链填写的占位符；未替换并真实运行时不能判定 PASS。

- `git status --short`
- `git diff --check`

每条命令必须保存退出码和完整输出。只有截图、没有命令/版本/原始数据的证据按弱证据处理。

##### 当天交付物

- 主交付物：retrospective.md、next-90-days.md、条件化v1.0.0
- 日志：`logs/day-112.md`
- 原始证据目录：`evidence/day-112/`（默认私有；公开前脱敏）
- 证据账本：新增 evidence ID，不覆盖旧记录；记录本人贡献、上游/同伴/AI协助和可公开范围。

##### 验收步骤

1. 按原文逐字核对：复盘数字真实；下一阶段有预算和进入条件；发布范围与证据一致。
2. 运行上述相关检查，测试失败时不得提交“完成”状态。
3. 对硬件/网络/训练指标核对版本、环境、样本量、原始日志和失败样本；缺一项只能 `PARTIAL`。
4. 执行隐私检查：用户名、主机名、IP/MAC、序列号、token、公司路径、受限协议、原始个人视频和联系方式不得进入公开提交。
5. 测试通过后创建单一职责提交；提交信息描述实际产物，不使用“精通”“完成VLA系统”等超范围措辞。

##### 阻塞与降级

- 真实机械臂、GELLO或SO-101当前均为可选扩展：没有授权、SDK、物理急停和安全区域时只执行MuJoCo仿真，不得发送真实动作或声称真机迁移。
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
