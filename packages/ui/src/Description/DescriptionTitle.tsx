import React, { forwardRef, HTMLAttributes } from "react";
import cn from "classnames";
import Prefix from "../Prefix";

const DescriptionTitle = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => {
  const { children, className, ...rest } = props;

  const { cls } = Prefix.useConfig();
  const classes = cn(`${cls}description-title`, className);

  return (
    <div {...rest} ref={ref} className={classes}>
      {children}
    </div>
  );
});

export default DescriptionTitle;
