import { style } from "@vanilla-extract/css";
import theme from "@/theme";

export const readmeHeading = style({
  fontSize: theme.vars.text.size.sm,
  fontWeight: 600,
  color: theme.vars.color.text.dim,
  userSelect: "none",
  cursor: "default",
  marginBottom: theme.vars.spacing.sm,
});

export const content = style({
  marginTop: theme.vars.spacing.md,
});
