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
import { usePersist } from "@lilib/hooks";
import Prefix from "../Prefix";
import Size, { SizeValue } from "../Size";
import Button, { ButtonProps } from "../Button";
import CloseIcon from "../icons/CloseIcon";
import isRenderable from "../utils/isRenderable";
import { ColorValue } from "../utils/types";

export type TagVariant = null | "solid";

export interface TagCommonProps {
  size?: SizeValue;
  variant?: TagVariant;
  color?: ColorValue;
  avatar?: ReactNode;
  rounded?: boolean;
  squared?: boolean;
  hoverable?: boolean;
  borderless?: boolean;
  disabled?: boolean;
  clearable?: boolean;
  clearProps?: ButtonProps<"a">;
  onClear?: MouseEventHandler<HTMLAnchorElement>;
}

export type TagProps<C extends ElementType = "span"> = C extends "span"
  ? Omit<ComponentProps<C>, "color"> & TagCommonProps & { as?: C }
  : Omit<ComponentProps<C>, "color"> & TagCommonProps & { as: C };

export interface TagComponent extends ForwardRefExoticComponent<TagCommonProps> {
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
    avatar,
    rounded,
    squared,
    hoverable: hoverableProp,
    borderless,
    clearable: clearableProp,
    clearProps,
    disabled,
    onClear,
    onClick,
    ...rest
  } = props;

  const { cls } = Prefix.useConfig();
  const size = Size.useConfig(sizeProp);
  const hoverable = "hoverable" in props ? !!hoverableProp : !!onClick;
  const clearable = "clearable" in props ? !!clearableProp : !!onClear;

  const classes = cn(
    `${cls}tag`,
    {
      [`${cls}${size}`]: size,
      [`${cls}${variant}`]: variant,
      [`${cls}${color}`]: color,
      [`${cls}rounded`]: rounded,
      [`${cls}squared`]: squared,
      [`${cls}hoverable`]: hoverable,
      [`${cls}borderless`]: borderless,
      [`${cls}disabled`]: disabled,
    },
    className
  );

  const handleClick = usePersist((event: MouseEvent<HTMLSpanElement>) => {
    if (!disabled && onClick) {
      onClick(event);
    }
  });

  const handleClear = usePersist((event: MouseEvent<HTMLAnchorElement>) => {
    event.stopPropagation();
    clearProps?.onClick?.(event);
    onClear?.(event);
  });

  let clear: ReactNode = null;
  if (clearable) {
    clear = (
      <Button<"a">
        as="a"
        iconOnly
        borderless
        size={size}
        intent="minor"
        variant="hollow"
        rounded={rounded}
        disabled={disabled}
        children={<CloseIcon />}
        {...clearProps}
        onClick={handleClear}
        className={cn(`${cls}tag-clear`, clearProps?.className)}
      />
    );
  }

  return createElement(
    as,
    {
      tabIndex: hoverable && !disabled ? 0 : undefined,
      ...rest,
      ref,
      disabled,
      className: classes,
      onClick: handleClick,
    },
    isRenderable(avatar) ? <span className={`${cls}tag-avatar`}>{avatar}</span> : null,
    <span className={`${cls}tag-content`}>{children}</span>,
    clear
  );
}) as TagComponent;

export default Tag;
