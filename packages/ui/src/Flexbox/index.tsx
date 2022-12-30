import React, { forwardRef, HTMLAttributes } from "react";
import cn from "classnames";
import Prefix from "../Prefix";

export type FlexboxDirection =
  | "row"
  | "column"
  | "row-reverse"
  | "column-reverse";

export type FlexboxGap =
  | "1x"
  | "2x"
  | "3x"
  | "4x"
  | "5x"
  | "6x"
  | "7x"
  | "8x"
  | "9x";
export type FlexboxWrap = boolean | "nowrap" | "wrap" | "wrap-reverse";

export type FlexboxAlign =
  | "stretch"
  | "center"
  | "baseline"
  | "flex-start"
  | "flex-end";

export type FlexboxJustify =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly";

export interface FlexboxProps extends HTMLAttributes<HTMLDivElement> {
  fluid?: boolean;
  direction?: FlexboxDirection;
  gap?: FlexboxGap;
  wrap?: FlexboxWrap;
  align?: FlexboxAlign;
  justify?: FlexboxJustify;
}

const Flexbox = forwardRef<HTMLDivElement, FlexboxProps>((props, ref) => {
  const {
    children,
    className,
    fluid,
    direction,
    gap,
    wrap,
    align,
    justify,
    ...rest
  } = props;

  const { cls } = Prefix.useConfig();
  const classes = cn(
    `${cls}flexbox`,
    {
      [`${cls}fluid`]: fluid,
      [`${cls}flexbox-direction-${direction}`]: direction,
      [`${cls}flexbox-gap-${gap}`]: gap,
      [`${cls}flexbox-wrap`]: wrap === true || wrap === "wrap",
      [`${cls}flexbox-nowrap`]: wrap === false || wrap === "nowrap",
      [`${cls}flexbox-wrap-reverse`]: wrap === "wrap-reverse",
      [`${cls}flexbox-align-${align}`]: align,
      [`${cls}flexbox-justify-${justify}`]: justify,
    },
    className
  );

  return (
    <div {...rest} ref={ref} className={classes}>
      {children}
    </div>
  );
});

export default Flexbox;
