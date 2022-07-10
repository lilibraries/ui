import React, {
  ReactNode,
  forwardRef,
  CSSProperties,
  HTMLAttributes,
} from "react";
import cn from "classnames";
import Dot from "../Dot";
import Tag from "../Tag";
import Prefix from "../Prefix";
import Duration from "../Duration";
import Transition from "../Transition";
import Size, { SizeValue } from "../Size";
import isNumber from "../_utils/isNumber";
import isString from "../_utils/isString";
import { IntentValue } from "../_utils/types";
import isRenderableNode from "../_utils/isRenderableNode";

export type BadgeVariant = null | "solid" | "dotted";
export type BadgePlacement =
  | null
  | "top-start"
  | "top-end"
  | "bottom-start"
  | "bottom-end";
export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: SizeValue;
  intent?: IntentValue;
  round?: boolean;
  outlined?: boolean;
  animated?: boolean;
  count?: ReactNode;
  maxCount?: number;
  showZero?: boolean;
  invisible?: boolean;
  placement?: BadgePlacement;
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
    outlined,
    animated,
    count,
    maxCount,
    showZero,
    invisible,
    placement = "top-end",
    offset = [0, 0],
    ...rest
  } = props;

  const solid = variant === "solid";
  const dotted = variant === "dotted";
  const contained = isRenderableNode(children);

  const prefix = Prefix.useConfig();
  const size = Size.useConfig(sizeProp);
  const { fast } = Duration.useConfig();

  const classes = cn(
    `${prefix}badge`,
    {
      [`${prefix}contained`]: contained,
      [`${prefix}standalone`]: !contained,
      [`${prefix}outlined`]: outlined,
    },
    className
  );

  let tag: ReactNode = null;
  let visible: boolean = true;
  let position: CSSProperties = {};

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
        tag = <Dot intent={intent} size={size} animated={animated} />;
      } else {
        tag = (
          <Tag
            variant={solid ? "solid" : null}
            size={size}
            intent={intent}
            round={round}
            className={cn({
              [`${prefix}quadrate`]: String(count).length === 1,
            })}
          >
            {tag}
          </Tag>
        );
      }
    }
  }

  if (invisible) {
    visible = !invisible;
  } else if (isNumber(count)) {
    if (isNaN(count) || (count === 0 && !showZero)) {
      visible = false;
    }
  } else if (!isRenderableNode(count)) {
    visible = false;
  }

  const [horizontal = 0, vertical = 0] = offset;
  if (placement === "top-start") {
    position = { top: vertical, left: horizontal };
  } else if (placement === "top-end") {
    position = { top: vertical, right: horizontal };
  } else if (placement === "bottom-start") {
    position = { bottom: vertical, left: horizontal };
  } else if (placement === "bottom-end") {
    position = { bottom: vertical, right: horizontal };
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
          style={position}
          className={cn(`${prefix}badge-switcher`, {
            [`${prefix}badge-switcher-${placement}`]: isString(placement),
          })}
        >
          {tag}
        </span>
      </span>
    </Transition>
  );
});

export default Badge;
