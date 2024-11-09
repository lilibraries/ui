import React, { forwardRef, HTMLAttributes } from "react";
import cn from "classnames";
import isString from "lodash/isString";
import Prefix from "../Prefix";
import isCSSValue from "../utils/isCSSValue";

export type FlexboxDirection = "row" | "column" | "row-reverse" | "column-reverse";

export type FlexboxGap = "1x" | "2x" | "3x" | "4x" | "5x" | "6x" | "7x" | "8x" | "9x";

export type FlexboxWrap = boolean | "wrap" | "nowrap" | "wrap-reverse";

export type FlexboxAlign = "stretch" | "center" | "baseline" | "flex-start" | "flex-end";

export type FlexboxJustify = "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";

export interface FlexboxProps extends HTMLAttributes<HTMLDivElement> {
  fluid?: boolean;
  direction?: FlexboxDirection;
  gap?: FlexboxGap | string | number;
  wrap?: FlexboxWrap;
  align?: FlexboxAlign;
  justify?: FlexboxJustify;
}

const Flexbox = forwardRef<HTMLDivElement, FlexboxProps>((props, ref) => {
  const { children, style, className, fluid, direction, gap, wrap, align, justify, ...rest } = props;

  const isPresetGap = isString(gap) && /^\dx$/.test(gap);
  const isCustomGap = !isPresetGap && isCSSValue(gap);

  const { cls } = Prefix.useConfig();
  const classes = cn(
    `${cls}flexbox`,
    {
      [`${cls}fluid`]: fluid,
      [`${cls}flexbox-direction-${direction}`]: direction,
      [`${cls}flexbox-gap-${gap}`]: isPresetGap,
      [`${cls}flexbox-wrap`]: wrap === true || wrap === "wrap",
      [`${cls}flexbox-nowrap`]: wrap === false || wrap === "nowrap",
      [`${cls}flexbox-wrap-reverse`]: wrap === "wrap-reverse",
      [`${cls}flexbox-align-${align}`]: align,
      [`${cls}flexbox-justify-${justify}`]: justify,
    },
    className
  );

  return (
    <div {...rest} ref={ref} style={isCustomGap ? { gap, ...style } : style} className={classes}>
      {children}
    </div>
  );
});

export default Flexbox;
