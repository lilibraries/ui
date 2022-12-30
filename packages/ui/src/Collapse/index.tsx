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
  appearOnOpen?: boolean;
  unmountOnClose?: boolean;
  onOpen?: () => void;
  onOpened?: () => void;
  onClose?: () => void;
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
    appearOnOpen,
    unmountOnClose,
    onOpen,
    onOpened,
    onClose,
    onClosed,
    ...rest
  } = props;

  const { cls } = Prefix.useConfig();
  const { fast } = Duration.useConfig();
  const domRef = useRef<HTMLDivElement>();
  const composedRef = useComposedRef(domRef, ref);

  return (
    <Transition
      in={open}
      durations={fast}
      classNames={{
        [Transition.ENTER]: true,
        [Transition.ENTERING]: true,
        [Transition.EXIT]: true,
        [Transition.EXITING]: true,
        [Transition.EXITED]: true,
      }}
      enterDelay={openDelay}
      exitDelay={closeDelay}
      appearOnEnter={appearOnOpen}
      unmountOnExit={unmountOnClose}
      onEnter={onOpen}
      onEntered={onOpened}
      onExit={onClose}
      onExited={onClosed}
    >
      {(state) => {
        const element = domRef.current as HTMLDivElement;
        let height: number | string | undefined;

        switch (state) {
          case Transition.ENTER:
          case Transition.EXITING: {
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
            style={Object.assign(
              {},
              style,
              height !== undefined ? { height } : {}
            )}
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
