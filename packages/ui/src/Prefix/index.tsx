import { ReactNode } from "react";
import createConfig from "../utils/createConfig";

export interface PrefixValue {
  cls: string;
  var: string;
}

export interface PrefixProps extends PrefixValue {
  children: ReactNode;
}

const Prefix = createConfig<PrefixValue, PrefixProps>({ cls: "", var: "" }, ["cls", "var"]);

export default Prefix;
