import React, {
  useRef,
  forwardRef,
  MouseEvent,
  RefAttributes,
  HTMLAttributes,
  ForwardRefExoticComponent,
} from "react";
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
import createProvider from "../utils/createProvider";

export interface BackdropProps extends HTMLAttributes<HTMLDivElement> {
  blurred?: boolean;
  transparent?: boolean;
  animated?: boolean;
  container?: EffectTarget<HTMLElement>;
  open?: boolean;
  defaultOpen?: boolean;
  openDelay?: number;
  closeDelay?: number;
  prepared?: boolean;
  keepAlive?: boolean;
  closeOnEscape?: boolean;
  closeOnPageHide?: boolean;
  closeOnWindowBlur?: boolean;
  closeOnBackdropClick?: boolean;
  onClose?: () => void;
  onOpened?: () => void;
  onClosed?: () => void;
}

export interface BackdropComponent
  extends ForwardRefExoticComponent<
    BackdropProps & RefAttributes<HTMLDivElement>
  > {
  Provider: typeof addons.Provider;
  useBackdrop: typeof addons.useHook;
}

const Backdrop = forwardRef<HTMLDivElement, BackdropProps>((props, ref) => {
  const {
    children,
    className,
    blurred,
    transparent,
    animated = true,
    container,
    open: openProp,
    defaultOpen,
    openDelay,
    closeDelay,
    prepared,
    keepAlive,
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

  const isControlled = openProp != null;
  const [{ open, opened, enter }, setState] = useSetState(() => {
    const open = isControlled ? !!openProp : !!defaultOpen;
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
    if (!isControlled) {
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
      if (!isControlled) {
        setState({ open: false, enter: false });
      }
      if (onClose) {
        onClose();
      }
    }
  });

  useUpdate(() => {
    if (isControlled) {
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
    if (opened && animated) {
      setState({ enter: true });
    }
  }, [opened]);

  useSuppressBodyScrollbar(opened);

  if (animated) {
    return (
      <Display
        open={open}
        openDelay={openDelay}
        closeDelay={isPositiveNumber(closeDelay) ? closeDelay + base : base}
        prepared={prepared}
        keepAlive={keepAlive}
        closeOnEscape={closeOnEscape}
        closeOnPageHide={closeOnPageHide}
        closeOnWindowBlur={closeOnWindowBlur}
        onClose={handleClose}
        onOpened={handleOpened}
        onClosed={handleClosed}
      >
        <Portal container={container}>
          <Transition
            in={enter}
            durations={base}
            keepAlive
            classNames
            exitDelay={closeDelay}
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
  } else {
    return (
      <Display
        open={open}
        openDelay={openDelay}
        closeDelay={closeDelay}
        prepared={prepared}
        keepAlive={keepAlive}
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
}) as BackdropComponent;

const addons = createProvider(Backdrop);

Backdrop.Provider = addons.Provider;
Backdrop.useBackdrop = addons.useHook;

export default Backdrop;
