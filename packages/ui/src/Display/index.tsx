import React, { FC, ReactNode, useRef, useState } from "react";
import { useUpdate, useTimeout, useIsomorphicLayoutEffect } from "@lilib/hooks";
import isPositiveNumber from "../utils/isPositiveNumber";
import useCloseEvent, { CloseEventOptions } from "./useCloseEvent";

export interface DisplayProps extends CloseEventOptions {
  children?: ReactNode;
  open?: boolean;
  openDelay?: number;
  closeDelay?: number;
  firstMount?: boolean;
  keepMounted?: boolean;
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
    firstMount,
    keepMounted,
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
  const renderedRef = useRef(false);
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

  const [startShowTimer, cancelShowTimer] = useTimeout(setOpened, openDelay);
  const [startHideTimer, cancelHideTimer] = useTimeout(setClosed, closeDelay);

  useUpdate(
    () => {
      cancelShowTimer();
      cancelHideTimer();
      if (open) {
        if (delayOnOpen) {
          startShowTimer();
        } else {
          setOpened();
        }
      } else {
        if (delayOnClose) {
          startHideTimer();
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
      renderedRef.current = true;
    } else {
      if (!keepMounted) {
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
    open && display && onClose
      ? {
          closeOnEscape,
          closeOnPageHide,
          closeOnWindowBlur,
          closeOnClickOutside,
          closeOnDocumentClick,
        }
      : {}
  );

  let renderable = false;
  if (display) {
    renderable = true;
  } else if (firstMount && !renderedRef.current) {
    renderable = true;
  } else if (keepMounted && openedRef.current) {
    renderable = true;
  }

  return renderable ? <>{children}</> : null;
};

Display.useCloseEvent = useCloseEvent;

export default Display;
