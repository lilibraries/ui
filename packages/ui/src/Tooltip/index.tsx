import React, { forwardRef } from "react";
import cn from "classnames";
import Prefix from "../Prefix";
import Popup, { PopupProps } from "../Popup";

const Tooltip = forwardRef<HTMLDivElement, PopupProps>((props, ref) => {
  const { className, arrowed = true, ...rest } = props;

  const { cls } = Prefix.useConfig();
  const classes = cn(`${cls}tooltip`, className);

  return (
    <Popup
      on="hover"
      placement="top"
      arrowed={arrowed}
      offset={{ main: arrowed ? 10 : 4 }}
      arrowPadding={8}
      {...rest}
      ref={ref}
      className={classes}
    />
  );
});

export default Tooltip;
