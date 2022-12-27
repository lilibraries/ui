import React, {
  ReactNode,
  forwardRef,
  ElementType,
  cloneElement,
  ReactElement,
  createElement,
  ComponentProps,
  isValidElement,
} from "react";
import cn from "classnames";
import isFunction from "lodash/isFunction";
import Icon from "../Icon";
import Prefix from "../Prefix";
import Size, { SizeValue } from "../Size";
import Spinner, { SpinnerProps } from "../Spinner";
import { IntentValue } from "../Intent";
import isRenderableNode from "../utils/isRenderableNode";
import ButtonConfig, {
  ButtonVariant,
  ButtonLoadingPosition,
} from "./ButtonConfig";
import ButtonGroup from "./ButtonGroup";

export * from "./ButtonConfig";
export * from "./ButtonGroup";
export interface ButtonCommonProps {
  variant?: ButtonVariant;
  intent?: IntentValue;
  size?: SizeValue;
  fluid?: boolean;
  round?: boolean;
  truncated?: boolean;
  active?: boolean;
  disabled?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  iconOnly?: boolean;
  loading?: boolean;
  loadingPosition?: ButtonLoadingPosition;
}
export type ButtonProps<C extends ElementType = "button"> = C extends "button"
  ? {
      as?: C;
    } & ButtonCommonProps &
      ComponentProps<C>
  : {
      as: C;
    } & ButtonCommonProps &
      ComponentProps<C>;
export interface ButtonComponent {
  <C extends ElementType = "button">(props: ButtonProps<C>): ReactElement;
  Config: typeof ButtonConfig;
  Group: typeof ButtonGroup;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    children,
    className,
    as = "button",
    variant: variantProp,
    intent: intentProp,
    size: sizeProp,
    fluid: fluidProp,
    round: roundProp,
    truncated: truncatedProp,
    active,
    disabled: disabledProp,
    startIcon,
    endIcon,
    iconOnly: iconOnlyProp,
    loading: loadingProp,
    loadingPosition: loadingPositionProp,
    onClick,
    ...rest
  } = props;

  const prefix = Prefix.useConfig();
  const size = Size.useConfig(sizeProp);
  const hasStartIcon = isRenderableNode(startIcon);
  const hasEndIcon = isRenderableNode(endIcon);

  const {
    variant,
    intent,
    fluid,
    round,
    truncated,
    disabled,
    iconOnly,
    loading,
    loadingPosition,
  } = ButtonConfig.useConfig({
    variant: variantProp,
    intent: intentProp,
    fluid: fluidProp,
    round: roundProp,
    truncated: truncatedProp,
    disabled: disabledProp,
    iconOnly: iconOnlyProp,
    loading: loadingProp,
    loadingPosition: loadingPositionProp,
  });

  let loadingPositionStart = false;
  let loadingPositionCenter = false;
  let loadingPositionEnd = false;

  if (loadingPosition) {
    if (loadingPosition === "start") {
      loadingPositionStart = true;
    } else if (loadingPosition === "end") {
      loadingPositionEnd = true;
    } else {
      loadingPositionCenter = true;
    }
  } else {
    if (hasStartIcon && !hasEndIcon) {
      loadingPositionStart = true;
    } else if (hasEndIcon && !hasStartIcon) {
      loadingPositionEnd = true;
    } else {
      loadingPositionCenter = true;
    }
  }

  const spinnerProps: SpinnerProps = {
    spinning: loading,
  };
  const classes = cn(
    `${prefix}button`,
    {
      [`${prefix}${variant}`]: variant,
      [`${prefix}${intent}`]: intent,
      [`${prefix}${size}`]: size,
      [`${prefix}fluid`]: fluid,
      [`${prefix}round`]: round,
      [`${prefix}truncated`]: truncated,
      [`${prefix}active`]: active,
      [`${prefix}disabled`]: disabled,
      [`${prefix}loading`]: loading && loadingPositionCenter,
      [`${prefix}icon-only`]: iconOnly,
    },
    className
  );

  let start: ReactNode = null;
  let center: ReactNode = null;
  let end: ReactNode = null;
  let loader: ReactNode = null;

  function wrapSpinner(node?: ReactNode, fixedProps?: SpinnerProps) {
    if (isValidElement(node) && node.type === Spinner) {
      return cloneElement(node, { ...spinnerProps, ...fixedProps });
    }
    return (
      <Spinner {...spinnerProps} {...fixedProps}>
        {node}
      </Spinner>
    );
  }

  function wrapIcon(
    node?: ReactNode,
    options?: { startSpace?: boolean; endSpace?: boolean }
  ) {
    const startSpace = options && options.startSpace;
    const endSpace = options && options.endSpace;
    if (isValidElement(node)) {
      if (node.type === Icon) {
        return cloneElement<SpinnerProps>(node as any, {
          className: cn(
            {
              [`${prefix}start-spaced`]: startSpace,
              [`${prefix}end-spaced`]: endSpace,
            },
            node.props.className
          ),
        });
      } else if (node.type === Spinner) {
        return cloneElement<SpinnerProps>(node as any, {
          ...spinnerProps,
          startSpace: startSpace,
          endSpace: endSpace,
        });
      }
    }
    if (isRenderableNode(node)) {
      return (
        <Icon
          className={cn({
            [`${prefix}start-spaced`]: startSpace,
            [`${prefix}end-spaced`]: endSpace,
          })}
        >
          {node}
        </Icon>
      );
    }
    return node;
  }

  if (iconOnly) {
    center = hasStartIcon ? startIcon : hasEndIcon ? endIcon : children;
    center = wrapSpinner(center);
  } else {
    if (hasStartIcon) {
      if (loadingPositionStart) {
        start = wrapSpinner(startIcon, { endSpace: true });
      } else {
        start = wrapIcon(startIcon, { endSpace: true });
      }
    } else if (loadingPositionStart) {
      start = wrapSpinner(null, { endSpace: true });
    }
    if (hasEndIcon) {
      if (loadingPositionEnd) {
        end = wrapSpinner(endIcon, { startSpace: true });
      } else {
        end = wrapIcon(endIcon, { startSpace: true });
      }
    } else if (loadingPositionEnd) {
      end = wrapSpinner(null, { startSpace: true });
    }
    center = <span className={`${prefix}button-content`}>{children}</span>;
    if (loadingPositionCenter) {
      loader = (
        <span className={`${prefix}button-loader`}>
          <Spinner spinning delay={0} />
        </span>
      );
    }
  }

  return createElement<ButtonProps>(
    as,
    {
      ...rest,
      ref,
      className: classes,
      disabled: disabled || loading,
      onClick: (event) => {
        if (disabled || loading) {
          event.preventDefault();
        } else if (isFunction(onClick)) {
          onClick(event);
        }
      },
    },
    start,
    center,
    end,
    loader
  );
}) as any as ButtonComponent;

Button.Config = ButtonConfig;
Button.Group = ButtonGroup;

export default Button;
