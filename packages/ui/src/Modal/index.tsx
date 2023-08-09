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
  useUpdate,
  usePersist,
  useSetState,
  useComposedRef,
  useClickOutside,
} from "@lilib/hooks";
import Prefix from "../Prefix";
import Portal from "../Portal";
import Display from "../Display";
import Duration from "../Duration";
import Transition from "../Transition";
import { ButtonProps } from "../Button";
import Backdrop, { BackdropProps } from "../Backdrop";
import isPositiveNumber from "../utils/isPositiveNumber";

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
    closeDelay: exitDelay,
    firstMount,
    keepMounted,
    closeOnEscape,
    closeOnPageHide,
    closeOnWindowBlur,
    closeOnClickOutside = true,
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

  const modalRef = useRef(null);
  const backdropRef = useRef(null);
  const modalComposedRef = useComposedRef(modalRef, ref);

  const controlled = openProp != null;
  const [{ open, opened, enter }, setState] = useSetState(() => {
    const open = controlled ? !!openProp : !!defaultOpen;
    return { open, opened: open, enter: open };
  });

  const handleClose = usePersist(() => {
    if (!controlled) {
      setState({ open: false });
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

  const classes = cn(
    `${cls}modal`,
    {
      [`${cls}unpadding`]: unpadding,
    },
    className
  );

  useClickOutside(
    closeOnClickOutside && open && opened ? modalRef : null,
    handleClose,
    { container: backdropRef }
  );

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

  let closeDelay = exitDelay;
  let result = (
    <div {...rest} ref={modalComposedRef} className={classes}>
      <Portal.Config container={modalRef}>{children}</Portal.Config>
    </div>
  );

  if (!animeless) {
    if (isPositiveNumber(exitDelay)) {
      closeDelay = exitDelay + base;
    } else {
      closeDelay = base;
    }
    result = (
      <Transition
        in={enter}
        classes
        durations={base}
        exitDelay={exitDelay}
        keepMounted
      >
        {result}
      </Transition>
    );
  }

  if (hideBackdrop) {
    result = (
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
        <Portal container={container}>{result}</Portal>
      </Display>
    );
  } else {
    result = (
      <Backdrop
        ref={backdropRef}
        animeless={animeless}
        container={container}
        open={open}
        openDelay={openDelay}
        closeDelay={closeDelay}
        firstMount={firstMount}
        keepMounted={keepMounted}
        closeOnEscape={closeOnEscape}
        closeOnPageHide={closeOnPageHide}
        closeOnWindowBlur={closeOnWindowBlur}
        closeOnBackdropClick={false}
        onClose={handleClose}
        onOpened={handleOpened}
        onClosed={handleClosed}
      >
        {result}
      </Backdrop>
    );
  }

  return result;
});

export default Modal;
