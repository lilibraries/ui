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
  RefAttributes,
  HTMLAttributes,
  isValidElement,
  DependencyList,
  PropsWithoutRef,
  ForwardRefExoticComponent,
} from "react";
import {
  Side,
  Strategy,
  Placement,
  autoUpdate,
  VirtualElement,
  computePosition,
  ReferenceElement,
  flip as flipMiddleware,
  shift as shiftMiddleware,
  arrow as arrowMiddleware,
  inline as inlineMiddleware,
  offset as offsetMiddleware,
} from "@floating-ui/dom";
import isNumber from "lodash/isNumber";
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
  useIsomorphicLayoutEffect,
} from "@lilib/hooks";
import { inBrowser, composeRefs, EffectTarget } from "@lilib/utils";
import Portal from "../Portal";
import PopperConfig from "./PopperConfig";
import isPositiveNumber from "../utils/isPositiveNumber";
import RenderAfterMount from "../utils/RenderAfterMount";

export * from "./PopperConfig";

export type PopperEvent = "click" | "hover" | "focus" | "contextmenu";
export type PopperSide = Side;
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
  on?: PopperEvent;
  shift?: number;
  offset?: number;
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
  onUpdate?: (data: PopperUpdateData) => void;
}

export interface PopperComponent
  extends ForwardRefExoticComponent<
    PropsWithoutRef<PopperProps> & RefAttributes<HTMLDivElement>
  > {
  Config: typeof PopperConfig;
}

