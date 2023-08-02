import React, {
  ComponentProps,
  ComponentType,
  ReactNode,
  cloneElement,
  createContext,
  forwardRef,
  isValidElement,
  useMemo,
} from "react";
import cn from "classnames";
import { usePersist, useSafeState } from "@lilib/hooks";
import isFunction from "lodash/isFunction";
import { composeRefs } from "@lilib/utils";

function createProvider<
  Component extends ComponentType,
  Props = ComponentProps<Component>
>(component: Component) {
  const Context = createContext({
    used: false,
    components: [],
    appendComponent: () => {},
    removeComponent: () => {},
  });

  const Provider = forwardRef<any, { children?: ReactNode }>((props, ref) => {
    const { children, ...rest } = props;
    const [components, setComponents] = useSafeState([]);

    const appendComponent = usePersist(() => {});

    const removeComponent = usePersist(() => {});

    const value = useMemo(() => {
      return {
        used: true,
        components,
        appendComponent,
        removeComponent,
      };
    }, [components, appendComponent, removeComponent]);

    return (
      <Context.Provider value={value}>
        {isValidElement(children)
          ? cloneElement(children, {
              ...rest,
              ...children.props,
              ref: isFunction(children.type)
                ? undefined
                : composeRefs((children as any).ref, ref),
              style: Object.assign(
                {},
                (rest as any).style,
                children.props.style
              ),
              className: cn((rest as any).className, children.props.className),
            })
          : children}
      </Context.Provider>
    );
  });

  const useHook = () => {};

  const useClose = () => {};

  return { Provider, useHook };
}

export default createProvider;
