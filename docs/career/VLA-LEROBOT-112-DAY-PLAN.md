# EdgeVLA Lab：112 天逐日学习与开源项目计划

> 项目状态：**拟建开源作品**。
> EdgeVLA Lab 是本计划拟开发并开源的个人作品，不是 Hugging Face、LeRobot 或其他组织已经发布的同名仓库。LeRobot、SO-101 与 LIBERO 是其上游开源依赖。
> 计划周期：2026-08-03 至 2026-11-22，共 16 周 / 112 天 / 256 小时。

## 项目定义与真实性边界

- 项目名称：**EdgeVLA Lab**
- 副标题：基于 LeRobot 的机械臂数据采集、VLA 微调、真机评测与边云安全控制平台
- 仓库状态：尚未创建；完成第 5 周硬件与开源边界评审后再创建独立公开仓库
- 简历规则：未完成并形成可复现证据前，不得作为已完成项目写入正式简历；只可在学习计划中标记为进行中。
- 现有上游：LeRobot、SO-101/SO-ARM100、LIBERO、ROS2、PyTorch 等；它们不是你的个人项目。
- 个人作品：硬件适配、数据质量、训练评测、安全层、弱网实验、实验平台和公开证据；只有实际完成的部分才能写入简历。

## 时间与执行规则

| 项目 | 设置 |
|---|---|
| 开始 / 结束 | 2026-08-03 / 2026-11-22 |
| 周一至周五 | 每天 2 小时 |
| 周六 | 4 小时 |
| 周日 | 2 小时 |
| 总投入 | 256 小时 |
| 工时口径 | 256 小时为主动学习/开发时间；GPU 训练和 soak 的机器墙钟时间单独列出，不等于持续人工值守 |
| 缓冲规则 | 每四周阶段门的前 1 小时作为可替换缓冲；未发生延期则用于复现审计。若外部依赖超过 1 小时，不压缩安全/评测任务，整体日期顺延并保留 day 序号。 |
| 进度原则 | 每天以可检查的交付物结束；连续卡住 30 分钟就记录问题并切换到 mock/仿真路径 |
| 真实性原则 | 指标必须来自冻结协议和原始记录；未完成不得写成简历成果 |
| 安全原则 | 真机必须有人看护、低速、独立物理急停；4G 不承担无保护硬实时控制 |

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

- 第 1–4 周只用现有电脑、仿真和公开数据，不购买机械臂。
- 第 5 周完成机械臂接口与开源许可核对后，才决定继续使用同学设备或采购 SO-101。
- 下单 SO-101 不等于解锁真机路线；到货、装配、示教输入、独立急停和低速验收全部完成前继续执行 S 轨。
- 云 GPU 单次任务必须设置最长运行时间和预算告警；先用 ACT 验证数据，再为 SmolVLA 付费。
- Jetson、深度相机和第二套机械臂都属于可选项，只有当评测结果或目标岗位明确需要时才采购。
- 任何涉及真机动作的测试，安全附件和独立急停优先于算力升级。
- 若第 16 周真机、安全、许可或复现门未通过，只发布 v0.x simulation/data-tooling 版或延期，不为赶日期强行标记 v1.0.0。

## Day 35 后的双轨执行

- **决策日：Day 35。**
- **R 轨：机械臂授权、示教输入、独立急停和持续可用时段全部满足，继续真机适配、数据采集和评测。**
- **S 轨：任一真机前置条件不满足，切换为仿真/回放版；继续完成数据工具、策略训练、异步队列、弱网与平台，但不得写真实机器人结果。**

| 周次 | R 轨：真机条件满足 | S 轨：真机条件不满足 |
|---|---|---|
| 6 | 真实 Robot/Teleoperator 适配、低速遥操作与安全联调。 | 实现 LeRobot mock/replay robot、LIBERO adapter、契约测试和软件安全状态机；不发送真实动作。 |
| 7 | 采集获准的 50 个单任务 episode，并双副本备份。 | 锁定 HuggingFaceVLA/libero revision，抽取不少于 50 个兼容 episode 作为数据质量与回放测试集，不声称自行采集。 |
| 8–10 | ACT/SmolVLA 训练、20 次真机基线及五类泛化评测。 | 在固定 LIBERO 任务上训练/评测，按官方仿真协议报告；所有材料标记 simulation-only。 |
| 11–12 | Policy Client 控制低速真机，完成故障注入和真实 4G 对比。 | 以 mock/replay client 注入动作和网络故障；只报告队列、时延、恢复与软件安全状态机，不报告物理安全。 |
| 13–14 | 接入真实设备遥测、视频和人工接管，完成硬件在环与长稳。 | 接入回放数据与模拟设备，完成平台、CI、容器、性能和服务恢复测试。 |
| 15–16 | 满足许可与复现门后发布 EdgeVLA Lab v1.0.0 真机实验版。 | 发布 EdgeVLA Lab v0.1.0 simulation/data-tooling 版；简历只写仿真、数据工具与系统工程，不写真机 VLA。 |

任何时候真机授权、物理急停、示教输入或持续排期失效，都立即从 R 轨降级到 S 轨；可以延后真机里程碑，但不能用仿真结果替代真机结果。

## 16 周总览

| 周 | 日期 | 主题 | 阶段目标 | 周验收门 | 工时 |
|---:|---|---|---|---|---:|
| 1 | 2026-08-03～2026-08-09 | 环境、证据边界与 PyTorch 基线 | 建立可复现开发环境，明确转型定位，能独立解释并运行最小训练闭环。 | 环境重建脚本可用；最小模型训练测试通过；完成当前能力、缺口和不可夸大的事实清单。 | 16 |
| 2 | 2026-08-10～2026-08-16 | 机器人学与模仿学习基础 | 能用工程语言解释机器人状态、动作、坐标系、行为克隆、ACT 与 VLA 的边界。 | 完成二维机械臂小实验、行为克隆基线和 ACT/SmolVLA 对比说明。 | 16 |
| 3 | 2026-08-17～2026-08-23 | ROS 2、相机与系统接口 | 补齐目标岗位高频的 ROS2、tf2、rosbag2、相机标定和系统诊断基础。 | 完成一个可回放、可诊断、包含相机和虚拟关节状态的 ROS2 小系统。 | 16 |
| 4 | 2026-08-24～2026-08-30 | LeRobot 数据与仿真基线 | 无硬件条件下跑通 LeRobot 数据读取、训练、仿真评测和可复现记录。 | 固定版本的 ACT 仿真基线可重复训练和评测，并有失败分析。 | 16 |
| 5 | 2026-08-31～2026-09-06 | 机械臂摸底、接口契约与采购门 | 确认同学机械臂是否适合接入和开源，先用 mock 固定适配接口再决定硬件投入。 | 接口与安全评审通过；明确继续借用、只开源通用层或采购 SO-101 的选择。 | 16 |
| 6 | 2026-09-07～2026-09-13 | 真机适配、遥操作与安全联调 | R 轨在低速和人工看护下完成真机链路；S 轨完成同接口的 mock/replay、仿真示教和契约测试。 | R 轨通过连接、标定、低速控制和安全恢复；或 S 轨通过仿真/回放契约并明确 simulation-only。 | 16 |
| 7 | 2026-09-14～2026-09-20 | 数据采集、质量控制与 Dataset Card | R 轨形成 50-episode 真机数据集；S 轨形成固定 revision 的 50-episode 公开数据 manifest；两轨均完成自动质量检查。 | 数据集可回放、可划分、质量检查通过，隐私和许可明确。 | 16 |
| 8 | 2026-09-21～2026-09-27 | ACT 训练与 R 真机 / S 仿真评测 | 先用计算成本较低的 ACT 验证数据质量和完整训练评测流程。 | ACT checkpoint、与所选轨道一致的独立评测和失败报告可复现；R 轨指标只来自真实评测，S 轨只报告仿真结果并明确 simulation-only。 | 16 |
| 9 | 2026-09-28～2026-10-04 | SmolVLA 语言任务与微调 | 设计真正由语言区分的多任务数据，并完成 SmolVLA 微调与初评。 | 模型能接收图像、状态、语言并输出动作；数据、成本和评测记录完整。 | 16 |
| 10 | 2026-10-05～2026-10-11 | 泛化评测与 ACT/SmolVLA 对比 | 用冻结协议量化位置、语言、光照、物体和相机变化，不做只展示成功案例的 Demo。 | 获得可审计的基线与泛化结果表，并明确能力边界。 | 16 |
| 11 | 2026-10-12～2026-10-18 | 异步推理、动作队列与安全降级 | 建立可测试的 Policy Server/Robot Client 和独立安全层；ACT 使用同步/通用异步队列，只有 flow-matching policy 才比较 RTC。 | 延迟、旧动作、断线和模型异常均能被测量并触发可预测的安全响应。 | 16 |
| 12 | 2026-10-19～2026-10-25 | 4G 弱网与边云协同实验 | 量化弱网对 VLA 动作队列和任务的影响，证明安全控制留在本地。 | 局域网、netem 与真实 4G 三组结果可复现，结论不超出样本。 | 16 |
| 13 | 2026-10-26～2026-11-01 | 实验平台、Web 面板与 Flutter HMI | 把既有 IoT/全栈优势转化为机器人数据、实验、告警和人工接管平台。 | 设备到平台、实验到证据、告警到接管的端到端链路可演示。 | 16 |
| 14 | 2026-11-02～2026-11-08 | 容器化、测试、CI 与可靠性 | 把实验代码提升为可复现、可测试、可恢复的工程作品。 | 新环境一键运行核心链路，CI 绿色，完成压力和恢复记录。 | 16 |
| 15 | 2026-11-09～2026-11-15 | 开源发布、数据/模型卡与上游贡献 | 形成招聘方能够审查、复现和质疑的公开证据，而不泄露厂商或个人隐私。 | 公开候选版本通过许可、安全、复现和内容审查，至少产生一个真实上游互动。 | 16 |
| 16 | 2026-11-16～2026-11-22 | 岗位转换、简历证据与正式发布 | 把真实项目证据映射到 100 个岗位，形成可投递材料和后续迭代路线。 | 按 R/S 实际范围条件发布、简历只写已验证事实、完成首批高匹配岗位申请。 | 16 |

## 112 天逐日执行表

### 第 1 周｜环境、证据边界与 PyTorch 基线｜2026-08-03～2026-08-09

**本周目标：** 建立可复现开发环境，明确转型定位，能独立解释并运行最小训练闭环。

**阶段门：** 环境重建脚本可用；最小模型训练测试通过；完成当前能力、缺口和不可夸大的事实清单。

<a id="day-001"></a>

#### Day 001｜2026-08-03 星期一｜2 小时｜项目启动与真实性边界

**详细执行指南：** [Day 001 详细执行指南](daily-guides/day-001.md)

**当天任务**

- [ ] 阅读 100 岗位报告的分类和高频技能，确定 P0/P1/P2 目标岗位。
- [ ] 盘点现有 Linux、C/C++、Python、4G、IoT、Flutter 证据，以及 ROS2、VLA、机械臂等缺口。
- [ ] 建立学习日志、实验编号和“未验证不得写入简历”的证据规则。

