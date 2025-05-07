import { CssTurpleProcessor } from "../../types";
import { convertPxToRem } from "../textHelpers/convertPxToRem";

export const px2rem: CssTurpleProcessor = (css) => {
  return css.map(({ prop, value }) => {
    // 如果value中含有px，则转化为rem，
    if (value.includes("px")) {
      value = convertPxToRem(value); // 改用独立函数处理
    }
    return { prop, value };
  });
};
