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
  transition: "all 2s",
  ":hover": {
    minWidth: "50%",
    cursor: "pointer",
  },
});

export const label = style({
  display: "none",
  color: "black",
  pointerEvents: "none",
  fontSize: theme.vars.text.size.xs,
  selectors: {
    [`${language}:hover &`]: {
      display: "block",
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
  marginRight: theme.vars.spacing.xl,
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
