import { ReactNode } from "react";
import { PopupProps } from "../Popup";
import { CollapseProps } from "../Collapse";
import { IntentValue } from "../utils/types";
import createConfig from "../utils/createConfig";

export interface MenuConfigValue {
  intent?: IntentValue;
  activeIntent?: IntentValue;
  collapsible?: boolean;
  popupProps?: PopupProps;
  collapseProps?: CollapseProps;
}

export interface MenuConfigProps extends MenuConfigValue {
  children?: ReactNode;
}

const MenuConfig = createConfig<MenuConfigValue, MenuConfigProps>(
  {},
  ["intent", "activeIntent", "collapsible", "popupProps", "collapseProps"],
  { inherit: true }
);

export default MenuConfig;
