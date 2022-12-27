import createConfig from "../utils/createConfig";

export interface PrefixProps {
  value?: string;
}

const Prefix = createConfig<string, PrefixProps>("value", "li-");

export default Prefix;
