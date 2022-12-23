import {
  style,
  styleVariants,
  keyframes,
  globalStyle,
} from "@vanilla-extract/css";
import vars from "./contract.css";
import { _vars as lightVars } from "./light.css";
import { _vars as darkVars } from "./dark.css";
import { get } from "lodash";

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

const recursiveThemeMap = (obj: any, fn: any, parent: any = ""): any => {
  let result: any = {};
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      result = {
        ...result,
        ...recursiveThemeMap(
          obj[key],
          fn,
          parent === "" ? key : parent + "." + key
        ),
      };
    } else {
      result[obj[key]] = fn(obj[key], parent === "" ? key : parent + "." + key);
    }
  }
  return result;
};

export const dynamicTheme = style({
  vars: recursiveThemeMap(vars, (value: any, key: any) => {
    return get(lightVars, key);
  }),

  "@media": {
    "(prefers-color-scheme: dark)": {
      vars: recursiveThemeMap(vars, (value: any, key: any) => {
        return get(darkVars, key);
      }),
    },
  },
});
