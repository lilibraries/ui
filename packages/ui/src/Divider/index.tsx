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

export type DividerPresetSpace =
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
  space?: DividerPresetSpace | string | number;
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
    space,
    inline,
    vertical,
    ...rest
  } = props;

  const isPresetSpace = isString(space) && /^\dx$/.test(space);
  const isCustomSpace = !isPresetSpace && isCSSValue(space);

  const { cls } = Prefix.useConfig();
  const classes = cn(
    `${cls}divider`,
    {
      [`${cls}inline`]: inline,
      [`${cls}vertical`]: vertical,
      [`${cls}space-${space}`]: isPresetSpace,
    },
    className
  );

  const customStyle: CSSProperties = {};
  if (isCustomSpace) {
    if (vertical) {
      customStyle.marginLeft = space;
      customStyle.marginRight = space;
    } else {
      customStyle.marginTop = space;
      customStyle.marginBottom = space;
    }
  }

  return createElement(as, {
    ...rest,
    ref,
    style: isCustomSpace ? { ...customStyle, ...style } : style,
    className: classes,
  });
}) as DividerComponent;

export default Divider;
