import React, { HTMLAttributes, MouseEvent, forwardRef, useRef } from "react";
import cn from "classnames";
import { EffectTarget } from "@lilib/utils";
import { useComposedRef, usePersist, useSetState, useUpdate } from "@lilib/hooks";
import Portal from "../Portal";
import Prefix from "../Prefix";
import Display from "../Display";
import Trigger from "../Trigger";
import Duration from "../Duration";
import Transition from "../Transition";
import isPositiveNumber from "../utils/isPositiveNumber";
import useSuppressBodyScrollbar from "../utils/useSuppressBodyScrollbar";

export type BackdropCloseEvent = "escape" | "page-hide" | "window-blur" | "backdrop-click";

export interface BackdropProps extends HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  defaultOpen?: boolean;
  off?: BackdropCloseEvent | BackdropCloseEvent[];
  blurred?: boolean;
  container?: EffectTarget<HTMLElement>;
  openDelay?: number;
  closeDelay?: number;
  firstMount?: boolean;
  keepMounted?: boolean;
  onClose?: () => void;
  onOpened?: () => void;
  onClosed?: () => void;
  onDisplayed?: () => void;
}

const Backdrop = forwardRef<HTMLDivElement, BackdropProps>((props, ref) => {
  const {
    children,
    className,
    open: openProp,
    defaultOpen,
    off = "backdrop-click",
    blurred,
    container,
    openDelay,
    closeDelay: exitDelay,
    firstMount,
    keepMounted,
    onClick,
    onClose,
    onOpened,
    onClosed,
    onDisplayed,
    ...rest
  } = props;

  const closeEvents = Array.isArray(off) ? off : [off];
  const triggerCloseEvents = closeEvents.filter((name) => name !== "backdrop-click");
  const closeOnBackdropClick = closeEvents.includes("backdrop-click");

  const { cls } = Prefix.useConfig();
  const { base } = Duration.useConfig();
  const closeDelay = isPositiveNumber(exitDelay) ? exitDelay + base : base;

  const backdropRef = useRef(null);
  const composedBackdropRef = useComposedRef(backdropRef, ref);

  const controlled = "open" in props;
  const [{ open, displayed, enter }, setState] = useSetState(() => {
    const open = controlled ? !!openProp : !!defaultOpen;
    return { open, displayed: open, enter: open };
  });

  const classes = cn(
    `${cls}backdrop`,
    {
      [`${cls}blurred`]: blurred,
    },
    className
  );

  const handleClose = usePersist(() => {
    if (!controlled) {
      setState({ open: false });
    }
    onClose?.();
  });

  const handleBackdropClick = usePersist((event: MouseEvent<HTMLDivElement>) => {
    onClick?.(event);
    if (closeOnBackdropClick && open) {
      handleClose();
    }
  });

  const handleDisplayed = usePersist(() => {
    setState({ displayed: true });
  });

  const handleClosed = usePersist(() => {
    setState({ displayed: false });
    onClosed?.();
  });

  useUpdate(() => {
    if (controlled) {
      setState({ open: !!openProp });
    }
  }, [openProp]);

  useUpdate(() => {
    if (open) {
      if (displayed) {
        setState({ enter: true });
      }
    } else {
      setState({ enter: false });
    }
  }, [open, displayed]);

  useSuppressBodyScrollbar(displayed);

  return (
    <>
      <Trigger off={triggerCloseEvents} open={open} onClose={handleClose} />
      <Display
        open={open}
        openDelay={openDelay}
        closeDelay={closeDelay}
        firstMount={firstMount}
        keepMounted={keepMounted}
        onOpened={handleDisplayed}
        onClosed={handleClosed}
      >
        <Portal container={container}>
          <Transition
            in={enter}
            durations={base}
            exitDelay={exitDelay}
            classes
            firstMount
            keepMounted
            onEntered={onOpened}
          >
            <div {...rest} ref={composedBackdropRef} className={classes} onClick={handleBackdropClick}>
              <Portal.Config container={backdropRef}>{children}</Portal.Config>
            </div>
          </Transition>
        </Portal>
      </Display>
    </>
  );
});

export default Backdrop;
