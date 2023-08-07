import { EffectTarget } from "@lilib/utils";
import React, { HTMLAttributes, forwardRef, useRef } from "react";
import Backdrop from "../Backdrop";
import Prefix from "../Prefix";
import cn from "classnames";
import { useClickOutside, useComposedRef } from "@lilib/hooks";

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  centered?: boolean;
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

const Modal = forwardRef<HTMLDivElement, ModalProps>((props, ref) => {
  const {
    children,
    className,
    animeless,
    container,
    open,
    defaultOpen,
    openDelay,
    closeDelay,
    firstMount,
    keepMounted,
    closeOnEscape,
    closeOnPageHide,
    closeOnWindowBlur,
    closeOnBackdropClick,
    onClose,
    onOpened,
    onClosed,
    ...rest
  } = props;

  const { cls } = Prefix.useConfig();
  const classes = cn(`${cls}modal`, className);

  const modalRef = useRef(null);
  const composedRef = useComposedRef(modalRef, ref);
  const backdropRef = useRef(null);

  useClickOutside(
    modalRef,
    () => {
      if (onClose) {
        onClose();
      }
    },
    {
      container: backdropRef,
    }
  );

  return (
    <Backdrop
      ref={backdropRef}
      animeless={animeless}
      container={container}
      open={open}
      defaultOpen={defaultOpen}
      openDelay={openDelay}
      closeDelay={closeDelay}
      firstMount={firstMount}
      keepMounted={keepMounted}
      closeOnEscape={closeOnEscape}
      closeOnPageHide={closeOnPageHide}
      closeOnWindowBlur={closeOnWindowBlur}
      closeOnBackdropClick={false}
      onClose={onClose}
      onOpened={onOpened}
      onClosed={onClosed}
    >
      <div {...rest} ref={composedRef} className={classes}>
        {children}
      </div>
    </Backdrop>
  );
});

export default Modal;
