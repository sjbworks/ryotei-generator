import { IS_BROWSER } from "$fresh/runtime.ts";
import { Configuration, setup } from "twind";
import * as colors from "twind/colors";

export * from "twind";

export const config: Configuration = {
  darkMode: "class",
  mode: "silent",
  theme: {
    colors: {
      orange: colors.orange,
      green: colors.green,
      warmGray: colors.warmGray,
      rose: colors.rose,
      blueGray: colors.blueGray,
    },
  },
};
if (IS_BROWSER) setup(config);
