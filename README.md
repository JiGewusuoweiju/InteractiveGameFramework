# InteractiveGameFramework

可配置互动影像游戏框架的 AI 开发工程骨架。游戏是配置、素材与流程的组合，核心代码不包含任何具体游戏。

## 当前可用范围

已提供：工作区配置、TypeScript 数据契约、JSON Schema、演示配置、平台与视频接口、后台编辑模型、后端健康检查入口、开发文档和验证工具。
尚未提供：可直接打开的 Cocos 编辑器项目、可操作的后台页面、视频上传、数据库连接、登录、发布服务和真机适配。目录存在不代表功能完成。

## 开始使用

1. 让开发 AI 读取根目录 AGENTS.md，再读取项目状态文件。
2. 使用 Node.js 22 或更新版本和 npm，在根目录执行 `npm ci`。
3. 执行 `npm run check`，验证 TypeScript、示例配置与目录。
4. 执行 `npm run dev:server`，访问 http://127.0.0.1:3000/health ，仅返回骨架健康状态。
5. 按 TODO.md 推进 M1；Cocos 初始化见 game-client/README.md。

已包含 package-lock.json，使用 npm ci 按锁定版本安装。本交付不捆绑第三方依赖。

## 目录

| 目录 | 职责 |
| --- | --- |
| game-client | Game Runtime，Cocos Creator + TypeScript，抖音优先 |
| admin-web | Admin Studio，Web 配置后台，UI 框架待选 |
| server | Game Server，Node.js + TypeScript + PostgreSQL |
| shared | 三端共用类型、Schema 与常量 |
| game-data | 游戏数据规范、草稿和发布产物说明 |
| examples/demo-game | 唯一演示游戏配置，无真实视频 |
| docs | 架构、协议、编辑器、发布、平台与验收说明 |
| tools | 类型/配置/目录验证工具 |
| assets-local | 本地大型素材目录，不进入版本控制 |

服务入口仅用于开发验证，不是生产服务。完整开发验收见 docs/acceptance.md。
