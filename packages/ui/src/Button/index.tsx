import React, {
  ReactNode,
  forwardRef,
  ElementType,
  cloneElement,
  ReactElement,
  createElement,
  ComponentProps,
  isValidElement,
  ForwardRefExoticComponent,
} from "react";
import cn from "classnames";
import Icon from "../Icon";
import Prefix from "../Prefix";
import Duration from "../Duration";
import Direction from "../Direction";
import Transition from "../Transition";
import Size, { SizeValue } from "../Size";
import Spinner, { SpinnerProps } from "../Spinner";
import { IntentValue } from "../types";
import isRenderableNode from "../utils/isRenderableNode";
import ButtonConfig, {
  ButtonVariant,
  ButtonLoadingPlacement,
} from "./ButtonConfig";
import ButtonGroup from "./ButtonGroup";

export * from "./ButtonGroup";
export * from "./ButtonConfig";

export interface ButtonCommonProps {
  variant?: ButtonVariant;
  intent?: IntentValue;
  size?: SizeValue;
  fluid?: boolean;
  round?: boolean;
  truncated?: boolean;
  borderless?: boolean;
  active?: boolean;
  disabled?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  iconOnly?: boolean;
  loading?: boolean;
  loadingIcon?: ReactNode;
  loadingDelay?: number;
  loadingPlacement?: ButtonLoadingPlacement;
}

export type ButtonProps<C extends ElementType = "button"> = C extends "button"
  ? {
      as?: C;
    } & ComponentProps<C> &
      ButtonCommonProps
  : {
      as: C;
    } & ComponentProps<C> &
      ButtonCommonProps;

export interface ButtonComponent
  extends ForwardRefExoticComponent<ButtonCommonProps> {
  <C extends ElementType = "button">(props: ButtonProps<C>): ReactElement;
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
    borderless: borderlessProp,
    active,
    disabled: disabledProp,
    startIcon,
    endIcon,
    iconOnly: iconOnlyProp,
    loading: loadingProp,
    loadingIcon: loadingIconProp,
    loadingDelay: loadingDelayProp,
    loadingPlacement: loadingPlacementProp,
    onClick,
    ...rest
  } = props;

  const { cls } = Prefix.useConfig();
  const size = Size.useConfig(sizeProp);
  const { fast } = Duration.useConfig();
  const isRTL = Direction.useConfig() === "rtl";

  const { icon: loadingIcon, delay: loadingDelay } = Spinner.Config.useConfig({
    icon: loadingIconProp,
    delay: loadingDelayProp,
  });

  const {
    variant,
    intent,
    fluid,
    round,
    truncated,
    borderless,
    disabled,
    iconOnly,
    loading,
    loadingPlacement,
  } = ButtonConfig.useConfig({
    variant: variantProp,
    intent: intentProp,
    fluid: fluidProp,
    round: roundProp,
    truncated: truncatedProp,
    borderless: borderlessProp,
    disabled: disabledProp,
    iconOnly: iconOnlyProp,
    loading: loadingProp,
    loadingPlacement: loadingPlacementProp,
  });

  const hasStartIcon = isRenderableNode(startIcon);
  const hasEndIcon = isRenderableNode(endIcon);

  let loadingStart = false;
  let loadingEnd = false;
  let loadingCenter = false;

  if (!iconOnly) {
    if (loadingPlacement) {
      if (loadingPlacement === "start") {
        loadingStart = true;
      } else if (loadingPlacement === "end") {
        loadingEnd = true;
      } else {
        loadingCenter = true;
      }
    } else {
      if (hasStartIcon && !hasEndIcon) {
        loadingStart = true;
      } else if (hasEndIcon && !hasStartIcon) {
        loadingEnd = true;
      } else {
        loadingCenter = true;
      }
    }
  }

  const spinnerProps: SpinnerProps = {
    spinning: loading,
    icon: loadingIcon,
    delay: loadingDelay,
  };

  const classes = cn(
    `${cls}button`,
    {
      [`${cls}${variant}`]: variant,
      [`${cls}${intent}`]: intent,
      [`${cls}${size}`]: size,
      [`${cls}fluid`]: fluid,
      [`${cls}round`]: round,
      [`${cls}truncated`]: truncated,
      [`${cls}borderless`]: borderless,
      [`${cls}active`]: active,
      [`${cls}disabled`]: disabled,
      [`${cls}loading`]: loading && loadingCenter,
      [`${cls}icon-only`]: iconOnly,
      [`${cls}rtl`]: isRTL,
    },
    className
  );

  let start: ReactNode = null;
  let end: ReactNode = null;
  let center: ReactNode = null;
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
    options: { startSpace?: boolean; endSpace?: boolean } = {}
  ) {
    const { startSpace, endSpace } = options;

    if (isValidElement(node)) {
      if (node.type === Icon) {
        return cloneElement<SpinnerProps>(node as any, {
          className: cn(
            {
              [`${cls}start-spaced`]: startSpace,
              [`${cls}end-spaced`]: endSpace,
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
            [`${cls}start-spaced`]: startSpace,
            [`${cls}end-spaced`]: endSpace,
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
      if (loadingStart) {
        start = wrapSpinner(startIcon, { endSpace: true });
      } else {
        start = wrapIcon(startIcon, { endSpace: true });
      }
    } else if (loadingStart) {
      start = wrapSpinner(null, { endSpace: true });
    }

    if (hasEndIcon) {
      if (loadingEnd) {
        end = wrapSpinner(endIcon, { startSpace: true });
      } else {
        end = wrapIcon(endIcon, { startSpace: true });
      }
    } else if (loadingEnd) {
      end = wrapSpinner(null, { startSpace: true });
    }

    if (loadingCenter) {
      loader = (
        <Transition
          in={loading}
          durations={fast}
          unmountOnExit
          enterDelay={loadingDelay}
          classNames={{
            [Transition.ENTER]: true,
            [Transition.EXIT]: true,
            [Transition.EXITED]: true,
            [Transition.EXITING]: true,
          }}
        >
          <span className={`${cls}button-loader`}>
            <Spinner spinning delay={0} icon={loadingIcon} />
          </span>
        </Transition>
      );
    }

    center = <span className={`${cls}button-content`}>{children}</span>;
  }

  const button = createElement<ButtonProps>(
    as,
    {
      tabIndex: !disabled && !loading ? 0 : undefined,
      ...rest,
      ref,
      className: classes,
      disabled: disabled || loading,
      onClick: (event) => {
        if (disabled || loading) {
          event.preventDefault();
        } else if (onClick) {
          onClick(event);
        }
      },
    },
    start,
    center,
    end,
    loader
  );

  if (loadingCenter && !iconOnly) {
    return (
      <Transition
        in={!loading}
        durations={fast}
        exitDelay={loadingDelay}
        classNames={{
          [Transition.EXIT]: true,
          [Transition.EXITED]: true,
          [Transition.EXITING]: true,
        }}
      >
        {button}
      </Transition>
    );
  } else {
    return button;
  }
}) as any as ButtonComponent;

Button.Group = ButtonGroup;

export default Button;
