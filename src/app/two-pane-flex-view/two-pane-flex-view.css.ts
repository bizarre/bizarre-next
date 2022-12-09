import { style, globalStyle } from "@vanilla-extract/css";
import theme from "@/theme";

export const container = style({
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  paddingTop: theme.vars.spacing.xl,
});

export const pane = style({
  width: "500px",
  transform: "translateZ(0)",
});

export const content = style({
  maxWidth: "0px",
  opacity: 0,
  transition: "max-width 0.5s, opacity 1s",
  marginLeft: theme.vars.spacing.xxl,
});

export const contentExpanded = style({
  opacity: 1,
  maxWidth: "500px",
});

globalStyle(`${content} > *`, {
  minWidth: "500px",
});
