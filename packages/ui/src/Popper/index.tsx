import React, {
  DependencyList,
  HTMLAttributes,
  MouseEvent,
  MouseEventHandler,
  ReactElement,
  ReactNode,
  cloneElement,
  forwardRef,
  isValidElement,
  useEffect,
  useRef,
} from "react";
import isFunction from "lodash/isFunction";
import isNumber from "lodash/isNumber";
import isString from "lodash/isString";
import {
  Placement,
  ReferenceElement,
  Strategy,
  VirtualElement,
  arrow as arrowMiddleware,
  autoUpdate,
  computePosition,
  flip as flipMiddleware,
  inline as inlineMiddleware,
  limitShift,
  offset as offsetMiddleware,
  shift as shiftMiddleware,
} from "@floating-ui/dom";
import { useMemoizedValue, useMountedRef, usePersist, useSetState, useUnmount, useUpdate } from "@lilib/hooks";
import { EffectTarget, composeRefs, inBrowser } from "@lilib/utils";
import Display from "../Display";
import Portal from "../Portal";
import Trigger, { TriggerProps } from "../Trigger";

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

export interface PopperProps
  extends Omit<TriggerProps, "children">,
    Omit<HTMLAttributes<HTMLDivElement>, "content" | "children"> {
  children?: string | number | ReactElement | (() => PopperVirtualElement);
  arrow?: ReactElement;
  arrowPadding?: number;
  content?: ReactNode;
  offset?: number | [number, number];
  strategy?: PopperStrategy;
  placement?: PopperPlacement;
  container?: EffectTarget<HTMLElement>;
  open?: boolean;
  defaultOpen?: boolean;
  openDelay?: number;
  closeDelay?: number;
  firstMount?: boolean;
  keepMounted?: boolean;
  updateDeps?: DependencyList;
  followPointer?: boolean;
  render?: (popper: ReactElement) => ReactElement;
  onOpened?: () => void;
  onClosed?: () => void;
  onUpdate?: (data: PopperUpdateData) => void;
}

