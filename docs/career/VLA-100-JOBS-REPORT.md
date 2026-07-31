# VLA / 机器人岗位 100 样本与技术栈报告

> 快照日期：2026-07-31。样本共 100 个唯一岗位，其中中国大陆 70 个、国际技术对标 30 个。招聘页面会更新或下线，本报告不是永久有效的职位库存。

## 先看结论

- 当前最合理定位：**机器人软件 / 具身智能应用工程师（数据闭环、VLA 工程化、边云协同与安全控制）**。
- 近期主投：机器人 Linux 应用、机器人软件/系统集成、数据采集与质量工具、测试评测、边缘/现场部署、IoT+机器人平台。
- 完成第 8–12 周真实里程碑后：扩大到 LeRobot 数据工具、机器人学习工程、VLA 推理部署与具身应用工程。
- VLA/世界模型核心研究岗通常叠加硕博、PyTorch、IL/RL、论文或真机算法部署门槛，应作为中长期方向，不宜现在替代主要求职路线。
- 100 条中的 30 条国际样本用于观察成熟数据闭环和部署能力，不直接等同于当前可投岗位。
- 国际岗位还存在工作许可、所在地、英语和资历硬门槛；未确认资格前只作技术对标，不进入直接投递池。

## 样本口径

| 样本组 | 数量 | 用途 |
|---|---:|---|
| 国内·机器人系统工程 | 35 | 识别当前最可迁移的 ROS2、Linux/C++、系统集成、真机调试与边缘部署岗位。 |
| 国内·VLA/具身算法 | 35 | 观察核心算法、世界模型、强化学习与真机部署的能力上限和学历门槛。 |
| 国际·数据与部署对标 | 30 | 使用企业官方岗位对标机器人数据闭环、评测、VLA Infra、Jetson 与端云平台成熟能力。 |

核验规则：

- 每条记录保留公司、职位、城市、学历、经验、原始技术栈、要求摘要、个人匹配说明和公开来源。
- 以公司 + 职位 + 城市做规范化去重，生成器会拒绝少于 100 个唯一岗位。
- 未登录或自动化操作 BOSS 直聘；优先官方招聘页和官方 ATS。
- 三个分片是采样桶而非互斥语义分类；例如“系统”样本也可能包含 SLAM、规划控制或 VLA 岗。
- “未注明”严格表示页面未写，未自行推断。
- 技术词频按“提到该技能的岗位数”统计；同一岗位同一技能只计一次。

## 高频技术栈

| 排名 | 规范化技术栈 | 全部岗位 | 中国大陆（70） | 国际对标（30） |
|---:|---|---:|---:|---:|
| 1 | Python | 59（59%） | 45 | 14 |
| 2 | C++ | 51（51%） | 49 | 2 |
| 3 | Linux/Ubuntu | 39（39%） | 31 | 8 |
| 4 | ROS 生态 | 32（32%） | 28 | 4 |
| 5 | ROS 2 | 25（25%） | 23 | 2 |
| 6 | 深度学习 | 24（24%） | 21 | 3 |
| 7 | C | 24（24%） | 24 | 0 |
| 8 | 强化学习/RL | 22（22%） | 21 | 1 |
| 9 | PyTorch | 20（20%） | 17 | 3 |
| 10 | 相机/传感器/标定 | 19（19%） | 13 | 6 |
| 11 | 机器人仿真 | 17（17%） | 17 | 0 |
| 12 | 运动控制 | 16（16%） | 16 | 0 |
| 13 | 模仿学习/IL | 15（15%） | 14 | 1 |
| 14 | VLM/多模态模型 | 14（14%） | 11 | 3 |
| 15 | VLA 族 | 13（13%） | 11 | 2 |
| 16 | 运动规划 | 12（12%） | 12 | 0 |
| 17 | 边缘推理 | 11（11%） | 8 | 3 |
| 18 | 数据采集 | 11（11%） | 3 | 8 |
| 19 | IPC/网络编程 | 11（11%） | 10 | 1 |
| 20 | Isaac | 11（11%） | 11 | 0 |
| 21 | 机器人真机/系统集成 | 10（10%） | 8 | 2 |
| 22 | 嵌入式/MCU/RTOS | 10（10%） | 8 | 2 |
| 23 | 数据管线/ETL | 10（10%） | 2 | 8 |
| 24 | CUDA/GPU | 10（10%） | 7 | 3 |
| 25 | MuJoCo | 10（10%） | 10 | 0 |
| 26 | CAN | 8（8%） | 7 | 1 |
| 27 | Gazebo/Webots/PyBullet | 8（8%） | 8 | 0 |
| 28 | LLM/Agent | 8（8%） | 6 | 2 |
| 29 | MPC | 8（8%） | 8 | 0 |
| 30 | EtherCAT | 7（7%） | 7 | 0 |
| 31 | PID | 7（7%） | 7 | 0 |
| 32 | RTOS/实时系统 | 7（7%） | 7 | 0 |
| 33 | 机器人数据格式 | 6（6%） | 2 | 4 |
| 34 | 计算机视觉 | 6（6%） | 6 | 0 |
| 35 | 云平台/对象存储 | 6（6%） | 0 | 6 |
| 36 | Diffusion/Flow Policy | 6（6%） | 6 | 0 |
| 37 | Git/CI/CD | 6（6%） | 4 | 2 |
| 38 | SQL/数据库 | 6（6%） | 1 | 5 |
| 39 | 遥操作/Teleop | 5（5%） | 0 | 5 |
| 40 | Docker/容器 | 5（5%） | 2 | 3 |

> 说明：规范化只用于“显式提及次数”统计，不是硬性要求率。例如 ROS2 同时计入“ROS 生态”和“ROS 2”；VLM/WAM 不会自动计入 VLA；匹配使用词边界，避免把 VLAN 误算成 VLA、把 TensorRT 尾部误算成 RRT。原始 `tech_stack` 完整保留在 JSON/CSV 中。

### 规范化覆盖率

| 原始技术词出现次数 | 已映射 | 未映射 | 覆盖率 |
|---:|---:|---:|---:|
| 1000 | 617 | 383 | 61.7% |

未映射高频词（保留而非静默丢弃）：

- 多线程：6
- ARM：4
- DDS：4
- GDB：3
- IMU：3
- PLC：3
- Shell：3
- 伺服控制：2
- 机器人决策系统：2
- 模型评测：2
- 目标跟踪：2
- 目标检测：2
- 三维重建：2
- 数据闭环：2
- 数据标注：2
- 四足机器人：2
- 位姿估计：2
- 自动化测试：2
- AI Coding：2
- Apollo：2
- Bash：2
- Caffe：2
- DSP：2
- FSM：2
- MATLAB：2
- MATLAB/Simulink：2
- MDP：2
- PLCopen：2
- POMDP：2
- Profinet：2

`C/C++`、`ROS/ROS2`、`PyTorch/JAX` 等复合项在“提及统计”中可以分别命中，但资格判断必须回到原文，按 any-of 而不是 all-of 处理。

## 国内岗位城市分布

| 城市 | 岗位数 |
|---|---:|
| 杭州 | 26 |
| 上海 | 20 |
| 北京 | 18 |
| 北京/上海 | 1 |
| 不限 | 1 |
| 青岛 | 1 |
| 苏州 | 1 |
| 天津 | 1 |
| 西安 | 1 |

## 学历、经验与用工类型

学历原始口径（前 15 项）：

| 页面原文 | 岗位数 |
|---|---:|
| 未注明 | 39 |
| 硕士及以上 | 18 |
| 本科及以上 | 16 |
| 本科 | 2 |
| 博士或优秀硕士优先 | 2 |
| 硕士 | 2 |
| 硕士及以上，博士优先 | 2 |
| 硕士及以上，特别优秀者可放宽至本科 | 2 |
| 本科大三及以上或硕士在读 | 1 |
| 本科高年级、硕士或博士在读 | 1 |
| 本科或硕士（或同等经验） | 1 |
| 本科或硕士（计算机、机器人、工程或相关专业） | 1 |
| 本科或硕士（计算机、机器人或相关专业） | 1 |
| 本科或研究生在读 | 1 |
| 工程、计算机或相关专业本科 | 1 |

用工类型：

| 类型 | 岗位数 |
|---|---:|
| 全职 | 65 |
| 未注明 | 19 |
| 实习 | 11 |
| 合同制 | 2 |
| 校招全职 | 2 |
| 60天临时岗位 | 1 |

经验要求原文差异很大，完整值保留在逐岗位表和 CSV；不要把“年限未注明”理解为不要求真实项目。

### 硬门槛初筛

| 初筛项 | 岗位数 | 使用方式 |
|---|---:|---|
| 学历未注明 | 39 | 只能标为 unknown，不能当作无学历要求 |
| 严格硕士门槛（启发式） | 25 | 本科学历候选人默认过滤，除非原文明确可放宽 |
| 在读／实习／校招条件（启发式） | 13 | 2022 届社会招聘候选人需逐条核验学籍与毕业年份 |
| 5 年及以上资历（启发式） | 15 | 与现有 3+ 年经历比较，不能只按技能重合投递 |
| 国际工作许可人工检查 | 30 | 默认只做技术对标，确认签证/地点/语言后才可投 |

硬门槛不能直接从 `tech_stack` 推断。筛选顺序应为：学历/学籍 → 经验年限 → 真实机器人或算法领域证据 → 工作许可/地点 → 技能重合度。带“优先、加分、可放宽”的内容只作为偏好或条件门槛。

## 与周金鑫现有经历的匹配

### 已有可直接迁移的证据

