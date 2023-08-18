import React, { HTMLAttributes, forwardRef } from "react";
import cn from "classnames";
import Prefix from "../Prefix";
import { IntentValue } from "../utils/types";

export interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  intent?: IntentValue;
  activeIndent?: IntentValue;
  iconOnly?: boolean;
  collapsible?: boolean;
}

const Menu = forwardRef<HTMLDivElement, MenuProps>((props, ref) => {
  const { children, className, ...rest } = props;

  const { cls } = Prefix.useConfig();
  const classes = cn(`${cls}menu`, className);

  return (
    <div {...rest} ref={ref} className={classes}>
      {children}
    </div>
  );
});

export default Menu;
