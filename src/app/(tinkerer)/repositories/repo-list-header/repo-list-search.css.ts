import { globalStyle, keyframes, style } from "@vanilla-extract/css";
import theme from "@/theme";

export const searchContainer = style({
  position: "relative",
  display: "flex",
  flex: 1,
  minWidth: "50px",
});

export const searchIcon = style({
  position: "absolute",
  left: theme.vars.spacing.md,
  top: "50%",
  color: theme.vars.color.text.dim,
  width: theme.vars.text.size.md,
  height: theme.vars.text.size.md,
  transform: "translate(-25%, -50%)",
});

export const searchSpinner = style({
  animationName: theme.spin,
  animationDuration: "1s",
  animationIterationCount: "infinite",
  animationTimingFunction: "linear",
});

export const searchInput = style({
  "::placeholder": {
    color: theme.vars.color.text.dim,
  },
  ":hover": {
    borderColor: theme.vars.color.background.dim,
  },
  ":focus": {
    borderColor: theme.vars.color.text.dim,
  },
});
