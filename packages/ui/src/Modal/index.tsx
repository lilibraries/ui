import React, {
  useRef,
  ReactNode,
  forwardRef,
  MouseEvent,
  ReactElement,
  cloneElement,
  HTMLAttributes,
  isValidElement,
} from "react";
import cn from "classnames";
import { EffectTarget } from "@lilib/utils";
import { useClickOutside, usePersist, useSetState, useUpdate } from "@lilib/hooks";
import Card from "../Card";
import Theme from "../Theme";
import Portal from "../Portal";
import Prefix from "../Prefix";
import Flexbox from "../Flexbox";
import Duration from "../Duration";
import Transition from "../Transition";
import Button, { ButtonProps } from "../Button";
import Backdrop, { BackdropCloseEvent } from "../Backdrop";
import CloseIcon from "../icons/CloseIcon";
import isPromise from "../utils/isPromise";
import isCSSValue from "../utils/isCSSValue";
import isRenderable from "../utils/isRenderable";

export type ModalWidth = "small" | "medium" | "large" | number | (string & {});

export interface ModalProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  icon?: ReactNode;
  title?: ReactNode;
  headnote?: ReactNode;
  footnote?: ReactNode;
  divided?: boolean;
  striped?: boolean;
  unpadding?: boolean;
  borderless?: boolean;
  width?: ModalWidth;
  blurred?: boolean;
  centered?: boolean;
  open?: boolean;
  defaultOpen?: boolean;
  off?: BackdropCloseEvent | BackdropCloseEvent[];
  trigger?: ReactElement;
  container?: EffectTarget<HTMLElement>;
  closable?: boolean;
  closeProps?: ButtonProps;
  cancelLabel?: ReactNode;
  cancelProps?: ButtonProps;
  confirmLabel?: ReactNode;
  confirmProps?: ButtonProps;
  openDelay?: number;
  closeDelay?: number;
  firstMount?: boolean;
  keepMounted?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  onOpened?: () => void;
  onClosed?: () => void;
  onCancel?: (event: MouseEvent<HTMLButtonElement>) => void;
  onConfirm?: (event: MouseEvent<HTMLButtonElement>) => Promise<any> | void;
}

const Modal = forwardRef<HTMLDivElement, ModalProps>((props, ref) => {
  const {
    children,
    style,
    className,
    icon,
    title,
    headnote,
    footnote,
    divided,
    striped,
    unpadding,
    borderless,
    width,
    blurred,
    centered,
    open: openProp,
    defaultOpen,
    off = "backdrop-click",
    trigger,
    container,
    closable,
    closeProps,
    cancelLabel,
    cancelProps,
    confirmLabel,
    confirmProps,
    openDelay,
    closeDelay,
    firstMount,
    keepMounted,
    onOpen,
    onClose,
    onOpened,
    onClosed,
    onCancel,
    onConfirm,
    ...rest
  } = props;

  const closeEvents = Array.isArray(off) ? off : [off];
  const backdropCloseEvents = closeEvents.filter((name) => name !== "backdrop-click");
  const closeOnClickOutside = closeEvents.includes("backdrop-click");

  const isDark = Theme.useConfig() === "dark";
  const { cls } = Prefix.useConfig();
  const { base } = Duration.useConfig();
  const containerRef = useRef(null);

  const controlled = openProp != null;
  const [{ open, opened, enter, confirming }, setState] = useSetState(() => {
    const open = controlled ? !!openProp : !!defaultOpen;
    return { open, opened: open, enter: open, confirming: false };
  });

  const close = usePersist(() => {
    if (!controlled) {
      setState({ open: false });
    }
    onClose?.();
  });

  const handleClose = usePersist(() => {
    if (confirming) {
      return;
    }
    close();
  });

  const handleTriggerClick = usePersist((event: any) => {
    (trigger as ReactElement).props.onClick?.(event);
    if (!controlled) {
      setState({ open: true });
    }
    onOpen?.();
  });

  const handleCloserClick = usePersist((event: MouseEvent<HTMLButtonElement>) => {
    closeProps?.onClick?.(event);
    close();
  });

  const handleOpened = usePersist(() => {
    setState({ opened: true });
    onOpened?.();
  });

  const handleClosed = usePersist(() => {
    setState({ opened: false, confirming: false });
    onClosed?.();
  });

  const handleCancel = usePersist((event: MouseEvent<HTMLButtonElement>) => {
    cancelProps?.onClick?.(event);
    onCancel?.(event);
    close();
  });

  const handleConfirm = usePersist((event: MouseEvent<HTMLButtonElement>) => {
    confirmProps?.onClick?.(event);
    let promise: Promise<any> | void = undefined;
    if (onConfirm) {
      promise = onConfirm(event);
    }
    if (isPromise(promise)) {
      setState({ confirming: true });
      promise.then(
        (value) => {
          close();
          return value;
        },
        (reason) => {
          setState({ confirming: false });
          throw reason;
        }
      );
    } else {
      close();
    }
  });

  useUpdate(() => {
    if (controlled) {
      setState({ open: !!openProp });
    }
  }, [openProp]);

  useUpdate(() => {
    if (open) {
      if (opened) {
        setState({ enter: true });
      }
    } else {
      setState({ enter: false });
    }
  }, [open, opened]);

  useClickOutside(closeOnClickOutside && open && opened ? containerRef : null, handleClose);

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

  if (closable) {
    headmark = (
      <Button
        rounded
        iconOnly
        borderless
        intent="minor"
        variant="hollow"
        disabled={confirming}
        children={<CloseIcon />}
        {...closeProps}
        onClick={handleCloserClick}
      />
    );
  }

  const hasCancelLabel = isRenderable(cancelLabel);
  const hasConfirmLabel = isRenderable(confirmLabel);

  if (hasCancelLabel || hasConfirmLabel) {
    footmark = (
      <Flexbox gap="2x" align="center">
        {hasCancelLabel && (
          <Button disabled={confirming} {...cancelProps} onClick={handleCancel}>
            {cancelLabel}
          </Button>
        )}
        {hasConfirmLabel && (
          <Button
            intent="major"
            variant="solid"
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

  return (
    <>
      {isValidElement(trigger) ? cloneElement<any>(trigger, { onClick: handleTriggerClick }) : trigger}
      <Backdrop
        off={backdropCloseEvents}
        blurred={blurred}
        container={container}
        open={open}
        openDelay={openDelay}
        closeDelay={closeDelay}
        firstMount={firstMount}
        keepMounted={keepMounted}
        onClose={handleClose}
        onOpened={handleOpened}
        onClosed={handleClosed}
      >
        <div ref={containerRef} className={`${cls}modal-container`}>
          <Transition in={enter} classes durations={base} exitDelay={closeDelay} firstMount keepMounted>
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
              divided={divided}
              striped={striped}
              unpadding={unpadding}
              borderless={"borderless" in props ? borderless : isDark ? false : true}
            >
              <Portal.Config container={containerRef}>{children}</Portal.Config>
            </Card>
          </Transition>
        </div>
      </Backdrop>
    </>
  );
});

export default Modal;
