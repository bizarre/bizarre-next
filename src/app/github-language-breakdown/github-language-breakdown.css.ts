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
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
  gap: theme.vars.spacing.sm,
});

export const languageLegendItem = style({
  display: "flex",
  alignItems: "baseline",
  marginTop: theme.vars.spacing.xs,
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
});
