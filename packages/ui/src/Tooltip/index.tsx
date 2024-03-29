import React, { forwardRef } from "react";
import cn from "classnames";
import Prefix from "../Prefix";
import Popup, { PopupProps } from "../Popup";
import { IntentValue } from "../utils/types";

export interface TooltipProps extends PopupProps {
  intent?: IntentValue;
}

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>((props, ref) => {
  const { className, intent, on = "hover", placement = "top", ...rest } = props;

  const { cls } = Prefix.useConfig();
  const classes = cn(
    `${cls}tooltip`,
    {
      [`${cls}${intent}`]: intent,
    },
    className
  );

  return (
    <Popup
      {...rest}
      ref={ref}
      on={on}
      className={classes}
      placement={placement}
    />
  );
});

export default Tooltip;
