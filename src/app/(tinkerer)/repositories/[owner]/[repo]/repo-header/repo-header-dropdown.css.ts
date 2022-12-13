import { style } from "@vanilla-extract/css";
import theme from "@/theme";

export const item = style({
  display: "flex",
  fontWeight: 500,
  alignItems: "center",
  minWidth: "200px",
});

export const icon = style({
  marginRight: theme.vars.spacing.sm,
  width: "1em",
  height: "1em",
});
