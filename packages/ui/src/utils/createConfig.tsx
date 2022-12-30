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
import mergeConfig from "./mergeConfig";

function createConfig<Value, Props>(
  configNames:
    | Exclude<keyof Props, "children">
    | Exclude<keyof Props, "children">[],
  defaultValue: Value
) {
  const Context = createContext<Value>(defaultValue);

  function useConfig(override?: Partial<Value>): Value {
    const base = useContext(Context);
    return mergeConfig(base, override);
  }

  const Config: FC<Props> & {
    Context: typeof Context;
    useConfig: typeof useConfig;
  } = (props) => {
    const { children, ...rest } = props;
    const ownProps: any = pick(rest, configNames);
    const restProps: any = omit(rest, configNames);
    let override: any;

    if (typeof configNames === "string") {
      override = ownProps[configNames];
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
