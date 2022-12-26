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

export type ThemeValue = null | "light" | "dark";
export interface ThemeScopedProps {
  scoped: true;
  value?: ThemeValue;
  children: ReactElement;
}
export interface ThemeUnscopedProps {
  scoped?: false;
  value?: ThemeValue;
  children?: ReactNode;
}

const Theme: FC<ThemeScopedProps | ThemeUnscopedProps> = (props) => {
  const { value, scoped, children, ...rest } = props;
  const prefix = Prefix.useConfig();

  useIsomorphicLayoutEffect(() => {
    if (inBrowser && !scoped) {
      const lightClassName = `${prefix}light`;
      const darkClassName = `${prefix}dark`;
      const classList = document.documentElement.classList;

      if (value === "light") {
        if (classList.contains(darkClassName)) {
          classList.remove(darkClassName);
        }
        if (!classList.contains(lightClassName)) {
          classList.add(lightClassName);
        }
      } else if (value === "dark") {
        if (classList.contains(lightClassName)) {
          classList.remove(lightClassName);
        }
        if (!classList.contains(darkClassName)) {
          classList.add(darkClassName);
        }
      } else {
        if (classList.contains(lightClassName)) {
          classList.remove(lightClassName);
        }
        if (classList.contains(darkClassName)) {
          classList.remove(darkClassName);
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
        { [`${prefix}${value}`]: scoped && value },
        children.props.className
      ),
      style: Object.assign({}, (rest as any).style, children.props.style),
    });
  } else {
    return <>{children}</>;
  }
};

export default Theme;
