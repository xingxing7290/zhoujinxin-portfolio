# EdgeVLA Embedded-to-Robot Lab：112 天逐日学习与开源项目计划

> 项目状态：**拟建开源作品**。
> EdgeVLA Embedded-to-Robot Lab 是本计划拟开发的个人学习作品，不是 Hugging Face、LeRobot 或其他组织已经发布的同名仓库。LeRobot、SO-101 与 LIBERO 仅作为后半程上游依赖。
> 计划周期：2026-08-24 至 2026-12-13，共 16 周 / 112 天 / 256 小时。

## 项目定义与真实性边界

- 项目名称：**EdgeVLA Embedded-to-Robot Lab**
- 副标题：从 MCU、CAN 与嵌入式 Linux 边缘网关延伸到 ROS2、LeRobot 数据闭环和边云安全控制
- 仓库状态：Day 3 只创建私有学习仓库；第 15 周通过许可证、证据和隐私审查后，才按真实完成范围创建或开放独立公开仓库
- 简历规则：未完成并形成可复现证据前，不得作为已完成项目写入正式简历；只可在学习计划中标记为进行中。
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

- 每周投入 16 小时：周一至周五各 2 小时、周六 4 小时、周日 2 小时。
- 默认只有 Windows/WSL 或 Ubuntu 主机；MCU、CAN、ARM Linux 板和机械臂都必须通过阶段门确认，未确认时执行 mock/QEMU/S 轨。
- 训练和长稳的墙钟时间可在后台运行，但人工排障单次不超过 2 小时；达到硬上限必须停止并记录。
- 所有真实指标必须带代码版本、硬件/环境、样本量和原始证据；公司源码、私有协议和个人隐私永不进入公开仓库。

## 资源总表

### 环境隔离规则

| 环境 | 固定规则 |
|---|---|
| ROS 2 Jazzy 系统环境 | 使用原生 Ubuntu 24.04 与 /opt/ros/jazzy 的系统 Python/colcon；不在 LeRobot 的 conda/uv 环境里直接导入二进制 rclpy。 |
| LeRobot v0.6.0 环境 | 使用独立 uv/venv 或容器并固定 tag、commit 与 lockfile；GPU、PyTorch、FFmpeg 版本写入实验产物。 |
| ROS 与 LeRobot 桥接 | 优先通过 ROS topic/service、DDS、socket 或独立进程桥接；若必须同进程，需从源码构建兼容 rclpy 并单独记录，不混用未经验证的 Python ABI。 |
| ACT / ALOHA 仿真环境 | 固定 lerobot/aloha_sim_transfer_cube_human 数据集 revision 和 AlohaTransferCube-v0 环境；先验证 v0.6.0 的 feature/action 兼容性，再训练与评测。 |
| SmolVLA / LIBERO 仿真环境 | 独立 Linux/MuJoCo 环境；固定 HuggingFaceVLA/libero 数据集 revision、libero_10 任务与 observation/action schema，训练和评测必须使用兼容空间。 |

### 软件、课程与官方文档

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

### 硬件与现场资源

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

### 账号、权限与协作资源

