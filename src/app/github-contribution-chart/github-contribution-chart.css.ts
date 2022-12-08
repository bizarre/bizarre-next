import { style } from "@vanilla-extract/css";
import theme from "@/theme";

export const heading = style({
  color: theme.vars.color.text.dim,
  marginBottom: theme.vars.spacing.md,
  fontSize: theme.vars.text.size.md,
  fontWeight: 500,
});

export const headingFocus = style({
  color: theme.vars.color.text.secondary,
});
