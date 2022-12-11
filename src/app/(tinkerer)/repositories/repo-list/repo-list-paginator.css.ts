import { style } from "@vanilla-extract/css";
import theme from "@/theme";

export const pageButtons = style({
  display: "flex",
  justifyContent: "center",
  width: "100%",
});

export const pageButton = style({
  width: theme.vars.spacing.lg,
  height: theme.vars.spacing.lg,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const pageButtonActive = style({});

export const pageButtonDot = style({
  display: "block",
  fontSize: "10px",
  width: theme.vars.spacing.md,
  height: theme.vars.spacing.md,
  background: theme.vars.color.background.dim,
  border: "1px solid transparent",
  borderRadius: "100%",
  transition: "border-color 0.1s, background 0.2s",
  selectors: {
    [`${pageButton}:hover &`]: {
      borderColor: theme.vars.color.text.dim,
    },
    [`${pageButton}.${pageButtonActive} &`]: {
      background: theme.vars.color.text.secondary,
    },
  },
});

export const pageButtonSpinner = style({
  animation: theme.spin,
  animationDuration: "1s",
  animationIterationCount: "infinite",
  animationTimingFunction: "linear",
});
