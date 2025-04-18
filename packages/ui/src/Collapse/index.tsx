import React, { useRef, HTMLAttributes, forwardRef } from "react";
import cn from "classnames";
import { useComposedRef } from "@lilib/hooks";
import Prefix from "../Prefix";
import Duration from "../Duration";
import Transition from "../Transition";

export interface CollapseProps extends HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  openDelay?: number;
  closeDelay?: number;
  firstMount?: boolean;
  firstAppear?: boolean;
  keepMounted?: boolean;
  onOpen?: () => void;
  onOpening?: () => void;
  onOpened?: () => void;
  onClose?: () => void;
  onClosing?: () => void;
  onClosed?: () => void;
}

const Collapse = forwardRef<HTMLDivElement, CollapseProps>((props, ref) => {
  const {
    style,
    children,
    className,
    open,
    openDelay,
    closeDelay,
    firstMount,
    firstAppear,
    keepMounted,
    onOpen,
    onOpening,
    onOpened,
    onClose,
    onClosing,
    onClosed,
    ...rest
  } = props;

  const { cls } = Prefix.useConfig();
  const { base } = Duration.useConfig();
  const domRef = useRef<HTMLDivElement>();
  const composedRef = useComposedRef(domRef, ref);

  return (
    <Transition
      in={open}
      classes
      durations={base}
      enterDelay={openDelay}
      exitDelay={closeDelay}
      firstMount={firstMount}
      firstAppear={firstAppear}
      keepMounted={keepMounted}
      onEnter={onOpen}
      onEntering={onOpening}
      onEntered={onOpened}
      onExit={onClose}
      onExiting={onClosing}
      onExited={onClosed}
    >
      {(state) => {
        const element = domRef.current!;
        let height: number | undefined;

        switch (state) {
          case Transition.ENTER:
          case Transition.EXITING:
          case Transition.EXITED: {
            height = 0;
            break;
          }
          case Transition.ENTERING: {
            height = element.scrollHeight;
            break;
          }
          case Transition.EXIT: {
            height = element.getBoundingClientRect().height;
            break;
          }
          default:
            break;
        }

        return (
          <div
            {...rest}
            ref={composedRef}
            style={Object.assign({}, style, height !== undefined ? { height } : {})}
            className={cn(`${cls}collapse`, className)}
          >
            {children}
          </div>
        );
      }}
    </Transition>
  );
});

export default Collapse;
