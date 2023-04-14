import React, { forwardRef, HTMLAttributes } from "react";
import cn from "classnames";
import Prefix from "../Prefix";
import Direction from "../Direction";
import Size, { SizeValue } from "../Size";
import { ColorValue } from "../utils/types";
import isPresetColor from "../utils/isPresetColor";
import isRenderableNode from "../utils/isRenderableNode";

export interface DotProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, "color"> {
  size?: SizeValue;
  color?: ColorValue | string;
  animated?: boolean;
}

const Dot = forwardRef<HTMLSpanElement, DotProps>((props, ref) => {
  const {
    children,
    className,
    size: sizeProp,
    color,
    animated,
    ...rest
  } = props;

  const { cls } = Prefix.useConfig();
  const size = Size.useConfig(sizeProp);
  const isRTL = Direction.useConfig() === "rtl";
  const contained = isRenderableNode(children);
  const isPreseted = isPresetColor(color);
  const isCustomColor = !!color && !isPreseted;

  const classes = cn(
    `${cls}dot`,
    {
      [`${cls}rtl`]: isRTL,
      [`${cls}contained`]: contained,
      [`${cls}standalone`]: !contained,
      [`${cls}${size}`]: size,
      [`${cls}${color}`]: isPreseted,
      [`${cls}animated`]: animated,
    },
    className
  );

  return (
    <span {...rest} ref={ref} className={classes}>
      <span
        className={`${cls}dot-indicator`}
        style={isCustomColor ? { color, backgroundColor: color } : undefined}
      />
      {children}
    </span>
  );
});

export default Dot;
