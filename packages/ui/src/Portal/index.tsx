import { FC, ReactNode, useRef } from "react";
import { createPortal } from "react-dom";
import {
  useOnce,
  isBrowser,
  getTarget,
  useUnmount,
  TargetCreator,
  useLayoutMount,
} from "@lilib/hooks";

export interface PortalProps {
  children?: ReactNode;
  container?: TargetCreator<HTMLElement>;
}

const Portal: FC<PortalProps> = (props) => {
  const { children, container } = props;

  const rootRef = useRef<HTMLDivElement>();
  const containerRef = useRef<HTMLElement>();

  useOnce(() => {
    if (isBrowser) {
      rootRef.current = document.createElement("div");
    }
  });

  function appendRoot() {
    if (!containerRef.current) {
      containerRef.current = getTarget(container) || document.body;
    }
    if (rootRef.current && !containerRef.current.contains(rootRef.current)) {
      containerRef.current.appendChild(rootRef.current);
    }
  }

  function removeRoot() {
    if (
      rootRef.current &&
      containerRef.current &&
      containerRef.current.contains(rootRef.current)
    ) {
      containerRef.current.removeChild(rootRef.current);
    }
  }

  useLayoutMount(appendRoot);
  useUnmount(removeRoot);

  if (rootRef.current) {
    return createPortal(children, rootRef.current);
  } else {
    return null;
  }
};

export default Portal;
