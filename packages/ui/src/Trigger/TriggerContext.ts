import { createContext, createRef, MouseEvent, Ref } from "react";

interface TriggerContextValue {
  inTrigger: boolean;
  anchorRef: Ref<any>;
  layerRef: Ref<any>;
  handleAnchorClick: () => void;
  handleAnchorFocus: () => void;
  handleAnchorBlur: () => void;
  handleAnchorContextMenu: (event: MouseEvent) => void;
  handleAnchorMouseEnter: () => void;
  handleAnchorMouseLeave: () => void;
  handleLayerMouseEnter: () => void;
  handleLayerMouseLeave: () => void;
  handleLayerMouseDown: () => void;
}

const noop = () => {};

const TriggerContext = createContext<TriggerContextValue>({
  inTrigger: false,
  anchorRef: createRef(),
  layerRef: createRef(),
  handleAnchorClick: noop,
  handleAnchorFocus: noop,
  handleAnchorBlur: noop,
  handleAnchorContextMenu: noop,
  handleAnchorMouseEnter: noop,
  handleAnchorMouseLeave: noop,
  handleLayerMouseEnter: noop,
  handleLayerMouseLeave: noop,
  handleLayerMouseDown: noop,
});

export default TriggerContext;
