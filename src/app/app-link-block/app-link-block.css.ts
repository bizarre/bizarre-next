import { style } from "@vanilla-extract/css";
import theme from "@/theme";

export const block = style({
  display: "block",
  textDecoration: "none",
  transition: "all 0.2s",
  color: "inherit",
  borderColor: "transparent",
  position: "relative",
  marginTop: theme.vars.spacing.lg,
  /* @ts-expect-error */
  "-webkit-user-drag": "none",
});

export const active = style({
  ":after": {
    position: "absolute",
    top: `calc(${theme.vars.spacing.md} * -1)`,
    left: `calc(${theme.vars.spacing.md} * -1)`,
    width: `calc(100% + (${theme.vars.spacing.md} * 2))`,
    height: `calc(100% + (${theme.vars.spacing.md} * 2))`,
    content: "''",
    border: "1px solid",
    borderColor: "inherit",
    borderRadius: theme.vars.spacing.sm,
    pointerEvents: "none",
  },
  ":hover": {
    borderColor: theme.vars.color.text.dim,
    transform: "scale(1.01)",
  },
});
