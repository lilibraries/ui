import React, { forwardRef, HTMLAttributes } from "react";
import cn from "classnames";
import Prefix from "../Prefix";
import ListConfig, { ListConfigValue } from "./ListConfig";

export interface ListProps
  extends ListConfigValue,
    HTMLAttributes<HTMLDivElement> {
  filled?: boolean;
  splited?: boolean;
  bounded?: boolean;
  indented?: boolean;
  bordered?: boolean;
}

const List = forwardRef<HTMLDivElement, ListProps>((props, ref) => {
  const {
    children,
    className,
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
  const { splited, indented } = ListConfig.useConfig({
    splited: splitedProp,
    indented: indentedProp,
  });

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
        splited={splited}
        indented={indented}
        arrowed={arrowed}
        arrowIcon={arrowIcon}
        disabled={disabled}
        hoverable={hoverable}
      >
        {children}
      </ListConfig>
    </div>
  );
});

export default List;
