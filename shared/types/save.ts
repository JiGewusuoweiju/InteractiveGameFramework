import type { VariableValue } from './game.js';
/** 存档绑定游戏和发布版本；跨版本迁移需显式实现。 */
export interface UserSave { gameId: string; releaseVersion: number; userId: string; nodeId: string; variables: Record<string, VariableValue>; revision: number; updatedAt: string }