- C、Embedded Linux、FreeRTOS/RT-Thread/LWIP 与 MCU/模组联调
- TCP/UDP、MQTT、RS485、Modbus、USB、BLE/SPP、4G 与异常恢复
- Linux 4G 网关、设备接入、端边云链路和长期运行问题治理
- Go/Vue/TypeScript/Flutter/Java/Python、SQLite/MySQL 与跨端交付
- Git、Docker、Wireshark、GDB、QEMU、FFmpeg 与现场问题定位

### 有基础但必须补证据

- C → 现代 C++：具备系统基础，但缺少 STL、RAII、CMake、并发与机器人生产项目证据
- Python 应用 → PyTorch 工程：有语言基础，没有模型训练、调参与评测闭环
- IoT 遥测、日志和媒体任务 → 机器人数据管线：缺图像—状态—动作同步与机器人数据格式
- Linux/QEMU/早期内核移植 → BSP/驱动：有基础但不能替代量产 BSP 或内核驱动证据
- GPS、电表、红外/雷达协议接入 → 传感器集成：不等于底层驱动或多传感器融合
- 异常恢复与长期运行治理 → 机器人安全：不等于功能安全、关节限位或独立急停
- Dify/RAG/API 与 AI 协作开发 → AI 应用：不等于 VLA 模型训练或算法研究
- Docker 与平台部署 → CI/CD、Kubernetes、MLOps：需补 GPU 任务、模型和数据版本治理
- 音视频同步经验 → 相机—状态—动作时间同步：概念可迁移，尚无机器人数据验证

### 主要缺口

- 现代 C++ 机器人生产代码、CMake 与并发/内存工程证据
- ROS2、tf2、URDF、rosbag2/MCAP、MoveIt 2 与机器人系统诊断
- PyTorch、Transformer、行为克隆、ACT、SmolVLA、IL/RL 与训练评测
- 机械臂运动学/动力学、控制频率、相机标定、多模态时间同步
- LeRobot 真机适配、真实数据集、模型微调、泛化评测和安全控制
- CUDA/TensorRT/ONNX/Jetson 等推理优化与边缘部署
- CAN/CANopen、EtherCAT、伺服电机控制与硬件在环
- HDF5/Parquet/RLDS/WebDataset、Kubernetes/SLURM 与分布式训练

### 简历不得提前声称

- 职业级现代 C++、CMake 或机器人 C++ 平台经验
- CAN 总线项目经验或 CAN 电机开发经验
- 伺服电机控制项目经验
- 底层传感器驱动开发经验
- Ubuntu/ARM BSP、Linux 内核驱动或量产 BSP 能力
- ROS2、机械臂运动控制、LeRobot 或 VLA 已完成项目经验
- VLA 算法研究、基础模型预训练或论文级研究成果
- 把设备指令/场景编排等同于机械臂运动控制，或把 QEMU 等同于机器人仿真

## 分阶段求职策略

| 阶段 | 时间 | 主投方向 | 进入条件 |
|---|---|---|---|
| P0 | 现在 | 机器人 Linux 应用、系统集成、设备/边缘通信、数据采集平台、测试/现场部署、智能硬件全栈 | 用现有 4G 网关、IoT 平台、Flutter 和长期稳定性证据投递 |
| P1 | 3–6 个月作品或专项补证后 | LeRobot 数据工具、机器人数据闭环、VLA 推理部署、具身系统、Agent 应用，以及与既有嵌入式基础相邻的专项岗位 | EdgeVLA 用于机器人系统/数据岗；Agent、驱动、CAN/伺服、BSP 等岗位还要分别补对口实证，不能由一个作品自动覆盖 |
| P2 | 6–12 个月后 | VLA/世界模型/强化学习算法工程 | 扎实 PyTorch、IL/RL、泛化评测、真实上游贡献；硕博硬门槛岗位仍需谨慎 |

### 100 岗位初筛结果

| 初筛阶段 | 岗位数 | 含义 |
|---|---:|---|
| P2 中长期 | 36 | 算法/学历/研究门槛高，作为 6–12 个月能力上限。 |
| 国际技术对标 | 30 | 默认只用于技术栈对标，工作许可等资格另行确认。 |
| 条件过滤 | 17 | 学籍、校招、资历或其他条件可能不符，先过滤再谈技能。 |
| P1 作品/专项补证后 | 12 | 按岗位补 ROS2/LeRobot、机器人数据、Agent、现代 C++ 或驱动/总线等对口实证。 |
| P0 近期核验 | 5 | 优先重新打开原页，核验学历、年限和具体机器人/C++门槛后定向投递。 |

这是一套透明的启发式初筛，不代表招聘方决定；每条仍需结合原始 JD 和 `fit_note` 人工复核。

### P0 近期核验候选池

