# Game Runtime

Cocos Creator 3.8.8 + TypeScript；编辑器已安装并可启动，当前仍仅提供不依赖编辑器的接口骨架，不是可直接导入的 Cocos 项目。

M1 初始化：使用已锁定的 Creator 3.8.8，先在临时目录通过编辑器创建 2D 工程，再将编辑器生成的 assets、settings、profiles 等必需内容合入本目录，保留现有文档和工作区元数据。不要手写伪造场景、UUID 或 .meta。

src/core 保存引擎无关逻辑；正式 Cocos 组件放 assets/scripts。由 M1 验证编辑器对外部 TypeScript/Shared 的导入，必要时增加单向生成的同步脚本，禁止维护两份可手改的契约。根 typecheck 当前只验证 src，不验证尚未创建的 Cocos 组件。

启动输入为 gameId 与可选 releaseVersion；核心只处理节点、变量与跳转；配置读取、视频、UI、存档、平台实现分别隔离。首款游戏允许读取经 Shared 校验的发布配置，不以 Server API 为前置；实际配置分发方式在 M2 验证后确定。首版本机存档按 gameId/releaseVersion 隔离，不实现账号或跨设备同步。抖音 SDK、微信 SDK 和 Steam SDK 暂无实现。