const Popper = forwardRef<HTMLDivElement, PopperProps>((props, ref) => {
  const {
    children,
    on = "click",
    off,
    arrow,
    arrowPadding,
    content,
    offset,
    strategy = "absolute",
    placement = "bottom",
    container,
    open: openProp,
    defaultOpen,
    openDelay,
    closeDelay,
    hoverEnterDelay,
    hoverLeaveDelay,
    updateDeps = [],
    followPointer,
    firstMount,
    keepMounted,
    render,
    onOpen,
    onClose,
    onOpened,
    onClosed,
    onUpdate,
    ...rest
  } = props;

  const controlled = "open" in props;
  const offsets = useMemoizedValue(Array.isArray(offset) ? offset : [offset]);

  const triggerEvents = Array.isArray(on) ? on : [on];
  const triggerOnClick = triggerEvents.includes("click");
  const triggerOnHover = triggerEvents.includes("hover");
  const triggerOnContextMenu = triggerEvents.includes("context-menu");

  const [{ open, opened }, setState] = useSetState(() => {
    const open = controlled ? !!openProp : !!defaultOpen;
    return { open, opened: open };
  });

  const arrowRef = useRef<HTMLElement>(null);
  const anchorRef = useRef<Element>(null);
  const popperRef = useRef<HTMLDivElement>(null);
  const pointerRef = useRef<PopperVirtualElement>();
  const mountedRef = useMountedRef();
  const autoUpdateCleanupRef = useRef<() => void>();

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

  const updatePosition = usePersist(() => {
    let inline = false;
    let reference: ReferenceElement | undefined;
    let disableLimitShift = false;

    if (isFunction(children)) {
      reference = children();
    } else if (pointerRef.current) {
      reference = pointerRef.current;
      disableLimitShift = true;
    } else if (anchorRef.current) {
      inline = true;
      reference = anchorRef.current;
    }

    if (reference && popperRef.current) {
      let mainAxisOffset: number | undefined;
      let crossAxisOffset: number | undefined;

      if (offset != null) {
        [mainAxisOffset, crossAxisOffset] = offsets;
      } else if (arrowRef.current) {
        mainAxisOffset = Math.max(arrowRef.current.offsetWidth, arrowRef.current.offsetHeight) * 0.707106781187;
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
        middleware.push(arrowMiddleware({ element: arrowRef.current, padding: arrowPadding }));
      }

      computePosition(reference, popperRef.current, {
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

  const updatePointer = usePersist((event: MouseEvent) => {
    if (followPointer) {
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
      if (opened) {
        updatePosition();
      }
    } else {
      pointerRef.current = undefined;
    }
  });

  const setAutoUpdate = usePersist(() => {
    if (!autoUpdateCleanupRef.current) {
      if (inBrowser && anchorRef.current && popperRef.current) {
        autoUpdateCleanupRef.current = autoUpdate(anchorRef.current, popperRef.current, updatePosition, {
          elementResize: !!window.ResizeObserver,
        });
      }
    }
  });

  const clearAutoUpdate = usePersist(() => {
    if (autoUpdateCleanupRef.current) {
      autoUpdateCleanupRef.current();
      autoUpdateCleanupRef.current = undefined;
    }
  });

  useUpdate(() => {
    if (controlled) {
      setState({ open: !!openProp });
    }
  }, [openProp]);

  useEffect(
    () => {
      if (opened) {
        if (anchorRef.current && popperRef.current) {
          setAutoUpdate();
        } else {
          updatePosition();
        }
      } else {
        clearAutoUpdate();
        pointerRef.current = undefined;
      }
    },
    // eslint-disable-next-line
    [opened]
  );

  useUpdate(() => {
    if (opened) {
      updatePosition();
    }
  }, [offsets, strategy, placement, ...updateDeps]);

  useUnmount(clearAutoUpdate);

  let rawAnchorClick: MouseEventHandler | undefined;
  let rawAnchorMouseMove: MouseEventHandler | undefined;
  let rawAnchorMouseEnter: MouseEventHandler | undefined;
  let rawAnchorContextMenu: MouseEventHandler | undefined;

  if (isValidElement<any>(children)) {
    rawAnchorClick = children.props.onClick;
    rawAnchorMouseMove = children.props.onMouseMove;
    rawAnchorMouseEnter = children.props.onMouseEnter;
    rawAnchorContextMenu = children.props.onContextMenu;
  }

  const handleAnchorClick = usePersist((event: MouseEvent) => {
    rawAnchorClick?.(event);
    if (triggerOnClick) {
      updatePointer(event);
    }
  });

  const handleAnchorMouseEnter = usePersist((event: MouseEvent) => {
    rawAnchorMouseEnter?.(event);
    if (triggerOnHover) {
      updatePointer(event);
    }
  });

  const handleAnchorMouseMove = usePersist((event: MouseEvent) => {
    rawAnchorMouseMove?.(event);
    if (triggerOnHover) {
      updatePointer(event);
    }
  });

  const handleAnchorContextMenu = usePersist((event: MouseEvent) => {
    rawAnchorContextMenu?.(event);
    if (triggerOnContextMenu) {
      updatePointer(event);
    }
  });

  let anchor: ReactNode = null;

  if (isString(children) || isNumber(children)) {
    anchor = <span>{children}</span>;
  } else if (!isFunction(children)) {
    anchor = children;
  }

  if (isValidElement(anchor)) {
    anchor = (
      <Trigger.Anchor>
        {cloneElement(anchor, {
          // @ts-ignore
          ref: composeRefs(anchorRef, children.ref),
          onClick: handleAnchorClick,
          onMouseEnter: handleAnchorMouseEnter,
          onMouseMove: handleAnchorMouseMove,
          onContextMenu: handleAnchorContextMenu,
        })}
      </Trigger.Anchor>
    );
  }

  let popper = (
    <div
      {...rest}
      ref={composeRefs(popperRef, ref)}
      style={{
        ...rest.style,
        display: opened ? rest.style?.display : "none",
        position: strategy === "fixed" ? "fixed" : "absolute",
      }}
    >
      {isValidElement(arrow) &&
        cloneElement(arrow, {
          // @ts-ignore
          ref: composeRefs(arrowRef, arrow.ref),
        })}
      <Portal.Config container={popperRef}>{content}</Portal.Config>
    </div>
  );

  if (render) {
    popper = render(popper);
  }

  popper = <Trigger.Layer>{popper}</Trigger.Layer>;

  return (
    <Trigger
      on={on}
      off={off}
      hoverEnterDelay={hoverEnterDelay}
      hoverLeaveDelay={hoverLeaveDelay}
      open={open}
      onOpen={handleOpen}
      onClose={handleClose}
    >
      {anchor}
      <Display
        open={open}
        openDelay={openDelay}
        closeDelay={closeDelay}
        firstMount={firstMount}
        keepMounted={keepMounted}
        onOpened={handleOpened}
        onClosed={handleClosed}
      >
        <Portal container={container}>{popper}</Portal>
      </Display>
    </Trigger>
  );
});

export default Popper;
