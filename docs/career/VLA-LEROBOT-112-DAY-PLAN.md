# EdgeVLA Simulation-to-Cloud Lab：112 天逐日学习与开源项目计划

> 项目状态：**拟建开源作品**。
> 这是个人拟开发作品，不是上游官方同名项目。当前没有真实机械臂，主线以MuJoCo simulation-only完成；真机、SO-101、GELLO或Franka物理设备均不得提前声称。
> 计划周期：2026-08-24 至 2026-12-13，共 16 周 / 112 天 / 256 小时。

## 项目定义与真实性边界

- 项目名称：**EdgeVLA Simulation-to-Cloud Lab**
- 副标题：用MuJoCo Franka、键盘/游戏手柄、LeRobotDataset、ACT/SmolVLA和4核8GB云端控制平面完成仿真到云端闭环
- 仓库状态：Day 3创建独立私有edgevla-lab仓库；第15周通过证据、隐私和许可证审查后，才按真实完成范围公开。
- 简历规则：仿真成果可以在证据门通过后明确写为MuJoCo仿真项目；不得写成真实Franka、SO-101或GELLO部署。
- 现有上游：LeRobot、SO-101/SO-ARM100、LIBERO、ROS2、PyTorch 等；它们不是你的个人项目。
- 个人作品：硬件适配、数据质量、训练评测、安全层、弱网实验、实验平台和公开证据；只有实际完成的部分才能写入简历。

## 时间与执行规则

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

### 本版执行前提

- 每周投入16小时：周一至周五各2小时、周六4小时、周日2小时；训练墙钟时间不计入人工时间。
- 当前没有可持续使用的真实机械臂；主线固定为个人电脑上的MuJoCo Franka仿真、键盘/游戏手柄遥操作和LeRobot数据闭环。
- 4核8GB云服务器只运行轻量API、数据库、MQTT、无界面MuJoCo smoke和CI worker；不运行VLA训练、不连接本地手柄、不承担实时控制。
- ACT/SmolVLA正式训练只在本地可用GPU或设置预算与自动终止的按需GPU上执行；CPU只做数据检查和小型smoke。
- 真实机械臂、SO-101和GELLO均为112天后的可选扩展；没有真机证据时所有材料必须标记MuJoCo simulation-only。
- 所有指标必须带代码、模型、数据、环境、样本量、协议和失败记录；公司源码、私有协议、个人隐私和密钥永不进入公开仓库。

## 资源总表

### 环境隔离规则

| 环境 | 固定规则 |
|---|---|
| 个人电脑交互环境 | 运行MuJoCo viewer、键盘/游戏手柄遥操作、视觉数据采集和本地回放；固定操作系统、Python、LeRobot commit、MuJoCo和手柄映射。 |
| LeRobot 仿真环境 | 选择包含官方 imitation-learning-in-sim/gym_hil 路径的版本并固定tag或commit；使用独立uv环境，禁止浮动main。 |
| ROS2 Jazzy 环境 | 使用Ubuntu 24.04系统ROS2和独立ros2_ws；通过进程/消息桥连接LeRobot环境，不直接混用不兼容rclpy。 |
| 4核8GB云服务器 | 只运行API、数据库、MQTT、静态Web、OSMesa/无渲染MuJoCo smoke；容器限额、任务并发1、日志轮转，不安装GPU训练栈。 |
| 按需GPU训练 | ACT/SmolVLA先本地CPU小smoke，再以固定镜像和预算/时间上限运行；训练配置、数据revision、模型revision和checkpoint必须归档。 |

### 软件、课程与官方文档

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

### 硬件与现场资源

| ID | 资源 | 优先级 | 要求 |
|---|---|---|---|
| H01 | 个人开发电脑 | 必须 | 运行MuJoCo viewer、手柄、数据采集和本地回放；8GB可做最小CPU仿真，16GB以上更稳；训练是否本地执行取决于NVIDIA GPU。 |
| H02 | 4核8GB云服务器 | 已有 | 仅运行轻量Web/API/DB/MQTT、OSMesa或无渲染MuJoCo smoke；任务并发1并设置内存、磁盘和日志上限。 |
| H03 | 现有游戏手柄 | 必须 | 普通双摇杆即可控制XYZ/姿态/夹爪；IMU可选；必须实现dead-man、死区、断连停止和校准配置。 |
| H04 | 按需GPU | 第8–11周 | ACT/SmolVLA训练前先smoke；设置预算、最长时间和自动终止；不得在CPU云服务器强行训练。 |
| H05 | 数据与模型存储 | 第5周前 | 本地至少预留100GB并做校验和；正式训练资产建议独立SSD或对象存储；原始区只追加。 |
| H06 | SO-101、GELLO或其他真实机械臂 | 112天后可选 | 没有也不阻塞v1.0；采购/借用前必须确认SDK、授权、急停、安全区和公开边界。 |

### 账号、权限与协作资源

