import { ReactNode } from "react";
import createConfig from "../utils/createConfig";

export interface ListConfigValue {
  arrowed?: boolean;
  arrowIcon?: ReactNode;
  hoverable?: boolean;
  disabled?: boolean;
}

export interface ListConfigProps extends ListConfigValue {
  children?: ReactNode;
}

const ListConfig = createConfig<ListConfigValue, ListConfigProps>({}, [
  "arrowed",
  "arrowIcon",
  "hoverable",
  "disabled",
]);

export default ListConfig;
