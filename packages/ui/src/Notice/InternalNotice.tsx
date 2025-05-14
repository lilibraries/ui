import React, { useRef, ReactNode, MouseEvent, HTMLAttributes, FC, useEffect, useState } from "react";
import cn from "classnames";
import { usePersist, useTimeout } from "@lilib/hooks";
import Icon from "../Icon";
import Text from "../Text";
import Portal from "../Portal";
import Prefix from "../Prefix";
import Duration from "../Duration";
import Transition from "../Transition";
import Description from "../Description";
import Button, { ButtonProps } from "../Button";
import CloseIcon from "../icons/CloseIcon";
import FilledInfoIcon from "../icons/FilledInfoIcon";
import FilledCheckIcon from "../icons/FilledCheckIcon";
import FilledCloseIcon from "../icons/FilledCloseIcon";
import FilledExclamationIcon from "../icons/FilledExclamationIcon";
import { IntentValue } from "../utils/types";
import isRenderable from "../utils/isRenderable";
import isPositiveNumber from "../utils/isPositiveNumber";

export type NoticePlacement = "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end";

export interface NoticeHookOptions extends Omit<HTMLAttributes<HTMLDivElement>, "title" | "children"> {
  icon?: ReactNode;
  title?: ReactNode;
  detail?: ReactNode;
  intent?: IntentValue;
  duration?: number;
  placement?: NoticePlacement;
  closable?: boolean;
  closeProps?: ButtonProps;
  onClose?: () => void;
  onOpened?: () => void;
  onClosed?: () => void;
}

interface IntervalNoticeProps extends NoticeHookOptions {
  open?: boolean;
}

const IntervalNotice: FC<IntervalNoticeProps> = (props) => {
  const {
    className,
    icon: iconProp,
    title,
    detail,
    intent,
    duration,
    placement = "top-end",
    open,
    closable,
    closeProps,
    onClose,
    onOpened,
    onClosed,
    ...rest
  } = props;

  const { cls } = Prefix.useConfig();
  const { base } = Duration.useConfig();

  const noticeRef = useRef(null);
  const [enter, setEnter] = useState(false);

  useEffect(() => {
    setEnter(!!open);
  }, [open]);

  const [setCloseTimer, cancelCloseTimer] = useTimeout(() => {
    onClose?.();
  }, duration);

  useEffect(
    () => {
      cancelCloseTimer();
      if (isPositiveNumber(duration) && duration <= Number.MAX_SAFE_INTEGER) {
        setCloseTimer();
      }
    },
    [duration] // eslint-disable-line
  );

  const handleClose = usePersist((event: MouseEvent<HTMLButtonElement>) => {
    cancelCloseTimer();
    closeProps?.onClick?.(event);
    onClose?.();
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
    <Transition in={enter} classes durations={base} firstAppear onEntered={onOpened} onExited={onClosed}>
      <div {...rest} ref={noticeRef} className={cn(`${cls}notice`, className)} data-placement={placement}>
        <Portal.Config container={noticeRef}>
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
            {detail}
          </Description>
        </Portal.Config>
      </div>
    </Transition>
  );
};

export default IntervalNotice;
