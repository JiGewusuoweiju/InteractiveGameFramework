import type { UserSave } from '../../../shared/index.js';
/** 本地与云端分别实现；用户、游戏与发布版本共同隔离存档。 */
export interface ISaveStore {
  load(userId: string, gameId: string, releaseVersion: number): Promise<UserSave | null>;
  save(value: UserSave): Promise<void>;
}
