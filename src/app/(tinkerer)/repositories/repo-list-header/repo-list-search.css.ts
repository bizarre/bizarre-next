import { keyframes, style } from "@vanilla-extract/css";
import theme from "@/theme";

export const input = style({
  background: theme.vars.color.background.dark,
  padding: theme.vars.spacing.sm,
  paddingLeft: theme.vars.spacing.lg,
  color: theme.vars.color.text.primary,
  outline: "none",
  borderRadius: "8px",
  border: "1px solid transparent",
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
});

export const container = style({
  position: "relative",
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

const spin = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
});

export const spinner = style({
  animationName: spin,
  animationDuration: "1s",
  animationIterationCount: "infinite",
  animationTimingFunction: "linear",
});
