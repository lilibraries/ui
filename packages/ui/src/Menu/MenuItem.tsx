import React, {
  ReactNode,
  forwardRef,
  ElementType,
  ReactElement,
  ComponentProps,
  ForwardRefExoticComponent,
} from "react";
import List from "../List";
import { IntentValue } from "../utils/types";

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
}

export type MenuItemProps<C extends ElementType = "div"> = C extends "div"
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
  <C extends ElementType = "div">(props: MenuItemProps<C>): ReactElement;
}

const MenuItem = forwardRef<HTMLDivElement, MenuItemProps>((props, ref) => {
  const {
    as = "div",
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
    ...rest
  } = props;

  return (
    <List.Item
      {...rest}
      ref={ref}
      as={as}
      icon={icon}
      label={label}
      title={title}
      detail={detail}
      prefix={prefix}
      suffix={suffix}
      active={active}
      disabled={disabled}
    >
      {children}
    </List.Item>
  );
});

export default MenuItem;
