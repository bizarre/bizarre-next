import { style } from "@vanilla-extract/css";
import theme from "@/theme";

export const button = style([
  theme.button.link,
  theme.transitionColor,
  {
    color: theme.vars.color.text.secondary,
  },
]);
