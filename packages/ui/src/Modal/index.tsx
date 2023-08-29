import React, {
  useRef,
  ReactNode,
  forwardRef,
  MouseEvent,
  ReactElement,
  HTMLAttributes,
} from "react";
import cn from "classnames";
import { EffectTarget } from "@lilib/utils";
import {
  useUpdate,
  usePersist,
  useSetState,
  useClickOutside,
} from "@lilib/hooks";
import Card from "../Card";
import Prefix from "../Prefix";
import Portal from "../Portal";
import Flexbox from "../Flexbox";
import Display from "../Display";
import Duration from "../Duration";
import Transition from "../Transition";
import Button, { ButtonProps } from "../Button";
import Backdrop, { BackdropProps } from "../Backdrop";
import CloseIcon from "../icons/CloseIcon";
import isPromise from "../utils/isPromise";
import isCSSValue from "../utils/isCSSValue";
import isRenderable from "../utils/isRenderable";
import isPositiveNumber from "../utils/isPositiveNumber";
import RenderAfterMounted from "../utils/RenderAfterMounted";

export type ModalWidthSize = "small" | "medium" | "large";

export interface ModalProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  width?: ModalWidthSize | string | number;
  centered?: boolean;
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
  splited?: boolean;
  unpadding?: boolean;
  borderless?: boolean;
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
  closeOnClickOutside?: boolean;
  disableCloseWhenConfirming?: boolean;
  disableCancelWhenConfirming?: boolean;
  onClose?: () => void;
  onOpened?: () => void;
  onClosed?: () => void;
  onConfirm?: (event: MouseEvent<HTMLButtonElement>) => Promise<any> | void;
  onCancel?: (event: MouseEvent<HTMLButtonElement>) => void;
  renderHeader?: (header: ReactElement | null) => ReactNode;
  renderFooter?: (footer: ReactElement | null) => ReactNode;
  renderActions?: (
    actions: ReactElement | null,
    close: () => void
  ) => ReactNode;
}

const Modal = forwardRef<HTMLDivElement, ModalProps>((props, ref) => {
  const {
    children,
    style,
    className,
    width,
    centered,
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
    splited,
    unpadding,
    borderless,
    animeless,
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
    renderHeader,
    renderFooter,
    renderActions,
    ...rest
  } = props;

  const { cls } = Prefix.useConfig();
  const { base } = Duration.useConfig();

  const backdropRef = useRef(null);
  const containerRef = useRef(null);

  const controlled = openProp != null;
  const [{ open, opened, enter, confirming }, setState] = useSetState(() => {
    const open = controlled ? !!openProp : !!defaultOpen;
    return { open, opened: open, enter: open, confirming: false };
  });

  const handleClose = usePersist(() => {
    if (confirming && disableCloseWhenConfirming) {
      return;
    }
    if (!controlled) {
      setState({ open: false });
    }
    if (onClose) {
      onClose();
    }
  });

  const handleButtonClose = usePersist(
    (event: MouseEvent<HTMLButtonElement>) => {
      if (closeProps?.onClick) {
        closeProps?.onClick(event);
      }
      handleClose();
    }
  );

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

  const handleCancel = usePersist((event: MouseEvent<HTMLButtonElement>) => {
    if (cancelProps?.onClick) {
      cancelProps?.onClick(event);
    }
    if (confirming && disableCancelWhenConfirming) {
      return;
    }
    if (onCancel) {
      onCancel(event);
    }
    handleClose();
  });

  const handleConfirm = usePersist((event: MouseEvent<HTMLButtonElement>) => {
    if (confirmProps?.onClick) {
      confirmProps?.onClick(event);
    }
    let result: Promise<any> | void = undefined;
    if (onConfirm) {
      result = onConfirm(event);
    }
    if (isPromise(result)) {
      setState({ confirming: true });
      result.then(
        (value) => {
          setState({ confirming: false });
          handleClose();
          return value;
        },
        (reason) => {
          setState({ confirming: false });
          throw reason;
        }
      );
    } else {
      handleClose();
    }
  });

  useClickOutside(
    closeOnClickOutside && open && opened ? containerRef : null,
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

  const isPresetSize = ["small", "medium", "large"].includes(String(width));
  const isCustomSize = !isPresetSize && isCSSValue(width);

  const classes = cn(
    `${cls}modal`,
    {
      [`${cls}opened`]: opened,
      [`${cls}centered`]: centered,
      [`${cls}${width}`]: isPresetSize,
    },
    className
  );

  let headmark: ReactNode = null;
  let footmark: ReactNode = null;
  let closeDelay = exitDelay;

  if (showClose) {
    headmark = (
      <Button
        round
        iconOnly
        borderless
        size="large"
        variant="hollow"
        disabled={confirming && disableCloseWhenConfirming}
        {...closeProps}
        onClick={handleButtonClose}
      >
        <CloseIcon />
      </Button>
    );
  }

  const hasConfirmLabel = isRenderable(confirmLabel);
  const hasCancelLabel = isRenderable(cancelLabel);

  if (hasConfirmLabel || hasCancelLabel) {
    footmark = (
      <Flexbox gap="2x">
        {hasCancelLabel && (
          <Button
            color="gray"
            variant="hollow"
            borderless
            disabled={confirming && disableCancelWhenConfirming}
            {...cancelProps}
            onClick={handleCancel}
          >
            {cancelLabel}
          </Button>
        )}
        {hasConfirmLabel && (
          <Button
            intent="major"
            variant="solid"
            borderless
            loading={confirming}
            loadingPlacement="start"
            {...confirmProps}
            onClick={handleConfirm}
          >
            {confirmLabel}
          </Button>
        )}
      </Flexbox>
    );
  }

  if (renderActions) {
    footmark = renderActions(footmark as ReactElement | null, handleClose);
  }

  let result = (
    <Card
      {...rest}
      ref={ref}
      style={isCustomSize ? { ...style, width } : style}
      className={classes}
      icon={icon}
      title={title}
      headnote={headnote}
      headmark={headmark}
      footnote={footnote}
      footmark={footmark}
      splited={splited}
      unpadding={unpadding}
      borderless={borderless}
      renderHeader={renderHeader}
      renderFooter={renderFooter}
    >
      <Portal.Config container={containerRef}>
        {firstMount ? (
          <RenderAfterMounted>{children}</RenderAfterMounted>
        ) : (
          children
        )}
      </Portal.Config>
    </Card>
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
        firstMount
        keepMounted
      >
        {result}
      </Transition>
    );
  }

  result = (
    <div ref={containerRef} className={`${cls}modal-container`}>
      {result}
    </div>
  );

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
        {...backdropProps}
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
