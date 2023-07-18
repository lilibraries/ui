import React, { FC, ReactNode, useLayoutEffect } from "react";
import { inBrowser } from "@lilib/utils";
import { usePersist } from "@lilib/hooks";

export interface FocusingProps {
  type?: "tab" | "always";
  attr?: string;
  children?: ReactNode;
}

const Focusing: FC<FocusingProps> = (props) => {
  const { type = "tab", attr = "data-focusing", children } = props;

  const handleMouseDown = usePersist(() => {
    if (document.documentElement.hasAttribute(attr)) {
      document.documentElement.removeAttribute(attr);
    }
    document.addEventListener("keydown", handleKeyDown);
    document.removeEventListener("mousedown", handleMouseDown);
  });

  const handleKeyDown = usePersist((event: KeyboardEvent) => {
    if (event.key === "Tab") {
      if (!document.documentElement.hasAttribute(attr)) {
        document.documentElement.setAttribute(attr, "");
      }
      document.addEventListener("mousedown", handleMouseDown);
      document.removeEventListener("keydown", handleKeyDown);
    }
  });

  useLayoutEffect(
    () => {
      if (inBrowser) {
        if (type === "tab") {
          document.addEventListener("keydown", handleKeyDown);
        } else if (type === "always") {
          if (!document.documentElement.hasAttribute(attr)) {
            document.documentElement.setAttribute(attr, "");
          }
        }
      }

      return () => {
        if (inBrowser) {
          if (document.documentElement.hasAttribute(attr)) {
            document.documentElement.removeAttribute(attr);
          }
          document.removeEventListener("keydown", handleKeyDown);
          document.removeEventListener("mousedown", handleMouseDown);
        }
      };
    },
    [type, attr] // eslint-disable-line
  );

  return <>{children}</>;
};

export default Focusing;