const Popper = forwardRef<HTMLDivElement, PopperProps>((props, ref) => {
  const {
    content,
    children,
    arrow,
    container: containerProp,
    on = "click",
    shift,
    offset,
    strategy = "fixed",
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
    onUpdate,
    ...rest
  } = props;

  const isClick = on === "click";
  const isHover = on === "hover";
  const isFocus = on === "focus";
  const isContextMenu = on === "contextmenu";
  const { container } = PopperConfig.useConfig({ container: containerProp });

  const isControlled = "open" in props;
  const [{ open, show }, setState] = useSetState(() => {
    const open = isControlled ? !!openProp : !!defaultOpen;
    return { open, show: open };
  });

  const toggle = (value?: boolean) => {
    let newOpen: boolean;
    if (value !== undefined) {
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
  }, openDelay);
  const [startHideTimer, cancelHideTimer] = useTimeout(() => {
    setState({ show: false });
  }, closeDelay);

  const [startHoverEnterTimer, cancelHoverEnterTimer] = useTimeout(
    toggleOn,
    hoverEnterDelay
  );
  const [startHoverLeaveTimer, cancelHoverLeaveTimer] = useTimeout(
    toggleOff,
    hoverLeaveDelay
  );

  const [startBlurHideTimer, cancelBlurHideTimer] = useTimeout(toggleOff, 0);
  const [preventBlurHideTimer, cancelPreventBlurTimer] = useTimeout(
    cancelBlurHideTimer,
    0
  );

  function cancelTimers() {
    cancelShowTimer();
    cancelHideTimer();
    cancelHoverEnterTimer();
    cancelHoverLeaveTimer();
    cancelBlurHideTimer();
    cancelPreventBlurTimer();
  }

  function changeState(open: boolean) {
    cancelTimers();
    if (open) {
      if (delayOnOpen) {
        setState({ open: true });
      } else {
        setState({ open: true, show: true });
      }
    } else {
      if (delayOnClose) {
        setState({ open: false });
      } else {
        setState({ open: false, show: false });
      }
    }
  }

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

  const mountedRef = useMountedRef();
  const arrowRef = useRef<HTMLElement>(null);
  const anchorRef = useRef<Element>(null);
  const popperRef = useRef<HTMLDivElement>(null);
  const pointerRef = useRef<PopperVirtualElement>();
  const createPopperRef = useRef(false);
  const composedPopperRef = useComposedRef(popperRef, ref);
  const autoUpdateCleanupRef = useRef<() => void>();

  const update = usePersist(() => {
    let inline = false;
    let refrence: ReferenceElement | undefined;

    if (isFunction(children)) {
      refrence = children();
    } else if (pointerRef.current) {
      refrence = pointerRef.current;
    } else if (anchorRef.current) {
      inline = true;
      refrence = anchorRef.current;
    }

    if (refrence && popperRef.current) {
      let offsetValue: number | undefined;

      if (isNumber(offset)) {
        offsetValue = offset;
      } else if (arrowRef.current) {
        offsetValue = Math.max(
          arrowRef.current.offsetWidth,
          arrowRef.current.offsetHeight
        );
      }

      const middleware = [
        offsetMiddleware(offsetValue),
        flipMiddleware(),
        shiftMiddleware({ padding: shift }),
      ];

      if (inline) {
        middleware.unshift(inlineMiddleware());
      }
      if (arrowRef.current) {
        middleware.push(arrowMiddleware({ element: arrowRef.current }));
      }

      computePosition(refrence, popperRef.current, {
        strategy,
        placement,
        middleware,
      }).then(({ x, y, strategy, placement, middlewareData: { arrow } }) => {
        if (popperRef.current) {
          Object.assign(popperRef.current.style, {
            transform: `translate(${Math.round(x)}px, ${Math.round(y)}px)`,
          });
        }
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

  function setAutoUpdate() {
    if (!autoUpdateCleanupRef.current) {
      if (inBrowser && anchorRef.current && popperRef.current) {
        autoUpdateCleanupRef.current = autoUpdate(
          anchorRef.current,
          popperRef.current,
          update,
          { elementResize: !!window.ResizeObserver }
        );
      }
    }
  }

  function clearAutoUpdate() {
    if (autoUpdateCleanupRef.current) {
      autoUpdateCleanupRef.current();
      autoUpdateCleanupRef.current = undefined;
    }
  }

  useIsomorphicLayoutEffect(
    () => {
      if (show) {
        update();
        setAutoUpdate();
        createPopperRef.current = true;
      } else {
        clearAutoUpdate();
        pointerRef.current = undefined;
        if (unmountOnClose) {
          createPopperRef.current = false;
        }
      }
    },
    [show] // eslint-disable-line
  );

  useUpdate(() => {
    if (show) {
      update();
    }
  }, [shift, offset, strategy, placement, ...updateDeps]);

  useUnmount(clearAutoUpdate);

  function updatePointer(event: MouseEvent) {
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
      if (show) {
        update();
      }
    }
  }

  const hoverShow = () => {
    cancelTimers();
    if (delayOnHoverEnter) {
      startHoverEnterTimer();
    } else {
      toggleOn();
    }
  };

  const hoverHide = () => {
    cancelTimers();
    if (delayOnHoverLeave) {
      startHoverLeaveTimer();
    } else {
      toggleOff();
    }
  };

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

  const handleAnchorClick = usePersist((event: MouseEvent) => {
    if (rawAnchorClick) {
      rawAnchorClick(event);
    }
    if (isClick) {
      updatePointer(event);
      toggle();
    }
    if (isContextMenu) {
      toggleOff();
    }
  });

  const handleAnchorMouseEnter = usePersist((event: MouseEvent) => {
    if (rawAnchorMouseEnter) {
      rawAnchorMouseEnter(event);
    }
    if (isHover) {
      updatePointer(event);
      hoverShow();
    }
  });

  const handleAnchorMouseLeave = usePersist((event: MouseEvent) => {
    if (rawAnchorMouseLeave) {
      rawAnchorMouseLeave(event);
    }
    if (isHover) {
      hoverHide();
    }
  });

  const handleAnchorMouseMove = usePersist((event: MouseEvent) => {
    if (rawAnchorMouseMove) {
      rawAnchorMouseMove(event);
    }
    if (isHover && followPoint) {
      updatePointer(event);
    }
  });

  const handlePopperMouseEnter = usePersist(
    (event: MouseEvent<HTMLDivElement>) => {
      if (rawPopperMouseEnter) {
        rawPopperMouseEnter(event);
      }
      if (isHover) {
        cancelTimers();
        toggleOn();
      }
    }
  );

  const handlePopperMouseLeave = usePersist(
    (event: MouseEvent<HTMLDivElement>) => {
      if (rawPopperMouseLeave) {
        rawPopperMouseLeave(event);
      }
      if (isHover) {
        hoverHide();
      }
    }
  );

  const handleAnchorFocus = usePersist((event: FocusEvent) => {
    if (rawAnchorFocus) {
      rawAnchorFocus(event);
    }
    if (isFocus) {
      toggleOn();
    }
  });

  const handleAnchorBlur = usePersist((event: FocusEvent) => {
    if (rawAnchorBlur) {
      rawAnchorBlur(event);
    }
    if (isFocus) {
      startBlurHideTimer();
    }
  });

  const handleAnchorContextMenu = usePersist((event: MouseEvent) => {
    event.preventDefault();
    if (rawAnchorContextMenu) {
      rawAnchorContextMenu(event);
    }
    if (isContextMenu) {
      updatePointer(event);
      toggleOn();
    }
  });

  const handlePopperMouseDown = usePersist(
    (event: MouseEvent<HTMLDivElement>) => {
      if (rawPopperMouseDown) {
        rawPopperMouseDown(event);
      }
      if (isFocus) {
        preventBlurHideTimer();
      }
    }
  );

  const handlePopperTouchStart = usePersist(
    (event: TouchEvent<HTMLDivElement>) => {
      if (rawPopperTouchStart) {
        rawPopperTouchStart(event);
      }
      if (isFocus) {
        preventBlurHideTimer();
      }
    }
  );

  useEventListener(
    closeOnEscape && inBrowser && show ? document : null,
    "keydown",
    (event: KeyboardEvent) => {
      if (!event.repeat) {
        if (event.key === "Esc" || event.key === "Escape") {
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
    closeOnDocumentClick && show ? [anchorRef, popperRef] : null,
    toggleOff
  );

  let display = false;
  if (show) {
    display = true;
  } else if (!mountedRef.current && mountOnInit) {
    display = true;
  } else if (!unmountOnClose && createPopperRef.current) {
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
              top: 0,
              left: 0,
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
            <PopperConfig container={popperRef}>
              <RenderAfterMount>{content}</RenderAfterMount>
            </PopperConfig>
          </div>
        </Portal>
      )}
    </>
  );
}) as PopperComponent;

Popper.Config = PopperConfig;

export default Popper;
