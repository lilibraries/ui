import {
  forwardRef,
  ElementType,
  ReactElement,
  createElement,
  CSSProperties,
  ComponentProps,
  ForwardRefExoticComponent,
} from "react";
import cn from "classnames";
import isString from "lodash/isString";
import Prefix from "../Prefix";
import isCSSValue from "../utils/isCSSValue";

export type DividerGap = "1x" | "2x" | "3x" | "4x" | "5x" | "6x" | "7x" | "8x" | "9x";

export interface DividerCommonProps {
  gap?: DividerGap | number | (string & {});
  inline?: boolean;
  vertical?: boolean;
}

export type DividerProps<C extends ElementType = "hr"> = C extends "hr"
  ? {
      as?: C;
    } & ComponentProps<C> &
      DividerCommonProps
  : {
      as: C;
    } & ComponentProps<C> &
      DividerCommonProps;

export interface DividerComponent extends ForwardRefExoticComponent<DividerCommonProps> {
  <C extends ElementType = "hr">(props: DividerProps<C>): ReactElement;
}

const Divider = forwardRef<HTMLHRElement, DividerProps>((props, ref) => {
  const { as = "hr", style, children, className, gap, inline, vertical, ...rest } = props;

  const isPresetGap = isString(gap) && /^\dx$/.test(gap);
  const isCustomGap = !isPresetGap && isCSSValue(gap);

  const { cls } = Prefix.useConfig();
  const classes = cn(
    `${cls}divider`,
    {
      [`${cls}inline`]: inline,
      [`${cls}vertical`]: vertical,
      [`${cls}divider-gap-${gap}`]: isPresetGap,
    },
    className
  );

  const customStyle: CSSProperties = {};
  if (isCustomGap) {
    if (vertical) {
      customStyle.marginLeft = gap;
      customStyle.marginRight = gap;
    } else {
      customStyle.marginTop = gap;
      customStyle.marginBottom = gap;
    }
  }

  return createElement(as, {
    ...rest,
    ref,
    style: isCustomGap ? { ...customStyle, ...style } : style,
    className: classes,
  });
}) as DividerComponent;

export default Divider;
