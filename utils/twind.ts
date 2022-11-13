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
      babyPowder: "#FFFCF9",
      ultraRed: "#FFB5BD",
      persianIndigo: "#340068",
      celeste: "#B1EDE8",
    },
  },
};
if (IS_BROWSER) setup(config);
