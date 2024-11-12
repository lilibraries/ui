import React, { ReactNode, forwardRef, CSSProperties, HTMLAttributes } from "react";
import cn from "classnames";
import isNumber from "lodash/isNumber";
import Dot from "../Dot";
import Tag from "../Tag";
import Prefix from "../Prefix";
import Duration from "../Duration";
import Direction from "../Direction";
import Transition from "../Transition";
import Size, { SizeValue } from "../Size";
import isRenderable from "../utils/isRenderable";
import { ColorValue } from "../utils/types";

export type BadgeVariant = null | "solid" | "dotted";

export type BadgePlacement = "top-start" | "top-end" | "bottom-start" | "bottom-end";

export interface BadgeProps extends Omit<HTMLAttributes<HTMLSpanElement>, "color"> {
  size?: SizeValue;
  variant?: BadgeVariant;
  color?: ColorValue;
  rounded?: boolean;
  animated?: boolean;
  outlined?: boolean;
  tag?: ReactNode;
  count?: number;
  maxCount?: number;
  showZero?: boolean;
  invisible?: boolean;
  placement?: BadgePlacement;
  offset?: number | string | [number | string, number | string];
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>((props, ref) => {
  const {
    children,
    className,
    size: sizeProp,
    variant,
    color,
    rounded,
    animated,
    outlined,
    tag: tagProp,
    count,
    maxCount,
    showZero,
    invisible,
    placement = "top-end",
    offset = 0,
    ...rest
  } = props;

  const solid = variant === "solid";
  const dotted = variant === "dotted";
  const contented = isRenderable(children);
  const offsets = Array.isArray(offset) ? offset : ([offset, offset] as const);

  const { cls } = Prefix.useConfig();
  const { fast } = Duration.useConfig();
  const size = Size.useConfig(sizeProp);
  const isRTL = Direction.useConfig() === "rtl";

  const classes = cn(
    `${cls}badge`,
    {
      [`${cls}rtl`]: isRTL,
      [`${cls}outlined`]: outlined,
      [`${cls}contented`]: contented,
      [`${cls}standalone`]: !contented,
    },
    className
  );

  let tag: ReactNode = null;
  let visible: boolean = true;
  let style: CSSProperties = {};

  if (isRenderable(tagProp)) {
    tag = tagProp;
  } else if (isNumber(count) && !isNaN(count)) {
    if (isNumber(maxCount) && !isNaN(maxCount) && count > maxCount) {
      tag = maxCount + "+";
    } else {
      tag = count;
    }
    if (dotted) {
      tag = <Dot size={size} color={color} animated={animated} />;
    } else {
      tag = (
        <Tag squared borderless size={size} variant={solid ? "solid" : null} color={color} rounded={rounded}>
          {tag}
        </Tag>
      );
    }
  }

  if (invisible) {
    visible = false;
  } else if (!isRenderable(tag)) {
    visible = false;
  } else if (isNumber(count) && !showZero && count === 0) {
    visible = false;
  }

  if (contented) {
    const [horizontal, vertical] = offsets;

    if (placement.includes("top")) {
      style.top = vertical;
    } else if (placement.includes("bottom")) {
      style.bottom = vertical;
    }

    if (placement.includes("start")) {
      if (isRTL) {
        style.right = horizontal;
      } else {
        style.left = horizontal;
      }
    } else if (placement.includes("end")) {
      if (isRTL) {
        style.left = horizontal;
      } else {
        style.right = horizontal;
      }
    }
  }

  return (
    <Transition in={visible} classes durations={fast} firstMount={contented} keepMounted={contented}>
      <span {...rest} ref={ref} className={classes}>
        {children}
        <span style={style} className={cn(`${cls}badge-switcher`, `${cls}badge-switcher-${placement}`)}>
          {tag}
        </span>
      </span>
    </Transition>
  );
});

export default Badge;
