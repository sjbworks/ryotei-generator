import { Options } from "$fresh/plugins/twind.ts";
import * as colors from "twind/colors";

export default {
  selfURL: import.meta.url,
  theme: {
    colors: {
      black: colors.black,
      gray: colors.gray,
      white: colors.white,
      transparent: "transparent",
      red: colors.red,
      orange: "#ffad53",
      darkOrange: "#cc8b43",
      green: colors.green,
      warmGray: colors.warmGray,
      rose: colors.rose,
      blueGray: colors.blueGray,
      babyPowder: "#FFFCF9",
      ultraRed: "#ffad53",
      persianIndigo: "#A7A284",
      morningBlue: "#9caba1",
      celeste: "#B1EDE8",
    },
  },
  darkMode: "class",
} as Options;
