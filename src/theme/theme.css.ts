import { style, styleVariants } from "@vanilla-extract/css";

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
