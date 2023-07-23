import React, { MouseEvent, ReactNode, forwardRef } from "react";
import cn from "classnames";
import { usePersist, useSetState, useUpdate } from "@lilib/hooks";
import Icon from "../Icon";
import Text from "../Text";
import Info from "../Info";
import Prefix from "../Prefix";
import Flexbox from "../Flexbox";
import Popup, { PopupProps } from "../Popup";
import Button, { ButtonProps } from "../Button";
import InfoIcon from "../icons/InfoIcon";
import isPromise from "../utils/isPromise";
import isRenderableNode from "../utils/isRenderableNode";

export interface ConfirmProps extends Omit<PopupProps, "title"> {
  icon?: ReactNode;
  title?: ReactNode;
  detail?: ReactNode;
  confirmLabel?: ReactNode;
  cancelLabel?: ReactNode;
  confirmProps?: ButtonProps;
  cancelProps?: ButtonProps;
  disableCloseWhenConfirming?: boolean;
  disableCancelWhenConfirming?: boolean;
  onConfirm?: (event: MouseEvent<HTMLButtonElement>) => Promise<any> | void;
  onCancel?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Confirm = forwardRef<HTMLDivElement, ConfirmProps>((props, ref) => {
  const {
    icon,
    title,
    detail,
    confirmLabel = "Confirm",
    cancelLabel = "Cancel",
    confirmProps,
    cancelProps,
    disableCloseWhenConfirming,
    disableCancelWhenConfirming,
    onConfirm,
    onCancel,
    className,
    open: openProp,
    defaultOpen,
    content: contentProp,
    onOpen,
    onClose,
    ...rest
  } = props;

  const { cls } = Prefix.useConfig();
  const classes = cn(`${cls}confirm`, className);

  const isControlled = openProp != null;
  const [{ open, confirming }, setState] = useSetState({
    open: isControlled ? !!openProp : !!defaultOpen,
    confirming: false,
  });

  useUpdate(() => {
    if (isControlled) {
      setState({ open: !!openProp });
    }
  }, [openProp]);

  const handleOpen = usePersist(() => {
    if (!isControlled) {
      setState({ open: true });
    }
    if (onOpen) {
      onOpen();
    }
  });

  const close = () => {
    if (!isControlled) {
      setState({ open: false });
    }
    if (onClose) {
      onClose();
    }
  };

  const handleClose = usePersist(() => {
    if (confirming && disableCloseWhenConfirming) {
      return;
    }
    close();
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
        () => {
          setState({ confirming: false });
          close();
        },
        () => {
          setState({ confirming: false });
        }
      );
    } else {
      close();
    }
  });

  const handleCancel = usePersist((event: MouseEvent<HTMLButtonElement>) => {
    if (cancelProps?.onClick) {
      cancelProps?.onClick(event);
    }
    if (onCancel) {
      onCancel(event);
    }
    if (confirming && disableCancelWhenConfirming) {
      return;
    }
    close();
  });

  const content = (
    <>
      {isRenderableNode(contentProp) ? (
        contentProp
      ) : (
        <Info
          indicator={
            isRenderableNode(icon) ? (
              icon
            ) : (
              <Text as={Icon} intent="alertive">
                <InfoIcon />
              </Text>
            )
          }
        >
          {isRenderableNode(title) && <Info.Title>{title}</Info.Title>}
          {isRenderableNode(detail) && <Info.Detail>{detail}</Info.Detail>}
        </Info>
      )}
      <Flexbox
        fluid
        gap="2x"
        justify="flex-end"
        className={`${cls}confirm-actions`}
      >
        {isRenderableNode(cancelLabel) && (
          <Button
            size="small"
            variant="hollow"
            color="gray"
            borderless
            disabled={confirming && disableCancelWhenConfirming}
            {...cancelProps}
            onClick={handleCancel}
          >
            {cancelLabel}
          </Button>
        )}
        <Button
          size="small"
          variant="solid"
          intent="major"
          borderless
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
      {...rest}
      ref={ref}
      open={open}
      content={content}
      className={classes}
      onOpen={handleOpen}
      onClose={handleClose}
    />
  );
});

export default Confirm;
