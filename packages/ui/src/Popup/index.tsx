import React, { ReactElement, forwardRef, useRef } from "react";
import cn from "classnames";
import { useComposedRef, usePersist, useSetState, useUpdate } from "@lilib/hooks";
import Prefix from "../Prefix";
import Duration from "../Duration";
import Direction from "../Direction";
import Transition from "../Transition";
import Popper, { PopperProps, PopperUpdateData } from "../Popper";

export interface PopupProps extends Omit<PopperProps, "arrow" | "openDelay" | "closeDelay"> {
  arrowed?: boolean;
  unpadding?: boolean;
}

const Popup = forwardRef<HTMLDivElement, PopupProps>((props, ref) => {
  const {
    className,
    arrowed,
    unpadding,
    open: openProp,
    defaultOpen,
    render,
    onOpen,
    onClose,
    onOpened,
    onClosed,
    onUpdate,
    ...rest
  } = props;

  const controlled = "open" in props;
  const [{ open, displayed, enter }, setState] = useSetState(() => {
    const open = controlled ? !!openProp : !!defaultOpen;
    return { open, displayed: open, enter: open };
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

  const handleDisplayed = usePersist(() => {
    setState({ displayed: true });
  });

  const handleClosed = usePersist(() => {
    setState({ displayed: false });
    onClosed?.();
  });

  useUpdate(() => {
    if (controlled) {
      setState({ open: !!openProp });
    }
  }, [openProp]);

  useUpdate(() => {
    if (open) {
      if (displayed) {
        setState({ enter: true });
      }
    } else {
      setState({ enter: false });
    }
  }, [open, displayed]);

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

  const popperRender = (popper: ReactElement) => {
    const node = (
      <Transition in={enter} durations={base} classes firstMount keepMounted onEntered={onOpened}>
        {popper}
      </Transition>
    );
    return render ? render(node) : node;
  };

  return (
    <Popper
      offset={{ main: arrowed ? 14 : 4 }}
      arrowPadding={12}
      {...rest}
      ref={composedRef}
      arrow={arrow}
      open={open}
      className={classes}
      closeDelay={base}
      render={popperRender}
      onOpen={handleOpen}
      onClose={handleClose}
      onOpened={handleDisplayed}
      onClosed={handleClosed}
      onUpdate={handleUpdate}
    />
  );
});

export default Popup;
