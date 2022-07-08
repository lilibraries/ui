import React, { forwardRef, HTMLAttributes } from "react";
import cn from "classnames";
import Prefix from "../Prefix";
import Size, { SizeValue } from "../Size";
import isString from "../_utils/isString";
import isColorPreset from "../_utils/isColorPreset";
import isRenderableNode from "../_utils/isRenderableNode";
import { IntentValue, ColorValue } from "../_utils/types";

export interface DotProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, "color"> {
  size?: SizeValue;
  intent?: IntentValue;
  color?: ColorValue;
  animated?: boolean;
}

const Dot = forwardRef<HTMLSpanElement, DotProps>((props, ref) => {
  const {
    children,
    className,
    size: sizeProp,
    intent,
    color,
    animated,
    ...rest
  } = props;

  const prefix = Prefix.useConfig();
  const size = Size.useConfig(sizeProp);
  const contained = isRenderableNode(children);
  const useColorClass = isColorPreset(color);
  const useColorStyle = isString(color) && !useColorClass;

  const classes = cn(
    `${prefix}dot`,
    {
      [`${prefix}contained`]: contained,
      [`${prefix}standalone`]: !contained,
      [`${prefix}${size}`]: size,
      [`${prefix}${intent}`]: intent,
      [`${prefix}${color}`]: useColorClass,
      [`${prefix}animated`]: animated,
    },
    className
  );

  return (
    <span {...rest} ref={ref} className={classes}>
      <span
        className={`${prefix}dot-indicator`}
        style={useColorStyle ? { color, backgroundColor: color } : undefined}
      />
      {children}
    </span>
  );
});

export default Dot;
