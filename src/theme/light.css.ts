import { createTheme } from "@vanilla-extract/css";
import vars from "./contract.css";

export default createTheme(vars, {
  color: {
    background: {
      primary: "#E5E3E8",
    },
    text: {
      primary: "",
      secondary: "",
    },
  },
});
