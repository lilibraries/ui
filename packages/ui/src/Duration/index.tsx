import React, {
  FC,
  useMemo,
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

export interface DurationValue {
  base: number;
  fast: number;
  slow: number;
  lazy: number;
}
export interface DurationScopedProps extends Partial<DurationValue> {
  scoped: true;
  children: ReactElement;
}
export interface DurationUnscopedProps extends Partial<DurationValue> {
  scoped?: false;
  children: ReactNode;
}

const DurationContext = createContext<DurationValue>({
  base: 300,
  fast: 150,
  slow: 750,
  lazy: 1250,
});

function useDurationConfig<T extends DurationValue = DurationValue>(
  override?: Partial<T>
): DurationValue {
  const base = useContext(DurationContext);
  return mergeConfig(base, override);
}

const Duration: FC<DurationScopedProps | DurationUnscopedProps> & {
  Context: typeof DurationContext;
  useConfig: typeof useDurationConfig;
} = (props) => {
  const { fast, base, slow, lazy, scoped, children, ...rest } = props;
  const { var: varPrefix } = Prefix.useConfig();

  const styles = useMemo(() => {
    const result: { [key: string]: string } = {};
    if (base !== undefined) {
      result[`--${varPrefix}motion-duration-base`] = `${base}ms`;
    }
    if (fast !== undefined) {
      result[`--${varPrefix}motion-duration-fast`] = `${fast}ms`;
    }
    if (slow !== undefined) {
      result[`--${varPrefix}motion-duration-slow`] = `${slow}ms`;
    }
    if (lazy !== undefined) {
      result[`--${varPrefix}motion-duration-lazy`] = `${lazy}ms`;
    }
    return result;
  }, [varPrefix, fast, base, slow, lazy]);

  useIsomorphicLayoutEffect(() => {
    if (inBrowser && !scoped) {
      for (const key in styles) {
        document.documentElement.style.setProperty(key, styles[key]);
      }
    }
  }, [scoped, styles]);

  return (
    <DurationContext.Provider
      value={useDurationConfig({ fast, base, slow, lazy })}
    >
      {isValidElement(children)
        ? cloneElement(children, {
            ...rest,
            ...children.props,
            style: Object.assign(
              {},
              (rest as any).style,
              scoped ? styles : {},
              children.props.style
            ),
            className: cn((rest as any).className, children.props.className),
          })
        : children}
    </DurationContext.Provider>
  );
};

Duration.Context = DurationContext;
Duration.useConfig = useDurationConfig;

export default Duration;
