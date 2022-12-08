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
  marginBottom: theme.vars.spacing.xl,
  /* @ts-expect-error */
  "-webkit-user-drag": "none",
});

export const active = style({
  ":after": {
    position: "absolute",
    top: `calc(${theme.vars.spacing.md} * -1 - 2px)`,
    left: `calc(${theme.vars.spacing.md} * -1 - 2px)`,
    width: `calc(100% + (${theme.vars.spacing.md} * 2))`,
    height: `calc(100% + (${theme.vars.spacing.md} * 2))`,
    content: "''",
    border: "1px solid",
    borderColor: "inherit",
    borderRadius: theme.vars.spacing.sm,
    pointerEvents: "none",
    opacity: 0.5,
  },
  ":hover": {
    borderColor: theme.vars.color.text.dim,
    transform: "scale(1.01)",
  },
});

export const selected = style({
  borderColor: theme.vars.color.text.dim,
  cursor: "default",
  ":after": {
    opacity: 1,
  },
  transform: "scale(1.01)",
});

export const selectedNotReady = style({
  borderColor: theme.vars.color.text.dim,
  cursor: "default",
});

export const loading = style({
  opacity: 0.5,
});
