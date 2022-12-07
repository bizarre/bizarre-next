import { style } from "@vanilla-extract/css";
import theme, { vars } from "@/theme";

export const body = style([
  theme.transitionColor,
  {
    background: vars.color.background.primary,
    color: vars.color.text.primary,
  },
]);
