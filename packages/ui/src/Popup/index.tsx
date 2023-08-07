import React, { ReactElement, forwardRef, useRef, useState } from "react";
import cn from "classnames";
import { useComposedRef, usePersist, useUpdate } from "@lilib/hooks";
import Prefix from "../Prefix";
import Duration from "../Duration";
import Transition from "../Transition";
import Popper, { PopperProps, PopperUpdateData } from "../Popper";
import isPositiveNumber from "../utils/isPositiveNumber";

export interface PopupProps
  extends Omit<PopperProps, "arrow" | "arrowPadding"> {
  unpadding?: boolean;
  arrowless?: boolean;
  animeless?: boolean;
}

const Popup = forwardRef<HTMLDivElement, PopupProps>((props, ref) => {
  const {
    className,
    unpadding,
    arrowless,
    animeless,
    open,
    defaultOpen,
    closeDelay,
    onClose,
    onOpened,
    onUpdate,
    ...rest
  } = props;

  const controlled = open != null;
  const [enter, setEnter] = useState(controlled ? !!open : !!defaultOpen);

  useUpdate(() => {
    if (!animeless && controlled && !open) {
      setEnter(false);
    }
  }, [open]);

  const { cls } = Prefix.useConfig();
  const { fast } = Duration.useConfig();

  const arrowRef = useRef<HTMLSpanElement>(null);
  const popperRef = useRef<HTMLDivElement>(null);
  const composedRef = useComposedRef(popperRef, ref);

  const classes = cn(
    `${cls}popup`,
    {
      [`${cls}unpadding`]: unpadding,
    },
    className
  );

  let arrow: ReactElement | undefined;
  if (!arrowless) {
    arrow = <span ref={arrowRef} className={`${cls}popup-arrow`} />;
  }

  const handleOpened = usePersist(() => {
    if (!animeless) {
      setEnter(true);
    }
    if (onOpened) {
      onOpened();
    }
  });

  const handleClose = usePersist(() => {
    if (!animeless && !controlled) {
      setEnter(false);
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

  if (animeless) {
    return (
      <Popper
        offset={arrowless ? 4 : 14}
        {...rest}
        ref={composedRef}
        arrow={arrow}
        arrowPadding={8}
        open={open}
        defaultOpen={defaultOpen}
        className={classes}
        closeDelay={closeDelay}
        onClose={handleClose}
        onOpened={handleOpened}
        onUpdate={handleUpdate}
      />
    );
  }

  return (
    <Transition
      in={enter}
      classes
      durations={fast}
      exitDelay={closeDelay}
      keepMounted
    >
      <Popper
        offset={arrowless ? 4 : 14}
        {...rest}
        ref={composedRef}
        arrow={arrow}
        arrowPadding={8}
        open={open}
        defaultOpen={defaultOpen}
        className={classes}
        closeDelay={isPositiveNumber(closeDelay) ? closeDelay + fast : fast}
        onClose={handleClose}
        onOpened={handleOpened}
        onUpdate={handleUpdate}
      />
    </Transition>
  );
});

export default Popup;
