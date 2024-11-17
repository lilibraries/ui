import React, { ReactNode, forwardRef, HTMLAttributes } from "react";
import cn from "classnames";
import Prefix from "../Prefix";
import isRenderable from "../utils/isRenderable";

export interface DescriptionProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  icon?: ReactNode;
  title?: ReactNode;
}

const Description = forwardRef<HTMLDivElement, DescriptionProps>((props, ref) => {
  const { children, className, icon, title, ...rest } = props;
  const { cls } = Prefix.useConfig();

  return (
    <div {...rest} ref={ref} className={cn(`${cls}description`, className)}>
      {isRenderable(icon) && <span className={`${cls}description-icon`}>{icon}</span>}
      <div className={`${cls}description-content`}>
        {isRenderable(title) && <div className={`${cls}description-title`}>{title}</div>}
        {isRenderable(children) && <div className={`${cls}description-detail`}>{children}</div>}
      </div>
    </div>
  );
});

export default Description;
