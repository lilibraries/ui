import React, {
  FC,
  useContext,
  cloneElement,
  createContext,
  isValidElement,
} from "react";
import cn from "classnames";
import omit from "lodash/omit";
import pick from "lodash/pick";
import isString from "lodash/isString";
import mergeConfig from "./mergeConfig";

function createConfig<Value, Props>(
  defaultValue: Value,
  configNames:
    | Exclude<keyof Props, "children">
    | Exclude<keyof Props, "children">[],
  options?: { inherit?: boolean }
) {
  const inherit = !!options && !!options.inherit;
  const Context = createContext<Value>(defaultValue);

  function useConfig(override?: Partial<Value>): Value {
    const base = useContext(Context);
    return mergeConfig(base, override);
  }

  const Config: FC<Props> & {
    Context: typeof Context;
    useConfig: typeof useConfig;
  } = (props) => {
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
        {isValidElement(children)
          ? cloneElement(children, {
              ...restProps,
              ...children.props,
              style: { ...restProps.style, ...children.props.style },
              className: cn(restProps.className, children.props.className),
            })
          : children}
      </Context.Provider>
    );
  };

  Config.Context = Context;
  Config.useConfig = useConfig;

  return Config;
}

export default createConfig;
