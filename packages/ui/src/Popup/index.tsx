import React, { ReactElement, forwardRef, useRef } from "react";
import cn from "classnames";
import {
  useUpdate,
  usePersist,
  useSetState,
  useComposedRef,
} from "@lilib/hooks";
import Prefix from "../Prefix";
import Duration from "../Duration";
import Transition from "../Transition";
import Popper, { PopperProps, PopperUpdateData } from "../Popper";
import isPositiveNumber from "../utils/isPositiveNumber";

export interface PopupProps
  extends Omit<PopperProps, "arrow" | "arrowPadding" | "render"> {
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
    open: openProp,
    defaultOpen,
    closeDelay: exitDelay,
    onOpen,
    onClose,
    onOpened,
    onClosed,
    onUpdate,
    ...rest
  } = props;

  const controlled = openProp != null;
  const [{ open, opened, enter }, setState] = useSetState(() => {
    const open = controlled ? !!openProp : !!defaultOpen;
    return { open, opened: open, enter: open };
  });

  const handleOpen = usePersist(() => {
    if (!controlled) {
      setState({ open: true });
    }
    if (onOpen) {
      onOpen();
    }
  });

  const handleClose = usePersist(() => {
    if (!controlled) {
      setState({ open: false });
    }
    if (onClose) {
      onClose();
    }
  });

  const handleOpened = usePersist(() => {
    setState({ opened: true });
    if (onOpened) {
      onOpened();
    }
  });

  const handleClosed = usePersist(() => {
    setState({ opened: false });
    if (onClosed) {
      onClosed();
    }
  });

  useUpdate(() => {
    if (controlled) {
      setState({ open: !!openProp });
    }
  }, [openProp]);

  useUpdate(() => {
    if (!animeless) {
      if (open) {
        if (opened) {
          setState({ enter: true });
        }
      } else {
        setState({ enter: false });
      }
    }
  }, [open, opened]);

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

  let render: ((popper: ReactElement) => ReactElement) | undefined;
  let closeDelay = exitDelay;

  if (!animeless) {
    render = (popper) => {
      return (
        <Transition
          in={enter}
          classes
          durations={fast}
          exitDelay={exitDelay}
          firstMount
          keepMounted
        >
          {popper}
        </Transition>
      );
    };
    if (isPositiveNumber(exitDelay)) {
      closeDelay = exitDelay + fast;
    } else {
      closeDelay = fast;
    }
  }

  return (
    <Popper
      offset={arrowless ? 4 : 14}
      {...rest}
      ref={composedRef}
      arrow={arrow}
      arrowPadding={8}
      open={open}
      className={classes}
      closeDelay={closeDelay}
      render={render}
      onOpen={handleOpen}
      onClose={handleClose}
      onOpened={handleOpened}
      onClosed={handleClosed}
      onUpdate={handleUpdate}
    />
  );
});

export default Popup;
