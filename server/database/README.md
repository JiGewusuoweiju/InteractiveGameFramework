# PostgreSQL 设计草案

尚无迁移文件，不能据此声称数据库可用。M5 选择 ORM/迁移工具后实现并测试；玩家账号/跨设备存档相关表是未来设计草案，须待产品决定后实施：

| 表 | 关键字段与约束 |
| --- | --- |
| games | id、title、status、current_release_version |
| game_drafts | game_id 唯一、config JSONB、editor_layout JSONB、revision |
| game_releases | (game_id, version) 唯一、config JSONB、created_at，发布后不可变 |
| media_assets | id、game_id、object_key、mime、size、checksum、status |
| users | 内部 UUID 主键 |
| platform_accounts | user_id、platform、app_id、subject，后三项唯一 |
| user_saves | (user_id, game_id, release_version) 唯一、node_id、variables JSONB、revision |
| admin_users | 独立管理身份与角色，不能混用玩家权限 |

跨游戏关联必须验证 game_id。发布事务写入快照并更新指针；存档采用 revision 乐观并发检查，冲突返回 409。管理员授权、数据库约束与请求校验共同保障隔离。身份绑定必须验证双方身份。
