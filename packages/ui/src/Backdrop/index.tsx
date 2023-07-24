import React, { HTMLAttributes, MouseEvent, forwardRef, useState } from "react";
import cn from "classnames";
import { EffectTarget } from "@lilib/utils";
import { usePersist, useUpdate } from "@lilib/hooks";
import Prefix from "../Prefix";
import Duration from "../Duration";
import Transition from "../Transition";

export interface BackdropProps extends HTMLAttributes<HTMLDivElement> {
  blurred?: boolean;
  transparent?: boolean;
  disableAnimation?: boolean;
  container?: EffectTarget<HTMLElement>;
  mountOnInit?: boolean;
  unmountOnClose?: boolean;
  open?: boolean;
  defaultOpen?: boolean;
  closable?: boolean;
  onClose?: () => void;
}

const Backdrop = forwardRef<HTMLDivElement, BackdropProps>((props, ref) => {
  const {
    className,
    blurred,
    transparent,
    disableAnimation,
    open: openProp,
    defaultOpen,
    closable,
    onClose,
    onClick,
    ...rest
  } = props;

  const isControlled = openProp != null;
  const [open, setOpen] = useState(isControlled ? !!openProp : !!defaultOpen);

  useUpdate(() => {
    if (isControlled) {
      setOpen(!!openProp);
    }
  }, [openProp]);

  const handleClick = usePersist((event: MouseEvent<HTMLDivElement>) => {
    if (onClick) {
      onClick(event);
    }
    if (closable) {
      if (onClose) {
        onClose();
      }
      if (!isControlled) {
        setOpen(false);
      }
    }
  });

  const { cls } = Prefix.useConfig();
  const { base } = Duration.useConfig();

  const classes = cn(
    `${cls}backdrop`,
    {
      [`${cls}blurred`]: blurred && !transparent,
      [`${cls}transparent`]: transparent,
    },
    className
  );

  if (disableAnimation || transparent) {
    return (
      <div {...rest} ref={ref} className={classes} onClick={handleClick} />
    );
  }

  return (
    <Transition in={open} durations={base} classNames unmountOnExit>
      <div {...rest} ref={ref} className={classes} onClick={handleClick} />
    </Transition>
  );
});

export default Backdrop;
