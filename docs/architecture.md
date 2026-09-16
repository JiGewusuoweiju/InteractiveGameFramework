# 架构与数据流

首款游戏：人工维护配置 → Shared 校验 → 可追溯版本 → Game Runtime；视频通过 M2 真机验证后的方式分发，本机存档按 gameId/releaseVersion 隔离。具体配置/视频分发方案尚未确定，不能把 Server API 或后台当作已实现依赖。

后续框架：Admin Studio → Game Server → PostgreSQL（元数据、草稿、版本；跨设备存档待决定）
后续框架：Admin Studio → 签名上传 → 对象存储 → 校验/处理 → CDN
后续框架：Game Runtime → Game Server（按 gameId 获取发布快照）→ 素材 URL → 视频播放

Shared 被三端引用，不能反向依赖应用。Runtime core 不依赖 Cocos 或平台 SDK；Cocos 组件处理显示与输入，platform/video/save/network 负责外部能力。

后台管理多个游戏不等于一个小游戏包能任意切换商业游戏。各平台应用与 gameId 的映射在发布部署中管理，必须在正式发布前核对平台要求。

后续 Server 首版为单服务、单数据库。首款游戏上线不要求该服务。暂不引入微服务、消息总线、通用插件、多人实时玩法或 AI 视频生成 API。
