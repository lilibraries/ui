import React, { ReactElement, forwardRef, useRef } from "react";
import cn from "classnames";
import { useComposedRef, usePersist, useSetState, useUpdate } from "@lilib/hooks";
import Direction from "../Direction";
import Duration from "../Duration";
import Popper, { PopperProps, PopperUpdateData } from "../Popper";
import Prefix from "../Prefix";
import Transition from "../Transition";
import isPositiveNumber from "../utils/isPositiveNumber";

export interface PopupProps extends Omit<PopperProps, "arrow" | "arrowPadding"> {
  arrowed?: boolean;
  unpadding?: boolean;
  animeless?: boolean;
}

const Popup = forwardRef<HTMLDivElement, PopupProps>((props, ref) => {
  const {
    className,
    arrowed,
    unpadding,
    animeless,
    open: openProp,
    defaultOpen,
    closeDelay: exitDelay,
    render,
    onOpen,
    onClose,
    onOpened,
    onClosed,
    onUpdate,
    ...rest
  } = props;

  const controlled = "open" in props;
  const [{ open, opened, enter }, setState] = useSetState(() => {
    const open = controlled ? !!openProp : !!defaultOpen;
    return { open, opened: open, enter: open };
  });

  const handleOpen = usePersist(() => {
    if (!controlled) {
      setState({ open: true });
    }
    onOpen?.();
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
    if (!animeless) {
      if (open) {
        if (opened) {
          setState({ enter: true });
        }
      } else {
        setState({ enter: false });
      }
    }
  }, [open, opened]);

  const { cls } = Prefix.useConfig();
  const { base } = Duration.useConfig();
  const isRTL = Direction.useConfig() === "rtl";

  const arrowRef = useRef<HTMLSpanElement>(null);
  const popperRef = useRef<HTMLDivElement>(null);
  const composedRef = useComposedRef(popperRef, ref);

  const classes = cn(
    `${cls}popup`,
    {
      [`${cls}rtl`]: isRTL,
      [`${cls}unpadding`]: unpadding,
    },
    className
  );

  let arrow: ReactElement | undefined;
  if (arrowed) {
    arrow = <span ref={arrowRef} className={`${cls}popup-arrow`} />;
  }

  const handleUpdate = usePersist((data: PopperUpdateData) => {
    const { x, y, arrowX, arrowY, placement } = data;

    Object.assign(popperRef.current!.style, {
      top: `${y}px`,
      left: `${x}px`,
    });
    popperRef.current!.dataset.placement = placement;

    if (arrowRef.current) {
      if (arrowX) {
        arrowRef.current.style.left = `${arrowX}px`;
      } else {
        arrowRef.current.style.left = "";
      }
      if (arrowY) {
        arrowRef.current.style.top = `${arrowY}px`;
      } else {
        arrowRef.current.style.top = "";
      }
      arrowRef.current.dataset.placement = placement;
    }

    if (onUpdate) {
      onUpdate(data);
    }
  });

  let popperRender = render;
  let closeDelay = exitDelay;

  if (!animeless) {
    popperRender = (popper) => {
      const node = (
        <Transition in={enter} classes durations={base} exitDelay={exitDelay} firstMount keepMounted>
          {popper}
        </Transition>
      );
      return render ? render(node) : node;
    };
    if (isPositiveNumber(exitDelay)) {
      closeDelay = exitDelay + base;
    } else {
      closeDelay = base;
    }
  }

  return (
    <Popper
      offset={arrowed ? 14 : 4}
      {...rest}
      ref={composedRef}
      arrow={arrow}
      arrowPadding={8}
      open={open}
      className={classes}
      closeDelay={closeDelay}
      render={popperRender}
      onOpen={handleOpen}
      onClose={handleClose}
      onOpened={handleOpened}
      onClosed={handleClosed}
      onUpdate={handleUpdate}
    />
  );
});

export default Popup;
