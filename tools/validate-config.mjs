import { readFileSync } from 'node:fs';
import Ajv from 'ajv';

// 先做结构检查，再检查 Schema 无法表达的跨节点引用。
const schema = JSON.parse(readFileSync(new URL('../shared/schemas/game-config.schema.json', import.meta.url), 'utf8'));
const config = JSON.parse(readFileSync(process.argv[2] ?? 'examples/demo-game/game.json', 'utf8'));
const validate = new Ajv({ allErrors: true, strict: false }).compile(schema);
if (!validate(config)) throw new Error(JSON.stringify(validate.errors, null, 2));
const errors = [];
/** 收集重复 ID，避免 Map 静默覆盖数据。 */
function unique(items, label) {
  const ids = new Set();
  for (const item of items) {
    if (ids.has(item.id)) errors.push(`${label} ID 重复：${item.id}`);
    ids.add(item.id);
  }
  return ids;
}
const nodes = unique(config.nodes, '节点');
const assets = unique(config.assets, '素材');
if (!nodes.has(config.startNodeId)) errors.push('起始节点不存在');
/** 条件与赋值必须引用已声明且类型相同的变量。 */
function checkVariable(name, value) {
  if (!Object.hasOwn(config.variables, name)) errors.push(`未知变量：${name}`);
  else if (typeof config.variables[name] !== typeof value) errors.push(`变量类型不匹配：${name}`);
}
for (const node of config.nodes) {
  if (node.type === 'video' && !assets.has(node.videoAssetId)) errors.push(`未知视频：${node.id}`);
  unique(node.choices, `选择 ${node.id}`);
  for (const choice of node.choices) {
    if (!nodes.has(choice.targetNodeId)) errors.push(`未知目标：${choice.targetNodeId}`);
    for (const condition of choice.conditions) checkVariable(condition.variable, condition.value);
    for (const [name, value] of Object.entries(choice.effects)) checkVariable(name, value);
  }
}
const index = new Map(config.nodes.map(node => [node.id, node]));
const reached = new Set();
const pending = [config.startNodeId];
while (pending.length) {
  const id = pending.pop();
  if (reached.has(id) || !index.has(id)) continue;
  reached.add(id);
  pending.push(...index.get(id).choices.map(choice => choice.targetNodeId));
}
for (const node of config.nodes) if (!reached.has(node.id)) errors.push(`不可达节点：${node.id}`);
if (!config.nodes.some(node => node.type === 'ending' && reached.has(node.id))) errors.push('没有可达结局');
if (errors.length) throw new Error(errors.join('\n'));
console.log(`配置验证通过：${config.gameId}，${nodes.size} 个节点（不验证媒体可用性）`);
