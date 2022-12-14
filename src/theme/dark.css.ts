import { createTheme } from "@vanilla-extract/css";
import vars from "./contract.css";

export const _vars = {
  color: {
    contrast: "#FFF",
    blue: "#565D80",
    cyan: "#546E87",
    purple: "#615780",
    background: {
      primary: "#141316",
      dim: "#1D1B22",
      dark: "#0C0B0E",
      menu: "#0C0B0E",
      pre: "#111014",
    },
    text: {
      primary: "#968FA3",
      secondary: "#635C70",
      dim: "#4A4554",
      link: "#5687D1",
      highlight: "#B0ABBA",
    },
    skeleton: {
      1: "#19171C",
      2: "#27252D",
    },
    github_contributions: {
      4: "#391AF6",
      3: "#6954EA",
      2: "#4934CB",
      1: "#2C1F7A",
      0: "#201E24",
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
      md: "1em",
      lg: "1.5em",
      xl: "2em",
      xxl: "3em",
    },
  },
};

export default createTheme(vars, _vars);
