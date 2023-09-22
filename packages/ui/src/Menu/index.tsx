import React, {
  Key,
  ReactNode,
  MouseEvent,
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
  intent?: IntentValue;
  filled?: boolean;
  splited?: boolean;
  bounded?: boolean;
  indented?: boolean;
  bordered?: boolean;
  selectable?: boolean;
  multiple?: boolean;
  deselectable?: boolean;
  selectedIntent?: IntentValue;
  disabled?: boolean;
  collapsible?: boolean;
  collapseByIcon?: boolean;
  firstMount?: boolean;
  keepMounted?: boolean;
  popupProps?: PopupProps;
  collapseProps?: CollapseProps;
  openKeys?: Key[];
  defaultOpenKeys?: Key[];
  selectedKeys?: Key[];
  defaultSelectedKeys?: Key[];
  onItemClick?: (event: MouseEvent) => void;
  onOpenKeysChange?: (openKeys: Key[]) => void;
  onSelectedKeysChange?: (selectedKeys: Key[]) => void;
  renderExpandIcon?: (options: MenuRenderExpandIconOptions) => ReactNode;
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
    intent,
    filled,
    splited,
    bounded,
    indented,
    bordered,
    selectable,
    multiple,
    deselectable,
    selectedIntent,
    disabled,
    collapsible,
    collapseByIcon,
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
    renderExpandIcon,
    ...rest
  } = props;

  const { cls } = Prefix.useConfig();
  const classes = cn(`${cls}menu`, className);

  const handleItemClick = usePersist((event: MouseEvent) => {
    if (onItemClick) {
      onItemClick(event);
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
