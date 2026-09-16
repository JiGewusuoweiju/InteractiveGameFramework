# 配置格式 v1

唯一 Schema：shared/schemas/game-config.schema.json。类型：shared/types/game.ts。

- schemaVersion：数据格式版本，当前为 1。
- gameId：游戏标识；releaseVersion：不可变发布版本的正整数。
- startNodeId：起始节点；theme：主题标识，第一版由客户端限定支持集合。
- variables：初始标量变量，允许 string、number、boolean；不允许任意脚本。
- assets：视频 ID 与 HTTPS URL；示例使用不可播放占位地址。
- nodes：video 节点必须有素材和至少一个选择；ending 节点没有视频和选择。
- conditions：全部满足才展示选择，空数组表示无条件。eq/neq 为严格同类型比较。
- effects：玩家确认选择后原子赋值，再进入 targetNodeId；禁止声明之外的变量或改变变量类型。

v1 的视频节点在播放完毕后等待选择，没有自动跳转、定时选择或任意表达式。无可用选择时必须展示配置错误与重试/退出，不能悄悄跳转。

工具校验 JSON 结构、ID 唯一、素材/节点/变量引用、值类型、可达节点与结局存在性。不证明所有变量组合都可通关；需 Runtime 场景测试。发布前另验证真实素材可用性、归属、处理状态与游戏状态。
