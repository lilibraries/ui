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
import Direction from "../Direction";
import isRenderable from "../utils/isRenderable";
import InfoTitle from "./InfoTitle";
import InfoDetail from "./InfoDetail";

export interface InfoProps extends HTMLAttributes<HTMLDivElement> {
  icon?: ReactNode;
}

export interface InfoComponent
  extends ForwardRefExoticComponent<PropsWithoutRef<InfoProps> & RefAttributes<HTMLDivElement>> {
  Title: typeof InfoTitle;
  Detail: typeof InfoDetail;
}

const Info = forwardRef<HTMLDivElement, InfoProps>((props, ref) => {
  const { children, className, icon, ...rest } = props;

  const { cls } = Prefix.useConfig();
  const isRTL = Direction.useConfig() === "rtl";

  const classes = cn(
    `${cls}info`,
    {
      [`${cls}rtl`]: isRTL,
    },
    className
  );

  return (
    <div {...rest} ref={ref} className={classes}>
      {isRenderable(icon) && <span className={`${cls}info-icon`}>{icon}</span>}
      <div className={`${cls}info-content`}>{children}</div>
    </div>
  );
}) as InfoComponent;

Info.Title = InfoTitle;
Info.Detail = InfoDetail;

export default Info;
