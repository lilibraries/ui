import React, {
  useMemo,
  ReactNode,
  useContext,
  forwardRef,
  cloneElement,
  ReactElement,
  createContext,
  isValidElement,
  ForwardRefExoticComponent,
} from "react";
import cn from "classnames";
import isFunction from "lodash/isFunction";
import { inBrowser, composeRefs } from "@lilib/utils";
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

export interface DurationComponent extends ForwardRefExoticComponent<DurationScopedProps | DurationUnscopedProps> {
  Context: typeof DurationContext;
  useConfig: typeof useDurationConfig;
}

const DurationContext = createContext<DurationValue>({
  base: 200,
  fast: 100,
  slow: 800,
  lazy: 1200,
});

function useDurationConfig(override?: Partial<DurationValue>): DurationValue {
  const base = useContext(DurationContext);
  return mergeConfig(base, override);
}

const Duration = forwardRef<any, DurationScopedProps | DurationUnscopedProps>((props, ref) => {
  const { fast, base, slow, lazy, scoped, children, ...rest } = props;
  const { var: prefix } = Prefix.useConfig();

  const styles = useMemo(() => {
    const result: { [key: string]: string } = {};
    if (base !== undefined) {
      result[`--${prefix}motion-duration-base`] = `${base}ms`;
    }
    if (fast !== undefined) {
      result[`--${prefix}motion-duration-fast`] = `${fast}ms`;
    }
    if (slow !== undefined) {
      result[`--${prefix}motion-duration-slow`] = `${slow}ms`;
    }
    if (lazy !== undefined) {
      result[`--${prefix}motion-duration-lazy`] = `${lazy}ms`;
    }
    return result;
  }, [prefix, fast, base, slow, lazy]);

  useIsomorphicLayoutEffect(() => {
    if (inBrowser && !scoped) {
      for (const key in styles) {
        document.documentElement.style.setProperty(key, styles[key]);
      }
    }
  }, [styles]);

  return (
    <DurationContext.Provider value={useDurationConfig({ fast, base, slow, lazy })}>
      {isValidElement(children)
        ? cloneElement(children, {
            ...rest,
            ...children.props,
            ref: isFunction(children.type) ? undefined : composeRefs((children as any).ref, ref),
            style: Object.assign({}, (rest as any).style, scoped ? styles : {}, children.props.style),
            className: cn((rest as any).className, children.props.className),
          })
        : children}
    </DurationContext.Provider>
  );
}) as DurationComponent;

Duration.Context = DurationContext;
Duration.useConfig = useDurationConfig;

export default Duration;
