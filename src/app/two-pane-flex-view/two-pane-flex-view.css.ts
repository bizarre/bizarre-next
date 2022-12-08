import { style, globalStyle } from "@vanilla-extract/css";
import theme from "@/theme";

export const container = style({
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  paddingTop: theme.vars.spacing.xxl,
});

export const pane = style({
  width: "500px",
});

export const content = style({
  maxWidth: "0px",
  opacity: 0,
  transition: "max-width 1s, opacity 1s",
  transform: "translateZ(0)",
  marginLeft: theme.vars.spacing.lg,
});

export const contentExpanded = style({
  opacity: 1,
  maxWidth: "500px",
});
