import {
  FC,
  Ref,
  MouseEvent,
  FocusEvent,
  useContext,
  ReactElement,
  cloneElement,
  isValidElement,
  MouseEventHandler,
  FocusEventHandler,
} from "react";
import warning from "warning";
import isFunction from "lodash/isFunction";
import { usePersist } from "@lilib/hooks";
import { composeRefs } from "@lilib/utils";
import TriggerContext from "./TriggerContext";

export interface TriggerAnchorProps {
  children: ReactElement<{
    onClick?: MouseEventHandler;
    onFocus?: FocusEventHandler;
    onBlur?: FocusEventHandler;
    onContextMenu?: MouseEventHandler;
    onMouseEnter?: MouseEventHandler;
    onMouseLeave?: MouseEventHandler;
  }> & {
    ref?: Ref<any>;
  };
}

const TriggerAnchor: FC<TriggerAnchorProps> = (props) => {
  const { children } = props;

  const {
    inTrigger,
    anchorRef,
    handleAnchorClick,
    handleAnchorFocus,
    handleAnchorBlur,
    handleAnchorContextMenu,
    handleAnchorMouseEnter,
    handleAnchorMouseLeave,
  } = useContext(TriggerContext);

  warning(inTrigger, "The Trigger.Anchor component must be used in the Trigger component.");

  const handleClick = usePersist((event: MouseEvent) => {
    children?.props?.onClick?.(event);
    handleAnchorClick();
  });

  const handleFocus = usePersist((event: FocusEvent) => {
    children?.props?.onFocus?.(event);
    handleAnchorFocus();
  });

  const handleBlur = usePersist((event: FocusEvent) => {
    children?.props?.onBlur?.(event);
    handleAnchorBlur();
  });

  const handleContextMenu = usePersist((event: MouseEvent) => {
    children?.props?.onContextMenu?.(event);
    handleAnchorContextMenu(event);
  });

  const handleMouseEnter = usePersist((event: MouseEvent) => {
    children?.props?.onMouseEnter?.(event);
    handleAnchorMouseEnter();
  });

  const handleMouseLeave = usePersist((event: MouseEvent) => {
    children?.props?.onMouseLeave?.(event);
    handleAnchorMouseLeave();
  });

  if (!isValidElement(children)) {
    return children;
  }

  return cloneElement<any>(children, {
    ref: isFunction(children.type) ? undefined : children.ref ? composeRefs(children.ref, anchorRef) : anchorRef,
    onClick: handleClick,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onContextMenu: handleContextMenu,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  });
};

export default TriggerAnchor;
