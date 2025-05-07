import { px2remBase } from "../../constans/px2remBase";

export const convertPxToRem = (str: string): string => {
  return str.replace(/(\d+)px/g, (_, p1) => `${p1 / px2remBase}rem`);
};
