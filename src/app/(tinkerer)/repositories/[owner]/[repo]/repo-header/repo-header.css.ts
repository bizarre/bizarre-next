import { style } from "@vanilla-extract/css";
import theme from "@/theme";

export const header = style({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  alignItems: "center",
  fontSize: "14px",
});

export const title = style({
  fontSize: theme.vars.text.size.lg,
  fontWeight: 500,
  color: theme.vars.color.text.dim,
  marginRight: theme.vars.spacing.sm,
});

export const titleRepo = style({
  color: theme.vars.color.text.primary,
});

export const description = style({
  minWidth: "100%",
  marginTop: theme.vars.spacing.md,
  lineHeight: "20px",
});

export const stats = style({
  display: "flex",
  userSelect: "none",
  cursor: "default",
});

export const languageBlob = style({
  fontSize: "10px",
  width: theme.vars.spacing.md,
  height: theme.vars.spacing.md,
  borderRadius: "100%",
  content: "''",
  display: "inline-block",
  marginRight: theme.vars.spacing.sm,
});

export const stat = style({
  display: "flex",
  alignItems: "center",
  fontWeight: 500,
  color: theme.vars.color.text.secondary,
  marginRight: theme.vars.spacing.md,
});

export const icon = style({
  fontSize: "14px",
  width: "1em",
  height: "1em",
  marginRight: theme.vars.spacing.xs,
});

export const headerLeft = style({
  display: "flex",
  alignItems: "center",
});
