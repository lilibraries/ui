import React, { forwardRef, HTMLAttributes, ReactNode } from "react";
import cn from "classnames";
import Prefix from "../Prefix";
import Direction from "../Direction";
import Size, { SizeValue } from "../Size";
import SpinnerConfig from "../Spinner/SpinnerConfig";
import { IntentValue } from "../utils/types";
import ButtonConfig, {
  ButtonVariant,
  ButtonLoadingPlacement,
} from "./ButtonConfig";

export interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
  vertical?: boolean;
  variant?: ButtonVariant;
  size?: SizeValue;
  intent?: IntentValue;
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
