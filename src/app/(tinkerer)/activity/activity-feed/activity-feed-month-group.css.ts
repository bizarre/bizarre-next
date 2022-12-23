import { style } from "@vanilla-extract/css";
import theme from "@/theme";

export const section = style({
  width: "100%",
  marginBottom: theme.vars.spacing.sm,
});

export const header = style({
  display: "flex",
  alignItems: "center",
  paddingBottom: theme.vars.spacing.sm,
  userSelect: "none",
  cursor: "default",
});

export const hr = style({
  flex: 1,
  background: theme.vars.color.text.dim,
  height: "2px",
  border: "none",
  display: "block",
});

export const heading = style({
  marginRight: theme.vars.spacing.md,
  fontWeight: 500,
  fontSize: "12px",
});

export const year = style({
  color: theme.vars.color.text.secondary,
});

export const content = style({
  borderLeft: "2px solid",
  borderColor: theme.vars.color.text.dim,
  marginLeft: theme.vars.spacing.sm,
  paddingLeft: theme.vars.spacing.md,
  paddingTop: theme.vars.spacing.sm,
});
