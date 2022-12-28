import React, {
  FC,
  ReactNode,
  useContext,
  cloneElement,
  createContext,
  isValidElement,
} from "react";
import cn from "classnames";
import omit from "lodash/omit";
import pick from "lodash/pick";
import mergeConfig from "./mergeConfig";

function createConfig<
  Value,
  Props extends Partial<Value> | { value?: Value } = Value
>(
  propNames:
    | Exclude<keyof Props, "children">
    | Exclude<keyof Props, "children">[],
  defaultConfig: Value
) {
  const Context = createContext<Value>(defaultConfig);

  function useConfig<T extends Value = Value>(override?: Partial<T>): Value {
    const base = useContext(Context);
    return mergeConfig(base, override);
  }

  const Config: FC<Props & { children?: ReactNode }> & {
    Context: typeof Context;
    useConfig: typeof useConfig;
  } = (props) => {
    const { children, ...rest } = props;
    const ownProps: any = pick(rest, propNames);
    const restProps: any = omit(rest, propNames);
    let override: any;

    if (typeof propNames === "string") {
      override = ownProps[propNames];
    } else {
      override = ownProps;
    }

    return (
      <Context.Provider value={useConfig(override)}>
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
