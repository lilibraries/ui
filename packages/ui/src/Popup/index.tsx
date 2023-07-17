import React, { ReactElement, forwardRef, useRef, useState } from "react";
import cn from "classnames";
import { useComposedRef, usePersist, useUpdate } from "@lilib/hooks";
import Prefix from "../Prefix";
import Duration from "../Duration";
import Transition from "../Transition";
import Popper, { PopperProps, PopperUpdateData } from "../Popper";
import isPositiveNumber from "../utils/isPositiveNumber";

export interface PopupProps extends Omit<PopperProps, "arrow"> {
  hideArrow?: boolean;
  disableAnimation?: boolean;
}

const Popup = forwardRef<HTMLDivElement, PopupProps>((props, ref) => {
  const {
    className,
    hideArrow,
    disableAnimation,
    open,
    defaultOpen,
    closeDelay,
    onShow,
    onClose,
    onUpdate,
    ...rest
  } = props;

  const isControlled = open != null;
  const [inState, setInState] = useState(!!open || !!defaultOpen);

  useUpdate(() => {
    if (!disableAnimation && isControlled && !open) {
      setInState(false);
    }
  }, [open]);

  const { cls } = Prefix.useConfig();
  const { fast } = Duration.useConfig();

  const arrowRef = useRef<HTMLSpanElement>(null);
  const popperRef = useRef<HTMLDivElement>(null);
  const composedRef = useComposedRef(popperRef, ref);

  let arrow: ReactElement | undefined;
  if (!hideArrow) {
    arrow = <span ref={arrowRef} className={`${cls}popup-arrow`} />;
  }

  const handleShow = usePersist(() => {
    if (!disableAnimation) {
      setInState(true);
    }
    if (onShow) {
      onShow();
    }
  });

  const handleClose = usePersist(() => {
    if (!disableAnimation && !isControlled) {
      setInState(false);
    }
    if (onClose) {
      onClose();
    }
  });

  const handleUpdate = usePersist((data: PopperUpdateData) => {
    const { x, y, arrowX, arrowY, placement, referenceHidden } = data;

    Object.assign(popperRef.current!.style, {
      top: `${y}px`,
      left: `${x}px`,
      visibility:
        referenceHidden &&
        (placement.startsWith("left") || placement.startsWith("right"))
          ? "hidden"
          : "visible",
    });
    popperRef.current!.dataset.placement = placement;

    if (arrowRef.current) {
      if (arrowX) {
        arrowRef.current.style.left = `${arrowX}px`;
      }
      if (arrowY) {
        arrowRef.current.style.top = `${arrowY}px`;
      }
      arrowRef.current.dataset.placement = placement;
    }

    if (onUpdate) {
      onUpdate(data);
    }
  });

  if (disableAnimation) {
    return (
      <Popper
        offset={hideArrow ? 4 : 14}
        arrowPadding={8}
        {...rest}
        ref={composedRef}
        arrow={arrow}
        open={open}
        defaultOpen={defaultOpen}
        className={cn(`${cls}popup`, className)}
        closeDelay={closeDelay}
        onShow={handleShow}
        onClose={handleClose}
        onUpdate={handleUpdate}
      />
    );
  } else {
    return (
      <Transition
        in={inState}
        durations={fast}
        classNames
        exitDelay={closeDelay}
      >
        <Popper
          offset={hideArrow ? 4 : 14}
          arrowPadding={8}
          {...rest}
          ref={composedRef}
          arrow={arrow}
          open={open}
          defaultOpen={defaultOpen}
          className={cn(`${cls}popup`, className)}
          closeDelay={isPositiveNumber(closeDelay) ? closeDelay + fast : fast}
          onShow={handleShow}
          onClose={handleClose}
          onUpdate={handleUpdate}
        />
      </Transition>
    );
  }
});

export default Popup;
