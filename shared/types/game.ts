/** 配置值限定为标量，禁止携带可执行脚本。 */
export type VariableValue = string | number | boolean;
export interface Condition { variable: string; operator: 'eq' | 'neq'; value: VariableValue }
export interface StoryChoice { id: string; text: string; targetNodeId: string; conditions: Condition[]; effects: Record<string, VariableValue> }
export interface StoryNode { id: string; type: 'video' | 'ending'; text: string; videoAssetId?: string; choices: StoryChoice[] }
export interface MediaAsset { id: string; kind: 'video'; url: string }
/** 发布版本为正整数；schemaVersion 表示数据格式版本。 */
export interface GameConfig { schemaVersion: 1; gameId: string; title: string; releaseVersion: number; startNodeId: string; theme: string; variables: Record<string, VariableValue>; assets: MediaAsset[]; nodes: StoryNode[] }
