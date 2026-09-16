import type { GameConfig } from '../../../shared/index.js';
/** 画布布局独立于游戏配置，节点删除时同步清理对应坐标。 */
export interface EditorDraft { config: GameConfig; positions: Record<string, { x: number; y: number }>; revision: number }
