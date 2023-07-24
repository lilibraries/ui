import React, {
  useRef,
  useEffect,
  ReactNode,
  FocusEvent,
  TouchEvent,
  MouseEvent,
  forwardRef,
  ReactElement,
  cloneElement,
  HTMLAttributes,
  isValidElement,
  DependencyList,
} from "react";
import {
  Strategy,
  Placement,
  autoUpdate,
  limitShift,
  VirtualElement,
  computePosition,
  ReferenceElement,
  flip as flipMiddleware,
  shift as shiftMiddleware,
  arrow as arrowMiddleware,
  inline as inlineMiddleware,
  offset as offsetMiddleware,
} from "@floating-ui/dom";
import isBoolean from "lodash/isBoolean";
import isFunction from "lodash/isFunction";
import {
  useUpdate,
  useUnmount,
  useTimeout,
  usePersist,
  useSetState,
  useMountedRef,
  useComposedRef,
  useClickOutside,
  useEventListener,
  useMemoizedValue,
  useIsomorphicLayoutEffect,
} from "@lilib/hooks";
import { inBrowser, composeRefs, EffectTarget } from "@lilib/utils";
import Portal from "../Portal";
import isPositiveNumber from "../utils/isPositiveNumber";

export type PopperEvent = "click" | "hover" | "focus" | "contextmenu";
export type PopperStrategy = Strategy;
export type PopperPlacement = Placement;
export type PopperVirtualElement = VirtualElement;

export interface PopperUpdateData {
  x: number;
  y: number;
  arrowX?: number;
  arrowY?: number;
  strategy: PopperStrategy;
  placement: PopperPlacement;
}

export interface PopperProps extends HTMLAttributes<HTMLDivElement> {
  content?: ReactNode;
  children?: ReactElement | (() => PopperVirtualElement);
  arrow?: ReactElement;
  container?: EffectTarget<HTMLElement>;
  on?: PopperEvent | PopperEvent[];
  offset?: number | [number, number];
  arrowPadding?: number;
  strategy?: PopperStrategy;
  placement?: PopperPlacement;
  open?: boolean;
  defaultOpen?: boolean;
  openDelay?: number;
  closeDelay?: number;
  hoverEnterDelay?: number;
  hoverLeaveDelay?: number;
  updateDeps?: DependencyList;
  followPoint?: boolean;
  mountOnInit?: boolean;
  unmountOnClose?: boolean;
  closeOnEscape?: boolean;
  closeOnWindowBlur?: boolean;
  closeOnDocumentClick?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  onShow?: () => void;
  onHide?: () => void;
  onUpdate?: (data: PopperUpdateData) => void;
}

