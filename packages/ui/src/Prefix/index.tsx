import { ReactNode } from "react";
import createConfig from "../utils/createConfig";

export interface PrefixValue {
  cls: string;
  var: string;
}

export interface PrefixProps extends Partial<PrefixValue> {
  children?: ReactNode;
}

const Prefix = createConfig<PrefixValue>(["cls", "var"], {
  cls: "li-",
  var: "li-",
});

export default Prefix;
