import React, {
  useState,
  ReactNode,
  MouseEvent,
  forwardRef,
  RefAttributes,
  HTMLAttributes,
  PropsWithoutRef,
  ForwardRefExoticComponent,
} from "react";
import cn from "classnames";
import { usePersist, useUpdate } from "@lilib/hooks";
import Prefix from "../Prefix";
import Collapse from "../Collapse";
import Direction from "../Direction";
import CloseIcon from "../icons/CloseIcon";
import { IntentValue } from "../utils/types";
import isRenderableNode from "../utils/isRenderableNode";
import AlertTitle from "./AlertTitle";
import AlertDescription from "./AlertDescription";

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  intent?: IntentValue;
  icon?: ReactNode;
  open?: boolean;
  closable?: boolean;
  closeIcon?: ReactNode;
  onClose?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export interface AlertComponent
  extends ForwardRefExoticComponent<
    PropsWithoutRef<AlertProps> & RefAttributes<HTMLDivElement>
  > {
  Title: typeof AlertTitle;
  Description: typeof AlertDescription;
}

const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  const {
    children,
    className,
    intent,
    icon: iconProp,
    open: openProp = true,
    closable,
    closeIcon,
    onClose,
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
      [`${cls}rtl`]: isRTL,
      [`${cls}${intent}`]: intent,
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

  let icon: ReactNode = null;
  if (isRenderableNode(iconProp)) {
    icon = <span className={`${cls}alert-icon`}>{iconProp}</span>;
  }

  let closeButton: ReactNode = null;
  if (closable) {
    closeButton = (
      <button onClick={handleClose} className={`${cls}alert-close`}>
        {isRenderableNode(closeIcon) ? closeIcon : <CloseIcon />}
      </button>
    );
  }

  return (
    <Collapse open={open} unmountOnClose>
      <div {...rest} ref={ref} className={classes}>
        {icon}
        <div className={`${cls}alert-content`}>{children}</div>
        {closeButton}
      </div>
    </Collapse>
  );
}) as AlertComponent;

Alert.Title = AlertTitle;
Alert.Description = AlertDescription;

export default Alert;
