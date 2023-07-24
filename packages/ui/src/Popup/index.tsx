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
    onClose,
    onOpened,
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

  const handleOpened = usePersist(() => {
    if (!disableAnimation) {
      setInState(true);
    }
    if (onOpened) {
      onOpened();
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
    const { x, y, arrowX, arrowY, placement } = data;

    Object.assign(popperRef.current!.style, {
      top: `${y}px`,
      left: `${x}px`,
    });
    popperRef.current!.dataset.placement = placement;

    if (arrowRef.current) {
      if (arrowX) {
        arrowRef.current.style.left = `${arrowX}px`;
      } else {
        arrowRef.current.style.left = "";
      }
      if (arrowY) {
        arrowRef.current.style.top = `${arrowY}px`;
      } else {
        arrowRef.current.style.top = "";
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
        onClose={handleClose}
        onOpened={handleOpened}
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
          onClose={handleClose}
          onOpened={handleOpened}
          onUpdate={handleUpdate}
        />
      </Transition>
    );
  }
});

export default Popup;
