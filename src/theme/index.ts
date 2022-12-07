import contract from "./contract.css";
import dark from "./dark.css";
import light from "./light.css";
import * as theme from "./theme.css";

const exports = {
  dark,
  light,
  ...theme,
  vars: contract,
};

export default exports;
export const vars = contract;
