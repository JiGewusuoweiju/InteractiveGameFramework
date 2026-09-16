import type { GameConfig } from './game.js';
/** 公开配置接口的计划响应；实际路由尚未实现。 */
export interface GameConfigResponse { data: GameConfig }
export interface ApiError { error: { code: string; message: string } }
