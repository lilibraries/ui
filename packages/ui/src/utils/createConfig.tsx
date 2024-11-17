import React, {
  forwardRef,
  useContext,
  cloneElement,
  createContext,
  CSSProperties,
  isValidElement,
  ForwardRefExoticComponent,
} from "react";
import cn from "classnames";
import omit from "lodash/omit";
import pick from "lodash/pick";
import isString from "lodash/isString";
import isFunction from "lodash/isFunction";
import { composeRefs } from "@lilib/utils";
import mergeConfig from "./mergeConfig";

function createConfig<Value, Props extends { children?: any }>(
  defaultValue: Value,
  configNames: Exclude<keyof Props, "children"> | Exclude<keyof Props, "children">[],
  options?: { inherit?: boolean }
) {
  const inherit = !!options && !!options.inherit;
  const Context = createContext<Value>(defaultValue);

  function useConfig(override?: Partial<Value>): Value {
    const base = useContext(Context);
    return mergeConfig(base, override);
  }

  const Config: ForwardRefExoticComponent<Props> & {
    Context: typeof Context;
    useConfig: typeof useConfig;
  } = forwardRef<any, Props>((props, ref) => {
    const { children, ...other } = props;
    const configProps: any = pick(other, configNames);
    const restProps: any = omit(other, configNames);
    let config: any;

    if (isString(configNames)) {
      config = configProps[configNames];
    } else {
      config = configProps;
    }

    const mergedConfig = useConfig(config);

    return (
      <Context.Provider value={inherit ? mergedConfig : config}>
        {isValidElement<{ style?: CSSProperties; className?: string }>(children)
          ? cloneElement(children, {
              ...restProps,
              ...children.props,
              ref: isFunction(children.type) ? undefined : composeRefs((children as any).ref, ref),
              style: { ...restProps.style, ...children.props.style },
              className: cn(restProps.className, children.props.className),
            })
          : children}
      </Context.Provider>
    );
  }) as any;

  Config.Context = Context;
  Config.useConfig = useConfig;

  return Config;
}

export default createConfig;
