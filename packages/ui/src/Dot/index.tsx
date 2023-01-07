import React, { forwardRef, HTMLAttributes } from "react";
import cn from "classnames";
import isString from "lodash/isString";
import Prefix from "../Prefix";
import Size, { SizeValue } from "../Size";
import isRenderableNode from "../utils/isRenderableNode";
import Direction from "../Direction";
import { IntentValue } from "../types";

export interface DotProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, "color"> {
  size?: SizeValue;
  intent?: IntentValue;
  color?: string;
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

  const { cls } = Prefix.useConfig();
  const size = Size.useConfig(sizeProp);
  const isRTL = Direction.useConfig() === "rtl";
  const contained = isRenderableNode(children);
  const useColorStyle = isString(color);

  const classes = cn(
    `${cls}dot`,
    {
      [`${cls}contained`]: contained,
      [`${cls}standalone`]: !contained,
      [`${cls}${size}`]: size,
      [`${cls}${intent}`]: intent,
      [`${cls}animated`]: animated,
      [`${cls}rtl`]: isRTL,
    },
    className
  );

  return (
    <span {...rest} ref={ref} className={classes}>
      <span
        className={`${cls}dot-indicator`}
        style={useColorStyle ? { color, backgroundColor: color } : undefined}
      />
      {children}
    </span>
  );
});

export default Dot;
