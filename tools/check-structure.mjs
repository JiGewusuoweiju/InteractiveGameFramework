import { existsSync } from 'node:fs';

// 按工具位置定位工程根目录，避免调用目录影响结果。
const root = new URL('../', import.meta.url);
const required = ['AGENTS.md', 'PROJECT_CONTEXT.md', 'ROADMAP.md', 'PROGRESS.md', 'DECISIONS.md', 'TODO.md', 'CHANGELOG.md', 'README.md', '.gitignore', 'game-client', 'admin-web', 'server', 'shared', 'docs', 'tools', 'game-data', 'examples/demo-game/game.json'];
for (const path of required) if (!existsSync(new URL(path, root))) throw new Error(`缺少：${path}`);
console.log(`目录检查通过：${required.length} 项`);
