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

globalStyle("#search", {
  position: "relative",
  display: "flex",
  flex: 1,
  minWidth: "50px",
});

globalStyle("#search > span", {
  position: "absolute",
  left: theme.vars.spacing.md,
  top: "50%",
  color: theme.vars.color.text.dim,
  width: theme.vars.text.size.md,
  height: theme.vars.text.size.md,
  transform: "translate(-25%, -50%)",
});

globalStyle("#search svg[role='spin']", {
  animationName: theme.spin,
  animationDuration: "1s",
  animationIterationCount: "infinite",
  animationTimingFunction: "linear",
});

globalStyle("#search input", {
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
