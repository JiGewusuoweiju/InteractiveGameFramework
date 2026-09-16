# Game Server

技术路线：Node.js + TypeScript + PostgreSQL。按新路线图在 M5 完善，不是首款游戏上线前置。当前只有开发健康检查入口，无数据库连接，无业务 API，无认证，不可生产部署。

根目录 `npm run dev:server` 启动到 127.0.0.1:3000；PORT 可覆盖端口。`GET /health` 返回 skeleton 状态，其余返回 404。

src/auth、user、save、story、games、media、publish 为待实现模块；数据库设计见 database/README.md。M5 选定服务框架与 ORM 后再编写迁移，不提前搭建复杂基础设施。玩家账号与跨设备存档须先另行决定，不能由目录存在推断为首版需求。

.env.example 仅列出未来接入项，目前 main.ts 只读取 PORT，且不自动加载 .env。
