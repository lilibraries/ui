import React, { ReactNode, forwardRef, CSSProperties, HTMLAttributes } from "react";
import cn from "classnames";
import isNumber from "lodash/isNumber";
import isObject from "lodash/isObject";
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
  maximum?: number;
  zeroable?: boolean;
  invisible?: boolean;
  offset?: number | string | { x?: number | string; y?: number | string };
  placement?: BadgePlacement;
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
    maximum,
    zeroable,
    invisible,
    offset = 0,
    placement = "top-end",
    ...rest
  } = props;

  const solid = variant === "solid";
  const dotted = variant === "dotted";
  const contented = isRenderable(children);
  const offsets = isObject(offset) ? offset : { x: offset, y: offset };

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
    },
    className
  );

  let tag: ReactNode = null;
  let visible: boolean = true;
  let style: CSSProperties = {};

  if (isRenderable(tagProp)) {
    tag = tagProp;
  } else if (isNumber(count) && !isNaN(count)) {
    if (isNumber(maximum) && !isNaN(maximum) && count > maximum) {
      tag = maximum + "+";
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
  } else if (isNumber(count) && !zeroable && count === 0) {
    visible = false;
  }

  if (contented) {
    const { x, y } = offsets;

    if (placement.includes("top")) {
      style.top = y;
    } else if (placement.includes("bottom")) {
      style.bottom = y;
    }

    if (placement.includes("start")) {
      if (isRTL) {
        style.right = x;
      } else {
        style.left = x;
      }
    } else if (placement.includes("end")) {
      if (isRTL) {
        style.left = x;
      } else {
        style.right = x;
      }
    }
  }

  return (
    <Transition in={visible} classes durations={fast} firstMount={contented} keepMounted={contented}>
      <span {...rest} ref={ref} className={classes}>
        {children}
        <span style={style} className={cn(`${cls}badge-tag`, `${cls}badge-tag-${placement}`)}>
          {tag}
        </span>
      </span>
    </Transition>
  );
});

export default Badge;
