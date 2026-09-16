/** 仅正常播放结束才 resolve；取消和失败必须 reject。 */
export interface IVideoPlayer { play(url: string): Promise<void>; stop(): void }
