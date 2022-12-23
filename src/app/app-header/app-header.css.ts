import { styleVariants } from "@vanilla-extract/css";
import theme from "@/theme";

export const header = styleVariants({
  container: {
    display: "flex",
    fontWeight: 600,
    flexWrap: "wrap",
    fontSize: theme.vars.text.size.lg,
    position: "relative",
    marginBottom: theme.vars.spacing.lg,
    transform: "translateZ(0)",
  },
  title: {
    color: theme.vars.color.contrast,
  },
  subtitle: {
    color: theme.vars.color.text.secondary,
  },
  tagline: {
    color: theme.vars.color.contrast,
    width: "100%",
    marginTop: theme.vars.spacing.md,
    fontSize: theme.vars.text.size.sm,
    fontWeight: 400,
  },
  socialContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    display: "flex",
    "@media": {
      "screen and (max-width: 1024px)": {
        left: 0,
        transform: "translateY(-100%)",
        top: `calc(${theme.vars.spacing.sm} * -1)`,
      },
    },
  },
  social: {
    marginLeft: theme.vars.spacing.xs,
    transition: "opacity 0.2s",
    transform: "translateZ(0)",
    ":hover": {
      opacity: 0.5,
    },
    "@media": {
      "screen and (max-width: 1024px)": {
        marginLeft: 0,
        marginRight: theme.vars.spacing.xs,
      },
    },
  },
});
