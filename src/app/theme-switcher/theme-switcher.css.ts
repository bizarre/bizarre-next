import { keyframes, style } from "@vanilla-extract/css";
import theme from "@/theme";

export const button = style([
  theme.button.link,
  {
    color: theme.vars.color.text.secondary,
    position: "fixed",
    right: theme.vars.spacing.xl,
    top: theme.vars.spacing.xl,
    transition: "opacity 0.2s",
    ":hover": {
      opacity: 0.5,
    },
  },
]);

export const animation = keyframes({
  "0%": {
    transform: "scale(1)",
    opacity: 0.2,
  },
  "100%": {
    transform: "scale(1.2)",
    opacity: 0.5,
  },
});

export const loading = style({
  animation: animation,
  animationDuration: "1s",
  animationIterationCount: "infinite",
  animationDirection: "alternate",
  animationTimingFunction: "linear",
});
