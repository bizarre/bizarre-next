import { style } from "@vanilla-extract/css";
import theme from "@/theme";

export const wrapper = style({
  marginTop: theme.vars.text.size.lg,
  paddingTop: theme.vars.text.size.lg,
  "@media": {
    "screen and (max-width: 1024px)": {
      paddingTop: 0,
      marginTop: 0,
    },
  },
});
