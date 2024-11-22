import React, { FC, MouseEvent, ReactNode, useEffect, useMemo, useRef } from "react";
import { useEventListener, usePersist, useTimeout } from "@lilib/hooks";
import { inBrowser } from "@lilib/utils";
import isPositiveNumber from "../utils/isPositiveNumber";
import TriggerAnchor from "./TriggerAnchor";
import TriggerContext from "./TriggerContext";
import TriggerLayer from "./TriggerLayer";

export type TriggerEvent = "click" | "hover" | "focus" | "context-menu";
export type TriggerCloseEvent = "escape" | "page-hide" | "window-blur" | "document-click";

export interface TriggerProps {
  on?: TriggerEvent | TriggerEvent[];
  off?: TriggerCloseEvent | TriggerCloseEvent[];
  hoverEnterDelay?: number;
  hoverLeaveDelay?: number;
  open?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  children?: ReactNode;
}

const Trigger: FC<TriggerProps> & {
  Anchor: typeof TriggerAnchor;
  Layer: typeof TriggerLayer;
} = (props) => {
  const {
    on = "click",
    off = "document-click",
    hoverEnterDelay = 100,
    hoverLeaveDelay = 100,
    open,
    onOpen,
    onClose,
    children,
  } = props;

  const anchorRef = useRef<Element>(null);
  const layerRef = useRef<Element>(null);

  const triggerEvents = Array.isArray(on) ? on : [on];
  const triggerCloseEvents = Array.isArray(off) ? off : [off];

  const triggerOnClick = triggerEvents.includes("click");
  const triggerOnHover = triggerEvents.includes("hover");
  const triggerOnFocus = triggerEvents.includes("focus");
  const triggerOnContextMenu = triggerEvents.includes("context-menu");

  const closeOnEscape = triggerCloseEvents.includes("escape");
  const closeOnPageHide = triggerCloseEvents.includes("page-hide");
  const closeOnWindowBlur = triggerCloseEvents.includes("window-blur");
  const closeOnDocumentClick = triggerCloseEvents.includes("document-click");

  const delayOnHoverEnter = isPositiveNumber(hoverEnterDelay);
  const delayOnHoverLeave = isPositiveNumber(hoverLeaveDelay);

  const closeOnClickRef = useRef(false);
  const closeOnHoverRef = useRef(false);
  const closeOnBlurRef = useRef(false);

  const resetCloseRefs = usePersist(() => {
    closeOnClickRef.current = false;
    closeOnHoverRef.current = false;
    closeOnBlurRef.current = false;
  });

  const triggerOpen = usePersist(() => {
    if (!open) {
      onOpen?.();
    }
  });

  const triggerClose = usePersist(() => {
    if (open) {
      onClose?.();
      resetCloseRefs();
    }
  });

  const [setHoverOpenTimer, cancelHoverOpenTimer] = useTimeout(triggerOpen, hoverEnterDelay);
  const [setHoverCloseTimer, cancelHoverCloseTimer] = useTimeout(triggerClose, hoverLeaveDelay);

  useEffect(
    () => {
      cancelHoverOpenTimer();
      cancelHoverCloseTimer();
      if (!open) {
        resetCloseRefs();
      }
    },
    // eslint-disable-next-line
    [open]
  );

  const handleAnchorClick = usePersist(() => {
    if (!open && triggerOnClick) {
      triggerOpen();
    }
    if (open && closeOnClickRef.current) {
      triggerClose();
    }
    if (triggerOnClick) {
      closeOnClickRef.current = true;
      closeOnHoverRef.current = false;
      closeOnBlurRef.current = false;
    }
  });

  const handleAnchorFocus = usePersist(() => {
    if (!open && triggerOnFocus) {
      triggerOpen();
      closeOnClickRef.current = false;
      closeOnHoverRef.current = false;
      closeOnBlurRef.current = true;
    }
  });

  const handleAnchorBlur = usePersist(() => {
    if (open && triggerOnFocus && closeOnBlurRef.current) {
      triggerClose();
    }
  });

  const handleAnchorContextMenu = usePersist((event: MouseEvent) => {
    if (triggerOnContextMenu) {
      event.preventDefault();
      if (!open) {
        triggerOpen();
        closeOnClickRef.current = true;
        closeOnHoverRef.current = false;
        closeOnBlurRef.current = false;
      }
    }
  });

  const handleAnchorMouseEnter = usePersist(() => {
    if (triggerOnHover && !closeOnClickRef.current) {
      cancelHoverOpenTimer();
      cancelHoverCloseTimer();
      if (!open) {
        if (delayOnHoverEnter) {
          setHoverOpenTimer();
        } else {
          triggerOpen();
        }
      }
      closeOnHoverRef.current = true;
      closeOnBlurRef.current = false;
    }
  });

  const handleAnchorMouseLeave = usePersist(() => {
    if (triggerOnHover && closeOnHoverRef.current) {
      cancelHoverOpenTimer();
      cancelHoverCloseTimer();
      if (open) {
        if (delayOnHoverLeave) {
          setHoverCloseTimer();
        } else {
          triggerClose();
        }
      }
      closeOnHoverRef.current = false;
    }
  });

  const handleLayerMouseEnter = usePersist(() => {
    if (triggerOnHover && !closeOnClickRef.current) {
      cancelHoverOpenTimer();
      cancelHoverCloseTimer();
      triggerOpen();
      closeOnHoverRef.current = true;
      closeOnBlurRef.current = false;
    }
  });

  const handleLayerMouseLeave = usePersist(() => {
    if (triggerOnHover && closeOnHoverRef.current) {
      cancelHoverOpenTimer();
      cancelHoverCloseTimer();
      if (open) {
        if (delayOnHoverLeave) {
          setHoverCloseTimer();
        } else {
          triggerClose();
        }
      }
      closeOnHoverRef.current = false;
    }
  });

  const handleLayerMouseDown = usePersist(() => {
    if (triggerOnFocus) {
      closeOnBlurRef.current = false;
    }
  });

  useEventListener(inBrowser && closeOnEscape && open ? document : null, "keydown", (event: KeyboardEvent) => {
    if (!event.repeat) {
      if (event.key === "Escape") {
        triggerClose();
      }
    }
  });

  useEventListener(inBrowser && closeOnPageHide && open ? document : null, "visibilitychange", () => {
    if (document.hidden) {
      triggerClose();
    }
  });

  useEventListener(inBrowser && closeOnWindowBlur && open ? window : null, "blur", triggerClose);

  useEventListener(inBrowser && closeOnDocumentClick && open ? document : null, "mousedown", (event) => {
    const outsideTargets = [anchorRef.current, layerRef.current].filter(Boolean);

    if (outsideTargets.length) {
      for (const outsideTarget of outsideTargets) {
        if (outsideTarget && event.target && outsideTarget.contains(event.target as Node)) {
          return;
        }
      }
    }

    triggerClose();
  });

  const contextValue = useMemo(() => {
    return {
      inTrigger: true,
      anchorRef,
      layerRef,
      handleAnchorClick,
      handleAnchorFocus,
      handleAnchorBlur,
      handleAnchorContextMenu,
      handleAnchorMouseEnter,
      handleAnchorMouseLeave,
      handleLayerMouseEnter,
      handleLayerMouseLeave,
      handleLayerMouseDown,
    };
  }, [
    anchorRef,
    layerRef,
    handleAnchorClick,
    handleAnchorFocus,
    handleAnchorBlur,
    handleAnchorContextMenu,
    handleAnchorMouseEnter,
    handleAnchorMouseLeave,
    handleLayerMouseEnter,
    handleLayerMouseLeave,
    handleLayerMouseDown,
  ]);

  return <TriggerContext.Provider value={contextValue}>{children}</TriggerContext.Provider>;
};

Trigger.Anchor = TriggerAnchor;
Trigger.Layer = TriggerLayer;

export default Trigger;
