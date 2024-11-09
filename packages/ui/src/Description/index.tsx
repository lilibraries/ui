import React, {
  ReactNode,
  forwardRef,
  RefAttributes,
  HTMLAttributes,
  PropsWithoutRef,
  ForwardRefExoticComponent,
} from "react";
import cn from "classnames";
import Prefix from "../Prefix";
import isRenderable from "../utils/isRenderable";
import DescriptionTitle from "./DescriptionTitle";
import DescriptionDetail from "./DescriptionDetail";

export interface DescriptionProps extends HTMLAttributes<HTMLDivElement> {
  icon?: ReactNode;
}

export interface DescriptionComponent
  extends ForwardRefExoticComponent<PropsWithoutRef<DescriptionProps> & RefAttributes<HTMLDivElement>> {
  Title: typeof DescriptionTitle;
  Detail: typeof DescriptionDetail;
}

const Description = forwardRef<HTMLDivElement, DescriptionProps>((props, ref) => {
  const { children, className, icon, ...rest } = props;
  const { cls } = Prefix.useConfig();

  return (
    <div {...rest} ref={ref} className={cn(`${cls}description`, className)}>
      {isRenderable(icon) && <span className={`${cls}description-icon`}>{icon}</span>}
      <div className={`${cls}description-content`}>{children}</div>
    </div>
  );
}) as DescriptionComponent;

Description.Title = DescriptionTitle;
Description.Detail = DescriptionDetail;

export default Description;
