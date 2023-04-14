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
  value: ThemeValue;
  scoped: true;
  children: ReactElement;
}

export interface ThemeUnscopedProps {
  value: ThemeValue;
  scoped?: false;
  children: ReactNode;
}

const ThemeContext = createContext<ThemeValue>(null);

function useThemeConfig(override?: ThemeValue): ThemeValue {
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
      const dark = `${cls}dark`;
      const light = `${cls}light`;
      const classes = document.documentElement.classList;

      switch (value) {
        case "dark": {
          if (!classes.contains(dark)) {
            classes.add(dark);
          }
          if (classes.contains(light)) {
            classes.remove(light);
          }
          break;
        }

        case "light": {
          if (!classes.contains(light)) {
            classes.add(light);
          }
          if (classes.contains(dark)) {
            classes.remove(dark);
          }
          break;
        }

        default: {
          if (classes.contains(dark)) {
            classes.remove(dark);
          }
          if (classes.contains(light)) {
            classes.remove(light);
          }
          break;
        }
      }
    }
  }, [cls, value]);

  return (
    <ThemeContext.Provider value={value}>
      {isValidElement(children)
        ? cloneElement(children, {
            ...rest,
            ...children.props,
            className: cn(
              (rest as any).className,
              { [`${cls}${value}`]: scoped && value },
              children.props.className
            ),
            style: { ...(rest as any).style, ...children.props.style },
          })
        : children}
    </ThemeContext.Provider>
  );
};

Theme.Context = ThemeContext;
Theme.useConfig = useThemeConfig;

export default Theme;
