import { style } from "@vanilla-extract/css";
import theme from "@/theme";

export const itemIcon = style({
  position: "absolute",
  left: `calc(${theme.vars.spacing.md} * -1)`,
  transform: "translateX(-50%)",
  padding: theme.vars.spacing.xs,
  borderRadius: "100%",
  background: theme.vars.color.text.dim,
  width: "1em",
  height: "1em",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "2px solid",
  borderColor: theme.vars.color.background.primary,
  color: theme.vars.color.background.primary,
});

export const itemContent = style({
  paddingTop: theme.vars.spacing.xs,
  paddingLeft: theme.vars.spacing.sm,
});

export const item = style({
  position: "relative",
});

export const itemHeading = style({
  color: theme.vars.color.text.highlight,
  fontWeight: "500",
  marginBottom: theme.vars.spacing.xs,
});

export const commitsBarContainer = style({
  width: "200px",
  marginLeft: "auto",
});

export const commitsBar = style({
  background: "red",
  height: theme.vars.spacing.sm,
  borderRadius: "8px",
});

export const commitsRepo = style({
  color: theme.vars.color.text.link,
  ":hover": {
    opacity: 0.75,
  },
});

export const commitsSpan = style({
  marginLeft: theme.vars.spacing.sm,
  color: theme.vars.color.text.dim,
});

export const commit = style({
  display: "flex",
  alignItems: "center",
  marginBottom: theme.vars.spacing.xs,
});
