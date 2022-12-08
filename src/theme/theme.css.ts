import { style, styleVariants, keyframes } from "@vanilla-extract/css";
import vars from "./contract.css";

const buttonBase = style({
  background: "none",
  border: "none",
  cursor: "pointer",
});

export const button = styleVariants({
  link: [
    buttonBase,
    {
      background: "none",
    },
  ],
});

export const transitionColor = style({
  transition: "color 0.2s, background 0.2s",
});

const skeletonAnimation = keyframes({
  "0%": {
    backgroundColor: vars.color.skeleton[1],
    fill: vars.color.skeleton[1],
  },
  "100%": {
    backgroundColor: vars.color.skeleton[2],
    fill: vars.color.skeleton[2],
  },
});

export const skeleton = style({
  animationName: skeletonAnimation,
  animationDuration: "1s",
  animationTimingFunction: "linear",
  animationIterationCount: "infinite",
  animationDirection: "alternate",
});
