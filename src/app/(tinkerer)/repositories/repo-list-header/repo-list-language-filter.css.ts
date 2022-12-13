import { globalStyle, keyframes, style } from "@vanilla-extract/css";
import theme from "@/theme";

export const item = style({
  display: "flex",
  alignItems: "center",
  transition: "color 0.2s",
  width: "100%",
  userSelect: "none",
  fontWeight: 500,
});

export const selected = style({
  color: theme.vars.color.text.primary,
});

export const blob = style({
  borderRadius: "100%",
  fontSize: "20px",
  width: theme.vars.spacing.sm,
  height: theme.vars.spacing.sm,
  marginRight: theme.vars.spacing.sm,
  border: "1px solid transparent",
  selectors: {
    [`${selected} &`]: {
      border: "1px solid",
      borderColor: theme.vars.color.text.primary,
    },
  },
});

export const modifying = style({});

export const spinner = style({
  marginRight: theme.vars.spacing.sm,
  animation: theme.spin,
  animationDuration: "1s",
  animationIterationCount: "infinite",
  animationTimingFunction: "linear",
  fontSize: "20px",
  width: theme.vars.spacing.sm,
  height: theme.vars.spacing.sm,
  border: "1px solid transparent",
});

export const deselectButton = style([
  theme.button.link,
  {
    fontSize: "20px",
    border: "1px solid transparent",
    marginRight: theme.vars.spacing.sm,
  },
]);

export const deselect = style({
  width: theme.vars.spacing.sm,
  height: theme.vars.spacing.sm,
});

export const selectedButtonContent = style({
  display: "flex",
  alignItems: "center",
  fontSize: "14px",
  minHeight: "17px",
  minWidth: "70px",
});

export const emptyButtonContent = style({
  minWidth: "70px",
  display: "block",
  textAlign: "left",
});
