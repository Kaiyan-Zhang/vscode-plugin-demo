import postcss from "postcss";
import { CssParser, CssTurples } from "../../types";

// css是一串css片段，css用;分割，;后面可能有\n
// 比如，css可能是如下片段：
// ```css
// font-family: 'PingFang SC';
// font-size: 14px;
// line-height: 20px;
// letter-spacing: 0.01em;
// ```
// 不会有花括号出现
export const cssParser: CssParser = (css) => {
  const ret: CssTurples = [];
  postcss.parse(`myclass{${css}}`).walkDecls(({ prop, value }) => {
    ret.push({ prop, value });
  });
  return ret;
};
