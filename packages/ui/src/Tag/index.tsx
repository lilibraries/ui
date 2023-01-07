import React, {
  ReactNode,
  forwardRef,
  ElementType,
  ReactElement,
  createElement,
  ComponentProps,
  MouseEventHandler,
} from "react";
import cn from "classnames";
import Prefix from "../Prefix";
import Direction from "../Direction";
import Size, { SizeValue } from "../Size";
import CloseIcon from "../icons/CloseIcon";
import { PresetColor } from "../types";
import isRenderableNode from "../utils/isRenderableNode";

export type TagVariant = null | "solid" | "hollow";

export interface TagCommonProps {
  variant?: TagVariant;
  size?: SizeValue;
  color?: PresetColor;
  round?: boolean;
  square?: boolean;
  borderless?: boolean;
  clickable?: boolean;
  clearable?: boolean;
  clearIcon?: ReactNode;
  disabled?: boolean;
  onClear?: MouseEventHandler<HTMLSpanElement>;
}

export type TagProps<C extends ElementType = "span"> = C extends "span"
  ? {
      as?: C;
    } & TagCommonProps &
      ComponentProps<C>
  : {
      as: C;
    } & TagCommonProps &
      ComponentProps<C>;

export interface TagComponent {
  <C extends ElementType = "span">(props: TagProps<C>): ReactElement;
}

const Tag = forwardRef<HTMLSpanElement, TagProps>((props, ref) => {
  const {
    children,
    className,
    as = "span",
    variant,
    size: sizeProp,
    color,
    round,
    square,
    borderless,
    clickable: clickableProp,
    clearable,
    clearIcon,
    disabled,
    onClear,
    onClick,
    ...rest
  } = props;

  const { cls } = Prefix.useConfig();
  const size = Size.useConfig(sizeProp);
  const isRTL = Direction.useConfig() === "rtl";
  const clickable = clickableProp !== undefined ? !!clickableProp : !!onClick;

  const classes = cn(
    `${cls}tag`,
    {
      [`${cls}${variant}`]: variant,
      [`${cls}${size}`]: size,
      [`${cls}${color}`]: color,
      [`${cls}round`]: round,
      [`${cls}square`]: square,
      [`${cls}borderless`]: borderless,
      [`${cls}clickable`]: clickable,
      [`${cls}clearable`]: clearable,
      [`${cls}disabled`]: disabled,
      [`${cls}rtl`]: isRTL,
    },
    className
  );

  let clear: ReactNode = null;
  if (clearable) {
    clear = (
      <span
        tabIndex={!disabled ? 0 : undefined}
        className={`${cls}tag-clear`}
        onClick={(event) => {
          if (!disabled && onClear) {
            onClear(event);
          }
        }}
      >
        {isRenderableNode(clearIcon) ? clearIcon : <CloseIcon />}
      </span>
    );
  }

  return createElement(
    as,
    {
      ...rest,
      ref,
      disabled,
      className: classes,
    },
    <span
      tabIndex={!disabled && clickable ? 0 : undefined}
      className={`${cls}tag-content`}
      onClick={(event) => {
        if (!disabled && onClick) {
          onClick(event);
        }
      }}
    >
      {children}
    </span>,
    clear
  );
}) as TagComponent;

export default Tag;
