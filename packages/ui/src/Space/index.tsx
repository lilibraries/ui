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

export type SpaceValue = null | "small" | "basic" | "large";

export interface SpaceScopedProps {
  value: SpaceValue;
  scoped: true;
  children: ReactElement;
}

export interface SpaceUnscopedProps {
  value: SpaceValue;
  scoped?: false;
  children: ReactNode;
}

const spaceSizes = ["small", "basic", "large"];
const isSpaceSize = (value: any) => spaceSizes.includes(value);

const SpaceContext = createContext<SpaceValue>(null);

function useSpaceConfig(override?: SpaceValue): SpaceValue {
  const base = useContext(SpaceContext);
  return mergeConfig(base, override);
}

const Space: FC<SpaceScopedProps | SpaceUnscopedProps> & {
  Context: typeof SpaceContext;
  useConfig: typeof useSpaceConfig;
} = (props) => {
  const { value, scoped, children, ...rest } = props;
  const { cls } = Prefix.useConfig();

  useIsomorphicLayoutEffect(() => {
    if (inBrowser && !scoped) {
      const others = spaceSizes.filter((size) => size !== value);
      const classes = document.documentElement.classList;

      if (isSpaceSize(value)) {
        const currentClassName = `${cls}space-${value}`;
        if (!classes.contains(currentClassName)) {
          classes.add(currentClassName);
        }
      }

      others.forEach((other) => {
        const otherClassName = `${cls}space-${other}`;
        if (classes.contains(otherClassName)) {
          classes.remove(otherClassName);
        }
      });
    }
  }, [cls, scoped, value]);

  return (
    <SpaceContext.Provider value={value}>
      {isValidElement(children)
        ? cloneElement(children, {
            ...rest,
            ...children.props,
            className: cn(
              (rest as any).className,
              {
                [`${cls}space-${value}`]: scoped && isSpaceSize(value),
              },
              children.props.className
            ),
            style: { ...(rest as any).style, ...children.props.style },
          })
        : children}
    </SpaceContext.Provider>
  );
};

Space.Context = SpaceContext;
Space.useConfig = useSpaceConfig;

export default Space;
