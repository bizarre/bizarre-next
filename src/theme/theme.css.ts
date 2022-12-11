import {
  style,
  styleVariants,
  keyframes,
  globalStyle,
} from "@vanilla-extract/css";
import vars from "./contract.css";

globalStyle("button", {
  padding: "0",
  margin: "0",
});

const buttonBase = style({
  border: "none",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
});

export const button = styleVariants({
  base: [buttonBase],
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

export const spin = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
});
