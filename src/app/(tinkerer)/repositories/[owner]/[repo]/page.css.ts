import { style } from "@vanilla-extract/css";
import theme from "@/theme";

export const readmeHeading = style({
  fontSize: theme.vars.text.size.sm,
  fontWeight: 600,
  color: theme.vars.color.text.dim,
  userSelect: "none",
  cursor: "default",
  marginTop: theme.vars.spacing.lg,
  marginBottom: theme.vars.spacing.sm,
});

export const content = style({
  maxHeight: "calc(100vh - 300px)",
  overflowY: "scroll",
  paddingRight: theme.vars.spacing.sm,
});
