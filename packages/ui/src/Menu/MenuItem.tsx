import React, {
  useState,
  ReactNode,
  forwardRef,
  MouseEvent,
  ElementType,
  ReactElement,
  ComponentProps,
  ForwardRefExoticComponent,
} from "react";
import cn from "classnames";
import { usePersist } from "@lilib/hooks";
import List from "../List";
import Prefix from "../Prefix";
import Direction from "../Direction";
import ListConfig from "../List/ListConfig";
import { SizeValue } from "../Size";
import Popup, { PopupProps } from "../Popup";
import Collapse, { CollapseProps } from "../Collapse";
import { IntentValue } from "../utils/types";
import isRenderableNode from "../utils/isRenderableNode";
import OpenIcon from "./OpenIcon";

export interface MenuItemCommonProps {
  size?: SizeValue;
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
  openByIcon?: boolean;
  collapsible?: boolean;
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
    size,
    icon,
    label,
    title,
    detail,
    prefix,
    suffix,
    intent: intentProp,
    activeIntent,
    active,
    disabled,
    open: openProp,
    defaultOpen,
    openByIcon,
    collapsible,
    popupProps,
    collapseProps,
    onOpen,
    onClose,
    onClick,
    ...rest
  } = props;

  const controlled = openProp != null;
  const [open, setOpen] = useState(controlled ? !!openProp : !!defaultOpen);

  const handlePopupOpen = usePersist(() => {
    if (!controlled) {
      setOpen(true);
    }
    if (popupProps?.onOpen) {
      popupProps?.onOpen();
    }
    if (onOpen) {
      onOpen();
    }
  });

  const handlePopupClose = usePersist(() => {
    if (!controlled) {
      setOpen(false);
    }
    if (popupProps?.onClose) {
      popupProps?.onClose();
    }
    if (onClose) {
      onClose();
    }
  });

  const handleItemClick = usePersist((event: MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(event);
    }
    if (collapsible) {
      if (!controlled) {
        setOpen(!open);
      }
      if (!open && onOpen) {
        onOpen();
      }
      if (open && onClose) {
        onClose();
      }
    }
  });

  const { cls } = Prefix.useConfig();
  const isRTL = Direction.useConfig() === "rtl";

  let intent = intentProp;
  if (active) {
    intent = activeIntent || intentProp;
  }

  const classes = cn(
    `${cls}menu-item`,
    {
      [`${cls}${intent}`]: intent,
      [`${cls}hovered`]: open && !collapsible,
    },
    className
  );

  let submenu: ReactNode = null;
  const hasSubmenu = isRenderableNode(children);

  if (hasSubmenu) {
    if (collapsible) {
      submenu = (
        <Collapse open={open} {...collapseProps}>
          {children}
        </Collapse>
      );
    } else {
      submenu = (
        <List as="div">
          <ListConfig indent={0}>{children}</ListConfig>
        </List>
      );
    }
  }

  const item = (
    <List.Item
      {...rest}
      ref={ref}
      as={as}
      className={classes}
      size={size}
      icon={icon}
      label={label}
      title={title}
      detail={detail}
      prefix={prefix}
      suffix={suffix}
      hoverable
      active={active}
      disabled={disabled}
      arrowed={hasSubmenu}
      arrowIcon={<OpenIcon opened={open} collapsible={collapsible} />}
      onClick={handleItemClick}
    >
      {collapsible && submenu}
    </List.Item>
  );

  if (hasSubmenu && !collapsible) {
    return (
      <Popup
        arrowless
        offset={0}
        on="hover"
        placement={isRTL ? "left-start" : "right-start"}
        open={open}
        {...popupProps}
        content={submenu}
        className={cn(`${cls}menu-item-popup`, popupProps?.className)}
        onOpen={handlePopupOpen}
        onClose={handlePopupClose}
      >
        {item}
      </Popup>
    );
  }

  return item;
});

export default MenuItem;
