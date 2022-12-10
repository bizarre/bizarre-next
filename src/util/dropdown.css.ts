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

export const buttonExpanded = style({
  borderColor: theme.vars.color.text.dim,
});

export const container = style({
  position: "relative",
});

export const dropdown = style({
  position: "absolute",
  bottom: `calc(${theme.vars.spacing.sm} * -1)`,
  transform: "translateY(100%)",
  background: theme.vars.color.background.menu,
  borderRadius: "8px",
  minWidth: "100%",
  right: 0,
  zIndex: 99,
  paddingTop: theme.vars.spacing.sm,
  paddingBottom: theme.vars.spacing.sm,
});

export const dropdownItem = style({
  color: theme.vars.color.text.secondary,
  cursor: "pointer",
  padding: theme.vars.spacing.md,
  paddingTop: theme.vars.spacing.sm,
  paddingBottom: theme.vars.spacing.sm,
  transition: "opacity 0.1s",
  ":hover": {
    opacity: 0.5,
  },
});

export const caret = style({
  position: "absolute",
  right: theme.vars.spacing.sm,
});

export const blanket = style({
  position: "fixed",
  width: "100vw",
  height: "100vh",
  left: 0,
  top: 0,
});