import React, {
  ReactNode,
  forwardRef,
  ElementType,
  ReactElement,
  createElement,
  ComponentProps,
  ForwardRefExoticComponent,
} from "react";
import cn from "classnames";
import Prefix from "../Prefix";
import ListItem from "./ListItem";
import ListConfig from "./ListConfig";
import Size, { SizeValue } from "../Size";

export * from "./ListItem";

export interface ListCommonProps {
  size?: SizeValue;
  filled?: boolean;
  splited?: boolean;
  bounded?: boolean;
  indented?: boolean;
  bordered?: boolean;
  arrowed?: boolean;
  arrowIcon?: ReactNode;
  hoverable?: boolean;
  disabled?: boolean;
}

export type ListProps<C extends ElementType = "ul"> = C extends "ul"
  ? {
      as?: C;
    } & ComponentProps<C> &
      ListCommonProps
  : {
      as: C;
    } & ComponentProps<C> &
      ListCommonProps;

export interface ListComponent
  extends ForwardRefExoticComponent<ListCommonProps> {
  <C extends ElementType = "ul">(props: ListProps<C>): ReactElement;
  Item: typeof ListItem;
}

const List = forwardRef<HTMLUListElement, ListProps>((props, ref) => {
  const {
    as = "ul",
    children,
    className,
    size: sizeProp,
    filled,
    splited: splitedProp,
    indented: indentedProp,
    bounded,
    bordered,
    arrowed,
    arrowIcon,
    disabled,
    hoverable,
    ...rest
  } = props;

  const { cls } = Prefix.useConfig();
  const size = Size.useConfig(sizeProp);
  const { splited, indented } = ListConfig.useConfig({
    splited: splitedProp,
    indented: indentedProp,
  });

  const classes = cn(
    `${cls}list`,
    {
      [`${cls}${size}`]: size,
      [`${cls}filled`]: filled,
      [`${cls}splited`]: splited,
      [`${cls}bounded`]: bounded,
      [`${cls}indented`]: indented,
      [`${cls}bordered`]: bordered,
    },
    className
  );

  return createElement(
    as,
    {
      ...rest,
      ref,
      className: classes,
    },
    <Size value={size}>
      <ListConfig
        splited={splited}
        indented={indented}
        arrowed={arrowed}
        arrowIcon={arrowIcon}
        disabled={disabled}
        hoverable={hoverable}
      >
        {children}
      </ListConfig>
    </Size>
  );
}) as ListComponent;

List.Item = ListItem;

export default List;
