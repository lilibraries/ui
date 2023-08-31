import React, {
  ReactNode,
  forwardRef,
  MouseEvent,
  ElementType,
  ReactElement,
  ComponentProps,
  ForwardRefExoticComponent,
} from "react";
import cn from "classnames";
import { usePersist, useSafeState } from "@lilib/hooks";
import List from "../List";
import Prefix from "../Prefix";
import Direction from "../Direction";
import ListConfig from "../List/ListConfig";
import { SizeValue } from "../Size";
import Popup, { PopupProps } from "../Popup";
import Collapse, { CollapseProps } from "../Collapse";
import isRenderable from "../utils/isRenderable";
import { IntentValue } from "../utils/types";
import ExpandIcon from "./ExpandIcon";
import MenuConfig, { MenuRenderExpandIconOptions } from "./MenuConfig";

export interface MenuItemCommonProps {
  size?: SizeValue;
  icon?: ReactNode;
  label?: ReactNode;
  title?: ReactNode;
  detail?: ReactNode;
  prefix?: ReactNode;
  suffix?: ReactNode;
  intent?: IntentValue;
  selectedIntent?: IntentValue;
  selected?: boolean;
  disabled?: boolean;
  open?: boolean;
  defaultOpen?: boolean;
  collapsible?: boolean;
  collapseByIcon?: boolean;
  renderExpandIcon?: (options: MenuRenderExpandIconOptions) => ReactNode;
  firstMount?: boolean;
  keepMounted?: boolean;
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
    selectedIntent: selectedIntentProp,
    selected,
    disabled: disabledProp,
    open: openProp,
    defaultOpen,
    collapsible: collapsibleProp,
    collapseByIcon: collapseByIconProp,
    renderExpandIcon: renderExpandIconProp,
    firstMount: firstMountProp,
    keepMounted: keepMountedProp,
    popupProps,
    collapseProps,
    onOpen,
    onClose,
    onClick,
    ...rest
  } = props;

  const { cls } = Prefix.useConfig();
  const isRTL = Direction.useConfig() === "rtl";
  const {
    disabled,
    collapsible,
    selectedIntent,
    collapseByIcon,
    renderExpandIcon,
    firstMount,
    keepMounted,
    intent: intentConfig,
    popupProps: popupConfigProps,
    collapseProps: collapseConfigProps,
    onItemClick: onItemClickConfig,
  } = MenuConfig.useConfig({
    intent: intentProp,
    selectedIntent: selectedIntentProp,
    disabled: disabledProp,
    collapsible: collapsibleProp,
    collapseByIcon: collapseByIconProp,
    renderExpandIcon: renderExpandIconProp,
    firstMount: firstMountProp,
    keepMounted: keepMountedProp,
  });

  let intent = intentConfig;
  if (selected) {
    intent = selectedIntent || intentConfig;
  }

  const controlled = openProp != null;
  const [open, setOpen] = useSafeState(controlled ? !!openProp : !!defaultOpen);

  const toggleOpen = usePersist(() => {
    if (!controlled) {
      setOpen(!open);
    }
    if (!open && onOpen) {
      onOpen();
    }
    if (open && onClose) {
      onClose();
    }
  });

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
    if (onItemClickConfig) {
      onItemClickConfig();
    }
    if (collapsible && !collapseByIcon) {
      toggleOpen();
    }
  });

  const handleSubmenuItemClick = usePersist(() => {
    if (onItemClickConfig) {
      onItemClickConfig();
    }
    if (!collapsible && !controlled) {
      setOpen(false);
    }
  });

  const handleCollapseClick = usePersist((event: MouseEvent) => {
    if (collapsible && collapseByIcon) {
      event.stopPropagation();
      toggleOpen();
    }
  });

  const classes = cn(
    `${cls}menu-item`,
    {
      [`${cls}${intent}`]: intent,
      [`${cls}hovered`]: open && !collapsible,
    },
    className
  );

  let submenu: ReactNode = null;
  const hasSubmenu = isRenderable(children);

  if (hasSubmenu) {
    if (collapsible) {
      submenu = (
        <Collapse
          open={open}
          firstMount={firstMount}
          keepMounted={keepMounted}
          {...collapseConfigProps}
          {...collapseProps}
        >
          <List as="div">{children}</List>
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
  submenu = (
    <MenuConfig onItemClick={handleSubmenuItemClick}>{submenu}</MenuConfig>
  );

  let expandIcon: ReactNode = null;
  if (renderExpandIcon) {
    expandIcon = renderExpandIcon({
      open,
      disabled: !!disabled,
      collapsible: !!collapsible,
      collapseByIcon: !!collapseByIcon,
      handleCollapseClick,
    });
  } else {
    expandIcon = (
      <ExpandIcon
        open={open}
        disabled={disabled}
        collapsible={collapsible}
        collapseByIcon={collapseByIcon}
        onCollapseClick={handleCollapseClick}
      />
    );
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
      active={selected}
      disabled={disabled}
      arrowed={hasSubmenu}
      arrowIcon={expandIcon}
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
        firstMount={firstMount}
        keepMounted={keepMounted}
        {...popupConfigProps}
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