| ID | 资源 | 要求 |
|---|---|---|
| A01 | [GitHub 账号与独立仓库](https://github.com/) | 学习阶段可先私有；第 15 周通过许可、隐私与安全审查后再公开，启用 Issues、Actions 与 Release |
| A02 | [Hugging Face Hub 账号](https://huggingface.co/) | 用于获准数据集、模型、Dataset Card 和 Model Card；私有资料不得误上传到公开仓库 |
| A03 | [实验跟踪账号](https://wandb.ai/) | W&B 可选；若不用则以本地 MLflow 或结构化日志替代，严禁上传密钥、原始隐私视频和厂商私有数据 |
| A04 | [按量 GPU 与预算告警](https://huggingface.co/docs/hub/jobs) | 仅在本地冒烟和 ACT 验证通过后使用；每个任务必须设置最长时间、费用上限和自动终止 |
| A06 | 独立评审者 | 至少两名未参与对应文档编写的人，可由机械臂同学、软件同事或目标岗位从业者担任；用于任务判定、README 60 秒测试和发布前复核 |

### 预算与采购门

- 前7周只使用现有个人电脑、游戏手柄和4核8GB云服务器，不购买机械臂、GELLO、Jetson或深度相机。
- 云服务器只部署轻量服务和headless smoke；设置容器内存、CPU、磁盘、日志与并发限制，不能影响现有网站。
- ACT/SmolVLA必须先通过本地CPU或小GPU smoke，再启动按需GPU；每个任务设置费用和墙钟上限。
- MuJoCo仿真v1.0可作为完整项目交付；真实硬件是下一阶段加分项，不因求职焦虑虚构迁移。
- 公开前删除公司源码、私有协议、密钥、主机信息、联系方式和未授权数据；所有视频醒目标记simulation。

## 仿真主线与 Day 112 后的可选真机扩展

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

## 16 周总览

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

## 112 天逐日执行表

### 第 1 周｜真实性、环境与项目基线｜2026-08-24～2026-08-30

**本周目标：** 建立单一私有 EdgeVLA 仓库和可复现环境，明确个人电脑、4核8GB云服务器与按需GPU的职责边界。

**阶段门：** 从新 shell 可复现本地环境；MuJoCo CPU 冒烟通过；仓库、证据基线和隐私规则完整。

<a id="day-001"></a>

#### Day 001｜2026-08-24 星期一｜2 小时｜简历预填的职业与能力基线

**详细执行指南：** [Day 001 详细执行指南](daily-guides/day-001.md)

**当天任务**

- [ ] 核对根据现有简历预填的岗位定位与项目证据。
- [ ] 确认处理器、Python/C++、传感器和求职约束等少量未知项；机械臂已确认当前没有。
- [ ] 只保存一份 D001-baseline.md，不重复制作 CSV。

**所需资源：** [R03 Hugging Face Robot Learning Course](https://huggingface.co/learn/robotics-course/en/unit0/1)

**当天交付物：** 一份预填并经本人核对的 D001-baseline.md

**完成验收：** 既有项目和能力边界已核对；未知项可保留待确认；不得把仿真或课程写成真机经验。

<a id="day-002"></a>

#### Day 002｜2026-08-25 星期二｜2 小时｜本地 LeRobot、MuJoCo 与 Python 环境固定

**详细执行指南：** [Day 002 详细执行指南](daily-guides/day-002.md)

**当天任务**

- [ ] 盘点个人电脑的操作系统、CPU、内存、GPU、手柄和磁盘，不把云服务器当作交互采集机。
- [ ] 从 LeRobot 官方仓库选择包含 imitation-learning-in-sim/gym_hil 的版本并固定 tag 或 commit，创建独立 uv 环境。
- [ ] 安装 MuJoCo 与仿真依赖，完成无模型训练的 CPU 导入和最小物理步进测试。

**所需资源：** [R01 LeRobot v0.6.0 官方仓库](https://github.com/huggingface/lerobot/tree/v0.6.0)；[R02 LeRobot 安装指南](https://huggingface.co/docs/lerobot/v0.6.0/en/installation)；[R16 MuJoCo 文档](https://mujoco.readthedocs.io/en/stable/)；[R43 LeRobot Imitation Learning in Simulation](https://huggingface.co/docs/lerobot/main/il_sim)；H01 个人开发电脑

**当天交付物：** docs/environment.md、uv.lock、scripts/smoke_mujoco.py

**完成验收：** 新 shell 可按文档重建环境；记录精确 commit；CPU 物理步进通过；未要求本地具备 NVIDIA GPU。

<a id="day-003"></a>

#### Day 003｜2026-08-26 星期三｜2 小时｜私有仓库、证据账本与基础 CI

**详细执行指南：** [Day 003 详细执行指南](daily-guides/day-003.md)

**当天任务**

- [ ] 创建独立私有 edgevla-lab 仓库并导入 D001-baseline.md。
- [ ] 从预填基线生成 positioning.md 与 evidence-ledger.csv，明确 simulation-only 和个人贡献。
- [ ] 建立 Python/C++ 格式、测试、隐私扫描和无硬件 CI 骨架。

**所需资源：** [R20 GitHub Actions 文档](https://docs.github.com/en/actions)；[R21 Docker 文档](https://docs.docker.com/)；[A01 GitHub 账号与独立仓库](https://github.com/)

**当天交付物：** 仓库骨架、D001 基线、证据账本、README 状态声明与首个绿色 CI

**完成验收：** 从空目录按 README 可运行最小测试；证据边界保留；仓库无密钥、联系方式、公司源码或私有协议。

<a id="day-004"></a>

#### Day 004｜2026-08-27 星期四｜2 小时｜Python、NumPy 与 PyTorch 数据基线

**详细执行指南：** [Day 004 详细执行指南](daily-guides/day-004.md)

**当天任务**

- [ ] 实现数组、张量、设备和 dtype 的最小实验并记录形状变化。
- [ ] 实现可复现随机种子、Dataset/DataLoader 和小型训练循环。
- [ ] 为错误形状、NaN、设备不一致和随机性编写失败测试。

**所需资源：** [R14 PyTorch Tutorials](https://docs.pytorch.org/tutorials/)

**当天交付物：** labs/python-torch-baseline、tests/test_tensor_pipeline.py

**完成验收：** CPU 上测试通过；两次相同种子结果一致；文档列出 Python/PyTorch 的真实缺口。

<a id="day-005"></a>

#### Day 005｜2026-08-28 星期五｜2 小时｜现代 C++17、CMake 与 Robot I/O 基线

**详细执行指南：** [Day 005 详细执行指南](daily-guides/day-005.md)

**当天任务**

- [ ] 用 C++17 定义最小 Observation、Action 和 RobotInterface。
- [ ] 用 CMake 构建库、示例和 GoogleTest，不依赖真实设备。
- [ ] 测试所有权、越界、超时和无效动作，记录 C 与现代 C++ 的能力边界。

**所需资源：** [R34 C++ Core Guidelines](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines)；[R35 CMake 官方教程](https://cmake.org/cmake/help/latest/guide/tutorial/)；[R42 GoogleTest 官方入门](https://google.github.io/googletest/primer.html)

**当天交付物：** cpp/robot_io_baseline、CMakeLists.txt、单元测试

**完成验收：** Debug/Release 构建通过；不少于8个测试通过；不得将基线练习写成生产级机器人控制经验。

<a id="day-006"></a>

#### Day 006｜2026-08-29 星期六｜4 小时｜MuJoCo 本地与云端无界面冒烟

**详细执行指南：** [Day 006 详细执行指南](daily-guides/day-006.md)

**当天任务**

- [ ] 在个人电脑运行交互 viewer 和固定步数物理仿真，记录实时倍率。
- [ ] 在4核8GB云服务器或等价容器使用 OSMesa/无渲染模式运行同一模型。
- [ ] 比较本地、云端物理步进和低分辨率离屏渲染，确定云服务器只承担无界面测试。

**所需资源：** [R16 MuJoCo 文档](https://mujoco.readthedocs.io/en/stable/)；[R21 Docker 文档](https://docs.docker.com/)；[R52 MuJoCo Headless Rendering](https://github.com/google-deepmind/dm_control#rendering)；H01 个人开发电脑；H02 4核8GB云服务器

**当天交付物：** reports/mujoco-local-cloud-smoke.md、容器冒烟日志

**完成验收：** 本地交互和云端 headless 均通过；云端内存峰值有记录；未在云端承诺实时手柄操作或VLA训练。

<a id="day-007"></a>

#### Day 007｜2026-08-30 星期日｜2 小时｜第一周可复现与范围复盘

**详细执行指南：** [Day 007 详细执行指南](daily-guides/day-007.md)

**当天任务**

- [ ] 从干净目录重建环境并执行 Python、C++ 和 MuJoCo 测试。
- [ ] 审计依赖锁、许可证、隐私与磁盘占用。
- [ ] 将阻塞项转成 issue，并冻结第二周的 Franka MuJoCo 目标。

**所需资源：** [R20 GitHub Actions 文档](https://docs.github.com/en/actions)；[R21 Docker 文档](https://docs.docker.com/)

**当天交付物：** reviews/week-01.md 与重建日志

**完成验收：** 在60分钟内完成重建和测试；所有失败有 issue；项目仍明确为仿真优先、真机可选。

### 第 2 周｜MuJoCo 与 Franka 仿真环境｜2026-08-31～2026-09-06

**本周目标：** 基于 MuJoCo Menagerie 的 Franka Panda 建立可测试、可重置、可离屏渲染的操作环境。

**阶段门：** 固定模型版本和许可证；场景、控制、观测、相机、安全边界和 headless 运行全部通过。

<a id="day-008"></a>

#### Day 008｜2026-08-31 星期一｜2 小时｜Franka 模型、许可证与版本固定

**详细执行指南：** [Day 008 详细执行指南](daily-guides/day-008.md)

**当天任务**

- [ ] 从 MuJoCo Menagerie 获取 Franka Panda 模型并固定 commit。
- [ ] 记录模型、mesh、第三方许可证和可公开边界。
- [ ] 加载 scene.xml，输出关节、执行器、传感器和相机清单。

**所需资源：** [R16 MuJoCo 文档](https://mujoco.readthedocs.io/en/stable/)；[R44 MuJoCo Menagerie](https://github.com/google-deepmind/mujoco_menagerie)

**当天交付物：** sim/franka、docs/model-inventory.md、licenses/

**完成验收：** 模型在本地和CI可加载；commit与许可证明确；关节/执行器数量由脚本自动校验。

<a id="day-009"></a>

#### Day 009｜2026-09-01 星期二｜2 小时｜关节、执行器与传感器观测

**详细执行指南：** [Day 009 详细执行指南](daily-guides/day-009.md)

**当天任务**

- [ ] 逐项读取 qpos、qvel、ctrl、末端位姿和接触信息。
- [ ] 实现关节限位与控制范围检查。
- [ ] 对无效 ctrl、越界索引和缺失传感器编写测试。

**所需资源：** [R16 MuJoCo 文档](https://mujoco.readthedocs.io/en/stable/)；[R44 MuJoCo Menagerie](https://github.com/google-deepmind/mujoco_menagerie)

**当天交付物：** edgevla_sim/observation.py、tests/test_observation.py

**完成验收：** 固定模型下观测 schema 稳定；非法控制被拒绝；数值无 NaN/Inf。

<a id="day-010"></a>

#### Day 010｜2026-09-02 星期三｜2 小时｜桌面、方块、容器与相机场景

**详细执行指南：** [Day 010 详细执行指南](daily-guides/day-010.md)

**当天任务**

- [ ] 建立桌面、目标方块、放置区和固定世界坐标。
- [ ] 增加前视与腕部可选相机，先使用低分辨率。
- [ ] 保存场景随机种子并测试物体不穿模、不在不可达区生成。

**所需资源：** [R16 MuJoCo 文档](https://mujoco.readthedocs.io/en/stable/)；[R44 MuJoCo Menagerie](https://github.com/google-deepmind/mujoco_menagerie)

**当天交付物：** sim/scenes/pick_cube.xml、tests/test_scene_reset.py

**完成验收：** 100次重置无穿模；对象位姿可复现；相机输出尺寸和dtype固定。

<a id="day-011"></a>

#### Day 011｜2026-09-03 星期四｜2 小时｜正运动学、逆运动学与末端位姿

**详细执行指南：** [Day 011 详细执行指南](daily-guides/day-011.md)

**当天任务**

- [ ] 读取末端执行器位置和四元数并验证坐标系。
- [ ] 实现增量式 XYZ 目标到关节控制的 IK 路径。
- [ ] 对不可达、奇异和过大步长执行限幅或失败返回。

**所需资源：** [R16 MuJoCo 文档](https://mujoco.readthedocs.io/en/stable/)；[R44 MuJoCo Menagerie](https://github.com/google-deepmind/mujoco_menagerie)

**当天交付物：** edgevla_sim/kinematics.py、reports/ik-cases.csv

**完成验收：** 至少20个可达目标收敛；不可达目标不产生失控动作；坐标系图与代码一致。

<a id="day-012"></a>

#### Day 012｜2026-09-04 星期五｜2 小时｜安全边界、复位与确定性

**详细执行指南：** [Day 012 详细执行指南](daily-guides/day-012.md)

**当天任务**

- [ ] 定义末端工作空间、关节、速度和单步位移上限。
- [ ] 实现 reset、暂停、急停状态和动作清空。
- [ ] 用相同种子复现初始状态并注入越界动作。

**所需资源：** [R16 MuJoCo 文档](https://mujoco.readthedocs.io/en/stable/)

**当天交付物：** edgevla_sim/safety.py、tests/test_safety.py

**完成验收：** 越界动作100%被夹紧或拒绝；急停后控制量归零；相同种子状态一致。

<a id="day-013"></a>

#### Day 013｜2026-09-05 星期六｜4 小时｜离屏渲染与性能基准

**详细执行指南：** [Day 013 详细执行指南](daily-guides/day-013.md)

**当天任务**

- [ ] 分别测试无渲染、128×128、256×256 OSMesa 离屏渲染。
- [ ] 记录个人电脑和4核8GB云服务器的步进速度、CPU、内存和磁盘。
- [ ] 确定采集分辨率、FPS和云端CI配置，不追求漂亮高分辨率。

**所需资源：** [R16 MuJoCo 文档](https://mujoco.readthedocs.io/en/stable/)；[R52 MuJoCo Headless Rendering](https://github.com/google-deepmind/dm_control#rendering)；H02 4核8GB云服务器

**当天交付物：** benchmarks/mujoco-rendering.csv、reports/render-budget.md

**完成验收：** 三种模式均有原始数据；云端配置不会OOM；最终采集参数有明确理由。

<a id="day-014"></a>

#### Day 014｜2026-09-06 星期日｜2 小时｜仿真环境 v0.1 阶段门

**详细执行指南：** [Day 014 详细执行指南](daily-guides/day-014.md)

**当天任务**

- [ ] 提供一条命令启动本地 viewer，一条命令运行 headless 测试。
- [ ] 录制30秒环境演示并同时保留失败案例。
- [ ] 冻结 v0.1 schema、模型commit和第二周复现说明。

**所需资源：** [R16 MuJoCo 文档](https://mujoco.readthedocs.io/en/stable/)；[R44 MuJoCo Menagerie](https://github.com/google-deepmind/mujoco_menagerie)

**当天交付物：** releases/sim-env-v0.1.md 与演示视频

**完成验收：** 新环境可在30分钟内复现；全部测试通过；演示明确标记 MuJoCo simulation。

### 第 3 周｜键盘与游戏手柄遥操作｜2026-09-07～2026-09-13

**本周目标：** 完成带 dead-man、安全限幅、XYZ/姿态/夹爪控制和 Episode 状态机的低成本仿真示教。

**阶段门：** 键盘和现有游戏手柄至少一种稳定可用；遥操作可重复完成简单抓取准备动作并记录完整输入。

<a id="day-015"></a>

#### Day 015｜2026-09-07 星期一｜2 小时｜键盘 XYZ 最小控制

**详细执行指南：** [Day 015 详细执行指南](daily-guides/day-015.md)

**当天任务**

- [ ] 实现方向键控制 XY、Shift 控制 Z、Ctrl 控制夹爪的映射。
- [ ] 加入 space dead-man，未按住时动作必须为零。
- [ ] 记录按键、目标增量、实际末端位姿和限幅结果。

**所需资源：** [R43 LeRobot Imitation Learning in Simulation](https://huggingface.co/docs/lerobot/main/il_sim)

**当天交付物：** teleop/keyboard.py、tests/test_keyboard_map.py

**完成验收：** 所有映射有测试；释放dead-man后下一周期动作归零；可完成末端三轴移动。

<a id="day-016"></a>

#### Day 016｜2026-09-08 星期二｜2 小时｜游戏手柄识别、轴校准与死区

**详细执行指南：** [Day 016 详细执行指南](daily-guides/day-016.md)

**当天任务**

- [ ] 在个人电脑识别现有手柄的轴、按钮、VID/PID和操作系统映射。
- [ ] 实现轴归一化、死区、反向、漂移检测和配置保存。
- [ ] 断开手柄、轴卡死和未知型号时进入安全停止。

**所需资源：** [R43 LeRobot Imitation Learning in Simulation](https://huggingface.co/docs/lerobot/main/il_sim)；[R46 SDL Gamepad Documentation](https://wiki.libsdl.org/SDL3/CategoryGamepad)；H03 现有游戏手柄

**当天交付物：** teleop/gamepad.py、configs/gamepad.yaml、校准日志

**完成验收：** 静止漂移低于配置死区；断连被检测；不在云服务器直连本地手柄。

<a id="day-017"></a>

#### Day 017｜2026-09-09 星期三｜2 小时｜手柄 XYZ 增量与 dead-man

**详细执行指南：** [Day 017 详细执行指南](daily-guides/day-017.md)

**当天任务**

- [ ] 将左右摇杆映射为末端 XYZ 增量，保留可配置灵敏度。
- [ ] 指定肩键为 dead-man，并区分暂停、复位和退出。
- [ ] 用轨迹日志检查指令、IK结果和实际末端运动方向。

**所需资源：** [R43 LeRobot Imitation Learning in Simulation](https://huggingface.co/docs/lerobot/main/il_sim)；[R46 SDL Gamepad Documentation](https://wiki.libsdl.org/SDL3/CategoryGamepad)

**当天交付物：** teleop/gamepad_xyz.py、reports/gamepad-xyz.md

**完成验收：** 三个轴方向与文档一致；松开dead-man立即停止；无突然跳变。

<a id="day-018"></a>

#### Day 018｜2026-09-10 星期四｜2 小时｜姿态、夹爪与控制模式切换

**详细执行指南：** [Day 018 详细执行指南](daily-guides/day-018.md)

**当天任务**

- [ ] 用第二摇杆/按键实现 roll-pitch-yaw 增量和夹爪。
- [ ] 实现位置模式、姿态模式切换及切换时的零增量。
- [ ] 若手柄有IMU，只作为可选实验，不作为计划完成条件。

**所需资源：** [R43 LeRobot Imitation Learning in Simulation](https://huggingface.co/docs/lerobot/main/il_sim)；[R46 SDL Gamepad Documentation](https://wiki.libsdl.org/SDL3/CategoryGamepad)

**当天交付物：** teleop/gamepad_pose.py、tests/test_mode_switch.py

**完成验收：** 模式切换无跳变；姿态和夹爪受限幅；无IMU手柄也能完成验收。

<a id="day-019"></a>

#### Day 019｜2026-09-11 星期五｜2 小时｜Episode 录制状态机

**详细执行指南：** [Day 019 详细执行指南](daily-guides/day-019.md)

**当天任务**

- [ ] 定义 IDLE、ARMED、RECORDING、SUCCESS、FAILURE、DISCARDED 状态。
- [ ] 将开始、成功、失败、重置映射到键盘和手柄按钮。
- [ ] 保证失败Episode和丢弃原因也进入日志，不静默删除。

**所需资源：** [R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；[R43 LeRobot Imitation Learning in Simulation](https://huggingface.co/docs/lerobot/main/il_sim)

**当天交付物：** recording/episode_fsm.py、tests/test_episode_fsm.py

**完成验收：** 状态转换覆盖率完整；非法转换被拒绝；每个Episode有唯一ID和结束原因。

<a id="day-020"></a>

#### Day 020｜2026-09-12 星期六｜4 小时｜遥操作时延、抖动与故障注入

**详细执行指南：** [Day 020 详细执行指南](daily-guides/day-020.md)

**当天任务**

- [ ] 测量输入采样、IK、物理步进和渲染的阶段时延。
- [ ] 注入低帧率、手柄断连、长按和动作尖峰。
- [ ] 调整控制频率、平滑和单步上限，同时保留原始对比。

**所需资源：** [R16 MuJoCo 文档](https://mujoco.readthedocs.io/en/stable/)；[R43 LeRobot Imitation Learning in Simulation](https://huggingface.co/docs/lerobot/main/il_sim)

**当天交付物：** reports/teleop-latency.csv、fault-cases/

**完成验收：** 每个阶段有P50/P95；断连和尖峰不会越界；参数写入版本化配置。

<a id="day-021"></a>

#### Day 021｜2026-09-13 星期日｜2 小时｜遥操作 v0.1 演示与复盘

**详细执行指南：** [Day 021 详细执行指南](daily-guides/day-021.md)

**当天任务**

- [ ] 用键盘和手柄各完成至少3次到达目标位姿。
- [ ] 录制成功与失败视频，叠加输入和末端轨迹。
- [ ] 决定后续主输入设备；GELLO仅列为可选扩展。

**所需资源：** [R43 LeRobot Imitation Learning in Simulation](https://huggingface.co/docs/lerobot/main/il_sim)；[R45 GELLO Software](https://github.com/wuphilipp/gello_software)；H03 现有游戏手柄

**当天交付物：** releases/teleop-v0.1.md、成功/失败演示

**完成验收：** 至少一种输入连续3次完成目标；失败可解释；没有把GELLO或真机写成已完成。

### 第 4 周｜Robot I/O、LeRobot 适配与回放｜2026-09-14～2026-09-20

**本周目标：** 把 MuJoCo、键盘和游戏手柄接入统一 Robot/Teleoperator 契约，并生成 LeRobotDataset 兼容数据。

**阶段门：** 同一 Observation/Action schema 支持在线控制、录制、回放和契约测试；数据可被 LeRobot 工具读取。

<a id="day-022"></a>

#### Day 022｜2026-09-14 星期一｜2 小时｜Observation/Action Schema 冻结

**详细执行指南：** [Day 022 详细执行指南](daily-guides/day-022.md)

**当天任务**

- [ ] 定义关节、末端位姿、夹爪、图像、时间戳和任务文本字段。
- [ ] 明确单位、坐标系、dtype、shape、频率和必选/可选字段。
- [ ] 为版本不兼容、字段缺失和shape错误提供显式报错。

**所需资源：** [R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；[R05 LeRobot 自定义硬件](https://huggingface.co/docs/lerobot/v0.6.0/en/integrate_hardware)

**当天交付物：** schemas/robot-io-v1.json、docs/robot-io-contract.md

**完成验收：** schema验证覆盖正常和失败样本；单位与坐标系无歧义；版本号不可省略。

<a id="day-023"></a>

#### Day 023｜2026-09-15 星期二｜2 小时｜MuJoCoRobot 适配器

**详细执行指南：** [Day 023 详细执行指南](daily-guides/day-023.md)

**当天任务**

- [ ] 实现 connect、disconnect、get_observation、send_action、reset。
- [ ] 隔离 MuJoCo model/data，不让上层直接访问底层对象。
- [ ] 测试重复连接、断开后调用、重置和动作超时。

**所需资源：** [R05 LeRobot 自定义硬件](https://huggingface.co/docs/lerobot/v0.6.0/en/integrate_hardware)；[R16 MuJoCo 文档](https://mujoco.readthedocs.io/en/stable/)

**当天交付物：** packages/edgevla_robot/mujoco_robot.py

**完成验收：** Robot契约测试全部通过；错误状态不崩溃；无真实硬件依赖。

<a id="day-024"></a>

#### Day 024｜2026-09-16 星期三｜2 小时｜Keyboard/Gamepad Teleoperator 适配器

**详细执行指南：** [Day 024 详细执行指南](daily-guides/day-024.md)

**当天任务**

- [ ] 实现统一 Teleoperator 接口和配置对象。
- [ ] 将dead-man、模式、复位和Episode事件从动作向量中分离。
- [ ] 用录制输入回放验证同一输入产生一致目标动作。

**所需资源：** [R05 LeRobot 自定义硬件](https://huggingface.co/docs/lerobot/v0.6.0/en/integrate_hardware)；[R43 LeRobot Imitation Learning in Simulation](https://huggingface.co/docs/lerobot/main/il_sim)

**当天交付物：** packages/edgevla_teleop/

**完成验收：** 键盘和手柄共享契约；控制事件不混入模型动作；回放结果可复现。

<a id="day-025"></a>

#### Day 025｜2026-09-17 星期四｜2 小时｜LeRobotDataset v3 字段映射

**详细执行指南：** [Day 025 详细执行指南](daily-guides/day-025.md)

**当天任务**

- [ ] 将 robot schema 映射到 LeRobotDataset feature。
- [ ] 生成最小1个Episode，包含状态、动作、任务和相机。
- [ ] 用官方工具读取、统计和可视化，记录精确版本。

**所需资源：** [R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；[R43 LeRobot Imitation Learning in Simulation](https://huggingface.co/docs/lerobot/main/il_sim)

**当天交付物：** dataset/minimal-v3、docs/feature-map.md

**完成验收：** 官方读取/可视化通过；feature/action shape一致；没有上传私人数据。

<a id="day-026"></a>

#### Day 026｜2026-09-18 星期五｜2 小时｜时间戳、图像与动作同步

**详细执行指南：** [Day 026 详细执行指南](daily-guides/day-026.md)

**当天任务**

- [ ] 使用单调时钟记录采样、动作发送和物理步进时间。
- [ ] 实现低帧率、重复帧、动作缺失和延迟检测。
- [ ] 保存原始时间戳，不用事后修改掩盖同步问题。

**所需资源：** [R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)

**当天交付物：** recording/synchronizer.py、tests/test_sync.py

**完成验收：** 合成异常全部被发现；正常样本同步误差有统计；原始时间戳只追加。

<a id="day-027"></a>

#### Day 027｜2026-09-19 星期六｜4 小时｜录制、回放与契约测试

**详细执行指南：** [Day 027 详细执行指南](daily-guides/day-027.md)

**当天任务**

- [ ] 实现record/replay CLI和固定种子回放。
- [ ] 将录制动作重新输入 MuJoCo 并比较末端轨迹。
- [ ] 加入截断文件、schema升级和校验和失败测试。

**所需资源：** [R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；[R05 LeRobot 自定义硬件](https://huggingface.co/docs/lerobot/v0.6.0/en/integrate_hardware)

**当天交付物：** cli/record.py、cli/replay.py、contract-tests/

**完成验收：** 同版本回放轨迹误差在预设容差内；损坏数据被拒绝；CLI退出码可靠。

<a id="day-028"></a>

#### Day 028｜2026-09-20 星期日｜2 小时｜接口与数据工具 v0.1 阶段门

**详细执行指南：** [Day 028 详细执行指南](daily-guides/day-028.md)

**当天任务**

- [ ] 从空目录运行键盘/手柄→MuJoCo→LeRobotDataset→回放闭环。
- [ ] 生成架构图、接口说明和一段脱敏示例数据。
- [ ] 复核许可证、版本和simulation-only标识。

**所需资源：** [R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；[R05 LeRobot 自定义硬件](https://huggingface.co/docs/lerobot/v0.6.0/en/integrate_hardware)；[R20 GitHub Actions 文档](https://docs.github.com/en/actions)

**当天交付物：** releases/io-dataset-v0.1.md

**完成验收：** 一条命令完成最小闭环；示例可复现；未暗示支持不存在的真机。

### 第 5 周｜Pick-Cube 任务与第一版示范数据｜2026-09-21～2026-09-27

**本周目标：** 冻结单任务协议，用游戏手柄采集第一批可回放、可质检的仿真示范数据。

**阶段门：** 任务、重置、成功定义和采集协议冻结；至少25个有效Episode通过自动与人工检查。

<a id="day-029"></a>

#### Day 029｜2026-09-21 星期一｜2 小时｜Pick-Cube 任务与成功标准

**详细执行指南：** [Day 029 详细执行指南](daily-guides/day-029.md)

**当天任务**

- [ ] 定义抓取方块并放入目标区的初始状态、控制时长和终止条件。
- [ ] 成功判定同时使用物体位置、夹爪状态和稳定保持时间。
- [ ] 先冻结协议ID，再开始正式采集。

**所需资源：** [R43 LeRobot Imitation Learning in Simulation](https://huggingface.co/docs/lerobot/main/il_sim)

**当天交付物：** dataset/task-spec-pick-cube-v1.md

**完成验收：** 第三方按文档可判断成功/失败；协议含超时和异常规则；协议ID进入每个Episode。

<a id="day-030"></a>

#### Day 030｜2026-09-22 星期二｜2 小时｜确定性重置与位置随机化

**详细执行指南：** [Day 030 详细执行指南](daily-guides/day-030.md)

**当天任务**

- [ ] 实现固定种子和训练范围内的位置随机化。
- [ ] 区分训练位置、验证位置和不可达位置。
- [ ] 测试重置碰撞、物体掉落和失败后的状态清理。

**所需资源：** [R16 MuJoCo 文档](https://mujoco.readthedocs.io/en/stable/)

**当天交付物：** sim/task_reset.py、tests/test_task_reset.py

**完成验收：** 100次重置符合范围；同种子一致；失败Episode不污染下一次。

<a id="day-031"></a>

#### Day 031｜2026-09-23 星期三｜2 小时｜相机与视觉采集参数冻结

**详细执行指南：** [Day 031 详细执行指南](daily-guides/day-031.md)

**当天任务**

- [ ] 比较单相机/双相机和128/256分辨率的资源成本。
- [ ] 冻结主相机、FPS、曝光等仿真假设和裁剪策略。
- [ ] 确保云端CI可关闭渲染，本地采集保留视觉观测。

**所需资源：** [R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；[R16 MuJoCo 文档](https://mujoco.readthedocs.io/en/stable/)

**当天交付物：** configs/cameras-v1.yaml、reports/camera-budget.md

**完成验收：** 配置能在8GB内存环境读取；图像字段稳定；不为追求画质牺牲采集稳定性。

<a id="day-032"></a>

#### Day 032｜2026-09-24 星期四｜2 小时｜5个 Pilot Episode

**详细执行指南：** [Day 032 详细执行指南](daily-guides/day-032.md)

**当天任务**

- [ ] 按冻结协议采集5个示范，保留成功和至少1个失败。
- [ ] 逐个回放并记录控制困难、无效动作和重置问题。
- [ ] 只修改工具缺陷，不在看到结果后改变成功定义。

**所需资源：** [R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；[R43 LeRobot Imitation Learning in Simulation](https://huggingface.co/docs/lerobot/main/il_sim)

**当天交付物：** dataset/pilot-5、reviews/pilot-5.md

**完成验收：** 5个Episode均可回放；失败原因明确；协议未被事后改写。

<a id="day-033"></a>

#### Day 033｜2026-09-25 星期五｜2 小时｜Pilot 复盘与采集工具修正

**详细执行指南：** [Day 033 详细执行指南](daily-guides/day-033.md)

**当天任务**

- [ ] 统计Episode长度、动作范围、静止比例和同步异常。
- [ ] 修正dead-man、灵敏度、重置或UI问题并增加回归测试。
- [ ] 创建数据版本v0.1，不覆盖原Pilot。

**所需资源：** [R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)

**当天交付物：** reports/pilot-quality.csv、dataset/v0.1-manifest.json

**完成验收：** 所有修改有测试；原Pilot校验和保留；下一批参数已冻结。

<a id="day-034"></a>

#### Day 034｜2026-09-26 星期六｜4 小时｜正式采集20个 Episode

**详细执行指南：** [Day 034 详细执行指南](daily-guides/day-034.md)

**当天任务**

- [ ] 按相同协议分两批采集，每批后立即校验和备份。
- [ ] 保留失败、超时和人工放弃Episode及原因。
- [ ] 采集时记录手柄配置、模型commit、随机种子和环境版本。

**所需资源：** [R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；[R43 LeRobot Imitation Learning in Simulation](https://huggingface.co/docs/lerobot/main/il_sim)；H05 数据与模型存储

**当天交付物：** dataset/batch-a-20、checksums.sha256

**完成验收：** 至少20个原始Episode完整落盘；每个有版本和结束原因；损坏为0或有明确隔离记录。

<a id="day-035"></a>

#### Day 035｜2026-09-27 星期日｜2 小时｜第一版 Dataset Card

**详细执行指南：** [Day 035 详细执行指南](daily-guides/day-035.md)

**当天任务**

- [ ] 汇总Pilot和正式批次的来源、任务、字段、许可和限制。
- [ ] 标明全部数据来自MuJoCo仿真与游戏手柄示教。
- [ ] 列出失败分布、已知偏差和禁止推导的结论。

**所需资源：** [R18 Hugging Face Dataset Cards](https://huggingface.co/docs/hub/en/datasets-cards)

**当天交付物：** DATASET_CARD-v0.1.md 与 split-manifest.json

**完成验收：** 至少25个有效Episode进入清单；仿真来源醒目；统计可由脚本重算。

### 第 6 周｜数据质量、扩充与版本发布｜2026-09-28～2026-10-04

**本周目标：** 将手工示范提升为可自动检查、可分割、可版本化并适合训练的数据集。

**阶段门：** 累计至少50个有效Episode；数据校验、人工复核、split、Dataset Card和校验和全部通过。

<a id="day-036"></a>

#### Day 036｜2026-09-28 星期一｜2 小时｜自动数据质量检查器

**详细执行指南：** [Day 036 详细执行指南](daily-guides/day-036.md)

**当天任务**

- [ ] 检查schema、shape、dtype、时间戳单调、NaN、动作范围和文件完整性。
- [ ] 输出机器可读JSON和人工可读Markdown。
- [ ] 为每种损坏构造测试夹具。

**所需资源：** [R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)

**当天交付物：** tools/validate_dataset.py、tests/fixtures/bad-datasets

**完成验收：** 不少于10类异常被稳定识别；正常数据零误报或有解释；CI运行检查器。

<a id="day-037"></a>

#### Day 037｜2026-09-29 星期二｜2 小时｜状态、动作与视觉同步审计

**详细执行指南：** [Day 037 详细执行指南](daily-guides/day-037.md)

**当天任务**

- [ ] 计算相邻时间间隔、动作滞后和图像帧间隔。
- [ ] 可视化末端轨迹、夹爪和物体位置。
- [ ] 识别并隔离同步异常，不做静默插值。

**所需资源：** [R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)

**当天交付物：** reports/sync-quality-v1.md、plots/

**完成验收：** 同步阈值事先定义；异常Episode列表固定；原数据不被改写。

<a id="day-038"></a>

#### Day 038｜2026-09-30 星期三｜2 小时｜图像、视频与磁盘完整性

**详细执行指南：** [Day 038 详细执行指南](daily-guides/day-038.md)

**当天任务**

- [ ] 检查视频可解码、帧数、分辨率、编码和校验和。
- [ ] 模拟截断视频、缺帧和空间不足。
- [ ] 建立只追加原始区、工作区和公开脱敏区。

**所需资源：** [R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；H05 数据与模型存储

**当天交付物：** tools/check_media.py、docs/storage-layout.md

**完成验收：** 媒体异常可检测；磁盘不足安全停止；三个数据区权限和用途明确。

<a id="day-039"></a>

#### Day 039｜2026-10-01 星期四｜2 小时｜成功/失败人工复核界面

**详细执行指南：** [Day 039 详细执行指南](daily-guides/day-039.md)

**当天任务**

- [ ] 生成Episode缩略图、轨迹和关键时间点。
- [ ] 提供成功、失败类型、是否保留和备注字段。
- [ ] 双重检查自动成功判定与人工标签不一致样本。

**所需资源：** [R18 Hugging Face Dataset Cards](https://huggingface.co/docs/hub/en/datasets-cards)

**当天交付物：** tools/review_episodes.py、annotations-v1.csv

**完成验收：** 全部候选Episode有人工标签；不一致样本有复核结论；标签修改可追溯。

<a id="day-040"></a>

#### Day 040｜2026-10-02 星期五｜2 小时｜去重、训练/验证/测试划分

**详细执行指南：** [Day 040 详细执行指南](daily-guides/day-040.md)

**当天任务**

- [ ] 基于种子、初始位姿和轨迹特征检查重复。
- [ ] 按初始位置而非随机行划分，避免相近Episode泄漏。
- [ ] 冻结split manifest和生成脚本。

**所需资源：** [R18 Hugging Face Dataset Cards](https://huggingface.co/docs/hub/en/datasets-cards)

**当天交付物：** dataset/splits-v1.json、tools/make_splits.py

**完成验收：** 划分可重复；不同split无重复ID；测试集在训练前冻结。

<a id="day-041"></a>

#### Day 041｜2026-10-03 星期六｜4 小时｜补采与困难样本扩充

**详细执行指南：** [Day 041 详细执行指南](daily-guides/day-041.md)

**当天任务**

- [ ] 根据失败分布选择困难起点和操作路径。
- [ ] 再采集至少25个候选Episode并逐批校验。
- [ ] 保留成功率变化但不把采集成功率当策略成功率。

**所需资源：** [R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；[R43 LeRobot Imitation Learning in Simulation](https://huggingface.co/docs/lerobot/main/il_sim)

**当天交付物：** dataset/batch-b-25、reports/collection-v2.md

**完成验收：** 累计至少50个有效Episode；困难样本有明确选择依据；所有原始批次有校验和。

<a id="day-042"></a>

#### Day 042｜2026-10-04 星期日｜2 小时｜数据集 v1.0 发布门

**详细执行指南：** [Day 042 详细执行指南](daily-guides/day-042.md)

**当天任务**

- [ ] 重跑全部质量、同步、媒体和split检查。
- [ ] 定稿Dataset Card、统计表、许可和simulation-only声明。
- [ ] 生成私有v1.0 tag；公开上传仍需单独隐私审查。

**所需资源：** [R18 Hugging Face Dataset Cards](https://huggingface.co/docs/hub/en/datasets-cards)；[A02 Hugging Face Hub 账号](https://huggingface.co/)

**当天交付物：** releases/dataset-v1.0.md、DATASET_CARD.md

**完成验收：** 所有检查通过；统计可重算；没有自动上传私人仓库或原始身份数据。

### 第 7 周｜ROS2 与仿真系统集成｜2026-10-05～2026-10-11

**本周目标：** 用 ROS2 Jazzy 暴露 MuJoCo 状态、控制、tf、录包和诊断，同时保持 LeRobot 环境隔离。

**阶段门：** ROS2进程与LeRobot进程通过明确IPC桥接；状态、动作、tf、rosbag和故障诊断可复现。

<a id="day-043"></a>

#### Day 043｜2026-10-05 星期一｜2 小时｜ROS2 Jazzy 与环境隔离

**详细执行指南：** [Day 043 详细执行指南](daily-guides/day-043.md)

**当天任务**

- [ ] 在Ubuntu 24.04安装ROS2 Jazzy并记录apt版本。
- [ ] 建立独立ros2_ws，不在LeRobot uv环境直接混用二进制rclpy。
- [ ] 验证talker/listener和跨进程通信。

**所需资源：** [R12 ROS 2 官方文档](https://docs.ros.org/en/jazzy/index.html)；[R29 ROS 2 Jazzy Python 环境指南](https://docs.ros.org/en/jazzy/How-To-Guides/Using-Python-Packages.html)

**当天交付物：** docs/ros2-environment.md、ros2_ws

**完成验收：** 新shell可启动ROS2；两个Python环境边界清晰；基础通信通过。

<a id="day-044"></a>

#### Day 044｜2026-10-06 星期二｜2 小时｜EdgeVLA 消息、Service 与 Action

**详细执行指南：** [Day 044 详细执行指南](daily-guides/day-044.md)

**当天任务**

- [ ] 定义RobotState、TeleopCommand、EpisodeEvent和Reset服务。
- [ ] 为长操作使用Action并设计取消语义。
- [ ] 测试字段版本、超时和无订阅者情况。

**所需资源：** [R12 ROS 2 官方文档](https://docs.ros.org/en/jazzy/index.html)

**当天交付物：** ros2_ws/src/edgevla_interfaces

**完成验收：** 接口可构建；rosidl检查通过；取消和超时有测试。

<a id="day-045"></a>

#### Day 045｜2026-10-07 星期三｜2 小时｜Franka URDF、tf2 与坐标系

**详细执行指南：** [Day 045 详细执行指南](daily-guides/day-045.md)

**当天任务**

- [ ] 加载Franka描述并定义world、base、ee和camera坐标。
- [ ] 发布静态/动态tf并与MuJoCo坐标约定对照。
- [ ] 用脚本检查树断裂、重复frame和异常跳变。

**所需资源：** [R12 ROS 2 官方文档](https://docs.ros.org/en/jazzy/index.html)；[R13 MoveIt 2 Jazzy 入门](https://moveit.picknik.ai/main/doc/tutorials/getting_started/getting_started.html)；[R44 MuJoCo Menagerie](https://github.com/google-deepmind/mujoco_menagerie)

**当天交付物：** ros2_ws/src/edgevla_description、tf报告

**完成验收：** tf树连通；末端位姿与MuJoCo在容差内一致；坐标图可复核。

<a id="day-046"></a>

#### Day 046｜2026-10-08 星期四｜2 小时｜MuJoCo—ROS2 进程桥

**详细执行指南：** [Day 046 详细执行指南](daily-guides/day-046.md)

**当天任务**

- [ ] 选择socket/ZMQ或ROS消息桥接LeRobot环境与ROS2环境。
- [ ] 发布状态、图像与诊断，接收限幅后的动作。
- [ ] 断开任一进程时进入暂停并清空动作队列。

**所需资源：** [R12 ROS 2 官方文档](https://docs.ros.org/en/jazzy/index.html)；[R29 ROS 2 Jazzy Python 环境指南](https://docs.ros.org/en/jazzy/How-To-Guides/Using-Python-Packages.html)

**当天交付物：** bridge/mujoco_ros2_bridge、集成测试

**完成验收：** 双进程通信稳定；重连不跳变；断连安全停止。

<a id="day-047"></a>

#### Day 047｜2026-10-09 星期五｜2 小时｜rosbag2/MCAP 录制与回放

**详细执行指南：** [Day 047 详细执行指南](daily-guides/day-047.md)

**当天任务**

- [ ] 录制状态、动作、图像、tf和Episode事件。
- [ ] 从MCAP重建时间线并与LeRobotDataset Episode对齐。
- [ ] 测试缺topic、时间跳变和不完整bag。

**所需资源：** [R12 ROS 2 官方文档](https://docs.ros.org/en/jazzy/index.html)

**当天交付物：** bags/sample.mcap、tools/bag_dataset_compare.py

**完成验收：** bag可回放；关键字段与Dataset一致；异常bag有报告。

<a id="day-048"></a>

#### Day 048｜2026-10-10 星期六｜4 小时｜Lifecycle、参数与故障诊断

**详细执行指南：** [Day 048 详细执行指南](daily-guides/day-048.md)

**当天任务**

- [ ] 将桥接节点实现为Lifecycle Node。
- [ ] 暴露控制频率、工作空间、dead-man和超时参数。
- [ ] 注入仿真暂停、消息积压、相机掉帧和动作过期。

**所需资源：** [R12 ROS 2 官方文档](https://docs.ros.org/en/jazzy/index.html)

**当天交付物：** ros2_ws/src/edgevla_bridge、diagnostics/

**完成验收：** 生命周期转换正确；故障可观测；动作过期不执行。

<a id="day-049"></a>

#### Day 049｜2026-10-11 星期日｜2 小时｜ROS2 仿真集成阶段门

**详细执行指南：** [Day 049 详细执行指南](daily-guides/day-049.md)

**当天任务**

- [ ] 用launch文件启动MuJoCo、桥接、tf、诊断和录包。
- [ ] 完成一次手柄操作与数据/MCAP双记录演示。
- [ ] 记录ROS2是仿真系统集成证据，不是真机驱动经验。

**所需资源：** [R12 ROS 2 官方文档](https://docs.ros.org/en/jazzy/index.html)；[R20 GitHub Actions 文档](https://docs.github.com/en/actions)

**当天交付物：** releases/ros2-sim-v0.1.md、launch脚本

**完成验收：** 一条命令启动；录制和回放通过；环境边界与真实性声明完整。

### 第 8 周｜ACT 模仿学习基线｜2026-10-12～2026-10-18

**本周目标：** 用自采MuJoCo数据完成ACT的冒烟、训练、恢复、推理和第一轮冻结评测。

**阶段门：** ACT checkpoint可恢复、可推理；训练配置和数据版本固定；评测不使用训练集成功率冒充泛化。

<a id="day-050"></a>

#### Day 050｜2026-10-12 星期一｜2 小时｜ACT 数据兼容与算力预算

**详细执行指南：** [Day 050 详细执行指南](daily-guides/day-050.md)

**当天任务**

- [ ] 核对LeRobot ACT输入输出与自采feature/action schema。
- [ ] 计算图像、batch、steps和checkpoint的预计磁盘/显存。
- [ ] 确定本地CPU只做smoke，正式训练使用按需GPU并设置费用/时间上限。

**所需资源：** [R06 LeRobot ACT 策略文档](https://huggingface.co/docs/lerobot/v0.6.0/en/act)；[R09 LeRobot 算力指南](https://huggingface.co/docs/lerobot/v0.6.0/en/hardware_guide)；[R28 Hugging Face Jobs GPU 价格](https://huggingface.co/docs/hub/jobs-pricing)；H04 按需GPU

**当天交付物：** configs/act-budget-v1.md、compatibility-report.md

**完成验收：** schema兼容；预算有硬上限；不在4核8GB云服务器启动正式训练。

<a id="day-051"></a>

#### Day 051｜2026-10-13 星期二｜2 小时｜ACT 配置与数据审查

**详细执行指南：** [Day 051 详细执行指南](daily-guides/day-051.md)

**当天任务**

- [ ] 固定dataset版本、split、seed、图像和action chunk配置。
- [ ] 抽样检查训练/验证batch和归一化统计。
- [ ] 将最终测试集权限设为训练阶段只读。

**所需资源：** [R06 LeRobot ACT 策略文档](https://huggingface.co/docs/lerobot/v0.6.0/en/act)；[R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)

**当天交付物：** configs/act-pick-cube-v1.yaml、data-audit.md

**完成验收：** 配置可序列化；batch shape通过；测试split未用于调参。

<a id="day-052"></a>

#### Day 052｜2026-10-14 星期三｜2 小时｜5个Episode过拟合诊断

**详细执行指南：** [Day 052 详细执行指南](daily-guides/day-052.md)

**当天任务**

- [ ] 只用5个训练Episode运行短训练。
- [ ] 验证loss下降、checkpoint保存和单样本推理。
- [ ] 若不能过拟合先修数据/模型链路，不扩大训练。

**所需资源：** [R06 LeRobot ACT 策略文档](https://huggingface.co/docs/lerobot/v0.6.0/en/act)；[R14 PyTorch Tutorials](https://docs.pytorch.org/tutorials/)

**当天交付物：** experiments/act-overfit-5

**完成验收：** 可在小样本上显著拟合或形成明确阻塞报告；checkpoint可加载；命令可复现。

<a id="day-053"></a>

#### Day 053｜2026-10-15 星期四｜2 小时｜GPU 冒烟与训练任务封装

**详细执行指南：** [Day 053 详细执行指南](daily-guides/day-053.md)

**当天任务**

- [ ] 在按需GPU运行小步数smoke，记录驱动、CUDA、PyTorch和显存峰值。
- [ ] 封装启动、日志、超时、预算和自动停止。
- [ ] 验证任务失败不会丢失配置和最后checkpoint。

**所需资源：** [R06 LeRobot ACT 策略文档](https://huggingface.co/docs/lerobot/v0.6.0/en/act)；[R09 LeRobot 算力指南](https://huggingface.co/docs/lerobot/v0.6.0/en/hardware_guide)；[R28 Hugging Face Jobs GPU 价格](https://huggingface.co/docs/hub/jobs-pricing)

**当天交付物：** experiments/act-gpu-smoke、scripts/run_gpu_job.sh

**完成验收：** smoke通过；资源数据完整；超过预算/时间会自动终止。

<a id="day-054"></a>

#### Day 054｜2026-10-16 星期五｜2 小时｜ACT v1 正式训练

**详细执行指南：** [Day 054 详细执行指南](daily-guides/day-054.md)

**当天任务**

- [ ] 使用冻结数据与配置启动训练。
- [ ] 将训练墙钟与人工工作分开，人工只检查日志和异常。
- [ ] 保存配置、git commit、数据revision、曲线和checkpoint索引。

**所需资源：** [R06 LeRobot ACT 策略文档](https://huggingface.co/docs/lerobot/v0.6.0/en/act)；[R17 Weights & Biases 文档](https://docs.wandb.ai/)

**当天交付物：** experiments/act-v1

**完成验收：** 任务启动并产生有效checkpoint；元数据齐全；无须在2小时人工时间盒内强行训练结束。

<a id="day-055"></a>

#### Day 055｜2026-10-17 星期六｜4 小时｜恢复训练与Checkpoint治理

**详细执行指南：** [Day 055 详细执行指南](daily-guides/day-055.md)

**当天任务**

- [ ] 从中间checkpoint恢复并确认step、优化器和随机状态。
- [ ] 对中断、损坏checkpoint和磁盘不足做失败测试。
- [ ] 选择候选checkpoint时只参考验证指标，不查看冻结测试结果。

**所需资源：** [R06 LeRobot ACT 策略文档](https://huggingface.co/docs/lerobot/v0.6.0/en/act)

**当天交付物：** reports/act-resume.md、checkpoint-manifest.json

**完成验收：** 恢复轨迹连续；损坏文件被拒绝；候选选择规则事先记录。

<a id="day-056"></a>

#### Day 056｜2026-10-18 星期日｜2 小时｜ACT 离线检查与上线前门

**详细执行指南：** [Day 056 详细执行指南](daily-guides/day-056.md)

**当天任务**

- [ ] 对验证batch运行推理并检查动作分布、饱和和NaN。
- [ ] 在MuJoCo中以低速、短时、可中止方式做预检。
- [ ] 冻结下一周评测协议和ACT候选checkpoint。

**所需资源：** [R06 LeRobot ACT 策略文档](https://huggingface.co/docs/lerobot/v0.6.0/en/act)；[R19 Hugging Face Model Cards](https://huggingface.co/docs/hub/en/model-cards)

**当天交付物：** safety/act-preflight.md、MODEL_CARD_ACT-draft.md

**完成验收：** 无NaN/越界动作；预检不崩溃；checkpoint和评测协议均已冻结。

### 第 9 周｜ACT 仿真评测与鲁棒性｜2026-10-19～2026-10-25

**本周目标：** 用冻结协议评测ACT，并通过位置、光照、相机和失败分类形成可信的simulation-only结论。

**阶段门：** 评测包含原始逐轮结果、失败视频、样本量和环境版本；所有数字可重算。

<a id="day-057"></a>

#### Day 057｜2026-10-19 星期一｜2 小时｜ACT 评测协议冻结

**详细执行指南：** [Day 057 详细执行指南](daily-guides/day-057.md)

**当天任务**

- [ ] 定义任务、初始位置、最大步数、成功保持和失败类型。
- [ ] 固定checkpoint、模型commit、仿真commit和随机种子列表。
- [ ] 在跑测试前生成只读protocol hash。

**所需资源：** [R19 Hugging Face Model Cards](https://huggingface.co/docs/hub/en/model-cards)

**当天交付物：** evaluations/act-v1/protocol.md 与 hash

**完成验收：** 协议在结果生成前冻结；修改需新版本；成功定义可程序化。

<a id="day-058"></a>

#### Day 058｜2026-10-20 星期二｜2 小时｜Rollout Harness 与逐轮记录

**详细执行指南：** [Day 058 详细执行指南](daily-guides/day-058.md)

**当天任务**

- [ ] 实现批量重置、策略推理、动作守卫和视频/轨迹保存。
- [ ] 每轮保存seed、开始/结束状态、成功、失败类型和耗时。
- [ ] 策略异常时停止该轮但继续保留故障证据。

**所需资源：** [R24 LeRobot Policy Rollout](https://huggingface.co/docs/lerobot/v0.6.0/en/inference)

**当天交付物：** evaluation/rollout.py、tests/test_rollout.py

**完成验收：** 合成策略和失败策略测试通过；每轮产物完整；崩溃不覆盖已有结果。

<a id="day-059"></a>

#### Day 059｜2026-10-21 星期三｜2 小时｜ACT 冻结基线评测

**详细执行指南：** [Day 059 详细执行指南](daily-guides/day-059.md)

**当天任务**

- [ ] 按协议运行不少于20个Episode。
- [ ] 不删除失败、卡住或超时轮次。
- [ ] 生成results.csv并从原始记录重算汇总。

**所需资源：** [R24 LeRobot Policy Rollout](https://huggingface.co/docs/lerobot/v0.6.0/en/inference)

**当天交付物：** evaluations/act-v1/results.csv、raw/

**完成验收：** 样本量达到协议；逐轮结果与汇总一致；所有视频标记仿真。

<a id="day-060"></a>

#### Day 060｜2026-10-22 星期四｜2 小时｜失败分类与可解释回放

**详细执行指南：** [Day 060 详细执行指南](daily-guides/day-060.md)

**当天任务**

- [ ] 按未抓取、提前闭合、掉落、越界、超时等分类。
- [ ] 为每类选择代表性成功/失败轨迹。
- [ ] 区分数据缺口、控制缺口和模型缺口，不凭单轮下结论。

**所需资源：** [R19 Hugging Face Model Cards](https://huggingface.co/docs/hub/en/model-cards)

**当天交付物：** reports/act-failure-taxonomy.md

**完成验收：** 每个失败有唯一主分类和可复核证据；未强行解释未知原因。

<a id="day-061"></a>

#### Day 061｜2026-10-23 星期五｜2 小时｜未见位置评测

**详细执行指南：** [Day 061 详细执行指南](daily-guides/day-061.md)

**当天任务**

- [ ] 在训练split未覆盖的位置运行冻结评测。
- [ ] 保持其他条件不变，隔离位置变化。
- [ ] 报告逐轮结果和置信区间/样本限制。

**所需资源：** [R19 Hugging Face Model Cards](https://huggingface.co/docs/hub/en/model-cards)

**当天交付物：** evaluations/act-v1/unseen-position.csv

**完成验收：** 测试位置未泄漏到训练；样本量明确；不把小样本结果外推为真实世界泛化。

<a id="day-062"></a>

#### Day 062｜2026-10-24 星期六｜4 小时｜光照与相机扰动评测

**详细执行指南：** [Day 062 详细执行指南](daily-guides/day-062.md)

**当天任务**

- [ ] 分别改变光照、相机小偏移和图像噪声。
- [ ] 一次只改变一个主变量并保存配置diff。
- [ ] 比较基线与扰动失败分布。

**所需资源：** [R16 MuJoCo 文档](https://mujoco.readthedocs.io/en/stable/)；[R19 Hugging Face Model Cards](https://huggingface.co/docs/hub/en/model-cards)

**当天交付物：** evaluations/act-v1/visual-robustness.csv

**完成验收：** 变量控制可复核；结果来自冻结checkpoint；不重新调参污染测试。

<a id="day-063"></a>

#### Day 063｜2026-10-25 星期日｜2 小时｜ACT v1 报告与阶段门

**详细执行指南：** [Day 063 详细执行指南](daily-guides/day-063.md)

**当天任务**

- [ ] 汇总训练、基线、未见位置和视觉扰动。
- [ ] 列出最强结论、失败结论和不能推导的内容。
- [ ] 决定是否进入SmolVLA；ACT链路不稳定时先修复。

**所需资源：** [R19 Hugging Face Model Cards](https://huggingface.co/docs/hub/en/model-cards)

**当天交付物：** reports/act-v1-evaluation.md、MODEL_CARD_ACT.md

**完成验收：** 数字可由原始CSV重算；包含成功和失败演示；明确simulation-only。

### 第 10 周｜SmolVLA 数据与微调｜2026-10-26～2026-11-01

**本周目标：** 在ACT链路稳定后，为同一仿真任务增加语言条件并完成SmolVLA小规模微调。

**阶段门：** 语言数据、算力、checkpoint、恢复和预检全部可复现；训练成本受控。

<a id="day-064"></a>

#### Day 064｜2026-10-26 星期一｜2 小时｜SmolVLA 架构与数据流审计

**详细执行指南：** [Day 064 详细执行指南](daily-guides/day-064.md)

**当天任务**

- [ ] 阅读官方SmolVLA数据、processor、policy和推理路径。
- [ ] 绘制图像、状态、语言、动作进入模型的shape和dtype。
- [ ] 列出与ACT数据的兼容与转换点。

**所需资源：** [R07 SmolVLA 官方说明](https://huggingface.co/blog/smolvla)；[R25 SmolVLA 官方微调指南](https://huggingface.co/docs/lerobot/v0.6.0/en/smolvla)

**当天交付物：** docs/smolvla-dataflow.md

**完成验收：** 数据流图可对应代码；所有shape有实测；未把阅读写成模型研发经验。

<a id="day-065"></a>

#### Day 065｜2026-10-27 星期二｜2 小时｜语言任务与标注规则

**详细执行指南：** [Day 065 详细执行指南](daily-guides/day-065.md)

**当天任务**

- [ ] 为同一Pick-Cube任务定义有限、等价和禁止的指令表达。
- [ ] 将语言加入Dataset，保留原任务ID和Episode来源。
- [ ] 检查语言split，避免测试表达直接复制到训练。

**所需资源：** [R25 SmolVLA 官方微调指南](https://huggingface.co/docs/lerobot/v0.6.0/en/smolvla)；[R18 Hugging Face Dataset Cards](https://huggingface.co/docs/hub/en/datasets-cards)

**当天交付物：** dataset/language-spec-v1.md、language-manifest.json

**完成验收：** 每个Episode语言可追溯；测试表达隔离；不凭空增加未示教任务。

<a id="day-066"></a>

#### Day 066｜2026-10-28 星期三｜2 小时｜SmolVLA GPU 与依赖冒烟

**详细执行指南：** [Day 066 详细执行指南](daily-guides/day-066.md)

**当天任务**

- [ ] 在最小batch/分辨率下加载模型和一个batch。
- [ ] 记录显存、系统内存、下载体积和模型revision。
- [ ] 设置费用、墙钟、自动终止和缓存策略。

**所需资源：** [R09 LeRobot 算力指南](https://huggingface.co/docs/lerobot/v0.6.0/en/hardware_guide)；[R25 SmolVLA 官方微调指南](https://huggingface.co/docs/lerobot/v0.6.0/en/smolvla)；[R28 Hugging Face Jobs GPU 价格](https://huggingface.co/docs/hub/jobs-pricing)

**当天交付物：** experiments/smolvla-smoke、reports/gpu-budget.md

**完成验收：** 前向/短反向通过或有明确阻塞；revision固定；不在4核8GB CPU服务器训练。

<a id="day-067"></a>

#### Day 067｜2026-10-29 星期四｜2 小时｜微调配置冻结

**详细执行指南：** [Day 067 详细执行指南](daily-guides/day-067.md)

**当天任务**

- [ ] 固定dataset、语言split、冻结层、学习率、batch和seed。
- [ ] 对输入processor与动作反归一化做单元测试。
- [ ] 生成配置hash并锁定测试split。

**所需资源：** [R25 SmolVLA 官方微调指南](https://huggingface.co/docs/lerobot/v0.6.0/en/smolvla)

**当天交付物：** configs/smolvla-pick-cube-v1.yaml

**完成验收：** 配置可重建；processor测试通过；协议和预算在训练前冻结。

<a id="day-068"></a>

#### Day 068｜2026-10-30 星期五｜2 小时｜SmolVLA v1 微调启动

**详细执行指南：** [Day 068 详细执行指南](daily-guides/day-068.md)

**当天任务**

- [ ] 按冻结配置启动按需GPU训练。
- [ ] 记录git、模型revision、数据revision、环境和日志URL/本地路径。
- [ ] 人工时间只用于检查启动与异常，不等待整个训练。

**所需资源：** [R25 SmolVLA 官方微调指南](https://huggingface.co/docs/lerobot/v0.6.0/en/smolvla)；[R17 Weights & Biases 文档](https://docs.wandb.ai/)

**当天交付物：** experiments/smolvla-v1

**完成验收：** 产生有效日志和checkpoint；训练任务有超时/预算；元数据完整。

<a id="day-069"></a>

#### Day 069｜2026-10-31 星期六｜4 小时｜训练恢复与Checkpoint 初评

**详细执行指南：** [Day 069 详细执行指南](daily-guides/day-069.md)

**当天任务**

- [ ] 从checkpoint恢复并验证step与优化器状态。
- [ ] 在验证batch检查动作分布、语言输入和NaN。
- [ ] 按预先规则选择唯一候选checkpoint。

**所需资源：** [R25 SmolVLA 官方微调指南](https://huggingface.co/docs/lerobot/v0.6.0/en/smolvla)

**当天交付物：** reports/smolvla-resume.md、checkpoint-manifest.json

**完成验收：** 恢复一致；候选选择不看测试结果；损坏checkpoint被拒绝。

<a id="day-070"></a>

#### Day 070｜2026-11-01 星期日｜2 小时｜SmolVLA 仿真上线前门

**详细执行指南：** [Day 070 详细执行指南](daily-guides/day-070.md)

**当天任务**

- [ ] 在低速、短时、固定起点运行少量预检。
- [ ] 检查动作年龄、饱和、越界和语言缺失。
- [ ] 冻结下一周评测协议与候选checkpoint。

**所需资源：** [R25 SmolVLA 官方微调指南](https://huggingface.co/docs/lerobot/v0.6.0/en/smolvla)；[R19 Hugging Face Model Cards](https://huggingface.co/docs/hub/en/model-cards)

**当天交付物：** safety/smolvla-preflight.md、MODEL_CARD_SMOLVLA-draft.md

**完成验收：** 无NaN/越界动作；缺语言时安全失败；预检不计入正式评测。

### 第 11 周｜SmolVLA 评测、对比与异步推理｜2026-11-02～2026-11-08

**本周目标：** 完成语言与位置泛化评测，对比ACT，并建立Policy Server/Robot Client异步推理链路。

**阶段门：** SmolVLA和ACT在同一口径下可比较；异步动作队列有年龄、限幅和断连守卫。

<a id="day-071"></a>

#### Day 071｜2026-11-02 星期一｜2 小时｜SmolVLA 冻结基线评测

**详细执行指南：** [Day 071 详细执行指南](daily-guides/day-071.md)

**当天任务**

- [ ] 复制ACT协议中可共用的任务和seed。
- [ ] 按SmolVLA协议运行不少于20个Episode。
- [ ] 保存语言、逐轮动作、轨迹、视频和失败类型。

**所需资源：** [R25 SmolVLA 官方微调指南](https://huggingface.co/docs/lerobot/v0.6.0/en/smolvla)

**当天交付物：** evaluations/smolvla-v1/baseline.csv

**完成验收：** 样本量与协议一致；逐轮证据齐全；不删除语言理解失败。

<a id="day-072"></a>

#### Day 072｜2026-11-03 星期二｜2 小时｜未见位置与物体属性变化

**详细执行指南：** [Day 072 详细执行指南](daily-guides/day-072.md)

**当天任务**

- [ ] 在冻结的未见位置运行评测。
- [ ] 增加有限的颜色/目标区变化，但不声称新任务。
- [ ] 分别报告位置和视觉属性变化。

**所需资源：** [R25 SmolVLA 官方微调指南](https://huggingface.co/docs/lerobot/v0.6.0/en/smolvla)

**当天交付物：** evaluations/smolvla-v1/generalization.csv

**完成验收：** 变化维度分离；数据split无泄漏；结论受样本和仿真范围限制。

<a id="day-073"></a>

#### Day 073｜2026-11-04 星期三｜2 小时｜语言改写与歧义评测

**详细执行指南：** [Day 073 详细执行指南](daily-guides/day-073.md)

**当天任务**

- [ ] 测试等价改写、词序变化和不支持指令。
- [ ] 不支持或歧义指令必须拒绝/暂停而非随意动作。
- [ ] 记录每条语言与结果的对应关系。

**所需资源：** [R25 SmolVLA 官方微调指南](https://huggingface.co/docs/lerobot/v0.6.0/en/smolvla)

**当天交付物：** evaluations/smolvla-v1/language.csv

**完成验收：** 每类语言有预定义预期；歧义指令安全处理；所有结果可追溯。

<a id="day-074"></a>

#### Day 074｜2026-11-05 星期四｜2 小时｜ACT 与 SmolVLA 同口径对比

**详细执行指南：** [Day 074 详细执行指南](daily-guides/day-074.md)

**当天任务**

- [ ] 统一任务、seed、环境版本、成功规则和样本量。
- [ ] 比较成功、失败类型、推理时延和资源。
- [ ] 避免用不同协议选择性证明某模型更好。

**所需资源：** [R19 Hugging Face Model Cards](https://huggingface.co/docs/hub/en/model-cards)

**当天交付物：** reports/act-vs-smolvla.md

**完成验收：** 对比表可重算；差异有统计与限制；负面结果保留。

<a id="day-075"></a>

#### Day 075｜2026-11-06 星期五｜2 小时｜Policy Server 本地基线

**详细执行指南：** [Day 075 详细执行指南](daily-guides/day-075.md)

**当天任务**

- [ ] 将策略封装为版本化Policy Server。
- [ ] 定义请求ID、观测时间、模型版本、动作块和错误码。
- [ ] 测试重复请求、过期观测和模型加载失败。

**所需资源：** [R10 LeRobot 异步推理](https://huggingface.co/docs/lerobot/v0.6.0/en/async)

**当天交付物：** async/policy_server、OpenAPI/协议文档

**完成验收：** 接口测试通过；模型版本进入响应；过期观测不产生可执行动作。

<a id="day-076"></a>

#### Day 076｜2026-11-07 星期六｜4 小时｜Robot Client、队列与动作年龄

**详细执行指南：** [Day 076 详细执行指南](daily-guides/day-076.md)

**当天任务**

- [ ] 实现Robot Client和有限动作队列。
- [ ] 加入动作年龄、队列水位、dead-man和本地限幅。
- [ ] 注入延迟、乱序、断线和服务器重启。

**所需资源：** [R10 LeRobot 异步推理](https://huggingface.co/docs/lerobot/v0.6.0/en/async)；[R11 LeRobot RTC](https://huggingface.co/docs/lerobot/v0.6.0/en/rtc)

**当天交付物：** async/robot_client、tests/test_action_queue.py

**完成验收：** 过期/乱序动作被丢弃；断线后本地停止；恢复需重新握手。

<a id="day-077"></a>

#### Day 077｜2026-11-08 星期日｜2 小时｜模型与异步推理阶段门

**详细执行指南：** [Day 077 详细执行指南](daily-guides/day-077.md)

**当天任务**

- [ ] 演示本地MuJoCo Robot Client连接独立Policy Server。
- [ ] 分别运行ACT和SmolVLA并记录资源与故障恢复。
- [ ] 冻结可进入云端平台的接口版本。

**所需资源：** [R10 LeRobot 异步推理](https://huggingface.co/docs/lerobot/v0.6.0/en/async)；[R11 LeRobot RTC](https://huggingface.co/docs/lerobot/v0.6.0/en/rtc)

**当天交付物：** releases/policy-stack-v0.1.md

**完成验收：** 两种策略至少一种完整通过；安全守卫测试通过；接口版本已冻结。

### 第 12 周｜4核8GB云端控制平面与Headless仿真｜2026-11-09～2026-11-15

**本周目标：** 在现有CPU云服务器部署轻量控制平面、无界面MuJoCo测试和实验元数据服务，不承担VLA训练或手柄实时交互。

**阶段门：** 云端资源受限下API、任务、元数据、MQTT和headless smoke稳定；内存、磁盘和恢复有证据。

<a id="day-078"></a>

#### Day 078｜2026-11-09 星期一｜2 小时｜云服务器资源与安全基线

**详细执行指南：** [Day 078 详细执行指南](daily-guides/day-078.md)

**当天任务**

- [ ] 记录4核8GB服务器OS、CPU、内存、磁盘、端口和现有容器占用。
- [ ] 为EdgeVLA设置独立目录、用户/容器、资源限制和日志轮转。
- [ ] 确认不影响现有个人网站与其他服务。

**所需资源：** [R21 Docker 文档](https://docs.docker.com/)；H02 4核8GB云服务器

**当天交付物：** deploy/cloud-inventory.md、resource-limits.yaml

**完成验收：** 有部署前资源快照；端口无冲突；服务内存和日志上限明确。

<a id="day-079"></a>

#### Day 079｜2026-11-10 星期二｜2 小时｜MuJoCo OSMesa Headless 容器

**详细执行指南：** [Day 079 详细执行指南](daily-guides/day-079.md)

**当天任务**

- [ ] 构建只含CPU MuJoCo、OSMesa和测试依赖的镜像。
- [ ] 运行固定Franka模型的无渲染与低分辨率smoke。
- [ ] 限制CPU/内存并保存峰值和退出码。

**所需资源：** [R16 MuJoCo 文档](https://mujoco.readthedocs.io/en/stable/)；[R21 Docker 文档](https://docs.docker.com/)；[R52 MuJoCo Headless Rendering](https://github.com/google-deepmind/dm_control#rendering)

**当天交付物：** containers/mujoco-headless、benchmarks/cloud-smoke.csv

**完成验收：** 无显示服务器运行通过；内存不超过设定上限；镜像不包含训练权重。

<a id="day-080"></a>

#### Day 080｜2026-11-11 星期三｜2 小时｜实验注册表 API

**详细执行指南：** [Day 080 详细执行指南](daily-guides/day-080.md)

**当天任务**

- [ ] 实现project、experiment、run、artifact metadata和evaluation接口。
- [ ] 所有对象使用不可变ID、版本和状态机。
- [ ] 为重复提交、非法状态转换和分页编写测试。

**所需资源：** [R47 FastAPI Documentation](https://fastapi.tiangolo.com/)

**当天交付物：** platform/api、OpenAPI文档

**完成验收：** API测试通过；状态转换原子；不存在把任务完成状态提前写入的路径。

<a id="day-081"></a>

#### Day 081｜2026-11-12 星期四｜2 小时｜轻量元数据数据库与迁移

**详细执行指南：** [Day 081 详细执行指南](daily-guides/day-081.md)

**当天任务**

- [ ] 优先使用PostgreSQL；资源不足可用SQLite并记录限制。
- [ ] 设计项目、数据集、模型、评测、设备和审计表。
- [ ] 实现向前迁移、备份和恢复测试。

**所需资源：** [R48 PostgreSQL Documentation](https://www.postgresql.org/docs/)；H02 4核8GB云服务器

**当天交付物：** platform/migrations、schema.md、恢复日志

**完成验收：** 空库可迁移；备份可恢复；数据库不保存大视频或模型二进制。

<a id="day-082"></a>

#### Day 082｜2026-11-13 星期五｜2 小时｜Artifact 与对象存储接口

**详细执行指南：** [Day 082 详细执行指南](daily-guides/day-082.md)

**当天任务**

- [ ] 定义本地文件、S3/MinIO兼容的ArtifactStore接口。
- [ ] 只在云服务器保存小样本和清单，大数据指向对象存储。
- [ ] 实现校验和、断点上传和不存在对象处理。

**所需资源：** [R49 MinIO Documentation](https://min.io/docs/minio/linux/index.html)；H05 数据与模型存储

**当天交付物：** platform/artifacts、docs/storage-policy.md

**完成验收：** 校验和验证通过；大文件不进入数据库/Git；未配置对象存储时可降级本地目录。

<a id="day-083"></a>

#### Day 083｜2026-11-14 星期六｜4 小时｜MQTT/WebSocket 状态与任务

**详细执行指南：** [Day 083 详细执行指南](daily-guides/day-083.md)

**当天任务**

- [ ] 设计设备心跳、任务状态、日志摘要和非实时命令主题。
- [ ] 加入QoS、过期、幂等、重连和权限边界。
- [ ] 模拟Robot Client上线、断线、重复消息和过期任务。

**所需资源：** [R30 OASIS MQTT 5.0 规范](https://docs.oasis-open.org/mqtt/mqtt/v5.0/mqtt-v5.0.html)；[R50 EMQX Documentation](https://docs.emqx.com/)

**当天交付物：** platform/messaging、protocol/cloud-v1.md

**完成验收：** 重复/过期命令不重复执行；断线可见；MQTT不承载伺服实时闭环。

<a id="day-084"></a>

#### Day 084｜2026-11-15 星期日｜2 小时｜云端控制平面 v0.1 部署

**详细执行指南：** [Day 084 详细执行指南](daily-guides/day-084.md)

**当天任务**

- [ ] 用Compose部署API、数据库、MQTT和headless worker。
- [ ] 执行健康检查、资源监控、备份和回滚。
- [ ] 从本地提交一次仿真smoke任务并回收结果。

**所需资源：** [R21 Docker 文档](https://docs.docker.com/)；H02 4核8GB云服务器

**当天交付物：** deploy/cloud-compose、releases/cloud-v0.1.md

**完成验收：** 4核8GB服务器稳定运行；一次任务闭环通过；现有服务无回归。

### 第 13 周｜EdgeVLA Web 平台与实验闭环｜2026-11-16～2026-11-22

**本周目标：** 建立项目、设备、数据集、模型、实验、评测和失败审查的最小Web平台。

**阶段门：** 浏览器可完成从提交仿真任务到查看数据/模型/评测和失败Episode的端到端流程。

<a id="day-085"></a>

#### Day 085｜2026-11-16 星期一｜2 小时｜认证、项目与权限

**详细执行指南：** [Day 085 详细执行指南](daily-guides/day-085.md)

**当天任务**

- [ ] 实现管理员登录、会话、CSRF/Origin和登录限流。
- [ ] 建立项目级资源隔离和只读演示角色。
- [ ] 测试未授权、越权和会话过期。

**所需资源：** [R47 FastAPI Documentation](https://fastapi.tiangolo.com/)

**当天交付物：** platform/auth、security/auth-tests.md

**完成验收：** 权限测试通过；密钥不进入前端；审计记录包含操作者和对象。

<a id="day-086"></a>

#### Day 086｜2026-11-17 星期二｜2 小时｜设备、Client 与心跳面板

**详细执行指南：** [Day 086 详细执行指南](daily-guides/day-086.md)

**当天任务**

- [ ] 展示Robot Client版本、仿真/真机类型、在线状态和最后心跳。
- [ ] 显示模型、环境和控制模式，不显示本机敏感标识。
- [ ] 实现断线、版本不兼容和时钟漂移告警。

**所需资源：** [R50 EMQX Documentation](https://docs.emqx.com/)

**当天交付物：** platform/web/devices

**完成验收：** 模拟Client可上线/离线；敏感主机信息已脱敏；告警可复现。

<a id="day-087"></a>

#### Day 087｜2026-11-18 星期三｜2 小时｜数据集与模型注册页面

**详细执行指南：** [Day 087 详细执行指南](daily-guides/day-087.md)

**当天任务**

- [ ] 展示Dataset Card、split、统计、校验和和来源。
- [ ] 展示Model Card、checkpoint、数据revision和兼容schema。
- [ ] 禁止删除被实验或评测引用的artifact。

**所需资源：** [R18 Hugging Face Dataset Cards](https://huggingface.co/docs/hub/en/datasets-cards)；[R19 Hugging Face Model Cards](https://huggingface.co/docs/hub/en/model-cards)

**当天交付物：** platform/web/registry

**完成验收：** 引用保护测试通过；来源和simulation-only醒目；大文件使用签名/受控链接。

<a id="day-088"></a>

#### Day 088｜2026-11-19 星期四｜2 小时｜实验任务与日志页面

**详细执行指南：** [Day 088 详细执行指南](daily-guides/day-088.md)

**当天任务**

- [ ] 创建训练、评测和headless smoke任务记录。
- [ ] 流式展示状态、阶段日志、资源和失败原因。
- [ ] 任务取消只改变云端任务，不越权控制本地实时运动。

**所需资源：** [R47 FastAPI Documentation](https://fastapi.tiangolo.com/)

**当天交付物：** platform/web/experiments

**完成验收：** 状态与后端一致；取消幂等；日志无token和私人路径。

<a id="day-089"></a>

#### Day 089｜2026-11-20 星期五｜2 小时｜评测与失败时间线

**详细执行指南：** [Day 089 详细执行指南](daily-guides/day-089.md)

**当天任务**

- [ ] 按模型、任务、seed和失败类型筛选。
- [ ] 同步显示视频、动作、末端轨迹和关键事件。
- [ ] 支持人工备注但保留原始自动判定。

**所需资源：** [R19 Hugging Face Model Cards](https://huggingface.co/docs/hub/en/model-cards)

**当天交付物：** platform/web/evaluations

**完成验收：** 至少一组ACT/SmolVLA结果可浏览；原始判定不可静默覆盖；失败视频可定位。

<a id="day-090"></a>

#### Day 090｜2026-11-21 星期六｜4 小时｜远程非实时任务与安全边界

**详细执行指南：** [Day 090 详细执行指南](daily-guides/day-090.md)

**当天任务**

- [ ] 实现提交headless评测、下载artifact和停止后台任务。
- [ ] 所有远程命令带ID、过期时间、权限和审计。
- [ ] 明确禁止通过公网发送无保护关节/伺服实时控制。

**所需资源：** [R30 OASIS MQTT 5.0 规范](https://docs.oasis-open.org/mqtt/mqtt/v5.0/mqtt-v5.0.html)

**当天交付物：** platform/remote-jobs、threat-boundary.md

**完成验收：** 过期和重复任务被拒绝；权限测试通过；安全边界进入UI与文档。

<a id="day-091"></a>

#### Day 091｜2026-11-22 星期日｜2 小时｜平台端到端阶段门

**详细执行指南：** [Day 091 详细执行指南](daily-guides/day-091.md)

**当天任务**

- [ ] 从Web创建一次MuJoCo headless smoke并显示结果。
- [ ] 注册数据集、ACT、SmolVLA和两份评测报告。
- [ ] 录制成功流程与一个故障恢复流程。

**所需资源：** [R21 Docker 文档](https://docs.docker.com/)；[R47 FastAPI Documentation](https://fastapi.tiangolo.com/)

**当天交付物：** releases/platform-v0.1.md、演示视频

**完成验收：** 端到端流程可重复；故障流程可恢复；平台不依赖真实机械臂。

### 第 14 周｜部署、CI、弱网、安全与恢复｜2026-11-23～2026-11-29

**本周目标：** 将本地、云端和GPU任务分层容器化，完善CI、弱网、安全、备份和长稳。

**阶段门：** 三种部署profile清晰；CI全绿；云端恢复和24小时长稳通过；断网不产生危险动作。

<a id="day-092"></a>

#### Day 092｜2026-11-23 星期一｜2 小时｜Local/Cloud/GPU Compose 分层

**详细执行指南：** [Day 092 详细执行指南](daily-guides/day-092.md)

**当天任务**

- [ ] 定义local-sim、cloud-control和gpu-train三套profile。
- [ ] 共享schema和协议，不把GPU依赖装进4核8GB云镜像。
- [ ] 生成镜像SBOM和精确版本。

**所需资源：** [R21 Docker 文档](https://docs.docker.com/)

**当天交付物：** compose.yaml、containers/、deployment-matrix.md

**完成验收：** 三套profile可独立解析；云镜像无CUDA；依赖边界与部署表一致。

<a id="day-093"></a>

#### Day 093｜2026-11-24 星期二｜2 小时｜配置、密钥与启动前检查

**详细执行指南：** [Day 093 详细执行指南](daily-guides/day-093.md)

**当天任务**

- [ ] 建立配置schema和环境变量模板。
- [ ] 检查磁盘、内存、端口、模型/data revision和对象存储。
- [ ] 缺少密钥或版本不兼容时拒绝启动。

**所需资源：** [R21 Docker 文档](https://docs.docker.com/)

**当天交付物：** config/schema.json、scripts/preflight.py

**完成验收：** 正常/失败配置测试通过；日志不打印密钥；检查结果可读。

<a id="day-094"></a>

#### Day 094｜2026-11-25 星期三｜2 小时｜GitHub Actions Headless CI

**详细执行指南：** [Day 094 详细执行指南](daily-guides/day-094.md)

**当天任务**

- [ ] 运行lint、unit、contract、schema和MuJoCo无渲染smoke。
- [ ] 缓存依赖但不缓存私人数据、模型或token。
- [ ] 固定OS、Python和关键依赖，上传脱敏测试报告。

**所需资源：** [R20 GitHub Actions 文档](https://docs.github.com/en/actions)；[R52 MuJoCo Headless Rendering](https://github.com/google-deepmind/dm_control#rendering)

**当天交付物：** .github/workflows/ci.yml

**完成验收：** 全新runner通过；失败能定位；CI不需要GPU或机械臂。

<a id="day-095"></a>

#### Day 095｜2026-11-26 星期四｜2 小时｜端到端集成与故障矩阵

**详细执行指南：** [Day 095 详细执行指南](daily-guides/day-095.md)

**当天任务**

- [ ] 覆盖teleop→sim→dataset→policy→evaluation→platform元数据。
- [ ] 注入损坏数据、模型不兼容、API失败和worker崩溃。
- [ ] 区分可重试、需人工和永久失败。

**所需资源：** [R20 GitHub Actions 文档](https://docs.github.com/en/actions)

**当天交付物：** tests/e2e、reports/fault-matrix.csv

**完成验收：** 关键链路自动化；每类故障有期望状态；没有假PASS。

<a id="day-096"></a>

#### Day 096｜2026-11-27 星期五｜2 小时｜弱网与断线安全

**详细执行指南：** [Day 096 详细执行指南](daily-guides/day-096.md)

**当天任务**

- [ ] 用netem注入延迟、抖动、丢包和乱序。
- [ ] 验证云端任务、Policy Server和Robot Client的动作年龄守卫。
- [ ] 证明断网后本地MuJoCo Client暂停而非继续旧动作。

**所需资源：** [R22 Linux tc-netem](https://man7.org/linux/man-pages/man8/tc-netem.8.html)

**当天交付物：** evaluations/network-v1/results.csv

**完成验收：** 所有网络条件有原始结果；旧动作不执行；远程通道明确非硬实时。

<a id="day-097"></a>

#### Day 097｜2026-11-28 星期六｜4 小时｜4核8GB资源与性能优化

**详细执行指南：** [Day 097 详细执行指南](daily-guides/day-097.md)

**当天任务**

- [ ] 测量API、数据库、MQTT、headless worker并发下的CPU/内存/磁盘。
- [ ] 设置容器限制、队列上限、日志轮转和任务并发1。
- [ ] 找到并修复至少一个真实瓶颈或记录无需优化的证据。

**所需资源：** [R21 Docker 文档](https://docs.docker.com/)；H02 4核8GB云服务器

**当天交付物：** reports/cloud-performance-v1.md

**完成验收：** 压力条件不OOM；资源限制生效；性能结论有命令和原始数据。

<a id="day-098"></a>

#### Day 098｜2026-11-29 星期日｜2 小时｜备份恢复与24小时长稳

**详细执行指南：** [Day 098 详细执行指南](daily-guides/day-098.md)

**当天任务**

- [ ] 备份数据库、配置和artifact清单，不重复备份大文件。
- [ ] 执行容器重启、服务器重启模拟和上一版本回滚。
- [ ] 运行24小时轻量心跳与周期headless smoke。

**所需资源：** [R21 Docker 文档](https://docs.docker.com/)

**当天交付物：** reports/soak-24h.md、restore-log.md

**完成验收：** 备份可恢复；任务状态一致；24小时无未解释资源增长。

### 第 15 周｜公开交付、证据与技术表达｜2026-11-30～2026-12-06

**本周目标：** 形成招聘方可复现的EdgeVLA仿真全链路作品，公开成功与失败，不伪造真机迁移。

**阶段门：** README、架构、Cards、演示、快速开始、隐私和许可证审查全部通过。

<a id="day-099"></a>

#### Day 099｜2026-11-30 星期一｜2 小时｜README 与15分钟快速开始

**详细执行指南：** [Day 099 详细执行指南](daily-guides/day-099.md)

**当天任务**

- [ ] 说明项目定位、硬件条件、仿真范围和完整闭环。
- [ ] 提供本地viewer、headless CI和云端平台三条路径。
- [ ] 请未参与者按README测试并记录卡点。

**所需资源：** [R20 GitHub Actions 文档](https://docs.github.com/en/actions)

**当天交付物：** README.md 候选版、quickstart-test.md

**完成验收：** 新用户15分钟内运行headless demo；前置条件明确；没有真机暗示。

<a id="day-100"></a>

#### Day 100｜2026-12-01 星期二｜2 小时｜架构、数据流与安全边界

**详细执行指南：** [Day 100 详细执行指南](daily-guides/day-100.md)

**当天任务**

- [ ] 绘制本地、云端、GPU、Policy Server和Robot Client。
- [ ] 标出数据、模型、命令、非实时网络和安全守卫。
- [ ] 说明未来真机迁移只替换adapter且必须新增物理安全门。

**所需资源：** [R21 Docker 文档](https://docs.docker.com/)

**当天交付物：** docs/architecture.md、docs/security-boundary.md

**完成验收：** 图与部署一致；实时/非实时边界明确；真机是未来扩展而非已完成。

<a id="day-101"></a>

#### Day 101｜2026-12-02 星期三｜2 小时｜Dataset Card 定稿

**详细执行指南：** [Day 101 详细执行指南](daily-guides/day-101.md)

**当天任务**

- [ ] 更新数据量、split、任务、采集方式、失败和限制。
- [ ] 提供脱敏小样本或生成脚本，不强制公开全部视频。
- [ ] 核对许可证、校验和和版本。

**所需资源：** [R18 Hugging Face Dataset Cards](https://huggingface.co/docs/hub/en/datasets-cards)

**当天交付物：** DATASET_CARD.md、public-sample/

**完成验收：** 统计可重算；来源为游戏手柄+MuJoCo；不含私人路径和token。

<a id="day-102"></a>

#### Day 102｜2026-12-03 星期四｜2 小时｜ACT/SmolVLA Model Card

**详细执行指南：** [Day 102 详细执行指南](daily-guides/day-102.md)

**当天任务**

- [ ] 分别记录数据、配置、训练资源、评测和适用范围。
- [ ] 列出失败分类、已知偏差和不可推导结论。
- [ ] 所有数字链接到冻结协议和原始CSV。

**所需资源：** [R19 Hugging Face Model Cards](https://huggingface.co/docs/hub/en/model-cards)

**当天交付物：** MODEL_CARD_ACT.md、MODEL_CARD_SMOLVLA.md

**完成验收：** 每个数字可追溯；模型对比同口径；明确不是实机生产部署。

<a id="day-103"></a>

#### Day 103｜2026-12-04 星期五｜2 小时｜成功、失败与系统演示视频

**详细执行指南：** [Day 103 详细执行指南](daily-guides/day-103.md)

**当天任务**

- [ ] 录制手柄采集、数据回放、ACT/SmolVLA rollout和云端平台。
- [ ] 至少展示一个失败和安全停止。
- [ ] 画面和旁白持续标记MuJoCo simulation。

**所需资源：** [R16 MuJoCo 文档](https://mujoco.readthedocs.io/en/stable/)

**当天交付物：** demo/edgevla-v1.mp4、旁白稿

**完成验收：** 视频可在3–5分钟解释闭环；失败不剪掉；没有伪造Franka真机画面。

<a id="day-104"></a>

#### Day 104｜2026-12-05 星期六｜4 小时｜一条命令可复现演示

**详细执行指南：** [Day 104 详细执行指南](daily-guides/day-104.md)

**当天任务**

- [ ] 实现make demo或等价命令启动headless闭环。
- [ ] 下载/生成最小合法资产并验证校验和。
- [ ] 在干净环境和4核8GB云服务器各运行一次。

**所需资源：** [R21 Docker 文档](https://docs.docker.com/)；H02 4核8GB云服务器

**当天交付物：** scripts/demo.sh、reproducibility-report.md

**完成验收：** 两处运行通过；失败时退出码非0；总资源在文档范围内。

<a id="day-105"></a>

#### Day 105｜2026-12-06 星期日｜2 小时｜隐私、许可证与v1.0候选发布

**详细执行指南：** [Day 105 详细执行指南](daily-guides/day-105.md)

**当天任务**

- [ ] 扫描密钥、联系方式、公司路径、设备标识和大文件。
- [ ] 核对Menagerie、LeRobot、模型和数据许可证。
- [ ] 只发布通过证据门的仿真、数据、模型和平台范围。

**所需资源：** [R20 GitHub Actions 文档](https://docs.github.com/en/actions)；[R44 MuJoCo Menagerie](https://github.com/google-deepmind/mujoco_menagerie)

**当天交付物：** release-checklist.md、v1.0.0-rc1

**完成验收：** 隐私检查通过；许可证齐全；发布说明明确无真实机械臂。

### 第 16 周｜求职材料、面试与下一阶段｜2026-12-07～2026-12-13

**本周目标：** 只把已验证的EdgeVLA仿真闭环同步到作品集和定向简历，并规划可选GELLO/真实机械臂阶段。

**阶段门：** 材料与证据一致；模拟面试能解释每个边界；完成小规模投递和下一90天决策。

<a id="day-106"></a>

#### Day 106｜2026-12-07 星期一｜2 小时｜可写入简历的证据审计

**详细执行指南：** [Day 106 详细执行指南](daily-guides/day-106.md)

**当天任务**

- [ ] 逐条审计代码、数据、训练、评测、平台和部署成果。
- [ ] 为每个数字链接protocol、CSV、commit和环境。
- [ ] 删除任何无法证明的真机、迁移、部署成功或VLA算法研发表述。

**所需资源：** [R19 Hugging Face Model Cards](https://huggingface.co/docs/hub/en/model-cards)

**当天交付物：** career/resume-evidence-v1.csv

**完成验收：** 每条可写表述有证据ID；simulation-only显式；禁用表述为0。

<a id="day-107"></a>

#### Day 107｜2026-12-08 星期二｜2 小时｜GitHub 与作品集项目页

**详细执行指南：** [Day 107 详细执行指南](daily-guides/day-107.md)

**当天任务**

- [ ] 用问题—方案—架构—证据—限制介绍项目。
- [ ] 突出嵌入式Linux、通信、端云能力如何迁移到机器人系统。
- [ ] 避免堆砌上游功能或展示私人训练资产。

**所需资源：** [R20 GitHub Actions 文档](https://docs.github.com/en/actions)

**当天交付物：** career/portfolio-edgevla.md

**完成验收：** 60秒内能理解项目；链接有效；个人贡献与上游清晰。

<a id="day-108"></a>

#### Day 108｜2026-12-09 星期三｜2 小时｜三类定向简历

**详细执行指南：** [Day 108 详细执行指南](daily-guides/day-108.md)

**当天任务**

- [ ] 生成机器人Linux/系统集成、机器人数据/部署、VLA应用工程三版。
- [ ] 按岗位重排同一真实证据，不制造不同事实。
- [ ] 嵌入式传统版保留4G网关与单灯控制器主线。

**所需资源：** [R19 Hugging Face Model Cards](https://huggingface.co/docs/hub/en/model-cards)

**当天交付物：** career/resume-robot-system.md、resume-data-deploy.md、resume-vla-application.md

**完成验收：** 三版事实一致；每版不超过目标篇幅；未写真机或Franka物理部署。

<a id="day-109"></a>

#### Day 109｜2026-12-10 星期四｜2 小时｜项目面试故事与技术深挖

**详细执行指南：** [Day 109 详细执行指南](daily-guides/day-109.md)

**当天任务**

- [ ] 准备MuJoCo、遥操作、数据、ACT、SmolVLA、ROS2、云端和安全八类问题。
- [ ] 每类包含设计取舍、失败案例、证据和下一改进。
- [ ] 准备回答为何没有机械臂以及仿真证据的边界。

**所需资源：** [R03 Hugging Face Robot Learning Course](https://huggingface.co/learn/robotics-course/en/unit0/1)

**当天交付物：** career/interview-story-bank.md

**完成验收：** 每个故事可在2分钟/8分钟两种长度表达；无背诵式虚构。

<a id="day-110"></a>

#### Day 110｜2026-12-11 星期五｜2 小时｜模拟面试与反向验证

**详细执行指南：** [Day 110 详细执行指南](daily-guides/day-110.md)

**当天任务**

- [ ] 让评审者随机选择代码、指标和失败案例追问。
- [ ] 现场复现至少一个headless demo和一个数据检查。
- [ ] 记录回答不清、证据缺失和过度表述。

**所需资源：** A06 独立评审者

**当天交付物：** career/mock-interview-review.md

**完成验收：** 所有问题有PASS/PARTIAL；无法解释的表述从简历移除。

<a id="day-111"></a>

#### Day 111｜2026-12-12 星期六｜4 小时｜岗位再分层与首批申请

**详细执行指南：** [Day 111 详细执行指南](daily-guides/day-111.md)

**当天任务**

- [ ] 用最新作品重新评估机器人Linux、系统集成、数据工具和VLA应用岗位。
- [ ] 选择3–5个无硬门槛冲突岗位并定向投递。
- [ ] 记录JD、版本、反馈和下一实验，不批量刷投。

**所需资源：** [R03 Hugging Face Robot Learning Course](https://huggingface.co/learn/robotics-course/en/unit0/1)

**当天交付物：** career/application-tracker.csv 与3–5份记录

**完成验收：** 岗位硬门槛已检查；材料版本可追溯；反馈不用于伪造经历。

<a id="day-112"></a>

#### Day 112｜2026-12-13 星期日｜2 小时｜总复盘与下一90天

**详细执行指南：** [Day 112 详细执行指南](daily-guides/day-112.md)

**当天任务**

- [ ] 汇总256小时实际投入、完成率、成本、失败和最强证据。
- [ ] 根据岗位反馈决定继续仿真深化、购买SO-101/GELLO或寻找实验室真机。
- [ ] 若进入真机阶段，新建安全/授权/硬件计划，不把仿真结果直接写成迁移成功。

**所需资源：** [R23 SO-101 开源硬件](https://github.com/TheRobotStudio/SO-ARM100)；[R45 GELLO Software](https://github.com/wuphilipp/gello_software)；H06 SO-101、GELLO或其他真实机械臂

**当天交付物：** retrospective.md、next-90-days.md、条件化v1.0.0

**完成验收：** 复盘数字真实；下一阶段有预算和进入条件；发布范围与证据一致。

## 里程碑与简历开放条件

| 里程碑 | 最早时间 | 必须具备的证据 | 简历可写范围 |
|---|---|---|---|
| M0 工程基线 | 第 1 周 | 私有仓库、证据账本、固定LeRobot commit、Python/C++测试和MuJoCo CPU smoke | 只能写环境与工程基线；新项目仍在建设 |
| M1 仿真与遥操作 | 第 4 周 | Franka模型、MuJoCo场景、键盘/手柄dead-man、Robot I/O契约、LeRobotDataset回放 | 可写MuJoCo仿真与遥操作工具；不得写真机控制 |
| M2 数据与ROS2闭环 | 第 7 周 | 50个以上有效仿真Episode、质量检查、Dataset Card、ROS2桥接、tf与MCAP | 可写仿真数据工具和ROS2系统集成；不得写真实机械臂驱动 |
| M3 ACT 基线 | 第 9 周 | 自采数据、ACT checkpoint、恢复、冻结评测、失败分类和鲁棒性报告 | 可写ACT仿真训练/评测；所有数字标记simulation-only |
| M4 SmolVLA与云端 | 第 13 周 | SmolVLA微调/负面结论、同口径对比、异步推理、4核8GB控制平面和Web闭环 | 只写实际跑通范围；云端不得描述为实时伺服控制 |
| M5 仿真项目v1.0 | 第 16 周 | CI、快速开始、Cards、成功/失败视频、许可、隐私、恢复和证据门通过 | 可发布完整仿真作品；没有真机就不得写Franka/SO-101/GELLO物理部署 |

## 偏航处理

- 个人电脑图形或手柄不稳定：先用键盘与低分辨率MuJoCo完成闭环，再单独解决输入映射；不要改用云服务器做实时交互。
- 4核8GB云服务器资源不足：关闭渲染、任务并发固定为1、外置大文件；云端只保留控制平面和headless smoke。
- GPU 不足：先做ACT小样本和CPU数据检查，再租按量GPU；每个任务设置最长时长和成本上限。
- LeRobot主分支变化：选择包含官方仿真入口的公开版本并固定commit；不要持续浮动追main。
- SmolVLA 结果不佳：如实保留负面结果，从数据覆盖、归一化、同步、任务设计和模型基线逐项排查。
- 真机机会提前出现：仍需另建授权、急停、SDK和安全计划；不得把MuJoCo评测直接改名为迁移成功。
- 求职压力增加：P0 岗位继续投递；本计划是能力升级路线，不要求暂停现有求职。
