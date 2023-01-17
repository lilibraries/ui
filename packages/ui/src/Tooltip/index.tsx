import { useComposedRef } from "@lilib/hooks";
import React, { forwardRef, ReactElement, useRef } from "react";
import Popper, { PopperProps } from "../Popper";
import Prefix from "../Prefix";

export interface TooltipProps
  extends Omit<
    PopperProps,
    | "arrow"
    | "arrowPadding"
    | "openDelay"
    | "closeDelay"
    | "hoverEnterDelay"
    | "hoverLeaveDelay"
    | "updateDeps"
    | "onUpdate"
  > {
  hideArrow?: boolean;
}

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>((props, ref) => {
  const { hideArrow, on = "hover", placement = "top", ...rest } = props;

  const { cls } = Prefix.useConfig();
  const arrowRef = useRef<HTMLSpanElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  let arrow: ReactElement | undefined;
  if (!hideArrow) {
    arrow = <span ref={arrowRef} className={`${cls}tooltip-arrow`} />;
  }

  return (
    <Popper
      {...rest}
      ref={useComposedRef(contentRef, ref)}
      on={on}
      arrow={arrow}
      placement={placement}
    />
  );
});

export default Tooltip;
