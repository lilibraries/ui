import { ReactNode, MouseEvent } from "react";
import { PopupProps } from "../Popup";
import { CollapseProps } from "../Collapse";
import createConfig from "../utils/createConfig";
import { IntentValue } from "../utils/types";

export interface MenuRenderExpandIconOptions {
  open: boolean;
  disabled: boolean;
  collapsible: boolean;
  collapseByIcon: boolean;
  handleCollapseClick: (event: MouseEvent) => void;
}

export interface MenuConfigValue {
  intent?: IntentValue;
  selectedIntent?: IntentValue;
  disabled?: boolean;
  collapsible?: boolean;
  collapseByIcon?: boolean;
  renderExpandIcon?: (options: MenuRenderExpandIconOptions) => ReactNode;
  firstMount?: boolean;
  keepMounted?: boolean;
  popupProps?: PopupProps;
  collapseProps?: CollapseProps;
  onItemClick?: () => void;
}

export interface MenuConfigProps extends MenuConfigValue {
  children?: ReactNode;
}

const MenuConfig = createConfig<MenuConfigValue, MenuConfigProps>(
  {},
  [
    "intent",
    "selectedIntent",
    "disabled",
    "collapsible",
    "collapseByIcon",
    "renderExpandIcon",
    "firstMount",
    "keepMounted",
    "popupProps",
    "collapseProps",
    "onItemClick",
  ],
  { inherit: true }
);

export default MenuConfig;
