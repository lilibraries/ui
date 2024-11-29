import React, { forwardRef } from "react";
import cn from "classnames";
import Popup, { PopupProps } from "../Popup";
import Prefix from "../Prefix";

const Tooltip = forwardRef<HTMLDivElement, PopupProps>((props, ref) => {
  const { className, ...rest } = props;

  const { cls } = Prefix.useConfig();
  const classes = cn(`${cls}tooltip`, className);

  return <Popup arrowed on="hover" placement="top" {...rest} ref={ref} className={classes} />;
});

export default Tooltip;
