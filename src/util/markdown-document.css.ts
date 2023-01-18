import { globalStyle, style } from "@vanilla-extract/css";
import theme from "@/theme";

export const markdown = style({
  fontSize: "14px",
  lineHeight: "21px",
});

globalStyle(`${markdown} h1`, {
  marginBottom: theme.vars.spacing.md,
  fontSize: theme.vars.text.size.lg,
  fontWeight: 500,
  color: theme.vars.color.text.secondary,
});

globalStyle(`${markdown} h2`, {
  marginBottom: theme.vars.spacing.md,
  fontSize: theme.vars.text.size.md,
  fontWeight: 500,
  color: theme.vars.color.text.secondary,
});

globalStyle(`${markdown} svg.octicon-link`, {
  display: "none",
});

globalStyle(`${markdown} strong`, {
  fontWeight: "500",
});

globalStyle(`${markdown} em`, {
  fontStyle: "italic",
  opacity: 0.8,
});

globalStyle(`${markdown} del`, {
  opacity: 0.66,
});

globalStyle(`${markdown} p`, {
  marginBottom: theme.vars.spacing.md,
});

globalStyle(`${markdown} h6`, {
  marginBottom: theme.vars.spacing.xs,
  fontWeight: 600,
  color: theme.vars.color.text.dim,
  opacity: 0.5,
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  fontSize: "0.8em",
  userSelect: "none",
  cursor: "default",
});

globalStyle(`${markdown} blockquote`, {
  marginBottom: theme.vars.spacing.md,
  color: theme.vars.color.text.dim,
  fontWeight: 500,
  paddingLeft: theme.vars.spacing.md,
  borderStyle: "solid",
  borderLeftWidth: theme.vars.spacing.xs,
  borderColor: theme.vars.color.text.dim,
});

globalStyle(`${markdown} sup`, {
  verticalAlign: "super",
  fontSize: "smaller",
});

globalStyle(`${markdown} sub`, {
  verticalAlign: "sub",
  fontSize: "smaller",
  color: theme.vars.color.text.secondary,
});

globalStyle(`${markdown} ul`, {
  listStyle: "outside",
  marginLeft: theme.vars.spacing.md,
  marginBottom: theme.vars.spacing.md,
});

globalStyle(`${markdown} ul ul`, {
  listStyle: "inside",
});

globalStyle(`${markdown} a`, {
  color: theme.vars.color.text.link,
});

globalStyle(`${markdown} a:hover`, {
  opacity: 0.5,
});

globalStyle(`${markdown} pre`, {
  background: theme.vars.color.background.pre,
  padding: theme.vars.spacing.sm,
  paddingLeft: theme.vars.spacing.md,
  paddingRight: theme.vars.spacing.md,
  borderRadius: "8px",
  marginBottom: theme.vars.spacing.md,
  color: theme.vars.color.text.secondary,
  fontFamily: "monospace",
  overflowX: "scroll",
});

globalStyle(`${markdown} code`, {
  background: theme.vars.color.background.pre,
  padding: theme.vars.spacing.xs,
  paddingLeft: theme.vars.spacing.xs,
  paddingRight: theme.vars.spacing.xs,
  borderRadius: "8px",
  marginBottom: theme.vars.spacing.md,
  color: theme.vars.color.text.secondary,
  fontFamily: "monospace",
  overflowX: "scroll",
});

globalStyle(`${markdown} hr`, {
  border: "none",
  borderBottom: "1.5px solid",
  borderColor: theme.vars.color.text.dim,
  borderRadius: 0,
  opacity: 0.66,
});
