---
aliases:
  - VLA 面试问答
  - EdgeVLA 技术核验问题库
tags:
  - career/interview
  - robotics/vla
  - robotics/data
  - edgevla/evidence
status: active-reference
created: 2026-08-24
updated: 2026-08-24
source_status: official-sources-checked
---

# VLA 技术面试核验与双轨回答

> [!abstract] 文档用途
> 本文把同学提供的 VLA、世界模型、机器人数据、动作空间、时间同步、3DGS 与 Pick & Place 问题整理成可复习、可追问、可核验证据的面试文档。每个问题都同时给出“你现在能诚实说什么”和“大模型给出的技术标准答案”。

> [!warning] 当前真实性基线｜2026-08-24
> 你目前**没有**亲手完成 OpenVLA、π0、RT-2、Octo、GR00T 等模型的训练或微调，也没有 Franka、SO-101、GELLO 等真实机械臂部署证据。你已经完整观看一遍具身智能机械臂课程，正在按 EdgeVLA 112 天计划准备完成 MuJoCo Franka、键盘/游戏手柄、LeRobotDataset、ACT/SmolVLA、ROS2 与云端实验平台的 `simulation-only` 作品。课程学习、方案设计和理论回答都不能写成已完成项目。

## 回答标记

> [!success] 【你的当前真实回答】
> 可以立即用于交流或面试，已按现有简历和证据边界改写。

> [!example] 【大模型标准回答】
> 我作为技术面试官给出的知识型参考答案，用于理解“一个真正做过的人应该说清什么”。它不是你的项目经历。

> [!todo] 【完成实证后可替换的回答模板】
> 必须等对应代码、数据、checkpoint、日志和冻结评测真实产生后，才可填写尖括号中的数值并用于简历或面试。

> [!danger] 【禁止冒充】
> 不得把同学、论文、上游仓库、课程 Demo、仿真结果或大模型答案说成自己的真机经历。

## 快速导航

