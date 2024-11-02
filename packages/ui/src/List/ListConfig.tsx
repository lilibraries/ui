import { ReactNode } from "react";
import createConfig from "../utils/createConfig";

export interface ListConfigValue {
  indent?: number;
  splited?: boolean;
  indented?: boolean;
  arrowed?: boolean;
  arrowIcon?: ReactNode;
  hoverable?: boolean;
  disabled?: boolean;
}

export interface ListConfigProps extends ListConfigValue {
  children?: ReactNode;
}

const ListConfig = createConfig<ListConfigValue, ListConfigProps>(
  {},
  ["indent", "splited", "indented", "arrowed", "arrowIcon", "hoverable", "disabled"],
  { inherit: true }
);

export default ListConfig;
