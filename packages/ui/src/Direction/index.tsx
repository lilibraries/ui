import React, {
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
import mergeConfig from "../utils/mergeConfig";

export type DirectionValue = "ltr" | "rtl";

export interface DirectionScopedProps {
  value: DirectionValue;
  scoped: true;
  children: ReactElement;
}

export interface DirectionUnscopedProps {
  value: DirectionValue;
  scoped?: false;
  children: ReactNode;
}

export interface DirectionComponent extends ForwardRefExoticComponent<DirectionScopedProps | DirectionUnscopedProps> {
  Context: typeof DirectionContext;
  useConfig: typeof useDirectionConfig;
}

const DirectionContext = createContext<DirectionValue>("ltr");

function useDirectionConfig(override?: DirectionValue): DirectionValue {
  const base = useContext(DirectionContext);
  return mergeConfig(base, override);
}

const Direction = forwardRef<any, DirectionScopedProps | DirectionUnscopedProps>((props, ref) => {
  const { value, scoped, children, ...rest } = props;

  useIsomorphicLayoutEffect(() => {
    if (inBrowser && !scoped) {
      document.documentElement.setAttribute("dir", value);
    }
  }, [value]);

  return (
    <DirectionContext.Provider value={value}>
      {isValidElement(children)
        ? cloneElement(children, {
            ...rest,
            dir: scoped && value ? value : undefined,
            ...children.props,
            ref: isFunction(children.type) ? undefined : composeRefs((children as any).ref, ref),
            style: { ...(rest as any).style, ...children.props.style },
            className: cn((rest as any).className, children.props.className),
          })
        : children}
    </DirectionContext.Provider>
  );
}) as DirectionComponent;

Direction.Context = DirectionContext;
Direction.useConfig = useDirectionConfig;

export default Direction;
