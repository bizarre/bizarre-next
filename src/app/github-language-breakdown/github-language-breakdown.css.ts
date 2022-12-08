import { style, styleVariants } from "@vanilla-extract/css";
import theme from "@/theme";

export const languageContainer = style({
  display: "flex",
  height: theme.vars.spacing.md,
  borderRadius: "1em",
  overflow: "hidden",
  width: "100%",
});

export const language = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  position: "relative",
  minWidth: "0px",
  transition: "min-width 0.2s",
  ":hover": {
    minWidth: "50%",
    cursor: "pointer",
  },
});

export const label = style({
  opacity: 0,
  color: "black",
  pointerEvents: "none",
  position: "absolute",
  whiteSpace: "nowrap",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  fontSize: theme.vars.text.size.xs,
  transition: "opacity 0.1s ease",
  selectors: {
    [`${language}:hover &`]: {
      opacity: 1,
      transition: "opacity 0.2s ease",
    },
  },
});

export const caption = style({
  width: "100%",
  marginTop: theme.vars.spacing.sm,
  display: "flex",
});

export const languageLegendItem = style({
  display: "flex",
  alignItems: "flex-start",
  marginTop: theme.vars.spacing.xs,
  userSelect: "none",
  marginRight: theme.vars.spacing.lg,
});

export const languageLegendValue = styleVariants({
  container: {
    fontSize: theme.vars.text.size.sm,
    marginLeft: theme.vars.spacing.sm,
  },
  language: {
    color: theme.vars.color.text.secondary,
    fontWeight: 500,
  },
  percentage: {
    color: theme.vars.color.text.dim,
    marginTop: theme.vars.spacing.xs,
  },
});

export const languageBlob = style({
  display: "block",
  width: theme.vars.spacing.sm,
  height: theme.vars.spacing.sm,
  content: "",
  borderRadius: "50%",
  marginTop: "3px",
});
