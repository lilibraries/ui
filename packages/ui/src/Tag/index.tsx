import React, {
  ReactNode,
  MouseEvent,
  forwardRef,
  ElementType,
  ReactElement,
  createElement,
  ComponentProps,
  MouseEventHandler,
  ForwardRefExoticComponent,
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
  size?: SizeValue;
  variant?: TagVariant;
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
    } & Omit<ComponentProps<C>, "color"> &
      TagCommonProps
  : {
      as: C;
    } & Omit<ComponentProps<C>, "color"> &
      TagCommonProps;

export interface TagComponent
  extends ForwardRefExoticComponent<TagCommonProps> {
  <C extends ElementType = "span">(props: TagProps<C>): ReactElement;
}

const Tag = forwardRef<HTMLSpanElement, TagProps>((props, ref) => {
  const {
    children,
    className,
    as = "span",
    size: sizeProp,
    variant,
    color,
    round,
    square,
    borderless,
    clickable: clickableProp,
    clearable: clearableProp,
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
  const clearable = clearableProp !== undefined ? !!clearableProp : !!onClear;

  const classes = cn(
    `${cls}tag`,
    {
      [`${cls}${size}`]: size,
      [`${cls}${variant}`]: variant,
      [`${cls}${color}`]: color,
      [`${cls}round`]: round,
      [`${cls}square`]: square,
      [`${cls}borderless`]: borderless,
      [`${cls}clickable`]: clickable,
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
          event.stopPropagation();
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
      tabIndex: clickable && !disabled ? 0 : undefined,
      ...rest,
      ref,
      disabled,
      className: classes,
      onClick: (event: MouseEvent<HTMLSpanElement>) => {
        if (!disabled && onClick) {
          onClick(event);
        }
      },
    },
    <span className={`${cls}tag-content`}>{children}</span>,
    clear
  );
}) as TagComponent;

export default Tag;
