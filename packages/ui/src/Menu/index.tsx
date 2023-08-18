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
import { IntentValue } from "../utils/types";
import MenuItem from "./MenuItem";

export interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  intent?: IntentValue;
  activeIndent?: IntentValue;
  iconOnly?: boolean;
  collapsible?: boolean;
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
    intent,
    activeIndent,
    iconOnly,
    collapsible,
    ...rest
  } = props;

  const { cls } = Prefix.useConfig();
  const classes = cn(`${cls}menu`, className);

  return (
    <List {...rest} ref={ref} className={classes}>
      {children}
    </List>
  );
}) as MenuComponent;

Menu.Item = MenuItem;

export default Menu;
