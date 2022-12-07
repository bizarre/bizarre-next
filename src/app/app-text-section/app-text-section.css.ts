import { style } from "@vanilla-extract/css";
import theme from "@/theme";

export const title = style({
  color: theme.vars.color.text.secondary,
  marginBottom: theme.vars.spacing.sm,
  fontSize: theme.vars.text.size.md,
});
export const section = style({});

export const paragraph = style({
  fontSize: "14px",
  lineHeight: theme.vars.text.size.lg,
  fontWeight: 400,
});
