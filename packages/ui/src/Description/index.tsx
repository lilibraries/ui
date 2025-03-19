import React, { HTMLAttributes, ReactNode, forwardRef } from "react";
import cn from "classnames";
import Prefix from "../Prefix";
import isRenderable from "../utils/isRenderable";

export interface DescriptionProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  icon?: ReactNode;
  endIcon?: ReactNode;
  title?: ReactNode;
}

const Description = forwardRef<HTMLDivElement, DescriptionProps>((props, ref) => {
  const { children, className, icon, endIcon, title, ...rest } = props;

  const hasIcon = isRenderable(icon);
  const hasEndIcon = isRenderable(endIcon);
  const hasTitle = isRenderable(title);
  const hasDetail = isRenderable(children);

  const { cls } = Prefix.useConfig();

  return (
    <div {...rest} ref={ref} className={cn(`${cls}description`, className)}>
      {hasIcon && <span className={`${cls}description-icon`}>{icon}</span>}
      <div className={`${cls}description-content`}>
        {hasTitle && <div className={`${cls}description-title`}>{title}</div>}
        {hasTitle && hasDetail && <div className={`${cls}description-detail`}>{children}</div>}
        {!hasTitle && hasDetail && children}
      </div>
      {hasEndIcon && <span className={`${cls}description-end-icon`}>{endIcon}</span>}
    </div>
  );
});

export default Description;
