import React, {
  FC,
  ReactNode,
  cloneElement,
  ReactElement,
  isValidElement,
} from "react";
import cn from "classnames";
import { inBrowser } from "@lilib/utils";
import { useIsomorphicLayoutEffect } from "@lilib/hooks";
import Prefix from "../Prefix";

export interface SpaceScopedProps {
  scoped: true;
  value?: boolean | null;
  children: ReactElement;
}
export interface SpaceUnscopedProps {
  scoped?: false;
  value?: boolean | null;
  children?: ReactNode;
}

const Space: FC<SpaceScopedProps | SpaceUnscopedProps> = (props) => {
  const { children, value = true, scoped, ...rest } = props;
  const prefix = Prefix.useConfig();
  const compactClassName = `${prefix}compact`;
  const incompactClassName = `${prefix}incompact`;

  useIsomorphicLayoutEffect(() => {
    if (inBrowser && !scoped) {
      const classList = document.documentElement.classList;

      if (value === true) {
        if (classList.contains(incompactClassName)) {
          classList.remove(incompactClassName);
        }
        if (!classList.contains(compactClassName)) {
          classList.add(compactClassName);
        }
      } else if (value === false) {
        if (classList.contains(compactClassName)) {
          classList.remove(compactClassName);
        }
        if (!classList.contains(incompactClassName)) {
          classList.add(incompactClassName);
        }
      } else {
        if (classList.contains(compactClassName)) {
          classList.remove(compactClassName);
        }
        if (classList.contains(incompactClassName)) {
          classList.remove(incompactClassName);
        }
      }
    }
  }, [scoped, value, prefix]);

  if (isValidElement(children)) {
    return cloneElement(children, {
      ...rest,
      ...children.props,
      className: cn(
        (rest as any).className,
        {
          [compactClassName]: scoped && value === true,
          [incompactClassName]: scoped && value === false,
        },
        children.props.className
      ),
      style: Object.assign({}, (rest as any).style, children.props.style),
    });
  } else {
    return <>{children}</>;
  }
};

export default Space;
