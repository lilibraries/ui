import React, {
  ReactNode,
  MouseEvent,
  forwardRef,
  ElementType,
  ReactElement,
  createElement,
  ComponentProps,
  ForwardRefExoticComponent,
} from "react";
import List from "../List";
import { IntentValue } from "../utils/types";

export interface MenuItemCommonProps {
  icon?: ReactNode;
  label?: ReactNode;
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
    } & Omit<ComponentProps<C>, "prefix"> &
      MenuItemCommonProps
  : {
      as: C;
    } & Omit<ComponentProps<C>, "prefix"> &
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
    prefix,
    suffix,
    intent,
    activeIntent,
    active,
    disabled,
    ...rest
  } = props;

  return (
    <List.Item as={as} icon={icon} prefix={prefix} suffix={suffix}>
      {label}
    </List.Item>
  );
});

export default MenuItem;
