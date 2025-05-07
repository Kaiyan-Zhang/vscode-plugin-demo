import { defaultCssValues } from "../../constans/defaultCssValues";
import { CssTurpleProcessor } from "../../types";

export const removeDefaultValue: CssTurpleProcessor = (css) => {
  return css.filter(({ prop, value }) => {
    // 使用配置常量进行判断
    if (prop in defaultCssValues) {
      // 添加类型断言解决TS报错
      if (value === defaultCssValues[prop as keyof typeof defaultCssValues]) {
        return false;
      }
    }
    return true;
  });
};
