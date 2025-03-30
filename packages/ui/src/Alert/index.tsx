import React, { HTMLAttributes, MouseEvent, ReactNode, forwardRef, useState } from "react";
import cn from "classnames";
import { usePersist, useUpdate } from "@lilib/hooks";
import Icon from "../Icon";
import Text from "../Text";
import Prefix from "../Prefix";
import Collapse from "../Collapse";
import Description from "../Description";
import Button, { ButtonProps } from "../Button";
import CloseIcon from "../icons/CloseIcon";
import FilledInfoIcon from "../icons/FilledInfoIcon";
import FilledCheckIcon from "../icons/FilledCheckIcon";
import FilledCloseIcon from "../icons/FilledCloseIcon";
import FilledExclamationIcon from "../icons/FilledExclamationIcon";
import isRenderable from "../utils/isRenderable";
import { IntentValue } from "../utils/types";

export interface AlertProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  open?: boolean;
  intent?: IntentValue;
  icon?: ReactNode;
  title?: ReactNode;
  closable?: boolean;
  closeProps?: ButtonProps;
  onClose?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  const {
    children,
    className,
    open: openProp,
    intent,
    icon: iconProp,
    title,
    closable,
    closeProps,
    onClose,
    ...rest
  } = props;
  const controlled = "open" in props;

  const { cls } = Prefix.useConfig();
  const [open, setOpen] = useState(controlled ? !!openProp : true);

  useUpdate(() => {
    if (controlled) {
      setOpen(!!openProp);
    }
  }, [openProp]);

  const classes = cn(
    `${cls}alert`,
    {
      [`${cls}${intent}`]: intent,
    },
    className
  );

  const handleClose = usePersist((event: MouseEvent<HTMLButtonElement>) => {
    closeProps?.onClick?.(event);
    if (!controlled) {
      setOpen(false);
    }
    onClose?.(event);
  });

  let icon: ReactNode = null;
  if ("icon" in props) {
    icon = iconProp;
  } else {
    if (intent === "positive") {
      icon = <FilledCheckIcon />;
    } else if (intent === "alertive") {
      icon = <FilledExclamationIcon />;
    } else if (intent === "negative") {
      icon = <FilledCloseIcon />;
    } else {
      icon = <FilledInfoIcon />;
    }
  }

  let closer: ReactNode = null;
  if (closable) {
    closer = (
      <Button
        rounded
        iconOnly
        borderless
        intent="minor"
        variant="hollow"
        children={<CloseIcon />}
        {...closeProps}
        onClick={handleClose}
      />
    );
  }

  return (
    <Collapse open={open}>
      <div {...rest} ref={ref} className={classes}>
        <Description
          icon={
            isRenderable(icon) && (
              <Text<typeof Icon> as={Icon} intent={intent}>
                {icon}
              </Text>
            )
          }
          endIcon={closer}
          title={title}
        >
          {children}
        </Description>
      </div>
    </Collapse>
  );
});

export default Alert;
