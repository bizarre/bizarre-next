import { styleVariants } from "@vanilla-extract/css";
import theme from "@/theme";

export const header = styleVariants({
  container: {
    display: "flex",
    fontWeight: 600,
    flexWrap: "wrap",
    fontSize: theme.vars.text.size.lg,
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
    marginTop: theme.vars.spacing.sm,
    fontSize: theme.vars.text.size.sm,
    fontWeight: 400,
  },
});
