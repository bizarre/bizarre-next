import { createTheme } from "@vanilla-extract/css";
import vars from "./contract.css";

export default createTheme(vars, {
  color: {
    contrast: "#FFF",
    blue: "#565D80",
    cyan: "#546E87",
    purple: "#615780",
    background: {
      primary: "#141316",
    },
    text: {
      primary: "#B0ABBA",
      secondary: "#635C70",
    },
  },
  spacing: {
    xs: "0.3em",
    sm: "0.5em",
    md: "1em",
    lg: "2em",
    xl: "3em",
    xxl: "5em",
  },
  text: {
    size: {
      xs: "0.6em",
      sm: "0.8em",
      md: "1.25em",
      lg: "1.5em",
      xl: "2em",
      xxl: "3em",
    },
  },
});
