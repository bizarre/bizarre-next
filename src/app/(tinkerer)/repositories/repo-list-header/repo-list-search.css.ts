import { keyframes, style } from "@vanilla-extract/css";
import theme from "@/theme";

export const input = style({
  "::placeholder": {
    color: theme.vars.color.text.dim,
  },
  ":hover": {
    borderColor: theme.vars.color.background.dim,
  },
  ":focus": {
    borderColor: theme.vars.color.text.dim,
  },
});
