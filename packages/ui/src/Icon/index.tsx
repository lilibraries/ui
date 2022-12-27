import React, {
  ReactNode,
  forwardRef,
  cloneElement,
  isValidElement,
  HTMLAttributes,
} from "react";
import cn from "classnames";
import { composeRefs } from "@lilib/utils";
import Prefix from "../Prefix";
import isString from "lodash/isString";
import isNumber from "lodash/isNumber";
import isRenderableNode from "../utils/isRenderableNode";

export interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  icon?: ReactNode;
  spinning?: boolean;
}

const Icon = forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    icon: iconProp,
    spinning,
    style,
    children,
    className,
    ...rest
  } = props;
  const prefix = Prefix.useConfig();

  let icon: ReactNode;
  if (isRenderableNode(iconProp)) {
    icon = iconProp;
  } else {
    icon = children;
  }

  if (isValidElement(icon) && icon.type === Icon) {
    return cloneElement(icon, {
      ...rest,
      spinning,
      ...icon.props,
      ref: composeRefs((icon as any).ref, ref),
      style: { ...style, ...icon.props.style },
      className: cn(className, icon.props.className),
    });
  }

  const textual = isString(icon) || isNumber(icon);
  const classes = cn(
    `${prefix}icon`,
    {
      [`${prefix}textual`]: textual,
      [`${prefix}spinning`]: spinning,
    },
    className
  );

  return (
    <span {...rest} ref={ref} style={style} className={classes}>
      {icon}
    </span>
  );
});

export default Icon;
