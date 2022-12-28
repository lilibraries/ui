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

export type DirectionValue = null | "ltr" | "rtl";

export interface DirectionScopedProps {
  scoped: true;
  value?: DirectionValue;
  children: ReactElement;
}

export interface DirectionUnscopedProps {
  scoped?: false;
  value?: DirectionValue;
  children?: ReactNode;
}

const Direction: FC<DirectionScopedProps | DirectionUnscopedProps> = (
  props
) => {
  const { value, scoped, children, ...rest } = props;

  useIsomorphicLayoutEffect(() => {
    if (inBrowser && !scoped) {
      const doc = document.documentElement;

      if (value) {
        doc.setAttribute("dir", value);
      } else {
        doc.removeAttribute("dir");
      }
    }
  }, [scoped, value, value]);

  if (isValidElement(children)) {
    return cloneElement(children, {
      ...rest,
      dir: scoped && value ? value : undefined,
      ...children.props,
      className: cn((rest as any).className, children.props.className),
      style: Object.assign({}, (rest as any).style, children.props.style),
    });
  } else {
    return <>{children}</>;
  }
};

export default Direction;
