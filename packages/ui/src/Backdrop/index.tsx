import React, { HTMLAttributes, MouseEvent, forwardRef, useRef } from "react";
import cn from "classnames";
import { useComposedRef, usePersist, useSetState, useUpdate } from "@lilib/hooks";
import { EffectTarget } from "@lilib/utils";
import Display from "../Display";
import Duration from "../Duration";
import Portal from "../Portal";
import Prefix from "../Prefix";
import Transition from "../Transition";
import Trigger from "../Trigger";
import isPositiveNumber from "../utils/isPositiveNumber";
import useSuppressBodyScrollbar from "../utils/useSuppressBodyScrollbar";

export type BackdropCloseEvent = "escape" | "page-hide" | "window-blur" | "backdrop-click";

export interface BackdropProps extends HTMLAttributes<HTMLDivElement> {
  blurred?: boolean;
  animeless?: boolean;
  off?: BackdropCloseEvent | BackdropCloseEvent[];
  container?: EffectTarget<HTMLElement>;
  open?: boolean;
  defaultOpen?: boolean;
  openDelay?: number;
  closeDelay?: number;
  firstMount?: boolean;
  keepMounted?: boolean;
  onClose?: () => void;
  onOpened?: () => void;
  onClosed?: () => void;
}

const Backdrop = forwardRef<HTMLDivElement, BackdropProps>((props, ref) => {
  const {
    children,
    className,
    blurred,
    animeless,
    off = "backdrop-click",
    container,
    open: openProp,
    defaultOpen,
    openDelay,
    closeDelay,
    firstMount,
    keepMounted,
    onClick,
    onClose,
    onOpened,
    onClosed,
    ...rest
  } = props;

  const closeEvents = Array.isArray(off) ? off : [off];
  const triggerCloseEvents = closeEvents.filter((name) => name !== "backdrop-click");
  const closeOnBackdropClick = closeEvents.includes("backdrop-click");

  const { cls } = Prefix.useConfig();
  const { base } = Duration.useConfig();
  const backdropRef = useRef(null);
  const composedBackdropRef = useComposedRef(backdropRef, ref);

  const controlled = "open" in props;
  const [{ open, opened, enter }, setState] = useSetState(() => {
    const open = controlled ? !!openProp : !!defaultOpen;
    return { open, opened: open, enter: open };
  });

  const classes = cn(
    `${cls}backdrop`,
    {
      [`${cls}opened`]: opened,
      [`${cls}blurred`]: blurred,
    },
    className
  );

  const triggerClose = usePersist(() => {
    if (!controlled) {
      setState({ open: false });
    }
    onClose?.();
  });

  const handleOpened = usePersist(() => {
    setState({ opened: true });
    onOpened?.();
  });

  const handleClosed = usePersist(() => {
    setState({ opened: false });
    onClosed?.();
  });

  const handleBackdropClick = usePersist((event: MouseEvent<HTMLDivElement>) => {
    onClick?.(event);
    if (closeOnBackdropClick && open) {
      if (!controlled) {
        setState({ open: false });
      }
      onClose?.();
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

  useSuppressBodyScrollbar(opened);

  let displayCloseDelay = closeDelay;
  let backdrop = (
    <div {...rest} ref={composedBackdropRef} className={classes} onClick={handleBackdropClick}>
      <Portal.Config container={backdropRef}>{children}</Portal.Config>
    </div>
  );

  if (!animeless) {
    displayCloseDelay = isPositiveNumber(closeDelay) ? closeDelay + base : base;
    backdrop = (
      <Transition in={enter} classes durations={base} exitDelay={closeDelay} firstMount keepMounted>
        {backdrop}
      </Transition>
    );
  }

  return (
    <Trigger off={triggerCloseEvents} open={open} onClose={triggerClose}>
      <Display
        open={open}
        openDelay={openDelay}
        closeDelay={displayCloseDelay}
        firstMount={firstMount}
        keepMounted={keepMounted}
        onOpened={handleOpened}
        onClosed={handleClosed}
      >
        <Portal container={container}>{backdrop}</Portal>
      </Display>
    </Trigger>
  );
});

export default Backdrop;