| ID | 资源 | 要求 |
|---|---|---|
| A01 | [GitHub 账号与独立仓库](https://github.com/) | 学习阶段可先私有；第 15 周通过许可、隐私与安全审查后再公开，启用 Issues、Actions 与 Release |
| A02 | [Hugging Face Hub 账号](https://huggingface.co/) | 用于获准数据集、模型、Dataset Card 和 Model Card；私有资料不得误上传到公开仓库 |
| A03 | [实验跟踪账号](https://wandb.ai/) | W&B 可选；若不用则以本地 MLflow 或结构化日志替代，严禁上传密钥、原始隐私视频和厂商私有数据 |
| A04 | [按量 GPU 与预算告警](https://huggingface.co/docs/hub/jobs) | 仅在本地冒烟和 ACT 验证通过后使用；每个任务必须设置最长时间、费用上限和自动终止 |
| A05 | 机械臂所有者授权与使用排期 | 书面确认可用时段、设备责任、SDK/日志/视频/适配代码的公开边界，以及损坏与紧急停止处理方式 |
| A06 | 独立评审者 | 至少两名未参与对应文档编写的人，可由机械臂同学、软件同事或目标岗位从业者担任；用于任务判定、README 60 秒测试和发布前复核 |

### 预算与采购门

- 第1周只使用现有电脑；第2周确认开发板、传感器、CAN收发器/USB-CAN和测量工具后才采购缺件。
- MCU/CAN/ARM板采购服务于嵌入式主线；机械臂、Jetson、深度相机不在前6周购买。
- Day49 机械臂五项前置条件任一不满足，自动选择S轨，不因已经投入时间而追加采购。
- 云GPU必须先通过CPU/小批smoke，设置预算告警和最长运行时间；训练完成不是2小时人工任务的必达条件。
- 真实硬件测试优先购买安全附件、急停和可靠供电，不优先升级算力。
- 公开前必须删除公司源码、私有协议、密钥、设备序列号、原始个人视频和联系方式。

## Day 49 后的双轨执行

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

## 16 周总览

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

## 112 天逐日执行表

### 第 1 周｜真实边界、环境与工程基线｜2026-08-24～2026-08-30

**本周目标：** 建立私有学习仓库、可复现环境和证据账本，并用可运行测试确认当前 C/C++、Linux 与 Python 基线。

**阶段门：** 从新 shell 可重建环境；C/C++ 与 Python 最小测试均通过；定位文档明确哪些是既有经验、学习目标和禁用表述。

<a id="day-001"></a>

#### Day 001｜2026-08-24 星期一｜2 小时｜项目启动与真实性边界

**详细执行指南：** [Day 001 详细执行指南](daily-guides/day-001.md)

**当天任务**

- [ ] 阅读 100 岗位报告的分类和高频技能，确定 P0/P1/P2 目标岗位。
- [ ] 盘点现有 Linux、C/C++、Python、4G、IoT、Flutter 证据，以及 ROS2、VLA、机械臂等缺口。
- [ ] 建立学习日志、实验编号和“未验证不得写入简历”的证据规则。

**所需资源：** [R01 LeRobot v0.6.0 官方仓库](https://github.com/huggingface/lerobot/tree/v0.6.0)；[R03 Hugging Face Robot Learning Course](https://huggingface.co/learn/robotics-course/en/unit0/1)；[R20 GitHub Actions 文档](https://docs.github.com/en/actions)

**当天交付物：** docs/positioning.md 与 evidence-ledger.csv 初版

**完成验收：** 每项能力均标注“已有证据/学习中/未开始”，且 CAN、伺服、ROS2、VLA 不被写成项目经验。

<a id="day-002"></a>

#### Day 002｜2026-08-25 星期二｜2 小时｜Linux 与 Python 环境固定

**详细执行指南：** [Day 002 详细执行指南](daily-guides/day-002.md)

**当天任务**

- [ ] 确认 Ubuntu、NVIDIA 驱动、CUDA 与磁盘空间；无独显时记录云 GPU 方案。
- [ ] 为 LeRobot 创建独立 Python 3.12 uv/venv，安装 v0.6.0 tag 并保存 commit 与精确依赖。
- [ ] 建立 Ubuntu、驱动、CUDA、PyTorch、LeRobot、ROS2 的兼容矩阵；ROS 系统环境与 LeRobot 环境不混用。

**所需资源：** [R01 LeRobot v0.6.0 官方仓库](https://github.com/huggingface/lerobot/tree/v0.6.0)；[R02 LeRobot 安装指南](https://huggingface.co/docs/lerobot/v0.6.0/en/installation)；H02 Linux 开发主机；H03 NVIDIA GPU 或按量云 GPU

**当天交付物：** environment.md、依赖锁文件与诊断输出

**完成验收：** 在新 shell 中按脚本激活 LeRobot 环境并导入 torch、lerobot、opencv；输出中的 LeRobot commit 与锁定值一致。

<a id="day-003"></a>

#### Day 003｜2026-08-26 星期三｜2 小时｜仓库、分支与基础 CI

**详细执行指南：** [Day 003 详细执行指南](daily-guides/day-003.md)

**当天任务**

- [ ] 建立独立私有 EdgeVLA/Embedded 学习仓库，写明当前是学习与作品建设阶段，不复制任何公司源码。
- [ ] 配置 Python、C++17/CMake 的格式检查、构建和最小单元测试；CI 只跑小型、无硬件任务。
- [ ] 加入密钥、数据、模型、原始视频、设备标识和本机诊断文件的忽略与隐私检查规则。

**所需资源：** [R20 GitHub Actions 文档](https://docs.github.com/en/actions)；[R21 Docker 文档](https://docs.docker.com/)；[R34 C++ Core Guidelines](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines)；[R35 CMake 官方教程](https://cmake.org/cmake/help/latest/guide/tutorial/)；[A01 GitHub 账号与独立仓库](https://github.com/)

**当天交付物：** 仓库骨架、README 状态声明、首个绿色 CI

**完成验收：** 从空目录按 README 可完成安装和测试；仓库中无密钥、权重或隐私数据。

<a id="day-004"></a>

#### Day 004｜2026-08-27 星期四｜2 小时｜C 与现代 C++ 基线测评

**详细执行指南：** [Day 004 详细执行指南](daily-guides/day-004.md)

**当天任务**

- [ ] 完成 20 题闭卷自测：指针、生命周期、内存布局、volatile、大小端、对齐、线程安全与 RAII；不会的题原样记录。
- [ ] 分别用 C11 和 C++17 实现定长环形缓冲区，明确满/空策略、越界行为和所有权，不使用未定义行为。
- [ ] 为正常写读、回绕、满队列、空队列和并发边界编写测试，并用 AddressSanitizer/UBSan 运行。

**所需资源：** [R34 C++ Core Guidelines](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines)；[R35 CMake 官方教程](https://cmake.org/cmake/help/latest/guide/tutorial/)；[R42 GoogleTest 官方入门](https://google.github.io/googletest/primer.html)

**当天交付物：** cpp/ring_buffer、tests/ring_buffer_test.cpp 与 docs/c-cpp-baseline.md

**完成验收：** Debug/Release 均构建；至少 8 个测试通过；ASan/UBSan 无报告；基线文档列出不少于 5 个真实缺口。

<a id="day-005"></a>

#### Day 005｜2026-08-28 星期五｜2 小时｜CMake、GoogleTest 与可重复构建

**详细执行指南：** [Day 005 详细执行指南](daily-guides/day-005.md)

**当天任务**

- [ ] 将环形缓冲区拆为 library、test、example 三个 target，不使用全局 include_directories。
- [ ] 加入编译告警并在学习代码中按错误处理；生成 compile_commands.json，记录编译器和 CMake 版本。
- [ ] 写一份从空 build 目录开始的构建脚本，并在第二个干净目录重复执行。

**所需资源：** [R35 CMake 官方教程](https://cmake.org/cmake/help/latest/guide/tutorial/)；[R42 GoogleTest 官方入门](https://google.github.io/googletest/primer.html)；[R20 GitHub Actions 文档](https://docs.github.com/en/actions)

**当天交付物：** CMakeLists.txt、cmake/、scripts/build-and-test.sh 与构建日志

**完成验收：** 两个干净 build 目录均能 configure/build/ctest；脚本无依赖手工修改的绝对路径。

<a id="day-006"></a>

#### Day 006｜2026-08-29 星期六｜4 小时｜Linux 调试工具最小闭环

**详细执行指南：** [Day 006 详细执行指南](daily-guides/day-006.md)

**当天任务**

- [ ] 为示例程序制造一次内存越界、一次死锁风险和一次系统调用失败，先记录症状再修复。
- [ ] 分别使用 gdb、strace、Valgrind 或 Sanitizer 定位问题，保存脱敏命令与关键结论。
- [ ] 给程序增加退出信号处理、错误码和结构化日志，验证异常退出不会留下临时文件。

**所需资源：** [R36 Linux tracing 与性能工具文档](https://docs.kernel.org/trace/index.html)；[R34 C++ Core Guidelines](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines)；H02 Linux 开发主机

**当天交付物：** labs/linux-debugging、reports/linux-debugging-baseline.md

**完成验收：** 三个故障都有复现步骤、定位证据、修复提交和回归测试；报告中不包含用户名、主机名或公司路径。

<a id="day-007"></a>

#### Day 007｜2026-08-30 星期日｜2 小时｜第一周复现与能力边界复盘

**详细执行指南：** [Day 007 详细执行指南](daily-guides/day-007.md)

**当天任务**

- [ ] 从新 clone 或干净工作树按 README 重建，计时并记录每个失败点，不复用当前 shell 的隐式环境。
- [ ] 运行 C/C++、Python、隐私和格式检查；将结果链接回 evidence ledger，而不是只截图。
- [ ] 更新 P0/P1/P2 定位：主投嵌入式 Linux/设备系统，补强 MCU/RTOS，机器人部署作为中期方向。

**所需资源：** [R20 GitHub Actions 文档](https://docs.github.com/en/actions)；[R34 C++ Core Guidelines](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines)；[R35 CMake 官方教程](https://cmake.org/cmake/help/latest/guide/tutorial/)

**当天交付物：** reviews/week-01.md、可复现构建日志与更新后的证据账本

**完成验收：** 干净环境在 30 分钟内完成构建测试；所有失败都有 issue/下一动作；没有把学习代码写成生产项目经验。

### 第 2 周｜MCU 外设驱动与硬件测量｜2026-08-31～2026-09-06

**本周目标：** 在真实开发板上完成 GPIO、UART DMA、I2C 传感器和 SPI Flash；无板时先用接口测试桩，但第 14 天前必须做硬件获取决策。

**阶段门：** 至少三类外设有可编译驱动、错误路径测试和真实波形/日志；若硬件未到，必须保留 BLOCKED 状态和到货计划，不得用 mock 冒充实测。

<a id="day-008"></a>

#### Day 008｜2026-08-31 星期一｜2 小时｜开发板、原理图与引脚清单

**详细执行指南：** [Day 008 详细执行指南](daily-guides/day-008.md)

**当天任务**

- [ ] 选定一块本人可持续使用的 HC32/STM32 开发板，保存准确型号、芯片手册、原理图和调试器版本。
- [ ] 列出时钟、Flash/RAM、GPIO、UART、I2C、SPI、CAN 与调试引脚，标记电平和复用冲突。
- [ ] 运行厂商最小工程并保存编译尺寸、下载日志和 LED 现象；失败时只诊断，不同时升级全部工具链。

**所需资源：** [R37 Arm CMSIS 与 Cortex-M 文档](https://arm-software.github.io/CMSIS_6/latest/General/index.html)；H12 可持续使用的 HC32/STM32 开发板；H15 逻辑分析仪/示波器与安全供电

**当天交付物：** hardware/mcu-inventory.md 与 firmware/board-smoke

**完成验收：** 文档能让他人接对电源和调试器；最小工程可重复编译下载；没有猜测未核验的芯片参数。

<a id="day-009"></a>

#### Day 009｜2026-09-01 星期二｜2 小时｜GPIO、按键与去抖状态机

**详细执行指南：** [Day 009 详细执行指南](daily-guides/day-009.md)

**当天任务**

- [ ] 用寄存器/HAL 的明确边界实现 LED 输出与按键输入，记录上拉、有效电平和中断触发方式。
- [ ] 实现非阻塞去抖状态机，不在中断中延时；加入短按、长按和抖动输入测试。
- [ ] 用逻辑分析仪测量按键抖动和响应延迟，保存原始采样与结论。

**所需资源：** [R37 Arm CMSIS 与 Cortex-M 文档](https://arm-software.github.io/CMSIS_6/latest/General/index.html)；H12 可持续使用的 HC32/STM32 开发板；H15 逻辑分析仪/示波器与安全供电

**当天交付物：** firmware/drivers/gpio_button、tests/button_fsm 与波形记录

**完成验收：** 10 次短按和 5 次长按均正确；ISR 无阻塞调用；报告写明采样率、阈值与最大响应时间。

<a id="day-010"></a>

#### Day 010｜2026-09-02 星期三｜2 小时｜UART DMA 环形缓冲区

**详细执行指南：** [Day 010 详细执行指南](daily-guides/day-010.md)

**当天任务**

- [ ] 配置 UART RX DMA 或空闲中断，使用定长环形缓冲区接收分段数据。
- [ ] 实现长度校验、超时、溢出计数和错误恢复；协议解析器与硬件收发分层。
- [ ] 用脚本发送粘包、拆包、超长帧和随机字节，统计处理与丢弃结果。

**所需资源：** [R37 Arm CMSIS 与 Cortex-M 文档](https://arm-software.github.io/CMSIS_6/latest/General/index.html)；H12 可持续使用的 HC32/STM32 开发板；H15 逻辑分析仪/示波器与安全供电

**当天交付物：** firmware/drivers/uart_dma、tools/uart_fuzzer.py 与测试报告

**完成验收：** 连续发送不少于 1000 帧无死锁；所有非法帧被计数；缓冲区越界测试通过。

<a id="day-011"></a>

#### Day 011｜2026-09-03 星期四｜2 小时｜I2C 传感器独立驱动

**详细执行指南：** [Day 011 详细执行指南](daily-guides/day-011.md)

**当天任务**

- [ ] 根据传感器 datasheet 写寄存器表、上电时序和量程配置，不直接复制不明来源驱动。
- [ ] 实现设备 ID 检查、读写、超时、NACK 与重初始化路径，将原始值和物理量转换分开。
- [ ] 用逻辑分析仪核对地址、ACK、时钟频率和一次完整采样事务。

**所需资源：** [R37 Arm CMSIS 与 Cortex-M 文档](https://arm-software.github.io/CMSIS_6/latest/General/index.html)；H13 I2C传感器、SPI Flash与基础接线；H15 逻辑分析仪/示波器与安全供电

**当天交付物：** firmware/drivers/i2c_sensor、docs/i2c-timing.md 与波形

**完成验收：** 冷启动 20 次均识别设备；拔掉传感器后在限定时间内报错且任务不阻塞；物理量转换有边界测试。

<a id="day-012"></a>

#### Day 012｜2026-09-04 星期五｜2 小时｜SPI Flash 与掉电安全参数区

**详细执行指南：** [Day 012 详细执行指南](daily-guides/day-012.md)

**当天任务**

- [ ] 依据 JEDEC ID 确认 Flash，完成读 ID、页编程、扇区擦除和忙状态轮询。
- [ ] 设计双副本参数页，包含版本、长度、序号和 CRC；写入流程避免覆盖最后一份有效配置。
- [ ] 在写入不同阶段模拟复位，验证启动后选择最新有效副本。

**所需资源：** [R37 Arm CMSIS 与 Cortex-M 文档](https://arm-software.github.io/CMSIS_6/latest/General/index.html)；H13 I2C传感器、SPI Flash与基础接线；H15 逻辑分析仪/示波器与安全供电

**当天交付物：** firmware/drivers/spi_flash、firmware/storage/config_store 与掉电测试表

**完成验收：** 跨页读写和擦除测试通过；至少 6 个复位注入点均能恢复一个有效配置；不把仿真复位写成真实断电。

<a id="day-013"></a>

#### Day 013｜2026-09-05 星期六｜4 小时｜外设故障注入与波形复核

**详细执行指南：** [Day 013 详细执行指南](daily-guides/day-013.md)

**当天任务**

- [ ] 建立 I2C NACK、UART 噪声、SPI 超时和按键抖动四类故障用例。
- [ ] 逐项运行并记录故障检测时间、恢复动作、错误计数和是否需要人工重启。
- [ ] 整理关键波形、固件版本、测试接线和复现命令，剔除没有测试条件的漂亮截图。

**所需资源：** [R37 Arm CMSIS 与 Cortex-M 文档](https://arm-software.github.io/CMSIS_6/latest/General/index.html)；H12 可持续使用的 HC32/STM32 开发板；H13 I2C传感器、SPI Flash与基础接线；H15 逻辑分析仪/示波器与安全供电

**当天交付物：** reports/peripheral-fault-matrix.csv 与 evidence/peripheral-waveforms

**完成验收：** 四类故障均有预期/实际结果；至少一项负面结论被保留；同一固件版本可重复复现。

<a id="day-014"></a>

#### Day 014｜2026-09-06 星期日｜2 小时｜第二周阶段门与硬件采购决策

**详细执行指南：** [Day 014 详细执行指南](daily-guides/day-014.md)

**当天任务**

- [ ] 从清空 build 目录开始重新编译下载，逐项执行 GPIO/UART/I2C/SPI 冒烟。
- [ ] 检查硬件是否足以进入 FreeRTOS 与 CAN；缺 CAN 时确定收发器/USB-CAN 的具体获取方式和最晚日期。
- [ ] 用 10 分钟口述解释四种总线的电气、时序和典型失败差异，记录答不上来的问题。

**所需资源：** [R37 Arm CMSIS 与 Cortex-M 文档](https://arm-software.github.io/CMSIS_6/latest/General/index.html)；[R38 FreeRTOS 官方文档](https://www.freertos.org/Documentation/00-Overview)；H12 可持续使用的 HC32/STM32 开发板；H14 CAN收发器与USB-CAN/第二节点；H15 逻辑分析仪/示波器与安全供电

**当天交付物：** reviews/week-02.md、硬件决策记录与复现日志

**完成验收：** 真实硬件项按 PASS/PARTIAL/BLOCKED 标注；不存在用仿真波形替代实测的条目；下周依赖已落实。

### 第 3 周｜FreeRTOS 多传感器节点｜2026-09-07～2026-09-13

**本周目标：** 把外设驱动组织成可测量的实时系统，形成采集、处理、存储、通信和故障恢复闭环。

**阶段门：** 多任务节点连续运行 24 小时；栈、CPU、周期抖动和异常恢复均有测量；不存在在 ISR 中阻塞或用高优先级掩盖设计问题。

<a id="day-015"></a>

#### Day 015｜2026-09-07 星期一｜2 小时｜任务模型与周期预算

**详细执行指南：** [Day 015 详细执行指南](daily-guides/day-015.md)

**当天任务**

- [ ] 画出采集、解析、存储、通信和监控任务及数据流。
- [ ] 为每个任务定义周期、截止时间、优先级、栈预算和最坏阻塞点。
- [ ] 先建立空任务与运行时统计，测量空载 CPU 和调度基线。

**所需资源：** [R38 FreeRTOS 官方文档](https://www.freertos.org/Documentation/00-Overview)；H12 可持续使用的 HC32/STM32 开发板

**当天交付物：** docs/rtos-task-design.md 与 firmware/app/task_skeleton

**完成验收：** 任务表包含周期/优先级/栈/阻塞资源；空载统计可重复；没有凭感觉填写性能数字。

<a id="day-016"></a>

#### Day 016｜2026-09-08 星期二｜2 小时｜Queue、Semaphore 与所有权

**详细执行指南：** [Day 016 详细执行指南](daily-guides/day-016.md)

**当天任务**

- [ ] 用 Queue 传递传感器样本，定义值拷贝或对象池所有权。
- [ ] 用二值信号量连接 ISR 与任务，互斥锁只保护共享外设且设置超时。
- [ ] 构造队列满、消费者暂停和资源竞争测试，观察丢弃策略。

**所需资源：** [R38 FreeRTOS 官方文档](https://www.freertos.org/Documentation/00-Overview)；H12 可持续使用的 HC32/STM32 开发板

**当天交付物：** firmware/app/pipeline 与 tests/rtos_queue_cases.md

**完成验收：** 队列满不会覆盖未消费数据；所有等待都有上限；测试能解释 semaphore、mutex 和 queue 的选择。

<a id="day-017"></a>

#### Day 017｜2026-09-09 星期三｜2 小时｜ISR 到任务与 DMA 完成路径

**详细执行指南：** [Day 017 详细执行指南](daily-guides/day-017.md)

**当天任务**

- [ ] 将 UART/I2C/SPI 完成事件统一转交任务处理，ISR 只做清标志和通知。
- [ ] 测量中断到任务被唤醒的延迟，并记录测试频率、优化级别和测量点。
- [ ] 加入中断风暴或重复完成事件，确认系统仍可响应看门狗任务。

**所需资源：** [R38 FreeRTOS 官方文档](https://www.freertos.org/Documentation/00-Overview)；H12 可持续使用的 HC32/STM32 开发板；H15 逻辑分析仪/示波器与安全供电

**当天交付物：** firmware/platform/isr_bridge 与 reports/isr-latency.csv

**完成验收：** 至少 1000 个样本；报告给出中位数/最大值而非单次最好值；ISR 路径无动态分配和阻塞日志。

<a id="day-018"></a>

#### Day 018｜2026-09-10 星期四｜2 小时｜多传感器采样与时间戳

**详细执行指南：** [Day 018 详细执行指南](daily-guides/day-018.md)

**当天任务**

- [ ] 统一样本结构：source、sequence、monotonic timestamp、quality 和 raw value。
- [ ] 按各传感器速率采样并在处理层转换单位，不把协议接入描述成底层传感器融合。
- [ ] 模拟一类传感器延迟和一类掉线，验证其他采集通道继续工作。

**所需资源：** [R37 Arm CMSIS 与 Cortex-M 文档](https://arm-software.github.io/CMSIS_6/latest/General/index.html)；[R38 FreeRTOS 官方文档](https://www.freertos.org/Documentation/00-Overview)；H13 I2C传感器、SPI Flash与基础接线

**当天交付物：** firmware/app/sensor_pipeline 与 sample-log.csv

**完成验收：** 序号可检测丢样；时间戳单调；单设备掉线不阻塞整个采集任务。

<a id="day-019"></a>

#### Day 019｜2026-09-11 星期五｜2 小时｜看门狗、故障状态与受控恢复

**详细执行指南：** [Day 019 详细执行指南](daily-guides/day-019.md)

**当天任务**

- [ ] 定义启动、运行、降级、故障和恢复状态，列出每个状态允许的动作。
- [ ] 为关键任务设置心跳窗口，只有全部健康才喂硬件看门狗。
- [ ] 注入任务卡死、队列堵塞和传感器故障，分别验证重启或降级路径。

**所需资源：** [R38 FreeRTOS 官方文档](https://www.freertos.org/Documentation/00-Overview)；H12 可持续使用的 HC32/STM32 开发板

**当天交付物：** firmware/safety/supervisor 与 reports/recovery-matrix.csv

**完成验收：** 至少三类故障有真实触发记录；看门狗不会被单一高优先级任务无条件喂；恢复原因可追溯。

<a id="day-020"></a>

#### Day 020｜2026-09-12 星期六｜4 小时｜设备协议与主机模拟器

**详细执行指南：** [Day 020 详细执行指南](daily-guides/day-020.md)

**当天任务**

- [ ] 定义版本化二进制或 JSON 测试协议，包含设备 ID、序号、时间、状态和 CRC/长度。
- [ ] 实现 MCU 编解码器和 Python 主机模拟器，生成正常、边界和畸形帧。
- [ ] 用 golden vectors 验证两端一致，明确大小端和升级兼容策略。

**所需资源：** [R30 OASIS MQTT 5.0 规范](https://docs.oasis-open.org/mqtt/mqtt/v5.0/mqtt-v5.0.html)；[R38 FreeRTOS 官方文档](https://www.freertos.org/Documentation/00-Overview)；H02 Linux 开发主机；H12 可持续使用的 HC32/STM32 开发板

**当天交付物：** protocol/device-v1.md、firmware/protocol 与 tools/device_simulator.py

**完成验收：** 至少 20 个 golden vectors 双端通过；未知字段/版本行为明确；fuzzer 不导致 MCU 崩溃。

<a id="day-021"></a>

#### Day 021｜2026-09-13 星期日｜2 小时｜24 小时运行与第三周复盘

**详细执行指南：** [Day 021 详细执行指南](daily-guides/day-021.md)

**当天任务**

- [ ] 冻结固件、接线和测试脚本版本，启动不少于 24 小时运行。
- [ ] 采集复位次数、错误计数、最小剩余栈、CPU 占用和采样缺口。
- [ ] 不等待墙钟空转：运行期间整理架构、问题单和下周 CAN 前置知识。

**所需资源：** [R38 FreeRTOS 官方文档](https://www.freertos.org/Documentation/00-Overview)；H11 原始数据独立备份介质；H12 可持续使用的 HC32/STM32 开发板；H15 逻辑分析仪/示波器与安全供电

**机器墙钟时间：** 预计 24 小时后台运行；硬上限 36 小时；超过上限停止并保留日志；不能因未满时长伪造 PASS。

**当天交付物：** reports/rtos-soak-24h.md、原始统计与 week-03-review.md

**完成验收：** 完成真实 24 小时或明确写 PARTIAL 并继续后台运行；所有指标带固件 commit 和采样条件。

### 第 4 周｜CAN、Bootloader 与升级回滚｜2026-09-14～2026-09-20

**本周目标：** 完成 MCU CAN 节点、Linux SocketCAN 工具链及可恢复固件升级，补齐求职中最关键的总线和升级证据。

**阶段门：** 真实 CAN 链路可处理心跳、超时和 Bus-Off；升级在正常、损坏和断电场景均有确定结果；阶段产物可脱敏复现。

<a id="day-022"></a>

#### Day 022｜2026-09-14 星期一｜2 小时｜CAN 2.0 与 SocketCAN 基线

**详细执行指南：** [Day 022 详细执行指南](daily-guides/day-022.md)

**当天任务**

- [ ] 整理仲裁、标准/扩展帧、DLC、错误计数、Bus-Off 和终端电阻。
- [ ] 在 Linux 建立 vcan0，用 candump/cansend 发送、过滤并记录错误输入。
- [ ] 写最小 SocketCAN 程序，使用 poll/epoll 接收并保留时间戳。

**所需资源：** [R39 Linux SocketCAN 官方文档](https://docs.kernel.org/networking/can.html)；H02 Linux 开发主机

**当天交付物：** labs/socketcan-baseline 与 docs/can-notes.md

**完成验收：** vcan 测试可重复；程序处理标准帧、扩展帧和无效长度；口述不把 CAN 等同 UART。

<a id="day-023"></a>

#### Day 023｜2026-09-15 星期二｜2 小时｜MCU CAN 收发与过滤

**详细执行指南：** [Day 023 详细执行指南](daily-guides/day-023.md)

**当天任务**

- [ ] 配置波特率、采样点和过滤器，记录时钟推导。
- [ ] 使用两节点或 USB-CAN 完成收发，给每类报文固定 ID 和周期。
- [ ] 用示波器/分析仪核对终端电阻、电平和帧周期。

**所需资源：** [R39 Linux SocketCAN 官方文档](https://docs.kernel.org/networking/can.html)；H12 可持续使用的 HC32/STM32 开发板；H14 CAN收发器与USB-CAN/第二节点；H15 逻辑分析仪/示波器与安全供电

**当天交付物：** firmware/drivers/can、configs/can-matrix.csv 与波形

**完成验收：** 连续 10000 帧统计完成；过滤器拒绝非目标 ID；报告记录真实总线负载和错误计数。

<a id="day-024"></a>

#### Day 024｜2026-09-16 星期三｜2 小时｜心跳、命令确认与超时

**详细执行指南：** [Day 024 详细执行指南](daily-guides/day-024.md)

**当天任务**

- [ ] 设计节点状态、心跳、命令、ACK/NACK 和诊断报文。
- [ ] 实现序号、重复命令幂等、确认超时和有限重试。
- [ ] 主机脚本随机丢弃/重复/乱序帧，验证状态机不会重复执行危险动作。

**所需资源：** [R39 Linux SocketCAN 官方文档](https://docs.kernel.org/networking/can.html)；H12 可持续使用的 HC32/STM32 开发板；H14 CAN收发器与USB-CAN/第二节点

**当天交付物：** protocol/can-v1.md、firmware/protocol/can 与 tools/can_fault_injector.py

**完成验收：** 协议有状态图；重复命令测试通过；所有重试有次数和总时限。

<a id="day-025"></a>

#### Day 025｜2026-09-17 星期四｜2 小时｜Bus-Off 与节点恢复

**详细执行指南：** [Day 025 详细执行指南](daily-guides/day-025.md)

**当天任务**

- [ ] 制造断开终端、电缆拔插或软件错误帧场景，先定义安全预期。
- [ ] 记录 error-passive/Bus-Off 进入条件、检测方式和恢复策略。
- [ ] 验证恢复期间输出保持安全状态，避免无限快速重启。

**所需资源：** [R39 Linux SocketCAN 官方文档](https://docs.kernel.org/networking/can.html)；H12 可持续使用的 HC32/STM32 开发板；H14 CAN收发器与USB-CAN/第二节点；H15 逻辑分析仪/示波器与安全供电

**当天交付物：** reports/can-recovery.csv 与恢复实现

**完成验收：** 至少 5 次真实故障循环；每次检测/恢复时间有记录；无法制造的故障明确标为未验证。

<a id="day-026"></a>

#### Day 026｜2026-09-18 星期五｜2 小时｜Flash 分区与镜像格式

**详细执行指南：** [Day 026 详细执行指南](daily-guides/day-026.md)

**当天任务**

- [ ] 依据真实 Flash 容量画 boot/app-a/app-b/config 分区并核对链接脚本。
- [ ] 定义镜像头：magic、版本、长度、目标、hash/CRC 和签名预留。
- [ ] 编写主机打包器和解析测试，拒绝越界、降级或损坏镜像。

**所需资源：** [R37 Arm CMSIS 与 Cortex-M 文档](https://arm-software.github.io/CMSIS_6/latest/General/index.html)；H12 可持续使用的 HC32/STM32 开发板

**当天交付物：** docs/flash-layout.md、tools/firmware_pack.py 与 golden images

**完成验收：** 链接结果不越界；损坏/超长/错误目标镜像均拒绝；版本策略写明。

<a id="day-027"></a>

#### Day 027｜2026-09-19 星期六｜4 小时｜Bootloader、升级与断电恢复

**详细执行指南：** [Day 027 详细执行指南](daily-guides/day-027.md)

**当天任务**

- [ ] 实现最小 Bootloader 验证和跳转，保留回滚计数与启动确认。
- [ ] 通过 UART 或 CAN 分块写入非活动分区，逐块校验并限制重试。
- [ ] 在擦除、接收、校验、切换和首次启动阶段做复位注入。

**所需资源：** [R37 Arm CMSIS 与 Cortex-M 文档](https://arm-software.github.io/CMSIS_6/latest/General/index.html)；[R39 Linux SocketCAN 官方文档](https://docs.kernel.org/networking/can.html)；H12 可持续使用的 HC32/STM32 开发板；H14 CAN收发器与USB-CAN/第二节点；H15 逻辑分析仪/示波器与安全供电

**当天交付物：** firmware/bootloader、tools/updater 与升级测试矩阵

**完成验收：** 正常升级、损坏镜像和至少 5 个复位点有结果；任一失败不会破坏最后可启动镜像。

<a id="day-028"></a>

#### Day 028｜2026-09-20 星期日｜2 小时｜嵌入式阶段发布门

**详细执行指南：** [Day 028 详细执行指南](daily-guides/day-028.md)

**当天任务**

- [ ] 从 tag 前的干净 clone 构建 application、bootloader 和主机工具。
- [ ] 重复运行外设、RTOS、CAN、升级及故障测试，汇总未通过项。
- [ ] 生成脱敏 v0.1.0 候选说明；硬件证据不足时只发布代码/仿真范围。

**所需资源：** [R20 GitHub Actions 文档](https://docs.github.com/en/actions)；[R37 Arm CMSIS 与 Cortex-M 文档](https://arm-software.github.io/CMSIS_6/latest/General/index.html)；[R39 Linux SocketCAN 官方文档](https://docs.kernel.org/networking/can.html)；H11 原始数据独立备份介质；H12 可持续使用的 HC32/STM32 开发板

**当天交付物：** releases/mcu-node-v0.1.0-rc.md 与 week-04-review.md

**完成验收：** 阶段门逐项 PASS/PARTIAL/BLOCKED；无公司代码、私有协议、设备序列号和联系方式；缓冲时间只用于复现或补失败项。

### 第 5 周｜Cortex-A7 Linux 系统构建｜2026-09-21～2026-09-27

**本周目标：** 用独立学习板或可公开仿真目标完成 Buildroot、启动链、设备树和服务管理，不把应用层经验夸大成完整 BSP。

**阶段门：** 可从干净配置生成镜像并启动；启动日志、设备树变更、systemd 服务和 C++ daemon 均有可复现证据。

<a id="day-029"></a>

#### Day 029｜2026-09-21 星期一｜2 小时｜Linux 板卡与 BSP 边界

**详细执行指南：** [Day 029 详细执行指南](daily-guides/day-029.md)

**当天任务**

- [ ] 确定真实 ARM 板或 QEMU 目标，记录 SoC、Cortex-A7/其他内核、启动介质和串口接线。
- [ ] 区分厂商 BSP、上游源码、本人配置和本人代码；列出不能公开的 SDK/镜像。
- [ ] 保存一次完整启动日志并标注 BootROM/U-Boot/Kernel/init/应用阶段。

**所需资源：** [R40 Buildroot 官方手册](https://buildroot.org/downloads/manual/manual.html)；[R41 Linux内核设备树文档](https://docs.kernel.org/devicetree/index.html)；H16 ARM Linux开发板或QEMU目标；H15 逻辑分析仪/示波器与安全供电

**当天交付物：** hardware/linux-board-inventory.md 与 boot/boot-baseline.log

**完成验收：** 每段启动责任边界清楚；若无真实板则标记 QEMU-only；不把厂商驱动算作本人开发。

<a id="day-030"></a>

#### Day 030｜2026-09-22 星期二｜2 小时｜Buildroot 最小镜像

**详细执行指南：** [Day 030 详细执行指南](daily-guides/day-030.md)

**当天任务**

- [ ] 固定 Buildroot release 和 defconfig，首次只启用串口、网络和必要调试工具。
- [ ] 在独立输出目录构建，记录下载缓存、工具链和镜像 hash。
- [ ] 启动镜像并验证登录、时间、网络和只读/可写分区预期。

**所需资源：** [R40 Buildroot 官方手册](https://buildroot.org/downloads/manual/manual.html)；H02 Linux 开发主机；H16 ARM Linux开发板或QEMU目标

**机器墙钟时间：** 预计 首次构建 1～3 小时；硬上限 6 小时；构建可后台继续；当天人工时间仍限制为 2 小时，超时记录后停止排障。

**当天交付物：** buildroot/board/edge_gateway、defconfig 与 build-manifest.md

**完成验收：** 干净输出目录可重建；镜像 hash 与配置有记录；构建过程不依赖未说明的本机文件。

<a id="day-031"></a>

#### Day 031｜2026-09-23 星期三｜2 小时｜U-Boot 环境与可恢复启动

**详细执行指南：** [Day 031 详细执行指南](daily-guides/day-031.md)

**当天任务**

- [ ] 记录 bootcmd、bootargs、分区和内核/DTB 加载位置。
- [ ] 添加主/备启动计数或可回退变量，不修改未知生产设备。
- [ ] 模拟主镜像缺失或校验失败，观察并记录回退行为。

**所需资源：** [R41 Linux内核设备树文档](https://docs.kernel.org/devicetree/index.html)；H16 ARM Linux开发板或QEMU目标；H15 逻辑分析仪/示波器与安全供电

**当天交付物：** boot/u-boot-flow.md、脱敏环境快照与回退日志

**完成验收：** 正常和失败启动均有日志；变量修改可恢复；不声称编写了未实际修改的 U-Boot 驱动。

<a id="day-032"></a>

#### Day 032｜2026-09-24 星期四｜2 小时｜设备树与一个可验证外设

**详细执行指南：** [Day 032 详细执行指南](daily-guides/day-032.md)

**当天任务**

- [ ] 从原理图和现有 DTS 找到一个 GPIO/I2C/SPI 外设节点，记录 compatible、reg、interrupt 和 pinctrl。
- [ ] 用 overlay 或受控源码变更启停设备，编译 DTB 并用 dtc 反编译核对。
- [ ] 通过 sysfs/libgpiod/IIO 或最小用户态程序验证设备出现和错误路径。

**所需资源：** [R41 Linux内核设备树文档](https://docs.kernel.org/devicetree/index.html)；H16 ARM Linux开发板或QEMU目标；H13 I2C传感器、SPI Flash与基础接线

**当天交付物：** linux/dts/、docs/device-tree-case.md 与启动验证

**完成验收：** 变更前后现象可比较；DTB 可反编译；边界表述为设备树配置/用户态验证，除非确实写了驱动。

<a id="day-033"></a>

#### Day 033｜2026-09-25 星期五｜2 小时｜systemd 服务、看门狗与日志

**详细执行指南：** [Day 033 详细执行指南](daily-guides/day-033.md)

**当天任务**

- [ ] 将设备 daemon 定义为非 root systemd service，设置工作目录、权限、Restart 和启动依赖。
- [ ] 接入 watchdog/health 通知，限制重启频率并保留失败原因。
- [ ] 配置 journald 或日志轮转，验证磁盘上限和崩溃后自动恢复。

**所需资源：** [R42 GoogleTest 官方入门](https://google.github.io/googletest/primer.html)；H16 ARM Linux开发板或QEMU目标

**当天交付物：** deploy/systemd/、configs/logging 与 recovery-log.md

**完成验收：** 杀进程后在预期时间恢复；反复崩溃进入受控失败而非重启风暴；日志不会无限增长。

<a id="day-034"></a>

#### Day 034｜2026-09-26 星期六｜4 小时｜C++17 epoll 设备守护进程

**详细执行指南：** [Day 034 详细执行指南](daily-guides/day-034.md)

**当天任务**

- [ ] 实现 epoll 事件循环管理 timerfd、signal fd 和一个模拟串口/CAN fd。
- [ ] 用 RAII 管理 fd 和线程，定义停止顺序、背压和错误码。
- [ ] 编写并发、断连、半包和优雅退出测试，运行 Sanitizer。

**所需资源：** [R34 C++ Core Guidelines](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines)；[R35 CMake 官方教程](https://cmake.org/cmake/help/latest/guide/tutorial/)；[R42 GoogleTest 官方入门](https://google.github.io/googletest/primer.html)；H02 Linux 开发主机；H16 ARM Linux开发板或QEMU目标

**当天交付物：** gateway/device-daemon 与 unit/integration tests

**完成验收：** 1000 次连接/断连测试无 fd 泄漏；TSan/ASan 适用项无报告；SIGTERM 在限定时间退出。

<a id="day-035"></a>

#### Day 035｜2026-09-27 星期日｜2 小时｜Linux 系统阶段复现

**详细执行指南：** [Day 035 详细执行指南](daily-guides/day-035.md)

**当天任务**

- [ ] 从 defconfig 和仓库重新构建/启动，执行 daemon 与服务测试。
- [ ] 统计启动时间、镜像尺寸、空载内存和服务恢复时间，注明测量方法。
- [ ] 更新 Linux 应用、系统构建、设备树和 BSP/驱动四者的简历边界。

**所需资源：** [R40 Buildroot 官方手册](https://buildroot.org/downloads/manual/manual.html)；[R41 Linux内核设备树文档](https://docs.kernel.org/devicetree/index.html)；[R42 GoogleTest 官方入门](https://google.github.io/googletest/primer.html)；H16 ARM Linux开发板或QEMU目标

**当天交付物：** reviews/week-05.md 与 reproducibility/linux-image.md

**完成验收：** 至少另一空目录复现；四项指标有原始命令；没有把一次设备树配置写成完整 BSP 经验。

### 第 6 周｜边缘网关、可靠性与机器人前置｜2026-09-28～2026-10-04

**本周目标：** 把 MCU/CAN 节点接入 Linux 网关，完成存储转发、升级、观测和长稳，同时补齐机器人坐标系与安全基础。

**阶段门：** 端到端链路在断网、重启、CAN异常和进程崩溃下可恢复；完成至少 48 小时长稳或如实记录 PARTIAL。

<a id="day-036"></a>

#### Day 036｜2026-09-28 星期一｜2 小时｜SocketCAN 网关适配

**详细执行指南：** [Day 036 详细执行指南](daily-guides/day-036.md)

**当天任务**

- [ ] 将 vcan 和真实 can0 统一封装，支持过滤、时间戳和错误帧。
- [ ] 把 MCU 心跳/传感器帧转换为内部类型，未知 ID 保留原始数据但不误解析。
- [ ] 用录制帧回放正常、超时、Bus-Off 和乱序场景。

**所需资源：** [R39 Linux SocketCAN 官方文档](https://docs.kernel.org/networking/can.html)；H14 CAN收发器与USB-CAN/第二节点；H16 ARM Linux开发板或QEMU目标

**当天交付物：** gateway/can-adapter、fixtures/can-replay 与诊断日志

**完成验收：** vcan CI 与真实 CAN 冒烟分开；错误帧可观测；解析器有 golden tests。

<a id="day-037"></a>

#### Day 037｜2026-09-29 星期二｜2 小时｜MQTT 遥测与命令边界

**详细执行指南：** [Day 037 详细执行指南](daily-guides/day-037.md)

**当天任务**

- [ ] 定义设备状态、传感器、告警和命令 topic/schema，写清 QoS、retain 和过期策略。
- [ ] 实现本地 CAN 到 MQTT 遥测，以及云命令到本地受限动作的映射。
- [ ] 验证重复、离线、过期和未授权命令不会绕过本地安全状态。

**所需资源：** [R30 OASIS MQTT 5.0 规范](https://docs.oasis-open.org/mqtt/mqtt/v5.0/mqtt-v5.0.html)；H07 4G 网络与可控网络环境；H16 ARM Linux开发板或QEMU目标

**当天交付物：** gateway/mqtt-bridge、protocol/mqtt-v1.md 与集成测试

**完成验收：** 断网不阻塞 CAN；重复命令幂等；过期命令拒绝且有审计日志。

<a id="day-038"></a>

#### Day 038｜2026-09-30 星期三｜2 小时｜SQLite 存储转发

**详细执行指南：** [Day 038 详细执行指南](daily-guides/day-038.md)

**当天任务**

- [ ] 设计遥测队列表：sequence、created_at、payload_version、retry_count 和状态。
- [ ] 使用事务和批量提交，设置容量、水位和删除策略。
- [ ] 断网写入、重启恢复、恢复网络后限速回传，统计重复和缺口。

**所需资源：** [R42 GoogleTest 官方入门](https://google.github.io/googletest/primer.html)；H16 ARM Linux开发板或QEMU目标

**当天交付物：** gateway/store-forward、schema.sql 与 reports/offline-replay.csv

**完成验收：** 重启后待发送记录不丢；容量达到上限行为明确；回传不会压垮本地实时链路。

<a id="day-039"></a>

#### Day 039｜2026-10-01 星期四｜2 小时｜应用升级与回滚

**详细执行指南：** [Day 039 详细执行指南](daily-guides/day-039.md)

**当天任务**

- [ ] 定义应用包 manifest、版本、hash 和最低兼容数据版本。
- [ ] 下载到临时位置、校验、原子切换并由 systemd 启动确认。
- [ ] 注入下载中断、hash错误、启动失败和数据库不兼容，验证回滚。

**所需资源：** [R21 Docker 文档](https://docs.docker.com/)；[R42 GoogleTest 官方入门](https://google.github.io/googletest/primer.html)；H16 ARM Linux开发板或QEMU目标

**当天交付物：** deploy/update-agent、release manifest 与 rollback-matrix.csv

**完成验收：** 四类失败均保留旧版本可运行；升级日志可追溯；不把应用回滚写成整机 A/B 系统 OTA。

<a id="day-040"></a>

#### Day 040｜2026-10-02 星期五｜2 小时｜性能与资源观测

**详细执行指南：** [Day 040 详细执行指南](daily-guides/day-040.md)

**当天任务**

- [ ] 给事件循环、CAN处理、SQLite批次和MQTT队列增加延迟与水位指标。
- [ ] 用 pidstat/strace/perf/Valgrind 记录空载和压力下 CPU、内存、fd 与热点。
- [ ] 只优化一个有数据支持的瓶颈，并保留优化前后同条件结果。

**所需资源：** [R36 Linux tracing 与性能工具文档](https://docs.kernel.org/trace/index.html)；H16 ARM Linux开发板或QEMU目标

**当天交付物：** observability/、reports/gateway-performance.md

**完成验收：** 报告有相同负载/版本/时长；无内存和fd持续增长；优化结论可由原始数据复核。

<a id="day-041"></a>

#### Day 041｜2026-10-03 星期六｜4 小时｜48 小时端到端长稳与故障注入

**详细执行指南：** [Day 041 详细执行指南](daily-guides/day-041.md)

**当天任务**

- [ ] 冻结 MCU、网关、协议和测试清单，启动不少于 48 小时运行。
- [ ] 定时注入断网、CAN断开、进程终止和设备重启，记录检测/恢复时间。
- [ ] 墙钟运行期间学习坐标系、关节/末端、控制周期和急停边界，整理机器人术语图。

**所需资源：** [R03 Hugging Face Robot Learning Course](https://huggingface.co/learn/robotics-course/en/unit0/1)；[R13 MoveIt 2 Jazzy 入门](https://moveit.picknik.ai/main/doc/tutorials/getting_started/getting_started.html)；H07 4G 网络与可控网络环境；H11 原始数据独立备份介质；H12 可持续使用的 HC32/STM32 开发板；H16 ARM Linux开发板或QEMU目标

**机器墙钟时间：** 预计 48 小时后台运行；硬上限 72 小时；达到上限即结束并分析；不得无限等待或补写不存在的数据。

**当天交付物：** reports/e2e-soak-48h.md、fault-events.csv 与 docs/robotics-primer.md

**完成验收：** 真实运行时长、故障次数和恢复结果完整；不足48小时写PARTIAL；机器人笔记不暗示已有机械臂经验。

<a id="day-042"></a>

#### Day 042｜2026-10-04 星期日｜2 小时｜嵌入式作品阶段门

**详细执行指南：** [Day 042 详细执行指南](daily-guides/day-042.md)

**当天任务**

- [ ] 汇总 MCU→CAN→Linux→MQTT 数据流、线程/任务模型和安全边界。
- [ ] 由本人从空环境演示构建、烧录、启动、断网恢复和升级回滚。
- [ ] 决定后续 R 真机或 S 仿真轨；未取得机械臂授权、急停和排期时默认 S 轨。

**所需资源：** [R03 Hugging Face Robot Learning Course](https://huggingface.co/learn/robotics-course/en/unit0/1)；[R05 LeRobot 自定义硬件](https://huggingface.co/docs/lerobot/v0.6.0/en/integrate_hardware)；A05 机械臂所有者授权与使用排期；H01 同学的机械臂与厂商 SDK；H05 独立急停与安全工作区；H10 示教 / 遥操作输入源

**当天交付物：** reviews/week-06.md、embedded-edge-demo.md 与机器人轨道预决策

**完成验收：** 嵌入式核心演示可独立完成；失败项进入 backlog；机器人轨道选择不依赖口头承诺。

### 第 7 周｜ROS 2、相机与系统接口｜2026-10-05～2026-10-11

**本周目标：** 完成可回放、可诊断、包含相机和虚拟关节状态的 ROS2 小系统，并在周末作正式硬件轨道决策。

**阶段门：** ROS2 工作区可从新 shell 构建运行；MCAP、tf2、标定和 diagnostics 均通过；Day 49 后 R/S 轨选择有书面证据。

<a id="day-043"></a>

#### Day 043｜2026-10-05 星期一｜2 小时｜ROS 2 Jazzy 安装与工作区

**详细执行指南：** [Day 043 详细执行指南](daily-guides/day-043.md)

**当天任务**

- [ ] 在原生 Ubuntu 24.04 使用系统 Python 安装 ROS 2 Jazzy 和 colcon 工作区，禁止直接复用 LeRobot Conda/uv 解释器。
- [ ] 创建 rclpy 与 rclcpp 两个最小 package，C++ 使用可安装 CMake target 和测试。
- [ ] 验证 ROS 与 LeRobot 通过 topic/独立进程桥接，并记录两个环境的启动脚本。

**所需资源：** [R12 ROS 2 官方文档](https://docs.ros.org/en/jazzy/index.html)；[R29 ROS 2 Jazzy Python 环境指南](https://docs.ros.org/en/jazzy/How-To-Guides/Using-Python-Packages.html)；[R34 C++ Core Guidelines](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines)；[R35 CMake 官方教程](https://cmake.org/cmake/help/latest/guide/tutorial/)；H02 Linux 开发主机

**当天交付物：** ros2_ws 与 docs/ros2-environment.md

**完成验收：** 全新终端中可构建并运行两个 package；ROS 与 LeRobot 分别使用独立启动脚本，`python3` 路径和 rclpy ABI 检查写入日志。

<a id="day-044"></a>

#### Day 044｜2026-10-06 星期二｜2 小时｜Node、Topic、Service、Action

**详细执行指南：** [Day 044 详细执行指南](daily-guides/day-044.md)

**当天任务**

- [ ] 使用 rclcpp 实现关节状态 publisher，使用 rclpy 实现状态 monitor subscriber。
- [ ] 实现校准 service 与长任务 action 示例。
- [ ] 比较三种通信语义和错误处理。

**所需资源：** [R12 ROS 2 官方文档](https://docs.ros.org/en/jazzy/index.html)；[R34 C++ Core Guidelines](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines)；[R35 CMake 官方教程](https://cmake.org/cmake/help/latest/guide/tutorial/)

**当天交付物：** ros2_ws/src/edgevla_interfaces_demo

**完成验收：** 节点可互通；service/action 的取消、超时和失败路径均被测试。

<a id="day-045"></a>

#### Day 045｜2026-10-07 星期三｜2 小时｜URDF 与 tf2

**详细执行指南：** [Day 045 详细执行指南](daily-guides/day-045.md)

**当天任务**

- [ ] 创建简化机械臂 URDF。
- [ ] 发布 base、camera、end_effector 的 tf2。
- [ ] 用可视化检查坐标轴方向和树结构。

**所需资源：** [R12 ROS 2 官方文档](https://docs.ros.org/en/jazzy/index.html)；[R13 MoveIt 2 Jazzy 入门](https://moveit.picknik.ai/main/doc/tutorials/getting_started/getting_started.html)

**当天交付物：** robot_description 与 tf 树截图

**完成验收：** tf 树无环、时间戳有效，能查询相机到末端的变换。

<a id="day-046"></a>

#### Day 046｜2026-10-08 星期四｜2 小时｜rosbag2、MCAP 与时间戳

**详细执行指南：** [Day 046 详细执行指南](daily-guides/day-046.md)

**当天任务**

- [ ] 录制图像、关节状态和命令 topic。
- [ ] 回放并计算消息频率、丢帧和时间偏差。
- [ ] 定义跨进程使用单调时钟与墙上时钟的规则。

**所需资源：** [R12 ROS 2 官方文档](https://docs.ros.org/en/jazzy/index.html)；[R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)

**当天交付物：** sample.mcap 与 tools/bag_quality_report.py

**完成验收：** 质量报告能输出每个 topic 的数量、频率、时间范围和最大间隔。

<a id="day-047"></a>

#### Day 047｜2026-10-09 星期五｜2 小时｜OpenCV 相机标定

**详细执行指南：** [Day 047 详细执行指南](daily-guides/day-047.md)

**当天任务**

- [ ] 准备棋盘格并采集不同姿态标定图。
- [ ] 计算内参与畸变参数，保存 YAML。
- [ ] 可视化去畸变前后结果并记录重投影误差。

**所需资源：** [R15 OpenCV 相机标定](https://docs.opencv.org/4.x/dc/dbb/tutorial_py_calibration.html)；H04 固定机位 RGB 摄像头；H06 标定与任务物料

**当天交付物：** calibration/camera.yaml 与标定报告

**完成验收：** 标定样本覆盖画面各区域；误差与失败样本均写入报告。

<a id="day-048"></a>

#### Day 048｜2026-10-10 星期六｜4 小时｜Lifecycle、参数与诊断

**详细执行指南：** [Day 048 详细执行指南](daily-guides/day-048.md)

**当天任务**

- [ ] 给 rclcpp 虚拟机器人节点增加 configure/activate/deactivate 生命周期和 RAII 资源管理。
- [ ] 增加参数校验、心跳、频率和错误状态诊断。
- [ ] 模拟设备断开和恢复。

**所需资源：** [R12 ROS 2 官方文档](https://docs.ros.org/en/jazzy/index.html)；[R34 C++ Core Guidelines](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines)；[R35 CMake 官方教程](https://cmake.org/cmake/help/latest/guide/tutorial/)

**当天交付物：** 可诊断的 virtual_robot_node 与故障测试

**完成验收：** 断开后进入安全非活动状态，恢复必须显式重新激活。

<a id="day-049"></a>

#### Day 049｜2026-10-11 星期日｜2 小时｜ROS2 阶段验收与 R/S 轨决策

**详细执行指南：** [Day 049 详细执行指南](daily-guides/day-049.md)

**当天任务**

- [ ] 从新 shell 构建并启动 ROS2 小系统，回放 MCAP、检查 tf 树、相机标定和 diagnostics。
- [ ] 核对机械臂授权、SDK许可、独立急停、示教输入和未来 6 周可用时段；逐项保存证据。
- [ ] 全部满足才选择 R 真机轨，否则选择 S mock/回放轨；写清切换条件和简历边界。

**所需资源：** [R12 ROS 2 官方文档](https://docs.ros.org/en/jazzy/index.html)；[R15 OpenCV 相机标定](https://docs.opencv.org/4.x/dc/dbb/tutorial_py_calibration.html)；[R20 GitHub Actions 文档](https://docs.github.com/en/actions)

**当天交付物：** week-07-demo.md、启动脚本与 ADR-robot-track.md

**完成验收：** ROS2 演示可重复；R/S 决策每个前置条件均有 PASS/BLOCKED；未满足时不会因赶进度选择 R 轨。

### 第 8 周｜机器人接口、Mock/真机与安全｜2026-10-12～2026-10-18

**本周目标：** 用同一 Robot I/O 契约完成 S 轨 mock/replay；只有安全门全部通过时才在 R 轨低速接入真机。

**阶段门：** 契约测试、动作限制、超时、状态机和遥操作流程通过；R轨额外要求物理急停与人工看护，S轨材料明确simulation-only。

<a id="day-050"></a>

#### Day 050｜2026-10-12 星期一｜2 小时｜机械臂与 SDK 资产盘点

**详细执行指南：** [Day 050 详细执行指南](daily-guides/day-050.md)

**当天任务**

- [ ] 记录型号、自由度、控制器、舵机/电机、通信方式和 SDK 版本。
- [ ] 核实 ROS/ROS2、Python/C++、Linux 版本和许可证。
- [ ] 确认代码、协议截图、日志和视频的公开边界。

**所需资源：** [R05 LeRobot 自定义硬件](https://huggingface.co/docs/lerobot/v0.6.0/en/integrate_hardware)；H01 同学的机械臂与厂商 SDK；H10 示教 / 遥操作输入源；H11 原始数据独立备份介质；A05 机械臂所有者授权与使用排期

**当天交付物：** hardware-inventory.md 与 license-boundary.md

**完成验收：** 所有未知项有负责人和截止日；无授权的厂商源码不会进入公开仓库。

<a id="day-051"></a>

#### Day 051｜2026-10-13 星期二｜2 小时｜Robot I/O 契约

**详细执行指南：** [Day 051 详细执行指南](daily-guides/day-051.md)

**当天任务**

- [ ] 定义 connect、calibrate、get_observation、send_action、disconnect。
- [ ] 固定关节顺序、单位、范围、fps、timestamp 和错误码。
- [ ] 用 JSON 示例描述 observation/action。

**所需资源：** [R05 LeRobot 自定义硬件](https://huggingface.co/docs/lerobot/v0.6.0/en/integrate_hardware)；[R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)

**当天交付物：** docs/robot-io-contract.md

**完成验收：** 契约可在不知道厂商内部实现的情况下编写 mock 和测试。

<a id="day-052"></a>

#### Day 052｜2026-10-14 星期三｜2 小时｜安全风险评审

**详细执行指南：** [Day 052 详细执行指南](daily-guides/day-052.md)

**当天任务**

- [ ] 按启动、校准、遥操作、策略控制、断线、恢复分阶段做风险分析。
- [ ] 确认物理急停、低速模式、工作区和人工看护。
- [ ] 定义禁止自动测试的危险条件。

**所需资源：** H05 独立急停与安全工作区；H06 标定与任务物料

**当天交付物：** safety/risk-assessment.md

**完成验收：** 每个高风险项都有预防、检测、响应和责任人；未满足 H05 则禁止上电动作。

<a id="day-053"></a>

#### Day 053｜2026-10-15 星期四｜2 小时｜适配器骨架

**详细执行指南：** [Day 053 详细执行指南](daily-guides/day-053.md)

**当天任务**

- [ ] 基于 LeRobot 扩展方式创建独立 robot 插件。
- [ ] 隔离通用接口、厂商薄适配层和配置。
- [ ] 使用假数据完成注册与 CLI 加载。

**所需资源：** [R01 LeRobot v0.6.0 官方仓库](https://github.com/huggingface/lerobot/tree/v0.6.0)；[R05 LeRobot 自定义硬件](https://huggingface.co/docs/lerobot/v0.6.0/en/integrate_hardware)；[R20 GitHub Actions 文档](https://docs.github.com/en/actions)

**当天交付物：** packages/lerobot_robot_edgevla 骨架

**完成验收：** 不修改 LeRobot 上游源码即可发现插件；默认配置不连接真实硬件。

<a id="day-054"></a>

#### Day 054｜2026-10-16 星期五｜2 小时｜Mock、契约测试与故障注入

**详细执行指南：** [Day 054 详细执行指南](daily-guides/day-054.md)

**当天任务**

- [ ] 实现确定性 mock 机械臂。
- [ ] 覆盖断线、超时、越界、时间倒退和部分关节缺失。
- [ ] 编写契约测试供真实适配器复用。

**所需资源：** [R05 LeRobot 自定义硬件](https://huggingface.co/docs/lerobot/v0.6.0/en/integrate_hardware)；[R20 GitHub Actions 文档](https://docs.github.com/en/actions)

**当天交付物：** MockRobot 与 contract test suite

**完成验收：** 正常路径和至少五类故障均自动测试，错误不会静默转成动作。

<a id="day-055"></a>

#### Day 055｜2026-10-17 星期六｜4 小时｜R 遥操作 / S 仿真示教

**详细执行指南：** [Day 055 详细执行指南](daily-guides/day-055.md)

**当天任务**

- [ ] R 轨接入获准的 leader/示教器/gamepad；S 轨用键盘或脚本在仿真中生成示范。
- [ ] 两轨增加 dead-man、人工接管/暂停和状态提示。
- [ ] 完成 10 次标准取放或对应仿真任务演练。

**所需资源：** [R05 LeRobot 自定义硬件](https://huggingface.co/docs/lerobot/v0.6.0/en/integrate_hardware)；H01 同学的机械臂与厂商 SDK；H05 独立急停与安全工作区；H06 标定与任务物料；H10 示教 / 遥操作输入源

**当天交付物：** teleop adapter 与操作规程

**完成验收：** 松开 dead-man 后下一控制周期不再产生新动作；10 次演练无越界，R/S 证据明确分开。

<a id="day-056"></a>

#### Day 056｜2026-10-18 星期日｜2 小时｜可靠性与阶段验收

**详细执行指南：** [Day 056 详细执行指南](daily-guides/day-056.md)

**当天任务**

- [ ] 运行 R 或 S 轨的连接、标定/映射、采集/回放、动作、遥操作完整契约测试。
- [ ] 做 USB/网络断开、程序崩溃和重新连接演练。
- [ ] 记录遗留风险。

**所需资源：** [R20 GitHub Actions 文档](https://docs.github.com/en/actions)；H05 独立急停与安全工作区

**当天交付物：** week-06-hardware-acceptance.md

**完成验收：** 不少于 25 个契约/故障用例全部通过；任一断线不会继续消费旧动作，恢复需要显式确认。

### 第 9 周｜小规模数据采集与质量控制｜2026-10-19～2026-10-25

**本周目标：** 在 R 轨采集 25 个有效 Episode，或在 S 轨固定 25 个公开数据 Episode/窗口；重点验证工具和质量，不追求数量。

**阶段门：** 25 个样本全部有 manifest、校验和、质量报告和明确来源；R/S 轨永久分开。

<a id="day-057"></a>

#### Day 057｜2026-10-19 星期一｜2 小时｜任务定义与成功标准

**详细执行指南：** [Day 057 详细执行指南](daily-guides/day-057.md)

**当天任务**

- [ ] 选择低风险单任务，如多起点抓取并放入盒中。
- [ ] 定义对象、起点、终点、成功、失败、超时和中止。
- [ ] 设计位置和演示风格覆盖表。

**所需资源：** [R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；[R18 Hugging Face Dataset Cards](https://huggingface.co/docs/hub/en/datasets-cards)；H06 标定与任务物料；A06 独立评审者

**当天交付物：** dataset/task-spec-v1.md

**完成验收：** 两名未参与编写者独立判断 10 个预录案例，至少 9 个案例结论一致；分歧案例在采集前修正规范。

<a id="day-058"></a>

#### Day 058｜2026-10-20 星期二｜2 小时｜Schema、同步与版本规则

**详细执行指南：** [Day 058 详细执行指南](daily-guides/day-058.md)

**当天任务**

- [ ] 固定 feature、单位、fps、相机命名、task 文本和 episode 元数据。
- [ ] 定义时钟、丢帧、过期动作和中途失败的记录规则。
- [ ] 建立数据版本与不可变原始区。

**所需资源：** [R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；[R18 Hugging Face Dataset Cards](https://huggingface.co/docs/hub/en/datasets-cards)

**当天交付物：** dataset/schema-v1.json 与 versioning.md

**完成验收：** schema 可机器校验；原始 episode 不被后处理覆盖。

<a id="day-059"></a>

#### Day 059｜2026-10-21 星期三｜2 小时｜R 试采 / S 公开数据试切片（5个）

**详细执行指南：** [Day 059 详细执行指南](daily-guides/day-059.md)

**当天任务**

- [ ] R 轨按标准流程采集 10 个试验 episode；S 轨从固定公开数据 revision 选择 10 个兼容 episode。
- [ ] 每轮记录起点、操作者、成功、异常和重采原因。
- [ ] 回放抽查动作与图像同步。

**所需资源：** [R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；H04 固定机位 RGB 摄像头；H05 独立急停与安全工作区；H06 标定与任务物料；H10 示教 / 遥操作输入源；H11 原始数据独立备份介质

**当天交付物：** dataset/raw/pilot-5 或 dataset/public-manifest/pilot-5 与日志

**完成验收：** 10 个 episode 全部可解码回放；S 轨保留来源/revision，任何中止或坏样本均保留原因。

<a id="day-060"></a>

#### Day 060｜2026-10-22 星期四｜2 小时｜自动质量检查器

**详细执行指南：** [Day 060 详细执行指南](daily-guides/day-060.md)

**当天任务**

- [ ] 检查帧数、fps、时间单调、NaN、关节范围、视频和元数据。
- [ ] 输出 episode 级 pass/warn/fail 与原因。
- [ ] 为已知坏样本建立回归测试。

**所需资源：** [R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；[R20 GitHub Actions 文档](https://docs.github.com/en/actions)

**当天交付物：** tools/validate_dataset.py 与测试夹具

**完成验收：** 六类错误各制作 2 个固定夹具，共 12 个坏样本全部检出且错误类型正确；结果可导出 CSV/JSON。

<a id="day-061"></a>

#### Day 061｜2026-10-23 星期五｜2 小时｜R 第一批采集 / S 第一批兼容样本（10个）

**详细执行指南：** [Day 061 详细执行指南](daily-guides/day-061.md)

**当天任务**

- [ ] R 轨按 5 个起始区域各 5 次采集 25 个 episode；S 轨按同一任务/场景层次选择 25 个公开 episode。
- [ ] 每 5 个 episode 运行质量检查并备份。
- [ ] 控制示范速度与动作风格一致。

**所需资源：** [R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；H04 固定机位 RGB 摄像头；H05 独立急停与安全工作区；H06 标定与任务物料；H10 示教 / 遥操作输入源；H11 原始数据独立备份介质

**当天交付物：** dataset/raw/batch-a-10 或 dataset/public-manifest/batch-a-10

**完成验收：** 25 个有效 episode 覆盖 5 个层次且每层 5 个；质量失败样本被隔离并记录来源和原因。

<a id="day-062"></a>

#### Day 062｜2026-10-24 星期六｜4 小时｜R 第二批采集 / S 第二批兼容样本（10个）

**详细执行指南：** [Day 062 详细执行指南](daily-guides/day-062.md)

**当天任务**

- [ ] R 轨补齐另 25 个有效 episode；S 轨选择另一组不重叠的 25 个公开 episode。
- [ ] 由同一判定规则标注成功、失败与中止。
- [ ] 生成采集统计和数据备份校验和。

**所需资源：** [R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；[R18 Hugging Face Dataset Cards](https://huggingface.co/docs/hub/en/datasets-cards)；H04 固定机位 RGB 摄像头；H05 独立急停与安全工作区；H06 标定与任务物料；H10 示教 / 遥操作输入源；H11 原始数据独立备份介质

**当天交付物：** dataset/raw/batch-b-10 或 dataset/public-manifest/batch-b-10 与 checksums

**完成验收：** 累计至少 50 个通过检查的有效 episode；备份校验一致。

<a id="day-063"></a>

#### Day 063｜2026-10-25 星期日｜2 小时｜划分、Dataset Card 与阶段门

**详细执行指南：** [Day 063 详细执行指南](daily-guides/day-063.md)

**当天任务**

- [ ] 按初始条件而非随机帧划分 train/val/test。
- [ ] 撰写来源、任务、硬件、采集、许可、限制和隐私说明。
- [ ] 生成只含获准内容的候选发布包。

**所需资源：** [R18 Hugging Face Dataset Cards](https://huggingface.co/docs/hub/en/datasets-cards)；[R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)

**当天交付物：** DATASET_CARD.md 与 split manifest

**完成验收：** 25 个样本来源、任务、划分和限制均可追溯；无效样本未静默删除；S轨不声称自行采集。

### 第 10 周｜ACT 小基线与冻结评测｜2026-10-26～2026-11-01

**本周目标：** 先用小数据和低成本 ACT 验证训练、恢复、推理和评测链路；训练墙钟时间不计入人工工时。

**阶段门：** 训练任务可恢复；R轨完成10次、S轨完成20次冻结评测；成功率带样本量和条件，失败逐条保留。

<a id="day-064"></a>

#### Day 064｜2026-10-26 星期一｜2 小时｜ACT 配置与数据审查

**详细执行指南：** [Day 064 详细执行指南](daily-guides/day-064.md)

**当天任务**

- [ ] 确认 observation/action feature 与归一化统计。
- [ ] 定义 batch、chunk、训练步数、种子和评测协议。
- [ ] 检查 train/test 泄漏。

**所需资源：** [R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；[R06 LeRobot ACT 策略文档](https://huggingface.co/docs/lerobot/v0.6.0/en/act)；[R09 LeRobot 算力指南](https://huggingface.co/docs/lerobot/v0.6.0/en/hardware_guide)

**当天交付物：** configs/act-task-v1.yaml

**完成验收：** 配置含精确数据版本、代码 commit、随机种子和硬件信息。

<a id="day-065"></a>

#### Day 065｜2026-10-27 星期二｜2 小时｜ACT 冒烟训练

**详细执行指南：** [Day 065 详细执行指南](daily-guides/day-065.md)

**当天任务**

- [ ] 小步数训练验证显存、数据加载和 checkpoint。
- [ ] 对一个小 batch 过拟合以检查管线。
- [ ] 估算完整训练成本。

**所需资源：** [R06 LeRobot ACT 策略文档](https://huggingface.co/docs/lerobot/v0.6.0/en/act)；[R09 LeRobot 算力指南](https://huggingface.co/docs/lerobot/v0.6.0/en/hardware_guide)；[R17 Weights & Biases 文档](https://docs.wandb.ai/)；H03 NVIDIA GPU 或按量云 GPU

**当天交付物：** experiments/act-smoke

**完成验收：** 固定 16-episode 子集训练无 NaN，最终 loss 不高于初始值 20%；checkpoint 重载输出最大绝对差不超过 1e-5。

<a id="day-066"></a>

#### Day 066｜2026-10-28 星期三｜2 小时｜ACT 正式训练启动与恢复验证

**详细执行指南：** [Day 066 详细执行指南](daily-guides/day-066.md)

**当天任务**

- [ ] 冻结数据 revision、配置、随机种子和代码 commit，先估算显存与最长墙钟时间。
- [ ] 启动训练并设置定时 checkpoint、日志和预算/运行时上限；人工观察首个验证周期后离开。
- [ ] 主动中断一次并从 checkpoint 恢复，确认 step、优化器和指标连续；训练未结束可标记 RUNNING。

**所需资源：** [R06 LeRobot ACT 策略文档](https://huggingface.co/docs/lerobot/v0.6.0/en/act)；[R09 LeRobot 算力指南](https://huggingface.co/docs/lerobot/v0.6.0/en/hardware_guide)；[R17 Weights & Biases 文档](https://docs.wandb.ai/)；[R28 Hugging Face Jobs GPU 价格](https://huggingface.co/docs/hub/jobs-pricing)；H03 NVIDIA GPU 或按量云 GPU；[A04 按量 GPU 与预算告警](https://huggingface.co/docs/hub/jobs)

**机器墙钟时间：** 预计 4～12 小时；硬上限 24 小时；云 GPU 必须设置预算和自动停止；超时保留最后 checkpoint，不追加无上限费用。

**当天交付物：** experiments/act-v1 完整产物

**完成验收：** 训练可从 checkpoint 恢复；启动两小时不等于训练完成；达到墙钟上限自动停止并保留结果。

<a id="day-067"></a>

#### Day 067｜2026-10-29 星期四｜2 小时｜曲线、过拟合与离线检查

**详细执行指南：** [Day 067 详细执行指南](daily-guides/day-067.md)

**当天任务**

- [ ] 比较 train/val loss 和动作预测误差。
- [ ] 检查不同关节和时间步的误差。
- [ ] 选择 checkpoint 时不使用真机测试集调参。

**所需资源：** [R17 Weights & Biases 文档](https://docs.wandb.ai/)；[R06 LeRobot ACT 策略文档](https://huggingface.co/docs/lerobot/v0.6.0/en/act)

**当天交付物：** reports/act-training-analysis.md

**完成验收：** 报告明确 checkpoint 选择规则、异常曲线和至少两个风险假设。

<a id="day-068"></a>

#### Day 068｜2026-10-30 星期五｜2 小时｜R 真机 / S 回放推理预检

**详细执行指南：** [Day 068 详细执行指南](daily-guides/day-068.md)

**当天任务**

- [ ] 离线回放 checkpoint 输出并经过安全动作层。
- [ ] 检查单位、顺序、范围、动作年龄和初始姿态。
- [ ] R 轨用低速空载完成 3 次受控预检；S 轨向 mock/replay 分别注入单位、顺序、范围、动作年龄和初始姿态 5 类错误。

**所需资源：** [R24 LeRobot Policy Rollout](https://huggingface.co/docs/lerobot/v0.6.0/en/inference)；H05 独立急停与安全工作区

**当天交付物：** safety/policy-preflight-v1.md

**完成验收：** 正常输出通过安全检查，任一异常均被拒绝而不是临时绕过；R 轨保留 3 次真机预检记录，S 轨 5 类注入均被拒绝并标记 simulation-only。

<a id="day-069"></a>

#### Day 069｜2026-10-31 星期六｜4 小时｜R 10 次真机 / S 20 次仿真冻结评测

**详细执行指南：** [Day 069 详细执行指南](daily-guides/day-069.md)

**当天任务**

- [ ] 确认评测协议、成功定义、超时和失败分类在看结果前已冻结。
- [ ] R轨低速执行10轮且每轮有人看护；S轨执行20轮固定seed仿真，不混合统计。
- [ ] 逐轮记录成功、失败原因、耗时、恢复动作和原始证据，不只保留最佳视频。

**所需资源：** [R24 LeRobot Policy Rollout](https://huggingface.co/docs/lerobot/v0.6.0/en/inference)；H01 同学的机械臂与厂商 SDK；H04 固定机位 RGB 摄像头；H05 独立急停与安全工作区；H06 标定与任务物料

**当天交付物：** evaluations/act-v1/results.csv 与 R/S 原始证据

**完成验收：** 结果行数与计划轮数一致；所有失败存在；成功率附R/S、任务、样本数和版本。

<a id="day-070"></a>

#### Day 070｜2026-11-01 星期日｜2 小时｜失败分类与 ACT 阶段门

**详细执行指南：** [Day 070 详细执行指南](daily-guides/day-070.md)

**当天任务**

- [ ] 将失败归为视觉、初态、动作、机械、通信、安全或评测问题。
- [ ] 计算成功率置信区间、耗时和接管次数。
- [ ] 确定下一轮优先补数据还是改训练。

**所需资源：** [R17 Weights & Biases 文档](https://docs.wandb.ai/)；[R19 Hugging Face Model Cards](https://huggingface.co/docs/hub/en/model-cards)

**当天交付物：** reports/act-v1-evaluation.md

**完成验收：** 所有失败均有证据或标注“根因未知”；未达到目标也如实发布。

### 第 11 周｜SmolVLA 小规模验证与泛化｜2026-11-02～2026-11-08

**本周目标：** 在 ACT 链路稳定后才进行 SmolVLA 冒烟和小规模微调，用三个最有价值的变化维度做冻结评测。

**阶段门：** 微调可恢复；至少完成语言改写、位置和光照三类评测；算力或数据不足时允许停在smoke，不把未完成写成成果。

<a id="day-071"></a>

#### Day 071｜2026-11-02 星期一｜2 小时｜SmolVLA 架构与输入输出审计

**详细执行指南：** [Day 071 详细执行指南](daily-guides/day-071.md)

**当天任务**

- [ ] 梳理视觉编码、语言、本体状态、动作专家和 flow matching。
- [ ] 分别打印 R 轨自采或 S 轨 LIBERO batch 的每个 tensor shape。
- [ ] 对照 ACT 标出共享和不同的管线。

**所需资源：** [R07 SmolVLA 官方说明](https://huggingface.co/blog/smolvla)；[R25 SmolVLA 官方微调指南](https://huggingface.co/docs/lerobot/v0.6.0/en/smolvla)；[R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)

**当天交付物：** docs/smolvla-dataflow.md

**完成验收：** 完成 15 道 shape/归一化/action chunk 自测且正确不少于 12 道；不照抄模型宣传语。

<a id="day-072"></a>

#### Day 072｜2026-11-03 星期二｜2 小时｜算力、依赖与显存冒烟

**详细执行指南：** [Day 072 详细执行指南](daily-guides/day-072.md)

**当天任务**

- [ ] 建立独立 SmolVLA 配置和依赖快照。
- [ ] 用小 batch 做前向/反向并记录显存。
- [ ] 设置云任务最大时长与预算。

**所需资源：** [R07 SmolVLA 官方说明](https://huggingface.co/blog/smolvla)；[R09 LeRobot 算力指南](https://huggingface.co/docs/lerobot/v0.6.0/en/hardware_guide)；[R28 Hugging Face Jobs GPU 价格](https://huggingface.co/docs/hub/jobs-pricing)；H03 NVIDIA GPU 或按量云 GPU；[A04 按量 GPU 与预算告警](https://huggingface.co/docs/hub/jobs)

**机器墙钟时间：** 预计 15–30 分钟；硬上限 30 分钟；仅使用最小 batch；超过配置上限自动终止

**当天交付物：** experiments/smolvla-smoke

**完成验收：** 冒烟任务 30 分钟内完成或被自动终止；记录峰值显存、step/s，并据此填写 max_runtime 与 max_cost。

<a id="day-073"></a>

#### Day 073｜2026-11-04 星期三｜2 小时｜语言条件任务设计

**详细执行指南：** [Day 073 详细执行指南](daily-guides/day-073.md)

**当天任务**

- [ ] 定义三种必须依靠语言区分、且动作/状态 schema 相同的取放任务。
- [ ] 每任务冻结训练指令和 10 条未见同义改写，并设计错误/含糊指令边界。
- [ ] 冻结训练与泛化评测指令集。

**所需资源：** [R07 SmolVLA 官方说明](https://huggingface.co/blog/smolvla)；[R25 SmolVLA 官方微调指南](https://huggingface.co/docs/lerobot/v0.6.0/en/smolvla)；[R18 Hugging Face Dataset Cards](https://huggingface.co/docs/hub/en/datasets-cards)；H06 标定与任务物料

**当天交付物：** dataset/language-task-spec.md

**完成验收：** 如果去掉语言，至少两种场景无法由视觉唯一决定；3×10 条测试改写与训练文本零重叠。

<a id="day-074"></a>

#### Day 074｜2026-11-05 星期四｜2 小时｜数据总审与 SmolVLA 微调启动

**详细执行指南：** [Day 074 详细执行指南](daily-guides/day-074.md)

**当天任务**

- [ ] 对 150 个 episode 做最终质量、划分和泄漏检查，并在 16-episode 子集上过拟合。
- [ ] 过拟合门通过后启动预注册配置的完整微调，保存模型、数据 revision、环境、预算和成本。
- [ ] 设置 max_runtime/max_cost/OOM 自动终止；所有重试生成新 experiment_id。

**所需资源：** [R07 SmolVLA 官方说明](https://huggingface.co/blog/smolvla)；[R25 SmolVLA 官方微调指南](https://huggingface.co/docs/lerobot/v0.6.0/en/smolvla)；[R09 LeRobot 算力指南](https://huggingface.co/docs/lerobot/v0.6.0/en/hardware_guide)；[R17 Weights & Biases 文档](https://docs.wandb.ai/)；[R28 Hugging Face Jobs GPU 价格](https://huggingface.co/docs/hub/jobs-pricing)；H03 NVIDIA GPU 或按量云 GPU；[A03 实验跟踪账号](https://wandb.ai/)；[A04 按量 GPU 与预算告警](https://huggingface.co/docs/hub/jobs)

**机器墙钟时间：** 预计 8～24 小时；硬上限 36 小时；先smoke再付费；超过预算或墙钟上限自动停止。

**当天交付物：** experiments/smolvla-v1

**完成验收：** 数据审计通过后才启动；训练配置、模型revision、数据revision和预算上限均已冻结；未完成可写RUNNING。

<a id="day-075"></a>

#### Day 075｜2026-11-06 星期五｜2 小时｜训练收尾、Checkpoint 初评与上线门

**详细执行指南：** [Day 075 详细执行指南](daily-guides/day-075.md)

**当天任务**

- [ ] 检查训练是否在硬上限内完成；未完成则终止并保留负面结果，不无限续费。
- [ ] 完成离线输出、动作范围、语言敏感性和 checkpoint 加载检查。
- [ ] 选择 checkpoint 并冻结真机评测配置。
- [ ] 更新 R 轨真机或 S 轨仿真预检清单。

**所需资源：** [R07 SmolVLA 官方说明](https://huggingface.co/blog/smolvla)；[R24 LeRobot Policy Rollout](https://huggingface.co/docs/lerobot/v0.6.0/en/inference)；H05 独立急停与安全工作区

**当天交付物：** safety/smolvla-preflight.md

**完成验收：** checkpoint 可加载、无 NaN、所有测试动作通过守卫；R 轨另需 3 次低速预检。任一失败则阻断第 10 周自动 rollout。

<a id="day-076"></a>

#### Day 076｜2026-11-07 星期六｜4 小时｜未见位置评测

**详细执行指南：** [Day 076 详细执行指南](daily-guides/day-076.md)

**当天任务**

- [ ] 在训练集未覆盖的预定义位置运行 ACT 与 SmolVLA。
- [ ] 每模型使用相同起点和判定。
- [ ] 记录成功率、耗时和失败类型。

**所需资源：** [R24 LeRobot Policy Rollout](https://huggingface.co/docs/lerobot/v0.6.0/en/inference)；H05 独立急停与安全工作区；H06 标定与任务物料

**当天交付物：** evaluations/generalization/unseen-position.csv

**完成验收：** ACT 与 SmolVLA 各完成 10 个冻结起点 episode；20 轮均有逐轮结果和失败视频索引。

<a id="day-077"></a>

#### Day 077｜2026-11-08 星期日｜2 小时｜语言、位置与光照三类汇总

**详细执行指南：** [Day 077 详细执行指南](daily-guides/day-077.md)

**当天任务**

- [ ] 完成未见位置、指令改写和光照变化结果校验，其他变化维度留到后续90天。
- [ ] 按同一表结构比较 ACT 与 SmolVLA，禁止合并 R/S、不同任务或不同样本量。
- [ ] 写出至少三个失败案例、适用边界和下一轮数据决策。

**所需资源：** [R07 SmolVLA 官方说明](https://huggingface.co/blog/smolvla)；[R24 LeRobot Policy Rollout](https://huggingface.co/docs/lerobot/v0.6.0/en/inference)；H05 独立急停与安全工作区

**当天交付物：** reports/act-vs-smolvla-small.md

**完成验收：** 三类评测均有冻结协议和逐轮记录；结论不外推到未测试对象、相机或真实环境。

### 第 12 周｜异步推理、弱网与本地安全｜2026-11-09～2026-11-15

**本周目标：** 建立 Policy Server/Robot Client、动作年龄/队列守卫和本地安全状态机，再用 netem/真实4G量化弱网影响。

**阶段门：** 断线、旧动作、队列堆积和进程故障均进入安全状态；报告明确4G不承担硬实时安全控制。

<a id="day-078"></a>

#### Day 078｜2026-11-09 星期一｜2 小时｜Policy Server 与 Robot Client

**详细执行指南：** [Day 078 详细执行指南](daily-guides/day-078.md)

**当天任务**

- [ ] 按 D70 选择分支：ACT 使用同步/通用 async queue；SmolVLA 等 flow-matching policy 才启用 RTC。
- [ ] 记录 observation 请求、动作 chunk 返回和消费时序。
- [ ] 隔离推理通道与安全控制通道。

**所需资源：** [R10 LeRobot 异步推理](https://huggingface.co/docs/lerobot/v0.6.0/en/async)；[R11 LeRobot RTC](https://huggingface.co/docs/lerobot/v0.6.0/en/rtc)；[R24 LeRobot Policy Rollout](https://huggingface.co/docs/lerobot/v0.6.0/en/inference)

**当天交付物：** async/local-baseline 与时序图

**完成验收：** 局域网连续运行 30 分钟无未处理异常；停止 server 后 2 个控制周期内停止接收新动作，超时后旧动作执行数为 0。

<a id="day-079"></a>

#### Day 079｜2026-11-10 星期二｜2 小时｜端到端时延可观测性

**详细执行指南：** [Day 079 详细执行指南](daily-guides/day-079.md)

**当天任务**

- [ ] 在采集、发送、排队、推理、接收、执行各处增加时间戳。
- [ ] 计算 P50/P95/P99 和时钟偏差。
- [ ] 建立 trace_id 关联日志。

**所需资源：** [R10 LeRobot 异步推理](https://huggingface.co/docs/lerobot/v0.6.0/en/async)；[R22 Linux tc-netem](https://man7.org/linux/man-pages/man8/tc-netem.8.html)

**当天交付物：** observability/latency_metrics.py

**完成验收：** 单个动作可追溯完整链路；指标能区分网络、排队和推理耗时。

<a id="day-080"></a>

#### Day 080｜2026-11-11 星期三｜2 小时｜动作年龄与队列水位

**详细执行指南：** [Day 080 详细执行指南](daily-guides/day-080.md)

**当天任务**

- [ ] 记录动作生成时间、消费时间、队列水位和欠载。
- [ ] 实现 stale action 丢弃与最小/最大队列阈值。
- [ ] 通过人工延迟验证。

**所需资源：** [R10 LeRobot 异步推理](https://huggingface.co/docs/lerobot/v0.6.0/en/async)；[R11 LeRobot RTC](https://huggingface.co/docs/lerobot/v0.6.0/en/rtc)

**当天交付物：** safety/action_queue_guard.py

**完成验收：** 超过阈值的旧动作不会执行；每次丢弃都有原因和计数。

<a id="day-081"></a>

#### Day 081｜2026-11-12 星期四｜2 小时｜限位、看门狗与状态机

**详细执行指南：** [Day 081 详细执行指南](daily-guides/day-081.md)

**当天任务**

- [ ] 将软限位、步长、速度、心跳和状态新鲜度统一进安全状态机。
- [ ] 定义 SAFE_IDLE、READY、RUNNING、FAULT、ESTOP。
- [ ] 覆盖非法状态转换。

**所需资源：** H05 独立急停与安全工作区；[R20 GitHub Actions 文档](https://docs.github.com/en/actions)

**当天交付物：** safety/supervisor_state_machine.py

**完成验收：** 所有危险状态只能进入 FAULT/ESTOP；复位需要显式操作且不能跳过标定。

<a id="day-082"></a>

#### Day 082｜2026-11-13 星期五｜2 小时｜断线与恢复策略

**详细执行指南：** [Day 082 详细执行指南](daily-guides/day-082.md)

**当天任务**

- [ ] 分别模拟相机、机器人、Policy Server 和网络断开。
- [ ] 定义停止、保持、安全姿态与重连行为。
- [ ] 测量检测和恢复时间。

**所需资源：** [R10 LeRobot 异步推理](https://huggingface.co/docs/lerobot/v0.6.0/en/async)；[R22 Linux tc-netem](https://man7.org/linux/man-pages/man8/tc-netem.8.html)；H05 独立急停与安全工作区

**当天交付物：** tests/fault_disconnect_matrix.md

**完成验收：** 四类断线均不会消费旧动作；恢复必须通过健康检查和人工确认。

<a id="day-083"></a>

#### Day 083｜2026-11-14 星期六｜4 小时｜局域网、netem 与一次真实4G对比

**详细执行指南：** [Day 083 详细执行指南](daily-guides/day-083.md)

**当天任务**

- [ ] 按冻结协议运行三类网络条件。
- [ ] 记录任务成功、完成时间、P95 时延、欠载、旧动作和安全拦截。
- [ ] R 轨在真实 4G 环境保持人工看护与独立急停；S 轨让 mock/replay 经过相同网络链路并明确不做物理安全声明。

**所需资源：** [R10 LeRobot 异步推理](https://huggingface.co/docs/lerobot/v0.6.0/en/async)；[R11 LeRobot RTC](https://huggingface.co/docs/lerobot/v0.6.0/en/rtc)；[R22 Linux tc-netem](https://man7.org/linux/man-pages/man8/tc-netem.8.html)；H05 独立急停与安全工作区；H07 4G 网络与可控网络环境

**当天交付物：** evaluations/network-v1/results.csv

**完成验收：** 每种网络配置至少3轮且保留原始时延/丢包；真实4G受环境限制单独报告；不声称网络结论具有普遍性。

<a id="day-084"></a>

#### Day 084｜2026-11-15 星期日｜2 小时｜弱网结论与安全阶段门

**详细执行指南：** [Day 084 详细执行指南](daily-guides/day-084.md)

**当天任务**

- [ ] 计算指标和置信区间，分析动作队列阈值。
- [ ] 明确哪些网络条件只允许遥测、哪些可低速实验。
- [ ] 形成边云安全限制声明。

**所需资源：** [R19 Hugging Face Model Cards](https://huggingface.co/docs/hub/en/model-cards)；H05 独立急停与安全工作区

**当天交付物：** reports/network-and-safety-v1.md

**完成验收：** 报告不宣称 4G 是硬实时控制；所有建议都由测量或安全原则支持。

### 第 13 周｜实验记录平台与最小 HMI｜2026-11-16～2026-11-22

**本周目标：** 只实现支撑实验复现和人工接管的最小平台，不在一周内重造完整IoT产品。

**阶段门：** 能登记实验、查看健康和时间线、标注失败并触发受限人工接管；认证和隐私检查通过。

<a id="day-085"></a>

#### Day 085｜2026-11-16 星期一｜2 小时｜实验注册表后端

**详细执行指南：** [Day 085 详细执行指南](daily-guides/day-085.md)

**当天任务**

- [ ] 用 Go 或 Python 实现设备、数据、模型、实验和评测元数据 API。
- [ ] 采用不可变实验记录和显式状态转换。
- [ ] 增加输入校验和最小权限。

**所需资源：** [R20 GitHub Actions 文档](https://docs.github.com/en/actions)；[R21 Docker 文档](https://docs.docker.com/)

**当天交付物：** platform/api 与 OpenAPI 文档

**完成验收：** 实验记录不可被静默改写；错误输入和未授权请求有测试。

<a id="day-086"></a>

#### Day 086｜2026-11-17 星期二｜2 小时｜Web 实验与健康面板

**详细执行指南：** [Day 086 详细执行指南](daily-guides/day-086.md)

**当天任务**

- [ ] 展示设备健康、网络、动作队列、模型版本和任务结果。
- [ ] 支持按 experiment_id 定位日志和视频。
- [ ] 显式区分实时值、延迟值和离线统计。

**所需资源：** [R20 GitHub Actions 文档](https://docs.github.com/en/actions)

**当天交付物：** platform/web-dashboard

**完成验收：** 超过 2 个预期遥测周期即显示 STALE；断网、过期、FAULT 三类快照测试全部标红且不显示“实时正常”。

<a id="day-087"></a>

#### Day 087｜2026-11-18 星期三｜2 小时｜Flutter 移动 HMI

**详细执行指南：** [Day 087 详细执行指南](daily-guides/day-087.md)

**当天任务**

- [ ] 复用现有 Flutter 能力实现状态查看、采集控制和人工接管入口。
- [ ] 高风险动作要求二次确认并受服务端状态机约束。
- [ ] 离线时只读并提示过期。

**所需资源：** [R31 OWASP MASVS 移动端安全标准](https://mas.owasp.org/MASVS/)；H07 4G 网络与可控网络环境

**当天交付物：** apps/edgevla_hmi 最小版本

**完成验收：** 覆盖离线、三种角色、二次确认、服务端拒绝共不少于 12 个测试；所有非法场景的动作请求数为 0。

<a id="day-088"></a>

#### Day 088｜2026-11-19 星期四｜2 小时｜视频、日志与轨迹同步

**详细执行指南：** [Day 088 详细执行指南](daily-guides/day-088.md)

**当天任务**

- [ ] 在面板中对齐 episode 视频、状态、动作和网络事件。
- [ ] 支持跳转失败时间点。
- [ ] 用同一时钟基准展示误差。

**所需资源：** [R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；[R20 GitHub Actions 文档](https://docs.github.com/en/actions)

**当天交付物：** platform/timeline-viewer

**完成验收：** 从失败结果一键定位到对应视频帧、动作、日志和网络事件。

<a id="day-089"></a>

#### Day 089｜2026-11-20 星期五｜2 小时｜失败标注与数据闭环

**详细执行指南：** [Day 089 详细执行指南](daily-guides/day-089.md)

**当天任务**

- [ ] 增加失败类别、严重度、根因置信度和处理建议。
- [ ] 从评测选择待补采场景，不直接修改原始数据。
- [ ] 导出下一轮采集清单。

**所需资源：** [R18 Hugging Face Dataset Cards](https://huggingface.co/docs/hub/en/datasets-cards)；[R20 GitHub Actions 文档](https://docs.github.com/en/actions)

**当天交付物：** platform/failure-review 与采集清单

**完成验收：** 标注有审计记录；新数据与原评测测试集隔离。

<a id="day-090"></a>

#### Day 090｜2026-11-21 星期六｜4 小时｜认证、配置与安全审查

**详细执行指南：** [Day 090 详细执行指南](daily-guides/day-090.md)

**当天任务**

- [ ] 区分观察者、操作者和管理员权限。
- [ ] 将密钥、设备配置和模型配置外置。
- [ ] 审查上传、日志隐私和远程控制入口。

**所需资源：** [R20 GitHub Actions 文档](https://docs.github.com/en/actions)；[R21 Docker 文档](https://docs.docker.com/)

**当天交付物：** platform/security-review.md

**完成验收：** 无默认弱密码、硬编码密钥或匿名控制接口；高风险操作均可审计。

<a id="day-091"></a>

#### Day 091｜2026-11-22 星期日｜2 小时｜平台端到端阶段门

**详细执行指南：** [Day 091 详细执行指南](daily-guides/day-091.md)

**当天任务**

- [ ] 演练采集、训练登记、部署、评测、失败标注和告警。
- [ ] 模拟设备和网络断开。
- [ ] 录制未经剪辑的端到端演示。

**所需资源：** [R20 GitHub Actions 文档](https://docs.github.com/en/actions)；H07 4G 网络与可控网络环境

**当天交付物：** week-13-e2e-report.md 与原始演示视频

**完成验收：** 采集、登记、部署、评测、标注、告警六条主链路及设备/网络两条故障链路共 8 项全部通过；平台停止后本地安全状态机测试仍通过。

### 第 14 周｜测试、容器、性能与恢复｜2026-11-23～2026-11-29

**本周目标：** 将作品提升为可重建、可测试、可恢复的工程系统，硬件测试与模拟CI分离。

**阶段门：** CI绿色；镜像/环境可重建；48小时长稳或如实PARTIAL；关键故障有恢复证据。

<a id="day-092"></a>

#### Day 092｜2026-11-23 星期一｜2 小时｜容器与依赖分层

**详细执行指南：** [Day 092 详细执行指南](daily-guides/day-092.md)

**当天任务**

- [ ] 为 CPU 工具、GPU 训练和平台服务分别设计镜像。
- [ ] 固定基础镜像与依赖哈希。
- [ ] 排除数据、权重和设备私有 SDK。

**所需资源：** [R21 Docker 文档](https://docs.docker.com/)；[R20 GitHub Actions 文档](https://docs.github.com/en/actions)

**当天交付物：** containers/ 与 compose.yaml

**完成验收：** CPU 镜像可在无 GPU 环境运行测试；镜像不含隐私数据或许可证不明文件。

<a id="day-093"></a>

#### Day 093｜2026-11-24 星期二｜2 小时｜配置、密钥与环境校验

**详细执行指南：** [Day 093 详细执行指南](daily-guides/day-093.md)

**当天任务**

- [ ] 建立分层配置和 schema 校验。
- [ ] 增加启动前硬件、端口、模型和数据兼容性检查。
- [ ] 提供安全示例配置。

**所需资源：** [R20 GitHub Actions 文档](https://docs.github.com/en/actions)；[R21 Docker 文档](https://docs.docker.com/)

**当天交付物：** config schema 与 preflight 命令

**完成验收：** 缺失密钥、错误关节数、错误模型或危险参数均在运动前失败。

<a id="day-094"></a>

#### Day 094｜2026-11-25 星期三｜2 小时｜单元测试补齐

**详细执行指南：** [Day 094 详细执行指南](daily-guides/day-094.md)

**当天任务**

- [ ] 覆盖 Python 与 C++ 的接口映射、归一化、时间戳、动作限幅、状态机和报告统计。
- [ ] 加入边界值和性质测试。
- [ ] 设置覆盖率基线但不以覆盖率代替场景测试。

**所需资源：** [R20 GitHub Actions 文档](https://docs.github.com/en/actions)；[R34 C++ Core Guidelines](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines)；[R35 CMake 官方教程](https://cmake.org/cmake/help/latest/guide/tutorial/)

**当天交付物：** unit test suite 与覆盖率报告

**完成验收：** 所有安全关键分支有直接测试；测试不依赖真实机械臂。

<a id="day-095"></a>

#### Day 095｜2026-11-26 星期四｜2 小时｜R 硬件在环 / S 模拟集成测试

**详细执行指南：** [Day 095 详细执行指南](daily-guides/day-095.md)

**当天任务**

- [ ] R 轨建立 mock、回放和低速真机三层测试；S 轨建立 mock、回放和仿真设备三层测试，不称为硬件在环。
- [ ] 覆盖启动、运行、断线、恢复和急停。
- [ ] 仅为 R 轨真实硬件测试设置显式 opt-in；S 轨默认测试不得探测或驱动物理设备。

**所需资源：** [R20 GitHub Actions 文档](https://docs.github.com/en/actions)；H05 独立急停与安全工作区

**当天交付物：** integration test matrix

**完成验收：** 默认 CI 不驱动真机；R 轨人工真机套件有安全清单和记录，S 轨三层测试全部标记 simulation/mock 且无 HIL 声称。

<a id="day-096"></a>

#### Day 096｜2026-11-27 星期五｜2 小时｜GitHub Actions CI

**详细执行指南：** [Day 096 详细执行指南](daily-guides/day-096.md)

**当天任务**

- [ ] 配置 lint、typecheck、unit、dataset fixture、容器构建和文档链接检查。
- [ ] 固定 action 版本和最小权限。
- [ ] 生成可下载测试产物。

**所需资源：** [R20 GitHub Actions 文档](https://docs.github.com/en/actions)；[R21 Docker 文档](https://docs.docker.com/)

**当天交付物：** .github/workflows/ci.yml

**完成验收：** 全新 commit 的 CI 全绿；失败能定位具体阶段且无密钥泄漏。

<a id="day-097"></a>

#### Day 097｜2026-11-28 星期六｜4 小时｜性能分析与瓶颈

**详细执行指南：** [Day 097 详细执行指南](daily-guides/day-097.md)

**当天任务**

- [ ] 测量采集、编码、网络、推理、动作消费、平台写入的 CPU/GPU/内存。
- [ ] 识别一个真实瓶颈并优化。
- [ ] 保留优化前后相同负载数据。

**所需资源：** [R17 Weights & Biases 文档](https://docs.wandb.ai/)；[R21 Docker 文档](https://docs.docker.com/)

**当天交付物：** reports/performance-v1.md

**完成验收：** 优化结论由同一基准支持，不用不同配置制造提升。

<a id="day-098"></a>

#### Day 098｜2026-11-29 星期日｜2 小时｜48小时长稳与恢复验收

**详细执行指南：** [Day 098 详细执行指南](daily-guides/day-098.md)

**当天任务**

- [ ] 运行至少 2 小时采集/回放或安全的闭环 soak test。
- [ ] 期间注入网络中断和服务重启。
- [ ] 检查内存、句柄、队列、数据完整性和恢复时间。

**所需资源：** [R20 GitHub Actions 文档](https://docs.github.com/en/actions)；[R22 Linux tc-netem](https://man7.org/linux/man-pages/man8/tc-netem.8.html)；H05 独立急停与安全工作区

**机器墙钟时间：** 预计 48 小时；硬上限 72 小时；后台运行不占满人工时间；达到上限停止并分析。

**当天交付物：** reports/soak-and-recovery.md

**完成验收：** 达到48小时且故障注入完成才PASS；否则保留PARTIAL和后台继续计划；无资源持续增长趋势。

### 第 15 周｜脱敏开源、证据与技术表达｜2026-11-30～2026-12-06

**本周目标：** 形成招聘方可复现、可质疑的公开证据，不以必须被上游接受PR作为完成条件。

**阶段门：** README、架构、数据/模型卡、失败演示、许可证和隐私审计完整；外部贡献按真实结果记录。

<a id="day-099"></a>

#### Day 099｜2026-11-30 星期一｜2 小时｜README 与快速开始

**详细执行指南：** [Day 099 详细执行指南](daily-guides/day-099.md)

**当天任务**

- [ ] 说明问题、架构、状态、硬件、安装、仿真和真机安全。
- [ ] 区分上游项目与 EdgeVLA Lab 自研模块。
- [ ] 提供 30 分钟内可运行的无硬件路径。

**所需资源：** [R01 LeRobot v0.6.0 官方仓库](https://github.com/huggingface/lerobot/tree/v0.6.0)；[R20 GitHub Actions 文档](https://docs.github.com/en/actions)；[R21 Docker 文档](https://docs.docker.com/)；A06 独立评审者

**当天交付物：** README.md 候选版

**完成验收：** 在干净容器中仅按 README，30 分钟内完成 mock/回放且命令退出码为 0；全文检索无把 EdgeVLA Lab 写成官方项目的表述。

<a id="day-100"></a>

#### Day 100｜2026-12-01 星期二｜2 小时｜架构与威胁边界图

**详细执行指南：** [Day 100 详细执行指南](daily-guides/day-100.md)

**当天任务**

- [ ] 绘制设备、相机、安全层、Policy Server、平台和 HMI。
- [ ] 标注实时/非实时、信任边界和故障域。
- [ ] 链接对应代码和测试。

**所需资源：** [R10 LeRobot 异步推理](https://huggingface.co/docs/lerobot/v0.6.0/en/async)；H05 独立急停与安全工作区

**当天交付物：** docs/architecture.md

**完成验收：** 每个关键组件有责任、输入输出和失败响应，不存在“云端急停”误导。

<a id="day-101"></a>

#### Day 101｜2026-12-02 星期三｜2 小时｜Dataset Card 定稿

**详细执行指南：** [Day 101 详细执行指南](daily-guides/day-101.md)

**当天任务**

- [ ] 补充采集协议、分布、质量指标、划分、许可、隐私和限制。
- [ ] 增加已知失败和不适用用途。
- [ ] 执行发布包去隐私检查。

**所需资源：** [R18 Hugging Face Dataset Cards](https://huggingface.co/docs/hub/en/datasets-cards)；[R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；[A02 Hugging Face Hub 账号](https://huggingface.co/)

**当天交付物：** 公开 DATASET_CARD.md 与 manifest

**完成验收：** 数据来源和许可可证明；无面部、手机号、密钥或厂商私有内容。

<a id="day-102"></a>

#### Day 102｜2026-12-03 星期四｜2 小时｜Model Card 与评测证据

**详细执行指南：** [Day 102 详细执行指南](daily-guides/day-102.md)

**当天任务**

- [ ] 记录模型基座、数据版本、训练配置、算力、指标和限制。
- [ ] 链接逐 episode 结果与失败视频。
- [ ] 明确不能用于无人看护或安全关键控制。

**所需资源：** [R19 Hugging Face Model Cards](https://huggingface.co/docs/hub/en/model-cards)；[R17 Weights & Biases 文档](https://docs.wandb.ai/)；[R26 LeRobot Adding a Policy](https://huggingface.co/docs/lerobot/v0.6.0/en/bring_your_own_policies)；[A02 Hugging Face Hub 账号](https://huggingface.co/)

**当天交付物：** MODEL_CARD_ACT.md 与 MODEL_CARD_SMOLVLA.md

**完成验收：** 每个数字可追溯；未完成或失败实验不会被省略。

<a id="day-103"></a>

#### Day 103｜2026-12-04 星期五｜2 小时｜成功与失败演示视频

**详细执行指南：** [Day 103 详细执行指南](daily-guides/day-103.md)

**当天任务**

- [ ] 制作 3–5 分钟技术演示，包含架构、数据、训练、真机、弱网与安全。
- [ ] 保留至少一个典型失败和恢复过程。
- [ ] 为全部画面去除隐私与密钥。

**所需资源：** [R18 Hugging Face Dataset Cards](https://huggingface.co/docs/hub/en/datasets-cards)；[R19 Hugging Face Model Cards](https://huggingface.co/docs/hub/en/model-cards)

**当天交付物：** demo/video-v1 与旁白稿

**完成验收：** 视频中的指标与报告一致，不用剪辑掩盖评测轮次或危险行为。

<a id="day-104"></a>

#### Day 104｜2026-12-05 星期六｜4 小时｜上游贡献候选与真实反馈

**详细执行指南：** [Day 104 详细执行指南](daily-guides/day-104.md)

**当天任务**

- [ ] 从学习中筛选一个可复现的上游文档、测试或bug问题，先搜索现有issue。
- [ ] 能给最小复现时提交issue/PR；证据不足时只在本仓库写调查报告，不制造低质量贡献。
- [ ] 记录链接、审查意见、未被接受或关闭原因；是否合并不作为当天PASS条件。

**所需资源：** [R01 LeRobot v0.6.0 官方仓库](https://github.com/huggingface/lerobot/tree/v0.6.0)；[R05 LeRobot 自定义硬件](https://huggingface.co/docs/lerobot/v0.6.0/en/integrate_hardware)；[R20 GitHub Actions 文档](https://docs.github.com/en/actions)；[R27 LeRobot 贡献指南](https://huggingface.co/docs/lerobot/main/en/contributing)；[A01 GitHub 账号与独立仓库](https://github.com/)

**当天交付物：** 一个高质量issue/PR链接，或一份可复核的no-submit调查报告

**完成验收：** 提交内容有版本、最小复现和期望/实际结果；没有为了KPI重复issue；未合并不包装成上游贡献。

<a id="day-105"></a>

#### Day 105｜2026-12-06 星期日｜2 小时｜开源、安全与发布阶段门

**详细执行指南：** [Day 105 详细执行指南](daily-guides/day-105.md)

**当天任务**

- [ ] 检查许可证、依赖、密钥、隐私、模型与数据使用条件。
- [ ] 由同学确认厂商/机械臂相关公开边界。
- [ ] R 轨门槛全过创建 v1.0.0-rc；否则创建 v0.x simulation/data-tooling rc 或延期。

**所需资源：** [R20 GitHub Actions 文档](https://docs.github.com/en/actions)；[R21 Docker 文档](https://docs.docker.com/)；H01 同学的机械臂与厂商 SDK；[A01 GitHub 账号与独立仓库](https://github.com/)；A05 机械臂所有者授权与使用排期

**当天交付物：** release-checklist.md 与条件化 release candidate

**完成验收：** 复现、安全、许可、隐私四项均签字/记录；任何未决高风险项阻止公开。

### 第 16 周｜求职材料、投递实验与后续迭代｜2026-12-07～2026-12-13

**本周目标：** 只把已通过证据门的内容同步到简历，完成三类定向材料、面试复盘和首批小规模投递。

**阶段门：** 证据与简历逐条可追溯；完成3～5个高匹配岗位投递和反馈记录；发布范围与R/S轨一致。

<a id="day-106"></a>

#### Day 106｜2026-12-07 星期一｜2 小时｜可写入简历的指标审计

**详细执行指南：** [Day 106 详细执行指南](daily-guides/day-106.md)

**当天任务**

- [ ] 从实验产物提取 episode、成功率、P95 时延、恢复和安全指标。
- [ ] 逐项链接证据并标注样本和条件。
- [ ] 删除无法证明的数字和“熟练”表述。

**所需资源：** [R18 Hugging Face Dataset Cards](https://huggingface.co/docs/hub/en/datasets-cards)；[R19 Hugging Face Model Cards](https://huggingface.co/docs/hub/en/model-cards)

**当天交付物：** career/resume-evidence-v1.csv

**完成验收：** 每个简历要点都有公开或可提供的证据路径，无提前虚构成果。

<a id="day-107"></a>

#### Day 107｜2026-12-08 星期二｜2 小时｜GitHub 与作品集页面

**详细执行指南：** [Day 107 详细执行指南](daily-guides/day-107.md)

**当天任务**

- [ ] 优化仓库简介、topic、README 首屏和导航。
- [ ] 在个人作品集中加入架构、责任、结果、限制和链接。
- [ ] 保留“拟建”到“已发布”的状态变更记录。

**所需资源：** [R20 GitHub Actions 文档](https://docs.github.com/en/actions)；A06 独立评审者

**当天交付物：** 公开项目页与作品集草稿

**完成验收：** 两名未参与项目者各浏览首页 60 秒后，能正确回答问题、个人贡献、一个真实指标、限制、复现入口 5 问中的至少 4 问。

<a id="day-108"></a>

#### Day 108｜2026-12-09 星期三｜2 小时｜三类定向简历

**详细执行指南：** [Day 108 详细执行指南](daily-guides/day-108.md)

**当天任务**

- [ ] 生成机器人软件/系统、数据闭环/部署、VLA 应用工程三类版本。
- [ ] 按岗位高频栈排序，不改事实。
- [ ] 将核心研究岗列为后续目标而非当前主投。

**所需资源：** [R20 GitHub Actions 文档](https://docs.github.com/en/actions)

**当天交付物：** career/resume-robot-system.md、resume-data-deploy.md、resume-vla-application.md

**完成验收：** 三个版本事实一致、侧重点不同；不声称论文、BSP、CAN 或伺服项目经验。

<a id="day-109"></a>

#### Day 109｜2026-12-10 星期四｜2 小时｜项目面试故事与技术深挖

**详细执行指南：** [Day 109 详细执行指南](daily-guides/day-109.md)

**当天任务**

- [ ] 准备架构、数据、模型、安全、弱网、失败和取舍七段 STAR/技术故事。
- [ ] 整理 tensor shape、归一化、chunk、时延和断线追问。
- [ ] 准备诚实回答个人与同学分工。

**所需资源：** [R06 LeRobot ACT 策略文档](https://huggingface.co/docs/lerobot/v0.6.0/en/act)；[R07 SmolVLA 官方说明](https://huggingface.co/blog/smolvla)；[R10 LeRobot 异步推理](https://huggingface.co/docs/lerobot/v0.6.0/en/async)

**当天交付物：** career/interview-story-bank.md

**完成验收：** 能在 2 分钟概述并在 20 分钟深挖；所有回答可指向代码或数据。

<a id="day-110"></a>

#### Day 110｜2026-12-11 星期五｜2 小时｜模拟面试与缺口修正

**详细执行指南：** [Day 110 详细执行指南](daily-guides/day-110.md)

**当天任务**

- [ ] 完成一次 C++/Linux/ROS2 和一次 PyTorch/VLA/系统设计模拟面试。
- [ ] 将不会的问题分为概念、实践和证据缺口。
- [ ] 只修正高频且与目标岗位相关的前三项。

**所需资源：** [R12 ROS 2 官方文档](https://docs.ros.org/en/jazzy/index.html)；[R14 PyTorch Tutorials](https://docs.pytorch.org/tutorials/)

**当天交付物：** career/mock-interview-review.md

**完成验收：** 两次面试均有录音/评分；前三缺口各有具体练习或修复提交。

<a id="day-111"></a>

#### Day 111｜2026-12-12 星期六｜4 小时｜100岗位再分层与首批3～5个申请

**详细执行指南：** [Day 111 详细执行指南](daily-guides/day-111.md)

**当天任务**

- [ ] 用现有100岗位报告更新已失效链接，从中选择15个仍开放且地点/学历/年限可行的样本。
- [ ] 逐个做硬门槛和证据映射，选出3～5个高匹配岗位；为每个岗位调整项目顺序和自我介绍。
- [ ] 人工完成首批申请并记录日期、版本和结果；不使用高频自动化投递或抓取。

**所需资源：** [R20 GitHub Actions 文档](https://docs.github.com/en/actions)

**当天交付物：** career/application-tracker.csv 与3～5份投递记录

**完成验收：** 每个申请都链接简历版本和匹配证据；未申请的岗位不标已投；不承诺当天获得反馈。

<a id="day-112"></a>

#### Day 112｜2026-12-13 星期日｜2 小时｜条件发布、总复盘与下一90天

**详细执行指南：** [Day 112 详细执行指南](daily-guides/day-112.md)

**当天任务**

- [ ] 按R/S轨、许可证、隐私、复现和测试清单决定发布v0.x、v1.0或延期，不为日期强行升级版本。
- [ ] 统计112天真实投入、完成率、阻塞、硬件/GPU成本、面试反馈和最有价值证据。
- [ ] 从未完成项和岗位反馈中只选3个下一阶段目标，为每个目标定义进入/退出条件。

**所需资源：** [R20 GitHub Actions 文档](https://docs.github.com/en/actions)；[R21 Docker 文档](https://docs.docker.com/)；[A01 GitHub 账号与独立仓库](https://github.com/)；[A02 Hugging Face Hub 账号](https://huggingface.co/)

**当天交付物：** 条件化 release、retrospective.md 与 next-90-days.md

**完成验收：** Git状态干净、公开范围与证据一致；未完成内容保持未完成；下一90天不超过3个主目标。

## 里程碑与简历开放条件

| 里程碑 | 最早时间 | 必须具备的证据 | 简历可写范围 |
|---|---|---|---|
| M0 工程基线 | 第 1 周 | 私有仓库、证据账本、固定环境、C/C++与Python最小测试 | 只能写既有能力；新项目仍是学习计划 |
| M1 MCU/CAN 实证 | 第 4 周 | 真实I2C/SPI/UART/CAN、FreeRTOS测量、Bootloader与故障测试 | 只能按真实硬件、测试条件和个人实现范围描述 |
| M2 Linux 边缘系统 | 第 6 周 | Buildroot/启动链/设备树配置、C++ daemon、存储转发、回滚和长稳 | 可写系统构建与应用工程；未写内核驱动时不得称完整BSP |
| M3 机器人数据闭环 | 第 10 周 | R/S轨明确、25个小样本、ACT checkpoint、冻结评测与失败报告 | R轨可写真实样本；S轨只能写仿真/公开数据工具 |
| M4 VLA 与弱网安全 | 第 12 周 | SmolVLA smoke/小微调、三类泛化、异步队列、故障注入和网络对比 | 只写实际完成范围；4G不描述为硬实时安全控制 |
| M5 条件开源 | 第 16 周 | CI、复现、许可、隐私和证据门通过；按实际范围发布v0.x/v1.0或延期 | 简历内容必须逐条链接证据，S轨不得写真机成果 |

## 偏航处理

- 同学机械臂不可持续使用：继续 mock/仿真，并在第 5 周采购门后决定 SO-101；不要临时把他人项目包装成自己的。
- GPU 不足：先用 ACT 和小数据验证，再租按量 GPU；每个任务设置最长时长和成本上限。
- SDK 不允许开源：只公开通用接口、mock、测试和经授权的薄适配示例，不提交厂商源码或协议材料。
- 真机安全门不通过：停止自动控制，只做回放、数据工具和仿真；安全不因进度而降级。
- SmolVLA 结果不佳：如实保留负面结果，从数据覆盖、归一化、同步、任务设计和模型基线逐项排查。
- 求职压力增加：P0 岗位继续投递；本计划是能力升级路线，不要求暂停现有求职。