const Popper = forwardRef<HTMLDivElement, PopperProps>((props, ref) => {
  const {
    content,
    children,
    arrow,
    container,
    on = "click",
    offset,
    arrowPadding,
    strategy = "absolute",
    placement = "bottom",
    open: openProp,
    defaultOpen,
    openDelay,
    closeDelay,
    hoverEnterDelay = 100,
    hoverLeaveDelay = 100,
    updateDeps = [],
    followPoint,
    mountOnInit,
    unmountOnClose,
    closeOnEscape,
    closeOnWindowBlur,
    closeOnDocumentClick = true,
    onOpen,
    onClose,
    onShow,
    onHide,
    onUpdate,
    ...rest
  } = props;

  const events = Array.isArray(on) ? on : [on];
  const offsets = useMemoizedValue(Array.isArray(offset) ? offset : [offset]);

  const isControlled = openProp != null;
  const [{ open, show }, setState] = useSetState(() => {
    const open = isControlled ? !!openProp : !!defaultOpen;
    return { open, show: open };
  });

  const toggle = (value?: boolean) => {
    let newOpen: boolean;
    if (isBoolean(value)) {
      newOpen = value;
    } else {
      newOpen = !open;
    }
    if (newOpen !== open) {
      if (!isControlled) {
        changeState(newOpen);
      }
      if (newOpen && onOpen) {
        onOpen();
      }
      if (!newOpen && onClose) {
        onClose();
      }
    }
  };

  const toggleOn = () => toggle(true);
  const toggleOff = () => toggle(false);

  const delayOnOpen = isPositiveNumber(openDelay);
  const delayOnClose = isPositiveNumber(closeDelay);
  const delayOnHoverEnter = isPositiveNumber(hoverEnterDelay);
  const delayOnHoverLeave = isPositiveNumber(hoverLeaveDelay);

  const [startShowTimer, cancelShowTimer] = useTimeout(() => {
    setState({ show: true });
    if (onShow) {
      onShow();
    }
  }, openDelay);
  const [startHideTimer, cancelHideTimer] = useTimeout(() => {
    setState({ show: false });
    if (onHide) {
      onHide();
    }
  }, closeDelay);

  const [startHoverEnterTimer, cancelHoverEnterTimer] = useTimeout(
    toggleOn,
    hoverEnterDelay
  );
  const [startHoverLeaveTimer, cancelHoverLeaveTimer] = useTimeout(
    toggleOff,
    hoverLeaveDelay
  );

  const cancelTimers = () => {
    cancelShowTimer();
    cancelHideTimer();
    cancelHoverEnterTimer();
    cancelHoverLeaveTimer();
  };

  const changeState = (open: boolean) => {
    cancelTimers();
    if (open) {
      if (delayOnOpen) {
        setState({ open: true });
      } else {
        setState({ open: true, show: true });
        if (onShow) {
          onShow();
        }
      }
    } else {
      if (delayOnClose) {
        setState({ open: false });
      } else {
        setState({ open: false, show: false });
        if (onHide) {
          onHide();
        }
      }
    }
  };

  const mountedRef = useMountedRef();
  const arrowRef = useRef<HTMLElement>(null);
  const anchorRef = useRef<Element>(null);
  const popperRef = useRef<HTMLDivElement>(null);
  const pointerRef = useRef<PopperVirtualElement>();
  const createdPopperRef = useRef(false);
  const composedPopperRef = useComposedRef(popperRef, ref);
  const autoUpdateCleanupRef = useRef<() => void>();

  const updatePosition = usePersist(() => {
    let inline = false;
    let refrence: ReferenceElement | undefined;
    let disableLimitShift = false;

    if (isFunction(children)) {
      refrence = children();
    } else if (pointerRef.current) {
      refrence = pointerRef.current;
      disableLimitShift = true;
    } else if (anchorRef.current) {
      inline = true;
      refrence = anchorRef.current;
    }

    if (refrence && popperRef.current) {
      let mainAxisOffset: number | undefined;
      let crossAxisOffset: number | undefined;

      if (offset != null) {
        [mainAxisOffset, crossAxisOffset] = offsets;
      } else if (arrowRef.current) {
        mainAxisOffset =
          Math.max(
            arrowRef.current.offsetWidth,
            arrowRef.current.offsetHeight
          ) * 0.707106781187;
      }

      const middleware = [
        offsetMiddleware({
          mainAxis: mainAxisOffset || 0,
          crossAxis: crossAxisOffset || 0,
        }),
        flipMiddleware(),
        shiftMiddleware({
          limiter: disableLimitShift ? undefined : limitShift(),
        }),
      ];
      if (inline) {
        middleware.unshift(inlineMiddleware());
      }
      if (arrowRef.current) {
        middleware.push(
          arrowMiddleware({ element: arrowRef.current, padding: arrowPadding })
        );
      }

      computePosition(refrence, popperRef.current, {
        strategy,
        placement,
        middleware,
      }).then(({ x, y, strategy, placement, middlewareData: { arrow } }) => {
        if (mountedRef.current && onUpdate) {
          onUpdate({
            x,
            y,
            arrowX: arrow?.x,
            arrowY: arrow?.y,
            strategy,
            placement,
          });
        }
      });
    }
  });

  const updatePointer = (event: MouseEvent) => {
    if (followPoint) {
      pointerRef.current = {
        getBoundingClientRect() {
          return {
            width: 0,
            height: 0,
            x: event.clientX,
            y: event.clientY,
            top: event.clientY,
            left: event.clientX,
            right: event.clientX,
            bottom: event.clientY,
          };
        },
      };
    } else {
      pointerRef.current = undefined;
    }
  };

  const setAutoUpdate = () => {
    if (!autoUpdateCleanupRef.current) {
      if (inBrowser && anchorRef.current && popperRef.current) {
        autoUpdateCleanupRef.current = autoUpdate(
          anchorRef.current,
          popperRef.current,
          updatePosition,
          { elementResize: !!window.ResizeObserver }
        );
      }
    }
  };

  const clearAutoUpdate = () => {
    if (autoUpdateCleanupRef.current) {
      autoUpdateCleanupRef.current();
      autoUpdateCleanupRef.current = undefined;
    }
  };

  useEffect(
    () => {
      cancelTimers();
      if (open && delayOnOpen) {
        startShowTimer();
      } else if (!open && delayOnClose) {
        startHideTimer();
      }
    },
    [open] // eslint-disable-line
  );

  useUpdate(() => {
    if (isControlled) {
      changeState(!!openProp);
    }
  }, [openProp]);

  useIsomorphicLayoutEffect(() => {
    if (show) {
      if (anchorRef.current && popperRef.current) {
        setAutoUpdate();
      } else {
        updatePosition();
      }
      createdPopperRef.current = true;
    } else {
      clearAutoUpdate();
      pointerRef.current = undefined;
      if (unmountOnClose) {
        createdPopperRef.current = false;
      }
    }
  }, [show]);

  useUpdate(() => {
    if (show) {
      updatePosition();
    }
  }, [offsets, strategy, placement, ...updateDeps]);

  useUnmount(clearAutoUpdate);

  let rawAnchorBlur: any;
  let rawAnchorFocus: any;
  let rawAnchorClick: any;
  let rawAnchorMouseMove: any;
  let rawAnchorMouseEnter: any;
  let rawAnchorMouseLeave: any;
  let rawAnchorContextMenu: any;

  if (isValidElement(children)) {
    rawAnchorBlur = children.props.onBlur;
    rawAnchorFocus = children.props.onFocus;
    rawAnchorClick = children.props.onClick;
    rawAnchorMouseMove = children.props.onMouseMove;
    rawAnchorMouseEnter = children.props.onMouseEnter;
    rawAnchorMouseLeave = children.props.onMouseLeave;
    rawAnchorContextMenu = children.props.onContextMenu;
  }

  const rawPopperMouseDown = rest.onMouseDown;
  const rawPopperMouseEnter = rest.onMouseEnter;
  const rawPopperMouseLeave = rest.onMouseLeave;
  const rawPopperTouchStart = rest.onTouchStart;

  const isClick = events.includes("click");
  const isHover = events.includes("hover");
  const isFocus = events.includes("focus");
  const isContextMenu = events.includes("contextmenu");

  const isClickClose = useRef(false);
  const isHoverClose = useRef(false);
  const isBlurClose = useRef(false);

  useUpdate(() => {
    if (!open) {
      isClickClose.current = false;
      isHoverClose.current = false;
      isBlurClose.current = false;
    }
  }, [open]);

  const handleAnchorClick = usePersist((event: MouseEvent) => {
    if (rawAnchorClick) {
      rawAnchorClick(event);
    }
    if (isClick && show && followPoint) {
      updatePointer(event);
      updatePosition();
    }
    if (!open && isClick) {
      updatePointer(event);
      toggleOn();
    }
    if (open && isClickClose.current) {
      toggleOff();
      isClickClose.current = false;
    }
    if (isClick) {
      isClickClose.current = true;
      isHoverClose.current = false;
      isBlurClose.current = false;
    }
  });

  const handleAnchorMouseEnter = usePersist((event: MouseEvent) => {
    if (rawAnchorMouseEnter) {
      rawAnchorMouseEnter(event);
    }
    if (isHover && !isClickClose.current) {
      updatePointer(event);
      if (show) {
        updatePosition();
      }
      cancelHoverEnterTimer();
      cancelHoverLeaveTimer();
      if (!open) {
        if (delayOnHoverEnter) {
          startHoverEnterTimer();
        } else {
          toggleOn();
        }
      }
      isHoverClose.current = true;
      isBlurClose.current = false;
    }
  });

  const handleAnchorMouseLeave = usePersist((event: MouseEvent) => {
    if (rawAnchorMouseLeave) {
      rawAnchorMouseLeave(event);
    }
    if (isHover && isHoverClose.current) {
      cancelHoverEnterTimer();
      cancelHoverLeaveTimer();
      if (open) {
        if (delayOnHoverLeave) {
          startHoverLeaveTimer();
        } else {
          toggleOff();
        }
      }
      isHoverClose.current = false;
    }
  });

  const handleAnchorMouseMove = usePersist((event: MouseEvent) => {
    if (rawAnchorMouseMove) {
      rawAnchorMouseMove(event);
    }
    if (isHover && followPoint && isHoverClose.current) {
      updatePointer(event);
      if (show) {
        updatePosition();
      }
    }
  });

  const handlePopperMouseEnter = usePersist(
    (event: MouseEvent<HTMLDivElement>) => {
      if (rawPopperMouseEnter) {
        rawPopperMouseEnter(event);
      }
      if (isHover && !isClickClose.current) {
        cancelHoverEnterTimer();
        cancelHoverLeaveTimer();
        toggleOn();
        isHoverClose.current = true;
        isBlurClose.current = false;
      }
    }
  );

  const handlePopperMouseLeave = usePersist(
    (event: MouseEvent<HTMLDivElement>) => {
      if (rawPopperMouseLeave) {
        rawPopperMouseLeave(event);
      }
      if (isHover && isHoverClose.current) {
        cancelHoverEnterTimer();
        cancelHoverLeaveTimer();
        if (open) {
          if (delayOnHoverLeave) {
            startHoverLeaveTimer();
          } else {
            toggleOff();
          }
        }
        isHoverClose.current = false;
      }
    }
  );

  const handleAnchorFocus = usePersist((event: FocusEvent) => {
    if (rawAnchorFocus) {
      rawAnchorFocus(event);
    }
    if (isFocus && !isClickClose.current && !isHoverClose.current) {
      toggleOn();
      isBlurClose.current = true;
    }
  });

  const handleAnchorBlur = usePersist((event: FocusEvent) => {
    if (rawAnchorBlur) {
      rawAnchorBlur(event);
    }
    if (isFocus && isBlurClose.current) {
      toggleOff();
      isBlurClose.current = false;
    }
  });

  const handleAnchorContextMenu = usePersist((event: MouseEvent) => {
    event.preventDefault();
    if (rawAnchorContextMenu) {
      rawAnchorContextMenu(event);
    }
    if (isContextMenu) {
      updatePointer(event);
      if (show) {
        updatePosition();
      }
      toggleOn();
      isClickClose.current = true;
      isHoverClose.current = false;
      isBlurClose.current = false;
    }
  });

  const handlePopperMouseDown = usePersist(
    (event: MouseEvent<HTMLDivElement>) => {
      if (rawPopperMouseDown) {
        rawPopperMouseDown(event);
      }
      if (isFocus) {
        isBlurClose.current = false;
      }
    }
  );

  const handlePopperTouchStart = usePersist(
    (event: TouchEvent<HTMLDivElement>) => {
      if (rawPopperTouchStart) {
        rawPopperTouchStart(event);
      }
      if (isFocus) {
        isBlurClose.current = false;
      }
    }
  );

  useEventListener(
    closeOnEscape && inBrowser && show ? document : null,
    "keydown",
    (event: KeyboardEvent) => {
      if (!event.repeat) {
        if (event.key === "Escape") {
          toggleOff();
        }
      }
    }
  );

  useEventListener(
    closeOnWindowBlur && inBrowser && show ? window : null,
    "blur",
    toggleOff
  );

  useClickOutside(
    closeOnDocumentClick && inBrowser && show ? [anchorRef, popperRef] : null,
    toggleOff
  );

  let display = false;
  if (show) {
    display = true;
  } else if (!mountedRef.current && mountOnInit) {
    display = true;
  } else if (!unmountOnClose && createdPopperRef.current) {
    display = true;
  }

  return (
    <>
      {isValidElement(children) &&
        cloneElement(children, {
          // @ts-ignore
          ref: composeRefs(anchorRef, children.ref),
          onClick: handleAnchorClick,
          onMouseEnter: handleAnchorMouseEnter,
          onMouseLeave: handleAnchorMouseLeave,
          onMouseMove: handleAnchorMouseMove,
          onFocus: handleAnchorFocus,
          onBlur: handleAnchorBlur,
          onContextMenu: handleAnchorContextMenu,
        })}
      {display && (
        <Portal container={container}>
          <div
            {...rest}
            ref={composedPopperRef}
            style={{
              ...rest.style,
              display: show ? rest.style?.display : "none",
              position: strategy === "fixed" ? "fixed" : "absolute",
            }}
            onMouseEnter={handlePopperMouseEnter}
            onMouseLeave={handlePopperMouseLeave}
            onMouseDown={handlePopperMouseDown}
            onTouchStart={handlePopperTouchStart}
          >
            {isValidElement(arrow) &&
              cloneElement(arrow, {
                // @ts-ignore
                ref: composeRefs(arrowRef, arrow.ref),
              })}
            <Portal.Config container={popperRef}>{content}</Portal.Config>
          </div>
        </Portal>
      )}
    </>
  );
});

export default Popper;
