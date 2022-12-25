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

export const container = style({
  position: "relative",
  display: "flex",
  flex: 1,
  minWidth: "50px",
});

export const icon = style({
  position: "absolute",
  left: theme.vars.spacing.md,
  top: "50%",
  color: theme.vars.color.text.dim,
  width: theme.vars.text.size.md,
  height: theme.vars.text.size.md,
  transform: "translate(-25%, -50%)",
});

export const spinner = style({
  animationName: theme.spin,
  animationDuration: "1s",
  animationIterationCount: "infinite",
  animationTimingFunction: "linear",
});

export const input = style({
  background: theme.vars.color.background.dark,
  padding: theme.vars.spacing.sm,
  paddingLeft: theme.vars.spacing.lg,
  color: theme.vars.color.text.primary,
  outline: "none",
  borderRadius: "8px",
  border: "1px solid transparent",
  flex: "1",
  transition: "border-color 0.1s",
  "::placeholder": {
    color: theme.vars.color.text.dim,
  },
  ":hover": {
    borderColor: theme.vars.color.background.dim,
  },
  ":focus": {
    borderColor: theme.vars.color.text.dim,
  },
  fontSize: "1em",
  minWidth: "50px",
});
