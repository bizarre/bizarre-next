import { globalStyle, style, styleVariants } from "@vanilla-extract/css";
import theme from "@/theme";

export const header = style({
  display: "flex",
  alignItems: "center",
  color: theme.vars.color.text.dim,
  fontWeight: 500,
  justifyContent: "space-between",
});

export const headerRepo = style({
  color: theme.vars.color.text.secondary,
});

export const title = style({
  display: "flex",
  alignItems: "center",
});

export const description = style({
  fontSize: "14px",
  marginTop: theme.vars.spacing.sm,
  lineHeight: "18px",
});

export const footer = style({
  marginTop: theme.vars.spacing.sm,
  display: "flex",
  justifyContent: "space-between",
  fontSize: "12px",
  color: theme.vars.color.text.secondary,
  fontWeight: 500,
});

export const language = styleVariants({
  container: {
    display: "flex",
    alignItems: "center",
  },

  blob: {
    width: "8px",
    height: "8px",
    borderRadius: "100%",
    marginRight: theme.vars.spacing.xs,
  },
});

export const stats = style({
  display: "flex",
});

globalStyle(`${stats} li`, {
  display: "flex",
  alignItems: "center",
  marginLeft: theme.vars.spacing.sm,
  lineHeight: "14px",
});

globalStyle(`${stats} svg`, {
  marginRight: "2px",
  width: "14px",
  height: "14px",
});

export const topics = style({
  display: "flex",
  fontSize: "10px",
});

export const topic = style({
  marginLeft: theme.vars.spacing.xs,
  padding: theme.vars.spacing.xs,
  paddingLeft: theme.vars.spacing.md,
  paddingRight: theme.vars.spacing.md,
  lineHeight: "14px",
  background: theme.vars.color.github_contributions[1],
  color: theme.vars.color.github_contributions[3],
  borderRadius: theme.vars.spacing.md,
  fontWeight: 500,
});
