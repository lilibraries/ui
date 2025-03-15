import React, { HTMLAttributes, MouseEvent, ReactNode, forwardRef } from "react";
import cn from "classnames";
import {
  AiFillCheckCircle,
  AiFillCloseCircle,
  AiFillExclamationCircle,
  AiFillInfoCircle,
  AiOutlineClose,
} from "react-icons/ai";
import { usePersist, useSafeState, useUpdate } from "@lilib/hooks";
import Button, { ButtonProps } from "../Button";
import Collapse from "../Collapse";
import Description from "../Description";
import Icon from "../Icon";
import Prefix from "../Prefix";
import Text from "../Text";
import isRenderable from "../utils/isRenderable";
import { IntentValue } from "../utils/types";

export interface AlertProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  open?: boolean;
  intent?: IntentValue;
  icon?: boolean | ReactNode;
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
  const [open, setOpen] = useSafeState(controlled ? !!openProp : true);

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
    onClose?.(event);
    if (!controlled) {
      setOpen(false);
    }
  });

  let icon: ReactNode = null;
  if (iconProp === true) {
    if (intent === "positive") {
      icon = <AiFillCheckCircle />;
    } else if (intent === "alertive") {
      icon = <AiFillExclamationCircle />;
    } else if (intent === "negative") {
      icon = <AiFillCloseCircle />;
    } else {
      icon = <AiFillInfoCircle />;
    }
  } else {
    icon = iconProp;
  }

  let closer: ReactNode = null;
  if (closable) {
    closer = (
      <Button
        rounded
        iconOnly
        borderless
        intent={intent}
        variant="hollow"
        children={<AiOutlineClose />}
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
          mark={closer}
          title={title}
        >
          {children}
        </Description>
      </div>
    </Collapse>
  );
});

export default Alert;
