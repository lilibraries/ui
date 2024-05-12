import React, { forwardRef, HTMLAttributes, ReactNode } from "react";
import cn from "classnames";
import Prefix from "../Prefix";
import SpinnerConfig from "../Spinner/SpinnerConfig";
import Size, { SizeValue } from "../Size";
import { IntentValue } from "../utils/types";
import ButtonConfig, {
  ButtonVariant,
  ButtonLoadingPlacement,
} from "./ButtonConfig";

export interface ButtonGroupProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "color"> {
  size?: SizeValue;
  intent?: IntentValue;
  variant?: ButtonVariant;
  round?: boolean;
  fluid?: boolean;
  vertical?: boolean;
  truncated?: boolean;
  borderless?: boolean;
  iconOnly?: boolean;
  disabled?: boolean;
  loading?: boolean;
  loadingIcon?: ReactNode;
  loadingDelay?: number;
  loadingPlacement?: ButtonLoadingPlacement;
}

const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
  (props, ref) => {
    const {
      children,
      className,
      size: sizeProp,
      intent,
      variant,
      round,
      fluid,
      vertical,
      truncated,
      borderless,
      iconOnly,
      disabled,
      loading,
      loadingIcon,
      loadingDelay,
      loadingPlacement,
      ...rest
    } = props;

    const { cls } = Prefix.useConfig();
    const size = Size.useConfig(sizeProp);

    const classes = cn(
      `${cls}button-group`,
      {
        [`${cls}fluid`]: fluid,
        [`${cls}vertical`]: vertical,
      },
      className
    );

    return (
      <div {...rest} ref={ref} className={classes}>
        <Size value={size}>
          <SpinnerConfig icon={loadingIcon} delay={loadingDelay}>
            <ButtonConfig
              intent={intent}
              variant={variant}
              round={round}
              fluid={vertical}
              truncated={truncated}
              borderless={borderless}
              iconOnly={iconOnly}
              disabled={disabled}
              loading={loading}
              loadingPlacement={loadingPlacement}
            >
              {children}
            </ButtonConfig>
          </SpinnerConfig>
        </Size>
      </div>
    );
  }
);

export default ButtonGroup;
