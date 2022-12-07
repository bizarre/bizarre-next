import { style } from "@vanilla-extract/css";
import theme from "@/theme";

export const list = style({
  display: "flex",
  marginTop: theme.vars.spacing.xs,
});

export const item = style({
  marginRight: theme.vars.spacing.xs,
  fontSize: theme.vars.text.size.sm,
  textDecoration: "none", 
  fontWeight: 400,
  cursor: "pointer",
  transition: "opacity 0.2s",
  ":hover": {
    opacity: 0.5,
  },
});

export const focus = style([
  item,
  {
    textDecoration: "underline",
  },
]);
