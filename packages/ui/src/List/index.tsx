import React, {
  forwardRef,
  RefAttributes,
  HTMLAttributes,
  PropsWithoutRef,
  ForwardRefExoticComponent,
} from "react";
import cn from "classnames";
import Prefix from "../Prefix";
import ListItem from "./ListItem";
import ListConfig, { ListConfigValue } from "./ListConfig";

export * from "./ListItem";

export interface ListProps
  extends ListConfigValue,
    HTMLAttributes<HTMLDivElement> {
  filled?: boolean;
  splited?: boolean;
  bounded?: boolean;
  indented?: boolean;
  bordered?: boolean;
}

export interface ListComponent
  extends ForwardRefExoticComponent<
    PropsWithoutRef<ListProps> & RefAttributes<HTMLDivElement>
  > {
  Item: typeof ListItem;
}

const List = forwardRef<HTMLDivElement, ListProps>((props, ref) => {
  const {
    children,
    className,
    filled,
    splited,
    bounded,
    indented,
    bordered,
    arrowed,
    arrowIcon,
    disabled,
    hoverable,
    ...rest
  } = props;

  const { cls } = Prefix.useConfig();
  const classes = cn(
    `${cls}list`,
    {
      [`${cls}filled`]: filled,
      [`${cls}splited`]: splited,
      [`${cls}bounded`]: bounded,
      [`${cls}indented`]: indented,
      [`${cls}bordered`]: bordered,
    },
    className
  );

  return (
    <div {...rest} ref={ref} className={classes}>
      <ListConfig
        arrowed={arrowed}
        arrowIcon={arrowIcon}
        disabled={disabled}
        hoverable={hoverable}
      >
        {children}
      </ListConfig>
    </div>
  );
}) as ListComponent;

List.Item = ListItem;

export default List;
