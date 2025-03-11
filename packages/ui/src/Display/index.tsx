import { FC, ReactNode, useEffect, useRef } from "react";
import { useUpdate, useTimeout, useSafeState } from "@lilib/hooks";
import isPositiveNumber from "../utils/isPositiveNumber";

export interface DisplayProps {
  children?: ReactNode;
  open?: boolean;
  openDelay?: number;
  closeDelay?: number;
  firstMount?: boolean;
  keepMounted?: boolean;
  onOpened?: () => void;
  onClosed?: () => void;
}

const Display: FC<DisplayProps> = (props) => {
  const { children, open, openDelay, closeDelay, firstMount, keepMounted, onOpened, onClosed } = props;

  const delayOnOpen = isPositiveNumber(openDelay);
  const delayOnClose = isPositiveNumber(closeDelay);

  const openedRef = useRef(false);
  const renderedRef = useRef(false);
  const [display, setDisplay] = useSafeState(!!open);

  const setOpened = () => {
    setDisplay(true);
    onOpened?.();
  };

  const setClosed = () => {
    setDisplay(false);
    onClosed?.();
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

  useEffect(
    () => {
      if (display) {
        openedRef.current = true;
        renderedRef.current = true;
      } else {
        if (!keepMounted) {
          openedRef.current = false;
        }
      }
    },
    [display] // eslint-disable-line
  );

  let renderable = false;
  if (display) {
    renderable = true;
  } else if (firstMount && !renderedRef.current) {
    renderable = true;
  } else if (keepMounted && openedRef.current) {
    renderable = true;
  }

  return renderable ? children : null;
};

export default Display;
