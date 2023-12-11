import React, { forwardRef, HTMLAttributes } from "react";
import cn from "classnames";
import Prefix from "../Prefix";
import Size, { SizeValue } from "../Size";
import isPresetColor from "../utils/isPresetColor";
import { ColorValue } from "../utils/types";

export interface DotProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, "color" | "children"> {
  size?: SizeValue;
  color?: ColorValue | string;
  animated?: boolean;
}

const Dot = forwardRef<HTMLSpanElement, DotProps>((props, ref) => {
  const { style, className, size: sizeProp, color, animated, ...rest } = props;

  const { cls } = Prefix.useConfig();
  const size = Size.useConfig(sizeProp);
  const isPreset = isPresetColor(color);
  const isCustom = !!color && !isPreset;

  const classes = cn(
    `${cls}dot`,
    {
      [`${cls}${size}`]: size,
      [`${cls}${color}`]: isPreset,
      [`${cls}animated`]: animated,
    },
    className
  );

  return (
    <span
      {...rest}
      ref={ref}
      style={isCustom ? { color, backgroundColor: color, ...style } : style}
      className={classes}
    />
  );
});

export default Dot;
