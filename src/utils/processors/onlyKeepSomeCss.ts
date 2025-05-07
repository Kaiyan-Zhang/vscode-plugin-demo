import { cssPropsOnlyKeep } from "../../constans/cssPropsOnlyKeep";
import { CssTurpleProcessor } from "../../types";

export const onlyKeepSomeCss: CssTurpleProcessor = (css) => {
  return css
    .filter((item) => {
      return cssPropsOnlyKeep.includes(item.prop);
    })
    .filter(Boolean);
};
