interface ICssTurple {
  prop: string;
  value: string;
}

export type CssTurples = ICssTurple[];

export type CssTurpleProcessor = (css: CssTurples) => CssTurples;

// css是一串css片段，css用;分割，;后面可能有\n
// 比如，css可能是如下片段：
// ```css
// font-family: 'PingFang SC';
// font-size: 14px;
// line-height: 20px;
// letter-spacing: 0.01em;
// ```
// 不会有花括号出现
export type CssParser = (css: string) => CssTurples;

export type CssBuilder = (css: CssTurples) => string;

export interface IMyCssCommand {
  name: string;
  processors: CssTurpleProcessor[];
}
