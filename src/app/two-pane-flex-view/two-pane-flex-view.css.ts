import { style } from "@vanilla-extract/css";
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
