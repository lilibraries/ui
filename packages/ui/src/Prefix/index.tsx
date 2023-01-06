import { ReactNode } from "react";
import createConfig from "../utils/createConfig";

export interface PrefixValue {
  cls: string;
  var: string;
}

export interface PrefixProps extends PrefixValue {
  children: ReactNode;
}

const Prefix = createConfig<PrefixValue, PrefixProps>(
  { cls: "li-", var: "li-" },
  ["cls", "var"]
);

export default Prefix;
