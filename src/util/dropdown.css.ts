import { style } from "@vanilla-extract/css";
import theme from "@/theme";

export const button = style([
  theme.button.base,
  {
    display: "flex",
    alignItems: "center",
    position: "relative",
    fontSize: "14px",
    padding: theme.vars.spacing.sm,
    paddingLeft: `calc(${theme.vars.spacing.sm} + ${theme.vars.spacing.xs})`,
    borderRadius: "8px",
    border: "1px solid transparent",
    paddingRight: `calc(${theme.vars.spacing.lg} + ${theme.vars.spacing.xs})`,
    background: theme.vars.color.background.dim,
    color: theme.vars.color.text.dim,
    fontWeight: 500,
    transition: "border-color 0.1s",
    ":hover": {
      borderColor: theme.vars.color.text.dim,
    },
  },
]);

export const caret = style({
  position: "absolute",
  right: theme.vars.spacing.sm,
});
