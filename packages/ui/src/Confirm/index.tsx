import React, { MouseEvent, ReactNode, forwardRef } from "react";
import cn from "classnames";
import { usePersist, useSetState, useUpdate } from "@lilib/hooks";
import Icon from "../Icon";
import Text from "../Text";
import Prefix from "../Prefix";
import Flexbox from "../Flexbox";
import Description from "../Description";
import Popup, { PopupProps } from "../Popup";
import Button, { ButtonProps } from "../Button";
import isPromise from "../utils/isPromise";
import isRenderable from "../utils/isRenderable";
import FilledInfoIcon from "../icons/FilledInfoIcon";

export interface ConfirmProps extends Omit<PopupProps, "title"> {
  icon?: ReactNode;
  title?: ReactNode;
  detail?: ReactNode;
  cancelLabel?: ReactNode;
  confirmLabel?: ReactNode;
  cancelProps?: ButtonProps;
  confirmProps?: ButtonProps;
  onCancel?: (event: MouseEvent<HTMLButtonElement>) => void;
  onConfirm?: (event: MouseEvent<HTMLButtonElement>) => Promise<any> | void;
}

const Confirm = forwardRef<HTMLDivElement, ConfirmProps>((props, ref) => {
  const {
    icon,
    title,
    detail,
    cancelLabel = "Cancel",
    confirmLabel = "Confirm",
    cancelProps,
    confirmProps,
    onCancel,
    onConfirm,
    className,
    open: openProp,
    defaultOpen,
    content: contentProp,
    onOpen,
    onClose,
    onClosed,
    ...rest
  } = props;

  const { cls } = Prefix.useConfig();
  const classes = cn(`${cls}confirm`, className);

  const controlled = "open" in props;
  const [{ open, confirming }, setState] = useSetState({
    open: controlled ? !!openProp : !!defaultOpen,
    confirming: false,
  });

  useUpdate(() => {
    if (controlled) {
      setState({ open: !!openProp });
    }
  }, [openProp]);

  const close = usePersist(() => {
    if (!controlled) {
      setState({ open: false });
    }
    onClose?.();
  });

  const handleOpen = usePersist(() => {
    if (!controlled) {
      setState({ open: true });
    }
    onOpen?.();
  });

  const handleClose = usePersist(() => {
    if (confirming) {
      return;
    }
    close();
  });

  const handleClosed = usePersist(() => {
    if (confirming) {
      setState({ confirming: false });
    }
    onClosed?.();
  });

  const handleCancel = usePersist((event: MouseEvent<HTMLButtonElement>) => {
    cancelProps?.onClick?.(event);
    if (confirming) {
      return;
    }
    onCancel?.(event);
    close();
  });

  const handleConfirm = usePersist((event: MouseEvent<HTMLButtonElement>) => {
    confirmProps?.onClick?.(event);
    let promise = onConfirm?.(event);
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

  const content = (
    <>
      {isRenderable(contentProp) ? (
        contentProp
      ) : (
        <Description
          icon={
            "icon" in props ? (
              icon
            ) : (
              <Text<typeof Icon> as={Icon} intent="alertive">
                <FilledInfoIcon />
              </Text>
            )
          }
          title={title}
        >
          {detail}
        </Description>
      )}
      <Flexbox fluid gap="2x" justify="flex-end" className={`${cls}confirm-actions`}>
        {isRenderable(cancelLabel) && (
          <Button size="small" disabled={confirming} {...cancelProps} onClick={handleCancel}>
            {cancelLabel}
          </Button>
        )}
        <Button
          size="small"
          intent="major"
          variant="solid"
          loading={confirming}
          loadingPlacement="start"
          {...confirmProps}
          onClick={handleConfirm}
        >
          {confirmLabel}
        </Button>
      </Flexbox>
    </>
  );

  return (
    <Popup
      arrowed
      placement="top"
      {...rest}
      ref={ref}
      open={open}
      content={content}
      className={classes}
      onOpen={handleOpen}
      onClose={handleClose}
      onClosed={handleClosed}
    />
  );
});

export default Confirm;
