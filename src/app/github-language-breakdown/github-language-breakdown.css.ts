import { style, styleVariants } from "@vanilla-extract/css";
import theme from "@/theme";

export const languageContainer = style({
  display: "flex",
  height: theme.vars.spacing.md,
  borderRadius: "1em",
  overflow: "hidden",
  width: "100%",
  transform: "translateZ(0)",
});

export const language = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  position: "relative",
  zIndex: 99,
  minWidth: "0px",
  transition: "min-width 0.2s",
  ":hover": {
    minWidth: "50%",
    cursor: "pointer",
  },
  pointerEvents: "all",
});

export const label = style({
  opacity: 0,
  color: theme.vars.color.background.primary,
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
  flexWrap: "wrap",
  "@media": {
    "screen and (max-width: 1024px)": {
      display: "grid",
      gridGap: theme.vars.spacing.sm,
      gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
    },
  },
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
  minWidth: theme.vars.spacing.sm,
  minHeight: theme.vars.spacing.sm,
  content: "",
  borderRadius: "50%",
  marginTop: "3px",
});

export const heading = style({
  color: theme.vars.color.text.dim,
  marginBottom: theme.vars.spacing.md,
  fontSize: theme.vars.text.size.md,
  fontWeight: 500,
});

export const headingFocus = style({
  color: theme.vars.color.text.secondary,
});
