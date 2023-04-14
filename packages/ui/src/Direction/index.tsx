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

const DirectionContext = createContext<DirectionValue>("ltr");

function useDirectionConfig(override?: DirectionValue): DirectionValue {
  const base = useContext(DirectionContext);
  return mergeConfig(base, override);
}

const Direction: FC<DirectionScopedProps | DirectionUnscopedProps> & {
  Context: typeof DirectionContext;
  useConfig: typeof useDirectionConfig;
} = (props) => {
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
            style: { ...(rest as any).style, ...children.props.style },
            className: cn((rest as any).className, children.props.className),
          })
        : children}
    </DirectionContext.Provider>
  );
};

Direction.Context = DirectionContext;
Direction.useConfig = useDirectionConfig;

export default Direction;
