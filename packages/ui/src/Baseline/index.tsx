import React, { FC, ReactNode } from "react";
import { inBrowser } from "@lilib/utils";

export interface BaselineProps {
  children?: ReactNode;
}

if (inBrowser) {
  const attr = "data-focus-hidden";
  const html = document.documentElement;

  const handleMouseDown = () => {
    if (!html.hasAttribute(attr)) {
      html.setAttribute(attr, "");
    }
    document.addEventListener("keydown", handleKeyDown);
    document.removeEventListener("mousedown", handleMouseDown);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Tab") {
      if (html.hasAttribute(attr)) {
        html.removeAttribute(attr);
      }
      document.addEventListener("mousedown", handleMouseDown);
      document.removeEventListener("keydown", handleKeyDown);
    }
  };

  document.addEventListener("mousedown", handleMouseDown);
}

const Baseline: FC = ({ children }) => {
  return <>{children}</>;
};

export default Baseline;
