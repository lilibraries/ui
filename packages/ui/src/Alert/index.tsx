import React, {
  useState,
  ReactNode,
  MouseEvent,
  forwardRef,
  HTMLAttributes,
} from "react";
import cn from "classnames";
import { usePersist, useUpdate } from "@lilib/hooks";
import Prefix from "../Prefix";
import Collapse from "../Collapse";
import Direction from "../Direction";
import Button, { ButtonProps } from "../Button";
import CloseIcon from "../icons/CloseIcon";
import { IntentValue } from "../utils/types";

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  intent?: IntentValue;
  open?: boolean;
  closable?: boolean;
  closeProps?: ButtonProps;
  onClose?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  const {
    children,
    className,
    intent,
    open: openProp,
    closable,
    closeProps,
    onClose,
    ...rest
  } = props;

  const { cls } = Prefix.useConfig();
  const isRTL = Direction.useConfig() === "rtl";

  const isControlled = openProp != null;
  const [open, setOpen] = useState(isControlled ? !!openProp : true);

  useUpdate(() => {
    if (isControlled) {
      setOpen(!!openProp);
    }
  }, [openProp]);

  const classes = cn(
    `${cls}alert`,
    {
      [`${cls}rtl`]: isRTL,
      [`${cls}${intent}`]: intent,
    },
    className
  );

  const handleClose = usePersist((event: MouseEvent<HTMLButtonElement>) => {
    if (closeProps?.onClick) {
      closeProps?.onClick(event);
    }
    if (onClose) {
      onClose(event);
    }
    if (!isControlled) {
      setOpen(false);
    }
  });

  let closer: ReactNode = null;
  if (closable) {
    closer = (
      <Button
        children={<CloseIcon />}
        round
        iconOnly
        borderless
        intent={intent}
        variant="hollow"
        {...closeProps}
        onClick={handleClose}
        className={cn(`${cls}alert-closer`, closeProps?.className)}
      />
    );
  }

  return (
    <Collapse open={open}>
      <div {...rest} ref={ref} className={classes}>
        <div className={`${cls}alert-content`}>{children}</div>
        {closer}
      </div>
    </Collapse>
  );
});

export default Alert;
