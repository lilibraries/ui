import React, { forwardRef, HTMLAttributes } from "react";
import cn from "classnames";
import isString from "lodash/isString";
import Prefix from "../Prefix";
import { IntentValue } from "../Intent";
import Size, { SizeValue } from "../Size";
import isRenderableNode from "../utils/isRenderableNode";

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
