import React, { MouseEvent, ReactNode, forwardRef } from "react";
import cn from "classnames";
import { usePersist, useSetState, useUpdate } from "@lilib/hooks";
import Button, { ButtonProps } from "../Button";
import Description from "../Description";
import Flexbox from "../Flexbox";
import Icon from "../Icon";
import Popup, { PopupProps } from "../Popup";
import Prefix from "../Prefix";
import Text from "../Text";
import InfoIcon from "../icons/InfoIcon";
import isPromise from "../utils/isPromise";
import isRenderable from "../utils/isRenderable";

export interface ConfirmProps extends Omit<PopupProps, "title"> {
  icon?: ReactNode;
  title?: ReactNode;
  detail?: ReactNode;
  confirmLabel?: ReactNode;
  cancelLabel?: ReactNode;
  confirmProps?: ButtonProps;
  cancelProps?: ButtonProps;
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

  const handleOpen = usePersist(() => {
    if (!controlled) {
      setState({ open: true });
    }
    onOpen?.();
  });

  const close = () => {
    if (!controlled) {
      setState({ open: false });
    }
    onClose?.();
  };

  const handleClose = usePersist(() => {
    if (confirming) {
      return;
    }
    close();
  });

  const handleConfirm = usePersist((event: MouseEvent<HTMLButtonElement>) => {
    confirmProps?.onClick?.(event);
    let result = onConfirm?.(event);
    if (isPromise(result)) {
      setState({ confirming: true });
      result.then(
        (value) => {
          setState({ confirming: false });
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

  const handleCancel = usePersist((event: MouseEvent<HTMLButtonElement>) => {
    cancelProps?.onClick?.(event);
    if (confirming) {
      return;
    }
    onCancel?.(event);
    close();
  });

  const content = (
    <>
      {isRenderable(contentProp) ? (
        contentProp
      ) : (
        <Description
          icon={
            isRenderable(icon) ? (
              icon
            ) : (
              <Text<typeof Icon> as={Icon} intent="alertive">
                <InfoIcon />
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
