import { style } from "@vanilla-extract/css";
import theme from "@/theme";

export const button = style([
  theme.button.link,
  {
    color: theme.vars.color.text.secondary,
    position: "fixed",
    right: theme.vars.spacing.xl,
    top: theme.vars.spacing.xl,
    transition: "opacity 0.2s",
    ":hover": {
      opacity: 0.5,
    },
  },
]);
