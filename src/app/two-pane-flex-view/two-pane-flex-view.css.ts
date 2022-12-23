import { style, globalStyle } from "@vanilla-extract/css";
import theme from "@/theme";

export const container = style({
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  paddingTop: theme.vars.spacing.xl,
  position: "relative",
});

export const pane = style({
  width: "550px",
  transform: "translateZ(0)",
  transition: "opacity 1s, transform 0.2s",
  "@media": {
    "screen and (max-width: 1024px)": {
      padding: theme.vars.spacing.lg,
    },
  },
});

export const paneMinimized = style({
  "@media": {
    "screen and (max-width: 1024px)": {
      opacity: 0,
      position: "relative",
      transform: "translateX(-100%)",
    },
  },
});

export const content = style({
  maxWidth: "0px",
  opacity: 0,
  transition: "max-width 0.5s, opacity 1s",
  "@media": {
    "screen and (max-width: 1024px)": {
      transition: "opacity 1s",
    },
  },
});

export const backButton = style({
  display: "none",
  justifyContent: "flex-start",
  opacity: 0,
  pointerEvents: "none",

  "@media": {
    "screen and (max-width: 1024px)": {
      display: "flex",
      minWidth: "initial",
      alignItems: "center",
      fontSize: theme.vars.text.size.sm,
      color: theme.vars.color.text.dim,
      fontWeight: 500,
      textDecoration: "none",
      justifyContent: "flex-start",
      opacity: 1,
      pointerEvents: "all",
      marginBottom: theme.vars.spacing.sm,
    },
  },

  ":hover": {
    opacity: 0.5,
  },
});

export const contentExpanded = style({
  opacity: 1,
  maxWidth: "550px",
  marginLeft: theme.vars.spacing.xxl,
  "@media": {
    "screen and (max-width: 1024px)": {
      marginLeft: 0,
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
      padding: theme.vars.spacing.lg,
      width: `calc(100% - ${theme.vars.spacing.lg} * 2)`,
      top: 0,
      overflow: "hidden",
    },
  },
});

export const hidden = style({
  opacity: "0",
  width: "0px",
  overflow: "hidden",
});

globalStyle(`${content} > *`, {
  minWidth: "550px",
  "@media": {
    "screen and (max-width: 768px)": {
      minWidth: "100%",
    },
  },
});
