import React, { forwardRef, HTMLAttributes, ReactNode, useRef } from "react";
import cn from "classnames";
import { ButtonProps } from "../Button";
import { IntentValue } from "../utils/types";
import { EffectTarget } from "@lilib/utils";
import Prefix from "../Prefix";
import Duration from "../Duration";
import Display from "../Display";
import { useComposedRef, usePersist, useSetState, useUpdate } from "@lilib/hooks";
import isPositiveNumber from "../utils/isPositiveNumber";
import Portal from "../Portal";
import Transition from "../Transition";
import Description from "../Description";

export type NoticePlacement = "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end";

export interface NoticeProps extends Omit<HTMLAttributes<HTMLDivElement>, "title" | "children"> {
  icon?: ReactNode;
  title?: ReactNode;
  detail?: ReactNode;
  intent?: IntentValue;
  compact?: boolean;
  duration?: number;
  placement?: NoticePlacement;
  open?: boolean;
  defaultOpen?: boolean;
  closable?: boolean;
  closeProps?: ButtonProps;
  container?: EffectTarget<HTMLElement>;
  openDelay?: number;
  closeDelay?: number;
  firstMount?: boolean;
  keepMounted?: boolean;
  onClose?: () => void;
  onOpened?: () => void;
  onClosed?: () => void;
}

const Notice = forwardRef<HTMLDivElement, NoticeProps>((props, ref) => {
  const {
    className,
    icon,
    title,
    detail,
    intent,
    compact,
    duration = 5000,
    placement = "top-end",
    open: openProp,
    defaultOpen,
    closable,
    closeProps,
    container,
    openDelay,
    closeDelay: exitDelay,
    firstMount,
    keepMounted,
    onClose,
    onOpened,
    onClosed,
    ...rest
  } = props;

  const { cls } = Prefix.useConfig();
  const { base } = Duration.useConfig();

  const closeDelay = isPositiveNumber(exitDelay) ? exitDelay + base : exitDelay;
  const noticeRef = useRef(null);
  const composedNoticeRef = useComposedRef(noticeRef, ref);

  const controlled = "open" in props;
  const [{ open, opened, enter }, setState] = useSetState(() => {
    const open = controlled ? !!openProp : !!defaultOpen;
    return { open, opened: open, enter: open };
  });

  const handleClose = usePersist(() => {
    if (!controlled) {
      setState({ open: false });
    }
    onClose?.();
  });

  const handleOpened = usePersist(() => {
    setState({ opened: true });
    onOpened?.();
  });

  const handleClosed = usePersist(() => {
    setState({ opened: false });
    onClosed?.();
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

  return (
    <Display
      open={open}
      openDelay={openDelay}
      closeDelay={closeDelay}
      firstMount={firstMount}
      keepMounted={keepMounted}
      onOpened={handleOpened}
      onClosed={handleClosed}
    >
      <Portal container={container}>
        <Transition in={enter} classes durations={base} exitDelay={closeDelay} firstMount keepMounted>
          <div {...rest} ref={composedNoticeRef} className={cn(`${cls}notice`, className)} data-placement={placement}>
            <Portal.Config container={noticeRef}>
              <Description icon={icon} title={title}>
                {detail}
              </Description>
            </Portal.Config>
          </div>
        </Transition>
      </Portal>
    </Display>
  );
});

export default Notice;
