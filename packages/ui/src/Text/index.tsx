import {
  forwardRef,
  ElementType,
  ReactElement,
  ComponentProps,
  ForwardRefExoticComponent,
  createElement,
} from "react";
import cn from "classnames";
import Prefix from "../Prefix";
import { ColorValue, IntentValue } from "../utils/types";
import { usePersist } from "@lilib/hooks";

export interface TextCommonProps {
  intent?: IntentValue;
  color?: ColorValue;
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
