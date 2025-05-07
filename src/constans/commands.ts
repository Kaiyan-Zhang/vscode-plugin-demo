import { IMyCssCommand } from "../types";
import { onlyKeepSomeCss } from "../utils/processors/onlyKeepSomeCss";
import { px2rem } from "../utils/processors/px2rem";
import { removeDefaultValue } from "../utils/processors/removeDefaultValue";

const commonProcessors = [onlyKeepSomeCss, removeDefaultValue];

export const commands: IMyCssCommand[] = [
  {
    name: "fe_h5_music_figma_css_paste",
    processors: [...commonProcessors, px2rem],
  },
  {
    name: "music_storm_fe_figma_css_paste",
    processors: [...commonProcessors],
  },
];
