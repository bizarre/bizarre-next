import { globalStyle, style } from "@vanilla-extract/css";
import theme from "@/theme";

export const heading = style({
  fontSize: theme.vars.text.size.lg,
  fontWeight: 500,
  color: theme.vars.color.text.secondary,
  marginBottom: theme.vars.spacing.sm,
});

export const toolbar = style({
  display: "flex",
});

globalStyle(`${toolbar} > *`, { marginRight: theme.vars.spacing.sm });
