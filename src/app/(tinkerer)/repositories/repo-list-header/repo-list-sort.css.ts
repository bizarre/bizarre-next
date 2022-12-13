import { style } from "@vanilla-extract/css";
import theme from "@/theme";

export const item = style({
  minWidth: "150px",
  fontWeight: "500",
  color: theme.vars.color.text.dim,
  display: "flex",
  alignItems: "center",
});

export const selected = style({
  color: theme.vars.color.text.primary,
});

export const itemHeader = style({
  position: "relative",
  color: theme.vars.color.text.primary,
  paddingBottom: theme.vars.spacing.md,
  ":after": {
    borderBottom: "1px solid",
    borderColor: theme.vars.color.text.dim,
    position: "absolute",
    left: `calc(${theme.vars.spacing.md} * -1)`,
    top: 0,
    width: `calc(100% + ${theme.vars.spacing.md} * 2)`,
    height: "100%",
    content: "''",
    opacity: 0.2,
  },
});

export const icon = style({
  width: "1em",
  height: "1em",
  marginRight: theme.vars.spacing.sm,
});

export const status = style({
  fontSize: "10px",
  width: theme.vars.spacing.md,
  height: theme.vars.spacing.md,
  background: theme.vars.color.background.dim,
  borderRadius: "100%",
  marginLeft: "auto",
  selectors: {
    [`${selected} &`]: {
      background: theme.vars.color.text.secondary,
    },
  },
});

export const order = style({
  width: theme.vars.spacing.md,
  height: theme.vars.spacing.md,
  marginLeft: "auto",
});

export const flipped = style({
  transform: "rotate(180deg)",
});
