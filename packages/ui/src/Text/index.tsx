import {
  forwardRef,
  ElementType,
  ReactElement,
  createElement,
  ComponentProps,
  ForwardRefExoticComponent,
} from "react";
import cn from "classnames";
import { usePersist } from "@lilib/hooks";
import Prefix from "../Prefix";
import { ColorValue, IntentValue } from "../utils/types";

export type TextSize = "small" | "large" | "smaller" | "larger";

export interface TextCommonProps {
  intent?: IntentValue;
  color?: ColorValue;
  size?: TextSize;
  muted?: boolean;
  active?: boolean;
  disabled?: boolean;
  hoverable?: boolean;
}

export type TextProps<C extends ElementType = "span"> = C extends "span"
  ? {
      as?: C;
    } & ComponentProps<C> &
      TextCommonProps
  : {
      as: C;
    } & ComponentProps<C> &
      TextCommonProps;

export interface TextComponent
  extends ForwardRefExoticComponent<TextCommonProps> {
  <C extends ElementType = "span">(props: TextProps<C>): ReactElement;
}

const Text = forwardRef<HTMLSpanElement, TextProps>((props, ref) => {
  const {
    children,
    className,
    as = "span",
    intent,
    color,
    size,
    muted,
    active,
    disabled,
    hoverable,
    onClick,
    ...rest
  } = props;

  const { cls } = Prefix.useConfig();
  const classes = cn(
    `${cls}text`,
    {
      [`${cls}${intent}`]: intent,
      [`${cls}${color}`]: color,
      [`${cls}${size}`]: size,
      [`${cls}muted`]: muted,
      [`${cls}active`]: active,
      [`${cls}disabled`]: disabled,
      [`${cls}hoverable`]: hoverable,
    },
    className
  );

  const handleClick = usePersist((event: any) => {
    if (disabled) {
      return;
    }
    if (onClick) {
      onClick(event);
    }
  });

  return createElement<TextProps>(
    as,
    {
      tabIndex: hoverable && !disabled ? 0 : undefined,
      ...rest,
      ref,
      disabled,
      onClick: handleClick,
      className: classes,
    },
    children
  );
}) as TextComponent;

export default Text;
