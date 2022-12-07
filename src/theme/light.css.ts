import { createTheme } from "@vanilla-extract/css";
import vars from "./contract.css";

export default createTheme(vars, {
  color: {
    contrast: "#000",
    blue: "#A4A8C1",
    cyan: "#A1B3C4",
    purple: "#ABA4C1",
    background: {
      primary: "#E5E3E8",
    },
    text: {
      primary: "#635C70",
      secondary: "#968FA3",
      dim: "#B0ABBA",
    },
    skeleton: {
      1: "#CBC7D1",
      2: "#DAD8DF",
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
