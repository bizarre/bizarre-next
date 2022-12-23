import { keyframes, style } from "@vanilla-extract/css";
import theme from "@/theme";

export const animation = keyframes({
  "0%": {
    transform: "scale(1)",
    opacity: 0.2,
  },
  "100%": {
    transform: "scale(1.3)",
    opacity: 0.4,
  },
});

export const loading = style({
  animation: animation,
  animationDuration: "1s",
  animationIterationCount: "infinite",
  animationDirection: "alternate",
  animationTimingFunction: "linear",
});

export const button = style([
  theme.button.link,
  {
    color: theme.vars.color.text.secondary,
    position: "absolute",
    right: theme.vars.spacing.xl,
    top: theme.vars.spacing.xl,
    selectors: {
      [`&:not(${loading}):hover`]: {
        opacity: 0.75,
        transition: "opacity 0.2s, transform 0.2s",
        transform: "scale(1.2)",
      },
    },
    zIndex: 99,
  },
]);
