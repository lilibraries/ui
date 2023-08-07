import React, {
  useRef,
  ReactNode,
  forwardRef,
  MouseEvent,
  HTMLAttributes,
} from "react";
import cn from "classnames";
import { EffectTarget } from "@lilib/utils";
import {
  useClickOutside,
  useComposedRef,
  useSetState,
  useUpdate,
} from "@lilib/hooks";
import Prefix from "../Prefix";
import { ButtonProps } from "../Button";
import Backdrop, { BackdropProps } from "../Backdrop";
import Portal from "../Portal";
import Transition from "../Transition";
import Duration from "../Duration";

export interface ModalProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  width?: "small" | "medium" | "large" | string | number;
  unpadding?: boolean;
  animeless?: boolean;
  icon?: ReactNode;
  title?: ReactNode;
  headnote?: ReactNode;
  footnote?: ReactNode;
  showClose?: boolean;
  closeProps?: ButtonProps;
  hideBackdrop?: boolean;
  backdropProps?: BackdropProps;
  confirmLabel?: ReactNode;
  confirmProps?: ButtonProps;
  cancelLabel?: ReactNode;
  cancelProps?: ButtonProps;
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
  closeOnClickOutside?: boolean;
  disableCloseWhenConfirming?: boolean;
  disableCancelWhenConfirming?: boolean;
  onClose?: () => void;
  onOpened?: () => void;
  onClosed?: () => void;
  onConfirm?: (event: MouseEvent<HTMLButtonElement>) => Promise<any> | void;
  onCancel?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Modal = forwardRef<HTMLDivElement, ModalProps>((props, ref) => {
  const {
    children,
    className,
    width,
    unpadding,
    animeless,
    icon,
    title,
    headnote,
    footnote,
    showClose,
    closeProps,
    hideBackdrop,
    backdropProps,
    confirmLabel,
    confirmProps,
    cancelLabel,
    cancelProps,
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
    closeOnClickOutside,
    disableCloseWhenConfirming,
    disableCancelWhenConfirming,
    onClose,
    onOpened,
    onClosed,
    onConfirm,
    onCancel,
    ...rest
  } = props;

  const { cls } = Prefix.useConfig();
  const { base } = Duration.useConfig();

  const controlled = openProp != null;
  const [{ open, opened, enter }, setState] = useSetState(() => {
    const open = controlled ? !!openProp : !!defaultOpen;
    return { open, opened: open, enter: open };
  });

  const classes = cn(`${cls}modal`, className);

  const modalRef = useRef(null);
  const backdropRef = useRef(null);
  const modalComposedRef = useComposedRef(modalRef, ref);

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

  useClickOutside(
    modalRef,
    () => {
      if (onClose) {
        onClose();
      }
    },
    { container: backdropRef }
  );

  if (hideBackdrop) {
    return null;
  }

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
      <Transition
        in={enter}
        classes
        durations={base}
        exitDelay={closeDelay}
        keepMounted
      >
        <div {...rest} ref={modalComposedRef} className={classes}>
          <Portal.Config container={modalRef}>{children}</Portal.Config>
        </div>
      </Transition>
    </Backdrop>
  );
});

export default Modal;
