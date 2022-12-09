import { globalStyle, style } from "@vanilla-extract/css";
import theme from "@/theme";

export const markdown = style({
  fontSize: "14px",
  lineHeight: "21px",
});

globalStyle(`${markdown} h1`, {
  marginBottom: theme.vars.spacing.md,
  fontSize: theme.vars.text.size.lg,
  fontWeight: 600,
  color: theme.vars.color.text.secondary,
});

globalStyle(`${markdown} p`, {
  marginBottom: theme.vars.spacing.md,
});
