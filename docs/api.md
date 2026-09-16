# API 规划（除健康检查外均未实现；非首款游戏上线前置）

玩家账号及跨设备存档接口是未来候选能力，须在产品决定与本机旧档迁移策略明确后实施；表内路径不表示已列入首款游戏或 M5 的默认验收。

JSON 响应采用 `{ data: ... }` 或 `{ error: { code, message } }`。服务端必须认证授权并验证输入，不能信任客户端传入 userId。

| 方法与路径 | 用途 | 权限 |
| --- | --- | --- |
| GET /health | 骨架状态（已实现，不使用 data 包装） | 本地开放 |
| POST /api/auth/platform | platform + appId + credential 换内部会话 | 校验平台凭证 |
| GET /api/games/:gameId/config | 获取当前正式配置；可用 releaseVersion 查询旧版 | 玩家读取策略待定 |
| GET /api/games/:gameId/save?releaseVersion=N | 当前用户存档 | 玩家认证 |
| PUT /api/games/:gameId/save | nodeId、variables、releaseVersion、revision | 玩家认证 |
| POST /api/admin/games | 创建游戏 | 管理员 |
| GET/PUT /api/admin/games/:gameId/draft | 读取/修改草稿与布局 | 管理员 |
| POST /api/admin/games/:gameId/media/upload | 获取短时上传凭据 | 管理员 |
| POST /api/admin/games/:gameId/media/:assetId/complete | 触发素材验证 | 管理员 |
| POST /api/admin/games/:gameId/validate | 结构、引用和素材校验 | 管理员 |
| POST /api/admin/games/:gameId/releases | 发布指定 draftRevision，附幂等键 | 管理员 |
| GET /api/admin/games/:gameId/releases | 发布历史 | 管理员 |

计划错误码：400 输入不合法，401 未认证，403 无权限，404 不存在，409 revision 冲突，422 配置不可发布。草稿字段与完整请求 Schema 在对应业务实现时补齐，不将规划当作已上线接口。
