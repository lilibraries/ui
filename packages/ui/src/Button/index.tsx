import React, {
  ReactNode,
  forwardRef,
  ElementType,
  cloneElement,
  ReactElement,
  createElement,
  isValidElement,
  ComponentProps,
  ForwardRefExoticComponent,
} from "react";
import cn from "classnames";
import Icon from "../Icon";
import Prefix from "../Prefix";
import Duration from "../Duration";
import Transition from "../Transition";
import Size, { SizeValue } from "../Size";
import Spinner, { SpinnerProps } from "../Spinner";
import isRenderable from "../utils/isRenderable";
import { IntentValue } from "../utils/types";
import ButtonConfig, {
  ButtonVariant,
  ButtonLoadingPlacement,
} from "./ButtonConfig";
import ButtonGroup from "./ButtonGroup";

export * from "./ButtonGroup";
export * from "./ButtonConfig";

export interface ButtonCommonProps {
  size?: SizeValue;
  intent?: IntentValue;
  variant?: ButtonVariant;
  round?: boolean;
  fluid?: boolean;
  truncated?: boolean;
  borderless?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  iconOnly?: boolean;
  active?: boolean;
  disabled?: boolean;
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
    size: sizeProp,
    intent: intentProp,
    variant: variantProp,
    round: roundProp,
    fluid: fluidProp,
    truncated: truncatedProp,
    borderless: borderlessProp,
    startIcon,
    endIcon,
    iconOnly: iconOnlyProp,
    active,
    disabled: disabledProp,
    loading: loadingProp,
    loadingIcon: loadingIconProp,
    loadingDelay: loadingDelayProp,
    loadingPlacement: loadingPlacementProp,
    onClick,
    ...rest
  } = props;

  const { cls } = Prefix.useConfig();
  const size = Size.useConfig(sizeProp);
  const { base } = Duration.useConfig();

  const { icon: loadingIcon, delay: loadingDelay } = Spinner.Config.useConfig({
    icon: loadingIconProp,
    delay: loadingDelayProp,
  });

  const {
    intent,
    variant,
    round,
    fluid,
    truncated,
    borderless,
    iconOnly,
    disabled,
    loading,
    loadingPlacement,
  } = ButtonConfig.useConfig({
    intent: intentProp,
    variant: variantProp,
    round: roundProp,
    fluid: fluidProp,
    truncated: truncatedProp,
    borderless: borderlessProp,
    iconOnly: iconOnlyProp,
    disabled: disabledProp,
    loading: loadingProp,
    loadingPlacement: loadingPlacementProp,
  });

  const hasStartIcon = isRenderable(startIcon);
  const hasEndIcon = isRenderable(endIcon);

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
    icon: loadingIcon,
    delay: loadingDelay,
    spinning: loading,
  };

  const classes = cn(
    `${cls}button`,
    {
      [`${cls}${size}`]: size,
      [`${cls}${intent}`]: intent,
      [`${cls}${variant}`]: variant,
      [`${cls}round`]: round,
      [`${cls}fluid`]: fluid,
      [`${cls}truncated`]: truncated,
      [`${cls}borderless`]: borderless,
      [`${cls}icon-only`]: iconOnly,
      [`${cls}loading`]: loading && loadingCenter,
      [`${cls}active`]: active,
      [`${cls}disabled`]: disabled,
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
        return cloneElement(node as any, {
          className: cn(
            {
              [`${cls}start-spaced`]: startSpace,
              [`${cls}end-spaced`]: endSpace,
            },
            node.props.className
          ),
        });
      } else if (node.type === Spinner) {
        return cloneElement(node as any, {
          ...spinnerProps,
          startSpace: startSpace,
          endSpace: endSpace,
        });
      }
    }

    if (isRenderable(node)) {
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
          classes
          durations={base}
          enterDelay={loadingDelay}
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
        classes
        durations={base}
        exitDelay={loadingDelay}
        firstMount
        keepMounted
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
