/** 各平台实现身份凭证获取；由服务端换取内部用户身份。 */
export interface IPlatform {
  readonly name: 'douyin' | 'wechat' | 'steam';
  getLoginCredential(): Promise<{ credential: string }>;
}
