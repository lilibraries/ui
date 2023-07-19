import React, { forwardRef, HTMLAttributes, ReactNode } from "react";
import cn from "classnames";
import Prefix from "../Prefix";
import Direction from "../Direction";
import Size, { SizeValue } from "../Size";
import SpinnerConfig from "../Spinner/SpinnerConfig";
import { ColorValue, IntentValue } from "../utils/types";
import ButtonConfig, {
  ButtonVariant,
  ButtonLoadingPlacement,
} from "./ButtonConfig";

export interface ButtonGroupProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "color"> {
  vertical?: boolean;
  variant?: ButtonVariant;
  size?: SizeValue;
  intent?: IntentValue;
  color?: ColorValue;
  fluid?: boolean;
  round?: boolean;
  truncated?: boolean;
  borderless?: boolean;
  disabled?: boolean;
  iconOnly?: boolean;
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
      vertical,
      variant,
      size: sizeProp,
      intent,
      color,
      fluid,
      round,
      truncated,
      borderless,
      disabled,
      iconOnly,
      loading,
      loadingIcon,
      loadingDelay,
      loadingPlacement,
      ...rest
    } = props;

    const { cls } = Prefix.useConfig();
    const size = Size.useConfig(sizeProp);
    const isRTL = Direction.useConfig() === "rtl";

    const classes = cn(
      `${cls}button-group`,
      {
        [`${cls}rtl`]: isRTL,
        [`${cls}ltr`]: !isRTL,
        [`${cls}fluid`]: fluid,
        [`${cls}vertical`]: vertical,
        [`${cls}horizontal`]: !vertical,
      },
      className
    );

    return (
      <div {...rest} ref={ref} className={classes}>
        <Size value={size}>
          <SpinnerConfig icon={loadingIcon} delay={loadingDelay}>
            <ButtonConfig
              variant={variant}
              intent={intent}
              color={color}
              fluid={vertical}
              round={round}
              truncated={truncated}
              borderless={borderless}
              disabled={disabled}
              iconOnly={iconOnly}
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
