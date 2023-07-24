import React, { FC, ReactNode, useRef, useState } from "react";
import {
  useUpdate,
  useTimeout,
  useMountedRef,
  useIsomorphicLayoutEffect,
} from "@lilib/hooks";
import isPositiveNumber from "../utils/isPositiveNumber";
import useCloseEvent, { CloseEventOptions } from "./useCloseEvent";

export interface DisplayProps extends CloseEventOptions {
  children?: ReactNode;
  open?: boolean;
  openDelay?: number;
  closeDelay?: number;
  keepAlive?: boolean;
  initialized?: boolean;
  onClose?: () => void;
  onOpened?: () => void;
  onClosed?: () => void;
}

const Display: FC<DisplayProps> & {
  useCloseEvent: typeof useCloseEvent;
} = (props) => {
  const {
    children,
    open,
    openDelay,
    closeDelay,
    keepAlive,
    initialized,
    closeOnEscape,
    closeOnPageHide,
    closeOnWindowBlur,
    closeOnClickOutside,
    closeOnDocumentClick,
    onClose,
    onOpened,
    onClosed,
  } = props;

  const delayOnOpen = isPositiveNumber(openDelay);
  const delayOnClose = isPositiveNumber(closeDelay);

  const openedRef = useRef(false);
  const mountedRef = useMountedRef();
  const [display, setDisplay] = useState(!!open);

  const setOpened = () => {
    setDisplay(true);
    if (onOpened) {
      onOpened();
    }
  };
  const setClosed = () => {
    setDisplay(false);
    if (onClosed) {
      onClosed();
    }
  };

  const [startOpenedTimer, cancelOpenedTimer] = useTimeout(
    setOpened,
    openDelay
  );
  const [startClosedTimer, cancelClosedTimer] = useTimeout(
    setClosed,
    closeDelay
  );

  useUpdate(
    () => {
      cancelOpenedTimer();
      cancelClosedTimer();
      if (open) {
        if (delayOnOpen) {
          startOpenedTimer();
        } else {
          setOpened();
        }
      } else {
        if (delayOnClose) {
          startClosedTimer();
        } else {
          setClosed();
        }
      }
    },
    [open] // eslint-disable-line
  );

  useIsomorphicLayoutEffect(() => {
    if (display) {
      openedRef.current = true;
    } else {
      if (!keepAlive) {
        openedRef.current = false;
      }
    }
  }, [display]);

  useCloseEvent(
    () => {
      if (onClose) {
        onClose();
      }
    },
    {
      closeOnEscape,
      closeOnPageHide,
      closeOnWindowBlur,
      closeOnClickOutside,
      closeOnDocumentClick,
    }
  );

  let renderable = false;
  if (display) {
    renderable = true;
  } else if (initialized && !mountedRef.current) {
    renderable = true;
  } else if (keepAlive && openedRef.current) {
    renderable = true;
  }

  return renderable ? <>{children}</> : null;
};

Display.useCloseEvent = useCloseEvent;

export default Display;
