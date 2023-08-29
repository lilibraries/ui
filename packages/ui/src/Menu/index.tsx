import React, {
  forwardRef,
  RefAttributes,
  HTMLAttributes,
  PropsWithoutRef,
  ForwardRefExoticComponent,
} from "react";
import cn from "classnames";
import List from "../List";
import Prefix from "../Prefix";
import { SizeValue } from "../Size";
import { PopupProps } from "../Popup";
import { CollapseProps } from "../Collapse";
import { IntentValue } from "../utils/types";
import MenuItem from "./MenuItem";
import MenuConfig from "./MenuConfig";

export interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  size?: SizeValue;
  filled?: boolean;
  splited?: boolean;
  bounded?: boolean;
  indented?: boolean;
  bordered?: boolean;
  intent?: IntentValue;
  activeIntent?: IntentValue;
  disabled?: boolean;
  collapsible?: boolean;
  popupProps?: PopupProps;
  collapseProps?: CollapseProps;
}

export interface MenuComponent
  extends ForwardRefExoticComponent<
    PropsWithoutRef<MenuProps> & RefAttributes<HTMLDivElement>
  > {
  Item: typeof MenuItem;
}

const Menu = forwardRef<HTMLDivElement, MenuProps>((props, ref) => {
  const {
    children,
    className,
    size,
    filled,
    splited,
    bounded,
    indented,
    bordered,
    intent,
    activeIntent,
    disabled,
    collapsible,
    popupProps,
    collapseProps,
    ...rest
  } = props;

  const { cls } = Prefix.useConfig();
  const classes = cn(`${cls}menu`, className);

  return (
    <List
      {...rest}
      as="div"
      ref={ref}
      className={classes}
      size={size}
      filled={filled}
      splited={splited}
      indented={indented}
      bounded={bounded}
      bordered={bordered}
      disabled={disabled}
    >
      <MenuConfig
        intent={intent}
        activeIntent={activeIntent}
        collapsible={collapsible}
        popupProps={popupProps}
        collapseProps={collapseProps}
      >
        {children}
      </MenuConfig>
    </List>
  );
}) as MenuComponent;

Menu.Item = MenuItem;

export default Menu;
