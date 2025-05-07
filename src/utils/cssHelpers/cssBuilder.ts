import { CssBuilder } from "../../types";

export const cssBuilder: CssBuilder = (css) => {
  return css.map(({ prop, value }) => `${prop}: ${value};`).join("\n");
};
