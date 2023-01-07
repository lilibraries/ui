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
import isRenderableNode from "../utils/isRenderableNode";
import { IntentValue } from "../types";

export type BadgeVariant = null | "solid" | "dotted";

export type BadgePosition =
  | "top-start"
  | "top-end"
  | "bottom-start"
  | "bottom-end";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: SizeValue;
  intent?: IntentValue;
  round?: boolean;
  borderless?: boolean;
  animated?: boolean;
  outlined?: boolean;
  count?: ReactNode;
  maxCount?: number;
  showZero?: boolean;
  invisible?: boolean;
  position?: BadgePosition;
  offset?: [number | string, number | string];
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>((props, ref) => {
  const {
    children,
    className,
    variant,
    size: sizeProp,
    intent,
    round,
    borderless,
    animated,
    outlined,
    count,
    maxCount,
    showZero,
    invisible,
    position = "top-end",
    offset = [0, 0],
    ...rest
  } = props;

  const solid = variant === "solid";
  const dotted = variant === "dotted";
  const contained = isRenderableNode(children);

  const { cls } = Prefix.useConfig();
  const size = Size.useConfig(sizeProp);
  const { fast } = Duration.useConfig();
  const isRTL = Direction.useConfig() === "rtl";

  const classes = cn(
    `${cls}badge`,
    {
      [`${cls}contained`]: contained,
      [`${cls}standalone`]: !contained,
      [`${cls}outlined`]: outlined,
      [`${cls}rtl`]: isRTL,
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
        tag = <Dot size={size} intent={intent} animated={animated} />;
      } else {
        tag = (
          <Tag
            variant={solid ? "solid" : null}
            size={size}
            intent={intent}
            round={round}
            borderless={borderless}
            className={cn({
              [`${cls}quadrate`]: String(count).length === 1,
            })}
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
    const [horizontal, vertical] = offset;

    if (position.includes("top")) {
      style.top = vertical;
    } else if (position.includes("bottom")) {
      style.bottom = vertical;
    }

    if (position.includes("start")) {
      if (isRTL) {
        style.right = horizontal;
      } else {
        style.left = horizontal;
      }
    } else if (position.includes("end")) {
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
            [`${cls}badge-switcher-${position}`]: isString(position),
          })}
        >
          {tag}
        </span>
      </span>
    </Transition>
  );
});

export default Badge;
