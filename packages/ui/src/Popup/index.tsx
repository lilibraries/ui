import { useComposedRef, usePersist } from "@lilib/hooks";
import React, { ReactElement, forwardRef, useRef } from "react";
import Popper, { PopperProps, PopperUpdateData } from "../Popper";
import Prefix from "../Prefix";

export interface PopupProps
  extends Omit<PopperProps, "arrow" | "arrowPadding" | "onUpdate"> {
  hideArrow?: boolean;
}

const Popup = forwardRef<HTMLDivElement, PopupProps>((props, ref) => {
  const { hideArrow, ...rest } = props;
  const { cls } = Prefix.useConfig();
  const arrowRef = useRef<HTMLSpanElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  let arrow: ReactElement | undefined;
  if (!hideArrow) {
    arrow = <span ref={arrowRef} className={`${cls}popup-arrow`} />;
  }

  const handleUpdate = usePersist((data: PopperUpdateData) => {
    const { x, y, arrowX, arrowY, placement } = data;

    Object.assign(contentRef.current!.style, {
      top: `${y}px`,
      left: `${x}px`,
    });

    if (arrowRef.current) {
      if (arrowX) {
        arrowRef.current.style.left = `${arrowX}px`;
      }
      if (arrowY) {
        arrowRef.current.style.top = `${arrowY}px`;
      }
      arrowRef.current.dataset.placement = placement.split("-")[0];
    }
  });

  return (
    <Popper
      {...rest}
      ref={useComposedRef(contentRef, ref)}
      className={`${cls}popup`}
      arrow={arrow}
      arrowPadding={8}
      onUpdate={handleUpdate}
    />
  );
});

export default Popup;
