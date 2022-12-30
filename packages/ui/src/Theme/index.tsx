import React, {
  FC,
  ReactNode,
  useContext,
  cloneElement,
  ReactElement,
  createContext,
  isValidElement,
} from "react";
import cn from "classnames";
import { inBrowser } from "@lilib/utils";
import { useIsomorphicLayoutEffect } from "@lilib/hooks";
import Prefix from "../Prefix";
import mergeConfig from "../utils/mergeConfig";

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

const ThemeContext = createContext<ThemeValue>(null);

function useThemeConfig<T extends ThemeValue = ThemeValue>(
  override?: T
): ThemeValue {
  const base = useContext(ThemeContext);
  return mergeConfig(base, override);
}

const Theme: FC<ThemeScopedProps | ThemeUnscopedProps> & {
  Context: typeof ThemeContext;
  useConfig: typeof useThemeConfig;
} = (props) => {
  const { value, scoped, children, ...rest } = props;
  const { cls } = Prefix.useConfig();

  useIsomorphicLayoutEffect(() => {
    if (inBrowser && !scoped) {
      const light = `${cls}light`;
      const dark = `${cls}dark`;
      const classList = document.documentElement.classList;

      if (value === "light") {
        if (classList.contains(dark)) {
          classList.remove(dark);
        }
        if (!classList.contains(light)) {
          classList.add(light);
        }
      } else if (value === "dark") {
        if (classList.contains(light)) {
          classList.remove(light);
        }
        if (!classList.contains(dark)) {
          classList.add(dark);
        }
      } else {
        if (classList.contains(light)) {
          classList.remove(light);
        }
        if (classList.contains(dark)) {
          classList.remove(dark);
        }
      }
    }
  }, [scoped, value, cls]);

  return (
    <ThemeContext.Provider value={useThemeConfig(value)}>
      {isValidElement(children)
        ? cloneElement(children, {
            ...rest,
            ...children.props,
            className: cn(
              (rest as any).className,
              { [`${cls}${value}`]: scoped && value },
              children.props.className
            ),
            style: Object.assign({}, (rest as any).style, children.props.style),
          })
        : children}
    </ThemeContext.Provider>
  );
};

Theme.Context = ThemeContext;
Theme.useConfig = useThemeConfig;

export default Theme;
