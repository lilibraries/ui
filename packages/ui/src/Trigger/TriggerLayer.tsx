import { FC, MouseEvent, ReactElement, TouchEvent, cloneElement, isValidElement, useContext } from "react";
import warning from "warning";
import isFunction from "lodash/isFunction";
import { usePersist } from "@lilib/hooks";
import { composeRefs } from "@lilib/utils";
import TriggerContext from "./TriggerContext";

export interface TriggerLayerProps {
  children: ReactElement;
}

const TriggerLayer: FC<TriggerLayerProps> = (props) => {
  const { children } = props;
  const { inTrigger, layerRef, handleLayerMouseEnter, handleLayerMouseLeave, handleLayerMouseDown } =
    useContext(TriggerContext);

  warning(inTrigger, "The Trigger.Layer component must be used in the Trigger component.");

  const handleMouseEnter = usePersist((event: MouseEvent) => {
    children?.props?.onMouseEnter?.(event);
    handleLayerMouseEnter();
  });

  const handleMouseLeave = usePersist((event: MouseEvent) => {
    children?.props?.onMouseLeave?.(event);
    handleLayerMouseLeave();
  });

  const handleMouseDown = usePersist((event: MouseEvent) => {
    children?.props?.onMouseDown?.(event);
    handleLayerMouseDown();
  });

  const handleTouchStart = usePersist((event: TouchEvent) => {
    children?.props?.onTouchStart?.(event);
    handleLayerMouseDown();
  });

  if (!isValidElement(children)) {
    return children;
  }

  return cloneElement(children, {
    // @ts-ignore
    ref: isFunction(children.type) ? undefined : children.ref ? composeRefs(children.ref, layerRef) : layerRef,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onMouseDown: handleMouseDown,
    onTouchStart: handleTouchStart,
  });
};

export default TriggerLayer;
