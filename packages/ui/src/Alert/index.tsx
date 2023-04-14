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
import CloseIcon from "../icons/CloseIcon";
import { IntentValue } from "../utils/types";
import isRenderableNode from "../utils/isRenderableNode";

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  intent?: IntentValue;
  icon?: ReactNode;
  open?: boolean;
  closable?: boolean;
  closeIcon?: ReactNode;
  onClose?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  const {
    intent,
    icon,
    open: openProp = true,
    closable,
    closeIcon,
    onClose,
    children,
    className,
    ...rest
  } = props;

  const { cls } = Prefix.useConfig();
  const isRTL = Direction.useConfig() === "rtl";

  const isControlled = "open" in props;
  const [open, setOpen] = useState(!!openProp);

  useUpdate(() => {
    if (isControlled) {
      setOpen(!!openProp);
    }
  }, [openProp]);

  const classes = cn(
    `${cls}alert`,
    {
      [`${cls}${intent}`]: intent,
      [`${cls}rtl`]: isRTL,
    },
    className
  );

  const handleClose = usePersist((event: MouseEvent<HTMLButtonElement>) => {
    if (!isControlled) {
      setOpen(false);
    }
    if (onClose) {
      onClose(event);
    }
  });

  let iconNode: ReactNode = null;
  if (isRenderableNode(icon)) {
    iconNode = <span className={`${cls}alert-icon`}>{icon}</span>;
  }

  let closeButton: ReactNode = null;
  if (closable) {
    closeButton = (
      <button onClick={handleClose} className={`${cls}alert-close`}>
        {closeIcon || <CloseIcon />}
      </button>
    );
  }

  return (
    <Collapse ref={ref} open={open} unmountOnClose>
      <div {...rest} className={classes}>
        {iconNode}
        <div className={`${cls}alert-content`}>{children}</div>
        {closeButton}
      </div>
    </Collapse>
  );
});

export default Alert;
