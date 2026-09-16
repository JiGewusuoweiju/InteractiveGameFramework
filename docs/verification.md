# 验证记录

日期：2026-09-08。

- Node.js v24.14.0；npm 安装成功，包含 package-lock.json。
- npm run check 通过：TypeScript、演示 JSON Schema/引用检查、17 项目录检查。
- 负向校验通过：缺失目标节点、变量类型错误、重复节点 ID 均被拒绝。
- 开发服务 GET /health 返回 200 与 skeleton；未实现的配置路由返回 404。
- ZIP 文件逐项校验并执行 CRC 完整性检查，不含 node_modules。

未验证：Cocos 编辑器导入、视频播放、后台 UI、数据库、真实上传发布、抖音/微信/Steam 真机。这些业务尚未实现。

## 2026-09-09 开发环境

- macOS 26.0.1，Apple Silicon arm64。
- Cocos Creator 3.8.8 安装于 `/Applications/CocosCreator.app`；版本、arm64 架构、Developer ID 签名和启动已验证。
- Cocos Dashboard 2.2.1 安装于 `/Applications/CocosDashboard.app`；磁盘镜像、版本、arm64 架构、Apple 公证和启动已验证。
- 抖音开发者工具 4.5.6 arm64 安装于 `/Applications/抖音开发者工具.app`；磁盘镜像、版本、arm64 架构、Apple 公证和启动已验证。
- 项目 npm 使用 `https://registry.npmjs.org/`；已移除锁文件内 37 条失效 JD 镜像 `resolved` 字段。`npm ci` 安装成功，审计为 0 个漏洞；`npm run check` 通过。
- 未登录 Cocos 或抖音账号，未创建/导入 Cocos 工程，未执行真机测试。

## 2026-09-16 计划调整

- 根据首款正式剧情游戏优先、本机存档优先的产品决定，核对 ROADMAP、状态文件、决策日志与模块文档；未改变里程碑完成状态。
- `npm run check` 通过：TypeScript、示例配置和 17 项目录检查。示例仍仅有 2 个节点且视频不可播放，不构成 M1/M4 验收。
- 当前工程目录未检测到 Git 工作树；版本控制/备份位置待确认。未执行 Cocos、视频或真机验证。

## 2026-09-16 GitHub SSH 准备

- 已在本机生成 Ed25519 密钥对；私钥权限为 600，公钥权限为 644，指纹为 `SHA256:PSWwOPuPTVBC8dh3A7QlER22GrLzhCDM0c7nEkvfjoM`。未将私钥写入工程。
- 尚未将公钥添加到 GitHub，未完成 GitHub SSH 认证测试；当前项目仍未初始化 Git。

## 2026-09-16 GitHub SSH 认证

- 用户已将公钥加入 GitHub；使用本机 Ed25519 密钥执行 `ssh -T`，收到 `Hi JiGewusuoweiju! You've successfully authenticated`。GitHub 不提供 shell，命令退出码 1 是该测试的正常结果。
- 仅验证账号 SSH 认证；尚未初始化当前目录、连接远程仓库或推送代码。
