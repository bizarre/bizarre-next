import { style, globalStyle } from "@vanilla-extract/css";
import theme, { vars } from "@/theme";

export const body = style([
  theme.transitionColor,
  {
    background: vars.color.background.primary,
    color: vars.color.text.primary,
    overflowX: "hidden",
  },
]);

globalStyle("input[type='search']", {
  background: theme.vars.color.background.dark,
  padding: theme.vars.spacing.sm,
  paddingLeft: theme.vars.spacing.lg,
  color: theme.vars.color.text.primary,
  outline: "none",
  borderRadius: "8px",
  border: "1px solid transparent",
  flex: "1",
  transition: "border-color 0.1s",
  fontSize: "1em",
  minWidth: "50px",
});
