import { ReactNode, MouseEvent } from "react";
import { PopupProps } from "../Popup";
import { CollapseProps } from "../Collapse";
import { IntentValue } from "../utils/types";
import createConfig from "../utils/createConfig";

export interface MenuRenderExpandIconOptions {
  open: boolean;
  disabled: boolean;
  collapsible: boolean;
  collapseByIcon: boolean;
  handleCollapseClick: (event: MouseEvent) => void;
}

export interface MenuConfigValue {
  intent?: IntentValue;
  activeIntent?: IntentValue;
  disabled?: boolean;
  collapsible?: boolean;
  collapseByIcon?: boolean;
  renderExpandIcon?: (options: MenuRenderExpandIconOptions) => ReactNode;
  firstMount?: boolean;
  keepMounted?: boolean;
  popupProps?: PopupProps;
  collapseProps?: CollapseProps;
}

export interface MenuConfigProps extends MenuConfigValue {
  children?: ReactNode;
}

const MenuConfig = createConfig<MenuConfigValue, MenuConfigProps>(
  {},
  [
    "intent",
    "activeIntent",
    "disabled",
    "collapsible",
    "collapseByIcon",
    "renderExpandIcon",
    "firstMount",
    "keepMounted",
    "popupProps",
    "collapseProps",
  ],
  { inherit: true }
);

export default MenuConfig;