- [[#Q01 你做过真正的 VLA 吗|Q01 真正的 VLA 经历]]
- [[#Q02 你说的世界模型到底输出什么|Q02 世界模型]]
- [[#Q03 如果要训练 VLA，数据应该怎样设计|Q03 数据设计]]
- [[#Q04 图像、状态和动作怎样进行时间对齐|Q04 时间同步]]
- [[#Q05 observation 与 action 到底是什么关系|Q05 因果对齐]]
- [[#Q06 action 怎样定义、归一化和反归一化|Q06 动作与归一化]]
- [[#Q07 OpenVLA 的 action 为什么不能直接发给机械臂|Q07 部署适配]]
- [[#Q08 OpenVLA、π0、RT-2、Octo 和 GR00T 有什么区别|Q08 模型比较]]
- [[#Q09 π0 中的 flow matching 是干什么的|Q09 Flow Matching]]
- [[#Q10 RT-2 的核心思想和局限是什么|Q10 RT-2]]
- [[#Q11 你训练时用了多少数据和什么参数|Q11 训练参数与证据]]
- [[#Q12 Pick & Place 中哪些部分是你亲手写的|Q12 个人贡献]]
- [[#Q13 3D 抓取模块怎样帮助 VLA|Q13 3D 抓取与 VLA]]
- [[#Q14 3DGS 的输入输出是什么，能否直接用于机器人训练|Q14 3DGS 与物理仿真]]
- [[#Q15 物体移除和空洞补全对机器人有什么用|Q15 场景补全]]
- [[#面试核验证据清单|面试核验证据清单]]
- [[#原始笔记中需要修正的说法|原始笔记纠偏]]

---

## Q01 你做过真正的 VLA 吗

### 原问题

> 你有没有亲手训练或微调过视觉—语言—动作模型？比如 OpenVLA、RT-2、π0、Octo、GR00T？输入是什么，输出的 action 是几维，怎样归一化，怎样部署？

> [!success] 【你的当前真实回答】
> 截至目前，我还没有亲手完成 OpenVLA、π0、RT-2、Octo 或 GR00T 的训练、微调和真机部署，因此不会说自己“做过真正的 VLA”。我现有的可验证优势是嵌入式 Linux 应用、4G/设备通信、物联网端—边—云交付以及 AI 应用集成。现在正在按 EdgeVLA 计划补齐 MuJoCo 仿真、LeRobot 数据闭环、ACT 基线和 SmolVLA 微调；在形成版本固定的数据集、checkpoint、训练日志和冻结评测前，我只把它称为学习和在建作品。

> [!example] 【大模型标准回答】
> 真正有 VLA 实践的人应在一分钟内说清六件事：
>
> 1. **模型与版本**：具体是哪个 checkpoint、tag 或 commit，不只说“做过 OpenVLA”。
> 2. **任务与载体**：仿真还是真机、什么机器人、什么任务、多少种物体与场景。
> 3. **输入**：哪几路 RGB/RGB-D、语言指令、关节角/速度、夹爪或末端状态。
> 4. **输出**：关节位置、关节速度、末端绝对位姿、末端增量，还是未来 action chunk；维数、单位、坐标系和控制频率是什么。
> 5. **训练**：数据量与划分、预训练模型、微调方式、有效 batch、学习率、精度、GPU、步数、耗时和 checkpoint。
> 6. **评测与部署**：冻结任务、每项试验次数、成功标准、失败分类、归一化/反归一化、控制器适配和安全限幅。
>
> 只运行官方推理 Demo、只调用 REST 接口、只看过论文或只生成过一段仿真视频，都不能等价为“训练或微调过 VLA”。

> [!todo] 【完成实证后可替换的回答模板】
> 我在 `<MuJoCo 仿真/真实机器人>` 上微调了 `<ACT/SmolVLA/具体模型与 revision>`，任务是 `<任务>`。输入包括 `<相机列表>`、语言指令和 `<状态定义>`；输出是 `<D 维绝对/增量 action 或 H×D action chunk>`，单位和坐标系为 `<定义>`。我使用 `<N>` 条有效 episode，按 `<train/val/test>` 划分，在 `<GPU>` 上以 `<精确配置>` 训练 `<步数/时长>`。最终在预先冻结的 `<K>` 次评测中完成 `<实测结果>`；失败主要分为 `<类别>`。部署侧由我完成 `<反归一化、坐标转换、限幅、控制频率协调、安全层>`。相关证据是 `<commit、数据 revision、checkpoint、原始日志、评测报告>`。

> [!danger] 【禁止冒充】
> “我在仿真里走过流程，所以真实 Franka 已经部署成功”“我用过 LeRobot，所以做过 OpenVLA”“Dify/RAG 就是 VLA”“同学的机械臂实验也算我的项目”都不可使用。

---

## Q02 你说的世界模型到底输出什么

### 原问题

> 你的 world model 输入是什么？输出是什么？预测未来图像、未来状态，还是构建 3D 仿真世界？loss 是什么？

> [!success] 【你的当前真实回答】
> 我目前没有训练过 world model，也不会把 MuJoCo、3DGS、Real2Sim 或一个 3D 场景生成工具直接称为自己的世界模型。MuJoCo 是物理仿真器；原始 3DGS 主要是场景表示和新视角渲染。它们可以为机器人学习提供环境或视觉资产，但不自动等于“学习了状态转移规律的 world model”。

> [!example] 【大模型标准回答】
> “世界模型”不能只用“理解世界、建模物理规律”来描述，至少要给出如下可计算定义：
>
> - **输入**：当前或历史观测 `o_≤t`、动作 `a_≤t`，可再加入语言目标、机器人状态或环境条件。
> - **预测目标**：未来 RGB/RGB-D/点云、未来物理状态 `s_{t+1:t+H}`、未来 latent `z_{t+1:t+H}`，以及可选的 reward、termination 或 contact。
> - **输出用途**：用于视频预测、规划、策略学习、风险预测，还是只用于视觉渲染。
> - **训练目标**：像素重建/生成损失、latent prediction、动力学似然、reward/termination loss，或这些目标的组合。
> - **评测**：预测误差之外，还要验证它是否改善规划或真实任务成功率。
>
> 例如，一个 latent dynamics world model 可以写成 `z_t = encoder(o_t)`、`ẑ_{t+1} = f(z_t, a_t)`，训练时最小化预测 latent 与目标 latent 的误差；一个视频世界模型则预测未来帧。Real2Sim/3DGS 管线如果只生成场景外观或资产而不学习带动作条件的时间演化，更准确的名称是“场景重建/仿真资产生成管线”。

> [!todo] 【完成实证后可替换的回答模板】
> 我实现的是 `<未来图像/未来状态/未来 latent>` 预测，不是泛指的“世界理解”。输入为 `<字段和时间窗口>`，输出为 `<张量、维度和预测时域>`，使用 `<loss>`，训练数据为 `<数据和版本>`，通过 `<预测指标>` 与 `<规划/控制下游指标>` 验证。它不包含 `<明确边界>`。

---

## Q03 如果要训练 VLA，数据应该怎样设计

### 原问题

> 有三路相机、机械臂和灵巧手时，每条数据应该保存什么？

> [!success] 【你的当前真实回答】
> 我尚未采集真实机械臂 VLA 数据。我的 EdgeVLA 第一版会先在 MuJoCo 中冻结 schema，再通过键盘或游戏手柄采集仿真 episode。计划至少保存多路图像、机器人状态、语言任务、action、采集时间戳、episode/frame 索引、任务 ID、成功/失败与环境版本；实际字段、维度和频率要在实现与回放验证后才能作为项目结果回答。

> [!example] 【大模型标准回答】
> 数据要同时支持训练、回放、故障定位和可复现评测。要先区分 LeRobot 官方字段与项目自己的同步/评测扩展：

| 层 | 字段示例 | 性质与关键要求 |
|---|---|---|
| LeRobot 用户特征 | `observation.images.front/wrist/side`、`observation.state`、`action` | 由项目 schema 定义；明确图像参数、关节顺序、action 维数、单位、坐标系与 absolute/delta |
| LeRobot 自动字段 | `timestamp`、`frame_index`、`episode_index`、全局 `index`、`task_index` | writer 自动生成；其中 `timestamp=frame_index/fps` 是 episode 内**逻辑时间**，不是相机曝光或关节采样时间 |
| 任务文本 | 写入 API 时提供 `task`，再映射为任务元数据与 `task_index` | 固定语言、模板和任务版本；防止测试集同义改写泄漏 |
| 原始同步扩展 | `capture_ts.front/wrist/side`、`state_ts`、`action_generated_ts`、`action_sent_ts`、`sync_error_ms` | 推荐自定义 feature 或 sidecar；这些才用于跨设备/跨频率物理对齐 |
| 评测扩展 | `success`、`failure_type`、`termination_reason` | 很有价值，但不是 LeRobot v3 默认强制字段；应预先定义标注粒度和失败数据用途 |
| 可复现元数据 | 相机内外参、机器人/控制器版本、action schema、数据与环境 revision | 随数据集版本化，不能只保存在口头说明里 |

> 如果包含灵巧手，还要记录手部关节/触觉状态与相应 action；如果末端位姿由关节状态经正运动学得到，应标成**派生字段**并固定 FK 与坐标系版本。成功/失败通常是 episode 级结论，也可以保留事件级标注，但不能把失败 episode 静默删除。
>
> LeRobotDataset v3 将状态、动作和逻辑时间等高频低维信号放在 Parquet，将多相机视频放在 MP4，并用元数据记录 schema、FPS、归一化统计和 episode 边界。v0.6.0 的 writer 禁止调用方直接传 `timestamp`/`frame_index`，而是自动计算 `frame_index` 与 `timestamp=frame_index/fps`；所以要另外保存真实采集时间和同步误差，不能把内置 `timestamp` 误解成硬件同步结果。[LeRobotDataset v3 官方文档](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)｜[v0.6.0 writer 源码](https://github.com/huggingface/lerobot/blob/v0.6.0/src/lerobot/datasets/dataset_writer.py)

### 一条训练样本的推荐语义

```text
sample_k = {
  observation.images.front: image_at(t_k),
  observation.images.wrist: image_at(t_k ± camera_tolerance),
  observation.images.side:  image_at(t_k ± camera_tolerance),
  observation.state:        interpolated_state_at(t_k),
  task:                      task_for_episode,
  action:                   action_label_defined_for(t_k),
  capture_ts.front:         t_k,
  capture_ts.wrist/side:    original_capture_times,
  state_ts:                 source_state_times,
  action_generated_ts:      command_creation_time,
  action_sent_ts:           command_send_time,
  sync_error_ms:            per_stream_error,
  quality_flags:            dropped/stale/calibration flags
}

# LeRobot writer 另行自动加入：
# frame_index=k, timestamp=k/fps, episode_index, index, task_index
```

> [!danger] 【禁止冒充】
> “多采一些图片再训练大模型”不构成机器人数据设计；只有图像而没有严格对齐的状态、动作、任务、时间、episode 和质量信息，通常无法支撑闭环策略训练。

---

## Q04 图像、状态和动作怎样进行时间对齐

### 原问题

> 相机 30 Hz、机械臂状态 100 Hz，按 frame index 还是 timestamp 对齐？时间戳打在采集时还是保存到硬盘时？掉帧怎么办？差 50 ms 要不要？三路相机怎样同步？

> [!success] 【你的当前真实回答】
> 我目前还没有真实机械臂同步采集证据。计划在 MuJoCo 数据管线中使用统一单调时钟、分流缓存和 timestamp 对齐，并把每路时间差写入质量报告；阈值会在观察实际抖动后冻结，而不会事后为了保留数据修改。做完同步测试前，我不能说已经解决了真机多相机同步。

> [!example] 【大模型标准回答】
> 核心不是“把三个 frame index 写成一样”，而是让每个训练样本对应同一物理时刻或清楚定义的因果窗口。
>
> 1. **统一时间基准**：原始采集层在同一主机内使用统一单调时钟；跨设备优先硬件触发、PTP 或设备时钟同步，并记录时钟偏移与漂移。墙上时间可用于日志，不应用于易跳变的控制对齐。LeRobot 内置的 `frame_index/fps` 逻辑时间用于固定 FPS 数据行，不替代这套原始时间。
> 2. **在采集处打时间戳**：优先使用曝光/传感器采样时刻或驱动回调收到帧的时刻。另存 `received_at`、`written_at` 可以诊断传输与落盘延迟，但不能把保存完成时间冒充采集时间。
> 3. **各流进入有界环形缓存**：相机帧、关节状态、手部状态、遥操作命令和实际下发命令分别保存时间戳与序号。
> 4. **选主时间轴**：例如以前置相机的 30 Hz 帧为样本时刻 `t_k`，或使用固定 30 Hz 网格；`frame_index` 只用于 episode 内排序和完整性检查。
> 5. **状态插值**：在 100 Hz 状态流中寻找包围 `t_k` 的两点。关节位置可在角度展开后线性插值；姿态四元数使用 SLERP；开关/模式等离散状态使用最近值或零阶保持。不能跨故障、复位或 episode 边界插值。
> 6. **多相机配对**：硬件同步最好；否则按采集时间找最近帧并记录每路 `Δt`。必需视角超阈值就拒绝该样本；模型明确支持缺失视角时才可以 mask，不能悄悄复制上一帧。
> 7. **动作按语义对齐**：保存的是“由该 observation 条件产生的命令”、该时刻正在执行的 setpoint，还是未来 action chunk，必须预先定义，并考虑测得的感知、推理、传输和执行延迟。
> 8. **记录而非掩盖异常**：掉帧、陈旧状态、时钟回退、缓存溢出和超阈值样本进入 manifest 与质量统计；训练集可排除，但原始记录不静默删除。

> 同步阈值没有 LeRobot 官方统一答案，可先从控制风险推导上限，例如 `Δt_max ≤ 容许位移误差 / 最大末端速度`，再结合实测 p50/p95/p99 抖动冻结阈值。LeRobot API 中用于校验固定 FPS/视频时间的 `tolerance_s` 也不是相机—关节物理同步阈值。

### 30 Hz 图像与 100 Hz 状态的对齐示意

```python
for front_frame in front_camera_buffer:
    t = front_frame.capture_timestamp
    wrist = nearest_within(wrist_buffer, t, camera_tolerance)
    side = nearest_within(side_buffer, t, camera_tolerance)
    state = interpolate_state(state_buffer, t)
    action = align_action(action_buffer, t, policy_semantics, measured_delay)

    errors = calculate_sync_errors(t, wrist, side, state, action)
    if missing_required_stream(errors) or exceeds_frozen_threshold(errors):
        reject_with_reason(front_frame, errors)
        continue

    save_training_sample(front_frame, wrist, side, state, action, errors)
```

### 对追问的直接回答

| 追问 | 【大模型标准回答】 |
|---|---|
| 按 frame index 还是 timestamp？ | 按采集 timestamp 对齐；frame index 只负责顺序与查漏。 |
| 时间戳打在哪里？ | 尽量在传感器采样/曝光或驱动收到数据时；保存完成时间只作为额外诊断字段。 |
| 相机掉帧怎么办？ | 保留 gap 和失败原因。必需视角缺失时拒绝样本；支持缺失模态时才使用显式 mask。 |
| 图像和状态差 50 ms 要不要？ | 不能给跨项目的固定答案。30 Hz 一帧约 33.3 ms，50 ms 已超过 1.5 帧；对快速操作通常风险较高。应根据控制周期、最大速度和延迟实验预先冻结阈值，超阈值就丢弃或单列，不能看完结果后改阈值。 |
| 三路相机怎样同步？ | 优先共同硬件触发/PTP；做不到时使用每路采集时间戳、时钟偏移校正和最大配对窗口，并输出同步误差分布。 |

> [!todo] 【完成实证后可替换的回答模板】
> 相机为 `<频率>`，状态为 `<频率>`，统一使用 `<时钟源>`。我以 `<主流/固定网格>` 为基准，对关节状态使用 `<插值方法>`，三路相机允许的最大时间差为 `<阈值及设定依据>`。动作标签语义为 `<定义>`，测得端到端延迟为 `<分布>`。共拒绝 `<N>` 个样本，主要原因是 `<原因>`；同步报告与回放测试位于 `<证据>`。

---

## Q05 observation 与 action 到底是什么关系

### 原问题

> observation 和 action 是同一时刻，还是 action 是下一时刻？action_t 是当前动作还是未来动作？

> [!success] 【你的当前真实回答】
> 我尚未冻结 EdgeVLA 的最终 action schema。实现时会先写清 `observation_t`、控制命令的生成/生效时刻和 action chunk 的定义，再采集数据，不会简单把数组错开一帧后称为“下一动作”。

> [!example] 【大模型标准回答】
> 监督策略最常见的语义是学习 `π(a_t | o_t, instruction)`：`o_t` 是作出决策时可见的观测，`a_t` 是基于该观测、用于紧随其后的控制区间的动作标签。两者可以存储在同一行，但这不代表传感器和执行器在物理世界完全同时发生。
>
> 如果策略使用 action chunk，则目标是 `[a_t, a_{t+1}, …, a_{t+H-1}]`。π0 原论文明确将当前 observation 条件下的未来动作块写为 `A_t=[a_t,…,a_{t+H-1}]`。[π0 论文](https://www.physicalintelligence.company/download/pi0.pdf)
>
> LeRobot v0.6.0 的标准录制循环依次读取 observation、取得遥操作 action、发送 action，再把该 observation 与 action 写入同一 row，因此其默认语义是 `o_t → a_t`，不是自动错开成 `a_{t+1}`；ACT 的 action offset 从 0 开始展开未来 chunk。[LeRobot v0.6.0 录制循环](https://github.com/huggingface/lerobot/blob/v0.6.0/src/lerobot/scripts/lerobot_record.py)｜[ACT action offset](https://github.com/huggingface/lerobot/blob/v0.6.0/src/lerobot/policies/act/configuration_act.py)
>
> 真机存在固定或可变延迟时，要根据实际记录定义标签：
>
> - 遥操作命令产生时间；
> - 控制器接收时间；
> - setpoint 生效时间；
> - 机器人状态真正响应的时间。
>
> 项目还应区分“策略空间 action”“经过 IK/限幅后实际下发的 action”和执行反馈。可以通过测量后引入明确的 delay compensation，但不能凭经验随意“向后错一帧”。错位会让策略学到迟滞，表现为慢半拍、超调或抖动。

---

## Q06 action 怎样定义、归一化和反归一化

### 原问题

> 你的 action 是几维？绝对动作还是 delta action？怎样归一化到 `[-1, 1]`，推理时怎样反归一化？

> [!success] 【你的当前真实回答】
> 我的 EdgeVLA action 定义目前仍是计划项，不能说已经实现。第一版倾向使用便于游戏手柄遥操作的末端增量控制，但最终维数、旋转表示、夹爪定义、限幅和频率要在 Day 022 的 schema 冻结及回放测试后确认。如果采用 Franka 关节目标，维数也可能和 7 维末端增量不同。

> [!example] 【大模型标准回答】
> action 没有跨机器人通用的固定“7 维答案”。回答时必须同时说清：
>
> - 控制对象：关节空间还是笛卡尔末端空间；
> - 类型：绝对位置、增量位置、速度、力/力矩或混合控制；
> - 每一维顺序、单位、参考坐标系和夹爪语义；
> - action 频率、单步限幅、工作空间和关节限制；
> - 单步 action 还是 `H×D` 的未来 action chunk。
>
> 一种**示例** 7 维末端 delta 可以定义为：
>
> ```text
> [Δx, Δy, Δz, Δr_x, Δr_y, Δr_z, gripper]
> ```
>
> 其中平移单位为米，旋转应明确是旋转向量/轴角、欧拉角增量还是其他表示，夹爪是连续开度还是离散开合。欧拉角存在周期跳变和奇异性，不能只写“后三维是角度”而不说明约定。

### 归一化的标准流程

1. 只使用训练集计算每一维统计量，并把统计量与数据 revision 一起保存。
2. 按所用模型配方选择 min/max、均值/标准差或分位数范围；不能默认所有 VLA 都使用同一种方法。
3. 连续动作逐维归一化；二值夹爪、padding mask 等离散量单独处理。
4. 推理时用**同一份统计量和 key**反归一化，再做坐标转换、限幅、控制器适配和安全检查。
5. 写 round-trip 单元测试，验证 `unnormalize(normalize(a)) ≈ a`，并检查常量维、越界值和 NaN。

vanilla OpenVLA 的原始配方使用训练数据每一动作维的 q01/q99 作为鲁棒范围，映射后离散到 256 个 bin；推理再用对应数据集统计反归一化。这个细节只适用于该版本/配方，π0/OpenVLA-OFT 或其他策略可能使用不同统计和变换。[OpenVLA 反归一化实现](https://github.com/openvla/openvla/blob/main/prismatic/models/vlas/openvla.py)

如果某维真实范围固定为 `[-0.05 m, 0.05 m]`，且项目明确采用线性 min/max 映射，则：

```text
a_norm = 2 × (a - min) / (max - min) - 1
a      = min + (a_norm + 1) × (max - min) / 2
```

所以 `-0.05 → -1`、`0 → 0`、`0.05 → 1`。但这只是该统计规则下的例子，不是所有模型的默认实现。OpenVLA 官方推理示例也要求通过与数据集匹配的 `unnorm_key` 还原 7-DoF action，说明反归一化是模型—数据契约的一部分。[OpenVLA 官方仓库](https://github.com/openvla/openvla)

### 绝对 action 与 delta action 的取舍

| 类型 | 优点 | 风险 |
|---|---|---|
| 绝对关节/位姿 | 目标明确，不会因不断累加同类 delta 直接漂移 | 强依赖零位、坐标系和标定；跨机器人迁移困难；不连续目标可能造成跳变 |
| delta 关节/位姿 | 适合遥操作的小步修正，数值范围较稳定 | 会累计误差；必须结合当前状态、频率、限幅和边界；坐标系定义不清会方向错误 |

> [!todo] 【完成实证后可替换的回答模板】
> 我采用 `<D>` 维 `<绝对/delta>` action，各维是 `<顺序>`，单位与坐标系是 `<定义>`，控制频率 `<Hz>`。训练统计来自 `<train revision>`，使用 `<归一化方法>`；推理时通过 `<统计文件/key>` 反归一化，并依次执行 `<坐标变换、限幅、滤波/RTC、控制器适配和 watchdog>`。round-trip 与越界测试位于 `<证据>`。

---

## Q07 OpenVLA 的 action 为什么不能直接发给机械臂

### 原问题

> OpenVLA 推理出来的 action 为什么不能直接接机器人 SDK？

> [!success] 【你的当前真实回答】
> 我目前没有部署 OpenVLA。根据其官方接口与机器人控制契约，模型输出仍需匹配训练数据的反归一化、action 语义、坐标系和具体机器人控制接口；真机还必须经过安全层。现阶段我只能讲清设计，不能声称已经在机械臂上解决。

> [!example] 【大模型标准回答】
> 不能直接发 SDK，至少要过以下适配链：

```text
model output
  → decode / unnormalize
  → action-dimension mapping
  → unit and coordinate-frame transform
  → delta/absolute semantic conversion
  → IK or joint/controller adapter
  → workspace, joint, velocity and acceleration limits
  → action-rate / inference-rate reconciliation
  → watchdog, stale-command rejection and emergency stop
  → robot SDK / low-level controller
```

具体风险包括：

- 模型输出按训练数据统计归一化，选错统计 key 会产生错误量级。
- 不同机器人关节数、关节顺序、夹爪语义和 action space 不同。
- 相机、基座、末端工具和世界坐标系之间需要标定与变换。
- 模型可能输出笛卡尔 delta，但 SDK 接受关节位置/速度，需要 IK 与可达性检查。
- 模型推理频率、控制器频率和网络延迟不一致，直接保持或跳变 action 会导致抖动。
- 模型不是安全控制器；仍需限速、限幅、碰撞/奇异位形检查、dead-man、watchdog 和物理急停。

即使 OpenVLA 官方仓库提供 REST 服务示例，它也只解决推理服务接入，不等于完成实时控制与安全闭环。[OpenVLA 官方仓库](https://github.com/openvla/openvla)

---

## Q08 OpenVLA、π0、RT-2、Octo 和 GR00T 有什么区别

> [!success] 【你的当前真实回答】
> 我没有训练过这些模型。理论上我会先区分原始版本的 action 表示和训练目标：RT-2 与原版 OpenVLA 主要把离散化机器人动作映射为 token；原始 π0 增加 action expert，并用 conditional flow matching 生成连续 action chunk；Octo 是开放的 transformer diffusion policy；GR00T N1 面向通用人形机器人，采用高层视觉语言系统与扩散动作模块的双系统设计。真正比较时还要指定版本，因为 OpenVLA 后续的 OFT 等方法已经引入连续 action，不能把整个 OpenVLA 家族永久概括成离散 token。

> [!example] 【大模型标准回答】

| 模型 | 公开版本中的核心输入/条件 | 原始版本的 action 方式 | 面试时的关键边界 |
|---|---|---|---|
| RT-2 | 图像与语言指令 | 将离散机器人 action 写成可由语言 tokenizer 处理的 token 字符串，并与网页视觉语言数据共同微调 | 闭源研究系统；“输出 action token”不等于适配任意机器人 |
| OpenVLA | 图像与语言；具体适配取决于数据与实现 | 原版使用 256-bin 离散 action token；官方示例预测 7-DoF 并按数据集 key 反归一化 | 比较时要说“vanilla OpenVLA”；OFT 等后续方案可使用连续 action |
| π0 | 多路 RGB、语言、proprioceptive state | action expert 对未来连续 action chunk 做 conditional flow matching；原论文任务使用 `H=50` | 连续 chunk 不自动保证真机稳定，仍需数据、频率与安全适配 |
| Octo | 语言或目标图像、观测历史、多种传感器 | transformer-based diffusion policy | 强调开放、可适配新 observation/action space；不是 RT-2 的 token 解码复刻 |
| GR00T N1 | 视觉、语言、机器人状态等 | 双系统架构，高层 VLM 与 diffusion transformer 动作模块结合 | 主要面向通用人形机器人；具体 N1/N1.5/N1.6 版本不能混说 |

官方依据：

- [RT-2 官方论文/介绍](https://deepmind.google/blog/rt-2-new-model-translates-vision-and-language-into-action/)
- [OpenVLA 论文](https://arxiv.org/abs/2406.09246)与[官方仓库](https://github.com/openvla/openvla)
- [π0 原论文](https://www.physicalintelligence.company/download/pi0.pdf)
- [Octo 官方项目](https://octo-models.github.io/)
- [NVIDIA GR00T N1 官方研究页](https://research.nvidia.com/publication/2025-03_nvidia-isaac-gr00t-n1-open-foundation-model-humanoid-robots)

### π0 和 vanilla OpenVLA 最大区别的面试短答

> [!example] 【大模型标准回答】
> vanilla OpenVLA 延续把每个动作维度离散为 token、按自回归方式解码的路线；原始 π0 在 VLM 主干之外增加处理机器人状态与动作的 action expert，用 conditional flow matching 生成连续的未来 action chunk。差异不仅是“连续比离散更平滑”，还包括动作解码目标、模型分支和 chunked control 方式。若比较 OpenVLA-OFT，则必须重新说明，因为 OFT 已不是原版离散 action 配方。

---

## Q09 π0 中的 flow matching 是干什么的

### 原问题

> flow matching 在 π0 里面是干什么的？

> [!success] 【你的当前真实回答】
> 我没有训练过 π0，但从原论文理解，它不是逐个语言 token 预测动作。π0 在当前多相机、语言和机器人状态条件下，对未来 action chunk 学习一个从噪声分布走向真实连续动作分布的向量场；推理时从随机噪声开始，通过数值积分得到连续动作块。

> [!example] 【大模型标准回答】
> π0 要建模的是 `p(A_t | o_t)`，其中 `A_t=[a_t,…,a_{t+H-1}]`。训练时把真实 action chunk 与噪声混合，网络学习条件向量场，使噪声沿该场逐步流向数据动作；推理时从噪声出发，积分该向量场得到整个连续 action chunk。原论文使用 action expert、conditional flow matching loss，并在其任务中使用 10 个 Euler 积分步生成 `H=50` 的动作块。[π0 论文](https://www.physicalintelligence.company/download/pi0.pdf)
>
> 需要纠正一句常见过度简化：flow matching 能表达连续、多模态 action 分布，但**不会自动保证动作平滑、安全或适配某台机器人**。平滑度还受数据、action 表示、chunk 拼接、执行频率、延迟和控制器影响。

---

## Q10 RT-2 的核心思想和局限是什么

### 原问题

> RT-2 的核心思想是什么？这种方式有什么问题？

> [!success] 【你的当前真实回答】
> 我没有训练或部署 RT-2。理论上，RT-2 的关键是把离散机器人动作表示成类似文本的 token，把机器人数据和网页视觉语言数据共同微调到 VLM 中，使模型既保留视觉语言语义能力，又能在机器人任务上输出 action token。

> [!example] 【大模型标准回答】
> RT-2 以 PaLI-X 或 PaLM-E 等 VLM 为主干，把“继续/终止、末端位置增量、旋转增量和夹爪状态”等离散动作编码成 token 字符串，并把网页视觉语言任务与机器人控制数据共同微调。其核心贡献是复用 VLM 的 token 接口和互联网视觉语言知识来支持机器人控制。[Google DeepMind 官方介绍](https://deepmind.google/blog/rt-2-new-model-translates-vision-and-language-into-action/)
>
> 工程上的限制或风险包括：
>
> - 离散化会引入量化误差，尤其要关注精细连续控制。
> - 自回归 token 生成与大模型推理带来延迟，低层仍依赖稳定控制器。
> - action 语义、归一化和机器人本体耦合，不能宣称“直接控制所有机器人”。
> - 训练分布外物体、视角、动力学和控制接口仍可能导致迁移失败。
> - 语义推理能力不等于安全保证，真机必须有独立约束与故障处理。
>
> 这些是从其动作表示与部署链路推导出的工程权衡，不应把每一点都冒充成自己实测过的 RT-2 缺陷。

---

## Q11 你训练时用了多少数据和什么参数

### 原问题

> 你微调了多少条 episode？batch size、学习率、LoRA rank、精度、GPU、训练多久？验证怎样做？

> [!success] 【你的当前真实回答】
> 我目前没有 VLA 微调 run，因此没有属于自己的 episode 数、batch size、学习率、LoRA rank、GPU 时长、action accuracy 或成功率。网上配置和官方示例可以用于制定实验，但我不会当成自己的参数回答。

> [!example] 【大模型标准回答】
> 真做过的人不一定使用相同数字，但应能从配置或日志中立即回答：
>
> - 数据：原始/有效 episode 数、总帧数、任务和物体分布、train/val/test 划分、数据 revision。
> - 模型：base checkpoint、代码 commit、全参/部分参数/LoRA、可训练参数量。
> - 优化：per-device batch、梯度累积、有效 batch、学习率、scheduler、warmup、epoch/step、seed。
> - 资源：GPU 型号与数量、显存、精度、Flash Attention/量化、墙钟时长和费用。
> - 产物：checkpoint、配置、曲线、异常日志、最佳模型选择规则。
> - 评测：冻结任务、独立测试数据、试验次数、成功标准、置信区间或至少成功/失败原始记录。

OpenVLA 官方仓库的 BridgeData V2 **示例**使用 LoRA rank 32、batch 16、梯度累积 1、学习率 `5e-4`，并说明该 batch 约需 72 GB 显存；这只是特定模型、数据、代码版本和硬件下的示例，不是通用“标准参数”。官方还特别提醒，若对模型预训练已包含的数据关闭图像增强，训练 action accuracy 可接近 100%，因此单独拿 action token accuracy 不能证明真实任务有效。[OpenVLA 官方微调说明](https://github.com/openvla/openvla#fine-tuning-openvla-via-lora)

> [!todo] 【完成实证后可替换的回答模板】
> 数据为 `<原始/有效 episode 与帧数>`，版本 `<revision>`，按 `<划分>`。基础模型 `<checkpoint/revision>`，采用 `<LoRA/全参>`，rank `<真实值>`，target modules `<真实配置>`，精度 `<bf16/fp16/fp32>`；per-device batch `<值>`、累积 `<值>`、有效 batch `<值>`、学习率 `<值>`、训练 `<步数/epoch>`。使用 `<GPU>`，耗时 `<墙钟时间>`，产出 `<checkpoint>`。最终不是只看训练 loss，而是在 `<冻结协议>` 下评测 `<N>` 次并保留全部失败记录。

---

## Q12 Pick & Place 中哪些部分是你亲手写的

### 原问题

> 数据生成、模型训练、MuJoCo 仿真还是只调用接口？几个物体、每个物体几次、成功标准和失败原因是什么？怎样证明是你做的？

> [!success] 【你的当前真实回答】
> 我目前还没有完成可展示的 Pick & Place 系统，因此不会回答“已经做了哪些模块”或编造物体数和成功率。EdgeVLA 计划中，我准备亲自实现 MuJoCo Franka 任务环境、键盘/手柄遥操作、Robot I/O 适配、LeRobot 数据录制与回放、ACT/SmolVLA 训练评测、同步质量检查和云端实验管理；每一项只有在 commit、测试和原始日志产生后才会升级为项目经历。

> [!example] 【大模型标准回答】
> 一个可信回答应按“上游—团队—本人”拆分，而不是说“整个系统都是我做的”：
>
| 模块 | 应说明的内容 | 可核验证据 |
|---|---|---|
| 仿真环境 | 使用哪个上游模型；本人新增了任务、观测、动作、reset、随机化还是 wrapper | commit、环境测试、固定 seed 回放 |
| 遥操作与数据 | 键盘/手柄映射、dead-man、采样、时间同步、schema、质量检查 | 映射配置、数据 card、同步报告、回放 hash |
| 模型训练 | 使用上游 ACT/VLA 的哪些代码；本人修改了配置、数据适配、loss 或训练流程中的什么 | 配置、diff、checkpoint、训练日志 |
| 评测 | 本人冻结的成功标准、对象/场景、试验次数、失败分类 | protocol、逐次 trial log、未剪辑或可追溯视频 |
| 部署 | 模型服务、action adapter、安全层、监控或云端平台中的个人实现 | 架构、测试、部署记录、故障注入 |

> 回答“几个物体、每个几次”时必须给**实际数字**。推荐格式是：`<N>` 个训练物体、`<M>` 个未见物体/变化；每个条件 `<K>` 次、固定 seeds；成功定义为 `<抓取—抬升—放置—稳定时长—无碰撞/超时>`。失败至少分成感知/目标选择、抓取、滑落、碰撞、超时、动作越界和同步/系统异常。不能只展示最好的一次 Demo。

> [!todo] 【完成实证后可替换的回答模板】
> 我直接编写了 `<模块与路径>`；复用的上游是 `<项目、版本和许可证>`，AI/同学协助范围是 `<范围>`。评测覆盖 `<N>` 个物体、每个 `<K>` 次，共 `<总数>` 次；成功标准在试验前冻结为 `<标准>`。结果是 `<真实结果>`，失败主要是 `<分类与次数>`。对应 commit `<SHA>`，数据 `<revision>`，报告 `<路径>`。

---

## Q13 3D 抓取模块怎样帮助 VLA

### 原问题

> 如果 VLA 输出动作不稳定，3D 抓取模块怎样帮助它？

> [!success] 【你的当前真实回答】
> 我目前没有完成 3D 抓取或 VLA 融合项目，只能提出系统设计，不能说已经验证。我的思路会把 VLA/VLM 的语义能力和几何、安全约束分层，而不是让不稳定的模型 action 直接进入控制器。

> [!example] 【大模型标准回答】
> 可以构建混合系统：

```text
语言指令 + 图像
  → VLM/VLA 确认目标与高层意图
  → RGB-D/点云估计物体与环境几何
  → 抓取生成器产生候选 grasp pose + confidence
  → 碰撞、可达性、奇异位形与安全约束过滤
  → VLA/规划器选择候选或只输出局部 residual
  → 轨迹规划与低层控制器执行
  → 视觉/力反馈判断是否重规划
```

这样 3D 模块承担几何可达性和候选约束，VLA 负责语义目标、候选选择或局部修正。若 VLA action 越界、低置信或连续失败，可以回退到传统抓取/规划器或请求人工接管。是否真正提升成功率，必须用同一数据、同一任务和消融实验比较 `VLA-only`、`3D-only` 与 `hybrid`。

---

## Q14 3DGS 的输入输出是什么，能否直接用于机器人训练

### 原问题

> GS-Playground 中“图像到 3DGS 资产”的输入和输出是什么？3DGS 资产能直接用于机器人训练吗？还缺什么？

> [!success] 【你的当前真实回答】
> 我目前没有亲手完成 GS-Playground 或 3DGS 机器人资产管线，不能把同学的 3DGS 经历写成我的项目。理论上，原始 3DGS 是视觉场景表示和新视角渲染技术，不是带碰撞、质量、摩擦的物理资产。

> [!example] 【大模型标准回答】
> 原始 3D Gaussian Splatting 通常从**多视角 RGB 图像、相机内外参和由 SfM 得到的稀疏点**开始，优化一组具有位置、各向异性协方差、透明度和颜色/球谐特征的 3D 高斯，输出可实时进行新视角渲染的场景表示。[3DGS 官方项目与论文](https://repo-sam.inria.fr/fungraph/3d-gaussian-splatting/)
>
> 如果某个工具宣称“单图生成 3DGS”，它还使用了单目深度、生成式多视图或其他先验，不能把它和原始多视角 3DGS 管线混为一谈。
>
> 3DGS 资产通常**不能直接作为可靠的机器人物理训练资产**。要进入 MuJoCo/Isaac 等物理仿真，还需要：
>
> - 公制尺度与稳定坐标系；
> - mesh、SDF 或其他 collision geometry；
> - 质量、质心、惯量、摩擦、恢复系数和接触参数；
> - 关节、约束、可动部件与执行器定义；
> - 视觉资产与碰撞资产之间的配准；
> - 对抓取接触、穿透和动力学的实测或仿真验证。
>
> 因此更准确的说法是：3DGS 可以提供高质量视觉外观、视角合成和 Real2Sim 的视觉资产；碰撞和动力学必须由独立几何/物理管线补齐。这个结论是根据原始 3DGS 作为实时辐射场渲染表示的用途作出的工程推论。

---

## Q15 物体移除和空洞补全对机器人有什么用

### 原问题

> 物体移除后做空洞补全有什么用？结果只是视觉上好看，还是几何上也准确？能否用于碰撞检测？

> [!success] 【你的当前真实回答】
> 我没有实现或验证过这类管线。理论上它可以用于生成干净背景、替换物体、构造不同训练场景和视觉数据增强，但不能因画面自然就声称几何正确或可用于碰撞检测。

> [!example] 【大模型标准回答】
> 视觉补全对机器人有三类配套价值：
>
> 1. 生成移除目标后的干净背景，便于重新布置物体和构造场景变化。
> 2. 改变纹理、光照、遮挡和物体组合，用于视觉域随机化与数据增强。
> 3. 为 Real2Sim 或渲染数据提供外观补全，减少被移除物体留下的视觉空洞。
>
> 但视觉一致不等于几何与物理一致。要声称能用于抓取和碰撞检测，必须另有深度/多视图几何验证、尺度标定、mesh/SDF/collision model，以及碰撞和接触测试。否则只能称为“视觉补全”或“渲染资产”，不能称为物理可用场景。

---

## 面试核验证据清单

### 任何“我做过”的最低证据门

| 声明 | 最低证据 | 没有证据时的安全表述 |
|---|---|---|
| 做过 LeRobot 数据采集 | schema、数据 revision、episode 元数据、同步误差、回放测试、失败样本 | 学习过格式/正在设计数据管线 |
| 训练过 ACT | 固定代码与配置、训练日志、checkpoint、独立评测 | 准备复现 ACT，不写训练成果 |
| 微调过 SmolVLA/OpenVLA | base revision、数据、完整超参、GPU 记录、checkpoint、冻结评测 | 阅读过模型与官方微调流程 |
| 完成 MuJoCo Pick & Place | 环境 commit、任务协议、多 seed 原始 trial、simulation 标识 | 正在搭建仿真环境 |
| 完成真实机械臂部署 | 设备与本人权限、安全方案、控制日志、未经剪辑的可追溯评测 | 没有真机部署经验 |
| 做过多相机同步 | 时钟方案、原始 timestamp、误差分布、掉帧与拒绝统计 | 理解同步设计，尚未实证 |
| 做过 3DGS/Real2Sim | 输入数据、相机标定、代码/配置、资产、视觉与几何边界 | 理论了解，不作为个人项目 |
| 做过 world model | 明确 I/O、loss、数据、checkpoint、预测与下游评测 | 没有 world model 训练经验 |

### 面试官可用的 0–2 分核验表

| 维度 | 0 分 | 1 分 | 2 分 |
|---|---|---|---|
| 输入输出 | 只有概念词 | 能说模态和大概 action | 能说字段、维数、单位、坐标系、频率与 chunk |
| 个人贡献 | “我们做了” | 能列本人模块 | 能关联到代码、设计决策、测试和失败修复 |
| 数据 | “采了一些” | 有 episode 数 | 有版本、划分、同步、质量和失败数据 |
| 训练 | “默认参数” | 记得部分超参 | 配置、有效 batch、GPU、耗时、checkpoint 可核验 |
| 评测 | “效果不错” | 有成功率 | 协议先冻结、样本量、失败分类、原始记录齐全 |
| 部署安全 | “接 SDK” | 提到反归一化 | 完整 action adapter、频率协调、限幅、watchdog/急停 |

---

## 原始笔记中需要修正的说法

> [!warning] 这些纠偏很重要

1. **“π0 输出连续动作，所以一定更平滑”不严谨。** Flow matching 建模连续 action chunk，但实际平滑与数据、chunk 衔接、控制频率和控制器有关。
2. **“OpenVLA 就是离散 action”要限定版本。** vanilla OpenVLA 使用 256-bin action token；OpenVLA-OFT 等后续配方可使用连续 action。
3. **LoRA rank 32、batch size、bf16、all-linear 不是通用标准答案。** 只能说自己真实配置；官方示例也只适用于特定版本、数据和硬件。
4. **action token accuracy 不能代替闭环成功率。** 特别是训练数据与预训练数据重合时，高训练准确率可能没有说明力。
5. **`observation_t` 不应机械地配“下一帧 action”。** 应先定义策略语义并测量延迟；action chunk 则显式包含未来序列。
6. **20–30 ms 不是通用同步阈值。** 阈值必须结合采样周期、速度、传感器抖动和控制风险提前冻结。
7. **保存时间不能替代采集时间。** 最好同时保存 device/capture、receive 和 write timestamp，用采集时刻做对齐。
8. **多相机仅靠软件最近邻不是最优同步。** 有条件时优先硬件触发或 PTP；软件对齐必须报告误差。
9. **7 维末端 delta 只是一个 action schema。** Franka 关节控制、灵巧手或其他本体会有不同维数；旋转表示也不能含糊写成“欧拉角”。
10. **3DGS 不是天然的物理场景。** 它擅长视觉渲染；碰撞、质量、摩擦和关节必须另建。
11. **Real2Sim/3DGS 不自动等于 world model。** 世界模型必须明确带条件的未来预测目标和 loss。
12. **“理论会答”不等于“做过项目”。** 当前回答必须保留“未实证”前缀，直到证据门通过。

---

## 你现在可直接使用的 60 秒总回答

> [!success] 【你的当前真实回答】
> 我目前还没有完成真正的 VLA 微调或机械臂真机部署，所以不会把课程、论文理解或上游 Demo 说成项目经验。我的已验证基础在嵌入式 Linux、设备通信、4G 网关和物联网端—边—云系统。现在我正在把这些工程能力迁移到机器人数据和系统方向：先用 MuJoCo Franka 与游戏手柄建立可回放的数据采集链路，明确多相机、状态、action 和 timestamp 的 schema，再做 ACT 基线和 SmolVLA 微调，最终通过冻结协议评测，并用云端平台管理数据、训练和评测任务。完成前我只称它为在建的 simulation-only 作品；完成后我会用数据 revision、checkpoint、逐次评测和失败记录证明具体做了什么。

## 完成 EdgeVLA 后的 90 秒回答骨架

> [!todo] 【完成实证后可替换的回答模板】
> 我完成的是 `<simulation-only/真机>` 的 `<任务>`。输入为 `<相机>`、语言指令和 `<机器人状态>`；action 定义为 `<维数、单位、坐标系、绝对/delta、chunk>`。数据由 `<遥操作方式>` 采集，共 `<episode/帧数>`，以 `<时钟和同步方法>` 对齐，多流最大误差 `<实测值>`，超阈值样本按 `<规则>` 拒绝。我先训练 `<ACT>` 作为基线，再微调 `<SmolVLA/其他模型和 revision>`，使用 `<真实配置和算力>`。评测协议在训练前冻结，覆盖 `<对象、场景、seeds、次数>`，结果 `<实测值>`，主要失败为 `<分类>`。部署时我实现了 `<反归一化、action adapter、限幅、异步/RTC、安全与监控>`。上游负责 `<上游范围>`，我亲自负责 `<个人模块>`；证据可由 `<commit、数据 revision、checkpoint、报告和原始 trial>` 复现。

---

## 官方资料

> [!info] 版本说明
> 本文于 2026-08-24 核对以下论文、官方仓库和 LeRobot v0.6.0 文档。模型快速迭代，面试前应再次确认所讨论的是哪个版本。

1. [OpenVLA 论文](https://arxiv.org/abs/2406.09246)
2. [OpenVLA 官方仓库与微调示例](https://github.com/openvla/openvla)
3. [π0: A Vision-Language-Action Flow Model for General Robot Control](https://www.physicalintelligence.company/download/pi0.pdf)
4. [RT-2: Google DeepMind 官方介绍](https://deepmind.google/blog/rt-2-new-model-translates-vision-and-language-into-action/)
5. [RT-2 论文](https://arxiv.org/abs/2307.15818)
6. [Octo 官方项目](https://octo-models.github.io/)
7. [NVIDIA GR00T N1 官方研究页](https://research.nvidia.com/publication/2025-03_nvidia-isaac-gr00t-n1-open-foundation-model-humanoid-robots)
8. [LeRobotDataset v3 官方文档（v0.6.0）](https://huggingface.co/docs/lerobot/v0.6.0/en/lerobot-dataset-v3)
9. [3D Gaussian Splatting 官方项目与论文](https://repo-sam.inria.fr/fungraph/3d-gaussian-splatting/)

## 使用规则

- 面试前先读每题的 `【你的当前真实回答】`，再学习 `【大模型标准回答】`。
- 只有真正完成实验后，才填写 `【完成实证后可替换的回答模板】` 中的尖括号。
- 每次填写数字都同时写数据/代码/模型版本、样本量、协议和证据路径。
- 对方追问自己没做过的部分时，直接说“我没有亲手做过，下面是我的理解和计划”，不要用术语绕过事实。
- 仿真、真机、上游能力、同学贡献和个人贡献始终分开描述。
