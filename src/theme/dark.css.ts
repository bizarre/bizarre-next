import { createTheme } from "@vanilla-extract/css";
import vars from "./contract.css";

export default createTheme(vars, {
  color: {
    background: {
      primary: "#141316",
    },
    text: {
      primary: "#B0ABBA",
      secondary: "#635C70",
    },
  },
});
