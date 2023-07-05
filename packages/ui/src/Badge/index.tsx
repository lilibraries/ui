import React, {
  ReactNode,
  forwardRef,
  CSSProperties,
  HTMLAttributes,
} from "react";
import cn from "classnames";
import isNumber from "lodash/isNumber";
import isString from "lodash/isString";
import Dot from "../Dot";
import Tag from "../Tag";
import Prefix from "../Prefix";
import Duration from "../Duration";
import Direction from "../Direction";
import Transition from "../Transition";
import Size, { SizeValue } from "../Size";
import { ColorValue } from "../utils/types";
import isRenderableNode from "../utils/isRenderableNode";

export type BadgeVariant = null | "solid" | "dotted";

export type BadgePlacement =
  | "top-start"
  | "top-end"
  | "bottom-start"
  | "bottom-end";

export interface BadgeProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, "color"> {
  size?: SizeValue;
  variant?: BadgeVariant;
  color?: ColorValue;
  round?: boolean;
  borderless?: boolean;
  animated?: boolean;
  outlined?: boolean;
  count?: ReactNode;
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
    round,
    borderless,
    animated,
    outlined,
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
  const contained = isRenderableNode(children);
  const offsets = Array.isArray(offset) ? offset : ([offset, offset] as const);

  const { cls } = Prefix.useConfig();
  const size = Size.useConfig(sizeProp);
  const { fast } = Duration.useConfig();
  const isRTL = Direction.useConfig() === "rtl";

  const classes = cn(
    `${cls}badge`,
    {
      [`${cls}rtl`]: isRTL,
      [`${cls}contained`]: contained,
      [`${cls}standalone`]: !contained,
      [`${cls}outlined`]: outlined,
    },
    className
  );

  let tag: ReactNode = null;
  let visible: boolean = true;
  let style: CSSProperties = {};

  if (isRenderableNode(count)) {
    if (
      isNumber(count) &&
      !isNaN(count) &&
      isNumber(maxCount) &&
      !isNaN(maxCount) &&
      count > maxCount
    ) {
      tag = maxCount + "+";
    } else {
      tag = count;
    }
    if (isNumber(count)) {
      if (dotted) {
        tag = <Dot size={size} color={color} animated={animated} />;
      } else {
        tag = (
          <Tag
            size={size}
            variant={solid ? "solid" : null}
            color={color}
            round={round}
            square
            borderless={borderless}
          >
            {tag}
          </Tag>
        );
      }
    }
  }

  if (invisible) {
    visible = false;
  } else if (isNumber(count)) {
    if (isNaN(count) || (count === 0 && !showZero)) {
      visible = false;
    }
  } else if (!isRenderableNode(count)) {
    visible = false;
  }

  if (contained) {
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
    <Transition
      in={visible}
      durations={fast}
      unmountOnExit={!contained}
      classNames={{
        [Transition.ENTER]: true,
        [Transition.EXIT]: true,
        [Transition.EXITING]: true,
        [Transition.EXITED]: true,
      }}
    >
      <span {...rest} ref={ref} className={classes}>
        {children}
        <span
          style={style}
          className={cn(`${cls}badge-switcher`, {
            [`${cls}badge-switcher-${placement}`]: isString(placement),
          })}
        >
          {tag}
        </span>
      </span>
    </Transition>
  );
});

export default Badge;
