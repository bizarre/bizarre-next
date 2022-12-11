import { keyframes, style } from "@vanilla-extract/css";
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

const pulse = keyframes({
  "0%": {
    opacity: 0.3,
  },
  "100%": {
    opacity: 0.75,
  },
});

export const loading = style({
  animationName: pulse,
  animationDuration: "1s",
  animationIterationCount: "infinite",
  animationTimingFunction: "linear",
  borderColor: theme.vars.color.text.dim,
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
    opacity: 0.5,
  },
  selectors: {
    [`&:not(${loading}):hover`]: {
      borderColor: theme.vars.color.text.dim,
      transform: "scale(1.01)",
    },
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
  ":hover": {
    transform: "none",
  },
});

export const wrapper = style({
  position: "relative",
});

export const link = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
});
