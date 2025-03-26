import React, { forwardRef } from "react";
import cn from "classnames";
import Prefix from "../Prefix";
import Popup, { PopupProps } from "../Popup";

const Tooltip = forwardRef<HTMLDivElement, PopupProps>((props, ref) => {
  const { className, ...rest } = props;

  const { cls } = Prefix.useConfig();
  const classes = cn(`${cls}tooltip`, className);

  return <Popup arrowed on="hover" placement="top" {...rest} ref={ref} className={classes} />;
});

export default Tooltip;
