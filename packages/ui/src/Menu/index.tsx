import React, {
  Key,
  ReactNode,
  forwardRef,
  RefAttributes,
  HTMLAttributes,
  PropsWithoutRef,
  ForwardRefExoticComponent,
} from "react";
import cn from "classnames";
import { usePersist } from "@lilib/hooks";
import List from "../List";
import Prefix from "../Prefix";
import { SizeValue } from "../Size";
import { PopupProps } from "../Popup";
import { CollapseProps } from "../Collapse";
import { IntentValue } from "../utils/types";
import MenuItem from "./MenuItem";
import MenuConfig, { MenuRenderExpandIconOptions } from "./MenuConfig";

export * from "./MenuItem";
export type { MenuRenderExpandIconOptions } from "./MenuConfig";

export interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  size?: SizeValue;
  filled?: boolean;
  splited?: boolean;
  bounded?: boolean;
  indented?: boolean;
  bordered?: boolean;
  intent?: IntentValue;
  selectedIntent?: IntentValue;
  multiple?: boolean;
  selectable?: boolean;
  deselectable?: boolean;
  unhoverable?: boolean;
  disabled?: boolean;
  collapsible?: boolean;
  collapseByIcon?: boolean;
  renderExpandIcon?: (options: MenuRenderExpandIconOptions) => ReactNode;
  firstMount?: boolean;
  keepMounted?: boolean;
  popupProps?: PopupProps;
  collapseProps?: CollapseProps;
  openKeys?: Key[];
  defaultOpenKeys?: Key[];
  selectedKeys?: Key[];
  defaultSelectedKeys?: Key[];
  onItemClick?: () => void;
  onOpenKeysChange?: (openKeys: Key[]) => void;
  onSelectedKeysChange?: (selectedKeys: Key[]) => void;
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
    selectedIntent,
    multiple,
    selectable,
    deselectable,
    unhoverable,
    disabled,
    collapsible,
    collapseByIcon,
    renderExpandIcon,
    firstMount,
    keepMounted,
    popupProps,
    collapseProps,
    openKeys,
    defaultOpenKeys,
    selectedKeys,
    defaultSelectedKeys,
    onItemClick,
    onOpenKeysChange,
    onSelectedKeysChange,
    ...rest
  } = props;

  const { cls } = Prefix.useConfig();
  const classes = cn(`${cls}menu`, className);

  const handleItemClick = usePersist(() => {
    if (onItemClick) {
      onItemClick();
    }
  });

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
        selectedIntent={selectedIntent}
        disabled={disabled}
        collapsible={collapsible}
        collapseByIcon={collapseByIcon}
        renderExpandIcon={renderExpandIcon}
        firstMount={firstMount}
        keepMounted={keepMounted}
        popupProps={popupProps}
        collapseProps={collapseProps}
        onItemClick={handleItemClick}
      >
        {children}
      </MenuConfig>
    </List>
  );
}) as MenuComponent;

Menu.Item = MenuItem;

export default Menu;
