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
import Direction from "../Direction";
import Size, { SizeValue } from "../Size";
import Intent, { IntentValue } from "../Intent";
import CloseIcon from "../icons/CloseIcon";
import isRenderableNode from "../utils/isRenderableNode";

export type TagVariant = null | "solid" | "hollow";

export interface TagCommonProps {
  variant?: TagVariant;
  size?: SizeValue;
  intent?: IntentValue;
  round?: boolean;
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
    intent: intentProp,
    round,
    borderless,
    clickable,
    clearable,
    clearIcon,
    disabled,
    onClear,
    onClick,
    ...rest
  } = props;

  const { cls } = Prefix.useConfig();
  const size = Size.useConfig(sizeProp);
  const intent = Intent.useConfig(intentProp);
  const isRTL = Direction.useConfig() === "rtl";

  const classes = cn(
    `${cls}tag`,
    {
      [`${cls}${variant}`]: variant,
      [`${cls}${size}`]: size,
      [`${cls}${intent}`]: intent,
      [`${cls}round`]: round,
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
        tabIndex={0}
        className={`${cls}tag-clear`}
        onClick={(event) => {
          event.stopPropagation();
          event.nativeEvent.stopPropagation();
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
      onClick: (event: MouseEvent<HTMLSpanElement>) => {
        if (!disabled && onClick) {
          onClick(event);
        }
      },
    },
    <span tabIndex={clickable ? 0 : undefined} className={`${cls}tag-content`}>
      {children}
    </span>,
    clear
  );
}) as TagComponent;

export default Tag;
