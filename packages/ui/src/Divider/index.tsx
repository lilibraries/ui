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
import isCSSPropertyValue from "../utils/isCSSPropertyValue";

export type DividerPresetSpacing =
  | "1x"
  | "2x"
  | "3x"
  | "4x"
  | "5x"
  | "6x"
  | "7x"
  | "8x"
  | "9x";

export interface DividerCommonProps {
  vertical?: boolean;
  inline?: boolean;
  spacing?: DividerPresetSpacing | string | number;
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

export interface DividerComponent
  extends ForwardRefExoticComponent<DividerCommonProps> {
  <C extends ElementType = "hr">(props: DividerProps<C>): ReactElement;
}

const Divider = forwardRef<HTMLHRElement, DividerProps>((props, ref) => {
  const {
    as = "hr",
    style,
    children,
    className,
    vertical,
    inline,
    spacing,
    ...rest
  } = props;

  const isPresetSpacing = isString(spacing) && /^\dx$/.test(spacing);
  const isCustomSpacing = !isPresetSpacing && isCSSPropertyValue(spacing);

  const { cls } = Prefix.useConfig();
  const classes = cn(
    `${cls}divider`,
    {
      [`${cls}vertical`]: vertical,
      [`${cls}horizontal`]: !vertical,
      [`${cls}inline`]: inline,
      [`${cls}spacing-${spacing}`]: isPresetSpacing,
    },
    className
  );

  const customStyle: CSSProperties = {};
  if (isCustomSpacing) {
    if (vertical) {
      customStyle.marginLeft = spacing;
      customStyle.marginRight = spacing;
    } else {
      customStyle.marginTop = spacing;
      customStyle.marginBottom = spacing;
    }
  }

  return createElement(as, {
    ...rest,
    ref,
    className: classes,
    style: isCustomSpacing ? { ...customStyle, ...style } : style,
  });
}) as DividerComponent;

export default Divider;