**所需资源：** [R01 LeRobot v0.6.0 官方仓库](https://github.com/huggingface/lerobot/tree/v0.6.0)；[R03 Hugging Face Robot Learning Course](https://huggingface.co/learn/robotics-course/en/unit0/1)；[R20 GitHub Actions 文档](https://docs.github.com/en/actions)

**当天交付物：** docs/positioning.md 与 evidence-ledger.csv 初版

**完成验收：** 每项能力均标注“已有证据/学习中/未开始”，且 CAN、伺服、ROS2、VLA 不被写成项目经验。

<a id="day-002"></a>

#### Day 002｜2026-08-04 星期二｜2 小时｜Linux 与 Python 环境固定

**详细执行指南：** [Day 002 详细执行指南](daily-guides/day-002.md)

**当天任务**

- [ ] 确认 Ubuntu、NVIDIA 驱动、CUDA 与磁盘空间；无独显时记录云 GPU 方案。
- [ ] 为 LeRobot 创建独立 Python 3.12 uv/venv，安装 v0.6.0 tag 并保存 commit 与精确依赖。
- [ ] 建立 Ubuntu、驱动、CUDA、PyTorch、LeRobot、ROS2 的兼容矩阵；ROS 系统环境与 LeRobot 环境不混用。

**所需资源：** [R01 LeRobot v0.6.0 官方仓库](https://github.com/huggingface/lerobot/tree/v0.6.0)；[R02 LeRobot 安装指南](https://huggingface.co/docs/lerobot/v0.6.0/en/installation)；H02 Linux 开发主机；H03 NVIDIA GPU 或按量云 GPU

**当天交付物：** environment.md、依赖锁文件与诊断输出

**完成验收：** 在新 shell 中按脚本激活 LeRobot 环境并导入 torch、lerobot、opencv；输出中的 LeRobot commit 与锁定值一致。

<a id="day-003"></a>

#### Day 003｜2026-08-05 星期三｜2 小时｜仓库、分支与基础 CI

**当天任务**

- [ ] 建立独立 EdgeVLA Lab 私有学习仓库，标明尚未达到公开发布条件。
- [ ] 配置 main/feature 分支、提交规范，以及 Python 与 C++17/CMake 的格式、编译和最小单元测试。
- [ ] 增加禁止提交数据、权重、密钥和原始个人视频的忽略规则。

**所需资源：** [R20 GitHub Actions 文档](https://docs.github.com/en/actions)；[R21 Docker 文档](https://docs.docker.com/)；[R34 C++ Core Guidelines](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines)；[R35 CMake 官方教程](https://cmake.org/cmake/help/latest/guide/tutorial/)；[A01 GitHub 账号与独立仓库](https://github.com/)

**当天交付物：** 仓库骨架、README 状态声明、首个绿色 CI

**完成验收：** 从空目录按 README 可完成安装和测试；仓库中无密钥、权重或隐私数据。

<a id="day-004"></a>

#### Day 004｜2026-08-06 星期四｜2 小时｜NumPy、Tensor 与维度练习

**当天任务**

- [ ] 练习 NumPy 与 PyTorch 的 shape、dtype、device、broadcast、batch/time 维度。
- [ ] 将虚拟关节状态和多相机批数据转换为张量。
- [ ] 为典型维度错误编写失败测试。

**所需资源：** [R14 PyTorch Tutorials](https://docs.pytorch.org/tutorials/)

**当天交付物：** notebooks/01_tensor_shapes.ipynb 与 5 个维度测试

**完成验收：** 能口头解释 B×T×D、B×T×C×H×W，并让所有测试通过。

<a id="day-005"></a>

#### Day 005｜2026-08-07 星期五｜2 小时｜Autograd 与最小策略网络

**当天任务**

- [ ] 实现状态到动作的两层 MLP，理解前向、损失、反向传播和优化器。
- [ ] 记录过拟合 100 条合成样本的 loss 曲线。
- [ ] 验证保存、加载和固定随机种子。

**所需资源：** [R14 PyTorch Tutorials](https://docs.pytorch.org/tutorials/)；[R17 Weights & Biases 文档](https://docs.wandb.ai/)

**当天交付物：** src/baselines/mlp_policy.py 与训练曲线

**完成验收：** CPU 确定性模式下同一随机种子两次最终 loss 绝对差不超过 1e-6；checkpoint 重载输出最大绝对差不超过 1e-6。

<a id="day-006"></a>

#### Day 006｜2026-08-08 星期六｜4 小时｜Dataset 与训练循环

**当天任务**

- [ ] 实现合成机器人 Dataset、DataLoader、train/val 划分和归一化。
- [ ] 增加配置文件、日志、checkpoint 与早停。
- [ ] 故意制造数据泄漏和归一化错配并记录症状。

**所需资源：** [R14 PyTorch Tutorials](https://docs.pytorch.org/tutorials/)；[R17 Weights & Biases 文档](https://docs.wandb.ai/)

**当天交付物：** 可配置训练脚本与实验记录 001–003

**完成验收：** 训练、验证、恢复、推理四个命令可独立执行，并能解释数据泄漏影响。

<a id="day-007"></a>

#### Day 007｜2026-08-09 星期日｜2 小时｜周复盘与环境重建

**当天任务**

- [ ] 从干净环境按文档重建并运行测试。
- [ ] 完成 PyTorch、数据划分和证据边界自测。
- [ ] 更新风险清单和下周学习重点。

**所需资源：** [R02 LeRobot 安装指南](https://huggingface.co/docs/lerobot/v0.6.0/en/installation)；[R14 PyTorch Tutorials](https://docs.pytorch.org/tutorials/)；[R20 GitHub Actions 文档](https://docs.github.com/en/actions)

**当天交付物：** week-01-review.md 与环境重建记录

**完成验收：** 重建流程无隐藏手工步骤；20 道自测正确率不低于 80%。

### 第 2 周｜机器人学与模仿学习基础｜2026-08-10～2026-08-16

**本周目标：** 能用工程语言解释机器人状态、动作、坐标系、行为克隆、ACT 与 VLA 的边界。

**阶段门：** 完成二维机械臂小实验、行为克隆基线和 ACT/SmolVLA 对比说明。

<a id="day-008"></a>

#### Day 008｜2026-08-10 星期一｜2 小时｜关节、末端与坐标系

**当天任务**

- [ ] 学习关节空间、笛卡尔空间、自由度、位姿和齐次变换。
- [ ] 绘制相机、基座、末端、物体坐标系关系。
- [ ] 整理 degrees/radians、单位和时间戳约定。

**所需资源：** [R03 Hugging Face Robot Learning Course](https://huggingface.co/learn/robotics-course/en/unit0/1)；[R13 MoveIt 2 Jazzy 入门](https://moveit.picknik.ai/main/doc/tutorials/getting_started/getting_started.html)

**当天交付物：** docs/robot-frames.md 与坐标系图

**完成验收：** 给定三个坐标系能写出变换链，并指出单位混用的风险。

<a id="day-009"></a>

#### Day 009｜2026-08-11 星期二｜2 小时｜正逆运动学最小实现

**当天任务**

- [ ] 推导二维双连杆正运动学，并用 C++17/CMake 实现带单元测试的库。
- [ ] 用数值法求逆运动学目标，通过 Python 小工具可视化误差。
- [ ] 使用 RAII、明确单位/错误类型，记录奇异位形和不可达目标。

**所需资源：** [R13 MoveIt 2 Jazzy 入门](https://moveit.picknik.ai/main/doc/tutorials/getting_started/getting_started.html)；[R16 MuJoCo 文档](https://mujoco.readthedocs.io/en/stable/)；[R34 C++ Core Guidelines](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines)；[R35 CMake 官方教程](https://cmake.org/cmake/help/latest/guide/tutorial/)

**当天交付物：** cpp/kinematics 库、测试与 notebooks/02_kinematics.ipynb

**完成验收：** 连杆长度归一化为 1 时，10 个可达目标的末端欧氏误差均不超过 1e-3；5 个不可达目标全部被拒绝。

<a id="day-010"></a>

#### Day 010｜2026-08-12 星期三｜2 小时｜控制频率与安全约束

**当天任务**

- [ ] 理解位置、速度、力矩控制的差异及本项目只使用的接口边界。
- [ ] 定义软限位、最大单步变化、速度上限、超时和看门狗。
- [ ] 绘制物理急停与软件安全层的责任边界。

**所需资源：** [R13 MoveIt 2 Jazzy 入门](https://moveit.picknik.ai/main/doc/tutorials/getting_started/getting_started.html)；H05 独立急停与安全工作区

**当天交付物：** docs/safety-requirements.md

**完成验收：** 安全需求包含触发条件、响应、复位方式和测试方法，且不以软件急停替代物理急停。

<a id="day-011"></a>

#### Day 011｜2026-08-13 星期四｜2 小时｜行为克隆与分布偏移

**当天任务**

- [ ] 实现合成轨迹上的行为克隆。
- [ ] 比较训练分布内与分布外初始状态表现。
- [ ] 记录误差累积和数据覆盖不足。

**所需资源：** [R03 Hugging Face Robot Learning Course](https://huggingface.co/learn/robotics-course/en/unit0/1)；[R14 PyTorch Tutorials](https://docs.pytorch.org/tutorials/)

**当天交付物：** notebooks/03_behavior_cloning.ipynb

**完成验收：** 报告至少一个分布偏移失败案例，并说明增加何种数据可能改善。

<a id="day-012"></a>

#### Day 012｜2026-08-14 星期五｜2 小时｜ACT 与 Action Chunk

**当天任务**

- [ ] 阅读 ACT 文档，梳理 observation、action chunk、训练目标和推理流程。
- [ ] 用时间轴解释 chunk 长度与控制频率、延迟的关系。
- [ ] 列出 ACT 作为首个真机基线的理由。

**所需资源：** [R06 LeRobot ACT 策略文档](https://huggingface.co/docs/lerobot/v0.6.0/en/act)

**当天交付物：** docs/act-notes.md 与时序图

**完成验收：** 不看笔记能解释 action chunk、temporal ensembling 和基线选择。

<a id="day-013"></a>

#### Day 013｜2026-08-15 星期六｜4 小时｜VLA 与 SmolVLA

**当天任务**

- [ ] 梳理视觉、语言、机器人状态和动作的输入输出链路。
- [ ] 阅读 SmolVLA 架构、flow matching 与异步推理概念。
- [ ] 制作 ACT、SmolVLA、传统规则控制的适用场景对比。

**所需资源：** [R07 SmolVLA 官方说明](https://huggingface.co/blog/smolvla)；[R25 SmolVLA 官方微调指南](https://huggingface.co/docs/lerobot/v0.6.0/en/smolvla)；[R10 LeRobot 异步推理](https://huggingface.co/docs/lerobot/v0.6.0/en/async)；[R11 LeRobot RTC](https://huggingface.co/docs/lerobot/v0.6.0/en/rtc)

**当天交付物：** docs/policy-comparison.md

**完成验收：** 比较表覆盖数据量、算力、语言条件、实时性、可解释性和风险。

<a id="day-014"></a>

#### Day 014｜2026-08-16 星期日｜2 小时｜概念答辩与阶段门

**当天任务**

- [ ] 录制 10 分钟讲解：数据如何变为动作，以及安全层位于何处。
- [ ] 回答坐标系、行为克隆、ACT、VLA、分布偏移问题。
- [ ] 修正无法解释的术语，更新词汇表。

**所需资源：** [R03 Hugging Face Robot Learning Course](https://huggingface.co/learn/robotics-course/en/unit0/1)；[R06 LeRobot ACT 策略文档](https://huggingface.co/docs/lerobot/v0.6.0/en/act)；[R07 SmolVLA 官方说明](https://huggingface.co/blog/smolvla)

**当天交付物：** week-02-review.md、讲解视频与术语表

**完成验收：** 自拟 25 问正确率不低于 80%，讲解中不把模型输出等同于安全控制。

### 第 3 周｜ROS 2、相机与系统接口｜2026-08-17～2026-08-23

**本周目标：** 补齐目标岗位高频的 ROS2、tf2、rosbag2、相机标定和系统诊断基础。

**阶段门：** 完成一个可回放、可诊断、包含相机和虚拟关节状态的 ROS2 小系统。

<a id="day-015"></a>

#### Day 015｜2026-08-17 星期一｜2 小时｜ROS 2 Jazzy 安装与工作区

**当天任务**

- [ ] 在原生 Ubuntu 24.04 使用系统 Python 安装 ROS 2 Jazzy 和 colcon 工作区，禁止直接复用 LeRobot Conda/uv 解释器。
- [ ] 创建 rclpy 与 rclcpp 两个最小 package，C++ 使用可安装 CMake target 和测试。
- [ ] 验证 ROS 与 LeRobot 通过 topic/独立进程桥接，并记录两个环境的启动脚本。

**所需资源：** [R12 ROS 2 官方文档](https://docs.ros.org/en/jazzy/index.html)；[R29 ROS 2 Jazzy Python 环境指南](https://docs.ros.org/en/jazzy/How-To-Guides/Using-Python-Packages.html)；[R34 C++ Core Guidelines](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines)；[R35 CMake 官方教程](https://cmake.org/cmake/help/latest/guide/tutorial/)；H02 Linux 开发主机

**当天交付物：** ros2_ws 与 docs/ros2-environment.md

**完成验收：** 全新终端中可构建并运行两个 package；ROS 与 LeRobot 分别使用独立启动脚本，`python3` 路径和 rclpy ABI 检查写入日志。

<a id="day-016"></a>

#### Day 016｜2026-08-18 星期二｜2 小时｜Node、Topic、Service、Action

**当天任务**

- [ ] 使用 rclcpp 实现关节状态 publisher，使用 rclpy 实现状态 monitor subscriber。
- [ ] 实现校准 service 与长任务 action 示例。
- [ ] 比较三种通信语义和错误处理。

**所需资源：** [R12 ROS 2 官方文档](https://docs.ros.org/en/jazzy/index.html)；[R34 C++ Core Guidelines](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines)；[R35 CMake 官方教程](https://cmake.org/cmake/help/latest/guide/tutorial/)

**当天交付物：** ros2_ws/src/edgevla_interfaces_demo

**完成验收：** 节点可互通；service/action 的取消、超时和失败路径均被测试。

<a id="day-017"></a>

#### Day 017｜2026-08-19 星期三｜2 小时｜URDF 与 tf2

**当天任务**

- [ ] 创建简化机械臂 URDF。
- [ ] 发布 base、camera、end_effector 的 tf2。
- [ ] 用可视化检查坐标轴方向和树结构。

**所需资源：** [R12 ROS 2 官方文档](https://docs.ros.org/en/jazzy/index.html)；[R13 MoveIt 2 Jazzy 入门](https://moveit.picknik.ai/main/doc/tutorials/getting_started/getting_started.html)

**当天交付物：** robot_description 与 tf 树截图

**完成验收：** tf 树无环、时间戳有效，能查询相机到末端的变换。

<a id="day-018"></a>

#### Day 018｜2026-08-20 星期四｜2 小时｜rosbag2、MCAP 与时间戳

**当天任务**

- [ ] 录制图像、关节状态和命令 topic。
- [ ] 回放并计算消息频率、丢帧和时间偏差。
- [ ] 定义跨进程使用单调时钟与墙上时钟的规则。

**所需资源：** [R12 ROS 2 官方文档](https://docs.ros.org/en/jazzy/index.html)；[R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)

**当天交付物：** sample.mcap 与 tools/bag_quality_report.py

**完成验收：** 质量报告能输出每个 topic 的数量、频率、时间范围和最大间隔。

<a id="day-019"></a>

#### Day 019｜2026-08-21 星期五｜2 小时｜OpenCV 相机标定

**当天任务**

- [ ] 准备棋盘格并采集不同姿态标定图。
- [ ] 计算内参与畸变参数，保存 YAML。
- [ ] 可视化去畸变前后结果并记录重投影误差。

**所需资源：** [R15 OpenCV 相机标定](https://docs.opencv.org/4.x/dc/dbb/tutorial_py_calibration.html)；H04 固定机位 RGB 摄像头；H06 标定与任务物料

**当天交付物：** calibration/camera.yaml 与标定报告

**完成验收：** 标定样本覆盖画面各区域；误差与失败样本均写入报告。

<a id="day-020"></a>

#### Day 020｜2026-08-22 星期六｜4 小时｜Lifecycle、参数与诊断

**当天任务**

- [ ] 给 rclcpp 虚拟机器人节点增加 configure/activate/deactivate 生命周期和 RAII 资源管理。
- [ ] 增加参数校验、心跳、频率和错误状态诊断。
- [ ] 模拟设备断开和恢复。

**所需资源：** [R12 ROS 2 官方文档](https://docs.ros.org/en/jazzy/index.html)；[R34 C++ Core Guidelines](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines)；[R35 CMake 官方教程](https://cmake.org/cmake/help/latest/guide/tutorial/)

**当天交付物：** 可诊断的 virtual_robot_node 与故障测试

**完成验收：** 断开后进入安全非活动状态，恢复必须显式重新激活。

<a id="day-021"></a>

#### Day 021｜2026-08-23 星期日｜2 小时｜ROS 2 周项目验收

**当天任务**

- [ ] 一键启动相机、虚拟机器人、记录器和诊断面板。
- [ ] 回放上一轮数据并复现状态。
- [ ] 更新 ROS2 技术问答和岗位匹配表。

**所需资源：** [R12 ROS 2 官方文档](https://docs.ros.org/en/jazzy/index.html)；[R15 OpenCV 相机标定](https://docs.opencv.org/4.x/dc/dbb/tutorial_py_calibration.html)；[R20 GitHub Actions 文档](https://docs.github.com/en/actions)

**当天交付物：** week-03-demo.md 与启动脚本

**完成验收：** 陌生环境按文档 20 分钟内跑通；断线、回放、诊断三条验收通过。

### 第 4 周｜LeRobot 数据与仿真基线｜2026-08-24～2026-08-30

**本周目标：** 无硬件条件下跑通 LeRobot 数据读取、训练、仿真评测和可复现记录。

**阶段门：** 固定版本的 ACT 仿真基线可重复训练和评测，并有失败分析。

<a id="day-022"></a>

#### Day 022｜2026-08-24 星期一｜2 小时｜LeRobot 版本冻结与源码地图

**当天任务**

- [ ] 固定 LeRobot v0.6.0 tag 对应 commit 并建立独立环境。
- [ ] 定位 robot、camera、teleoperator、dataset、policy、train、eval 模块。
- [ ] 绘制调用关系，注明哪些是上游代码、哪些将自行开发。

**所需资源：** [R01 LeRobot v0.6.0 官方仓库](https://github.com/huggingface/lerobot/tree/v0.6.0)；[R02 LeRobot 安装指南](https://huggingface.co/docs/lerobot/v0.6.0/en/installation)

**当天交付物：** docs/lerobot-source-map.md

**完成验收：** 运行时依赖和文档引用对应 v0.6.0 tag/commit；只有上游贡献指南使用 main，文档明确 EdgeVLA Lab 并非上游现有项目。

<a id="day-023"></a>

#### Day 023｜2026-08-25 星期二｜2 小时｜LeRobotDataset v3 解剖

**当天任务**

- [ ] 固定 `lerobot/aloha_sim_transfer_cube_human` 的 revision，并查看 Parquet、MP4 与元数据。
- [ ] 记录 AlohaTransferCube-v0 对应的 observation、action、相机键、fps、episode、timestamp 和归一化统计。
- [ ] 编写数据集完整性与训练/环境 feature 兼容检查器雏形。

**所需资源：** [R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；[R18 Hugging Face Dataset Cards](https://huggingface.co/docs/hub/en/datasets-cards)；[R32 LeRobot ALOHA 仿真数据集](https://huggingface.co/datasets/lerobot/aloha_sim_transfer_cube_human)；[R33 LeRobot ACT ALOHA 模型卡](https://huggingface.co/lerobot/act_aloha_sim_transfer_cube_human)；[A02 Hugging Face Hub 账号](https://huggingface.co/)

**当天交付物：** tools/inspect_lerobot_dataset.py

**完成验收：** manifest 固定 repo/revision/AlohaTransferCube-v0/schema；检查器能发现缺帧、时间倒退、字段缺失、视频不可读和动作空间不兼容五类错误。

<a id="day-024"></a>

#### Day 024｜2026-08-26 星期三｜2 小时｜数据可视化与回放

**当天任务**

- [ ] 同步显示多相机、关节状态和动作曲线。
- [ ] 实现 episode/时间点跳转和异常标记。
- [ ] 记录 observation 与 action 对齐方式。

**所需资源：** [R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)

**当天交付物：** 最小数据回放工具

**完成验收：** 同一时间点可同时查看图像、状态与动作，时间误差可见。

<a id="day-025"></a>

#### Day 025｜2026-08-27 星期四｜2 小时｜ACT 仿真训练冒烟

**当天任务**

- [ ] 使用 Day 23 固定的 ALOHA 数据集 revision 与 AlohaTransferCube-v0 feature/action schema 完成 ACT 小步数兼容性冒烟。
- [ ] 记录显存、耗时、loss、checkpoint 和精确命令。
- [ ] 验证输入键、动作维度、归一化和中断恢复；以官方 ACT ALOHA 模型卡作为配套基线。

**所需资源：** [R06 LeRobot ACT 策略文档](https://huggingface.co/docs/lerobot/v0.6.0/en/act)；[R09 LeRobot 算力指南](https://huggingface.co/docs/lerobot/v0.6.0/en/hardware_guide)；[R17 Weights & Biases 文档](https://docs.wandb.ai/)；[R32 LeRobot ALOHA 仿真数据集](https://huggingface.co/datasets/lerobot/aloha_sim_transfer_cube_human)；[R33 LeRobot ACT ALOHA 模型卡](https://huggingface.co/lerobot/act_aloha_sim_transfer_cube_human)；[A03 实验跟踪账号](https://wandb.ai/)

**当天交付物：** experiments/sim-act-smoke

**完成验收：** 训练数据与 AlohaTransferCube-v0 的图像键、状态和动作维度完全一致；checkpoint 恢复和一次 rollout 均成功。

<a id="day-026"></a>

#### Day 026｜2026-08-28 星期五｜2 小时｜标准化仿真评测

**当天任务**

- [ ] 只在与 Day 25 同一 AlohaTransferCube-v0 observation/action 空间运行评测。
- [ ] 固定数据 revision、环境包版本、种子、至少 20 个 episode 和官方成功判定。
- [ ] 保存逐 episode 结果而非只保留均值。

**所需资源：** [R24 LeRobot Policy Rollout](https://huggingface.co/docs/lerobot/v0.6.0/en/inference)；[R32 LeRobot ALOHA 仿真数据集](https://huggingface.co/datasets/lerobot/aloha_sim_transfer_cube_human)；[R33 LeRobot ACT ALOHA 模型卡](https://huggingface.co/lerobot/act_aloha_sim_transfer_cube_human)

**当天交付物：** experiments/sim-act-eval/results.csv

**完成验收：** 结果包含每轮种子、初始条件、成功、耗时和失败原因。

<a id="day-027"></a>

#### Day 027｜2026-08-29 星期六｜4 小时｜失败分析与可复现性

**当天任务**

- [ ] 抽查成功与失败视频，建立视觉、动作、环境和评测错误分类。
- [ ] 重复训练或复评一次，比较方差。
- [ ] 生成自动实验摘要。

**所需资源：** [R08 LeRobot LIBERO](https://huggingface.co/docs/lerobot/v0.6.0/en/libero)；[R17 Weights & Biases 文档](https://docs.wandb.ai/)；[R20 GitHub Actions 文档](https://docs.github.com/en/actions)

**当天交付物：** reports/sim-baseline.md 与生成脚本

**完成验收：** 报告包含负面结果、复现差异和至少三条下一步假设。

<a id="day-028"></a>

#### Day 028｜2026-08-30 星期日｜2 小时｜仿真阶段门与硬件预约

**当天任务**

- [ ] 从空环境重跑数据检查、训练冒烟和评测。
- [ ] 取得机械臂型号、SDK/协议、示教输入、可用时段、公开许可和安全停止方案；只发出请求不视为取得。
- [ ] 若任一必要信息未取得，登记 S 轨并继续仿真；暂不购买 SO-101。

**所需资源：** [R01 LeRobot v0.6.0 官方仓库](https://github.com/huggingface/lerobot/tree/v0.6.0)；[R08 LeRobot LIBERO](https://huggingface.co/docs/lerobot/v0.6.0/en/libero)；H01 同学的机械臂与厂商 SDK；H05 独立急停与安全工作区

**当天交付物：** week-04-review.md 与 hardware-questionnaire.md

**完成验收：** 仿真链路通过；六项真机信息全部已取得，或已明确切换 S 轨。不得以“已发请求”解锁真机。

### 第 5 周｜机械臂摸底、接口契约与采购门｜2026-08-31～2026-09-06

**本周目标：** 确认同学机械臂是否适合接入和开源，先用 mock 固定适配接口再决定硬件投入。

**阶段门：** 接口与安全评审通过；明确继续借用、只开源通用层或采购 SO-101 的选择。

<a id="day-029"></a>

#### Day 029｜2026-08-31 星期一｜2 小时｜机械臂与 SDK 资产盘点

**当天任务**

- [ ] 记录型号、自由度、控制器、舵机/电机、通信方式和 SDK 版本。
- [ ] 核实 ROS/ROS2、Python/C++、Linux 版本和许可证。
- [ ] 确认代码、协议截图、日志和视频的公开边界。

**所需资源：** [R05 LeRobot 自定义硬件](https://huggingface.co/docs/lerobot/v0.6.0/en/integrate_hardware)；H01 同学的机械臂与厂商 SDK；H10 示教 / 遥操作输入源；H11 原始数据独立备份介质；A05 机械臂所有者授权与使用排期

**当天交付物：** hardware-inventory.md 与 license-boundary.md

**完成验收：** 所有未知项有负责人和截止日；无授权的厂商源码不会进入公开仓库。

<a id="day-030"></a>

#### Day 030｜2026-09-01 星期二｜2 小时｜Robot I/O 契约

**当天任务**

- [ ] 定义 connect、calibrate、get_observation、send_action、disconnect。
- [ ] 固定关节顺序、单位、范围、fps、timestamp 和错误码。
- [ ] 用 JSON 示例描述 observation/action。

**所需资源：** [R05 LeRobot 自定义硬件](https://huggingface.co/docs/lerobot/v0.6.0/en/integrate_hardware)；[R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)

**当天交付物：** docs/robot-io-contract.md

**完成验收：** 契约可在不知道厂商内部实现的情况下编写 mock 和测试。

<a id="day-031"></a>

#### Day 031｜2026-09-02 星期三｜2 小时｜通信跟踪与时序预算

**当天任务**

- [ ] 只使用公开/获准接口记录一次读取与控制调用时序。
- [ ] 测量典型调用延迟、抖动、丢帧和重连时间。
- [ ] 建立端到端时延预算。

**所需资源：** H01 同学的机械臂与厂商 SDK；H02 Linux 开发主机

**当天交付物：** reports/hardware-latency-baseline.csv

**完成验收：** 至少 1000 次读取样本，包含 P50/P95/P99 和错误数。

<a id="day-032"></a>

#### Day 032｜2026-09-03 星期四｜2 小时｜安全风险评审

**当天任务**

- [ ] 按启动、校准、遥操作、策略控制、断线、恢复分阶段做风险分析。
- [ ] 确认物理急停、低速模式、工作区和人工看护。
- [ ] 定义禁止自动测试的危险条件。

**所需资源：** H05 独立急停与安全工作区；H06 标定与任务物料

**当天交付物：** safety/risk-assessment.md

**完成验收：** 每个高风险项都有预防、检测、响应和责任人；未满足 H05 则禁止上电动作。

<a id="day-033"></a>

#### Day 033｜2026-09-04 星期五｜2 小时｜适配器骨架

**当天任务**

- [ ] 基于 LeRobot 扩展方式创建独立 robot 插件。
- [ ] 隔离通用接口、厂商薄适配层和配置。
- [ ] 使用假数据完成注册与 CLI 加载。

**所需资源：** [R01 LeRobot v0.6.0 官方仓库](https://github.com/huggingface/lerobot/tree/v0.6.0)；[R05 LeRobot 自定义硬件](https://huggingface.co/docs/lerobot/v0.6.0/en/integrate_hardware)；[R20 GitHub Actions 文档](https://docs.github.com/en/actions)

**当天交付物：** packages/lerobot_robot_edgevla 骨架

**完成验收：** 不修改 LeRobot 上游源码即可发现插件；默认配置不连接真实硬件。

<a id="day-034"></a>

#### Day 034｜2026-09-05 星期六｜4 小时｜Mock、契约测试与故障注入

**当天任务**

- [ ] 实现确定性 mock 机械臂。
- [ ] 覆盖断线、超时、越界、时间倒退和部分关节缺失。
- [ ] 编写契约测试供真实适配器复用。

**所需资源：** [R05 LeRobot 自定义硬件](https://huggingface.co/docs/lerobot/v0.6.0/en/integrate_hardware)；[R20 GitHub Actions 文档](https://docs.github.com/en/actions)

**当天交付物：** MockRobot 与 contract test suite

**完成验收：** 正常路径和至少五类故障均自动测试，错误不会静默转成动作。

<a id="day-035"></a>

#### Day 035｜2026-09-06 星期日｜2 小时｜设计评审与硬件决策

**当天任务**

- [ ] 与同学评审接口、安全、时段和开源边界。
- [ ] 根据持续可用性选择：R 轨借用、采购 SO-101 但等待到货验收、或 S 轨仿真/回放。
- [ ] 记录决策理由、预算上限、到货/授权依赖、退出条件和后续周次替代交付物。

**所需资源：** [R23 SO-101 开源硬件](https://github.com/TheRobotStudio/SO-ARM100)；H01 同学的机械臂与厂商 SDK；H09 SO-101 leader+follower；A05 机械臂所有者授权与使用排期

**当天交付物：** ADR-001-hardware-platform.md

**完成验收：** 只有授权、排期、示教输入、独立急停、安全区五项全部通过才能进入 R 轨；其余情况进入 S 轨，采购中设备也不得提前解锁。

### 第 6 周｜真机适配、遥操作与安全联调｜2026-09-07～2026-09-13

**本周目标：** R 轨在低速和人工看护下完成真机链路；S 轨完成同接口的 mock/replay、仿真示教和契约测试。

**阶段门：** R 轨通过连接、标定、低速控制和安全恢复；或 S 轨通过仿真/回放契约并明确 simulation-only。

<a id="day-036"></a>

#### Day 036｜2026-09-07 星期一｜2 小时｜R 真机连接 / S Mock 连接

**当天任务**

- [ ] R 轨实现真实 connect/disconnect 和只读状态；S 轨实现 mock/replay connect/disconnect。
- [ ] 两轨默认启用 dry-run，不发送真实运动命令。
- [ ] 验证错误码、资源释放，并在产物元数据写明 real 或 simulation。

**所需资源：** [R05 LeRobot 自定义硬件](https://huggingface.co/docs/lerobot/v0.6.0/en/integrate_hardware)；H01 同学的机械臂与厂商 SDK；H05 独立急停与安全工作区

**当天交付物：** R 轨真实适配器只读版本或 S 轨 mock/replay adapter

**完成验收：** 连续连接/断开 50 次无句柄增长；未显式解锁时任何真实 action 不执行，S 轨产物标记 simulation-only。

<a id="day-037"></a>

#### Day 037｜2026-09-08 星期二｜2 小时｜R 真机标定 / S 虚拟映射

**当天任务**

- [ ] R 轨建立厂商关节映射与真实标定；S 轨建立 ALOHA/LIBERO 或 mock feature 映射。
- [ ] 实现标定/映射数据保存、校验和版本化。
- [ ] 两轨测试异常零位、维度和关节顺序错误。

**所需资源：** [R05 LeRobot 自定义硬件](https://huggingface.co/docs/lerobot/v0.6.0/en/integrate_hardware)；H01 同学的机械臂与厂商 SDK；H05 独立急停与安全工作区

**当天交付物：** calibration schema 与标定命令

**完成验收：** 标定/映射不可跨设备或环境误用；校验失败时拒绝进入运动或 rollout 状态。

<a id="day-038"></a>

#### Day 038｜2026-09-09 星期三｜2 小时｜R 实时 Observation / S 回放 Observation

**当天任务**

- [ ] R 轨输出实时关节位置和可用状态；S 轨从固定数据 revision 输出回放状态。
- [ ] 计算采样频率与抖动。
- [ ] 验证缺字段和 NaN 处理。

**所需资源：** [R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；[R05 LeRobot 自定义硬件](https://huggingface.co/docs/lerobot/v0.6.0/en/integrate_hardware)

**当天交付物：** observation pipeline 与质量报告

**完成验收：** 连续 30 分钟无时间倒退；NaN、断线/回放中断和过期状态均被标记并阻断动作消费。

<a id="day-039"></a>

#### Day 039｜2026-09-10 星期四｜2 小时｜R Action 发送 / S 仿真动作守卫

**当天任务**

- [ ] R 轨实现位置动作发送；S 轨只向仿真/mock sink 发送动作。
- [ ] 增加软限位、最大步长、速率限制和命令超时。
- [ ] R 轨低速执行预定义小幅轨迹；S 轨用同样测试向量验证守卫。

**所需资源：** [R05 LeRobot 自定义硬件](https://huggingface.co/docs/lerobot/v0.6.0/en/integrate_hardware)；H05 独立急停与安全工作区

**当天交付物：** 安全动作层与边界测试

**完成验收：** 预置的全部越界命令均被拒绝或裁剪并记录；R 轨小幅轨迹可用物理急停终止，S 轨不得宣称物理安全验证。

<a id="day-040"></a>

#### Day 040｜2026-09-11 星期五｜2 小时｜R 相机接入 / S 视频回放同步

**当天任务**

- [ ] R 轨接入固定 RGB 相机；S 轨使用固定数据 revision 的视频流，锁定分辨率和 fps。
- [ ] 将图像与实时/回放状态统一时间戳。
- [ ] 测量 10 分钟帧交付率、帧间隔和图像—状态偏差。

**所需资源：** [R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；[R15 OpenCV 相机标定](https://docs.opencv.org/4.x/dc/dbb/tutorial_py_calibration.html)；H04 固定机位 RGB 摄像头

**当天交付物：** camera adapter 与 sync report

**完成验收：** 10 分钟内帧交付率不低于 99%；P95 帧间隔不超过目标周期 1.5 倍，P95 图像—状态偏差不超过 1 个目标帧周期，否则阻断采集。

<a id="day-041"></a>

#### Day 041｜2026-09-12 星期六｜4 小时｜R 遥操作 / S 仿真示教

**当天任务**

- [ ] R 轨接入获准的 leader/示教器/gamepad；S 轨用键盘或脚本在仿真中生成示范。
- [ ] 两轨增加 dead-man、人工接管/暂停和状态提示。
- [ ] 完成 10 次标准取放或对应仿真任务演练。

**所需资源：** [R05 LeRobot 自定义硬件](https://huggingface.co/docs/lerobot/v0.6.0/en/integrate_hardware)；H01 同学的机械臂与厂商 SDK；H05 独立急停与安全工作区；H06 标定与任务物料；H10 示教 / 遥操作输入源

**当天交付物：** teleop adapter 与操作规程

**完成验收：** 松开 dead-man 后下一控制周期不再产生新动作；10 次演练无越界，R/S 证据明确分开。

<a id="day-042"></a>

#### Day 042｜2026-09-13 星期日｜2 小时｜可靠性与阶段验收

**当天任务**

- [ ] 运行 R 或 S 轨的连接、标定/映射、采集/回放、动作、遥操作完整契约测试。
- [ ] 做 USB/网络断开、程序崩溃和重新连接演练。
- [ ] 记录遗留风险。

**所需资源：** [R20 GitHub Actions 文档](https://docs.github.com/en/actions)；H05 独立急停与安全工作区

**当天交付物：** week-06-hardware-acceptance.md

**完成验收：** 不少于 25 个契约/故障用例全部通过；任一断线不会继续消费旧动作，恢复需要显式确认。

### 第 7 周｜数据采集、质量控制与 Dataset Card｜2026-09-14～2026-09-20

**本周目标：** R 轨形成 50-episode 真机数据集；S 轨形成固定 revision 的 50-episode 公开数据 manifest；两轨均完成自动质量检查。

**阶段门：** 数据集可回放、可划分、质量检查通过，隐私和许可明确。

<a id="day-043"></a>

#### Day 043｜2026-09-14 星期一｜2 小时｜任务定义与成功标准

**当天任务**

- [ ] 选择低风险单任务，如多起点抓取并放入盒中。
- [ ] 定义对象、起点、终点、成功、失败、超时和中止。
- [ ] 设计位置和演示风格覆盖表。

**所需资源：** [R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；[R18 Hugging Face Dataset Cards](https://huggingface.co/docs/hub/en/datasets-cards)；H06 标定与任务物料；A06 独立评审者

**当天交付物：** dataset/task-spec-v1.md

**完成验收：** 两名未参与编写者独立判断 10 个预录案例，至少 9 个案例结论一致；分歧案例在采集前修正规范。

<a id="day-044"></a>

#### Day 044｜2026-09-15 星期二｜2 小时｜Schema、同步与版本规则

**当天任务**

- [ ] 固定 feature、单位、fps、相机命名、task 文本和 episode 元数据。
- [ ] 定义时钟、丢帧、过期动作和中途失败的记录规则。
- [ ] 建立数据版本与不可变原始区。

**所需资源：** [R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；[R18 Hugging Face Dataset Cards](https://huggingface.co/docs/hub/en/datasets-cards)

**当天交付物：** dataset/schema-v1.json 与 versioning.md

**完成验收：** schema 可机器校验；原始 episode 不被后处理覆盖。

<a id="day-045"></a>

#### Day 045｜2026-09-16 星期三｜2 小时｜R 试采 / S 公开数据试切片

**当天任务**

- [ ] R 轨按标准流程采集 10 个试验 episode；S 轨从固定公开数据 revision 选择 10 个兼容 episode。
- [ ] 每轮记录起点、操作者、成功、异常和重采原因。
- [ ] 回放抽查动作与图像同步。

**所需资源：** [R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；H04 固定机位 RGB 摄像头；H05 独立急停与安全工作区；H06 标定与任务物料；H10 示教 / 遥操作输入源；H11 原始数据独立备份介质

**当天交付物：** dataset/raw/pilot-10 或 dataset/public-manifest/pilot-10 与日志

**完成验收：** 10 个 episode 全部可解码回放；S 轨保留来源/revision，任何中止或坏样本均保留原因。

<a id="day-046"></a>

#### Day 046｜2026-09-17 星期四｜2 小时｜自动质量检查器

**当天任务**

- [ ] 检查帧数、fps、时间单调、NaN、关节范围、视频和元数据。
- [ ] 输出 episode 级 pass/warn/fail 与原因。
- [ ] 为已知坏样本建立回归测试。

**所需资源：** [R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；[R20 GitHub Actions 文档](https://docs.github.com/en/actions)

**当天交付物：** tools/validate_dataset.py 与测试夹具

**完成验收：** 六类错误各制作 2 个固定夹具，共 12 个坏样本全部检出且错误类型正确；结果可导出 CSV/JSON。

<a id="day-047"></a>

#### Day 047｜2026-09-18 星期五｜2 小时｜R 第一批采集 / S 第一批兼容样本

**当天任务**

- [ ] R 轨按 5 个起始区域各 5 次采集 25 个 episode；S 轨按同一任务/场景层次选择 25 个公开 episode。
- [ ] 每 5 个 episode 运行质量检查并备份。
- [ ] 控制示范速度与动作风格一致。

**所需资源：** [R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；H04 固定机位 RGB 摄像头；H05 独立急停与安全工作区；H06 标定与任务物料；H10 示教 / 遥操作输入源；H11 原始数据独立备份介质

**当天交付物：** dataset/raw/batch-a-25 或 dataset/public-manifest/batch-a-25

**完成验收：** 25 个有效 episode 覆盖 5 个层次且每层 5 个；质量失败样本被隔离并记录来源和原因。

<a id="day-048"></a>

#### Day 048｜2026-09-19 星期六｜4 小时｜R 第二批采集 / S 第二批兼容样本

**当天任务**

- [ ] R 轨补齐另 25 个有效 episode；S 轨选择另一组不重叠的 25 个公开 episode。
- [ ] 由同一判定规则标注成功、失败与中止。
- [ ] 生成采集统计和数据备份校验和。

**所需资源：** [R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；[R18 Hugging Face Dataset Cards](https://huggingface.co/docs/hub/en/datasets-cards)；H04 固定机位 RGB 摄像头；H05 独立急停与安全工作区；H06 标定与任务物料；H10 示教 / 遥操作输入源；H11 原始数据独立备份介质

**当天交付物：** dataset/raw/batch-b-25 或 dataset/public-manifest/batch-b-25 与 checksums

**完成验收：** 累计至少 50 个通过检查的有效 episode；备份校验一致。

<a id="day-049"></a>

#### Day 049｜2026-09-20 星期日｜2 小时｜划分、Dataset Card 与阶段门

**当天任务**

- [ ] 按初始条件而非随机帧划分 train/val/test。
- [ ] 撰写来源、任务、硬件、采集、许可、限制和隐私说明。
- [ ] 生成只含获准内容的候选发布包。

**所需资源：** [R18 Hugging Face Dataset Cards](https://huggingface.co/docs/hub/en/datasets-cards)；[R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)

**当天交付物：** DATASET_CARD.md 与 split manifest

**完成验收：** 不同划分无 episode/场景泄漏；未授权视频不进入发布包。

### 第 8 周｜ACT 训练与 R 真机 / S 仿真评测｜2026-09-21～2026-09-27

**本周目标：** 先用计算成本较低的 ACT 验证数据质量和完整训练评测流程。

**阶段门：** ACT checkpoint、与所选轨道一致的独立评测和失败报告可复现；R 轨指标只来自真实评测，S 轨只报告仿真结果并明确 simulation-only。

<a id="day-050"></a>

#### Day 050｜2026-09-21 星期一｜2 小时｜ACT 配置与数据审查

**当天任务**

- [ ] 确认 observation/action feature 与归一化统计。
- [ ] 定义 batch、chunk、训练步数、种子和评测协议。
- [ ] 检查 train/test 泄漏。

**所需资源：** [R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；[R06 LeRobot ACT 策略文档](https://huggingface.co/docs/lerobot/v0.6.0/en/act)；[R09 LeRobot 算力指南](https://huggingface.co/docs/lerobot/v0.6.0/en/hardware_guide)

**当天交付物：** configs/act-task-v1.yaml

**完成验收：** 配置含精确数据版本、代码 commit、随机种子和硬件信息。

<a id="day-051"></a>

#### Day 051｜2026-09-22 星期二｜2 小时｜ACT 冒烟训练

**当天任务**

- [ ] 小步数训练验证显存、数据加载和 checkpoint。
- [ ] 对一个小 batch 过拟合以检查管线。
- [ ] 估算完整训练成本。

**所需资源：** [R06 LeRobot ACT 策略文档](https://huggingface.co/docs/lerobot/v0.6.0/en/act)；[R09 LeRobot 算力指南](https://huggingface.co/docs/lerobot/v0.6.0/en/hardware_guide)；[R17 Weights & Biases 文档](https://docs.wandb.ai/)；H03 NVIDIA GPU 或按量云 GPU

**当天交付物：** experiments/act-smoke

**完成验收：** 固定 16-episode 子集训练无 NaN，最终 loss 不高于初始值 20%；checkpoint 重载输出最大绝对差不超过 1e-5。

<a id="day-052"></a>

#### Day 052｜2026-09-23 星期三｜2 小时｜完整 ACT 训练

**当天任务**

- [ ] 运行固定预算的完整训练。
- [ ] 自动保存配置、日志、checkpoint 和环境信息。
- [ ] 启用最长运行时间与成本保护。

**所需资源：** [R06 LeRobot ACT 策略文档](https://huggingface.co/docs/lerobot/v0.6.0/en/act)；[R09 LeRobot 算力指南](https://huggingface.co/docs/lerobot/v0.6.0/en/hardware_guide)；[R17 Weights & Biases 文档](https://docs.wandb.ai/)；[R28 Hugging Face Jobs GPU 价格](https://huggingface.co/docs/hub/jobs-pricing)；H03 NVIDIA GPU 或按量云 GPU；[A04 按量 GPU 与预算告警](https://huggingface.co/docs/hub/jobs)

**机器墙钟时间：** 预计 1–4 小时（以 Day 51 实测速率估算）；硬上限 8 小时；max_cost 写入实验配置，达到上限自动终止

**当天交付物：** experiments/act-v1 完整产物

**完成验收：** 实验配置包含 8 小时硬超时和明确 max_cost；完成或自动终止后，配置、产物哈希、日志、checkpoint/失败原因齐全。

<a id="day-053"></a>

#### Day 053｜2026-09-24 星期四｜2 小时｜曲线、过拟合与离线检查

**当天任务**

- [ ] 比较 train/val loss 和动作预测误差。
- [ ] 检查不同关节和时间步的误差。
- [ ] 选择 checkpoint 时不使用真机测试集调参。

**所需资源：** [R17 Weights & Biases 文档](https://docs.wandb.ai/)；[R06 LeRobot ACT 策略文档](https://huggingface.co/docs/lerobot/v0.6.0/en/act)

**当天交付物：** reports/act-training-analysis.md

**完成验收：** 报告明确 checkpoint 选择规则、异常曲线和至少两个风险假设。

<a id="day-054"></a>

#### Day 054｜2026-09-25 星期五｜2 小时｜R 真机 / S 回放推理预检

**当天任务**

- [ ] 离线回放 checkpoint 输出并经过安全动作层。
- [ ] 检查单位、顺序、范围、动作年龄和初始姿态。
- [ ] R 轨用低速空载完成 3 次受控预检；S 轨向 mock/replay 分别注入单位、顺序、范围、动作年龄和初始姿态 5 类错误。

**所需资源：** [R24 LeRobot Policy Rollout](https://huggingface.co/docs/lerobot/v0.6.0/en/inference)；H05 独立急停与安全工作区

**当天交付物：** safety/policy-preflight-v1.md

**完成验收：** 正常输出通过安全检查，任一异常均被拒绝而不是临时绕过；R 轨保留 3 次真机预检记录，S 轨 5 类注入均被拒绝并标记 simulation-only。

<a id="day-055"></a>

#### Day 055｜2026-09-26 星期六｜4 小时｜R 20 次真机 / S 50 次仿真评测

**当天任务**

- [ ] R 轨按预注册起点运行 20 个真机 episode；S 轨运行 50 个固定种子仿真 episode。
- [ ] 逐轮记录成功、耗时、人工接管、安全拦截和视频。
- [ ] 评测期间不修改模型或成功判定。

**所需资源：** [R24 LeRobot Policy Rollout](https://huggingface.co/docs/lerobot/v0.6.0/en/inference)；H01 同学的机械臂与厂商 SDK；H04 固定机位 RGB 摄像头；H05 独立急停与安全工作区；H06 标定与任务物料

**当天交付物：** evaluations/act-v1/results.csv 与 R/S 原始证据

**完成验收：** R 轨 20 轮或 S 轨 50 轮全部可追溯；成功率由冻结规则计算，S 轨不得标记为真机。

<a id="day-056"></a>

#### Day 056｜2026-09-27 星期日｜2 小时｜失败分类与 ACT 阶段门

**当天任务**

- [ ] 将失败归为视觉、初态、动作、机械、通信、安全或评测问题。
- [ ] 计算成功率置信区间、耗时和接管次数。
- [ ] 确定下一轮优先补数据还是改训练。

**所需资源：** [R17 Weights & Biases 文档](https://docs.wandb.ai/)；[R19 Hugging Face Model Cards](https://huggingface.co/docs/hub/en/model-cards)

**当天交付物：** reports/act-v1-evaluation.md

**完成验收：** 所有失败均有证据或标注“根因未知”；未达到目标也如实发布。

### 第 9 周｜SmolVLA 语言任务与微调｜2026-09-28～2026-10-04

**本周目标：** 设计真正由语言区分的多任务数据，并完成 SmolVLA 微调与初评。

**阶段门：** 模型能接收图像、状态、语言并输出动作；数据、成本和评测记录完整。

<a id="day-057"></a>

#### Day 057｜2026-09-28 星期一｜2 小时｜SmolVLA 架构与输入输出审计

**当天任务**

- [ ] 梳理视觉编码、语言、本体状态、动作专家和 flow matching。
- [ ] 分别打印 R 轨自采或 S 轨 LIBERO batch 的每个 tensor shape。
- [ ] 对照 ACT 标出共享和不同的管线。

**所需资源：** [R07 SmolVLA 官方说明](https://huggingface.co/blog/smolvla)；[R25 SmolVLA 官方微调指南](https://huggingface.co/docs/lerobot/v0.6.0/en/smolvla)；[R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)

**当天交付物：** docs/smolvla-dataflow.md

**完成验收：** 完成 15 道 shape/归一化/action chunk 自测且正确不少于 12 道；不照抄模型宣传语。

<a id="day-058"></a>

#### Day 058｜2026-09-29 星期二｜2 小时｜算力、依赖与显存冒烟

**当天任务**

- [ ] 建立独立 SmolVLA 配置和依赖快照。
- [ ] 用小 batch 做前向/反向并记录显存。
- [ ] 设置云任务最大时长与预算。

**所需资源：** [R07 SmolVLA 官方说明](https://huggingface.co/blog/smolvla)；[R09 LeRobot 算力指南](https://huggingface.co/docs/lerobot/v0.6.0/en/hardware_guide)；[R28 Hugging Face Jobs GPU 价格](https://huggingface.co/docs/hub/jobs-pricing)；H03 NVIDIA GPU 或按量云 GPU；[A04 按量 GPU 与预算告警](https://huggingface.co/docs/hub/jobs)

**机器墙钟时间：** 预计 15–30 分钟；硬上限 30 分钟；仅使用最小 batch；超过配置上限自动终止

**当天交付物：** experiments/smolvla-smoke

**完成验收：** 冒烟任务 30 分钟内完成或被自动终止；记录峰值显存、step/s，并据此填写 max_runtime 与 max_cost。

<a id="day-059"></a>

#### Day 059｜2026-09-30 星期三｜2 小时｜语言条件任务设计

**当天任务**

- [ ] 定义三种必须依靠语言区分、且动作/状态 schema 相同的取放任务。
- [ ] 每任务冻结训练指令和 10 条未见同义改写，并设计错误/含糊指令边界。
- [ ] 冻结训练与泛化评测指令集。

**所需资源：** [R07 SmolVLA 官方说明](https://huggingface.co/blog/smolvla)；[R25 SmolVLA 官方微调指南](https://huggingface.co/docs/lerobot/v0.6.0/en/smolvla)；[R18 Hugging Face Dataset Cards](https://huggingface.co/docs/hub/en/datasets-cards)；H06 标定与任务物料

**当天交付物：** dataset/language-task-spec.md

**完成验收：** 如果去掉语言，至少两种场景无法由视觉唯一决定；3×10 条测试改写与训练文本零重叠。

<a id="day-060"></a>

#### Day 060｜2026-10-01 星期四｜2 小时｜任务 B：50 个 Episode

**当天任务**

- [ ] R 轨采集任务 B 的 50 个有效 episode；S 轨从固定 LIBERO revision 选择任务 B 的 50 个兼容 episode。
- [ ] 每 10 个 episode 检查文本、图像、状态和动作一致性并生成校验和。
- [ ] 把失败/中止保留在隔离区，不用重采成功样本覆盖。

**所需资源：** [R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；[R08 LeRobot LIBERO](https://huggingface.co/docs/lerobot/v0.6.0/en/libero)；[R18 Hugging Face Dataset Cards](https://huggingface.co/docs/hub/en/datasets-cards)；H04 固定机位 RGB 摄像头；H05 独立急停与安全工作区；H06 标定与任务物料；H10 示教 / 遥操作输入源；H11 原始数据独立备份介质；[A02 Hugging Face Hub 账号](https://huggingface.co/)

**当天交付物：** dataset/multitask-v1/task-b-50 与质量报告

**完成验收：** 任务 B 恰有 50 个通过 schema/视频/时间戳检查的有效 episode；50 条任务文本逐条核对无错标。

<a id="day-061"></a>

#### Day 061｜2026-10-02 星期五｜2 小时｜任务 C：50 个 Episode

**当天任务**

- [ ] R 轨采集任务 C 的 50 个有效 episode；S 轨从固定 LIBERO revision 选择任务 C 的 50 个兼容 episode。
- [ ] 每 10 个 episode 运行质量检查并核对语言标签。
- [ ] 与 Week 7 任务 A 合并为 3×50 分层 manifest，不复制 episode。

**所需资源：** [R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；[R08 LeRobot LIBERO](https://huggingface.co/docs/lerobot/v0.6.0/en/libero)；[R18 Hugging Face Dataset Cards](https://huggingface.co/docs/hub/en/datasets-cards)；H04 固定机位 RGB 摄像头；H05 独立急停与安全工作区；H06 标定与任务物料；H10 示教 / 遥操作输入源；H11 原始数据独立备份介质；[A02 Hugging Face Hub 账号](https://huggingface.co/)

**当天交付物：** dataset/multitask-v1/task-c-50 与 150-episode manifest

**完成验收：** A/B/C 各 50 个有效 episode、总计 150 个且 ID 不重复；任务标签逐条核对，R/S 来源明确。

<a id="day-062"></a>

#### Day 062｜2026-10-03 星期六｜4 小时｜数据总审、过拟合与完整微调启动

**当天任务**

- [ ] 对 150 个 episode 做最终质量、划分和泄漏检查，并在 16-episode 子集上过拟合。
- [ ] 过拟合门通过后启动预注册配置的完整微调，保存模型、数据 revision、环境、预算和成本。
- [ ] 设置 max_runtime/max_cost/OOM 自动终止；所有重试生成新 experiment_id。

**所需资源：** [R07 SmolVLA 官方说明](https://huggingface.co/blog/smolvla)；[R25 SmolVLA 官方微调指南](https://huggingface.co/docs/lerobot/v0.6.0/en/smolvla)；[R09 LeRobot 算力指南](https://huggingface.co/docs/lerobot/v0.6.0/en/hardware_guide)；[R17 Weights & Biases 文档](https://docs.wandb.ai/)；[R28 Hugging Face Jobs GPU 价格](https://huggingface.co/docs/hub/jobs-pricing)；H03 NVIDIA GPU 或按量云 GPU；[A03 实验跟踪账号](https://wandb.ai/)；[A04 按量 GPU 与预算告警](https://huggingface.co/docs/hub/jobs)

**机器墙钟时间：** 预计 3–6 小时（随 GPU、分辨率、batch 与冻结策略变化）；硬上限 8 小时；max_cost 写入实验配置，达到上限自动终止

**当天交付物：** experiments/smolvla-v1

**完成验收：** 16-episode 子集 loss 降至初始值 20% 以下且 checkpoint round-trip 输出最大绝对差不超过 1e-5；完整任务有 8 小时硬超时和费用上限。

<a id="day-063"></a>

#### Day 063｜2026-10-04 星期日｜2 小时｜训练收尾、Checkpoint 初评与上线门

**当天任务**

- [ ] 检查训练是否在硬上限内完成；未完成则终止并保留负面结果，不无限续费。
- [ ] 完成离线输出、动作范围、语言敏感性和 checkpoint 加载检查。
- [ ] 选择 checkpoint 并冻结真机评测配置。
- [ ] 更新 R 轨真机或 S 轨仿真预检清单。

**所需资源：** [R07 SmolVLA 官方说明](https://huggingface.co/blog/smolvla)；[R24 LeRobot Policy Rollout](https://huggingface.co/docs/lerobot/v0.6.0/en/inference)；H05 独立急停与安全工作区

**当天交付物：** safety/smolvla-preflight.md

**完成验收：** checkpoint 可加载、无 NaN、所有测试动作通过守卫；R 轨另需 3 次低速预检。任一失败则阻断第 10 周自动 rollout。

### 第 10 周｜泛化评测与 ACT/SmolVLA 对比｜2026-10-05～2026-10-11

**本周目标：** 用冻结协议量化位置、语言、光照、物体和相机变化，不做只展示成功案例的 Demo。

**阶段门：** 获得可审计的基线与泛化结果表，并明确能力边界。

<a id="day-064"></a>

#### Day 064｜2026-10-05 星期一｜2 小时｜未见位置评测

**当天任务**

- [ ] 在训练集未覆盖的预定义位置运行 ACT 与 SmolVLA。
- [ ] 每模型使用相同起点和判定。
- [ ] 记录成功率、耗时和失败类型。

**所需资源：** [R24 LeRobot Policy Rollout](https://huggingface.co/docs/lerobot/v0.6.0/en/inference)；H05 独立急停与安全工作区；H06 标定与任务物料

**当天交付物：** evaluations/generalization/unseen-position.csv

**完成验收：** ACT 与 SmolVLA 各完成 10 个冻结起点 episode；20 轮均有逐轮结果和失败视频索引。

<a id="day-065"></a>

#### Day 065｜2026-10-06 星期二｜2 小时｜未见指令改写评测

**当天任务**

- [ ] 使用冻结的同义改写指令测试 SmolVLA。
- [ ] 加入错误/含糊指令的安全拒绝观察。
- [ ] 与训练措辞结果比较。

**所需资源：** [R07 SmolVLA 官方说明](https://huggingface.co/blog/smolvla)；[R24 LeRobot Policy Rollout](https://huggingface.co/docs/lerobot/v0.6.0/en/inference)；H05 独立急停与安全工作区

**当天交付物：** evaluations/generalization/paraphrase.csv

**完成验收：** SmolVLA 完成 3 个任务×10 条未见改写共 30 轮；训练文本零重叠，含糊指令单独报告而不计成功。

<a id="day-066"></a>

#### Day 066｜2026-10-07 星期三｜2 小时｜光照变化评测

**当天任务**

- [ ] 设置可重复的正常、较暗和较亮条件。
- [ ] 固定其他变量进行双模型评测。
- [ ] 记录相机曝光和环境参数。

**所需资源：** [R15 OpenCV 相机标定](https://docs.opencv.org/4.x/dc/dbb/tutorial_py_calibration.html)；[R24 LeRobot Policy Rollout](https://huggingface.co/docs/lerobot/v0.6.0/en/inference)；H04 固定机位 RGB 摄像头；H06 标定与任务物料

**当天交付物：** evaluations/generalization/lighting.csv

**完成验收：** 正常/较暗/较亮三条件下每模型各 5 轮，共 30 轮；曝光或照度设置可复现，评测中不补训练数据。

<a id="day-067"></a>

#### Day 067｜2026-10-08 星期四｜2 小时｜对象变化评测

**当天任务**

- [ ] 选择形状、颜色或材质变化的测试对象。
- [ ] 运行相同任务并记录抓取与放置阶段。
- [ ] 分析视觉泛化和机械摩擦的混淆。

**所需资源：** [R24 LeRobot Policy Rollout](https://huggingface.co/docs/lerobot/v0.6.0/en/inference)；H06 标定与任务物料

**当天交付物：** evaluations/generalization/object-shift.csv

**完成验收：** 两个冻结未见对象下每模型各 5 轮，共 20 轮；机械失败和策略失败分别标注。

<a id="day-068"></a>

#### Day 068｜2026-10-09 星期五｜2 小时｜相机轻微扰动评测

**当天任务**

- [ ] 在安全范围内设置可测量的小角度/位移扰动。
- [ ] 重新验证标定假设并运行评测。
- [ ] 评估模型对固定机位的依赖。

**所需资源：** [R15 OpenCV 相机标定](https://docs.opencv.org/4.x/dc/dbb/tutorial_py_calibration.html)；[R24 LeRobot Policy Rollout](https://huggingface.co/docs/lerobot/v0.6.0/en/inference)；H04 固定机位 RGB 摄像头

**当天交付物：** evaluations/generalization/camera-shift.csv

**完成验收：** 两个预注册扰动幅度下每模型各 5 轮，共 20 轮；位移/角度有测量记录并标注是否超出训练分布。

<a id="day-069"></a>

#### Day 069｜2026-10-10 星期六｜4 小时｜ACT 与 SmolVLA 汇总对比

**当天任务**

- [ ] 统一计算成功率、置信区间、完成时间、推理耗时和安全拦截。
- [ ] 比较单任务、语言任务和各类分布偏移。
- [ ] 生成表格与失败样本索引。

**所需资源：** [R17 Weights & Biases 文档](https://docs.wandb.ai/)；[R19 Hugging Face Model Cards](https://huggingface.co/docs/hub/en/model-cards)

**当天交付物：** reports/act-vs-smolvla.md

**完成验收：** 所有汇总数字可追溯至逐 episode 原始记录，不删除不利结果。

<a id="day-070"></a>

#### Day 070｜2026-10-11 星期日｜2 小时｜泛化阶段门与数据决策

**当天任务**

- [ ] 根据失败分布决定是否补数据、改任务或保留限制。
- [ ] 冻结进入边云实验的最佳可用模型。
- [ ] 更新简历证据账本，但仍不正式写入未发布项目。

**所需资源：** [R19 Hugging Face Model Cards](https://huggingface.co/docs/hub/en/model-cards)；[R20 GitHub Actions 文档](https://docs.github.com/en/actions)

**当天交付物：** ADR-002-policy-selection.md

**完成验收：** 选择理由包含指标、成本和风险；不以单一最好视频作结论。

### 第 11 周｜异步推理、动作队列与安全降级｜2026-10-12～2026-10-18

**本周目标：** 建立可测试的 Policy Server/Robot Client 和独立安全层；ACT 使用同步/通用异步队列，只有 flow-matching policy 才比较 RTC。

**阶段门：** 延迟、旧动作、断线和模型异常均能被测量并触发可预测的安全响应。

<a id="day-071"></a>

#### Day 071｜2026-10-12 星期一｜2 小时｜Policy Server 与 Robot Client

**当天任务**

- [ ] 按 D70 选择分支：ACT 使用同步/通用 async queue；SmolVLA 等 flow-matching policy 才启用 RTC。
- [ ] 记录 observation 请求、动作 chunk 返回和消费时序。
- [ ] 隔离推理通道与安全控制通道。

**所需资源：** [R10 LeRobot 异步推理](https://huggingface.co/docs/lerobot/v0.6.0/en/async)；[R11 LeRobot RTC](https://huggingface.co/docs/lerobot/v0.6.0/en/rtc)；[R24 LeRobot Policy Rollout](https://huggingface.co/docs/lerobot/v0.6.0/en/inference)

**当天交付物：** async/local-baseline 与时序图

**完成验收：** 局域网连续运行 30 分钟无未处理异常；停止 server 后 2 个控制周期内停止接收新动作，超时后旧动作执行数为 0。

<a id="day-072"></a>

#### Day 072｜2026-10-13 星期二｜2 小时｜端到端时延可观测性

**当天任务**

- [ ] 在采集、发送、排队、推理、接收、执行各处增加时间戳。
- [ ] 计算 P50/P95/P99 和时钟偏差。
- [ ] 建立 trace_id 关联日志。

**所需资源：** [R10 LeRobot 异步推理](https://huggingface.co/docs/lerobot/v0.6.0/en/async)；[R22 Linux tc-netem](https://man7.org/linux/man-pages/man8/tc-netem.8.html)

**当天交付物：** observability/latency_metrics.py

**完成验收：** 单个动作可追溯完整链路；指标能区分网络、排队和推理耗时。

<a id="day-073"></a>

#### Day 073｜2026-10-14 星期三｜2 小时｜动作年龄与队列水位

**当天任务**

- [ ] 记录动作生成时间、消费时间、队列水位和欠载。
- [ ] 实现 stale action 丢弃与最小/最大队列阈值。
- [ ] 通过人工延迟验证。

**所需资源：** [R10 LeRobot 异步推理](https://huggingface.co/docs/lerobot/v0.6.0/en/async)；[R11 LeRobot RTC](https://huggingface.co/docs/lerobot/v0.6.0/en/rtc)

**当天交付物：** safety/action_queue_guard.py

**完成验收：** 超过阈值的旧动作不会执行；每次丢弃都有原因和计数。

<a id="day-074"></a>

#### Day 074｜2026-10-15 星期四｜2 小时｜限位、看门狗与状态机

**当天任务**

- [ ] 将软限位、步长、速度、心跳和状态新鲜度统一进安全状态机。
- [ ] 定义 SAFE_IDLE、READY、RUNNING、FAULT、ESTOP。
- [ ] 覆盖非法状态转换。

**所需资源：** H05 独立急停与安全工作区；[R20 GitHub Actions 文档](https://docs.github.com/en/actions)

**当天交付物：** safety/supervisor_state_machine.py

**完成验收：** 所有危险状态只能进入 FAULT/ESTOP；复位需要显式操作且不能跳过标定。

<a id="day-075"></a>

#### Day 075｜2026-10-16 星期五｜2 小时｜断线与恢复策略

**当天任务**

- [ ] 分别模拟相机、机器人、Policy Server 和网络断开。
- [ ] 定义停止、保持、安全姿态与重连行为。
- [ ] 测量检测和恢复时间。

**所需资源：** [R10 LeRobot 异步推理](https://huggingface.co/docs/lerobot/v0.6.0/en/async)；[R22 Linux tc-netem](https://man7.org/linux/man-pages/man8/tc-netem.8.html)；H05 独立急停与安全工作区

**当天交付物：** tests/fault_disconnect_matrix.md

**完成验收：** 四类断线均不会消费旧动作；恢复必须通过健康检查和人工确认。

<a id="day-076"></a>

#### Day 076｜2026-10-17 星期六｜4 小时｜R 物理急停 / S 软件安全状态机

**当天任务**

- [ ] 实现策略控制到人工控制的明确交接。
- [ ] R 轨验证物理急停不依赖 Policy Server 或网络；S 轨验证 mock 的 ESTOP/FAULT 不依赖推理进程，并声明不能证明物理安全。
- [ ] R 轨演练接管、急停、断电和复位；S 轨演练接管、ESTOP、进程终止和显式复位。

**所需资源：** H05 独立急停与安全工作区；H01 同学的机械臂与厂商 SDK

**当天交付物：** safety/takeover-estop-test.md

**完成验收：** R 轨由测试人员按单页规程完成独立物理急停且系统只记录不控制急停；S 轨四类状态转换测试全部通过，并在结论中明确“未验证物理急停”。

<a id="day-077"></a>

#### Day 077｜2026-10-18 星期日｜2 小时｜故障注入阶段验收

**当天任务**

- [ ] 自动注入延迟、丢包、旧动作、NaN、超界和 server 崩溃。
- [ ] 统计检测率、误报和响应时延。
- [ ] 修复未覆盖路径。

**所需资源：** [R22 Linux tc-netem](https://man7.org/linux/man-pages/man8/tc-netem.8.html)；[R20 GitHub Actions 文档](https://docs.github.com/en/actions)；H05 独立急停与安全工作区

**当天交付物：** reports/safety-fault-injection-v1.md

**完成验收：** 预注册危险故障检测率 100%；未达标则禁止真实 4G 自动控制。

### 第 12 周｜4G 弱网与边云协同实验｜2026-10-19～2026-10-25

**本周目标：** 量化弱网对 VLA 动作队列和任务的影响，证明安全控制留在本地。

**阶段门：** 局域网、netem 与真实 4G 三组结果可复现，结论不超出样本。

<a id="day-078"></a>

#### Day 078｜2026-10-19 星期一｜2 小时｜边云责任边界

**当天任务**

- [ ] 定义本地执行/安全、边缘采集、云端训练/推理和平台管理边界。
- [ ] 建立数据流、控制流和故障域图。
- [ ] 明确 4G 不承载无保护硬实时闭环；R 轨标出独立物理急停，S 轨标出 mock 安全状态机及其物理验证缺口。

**所需资源：** [R10 LeRobot 异步推理](https://huggingface.co/docs/lerobot/v0.6.0/en/async)；H05 独立急停与安全工作区；H07 4G 网络与可控网络环境

**当天交付物：** docs/edge-cloud-architecture.md

**完成验收：** 断云后 R 轨的物理急停、安全限位和停止逻辑仍有效；S 轨的 mock 限位与停止逻辑仍有效，且架构图明确物理急停尚未验证。

<a id="day-079"></a>

#### Day 079｜2026-10-20 星期二｜2 小时｜MQTT 遥测与消息模型

**当天任务**

- [ ] 设计设备、任务、网络、队列、安全和模型版本遥测 topic。
- [ ] 配置 QoS、保留、过期和幂等规则。
- [ ] 实现本地缓存与断线重传的非控制数据。

**所需资源：** [R30 OASIS MQTT 5.0 规范](https://docs.oasis-open.org/mqtt/mqtt/v5.0/mqtt-v5.0.html)；H07 4G 网络与可控网络环境

**当天交付物：** platform/telemetry-schema.md 与 publisher

**完成验收：** 重复和乱序消息不破坏状态；控制命令不与普通遥测混用。

<a id="day-080"></a>

#### Day 080｜2026-10-21 星期三｜2 小时｜日志、指标与实验记录

**当天任务**

- [ ] 统一 trace、episode、model、dataset、network_profile ID。
- [ ] 记录 RTT、抖动、丢包、推理、动作年龄、队列和成功率。
- [ ] 实现实验结束自动汇总。

**所需资源：** [R17 Weights & Biases 文档](https://docs.wandb.ai/)；[R20 GitHub Actions 文档](https://docs.github.com/en/actions)

**当天交付物：** observability/experiment_reporter

**完成验收：** 任一结果行可定位模型、数据、网络配置和原始日志。

<a id="day-081"></a>

#### Day 081｜2026-10-22 星期四｜2 小时｜模型与数据版本 API

**当天任务**

- [ ] 建立只读模型/数据集清单和兼容性检查。
- [ ] 禁止 feature、关节顺序或归一化不兼容模型上线。
- [ ] 记录部署与回滚事件。

**所需资源：** [R18 Hugging Face Dataset Cards](https://huggingface.co/docs/hub/en/datasets-cards)；[R19 Hugging Face Model Cards](https://huggingface.co/docs/hub/en/model-cards)；[R26 LeRobot Adding a Policy](https://huggingface.co/docs/lerobot/v0.6.0/en/bring_your_own_policies)

**当天交付物：** platform/registry-api 与兼容性测试

**完成验收：** 不兼容模型被部署前阻断；回滚不覆盖历史证据。

<a id="day-082"></a>

#### Day 082｜2026-10-23 星期五｜2 小时｜netem 网络矩阵

**当天任务**

- [ ] 定义延迟、抖动、丢包、乱序和带宽组合。
- [ ] 自动应用/清理 netem，保存实际测量。
- [ ] 在无真机或低速安全条件下跑预实验。

**所需资源：** [R22 Linux tc-netem](https://man7.org/linux/man-pages/man8/tc-netem.8.html)；H07 4G 网络与可控网络环境；H05 独立急停与安全工作区

**当天交付物：** network/profiles.yaml 与运行脚本

**完成验收：** 每个 profile 可重复应用且退出后完全恢复；实测参数进入报告。

<a id="day-083"></a>

#### Day 083｜2026-10-24 星期六｜4 小时｜局域网、弱网与真实 4G 对比

**当天任务**

- [ ] 按冻结协议运行三类网络条件。
- [ ] 记录任务成功、完成时间、P95 时延、欠载、旧动作和安全拦截。
- [ ] R 轨在真实 4G 环境保持人工看护与独立急停；S 轨让 mock/replay 经过相同网络链路并明确不做物理安全声明。

**所需资源：** [R10 LeRobot 异步推理](https://huggingface.co/docs/lerobot/v0.6.0/en/async)；[R11 LeRobot RTC](https://huggingface.co/docs/lerobot/v0.6.0/en/rtc)；[R22 Linux tc-netem](https://man7.org/linux/man-pages/man8/tc-netem.8.html)；H05 独立急停与安全工作区；H07 4G 网络与可控网络环境

**当天交付物：** evaluations/network-v1/results.csv

**完成验收：** 三类条件使用同一模型和任务；每轮原始日志、网络测量和视频可追溯；结果列明确 R-real 或 S-simulation，禁止混合汇总。

<a id="day-084"></a>

#### Day 084｜2026-10-25 星期日｜2 小时｜弱网结论与安全阶段门

**当天任务**

- [ ] 计算指标和置信区间，分析动作队列阈值。
- [ ] 明确哪些网络条件只允许遥测、哪些可低速实验。
- [ ] 形成边云安全限制声明。

**所需资源：** [R19 Hugging Face Model Cards](https://huggingface.co/docs/hub/en/model-cards)；H05 独立急停与安全工作区

**当天交付物：** reports/network-and-safety-v1.md

**完成验收：** 报告不宣称 4G 是硬实时控制；所有建议都由测量或安全原则支持。

### 第 13 周｜实验平台、Web 面板与 Flutter HMI｜2026-10-26～2026-11-01

**本周目标：** 把既有 IoT/全栈优势转化为机器人数据、实验、告警和人工接管平台。

**阶段门：** 设备到平台、实验到证据、告警到接管的端到端链路可演示。

<a id="day-085"></a>

#### Day 085｜2026-10-26 星期一｜2 小时｜实验注册表后端

**当天任务**

- [ ] 用 Go 或 Python 实现设备、数据、模型、实验和评测元数据 API。
- [ ] 采用不可变实验记录和显式状态转换。
- [ ] 增加输入校验和最小权限。

**所需资源：** [R20 GitHub Actions 文档](https://docs.github.com/en/actions)；[R21 Docker 文档](https://docs.docker.com/)

**当天交付物：** platform/api 与 OpenAPI 文档

**完成验收：** 实验记录不可被静默改写；错误输入和未授权请求有测试。

<a id="day-086"></a>

#### Day 086｜2026-10-27 星期二｜2 小时｜Web 实验与健康面板

**当天任务**

- [ ] 展示设备健康、网络、动作队列、模型版本和任务结果。
- [ ] 支持按 experiment_id 定位日志和视频。
- [ ] 显式区分实时值、延迟值和离线统计。

**所需资源：** [R20 GitHub Actions 文档](https://docs.github.com/en/actions)

**当天交付物：** platform/web-dashboard

**完成验收：** 超过 2 个预期遥测周期即显示 STALE；断网、过期、FAULT 三类快照测试全部标红且不显示“实时正常”。

<a id="day-087"></a>

#### Day 087｜2026-10-28 星期三｜2 小时｜Flutter 移动 HMI

**当天任务**

- [ ] 复用现有 Flutter 能力实现状态查看、采集控制和人工接管入口。
- [ ] 高风险动作要求二次确认并受服务端状态机约束。
- [ ] 离线时只读并提示过期。

**所需资源：** [R31 OWASP MASVS 移动端安全标准](https://mas.owasp.org/MASVS/)；H07 4G 网络与可控网络环境

**当天交付物：** apps/edgevla_hmi 最小版本

**完成验收：** 覆盖离线、三种角色、二次确认、服务端拒绝共不少于 12 个测试；所有非法场景的动作请求数为 0。

<a id="day-088"></a>

#### Day 088｜2026-10-29 星期四｜2 小时｜视频、日志与轨迹同步

**当天任务**

- [ ] 在面板中对齐 episode 视频、状态、动作和网络事件。
- [ ] 支持跳转失败时间点。
- [ ] 用同一时钟基准展示误差。

**所需资源：** [R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；[R20 GitHub Actions 文档](https://docs.github.com/en/actions)

**当天交付物：** platform/timeline-viewer

**完成验收：** 从失败结果一键定位到对应视频帧、动作、日志和网络事件。

<a id="day-089"></a>

#### Day 089｜2026-10-30 星期五｜2 小时｜失败标注与数据闭环

**当天任务**

- [ ] 增加失败类别、严重度、根因置信度和处理建议。
- [ ] 从评测选择待补采场景，不直接修改原始数据。
- [ ] 导出下一轮采集清单。

**所需资源：** [R18 Hugging Face Dataset Cards](https://huggingface.co/docs/hub/en/datasets-cards)；[R20 GitHub Actions 文档](https://docs.github.com/en/actions)

**当天交付物：** platform/failure-review 与采集清单

**完成验收：** 标注有审计记录；新数据与原评测测试集隔离。

<a id="day-090"></a>

#### Day 090｜2026-10-31 星期六｜4 小时｜认证、配置与安全审查

**当天任务**

- [ ] 区分观察者、操作者和管理员权限。
- [ ] 将密钥、设备配置和模型配置外置。
- [ ] 审查上传、日志隐私和远程控制入口。

**所需资源：** [R20 GitHub Actions 文档](https://docs.github.com/en/actions)；[R21 Docker 文档](https://docs.docker.com/)

**当天交付物：** platform/security-review.md

**完成验收：** 无默认弱密码、硬编码密钥或匿名控制接口；高风险操作均可审计。

<a id="day-091"></a>

#### Day 091｜2026-11-01 星期日｜2 小时｜平台端到端阶段门

**当天任务**

- [ ] 演练采集、训练登记、部署、评测、失败标注和告警。
- [ ] 模拟设备和网络断开。
- [ ] 录制未经剪辑的端到端演示。

**所需资源：** [R20 GitHub Actions 文档](https://docs.github.com/en/actions)；H07 4G 网络与可控网络环境

**当天交付物：** week-13-e2e-report.md 与原始演示视频

**完成验收：** 采集、登记、部署、评测、标注、告警六条主链路及设备/网络两条故障链路共 8 项全部通过；平台停止后本地安全状态机测试仍通过。

### 第 14 周｜容器化、测试、CI 与可靠性｜2026-11-02～2026-11-08

**本周目标：** 把实验代码提升为可复现、可测试、可恢复的工程作品。

**阶段门：** 新环境一键运行核心链路，CI 绿色，完成压力和恢复记录。

<a id="day-092"></a>

#### Day 092｜2026-11-02 星期一｜2 小时｜容器与依赖分层

**当天任务**

- [ ] 为 CPU 工具、GPU 训练和平台服务分别设计镜像。
- [ ] 固定基础镜像与依赖哈希。
- [ ] 排除数据、权重和设备私有 SDK。

**所需资源：** [R21 Docker 文档](https://docs.docker.com/)；[R20 GitHub Actions 文档](https://docs.github.com/en/actions)

**当天交付物：** containers/ 与 compose.yaml

**完成验收：** CPU 镜像可在无 GPU 环境运行测试；镜像不含隐私数据或许可证不明文件。

<a id="day-093"></a>

#### Day 093｜2026-11-03 星期二｜2 小时｜配置、密钥与环境校验

**当天任务**

- [ ] 建立分层配置和 schema 校验。
- [ ] 增加启动前硬件、端口、模型和数据兼容性检查。
- [ ] 提供安全示例配置。

**所需资源：** [R20 GitHub Actions 文档](https://docs.github.com/en/actions)；[R21 Docker 文档](https://docs.docker.com/)

**当天交付物：** config schema 与 preflight 命令

**完成验收：** 缺失密钥、错误关节数、错误模型或危险参数均在运动前失败。

<a id="day-094"></a>

#### Day 094｜2026-11-04 星期三｜2 小时｜单元测试补齐

**当天任务**

- [ ] 覆盖 Python 与 C++ 的接口映射、归一化、时间戳、动作限幅、状态机和报告统计。
- [ ] 加入边界值和性质测试。
- [ ] 设置覆盖率基线但不以覆盖率代替场景测试。

**所需资源：** [R20 GitHub Actions 文档](https://docs.github.com/en/actions)；[R34 C++ Core Guidelines](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines)；[R35 CMake 官方教程](https://cmake.org/cmake/help/latest/guide/tutorial/)

**当天交付物：** unit test suite 与覆盖率报告

**完成验收：** 所有安全关键分支有直接测试；测试不依赖真实机械臂。

<a id="day-095"></a>

#### Day 095｜2026-11-05 星期四｜2 小时｜R 硬件在环 / S 模拟集成测试

**当天任务**

- [ ] R 轨建立 mock、回放和低速真机三层测试；S 轨建立 mock、回放和仿真设备三层测试，不称为硬件在环。
- [ ] 覆盖启动、运行、断线、恢复和急停。
- [ ] 仅为 R 轨真实硬件测试设置显式 opt-in；S 轨默认测试不得探测或驱动物理设备。

**所需资源：** [R20 GitHub Actions 文档](https://docs.github.com/en/actions)；H05 独立急停与安全工作区

**当天交付物：** integration test matrix

**完成验收：** 默认 CI 不驱动真机；R 轨人工真机套件有安全清单和记录，S 轨三层测试全部标记 simulation/mock 且无 HIL 声称。

<a id="day-096"></a>

#### Day 096｜2026-11-06 星期五｜2 小时｜GitHub Actions CI

**当天任务**

- [ ] 配置 lint、typecheck、unit、dataset fixture、容器构建和文档链接检查。
- [ ] 固定 action 版本和最小权限。
- [ ] 生成可下载测试产物。

**所需资源：** [R20 GitHub Actions 文档](https://docs.github.com/en/actions)；[R21 Docker 文档](https://docs.docker.com/)

**当天交付物：** .github/workflows/ci.yml

**完成验收：** 全新 commit 的 CI 全绿；失败能定位具体阶段且无密钥泄漏。

<a id="day-097"></a>

#### Day 097｜2026-11-07 星期六｜4 小时｜性能分析与瓶颈

**当天任务**

- [ ] 测量采集、编码、网络、推理、动作消费、平台写入的 CPU/GPU/内存。
- [ ] 识别一个真实瓶颈并优化。
- [ ] 保留优化前后相同负载数据。

**所需资源：** [R17 Weights & Biases 文档](https://docs.wandb.ai/)；[R21 Docker 文档](https://docs.docker.com/)

**当天交付物：** reports/performance-v1.md

**完成验收：** 优化结论由同一基准支持，不用不同配置制造提升。

<a id="day-098"></a>

#### Day 098｜2026-11-08 星期日｜2 小时｜长稳与恢复验收

**当天任务**

- [ ] 运行至少 2 小时采集/回放或安全的闭环 soak test。
- [ ] 期间注入网络中断和服务重启。
- [ ] 检查内存、句柄、队列、数据完整性和恢复时间。

**所需资源：** [R20 GitHub Actions 文档](https://docs.github.com/en/actions)；[R22 Linux tc-netem](https://man7.org/linux/man-pages/man8/tc-netem.8.html)；H05 独立急停与安全工作区

**机器墙钟时间：** 预计 2 小时；硬上限 2.5 小时；使用本地或已批准资源，不开启无人看护真机运动

**当天交付物：** reports/soak-and-recovery.md

**完成验收：** 2 小时测试中，30 分钟预热后 RSS 增长不超过 10%、句柄/文件描述符净增不超过 5、全部数据校验和一致；故障与恢复均有时间戳。

### 第 15 周｜开源发布、数据/模型卡与上游贡献｜2026-11-09～2026-11-15

**本周目标：** 形成招聘方能够审查、复现和质疑的公开证据，而不泄露厂商或个人隐私。

**阶段门：** 公开候选版本通过许可、安全、复现和内容审查，至少产生一个真实上游互动。

<a id="day-099"></a>

#### Day 099｜2026-11-09 星期一｜2 小时｜README 与快速开始

**当天任务**

- [ ] 说明问题、架构、状态、硬件、安装、仿真和真机安全。
- [ ] 区分上游项目与 EdgeVLA Lab 自研模块。
- [ ] 提供 30 分钟内可运行的无硬件路径。

**所需资源：** [R01 LeRobot v0.6.0 官方仓库](https://github.com/huggingface/lerobot/tree/v0.6.0)；[R20 GitHub Actions 文档](https://docs.github.com/en/actions)；[R21 Docker 文档](https://docs.docker.com/)；A06 独立评审者

**当天交付物：** README.md 候选版

**完成验收：** 在干净容器中仅按 README，30 分钟内完成 mock/回放且命令退出码为 0；全文检索无把 EdgeVLA Lab 写成官方项目的表述。

<a id="day-100"></a>

#### Day 100｜2026-11-10 星期二｜2 小时｜架构与威胁边界图

**当天任务**

- [ ] 绘制设备、相机、安全层、Policy Server、平台和 HMI。
- [ ] 标注实时/非实时、信任边界和故障域。
- [ ] 链接对应代码和测试。

**所需资源：** [R10 LeRobot 异步推理](https://huggingface.co/docs/lerobot/v0.6.0/en/async)；H05 独立急停与安全工作区

**当天交付物：** docs/architecture.md

**完成验收：** 每个关键组件有责任、输入输出和失败响应，不存在“云端急停”误导。

<a id="day-101"></a>

#### Day 101｜2026-11-11 星期三｜2 小时｜Dataset Card 定稿

**当天任务**

- [ ] 补充采集协议、分布、质量指标、划分、许可、隐私和限制。
- [ ] 增加已知失败和不适用用途。
- [ ] 执行发布包去隐私检查。

**所需资源：** [R18 Hugging Face Dataset Cards](https://huggingface.co/docs/hub/en/datasets-cards)；[R04 LeRobotDataset v3](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)；[A02 Hugging Face Hub 账号](https://huggingface.co/)

**当天交付物：** 公开 DATASET_CARD.md 与 manifest

**完成验收：** 数据来源和许可可证明；无面部、手机号、密钥或厂商私有内容。

<a id="day-102"></a>

#### Day 102｜2026-11-12 星期四｜2 小时｜Model Card 与评测证据

**当天任务**

- [ ] 记录模型基座、数据版本、训练配置、算力、指标和限制。
- [ ] 链接逐 episode 结果与失败视频。
- [ ] 明确不能用于无人看护或安全关键控制。

**所需资源：** [R19 Hugging Face Model Cards](https://huggingface.co/docs/hub/en/model-cards)；[R17 Weights & Biases 文档](https://docs.wandb.ai/)；[R26 LeRobot Adding a Policy](https://huggingface.co/docs/lerobot/v0.6.0/en/bring_your_own_policies)；[A02 Hugging Face Hub 账号](https://huggingface.co/)

**当天交付物：** MODEL_CARD_ACT.md 与 MODEL_CARD_SMOLVLA.md

**完成验收：** 每个数字可追溯；未完成或失败实验不会被省略。

<a id="day-103"></a>

#### Day 103｜2026-11-13 星期五｜2 小时｜成功与失败演示视频

**当天任务**

- [ ] 制作 3–5 分钟技术演示，包含架构、数据、训练、真机、弱网与安全。
- [ ] 保留至少一个典型失败和恢复过程。
- [ ] 为全部画面去除隐私与密钥。

**所需资源：** [R18 Hugging Face Dataset Cards](https://huggingface.co/docs/hub/en/datasets-cards)；[R19 Hugging Face Model Cards](https://huggingface.co/docs/hub/en/model-cards)

**当天交付物：** demo/video-v1 与旁白稿

**完成验收：** 视频中的指标与报告一致，不用剪辑掩盖评测轮次或危险行为。

<a id="day-104"></a>

#### Day 104｜2026-11-14 星期六｜4 小时｜上游 Issue 或 PR

**当天任务**

- [ ] 从真实使用中选择文档、测试、硬件插件或异步指标问题。
- [ ] 先检索重复 issue，再提交最小复现和解决方案。
- [ ] 遵守 LeRobot 贡献规范并响应 review。

**所需资源：** [R01 LeRobot v0.6.0 官方仓库](https://github.com/huggingface/lerobot/tree/v0.6.0)；[R05 LeRobot 自定义硬件](https://huggingface.co/docs/lerobot/v0.6.0/en/integrate_hardware)；[R20 GitHub Actions 文档](https://docs.github.com/en/actions)；[R27 LeRobot 贡献指南](https://huggingface.co/docs/lerobot/main/en/contributing)；[A01 GitHub 账号与独立仓库](https://github.com/)

**当天交付物：** 至少一个公开 issue 或 PR 链接

**完成验收：** 互动基于真实问题且可复现；不以无意义格式改动凑贡献。

<a id="day-105"></a>

#### Day 105｜2026-11-15 星期日｜2 小时｜开源、安全与发布阶段门

**当天任务**

- [ ] 检查许可证、依赖、密钥、隐私、模型与数据使用条件。
- [ ] 由同学确认厂商/机械臂相关公开边界。
- [ ] R 轨门槛全过创建 v1.0.0-rc；否则创建 v0.x simulation/data-tooling rc 或延期。

**所需资源：** [R20 GitHub Actions 文档](https://docs.github.com/en/actions)；[R21 Docker 文档](https://docs.docker.com/)；H01 同学的机械臂与厂商 SDK；[A01 GitHub 账号与独立仓库](https://github.com/)；A05 机械臂所有者授权与使用排期

**当天交付物：** release-checklist.md 与条件化 release candidate

**完成验收：** 复现、安全、许可、隐私四项均签字/记录；任何未决高风险项阻止公开。

### 第 16 周｜岗位转换、简历证据与正式发布｜2026-11-16～2026-11-22

**本周目标：** 把真实项目证据映射到 100 个岗位，形成可投递材料和后续迭代路线。

**阶段门：** 按 R/S 实际范围条件发布、简历只写已验证事实、完成首批高匹配岗位申请。

<a id="day-106"></a>

#### Day 106｜2026-11-16 星期一｜2 小时｜可写入简历的指标审计

**当天任务**

- [ ] 从实验产物提取 episode、成功率、P95 时延、恢复和安全指标。
- [ ] 逐项链接证据并标注样本和条件。
- [ ] 删除无法证明的数字和“熟练”表述。

**所需资源：** [R18 Hugging Face Dataset Cards](https://huggingface.co/docs/hub/en/datasets-cards)；[R19 Hugging Face Model Cards](https://huggingface.co/docs/hub/en/model-cards)

**当天交付物：** career/resume-evidence-v1.csv

**完成验收：** 每个简历要点都有公开或可提供的证据路径，无提前虚构成果。

<a id="day-107"></a>

#### Day 107｜2026-11-17 星期二｜2 小时｜GitHub 与作品集页面

**当天任务**

- [ ] 优化仓库简介、topic、README 首屏和导航。
- [ ] 在个人作品集中加入架构、责任、结果、限制和链接。
- [ ] 保留“拟建”到“已发布”的状态变更记录。

**所需资源：** [R20 GitHub Actions 文档](https://docs.github.com/en/actions)；A06 独立评审者

**当天交付物：** 公开项目页与作品集草稿

**完成验收：** 两名未参与项目者各浏览首页 60 秒后，能正确回答问题、个人贡献、一个真实指标、限制、复现入口 5 问中的至少 4 问。

<a id="day-108"></a>

#### Day 108｜2026-11-18 星期三｜2 小时｜三类定向简历

**当天任务**

- [ ] 生成机器人软件/系统、数据闭环/部署、VLA 应用工程三类版本。
- [ ] 按岗位高频栈排序，不改事实。
- [ ] 将核心研究岗列为后续目标而非当前主投。

**所需资源：** [R20 GitHub Actions 文档](https://docs.github.com/en/actions)

**当天交付物：** career/resume-robot-system.md、resume-data-deploy.md、resume-vla-application.md

**完成验收：** 三个版本事实一致、侧重点不同；不声称论文、BSP、CAN 或伺服项目经验。

<a id="day-109"></a>

#### Day 109｜2026-11-19 星期四｜2 小时｜项目面试故事与技术深挖

**当天任务**

- [ ] 准备架构、数据、模型、安全、弱网、失败和取舍七段 STAR/技术故事。
- [ ] 整理 tensor shape、归一化、chunk、时延和断线追问。
- [ ] 准备诚实回答个人与同学分工。

**所需资源：** [R06 LeRobot ACT 策略文档](https://huggingface.co/docs/lerobot/v0.6.0/en/act)；[R07 SmolVLA 官方说明](https://huggingface.co/blog/smolvla)；[R10 LeRobot 异步推理](https://huggingface.co/docs/lerobot/v0.6.0/en/async)

**当天交付物：** career/interview-story-bank.md

**完成验收：** 能在 2 分钟概述并在 20 分钟深挖；所有回答可指向代码或数据。

<a id="day-110"></a>

#### Day 110｜2026-11-20 星期五｜2 小时｜模拟面试与缺口修正

**当天任务**

- [ ] 完成一次 C++/Linux/ROS2 和一次 PyTorch/VLA/系统设计模拟面试。
- [ ] 将不会的问题分为概念、实践和证据缺口。
- [ ] 只修正高频且与目标岗位相关的前三项。

**所需资源：** [R12 ROS 2 官方文档](https://docs.ros.org/en/jazzy/index.html)；[R14 PyTorch Tutorials](https://docs.pytorch.org/tutorials/)

**当天交付物：** career/mock-interview-review.md

**完成验收：** 两次面试均有录音/评分；前三缺口各有具体练习或修复提交。

<a id="day-111"></a>

#### Day 111｜2026-11-21 星期六｜4 小时｜100 岗位分层与首批申请

**当天任务**

- [ ] 按硬门槛、技能重合、地点和兴趣给 100 岗位打分。
- [ ] 优先选择 P0 机器人系统/数据部署及少量 P1 VLA 应用岗位。
- [ ] 完成 10–15 个高匹配定向申请并记录版本。

**所需资源：** [R20 GitHub Actions 文档](https://docs.github.com/en/actions)

**当天交付物：** career/application-tracker.csv

**完成验收：** 每个申请有岗位快照、匹配理由、简历版本和跟进日期；不盲投博士研究岗。

<a id="day-112"></a>

#### Day 112｜2026-11-22 星期日｜2 小时｜条件发布与 90 天迭代

**当天任务**

- [ ] 完成最终复现、安全、许可和链接检查。
- [ ] R 轨全部门通过才发布 v1.0.0；否则发布 v0.x simulation/data-tooling 版或延期。
- [ ] 复盘 112 天，依据申请反馈制定下一轮 90 天计划。

**所需资源：** [R20 GitHub Actions 文档](https://docs.github.com/en/actions)；[R21 Docker 文档](https://docs.docker.com/)；[A01 GitHub 账号与独立仓库](https://github.com/)；[A02 Hugging Face Hub 账号](https://huggingface.co/)

**当天交付物：** 条件化 release、retrospective.md 与 next-90-days.md

**完成验收：** 所发布范围可从干净环境复现；Git 工作区干净；版本号、简历和 R/S 公开证据一致。

## 里程碑与简历开放条件

| 里程碑 | 最早时间 | 必须具备的证据 | 简历可写范围 |
|---|---|---|---|
| M0 环境与仿真 | 第 4 周 | 固定版本、数据检查、ACT 仿真训练与评测 | 只能写“正在系统学习/仿真实践”，不写真机项目 |
| M1 真机数据 | 第 7 周 | 获准硬件适配、物理急停、50 个有效 episode、Dataset Card | 可写“机械臂数据采集工具开发中”，不得写 VLA 成果 |
| M2 ACT 基线 | 第 8 周 | checkpoint、冻结评测、20 次逐轮真机记录和失败报告 | 可写真实 ACT 基线及样本数，数字必须带条件 |
| M3 VLA 与泛化 | 第 10 周 | SmolVLA 微调、语言任务、位置/指令/光照等泛化评测 | 可写 VLA 微调和评测，但不得称基础模型研究 |
| M4 边云与安全 | 第 12 周 | 异步队列、旧动作处理、故障注入、局域网/netem/真实 4G 对比 | 可写弱网与安全工程结果，不宣称 4G 硬实时 |
| M5 条件开源 | 第 16 周 | R 轨门全过发布 v1.0.0；否则发布 v0.x simulation/data-tooling 或延期，并完成 CI、复现、许可与隐私审查 | 只能按实际发布范围进入简历，S 轨不得写真机成果 |

## 偏航处理

- 同学机械臂不可持续使用：继续 mock/仿真，并在第 5 周采购门后决定 SO-101；不要临时把他人项目包装成自己的。
- GPU 不足：先用 ACT 和小数据验证，再租按量 GPU；每个任务设置最长时长和成本上限。
- SDK 不允许开源：只公开通用接口、mock、测试和经授权的薄适配示例，不提交厂商源码或协议材料。
- 真机安全门不通过：停止自动控制，只做回放、数据工具和仿真；安全不因进度而降级。
- SmolVLA 结果不佳：如实保留负面结果，从数据覆盖、归一化、同步、任务设计和模型基线逐项排查。
- 求职压力增加：P0 岗位继续投递；本计划是能力升级路线，不要求暂停现有求职。
