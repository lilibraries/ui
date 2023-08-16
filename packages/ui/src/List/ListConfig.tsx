import { ReactNode } from "react";
import createConfig from "../utils/createConfig";

export interface ListConfigValue {
  arrowed?: boolean;
  hoverable?: boolean;
  active?: boolean;
  disabled?: boolean;
}

export interface ListConfigProps extends ListConfigValue {
  children?: ReactNode;
}

const ListConfig = createConfig<ListConfigValue, ListConfigProps>({}, [
  "arrowed",
  "hoverable",
  "active",
  "disabled",
]);

export default ListConfig;
