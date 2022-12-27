import React, {
  ReactNode,
  MouseEvent,
  forwardRef,
  ElementType,
  ReactElement,
  createElement,
  ComponentProps,
  MouseEventHandler,
} from "react";
import cn from "classnames";
import Prefix from "../Prefix";
import Size, { SizeValue } from "../Size";
import CloseIcon from "../icons/CloseIcon";
import { IntentValue } from "../Intent";
import isRenderableNode from "../utils/isRenderableNode";

export type TagVariant = null | "solid" | "outlined";
export interface TagCommonProps {
  variant?: TagVariant;
  size?: SizeValue;
  intent?: IntentValue;
  round?: boolean;
  clearable?: boolean;
  clearIcon?: ReactNode;
  clickable?: boolean;
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
    intent,
    round,
    disabled,
    clearable,
    clearIcon,
    clickable,
    onClear,
    onClick,
    ...rest
  } = props;

  const prefix = Prefix.useConfig();
  const size = Size.useConfig(sizeProp);

  const classes = cn(
    `${prefix}tag`,
    {
      [`${prefix}${variant}`]: variant,
      [`${prefix}${size}`]: size,
      [`${prefix}${intent}`]: intent,
      [`${prefix}round`]: round,
      [`${prefix}clearable`]: clearable,
      [`${prefix}clickable`]: clickable,
      [`${prefix}disabled`]: disabled,
    },
    className
  );

  let clear: ReactNode = null;
  if (clearable) {
    clear = (
      <span
        tabIndex={0}
        className={`${prefix}tag-clear`}
        onClick={(event) => {
          event.preventDefault();
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
      ...rest,
      ref,
      className: classes,
      disabled,
      onClick: (event: MouseEvent<HTMLSpanElement>) => {
        if (disabled) {
          event.preventDefault();
        } else if (onClick) {
          onClick(event);
        }
      },
    },
    <span className={`${prefix}tag-content`}>{children}</span>,
    clear
  );
}) as TagComponent;

export default Tag;
