import React, { FC, ReactNode, useRef } from "react";
import { createPortal } from "react-dom";
import { useOnce, useMount, useUnmount } from "@lilib/hooks";
import { inBrowser, getEffectTarget, EffectTarget } from "@lilib/utils";
import PortalConfig from "./PortalConfig";

export * from "./PortalConfig";

export interface PortalProps {
  children?: ReactNode;
  container?: EffectTarget<HTMLElement>;
}

const Portal: FC<PortalProps> & {
  Config: typeof PortalConfig;
} = (props) => {
  const { children, container: containerProp } = props;
  const { container } = PortalConfig.useConfig({ container: containerProp });

  const rootRef = useRef<HTMLDivElement>();
  const containerRef = useRef<HTMLElement>();

  useOnce(() => {
    if (inBrowser) {
      rootRef.current = document.createElement("div");
    }
  });

  function appendRoot() {
    if (inBrowser) {
      if (!containerRef.current) {
        containerRef.current = getEffectTarget(container) || document.body;
      }
      if (rootRef.current && !containerRef.current.contains(rootRef.current)) {
        containerRef.current.appendChild(rootRef.current);
      }
    }
  }

  function removeRoot() {
    if (rootRef.current && containerRef.current && containerRef.current.contains(rootRef.current)) {
      containerRef.current.removeChild(rootRef.current);
    }
  }

  useMount(appendRoot);
  useUnmount(removeRoot);

  if (rootRef.current) {
    return <>{createPortal(children, rootRef.current)}</>;
  } else {
    return null;
  }
};

Portal.Config = PortalConfig;

export default Portal;