| ID | 公司 | 职位 | 城市 | 原始要求与个人判断 | 来源 |
|---|---|---|---|---|---|
| J020 | 宇树科技 | 机器人数据运营工程师 | 杭州 | 设备联调、网络通信、故障定位、流程文档和平台经验匹配度较高，是进入具身行业的现实切入口；需补充机器人数据格式、时序同步、标注质检和LeRobotDataset实践。 | [公开页](https://www.unitree.com/cn/position/2060189838933491712/) |
| J040 | 天津小橙集团有限公司 | 数据平台工程师 | 北京 | 是很现实的转型方向：数据库、物联网平台、设备数据链路和工程交付可直接迁移；需用EdgeVLA项目补齐LeRobot、ROS2/rosbag2、时间同步与数据集版本治理。 | [公开页](https://career.nankai.edu.cn/correcruit/content/id/116186.html) |
| J041 | 天津小橙集团有限公司 | 前端 / 嵌入式交互工程师 | 北京 | 当前匹配度较高：Vue、Flutter、嵌入式和设备端联调可形成组合优势；主要补项是ROS2、Qt/QML、语音链路和机器人可视化工具。 | [公开页](https://career.nankai.edu.cn/correcruit/content/id/116185.html) |
| J046 | 海康机器人 | Linux软件开发工程师 | 杭州 | 当前匹配度较高：嵌入式Linux应用、网络通信和现场联调可直接迁移；需强化现代C++、IPC、实时Linux与EtherCAT实践。 | [公开页](https://talent.hikvision.com/home/socity/position?postId=B5364D0B030C22EAF7AB6C4E5116EC17) |
| J048 | 海康机器人 | 嵌入式软件开发工程师（AGV） | 杭州 | 现有MCU/RTOS、Linux通信、设备管理和现场交付经验较匹配；补充ROS2/AGV基础与工业相机接入可提升竞争力。 | [公开页](https://talent.hikvision.com/home/socity/position?postId=FA94C95524B488D2A90D7B4328B38752) |

## 100 个岗位明细

| ID | 初筛 | 样本 | 公司 | 职位 | 城市 | 学历 | 经验 | 规范化技术栈（节选） | 个人匹配判断 | 来源 |
|---|---|---|---|---|---|---|---|---|---|---|
| J001 | P2 中长期 | 国内·VLA/具身算法 | 上海人工智能实验室 | 移动操作算法工程师 | 上海 | 硕士及以上 | 要求移动机器人真机开发、部署或系统集成经验；年限未注明 | Python、C++、Linux/Ubuntu、ROS 生态、ROS 2、VLA 族、模仿学习/IL、World Model、Diffusion/Flow Policy、SLAM/定位导航 | 嵌入式Linux、通信链路、跨端联调和复杂故障定位可迁移到真机工程化；主要缺口是ROS2、机械臂/移动机器人真机、运动规划和VLA部署证据，完成LeRobot真机闭环后再重点投递。 | [公开页](https://www.shlab.org.cn/joinus/detail/7659996225454950719?mode=social) |
| J002 | P2 中长期 | 国内·VLA/具身算法 | 上海人工智能实验室 | 具身智能算法工程师 | 上海 | 硕士及以上 | 2年及以上 | Python、C++、ROS 生态、ROS 2、VLA 族、VLM/多模态模型、强化学习/RL、RTOS/实时系统、机器人仿真、Isaac | RTOS、嵌入式开发和软硬件协同调试与现有经历高度相关，是算法岗位中较好的桥接目标；但需补齐ROS2、PyTorch/强化学习和至少一个可量化的机械臂真机项目。 | [公开页](https://www.shlab.org.cn/joinus/detail/7617693362335025418?mode=social) |
| J003 | P2 中长期 | 国内·VLA/具身算法 | 上海人工智能实验室 | 机器人算法工程师 | 上海 | 硕士及以上，博士优先 | 要求至少将一种RL策略部署到真实腿足机器人；年限未注明 | Python、C++、Linux/Ubuntu、ROS 生态、ROS 2、强化学习/RL、运动控制、MPC、WBC、RTOS/实时系统 | 已有C、Linux和实时系统基础可迁移至岗位的C++要求，但现代C++仍需补证；该岗算法与学历门槛高，当前缺少动力学、RL框架、MuJoCo/Isaac及腿足真机部署，不宜作为第一阶段主投岗位。 | [公开页](https://www.shlab.org.cn/joinus/detail/7651889731673000238?mode=social) |
| J004 | P1 作品/专项补证后 | 国内·VLA/具身算法 | 上海人工智能实验室 | 具身智能系统工程师 | 上海 | 本科及以上 | 相关方向实习/工作经历优先；年限未注明 | Python、ROS 生态、深度学习、PyTorch、VLM/多模态模型、CUDA/GPU、机器人真机/系统集成、数据采集 | 系统架构、设备接入、数据链路、平台开发和工程交付与候选人优势最接近；需要用LeRobot数据管线、PyTorch训练、ROS2适配和真机评测项目补足机器人专属证据。 | [公开页](https://www.shlab.org.cn/joinus/detail/7654035482623789375?mode=social) |
| J005 | 条件过滤 | 国内·VLA/具身算法 | 上海人工智能实验室 | 具身智能操作算法实习生 | 上海 | 硕士及以上在读 | 未注明 | Python、深度学习、PyTorch、VLM/多模态模型、模仿学习/IL、World Model、机器人真机/系统集成 | 学习内容与目标项目高度一致，但在读学历条件可能构成硬门槛；可把其技术栈作为开源项目验收清单，而不是当前主要投递目标。 | [公开页](https://www.shlab.org.cn/joinus/detail/7578761568268994859?keyword=%E5%85%B7%E8%BA%AB%E6%99%BA%E8%83%BD&location=CT_125&mode=campus) |
| J006 | P2 中长期 | 国内·VLA/具身算法 | 上海人工智能实验室 | 人形机器人移动操作算法工程师 | 上海 | 博士或优秀硕士优先 | 要求真实机器人算法部署、数据采集或实验经验；年限未注明 | Python、C++、Linux/Ubuntu、ROS 生态、ROS 2、深度学习、PyTorch、VLA 族、强化学习/RL、模仿学习/IL | 属于中长期冲刺岗位。现有系统工程能力可支撑数据与部署环节，但需显著补强机器人动力学、PyTorch、VLA/RL训练、仿真和真实机械臂/人形平台经验。 | [公开页](https://www.shlab.org.cn/joinus/detail/7651886032015395122?mode=social) |
| J007 | P1 作品/专项补证后 | 国内·VLA/具身算法 | 上海人工智能实验室 | 多智能体平台算法工程师 | 上海 | 未注明 | 要求Agent框架实际落地经验；年限未注明 | LLM/Agent | 设备平台、通信、任务编排和AI Agent开发经历具有较强迁移价值，是候选人比纯VLA研究岗更现实的交叉方向；仍需用机器人设备接入和真实Agent编排案例证明能力。 | [公开页](https://www.shlab.org.cn/joinus/detail/7659997654215264563?mode=social) |
| J008 | P2 中长期 | 国内·VLA/具身算法 | 上海人工智能实验室 | 机器人运控算法工程师 | 上海 | 硕士及以上 | 要求机器人真机实验与控制方案落地经验；年限未注明 | Python、C++、C、强化学习/RL、运动规划、运动控制、MPC、PID、机器人真机/系统集成 | 已有C、嵌入式联调和设备控制经验可迁移至岗位的C++要求，但现代C++仍需补证；当前缺少控制理论深度、路径规划与机器人真机闭环，需通过机械臂控制和仿真实验建立可量化证据。 | [公开页](https://www.shlab.org.cn/joinus/detail/7649605753204279590?mode=social) |
| J009 | P2 中长期 | 国内·VLA/具身算法 | 上海人工智能实验室 | 世界模型训练与真机部署研究员/工程师 | 上海 | 硕士及以上 | 未注明 | Python、深度学习、PyTorch、JAX、VLA 族、VLM/多模态模型、强化学习/RL、模仿学习/IL、World Model、Transformer | 数据闭环、C/Linux系统集成和硬件异常定位可迁移至岗位的C++工程要求，但现代C++仍需补证；核心仍是模型训练，需先完成可复现的ACT/SmolVLA训练、数据集卡和真机失败分析。 | [公开页](https://www.shlab.org.cn/joinus/detail/7659334795419748658?mode=social) |
| J010 | 条件过滤 | 国内·VLA/具身算法 | 上海人工智能实验室 | 物理智能世界模型训练与真机部署实习生 | 上海 | 本科高年级、硕士或博士在读 | 可长期实习者优先；年限未注明 | Python、C++、深度学习、PyTorch、JAX、VLA 族、VLM/多模态模型、强化学习/RL、模仿学习/IL、World Model | 这是很完整的学习路线参照，但在读条件可能不匹配；可逐项复现其公开技术栈，用项目成果申请工程型岗位而非直接对标研究实习。 | [公开页](https://www.shlab.org.cn/joinus/detail/7641101415998540083?jobFunction=&jobType=&keyword=&location=&mode=campus&subject=7527241317794023716) |
| J011 | P2 中长期 | 国内·VLA/具身算法 | 上海人工智能实验室 | 灵巧手精细操作算法青年研究员 | 上海 | 博士或优秀硕士优先 | 要求真实机器人算法部署、数据采集或实验经验；年限未注明 | Python、C++、Linux/Ubuntu、ROS 生态、ROS 2、深度学习、PyTorch、VLA 族、强化学习/RL、模仿学习/IL | 研究与真机门槛都很高，当前不适合作为主投；可将安全控制、手眼标定、触力反馈和失败恢复纳入开源项目二期，为以后转向灵巧操作积累证据。 | [公开页](https://www.shlab.org.cn/joinus/detail/7651885904365914377?mode=social) |
| J012 | 条件过滤 | 国内·VLA/具身算法 | 上海人工智能实验室 | 机器人操作算法实习生（VLA/World-Action Model方向） | 上海 | 本科或研究生在读 | 要求稳定线下实习6个月及以上 | Python、深度学习、PyTorch、VLA 族、LeRobot、强化学习/RL、模仿学习/IL、CUDA/GPU、机器人仿真、Isaac | 岗位要求直接验证了LeRobot项目路线的市场价值，但在读与6个月线下实习是硬约束；应把该JD作为每日学习计划和项目验收的核心参照。 | [公开页](https://www.shlab.org.cn/joinus/detail/7650345340306278698?mode=campus) |
| J013 | P2 中长期 | 国内·VLA/具身算法 | 海康机器人 | VLA算法工程师 | 杭州 | 硕士及以上 | 未注明 | Python、C++、C、深度学习、计算机视觉、相机/传感器/标定 | 传感器应用、C和设备联调可迁移至岗位的C++要求，但现代C++尚无项目证据；该岗本质偏视觉算法，需补齐PyTorch视觉训练、位姿估计/点云和真实相机标定部署，且硕士门槛需留意。 | [公开页](https://talent.hikvision.com/home/socity/position?postId=DD28F5DD9578EBE6FD66AE4AB978A35E) |
| J014 | P2 中长期 | 国内·VLA/具身算法 | 海康机器人 | 算法工程师-智能控制 | 杭州 | 硕士及以上 | 未注明 | Python、C++、C、强化学习/RL、模仿学习/IL、运动学/动力学、Sim-to-Real/仿真 | 嵌入式控制、实时通信和联调经验有一定关联；主要短板是控制理论、机器人建模、RL/IL训练和实物机械臂部署，完成项目后仍属进阶岗位。 | [公开页](https://talent.hikvision.com/home/socity/position?postId=05B62984F3CBD9D7EBCACFD3FD6C9CF4) |
| J015 | P2 中长期 | 国内·VLA/具身算法 | 海康机器人 | 算法工程师-决策控制 | 杭州 | 硕士及以上 | 未注明 | Python、C++、C、LLM/Agent、强化学习/RL、Diffusion/Flow Policy、运动学/动力学、运动控制、MPC、PID | 平台调度和设备状态机经验可转化为决策系统叙事，但缺少机器人规划、动力学和深度学习决策项目；适合作为LeRobot项目加入高层任务规划后的进阶目标。 | [公开页](https://talent.hikvision.com/home/socity/position?postId=6086F9DFD8FA9B80EDDFC9A67F9929DA) |
| J016 | P2 中长期 | 国内·VLA/具身算法 | 海康机器人 | 算法工程师-机器视觉AI | 杭州 | 硕士及以上 | 机器视觉AI算法开发或项目应用经验优先；年限未注明 | C++、C、深度学习、PyTorch、计算机视觉 | 工程落地和C基础可迁移至岗位的C++要求，但现代C++尚需补证，且简历缺少计算机视觉训练与部署成果；若不单独补做视觉数据集、模型训练和ONNX/TensorRT部署，不建议主投。 | [公开页](https://talent.hikvision.com/home/socity/position?postId=5F698F261BD197F6D6AD4DE3AF2C5285) |
| J017 | P2 中长期 | 国内·VLA/具身算法 | 海康机器人 | 算法工程师-高性能计算 | 杭州 | 硕士及以上 | 未注明 | Python、C++、C、深度学习、CUDA/GPU、边缘推理 | ARM、C、Embedded Linux和边缘设备经历是明显连接点，可迁移至岗位的C++要求但仍需现代C++实证；这是VLA研究岗之外值得发展的部署方向，另需补充ONNX/TensorRT、量化和可复现性能基准。 | [公开页](https://talent.hikvision.com/home/socity/position?postId=890459DF585C28C8EE11AEA07891F836) |
| J018 | P2 中长期 | 国内·VLA/具身算法 | 海康威视研究院 | AI算法工程师 | 杭州 | 硕士及以上，博士优先 | 要求计算机视觉研究经验；年限未注明 | Python、C++、C、深度学习、PyTorch、强化学习/RL、计算机视觉 | 与候选人当前工程型画像距离较大，且学历与科研要求较高；可用于理解视觉算法岗位通用要求，不建议作为近期主投。 | [公开页](https://talent.hikvision.com/home/socity/position?postId=C8EB9BBE17400810B63B8409D1F54CD5) |
| J019 | P2 中长期 | 国内·VLA/具身算法 | 萤石网络 | 系统工程师-机器人 | 杭州 | 硕士及以上 | 3年以上机器人相关项目经验者优先 | Python、C++、ROS 生态、强化学习/RL、运动规划、运动学/动力学、运动控制、MPC、PID、机器人仿真 | 系统联调和软硬件协作契合现有能力，但机器人项目年限、ROS、建模与运动控制是关键缺口；可优先寻找同类但更偏系统集成/应用软件的岗位。 | [公开页](https://talent.hikvision.com/home/socity/position?postId=19BD4F809283D4541A6A804A88FD5039) |
| J020 | P0 近期核验 | 国内·VLA/具身算法 | 宇树科技 | 机器人数据运营工程师 | 杭州 | 未注明 | 未注明 | 数据采集、网络/MQTT | 设备联调、网络通信、故障定位、流程文档和平台经验匹配度较高，是进入具身行业的现实切入口；需补充机器人数据格式、时序同步、标注质检和LeRobotDataset实践。 | [公开页](https://www.unitree.com/cn/position/2060189838933491712/) |
| J021 | P1 作品/专项补证后 | 国内·VLA/具身算法 | 宇树科技 | 具身智能软件工程师 | 杭州 | 未注明 | 未注明 | 边缘推理、Jetson、机器人真机/系统集成、数据采集 | 这是与嵌入式Linux、边缘设备、状态机、异常恢复、通信和端云平台能力最匹配的目标之一；补齐ROS2、Jetson模型部署和LeRobot真机数据闭环后可重点投递。 | [公开页](https://www.unitree.com/cn/position/2047604504966201344/) |
| J022 | P1 作品/专项补证后 | 国内·VLA/具身算法 | 宇树科技 | 数据管线工程师 | 杭州 | 未注明 | 未注明 | 视频/FFmpeg | 全栈平台、设备数据接入、日志与存储经验可直接迁移，属于较现实的具身数据工程方向；需补足Python数据工程、对象存储/列式格式、时序对齐和规模化基准。 | [公开页](https://www.unitree.com/cn/position/2046858311420084224/) |
| J023 | P2 中长期 | 国内·VLA/具身算法 | 宇树科技 | AI Infra工程师 | 杭州 | 未注明 | 未注明 | VLM/多模态模型、CUDA/GPU、边缘推理 | 工程与部署思维相关，但当前缺少GPU集群、分布式训练和模型编译经验；应先从单机模型部署与性能剖析做起，不宜直接作为近期主投。 | [公开页](https://www.unitree.com/cn/position/2046857577249112064/) |
| J024 | P1 作品/专项补证后 | 国内·VLA/具身算法 | 宇树科技 | 具身数据评估工程师 | 杭州 | 未注明 | 未注明 | VLM/多模态模型 | 测试验证、问题闭环、日志分析和数据平台经验可转化，但需要具身数据统计、离线评测、失败类型学和模型指标关联实践。 | [公开页](https://www.unitree.com/cn/position/2046858623123980288/) |
| J025 | P2 中长期 | 国内·VLA/具身算法 | 宇树科技 | 深度强化学习算法工程师 | 杭州 | 未注明 | 未注明 | 强化学习/RL、机器人真机/系统集成 | 与当前经历差距较大，必须具备RL训练、机器人仿真和足式真机结果；可作为长期方向观察，不应因掌握LeRobot基础就直接投递。 | [公开页](https://www.unitree.com/cn/position/1692018892890701824/) |
| J026 | P2 中长期 | 国内·VLA/具身算法 | 宇树科技 | 机器人运动控制算法工程师 | 杭州 | 未注明 | 未注明 | C++、C、运动控制 | 已有C、SDK、嵌入式调试和生产测试经验具有连接点，可迁移至岗位的C++要求但现代C++仍需补证；同时需补齐足式运动学动力学和控制算法，若以机械臂项目切入，更适合先投机器人软件/系统集成岗位。 | [公开页](https://www.unitree.com/cn/position/1526050171207548928/) |
| J027 | P2 中长期 | 国内·VLA/具身算法 | 宇树科技 | AI算法工程师（大模型） | 杭州 | 未注明 | 未注明 | VLM/多模态模型、LLM/Agent、Transformer、机器人真机/系统集成 | AI辅助开发和应用集成不足以满足预训练算法岗；需有PyTorch、多卡训练、VLA微调、消融实验与真机指标，属于中长期而非当前主投方向。 | [公开页](https://www.unitree.com/cn/position/1692021510983647232/) |
| J028 | P2 中长期 | 国内·VLA/具身算法 | 宇树科技 | 激光SLAM算法工程师 | 杭州 | 未注明 | 未注明 | 相机/传感器/标定、SLAM/定位导航 | 有传感器应用和设备联调基础，但缺少SLAM数学、点云、标定和融合定位项目；若选择此方向需另开完整导航项目，不能仅靠VLA项目覆盖。 | [公开页](https://www.unitree.com/cn/position/1569900302872608768/) |
| J029 | P2 中长期 | 国内·VLA/具身算法 | 越伴动力 | 运控算法工程师 | 北京 | 硕士及以上 | 要求深度参与人形机器人Sim-to-Real全流程；年限未注明 | Python、C++、C、Linux/Ubuntu、强化学习/RL、机器人仿真、Isaac、MuJoCo、Sim-to-Real/仿真 | 已有C和Linux基础可迁移至岗位的C++要求，但现代C++仍需补证；该岗要求人形运控与Sim-to-Real深度经验，当前不匹配，建议把它作为12个月以上学习路线的上限参照。 | [公开页](https://luvbotics.com/careers/locomotion-engineer/) |
| J030 | 条件过滤 | 国内·VLA/具身算法 | 越伴动力 | 运控算法实习生 | 北京 | 硕士及以上 | 要求强化学习项目和人形机器人核心功能研发经历；年限未注明 | Python、C++、C、Linux/Ubuntu、深度学习、PyTorch、强化学习/RL、模仿学习/IL、机器人仿真、Isaac | 技术栈可作为学习清单，但硕士学历和人形机器人经验可能是硬门槛；先做机械臂操作学习，再决定是否追加足式运控路线。 | [公开页](https://luvbotics.com/careers/locomotion-engineer-intern/) |
| J031 | P1 作品/专项补证后 | 国内·VLA/具身算法 | 越伴动力 | AI算法工程师-Agentic AI方向 | 北京 | 硕士及以上，特别优秀者可放宽至本科 | 要求大模型项目、复杂Agent架构或大模型微调经验；年限未注明 | Python、深度学习、PyTorch、LLM/Agent | 候选人的AI开发效率、端云平台和设备控制经验具备差异化，是AI+机器人交叉岗位中较现实的目标；需公开一个可评测的多Agent机器人任务编排项目，而非只描述使用AI编码。 | [公开页](https://luvbotics.com/careers/ai-algorithm-engineer/) |
| J032 | 条件过滤 | 国内·VLA/具身算法 | 越伴动力 | AI算法工程师实习生-Agentic AI方向 | 北京 | 硕士及以上，特别优秀者可放宽至本科 | 要求大模型项目、复杂Agent架构或大模型微调经验；年限未注明 | Python、深度学习、PyTorch、LLM/Agent | 本科可放宽使其比多数研究实习更接近，但仍需确认个人是否满足实习身份；技术上应补齐Python/PyTorch微调与具身任务Agent评测。 | [公开页](https://luvbotics.com/careers/ai-algorithm-engineer-intern/) |
| J033 | P2 中长期 | 国内·VLA/具身算法 | 越伴动力 | 机器人音频感知算法工程师 | 北京 | 本科及以上 | 未注明 | Python、C++、深度学习、PyTorch、边缘推理、Jetson | 边缘平台、音视频工具和C工程经验提供部分关联，可迁移至岗位的C++要求但现代C++仍需补证；同时缺少麦克风阵列与DSP算法项目，除非对音频感知有明确兴趣，否则不应分散VLA主线。 | [公开页](https://luvbotics.com/careers/robot-audio-perception-algorithm-engineer/) |
| J034 | P2 中长期 | 国内·VLA/具身算法 | 海尔智家 | 具身VLA算法工程师 | 北京 | 本科及以上 | 3年以上 | Python、C++、C、ROS 生态、深度学习、VLM/多模态模型、LLM/Agent、强化学习/RL、模仿学习/IL、计算机视觉 | 本科门槛和工程化取向相对友好，已有C、设备联调与交付经验可迁移至岗位的C++要求，但现代C++仍需补证；还需PyTorch、ROS2、VLA/IL真机成果和清晰实验指标，项目完成后再评估。 | [公开页](https://maker.haier.net/client/job/detail/id/10223432/recommend_record/1) |
| J035 | P2 中长期 | 国内·VLA/具身算法 | 海尔智家 | 具身视觉算法工程师 | 青岛 | 本科及以上 | 3年以上 | Python、C++、Linux/Ubuntu、ROS 生态、ROS 2、深度学习、PyTorch、TensorRT、ONNX、边缘推理 | Linux、传感器与系统联调基础可迁移，但现代C++尚无项目证据；本科门槛相对现实，仍需补做相机/点云、PyTorch视觉模型、ONNX/TensorRT与ROS2整机联调项目。 | [公开页](https://maker.haier.net/client/mobile/socialdetail/id/10223814) |
| J036 | P2 中长期 | 国内·机器人系统工程 | 上海人工智能实验室 | 软件工程师/Web端开发工程师 | 上海 | 硕士及以上 | 未注明；具身智能、自动驾驶可视化或机器人/无人机调度平台经验优先 | Python、C++、ROS 生态、ROS 2、Git/CI/CD、gRPC/服务通信、IPC/网络编程 | 方向高度匹配：Go、Vue/TypeScript、Flutter、设备通信与物联网平台经历可直接迁移；需补ROS2、Three.js/WebGL、WebRTC实证，且硕士学历门槛需要关注。 | [公开页](https://www.shlab.org.cn/joinus/detail/7649605553270950185?mode=social) |
| J037 | 条件过滤 | 国内·机器人系统工程 | 上海人工智能实验室 | 机器人操作算法（VLA / World-Action Model 真机部署方向）实习生 | 上海 | 在读本科生或研究生 | 可稳定实习6个月及以上；要求丰富的真机部署与系统优化经验 | Python、ROS 生态、ROS 2、深度学习、PyTorch、VLA 族、LeRobot、CUDA/GPU、TensorRT、ONNX | 方向高度契合拟做的LeRobot开源项目；设备通信和系统联调是优势，需补ROS2、PyTorch、LeRobot、VLA复现及机械臂真机成果。 | [公开页](https://www.shlab.org.cn/joinus/detail/7658104547239823657?mode=campus&subject=7619221867426433326) |
| J038 | 条件过滤 | 国内·机器人系统工程 | 北京原力灵机智能科技有限公司 | 机器人系统开发实习生 | 北京 | 本科大三及以上或硕士在读 | 未注明；机械臂或移动机器人项目经验优先 | Python、C++、Linux/Ubuntu、ROS 生态、ROS 2、相机/传感器/标定、运动控制 | 设备通信、协议联调、测试工具和系统交付经验可迁移；需补ROS2和机械臂实践，同时在读身份是实际投递限制，更适合作为项目能力标杆。 | [公开页](https://career.nankai.edu.cn/correcruit/content/id/115086.html) |
| J039 | P2 中长期 | 国内·机器人系统工程 | 赛博格机器人 | SLAM算法工程师 | 不限 | 硕士及以上 | 2026届校招；人形、四足或轮足机器人SLAM经验优先 | C++、Linux/Ubuntu、ROS 生态、ROS 2、相机/传感器/标定、SLAM/定位导航、嵌入式/MCU/RTOS | 嵌入式部署和多设备联调能力可迁移，但硕士与2026届校招限制、SLAM算法、融合定位和标定经验都是硬缺口，适合作为长期能力标杆。 | [公开页](https://career.cuhk.edu.cn/job/view/id/468865) |
| J040 | P0 近期核验 | 国内·机器人系统工程 | 天津小橙集团有限公司 | 数据平台工程师 | 北京 | 本科及以上 | 未注明；具身智能或机器人数据集构建经验优先 | Python、Linux/Ubuntu、ROS 生态、ROS 2、LeRobot、相机/传感器/标定、机器人仿真、Isaac、Gazebo/Webots/PyBullet、数据管线/ETL | 是很现实的转型方向：数据库、物联网平台、设备数据链路和工程交付可直接迁移；需用EdgeVLA项目补齐LeRobot、ROS2/rosbag2、时间同步与数据集版本治理。 | [公开页](https://career.nankai.edu.cn/correcruit/content/id/116186.html) |
| J041 | P0 近期核验 | 国内·机器人系统工程 | 天津小橙集团有限公司 | 前端 / 嵌入式交互工程师 | 北京 | 本科及以上 | 未注明；医疗、养老或陪伴类交互产品经验优先 | C++、Linux/Ubuntu、ROS 生态、ROS 2、机器人仿真、Gazebo/Webots/PyBullet | 当前匹配度较高：Vue、Flutter、嵌入式和设备端联调可形成组合优势；主要补项是ROS2、Qt/QML、语音链路和机器人可视化工具。 | [公开页](https://career.nankai.edu.cn/correcruit/content/id/116185.html) |
| J042 | P1 作品/专项补证后 | 国内·机器人系统工程 | 海康机器人 | 软件开发工程师 | 杭州 | 本科及以上 | 2年及以上C++和Python软件开发经验 | Python、C++、C、Linux/Ubuntu、ROS 生态、ROS 2、计算机视觉、相机/传感器/标定、机器人仿真、Gazebo/Webots/PyBullet | 属于较现实目标：C/Linux、串口和网络通信、红外/雷达应用、跨端软件与项目交付均可迁移；需强化现代C++、GDB/CMake、ROS2与机器人仿真项目。 | [公开页](https://talent.hikvision.com/home/socity/position?postId=A0EA0DB52FA4429C62644E92AB5B2D8A) |
| J043 | P1 作品/专项补证后 | 国内·机器人系统工程 | 上海人工智能实验室 | 嵌入式软件工程师 | 上海 | 硕士及以上（特别优秀者可放宽至本科） | 要求机器人、机器狗、无人机、智能设备或AI硬件相关经验，年限未注明 | C++、C、ROS 生态、ROS 2、相机/传感器/标定、运动控制、嵌入式/MCU/RTOS | 已有C、ARM、RTOS和通信联调经验可迁移至岗位的C++要求，但现代C++仍需补证；还需补Board Bring-up、驱动、ROS2、传感器融合和FOC实证。 | [公开页](https://www.shlab.org.cn/joinus/detail/7649604717500893481?mode=social) |
| J044 | P1 作品/专项补证后 | 国内·机器人系统工程 | 海康机器人 | 嵌入式软件开发工程师-驱动 | 杭州 | 本科 | 未注明 | C++、C、RTOS/实时系统、CAN、嵌入式/MCU/RTOS | C、MCU、UART、FreeRTOS和软硬件联调经验较匹配；CAN与伺服目前仅接触但无项目证据，需通过真实驱动适配和电机接口项目补强后再投递。 | [公开页](https://talent.hikvision.com/home/socity/position?postId=96EE10F1A5D710CAB01B1A808269BF2F) |
| J045 | P2 中长期 | 国内·机器人系统工程 | 天津小橙集团有限公司 | 机械臂控制 / 力控工程师 | 北京 | 本科及以上 | 未注明；协作机械臂、多设备协同或实时控制经验优先 | Python、C++、Linux/Ubuntu、ROS 生态、ROS 2、相机/传感器/标定、机器人仿真、MuJoCo、Gazebo/Webots/PyBullet、EtherCAT | 设备集成、通信与可靠性设计可迁移，但机械臂、力控、EtherCAT、ROS2/MoveIt和伺服控制都是核心缺口，适合作为EdgeVLA真机阶段的进阶目标。 | [公开页](https://career.nankai.edu.cn/correcruit/content/id/116184.html) |
| J046 | P0 近期核验 | 国内·机器人系统工程 | 海康机器人 | Linux软件开发工程师 | 杭州 | 本科及以上 | 未注明 | Python、C++、C、Linux/Ubuntu、RTOS/实时系统、IPC/网络编程、EtherCAT | 当前匹配度较高：嵌入式Linux应用、网络通信和现场联调可直接迁移；需强化现代C++、IPC、实时Linux与EtherCAT实践。 | [公开页](https://talent.hikvision.com/home/socity/position?postId=B5364D0B030C22EAF7AB6C4E5116EC17) |
| J047 | 条件过滤 | 国内·机器人系统工程 | 海康机器人 | 嵌入式软件开发工程师（机器视觉） | 杭州 | 本科及以上 | 3-5年 | C++、C、Linux/Ubuntu、IPC/网络编程、网络/MQTT | 岗位方向与现有Linux应用、通信和产品交付经历相近；需补C++11/STL深度、GDB/性能工具、ISP与SoC接入案例。 | [公开页](https://talent.hikvision.com/home/socity/position?postId=B893A288712CB9D717F31EEA5CB74AE4) |
| J048 | P0 近期核验 | 国内·机器人系统工程 | 海康机器人 | 嵌入式软件开发工程师（AGV） | 杭州 | 本科及以上 | 未注明 | Python、C++、C、Linux/Ubuntu、相机/传感器/标定、RTOS/实时系统、IPC/网络编程、嵌入式/MCU/RTOS | 现有MCU/RTOS、Linux通信、设备管理和现场交付经验较匹配；补充ROS2/AGV基础与工业相机接入可提升竞争力。 | [公开页](https://talent.hikvision.com/home/socity/position?postId=FA94C95524B488D2A90D7B4328B38752) |
| J049 | P1 作品/专项补证后 | 国内·机器人系统工程 | 海康机器人 | 应用软件开发工程师（C++） | 杭州 | 未注明 | 未注明 | Python、C++、C、Linux/Ubuntu、IPC/网络编程 | 网络通信和跨端开发经验可迁移；但岗位强调高级C++公共组件、Windows驱动和机器视觉协议，需要专项补强。 | [公开页](https://talent.hikvision.com/home/socity/position?postId=B9FBE7DEFCCF0F52D1AEF3A309D55236) |
| J050 | 条件过滤 | 国内·机器人系统工程 | 海康机器人 | 运控架构专家（工控） | 杭州 | 未注明 | 10年以上 | 运动控制、CAN、EtherCAT | 不适合当前直接投递，但清晰揭示控制专家路线的核心壁垒：伺服、PLC、三环调优、EtherCAT/CAN与长期产品经验。 | [公开页](https://talent.hikvision.com/home/socity/position?postId=F309CA7D76A3CF8EF6D0E10079DFFF31) |
| J051 | P2 中长期 | 国内·机器人系统工程 | 海康机器人 | 电机控制算法工程师（工控） | 杭州 | 本科及以上 | 未注明 | 运动控制、PID、CAN、EtherCAT | 与现有经历差距较大；CAN仅有接触不能替代电机控制项目，需要先完成FOC/PID仿真和真实电机闭环实验。 | [公开页](https://talent.hikvision.com/home/socity/position?postId=9C28D893C7A9ED62AC0911608B3B17D2) |
| J052 | P2 中长期 | 国内·机器人系统工程 | 海康机器人 | 运动控制算法工程师（工控） | 杭州 | 硕士及以上 | 3年以上 | 运动规划、运动控制、PID、CAN、EtherCAT | 属于算法控制路线的进阶岗；现有软件工程能力可支撑测试平台部分，但学历、控制理论和运控项目经验不足。 | [公开页](https://talent.hikvision.com/home/socity/position?postId=34D120423CCEE750C1A0E1E5ECC540F8) |
| J053 | 条件过滤 | 国内·机器人系统工程 | 海康机器人 | 嵌入式软件工程师-工控PLC | 西安 | 未注明 | 5-7年及以上嵌入式Linux或RTOS开发经验 | Linux/Ubuntu、运动规划、RTOS/实时系统、EtherCAT、嵌入式/MCU/RTOS | Linux/RTOS和嵌入式架构经验可部分迁移，但年限、EtherCAT/CiA402、PLCopen和多轴运动控制均是明显缺口，适合作为工业机器人实时控制路线的进阶标杆。 | [公开页](https://talent.hikvision.com/home/socity/position?postId=AD87E4F5FF5B9FD26CCAE0FAE76C178F) |
| J054 | P2 中长期 | 国内·机器人系统工程 | 海康机器人 | 具身算法工程师 | 杭州 | 硕士及以上 | 未注明 | Python、C++、C、深度学习、相机/传感器/标定 | 传感器应用和设备集成经历有一定关联，但岗位核心是视觉/3D感知算法与硕士背景，需以RGB-D/点云真机项目补齐。 | [公开页](https://talent.hikvision.com/home/socity/position?postId=27F6A082B7E6C850E7DA0CD3324A37BF) |
| J055 | P2 中长期 | 国内·机器人系统工程 | 百度 | 自动驾驶系统架构工程师（J85775） | 北京 | 未注明 | 未注明 | C++、C、Linux/Ubuntu、CUDA/GPU、边缘推理 | 通信、Linux应用和稳定性排障可迁移，但该岗需要大型系统架构、性能调优和异构推理框架经验。 | [公开页](https://talent.baidu.com/jobs/detail/SOCIAL/a79cc583-6f9a-41dc-b77c-544b93d91a4b) |
| J056 | P2 中长期 | 国内·机器人系统工程 | 百度 | 自动驾驶路径规划算法工程师（J92977） | 北京 | 本科及以上 | 2年及以上 | C++、C、Linux/Ubuntu、运动规划、IPC/网络编程 | Linux网络编程与设备平台经验有部分匹配；主要缺口是图论、路径规划算法和大规模高并发工程证据。 | [公开页](https://talent.baidu.com/jobs/detail/SOCIAL/117c2c73-2c2a-4b3c-9723-62e42ca2591b) |
| J057 | P2 中长期 | 国内·机器人系统工程 | 百度 | 自动驾驶端到端模型算法工程师（J92529） | 北京/上海 | 未注明 | 未注明 | Python、C++、VLA 族、VLM/多模态模型、强化学习/RL、模仿学习/IL | 属于算法型VLA岗位，当前不宜主投；可通过LeRobot真机项目建立模仿学习、数据闭环和推理部署的第一份证据。 | [公开页](https://talent.baidu.com/jobs/detail/SOCIAL/fa8b1120-168a-49c5-83d4-ad91c03eaec8) |
| J058 | 条件过滤 | 国内·机器人系统工程 | 百度 | 生态研发组_实习PNC规控算法工程师（J71278） | 北京 | 未注明 | 至少实习3个月 | C++、Linux/Ubuntu、ROS 生态、运动规划、运动控制、MPC、PID、Sim-to-Real/仿真 | 可作为机器人规控学习清单；GDB、Linux和工程调试可迁移，但规控算法、ROS和Apollo仍需系统学习。 | [公开页](https://talent.baidu.com/jobs/detail/INTERN/35e63a50-5df8-4024-b0e6-93ab676efd06) |
| J059 | 条件过滤 | 国内·机器人系统工程 | 百度 | 自动驾驶决策规划控制算法实习生（J91869） | 北京 | 研究生在读 | 未注明 | Python、C++、Linux/Ubuntu、深度学习、PyTorch、强化学习/RL、模仿学习/IL、运动规划、运动控制、MPC | 完整技术栈体现了VLA系统岗仍需传统机器人基础；现有系统集成能力有帮助，但在读学历和算法深度不匹配。 | [公开页](https://talent.baidu.com/jobs/detail/INTERN/ba2a6909-e613-414c-9f79-feef5c3e88cf) |
| J060 | P2 中长期 | 国内·机器人系统工程 | 百度 | 云端建图工程师（J81082） | 北京 | 未注明 | 未注明 | C++、相机/传感器/标定、SLAM/定位导航 | 传感器应用经历不足以覆盖SLAM算法；如走移动机器人方向，应补ROS2 Nav2、激光SLAM和真实地图评测。 | [公开页](https://talent.baidu.com/jobs/detail/SOCIAL/862ac37f-c7ab-4e4b-87c6-893ebbf01b13) |
| J061 | 条件过滤 | 国内·机器人系统工程 | 百度 | 上海-自动驾驶端到端决策规划控制算法工程师（J100785） | 上海 | 硕士及以上 | 校招；相关实习或项目经验优先 | Python、C++、ROS 生态、强化学习/RL、运动规划、运动控制 | 作为算法校招岗位门槛较高；其技能要求可用于规划每日学习中的ROS2、规划控制和仿真实验模块。 | [公开页](https://talent.baidu.com/jobs/detail/GRADUATE/26589494-be28-4d0e-8ceb-727e998c0867) |
| J062 | 条件过滤 | 国内·机器人系统工程 | 百度 | 2027AIDU-端到端系统架构师（J99978） | 北京 | 硕士或博士在读 | 校招；机器人路径规划或开源项目经验优先 | Python、C++、Linux/Ubuntu、深度学习、PyTorch、强化学习/RL、模仿学习/IL、运动规划、运动控制、MPC | 研究型门槛较高，但证明开源机器人项目确实能增加跨域价值；应重点产出可运行代码、数据集、评测和贡献记录。 | [公开页](https://talent.baidu.com/jobs/detail/GRADUATE/cd7d5159-6779-4298-abe4-1a97ccdcea35) |
| J063 | P2 中长期 | 国内·机器人系统工程 | 博世力士乐 | 行走机械系统与软件开发工程师_DC | 上海 | 硕士及以上 | 未注明 | C++、C、Linux/Ubuntu、ROS 生态、ROS 2、运动规划、运动控制、机器人仿真、Gazebo/Webots/PyBullet、嵌入式/MCU/RTOS | 嵌入式Linux、传感器通信和软硬件联调经验可迁移；硕士门槛及动力学、路径规划、运动控制、ROS2是主要差距。 | [公开页](https://jobs.smartrecruiters.com/BoschGroup/744000125026049--dc) |
| J064 | P2 中长期 | 国内·机器人系统工程 | 博世中国 | 机器人规控算法研究员_CR | 上海 | 硕士或博士 | 要求算法仿真、真机调试到现场部署完整项目经历，年限未注明 | Python、C++、Linux/Ubuntu、ROS 生态、ROS 2、运动规划、运动控制、MPC、WBC、机器人仿真 | 属于研究与工程并重的高门槛岗位；现有工业物联网交付可支持现场部分，但需补研究生背景和完整机器人规控项目。 | [公开页](https://jobs.smartrecruiters.com/BoschGroup/744000106997136--cr) |
| J065 | P1 作品/专项补证后 | 国内·机器人系统工程 | 博世创新软件开发 | 数据闭环算法开发_BCSC | 上海 | 本科及以上 | 2年及以上 | Python、C++、Linux/Ubuntu、ROS 生态、ROS 2、相机/传感器/标定、数据管线/ETL、Git/CI/CD | 较适合“端云数据与机器人系统工具链”转型：通信、平台和全链路经验可复用；需补Python数据工程、ROS2/DDS和传感器数据格式。 | [公开页](https://jobs.smartrecruiters.com/BoschGroup/744000119529670--bcsc) |
| J066 | P1 作品/专项补证后 | 国内·机器人系统工程 | 博世创新软件开发 | ADAS仿真回放开发_BCSC | 苏州 | 本科及以上 | 3年以上 | Python、C++、Linux/Ubuntu、ROS 生态、ROS 2、机器人数据格式、Docker/容器、Git/CI/CD、CMake/Bazel、gRPC/服务通信 | 与现有上位机、通信、云端平台和设备联调经历高度接近，是比纯VLA算法更现实的机器人/智驾系统岗位；需补ROS bag、CAN实战与现代C++工具链。 | [公开页](https://jobs.smartrecruiters.com/BoschGroup/744000127357684-adas-bcsc) |
| J067 | 条件过滤 | 国内·机器人系统工程 | 北京华晟经世信息技术股份有限公司 | 具身智能（Embodied AI）算法开发实习生 | 北京 | 本科 | 6个月实习 | Python、C++、Linux/Ubuntu、ROS 生态、ROS 2、VLA 族、LeRobot、机器人仿真、MuJoCo、Gazebo/Webots/PyBullet | 与计划中的LeRobot开源项目几乎同构，说明项目方向有效；完成数据采集、ACT/VLA微调、真机评测和文档即可覆盖大量要求。 | [公开页](https://www.zhaopin.com/jobdetail/CC427414310J40752598806.htm) |
| J068 | 条件过滤 | 国内·机器人系统工程 | 经纬恒润 | 具身智能软件实习生（SOC嵌入式软件工程师方向） | 天津 | 硕士 | 6个月实习 | Python、C++、C、Linux/Ubuntu、ROS 生态、ROS 2、CUDA/GPU、TensorRT、边缘推理、Jetson | 技术方向与ARM、嵌入式Linux和设备通信背景接近，但学历要求及内核驱动、设备树、ROS2/DDS和TensorRT是关键缺口。 | [公开页](https://www.zhaopin.com/jobdetail/CC000571490J40845909411.htm) |
| J069 | 条件过滤 | 国内·机器人系统工程 | 北京汽车研究总院有限公司 | 机器人软件开发工程师（ROS2 / 通信中间件方向）（J13521） | 北京 | 本科及以上 | 3-5年 | Python、C++、Linux/Ubuntu、ROS 生态、ROS 2、RTOS/实时系统、IPC/网络编程、嵌入式/MCU/RTOS | 是最值得重点转型的系统软件岗之一：TCP/UDP、RTOS、设备通信与联调经验直接相关；集中补ROS2、DDS/QoS和C++中间件项目即可形成针对性。 | [公开页](https://www.zhaopin.com/jobdetail/CC211593410J40874431209.htm) |
| J070 | P2 中长期 | 国内·机器人系统工程 | 浪潮集团 | 具身智能算法工程师 | 上海 | 硕士 | 5-10年；岗位正文要求8年以上机器人或AI研发且3年以上系统架构经验 | Python、C++、C、Linux/Ubuntu、ROS 生态、ROS 2、VLA 族、VLM/多模态模型、强化学习/RL、模仿学习/IL | 岗位职责与现有物联网全链路思维高度相关，但属于资深架构岗；可把它作为三到五年路线图，先从机器人系统集成和ROS2中间件切入。 | [公开页](https://www.zhaopin.com/jobdetail/CC120143600J40954521515.htm) |
| J071 | 国际技术对标 | 国际·数据与部署对标 | RoboForce | Senior / Staff AI Research Engineer, Data Infrastructure | Milpitas, CA | 本科或硕士（计算机、机器人或相关专业） | 5年以上 | Python、深度学习、PyTorch、JAX、强化学习/RL、数据管线/ETL、机器人数据格式、W&B/MLflow、云平台/对象存储 | 与候选人的设备通信、端云系统和工程交付思路相通，但该岗位是高级数据/学习基础设施岗；当前需重点补齐 Python 数据工程、PyTorch、机器人数据格式、模仿学习及真机 VLA 评测。 | [公开页](https://job-boards.greenhouse.io/roboforce/jobs/5030138008) |
| J072 | 国际技术对标 | 国际·数据与部署对标 | Figure | Helix AI Engineer, Data Infrastructure | San Jose, CA | 本科或硕士（计算机、机器人、工程或相关专业） | 4年以上全职后端系统经验 | Python、Linux/Ubuntu、云平台/对象存储、Kubernetes、SQL/数据库 | 候选人的嵌入式 Linux、设备联网和集中控制平台经历可支撑端侧理解；要达到该岗位还需形成可展示的机器人数据湖、云端编排、数据集管理和大规模后端工程证据。 | [公开页](https://job-boards.greenhouse.io/figureai/jobs/4345915006) |
| J073 | 国际技术对标 | 国际·数据与部署对标 | Intrinsic | Software Engineer, Data Infrastructure | Mountain View, California | 未注明 | 4年以上专业软件项目经验 | Python、C++、数据管线/ETL、云平台/对象存储、Docker/容器、Kubernetes | 这是候选人从物联网端云全栈转向机器人平台较匹配的中长期方向；现有 Go/设备平台/通信经验可迁移，需补 Kubernetes、云数据服务及真实机器人数据管线项目。 | [公开页](https://job-boards.greenhouse.io/intrinsicrobotics/jobs/5741158004) |
| J074 | 国际技术对标 | 国际·数据与部署对标 | XDOF | Robotics Data Engineer | San Mateo, CA（混合办公） | 本科或硕士（或同等经验） | 未注明 | Python、ROS 生态、相机/传感器/标定、数据管线/ETL、机器人数据格式 | 岗位强调工程直觉和数据质量，较纯算法岗更适合作为转型目标；候选人需用 LeRobot 项目证明 Python 数据分析、时间同步、坐标系、ROS bag/MCAP 和可视化能力。 | [公开页](https://jobs.ashbyhq.com/xdof/73ac48fd-1c6d-4ff5-b16e-87c9f6ec382d/) |
| J075 | 国际技术对标 | 国际·数据与部署对标 | Mind Robotics | Data Architect, Robotics | Palo Alto, CA | 未注明 | 未注明 | 数据管线/ETL | 属于架构级目标岗位，短期不宜主投；可把候选人的端云平台经验升级为机器人数据版本、质量检查、对象存储和实验追踪系统，逐步积累数据架构证据。 | [公开页](https://jobs.ashbyhq.com/mindrobotics/105d9f55-9914-49a3-a622-1565dcde5f01) |
| J076 | 国际技术对标 | 国际·数据与部署对标 | Genesis | Data Infrastructure | San Francisco Bay Area | 未注明 | 8年以上 | Python、数据管线/ETL、云平台/对象存储、Kubernetes | 候选人的 Go、物联网数据链路和平台建设是可迁移基础，但本岗位资历和分布式数据规模要求高；应视作技术栈标杆，而非当前直接投递目标。 | [公开页](https://jobs.ashbyhq.com/genesis/9e3c06f0-109b-42d2-b69c-8f0e33ee3b8c/) |
| J077 | 国际技术对标 | 国际·数据与部署对标 | Rhoda AI | Research Member of Technical Staff - Robot Learning Data | Mountain View, CA | 未注明 | 未注明 | 模仿学习/IL、数据采集、遥操作/Teleop | 研究属性较强，候选人现阶段更适合先做工程型 LeRobot 数据闭环；若能完成真实机械臂数据采集、质量分析和 ACT/SmolVLA 对照实验，可显著缩小差距。 | [公开页](https://jobs.ashbyhq.com/rhoda-ai/98fed52a-b6c8-42f8-a88e-f4ed24bcf57f?embed=js) |
| J078 | 国际技术对标 | 国际·数据与部署对标 | Rhoda AI | Senior Inference Optimization ML Engineer | Mountain View, CA | 未注明 | 3年以上推理优化或ML系统经验 | 深度学习、PyTorch、JAX、CUDA/GPU、TensorRT、边缘推理 | 属于高级 ML Systems 岗，与候选人当前经历距离较大；可先在 Jetson 上完成 ACT/SmolVLA 的 ONNX/TensorRT 部署和可复现实测，再决定是否深挖该方向。 | [公开页](https://jobs.ashbyhq.com/rhoda-ai/5fbe9c15-342b-4d46-b1bf-34d99d2f243c) |
| J079 | 国际技术对标 | 国际·数据与部署对标 | Dyna Robotics | ML Infrastructure Engineer, Training | Redwood City, CA | 未注明 | 7年以上 | 深度学习、PyTorch、CUDA/GPU、TensorRT、边缘推理、数据管线/ETL、机器人数据格式、云平台/对象存储、Kubernetes | 该岗位可作为理解 VLA 工程上限的参考，不是当前匹配岗位；候选人的第一阶段重点应是单机训练、机器人数据格式和 Jetson 推理，而非直接追求大规模训练集群。 | [公开页](https://jobs.ashbyhq.com/dyna-robotics/ec8f09de-ee26-4117-9b41-d317b074c2dc/) |
| J080 | 国际技术对标 | 国际·数据与部署对标 | Bedrock Robotics | Agentic Data Understanding | San Francisco / New York（页面说明地点具灵活性） | 未注明 | 未注明 | Python、VLM/多模态模型、LLM/Agent、相机/传感器/标定 | 候选人的 AI Agent 开发兴趣与平台能力可迁移，但必须增加计算机视觉、传感器数据和标注质量评测；适合做成 LeRobot 数据质检/自动失败分类的进阶模块。 | [公开页](https://jobs.ashbyhq.com/bedrock-robotics/7ff12ad2-904f-4b3b-9fde-e0cff3632a3a) |
| J081 | 国际技术对标 | 国际·数据与部署对标 | Omakase Robotics | Robotics Data Engineer | Japan | 未注明 | 3年以上 | Python、ROS 生态、ROS 2、LeRobot、数据管线/ETL、机器人数据格式、W&B/MLflow、SQL/数据库 | 这是与候选人规划最吻合的样本：LeRobot、机器人数据、IoT 遥测和端云平台形成交叉；短板是 3 年机器人数据经验、ROS2、传感器数据和 MLOps，可据此反推开源项目模块。 | [公开页](https://job-boards.greenhouse.io/omakaserobotics/jobs/6101308004) |
| J082 | 国际技术对标 | 国际·数据与部署对标 | Serve Robotics | Senior Data Scientist, Machine Learning | United States（远程） | 未注明 | 5年以上 | Python、VLM/多模态模型、数据管线/ETL、SQL/数据库 | 偏资深数据科学与自动驾驶/配送机器人算法，候选人短期匹配度低；可借鉴其主动学习、自动标注和数据质量闭环理念，不建议作为首批投递岗位。 | [公开页](https://jobs.ashbyhq.com/serverobotics/0d6390d6-f6cf-4f40-87a3-9bb1df699911/) |
| J083 | 国际技术对标 | 国际·数据与部署对标 | Mecka AI | Senior Mobile Engineer | New York, NY | 未注明 | 未注明 | 数据采集 | 候选人的 Flutter 跨端 APP、设备通信和平台经验具有较强可迁移性；若为 LeRobot 项目增加移动遥控、任务下发、采集状态和视频上传，可形成差异化作品。 | [公开页](https://jobs.ashbyhq.com/mecka.ai/3d91bf03-9915-4f8c-b1da-7858babdd33a) |
| J084 | 国际技术对标 | 国际·数据与部署对标 | Anvil Robotics | Sr. Software Engineer - Data Collection | San Francisco / Taipei / Trinidad（现场） | 相关专业硕士，或本科加同等实战深度 | 典型3至5年；有高质量实战者2至3年亦可 | Linux/Ubuntu、VLA 族、相机/传感器/标定、SLAM/定位导航、机器人真机/系统集成、嵌入式/MCU/RTOS | 这是非常贴近候选人优势的跨域样本：不要求亲自研究核心模型，而重视嵌入式应用、端云集成和产品落地。补足机器人感知、数据采集及 VLA 真机证据后值得重点关注。 | [公开页](https://jobs.ashbyhq.com/anvil-robotics/ce1313a5-e7b8-4a93-ae12-df4e2beeb40d) |
| J085 | 国际技术对标 | 国际·数据与部署对标 | Dexmate | Full-Stack Software Developer - Robotics & AI Systems | Fremont, CA | 未注明 | 5年以上全栈开发经验 | Python、VLM/多模态模型、LLM/Agent、云平台/对象存储、Git/CI/CD、SQL/数据库 | 与候选人的集中控制平台、Flutter、设备管理和 AI 应用经历高度相关，是具身智能转型中较现实的岗位类型；需补现代 Web 前端、云部署及机器人数据模型。 | [公开页](https://jobs.ashbyhq.com/dexmate/e31fd855-b234-4f07-bea4-a5f08439930d) |
| J086 | 国际技术对标 | 国际·数据与部署对标 | Generalist | Robot Science Ops | San Mateo, CA / Somerville, MA | 未注明 | 未注明 | 数据采集、遥操作/Teleop | 岗位强调实验执行、问题闭环和软硬件动手能力，方向上比纯研究岗更适合候选人；LeRobot 项目必须展示任务定义、训练/测试拆分、指标、失败分类和复现实验文档。 | [公开页](https://jobs.ashbyhq.com/generalist/a9bee1c6-517b-4740-b4c0-10b6675bb07e/) |
| J087 | 国际技术对标 | 国际·数据与部署对标 | Genesis | Robot Data Operations Analyst | San Francisco Bay Area | 未注明 | 未注明 | 遥操作/Teleop | 可作为进入具身智能行业的桥梁岗位类型，算法门槛低于研究工程师；候选人需要用真实机械臂项目证明遥操作、数据质量、测试记录和安全意识。 | [公开页](https://jobs.ashbyhq.com/genesis/2f2009be-f166-4289-8a49-3c20eb57e011) |
| J088 | 国际技术对标 | 国际·数据与部署对标 | Genesis | Senior Data Collection Operator | San Francisco Bay Area | 未注明 | 要求有机器人或具身AI数据采集实战，年限未注明 | Python、Linux/Ubuntu、遥操作/Teleop | 候选人具备设备调试、脚本化和交付意识，但尚无具身数据采集履历；完成可复现的机械臂采集与可靠性测试后，可用于证明从设备到数据的执行能力。 | [公开页](https://jobs.ashbyhq.com/genesis/3804635c-b86b-430f-9314-c9c92c85e6df) |
| J089 | 国际技术对标 | 国际·数据与部署对标 | Dyna Robotics | Data Collection Operator | Redwood City, CA | 专科或本科（或同等经历） | 未注明 | Linux/Ubuntu、机器人真机/系统集成、遥操作/Teleop | 技术门槛较低但能积累真实机器人数据经验；对候选人而言更有价值的是在个人项目中覆盖同类职责，而非把它作为长期岗位定位。 | [公开页](https://jobs.ashbyhq.com/dyna-robotics/3dc6a8a5-98fe-4e33-8a61-08ccff952985) |
| J090 | 国际技术对标 | 国际·数据与部署对标 | Dyna Robotics | Ego Data Collector | Redwood City, CA | 未注明 | 未注明 | 数据采集 | 该岗位说明具身智能数据生产也需要标准化运营；候选人的项目应提供采集 SOP、校准清单、无效样本规则和日常质量统计，而不仅是展示模型能运行。 | [公开页](https://jobs.ashbyhq.com/dyna-robotics/4175832f-27f9-483a-ae74-fbdda2138831) |
| J091 | 国际技术对标 | 国际·数据与部署对标 | Physical Intelligence | Shift Lead | San Francisco, CA | STEM、运营等相关本科或同等实践经验 | 3至5年 | 数据采集 | 这是运营管理而非开发岗位，但揭示了数据闭环对工位可用性、质量、交接和安全的要求；候选人可把这些要素转化为开源项目的运维面板和流程文档。 | [公开页](https://jobs.ashbyhq.com/physicalintelligence/e501e135-9407-4b14-a8e8-c131f89be61d) |
| J092 | 国际技术对标 | 国际·数据与部署对标 | Revel Robotics | Data Collection Operations Lead | Prague, Czech Republic | 未注明 | 要求运营、实验室或生产管理经验，年限未注明 | 数据采集 | 不属于候选人的目标开发岗，但对项目设计很有价值：除技术实现外，应量化每小时有效 episode、拒收率、操作者差异和流程改进效果。 | [公开页](https://jobs.ashbyhq.com/revelrobotics/404ecab0-1686-4a7c-b610-11c2d02cb68f) |
| J093 | 国际技术对标 | 国际·数据与部署对标 | MaxInsights Corporation | Technical Project Manager | Santa Clara, CA | 未注明 | 2至5年项目或项目群管理经验 |  | 候选人的跨设备、APP、平台交付经验可迁移到技术项目/解决方案方向；若不走纯算法，可重点强化需求拆解、验收指标、数据质量和跨团队交付叙述。 | [公开页](https://jobs.ashbyhq.com/maxinsights/547e967f-6d2e-4337-8a90-6b24000a3d0a) |
| J094 | 国际技术对标 | 国际·数据与部署对标 | Foundry Robotics | Strategic Projects Lead | San Francisco, CA | 未注明 | 3至5年 | Python、VLA 族、相机/传感器/标定、数据采集、SQL/数据库 | 该岗位把“可展示项目”具体化为设备管理、标定、QA 和指标四部分；候选人的全栈平台能力可用于构建这些工具，但需先获得机械臂和传感器实操证据。 | [公开页](https://jobs.ashbyhq.com/foundry-robotics/1029d615-da36-4cf2-a6a1-6f93b150fa49) |
| J095 | 国际技术对标 | 国际·数据与部署对标 | OpenAI | Field Engineer | San Francisco, CA | 未注明 | 未注明 | 数据采集 | 该职责与候选人的设备调试、日志、远程维护和项目交付高度相似，是值得关注的机器人现场/系统工程类型；短板是机械臂工作站和机器人安全实战。 | [公开页](https://jobs.ashbyhq.com/openai/d8ebcb30-c789-4e75-bf9b-a1e3fb09dd2f/) |
| J096 | 国际技术对标 | 国际·数据与部署对标 | Dyna Robotics | Deployment Engineer | Redwood City, CA | 未注明 | 未注明 | Linux/Ubuntu、CUDA/GPU、Docker/容器、IPC/网络编程、CAN | 这是本样本中与候选人最贴近的目标之一：4G、网络、嵌入式 Linux、设备平台和现场交付均可迁移。应重点补 Docker/systemd、GPU 推理、SocketCAN、相机管线和机器人换件调试。 | [公开页](https://jobs.ashbyhq.com/dyna-robotics/869b09e4-33cd-48a7-b937-3f3cbcec6b92) |
| J097 | 国际技术对标 | 国际·数据与部署对标 | Sereact | Deployment Robotics Engineer (m/f/d) | Stuttgart, Germany | 未注明 | 3年以上机器人、自动化设备或工业机械部署经验 | Python、C++、ROS 生态、ROS 2、相机/传感器/标定、Docker/容器 | 候选人的交付和软硬件联调能力有基础，但缺少工业机器人部署年限；可通过同学机械臂项目补 ROS2、六轴臂、传感器布线、安全检查及标准化验收。 | [公开页](https://jobs.ashbyhq.com/sereact/a8755452-ace3-4d71-bdf1-4659feb43496) |
| J098 | 国际技术对标 | 国际·数据与部署对标 | Collaborative Robotics | Deployment Engineer | United States（远程，偏中西部） | 工程或供应链相关本科 | 要求有系统部署与集成经验，年限未注明 | Python、Linux/Ubuntu、ROS 生态、Git/CI/CD | 与候选人的系统交付、设备通信和技术文档能力较匹配；需通过开源项目补真实机械臂调试、ROS、基础电气/机械维护和可量化现场测试。 | [公开页](https://jobs.ashbyhq.com/cobot/d763de1c-079a-4f0a-b903-0ec1f21a2da0) |
| J099 | 国际技术对标 | 国际·数据与部署对标 | Summer Robotics | Field Applications Engineer (Mid - Sr. Levels) | Campbell, CA | 工程、计算机或相关专业本科 | 5年以上复杂技术系统实操经验 | Python、Linux/Ubuntu、边缘推理、Jetson、相机/传感器/标定、嵌入式/MCU/RTOS | 岗位把候选人的嵌入式应用、Linux、设备联调与 Jetson/机器人视觉连接起来，路径较合理；需要补点云、相机标定、Jetson 部署和至少一种工业机械臂。 | [公开页](https://jobs.ashbyhq.com/summer-robotics/6353839f-a8b4-4cca-9eea-f9729d905a11/) |
| J100 | 国际技术对标 | 国际·数据与部署对标 | Skydio | Deployment Engineer - Northeast | United States Northeast（远程与客户现场） | 未注明 | 3年以上云连接设备支持经验 | Linux/Ubuntu | 候选人的 4G、网络通信、设备管理平台和远程维护经验匹配度较高；虽非机械臂/VLA 岗，但属于机器人端云部署的现实切入口，可作为转型过渡岗位类型。 | [公开页](https://jobs.ashbyhq.com/skydio/f0013b6c-2389-426e-99d5-58b4ee4b1928/) |

## 如何维护

1. 原始岗位只编辑 `data/research/vla-jobs/part-*.json`。
2. 执行 `npm run career:vla` 重新生成 JSON、CSV 和两份 Markdown。
3. 执行 `npm run career:vla:verify` 检查 100 个唯一岗位、112 天计划和生成文件一致性。
4. 岗位链接失效时不要删除历史快照；记录失效日期，并在下一次市场快照中新增替代样本。
