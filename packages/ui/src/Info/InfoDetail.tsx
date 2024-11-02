import React, { forwardRef, HTMLAttributes } from "react";
import cn from "classnames";
import Prefix from "../Prefix";

const InfoDetail = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => {
  const { children, className, ...rest } = props;

  const { cls } = Prefix.useConfig();
  const classes = cn(`${cls}info-detail`, className);

  return (
    <div {...rest} ref={ref} className={classes}>
      {children}
    </div>
  );
});

export default InfoDetail;
