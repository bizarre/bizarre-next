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
  alignItems: "center",
});

globalStyle(`${toolbar} > *:not(:last-of-type)`, {
  marginRight: theme.vars.spacing.sm,
});

export const input = style({
  background: theme.vars.color.background.dark,
  padding: theme.vars.spacing.sm,
  paddingLeft: theme.vars.spacing.lg,
  color: theme.vars.color.text.primary,
  outline: "none",
  borderRadius: "8px",
  border: "1px solid transparent",
  flex: "1",
  transition: "border-color 0.1s",
  "::placeholder": {
    color: theme.vars.color.text.dim,
  },
  ":hover": {
    borderColor: theme.vars.color.background.dim,
  },
  ":focus": {
    borderColor: theme.vars.color.text.dim,
  },
  fontSize: "1em",
  minWidth: "50px",
});