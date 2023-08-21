import React, {
  ReactNode,
  forwardRef,
  ElementType,
  ReactElement,
  ComponentProps,
  ForwardRefExoticComponent,
} from "react";
import cn from "classnames";
import List from "../List";
import ListItem from "../List/ListItem";
import { IntentValue } from "../utils/types";
import Prefix from "../Prefix";
import isRenderableNode from "../utils/isRenderableNode";
import Collapse, { CollapseProps } from "../Collapse";
import Popup, { PopupProps } from "../Popup";

export type MenuOpenMode = "popup" | "collapse";

export interface MenuItemCommonProps {
  icon?: ReactNode;
  label?: ReactNode;
  title?: ReactNode;
  detail?: ReactNode;
  prefix?: ReactNode;
  suffix?: ReactNode;
  intent?: IntentValue;
  activeIntent?: IntentValue;
  active?: boolean;
  disabled?: boolean;
  open?: boolean;
  defaultOpen?: boolean;
  openMode?: MenuOpenMode;
  openByIcon?: boolean;
  popupProps?: PopupProps;
  collapseProps?: CollapseProps;
  onOpen?: () => void;
  onClose?: () => void;
}

export type MenuItemProps<C extends ElementType = "button"> = C extends "button"
  ? {
      as?: C;
    } & Omit<ComponentProps<C>, "prefix" | "title"> &
      MenuItemCommonProps
  : {
      as: C;
    } & Omit<ComponentProps<C>, "prefix" | "title"> &
      MenuItemCommonProps;

export interface MenuItemComponent
  extends ForwardRefExoticComponent<MenuItemCommonProps> {
  <C extends ElementType = "button">(props: MenuItemProps<C>): ReactElement;
}

const MenuItem = forwardRef<HTMLButtonElement, MenuItemProps>((props, ref) => {
  const {
    as = "button",
    children,
    className,
    icon,
    label,
    title,
    detail,
    prefix,
    suffix,
    intent,
    activeIntent,
    active,
    disabled,
    open,
    defaultOpen,
    openMode,
    openByIcon,
    popupProps,
    collapseProps,
    onOpen,
    onClose,
    ...rest
  } = props;

  const openable = isRenderableNode(children);
  const collapsible = openMode === "collapse";

  const { cls } = Prefix.useConfig();
  const classes = cn(
    `${cls}menu-item`,
    {
      [`${cls}${intent}}`]: active ? activeIntent || intent : intent,
    },
    className
  );

  let submenu: ReactNode = null;
  if (openable) {
    if (collapsible) {
      submenu = <Collapse open>{children}</Collapse>;
    } else {
      submenu = <List as="div">{children}</List>;
    }
  }

  const item = (
    <ListItem
      {...rest}
      ref={ref}
      as={as}
      className={classes}
      icon={icon}
      label={label}
      title={title}
      detail={detail}
      prefix={prefix}
      suffix={suffix}
      active={active}
      disabled={disabled}
      arrowed={openable}
      hoverable
    >
      {collapsible && submenu}
    </ListItem>
  );

  if (openable && !collapsible) {
    return (
      <Popup
        style={{ width: 300 }}
        unpadding
        arrowless
        open
        offset={0}
        content={submenu}
        on="hover"
        placement="right-start"
      >
        {item}
      </Popup>
    );
  }

  return item;
});

export default MenuItem;
