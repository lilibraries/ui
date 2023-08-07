import React, { useRef, forwardRef, MouseEvent, HTMLAttributes } from "react";
import cn from "classnames";
import { EffectTarget } from "@lilib/utils";
import {
  useUpdate,
  usePersist,
  useSetState,
  useComposedRef,
} from "@lilib/hooks";
import Prefix from "../Prefix";
import Portal from "../Portal";
import Display from "../Display";
import Duration from "../Duration";
import Transition from "../Transition";
import isPositiveNumber from "../utils/isPositiveNumber";
import useSuppressBodyScrollbar from "./useSuppressBodyScrollbar";

export interface BackdropProps extends HTMLAttributes<HTMLDivElement> {
  blurred?: boolean;
  transparent?: boolean;
  animeless?: boolean;
  container?: EffectTarget<HTMLElement>;
  open?: boolean;
  defaultOpen?: boolean;
  openDelay?: number;
  closeDelay?: number;
  firstMount?: boolean;
  keepMounted?: boolean;
  closeOnEscape?: boolean;
  closeOnPageHide?: boolean;
  closeOnWindowBlur?: boolean;
  closeOnBackdropClick?: boolean;
  onClose?: () => void;
  onOpened?: () => void;
  onClosed?: () => void;
}

const Backdrop = forwardRef<HTMLDivElement, BackdropProps>((props, ref) => {
  const {
    children,
    className,
    blurred,
    transparent,
    animeless,
    container,
    open: openProp,
    defaultOpen,
    openDelay,
    closeDelay,
    firstMount,
    keepMounted,
    closeOnEscape,
    closeOnPageHide,
    closeOnWindowBlur,
    closeOnBackdropClick = true,
    onClick,
    onClose,
    onOpened,
    onClosed,
    ...rest
  } = props;

  const { cls } = Prefix.useConfig();
  const { base } = Duration.useConfig();
  const backdropRef = useRef(null);
  const composedRef = useComposedRef(backdropRef, ref);

  const controlled = openProp != null;
  const [{ open, opened, enter }, setState] = useSetState(() => {
    const open = controlled ? !!openProp : !!defaultOpen;
    return { open, opened: open, enter: open };
  });

  const classes = cn(
    `${cls}backdrop`,
    {
      [`${cls}opened`]: opened,
      [`${cls}blurred`]: blurred && !transparent,
      [`${cls}transparent`]: transparent,
    },
    className
  );

  const handleClose = usePersist(() => {
    if (!controlled) {
      setState({ open: false, enter: false });
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

  const handleClick = usePersist((event: MouseEvent<HTMLDivElement>) => {
    if (onClick) {
      onClick(event);
    }
    if (closeOnBackdropClick) {
      if (!controlled) {
        setState({ open: false, enter: false });
      }
      if (onClose) {
        onClose();
      }
    }
  });

  useUpdate(() => {
    if (controlled) {
      const newState: {
        open: boolean;
        enter?: boolean;
      } = {
        open: !!openProp,
      };
      if (!openProp) {
        newState.enter = false;
      }
      setState(newState);
    }
  }, [openProp]);

  useUpdate(() => {
    if (opened && !animeless) {
      setState({ enter: true });
    }
  }, [opened]);

  useSuppressBodyScrollbar(opened);

  if (animeless) {
    return (
      <Display
        open={open}
        openDelay={openDelay}
        closeDelay={closeDelay}
        firstMount={firstMount}
        keepMounted={keepMounted}
        closeOnEscape={closeOnEscape}
        closeOnPageHide={closeOnPageHide}
        closeOnWindowBlur={closeOnWindowBlur}
        onClose={handleClose}
        onOpened={handleOpened}
        onClosed={handleClosed}
      >
        <Portal container={container}>
          <div
            {...rest}
            ref={composedRef}
            className={classes}
            onClick={handleClick}
          >
            <Portal.Config container={backdropRef}>{children}</Portal.Config>
          </div>
        </Portal>
      </Display>
    );
  }

  return (
    <Display
      open={open}
      openDelay={openDelay}
      closeDelay={isPositiveNumber(closeDelay) ? closeDelay + base : base}
      firstMount={firstMount}
      keepMounted={keepMounted}
      closeOnEscape={closeOnEscape}
      closeOnPageHide={closeOnPageHide}
      closeOnWindowBlur={closeOnWindowBlur}
      onClose={handleClose}
      onOpened={handleOpened}
      onClosed={handleClosed}
    >
      <Portal container={container}>
        <Transition
          classes
          durations={base}
          in={enter}
          exitDelay={closeDelay}
          keepMounted
        >
          <div
            {...rest}
            ref={composedRef}
            className={classes}
            onClick={handleClick}
          >
            <Portal.Config container={backdropRef}>{children}</Portal.Config>
          </div>
        </Transition>
      </Portal>
    </Display>
  );
});

export default Backdrop;
