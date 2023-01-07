import React, { forwardRef, HTMLAttributes, ReactNode } from "react";
import cn from "classnames";
import Prefix from "../Prefix";
import Direction from "../Direction";
import Size, { SizeValue } from "../Size";
import { IntentValue } from "../types";
import SpinnerConfig from "../Spinner/SpinnerConfig";
import ButtonConfig, {
  ButtonVariant,
  ButtonLoadingPosition,
} from "./ButtonConfig";

export interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
  vertical?: boolean;
  variant?: ButtonVariant;
  intent?: IntentValue;
  size?: SizeValue;
  fluid?: boolean;
  round?: boolean;
  truncated?: boolean;
  borderless?: boolean;
  disabled?: boolean;
  iconOnly?: boolean;
  loading?: boolean;
  loadingIcon?: ReactNode;
  loadingDelay?: number;
  loadingPosition?: ButtonLoadingPosition;
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
      loadingPosition,
      ...rest
    } = props;

    const { cls } = Prefix.useConfig();
    const size = Size.useConfig(sizeProp);
    const isRTL = Direction.useConfig() === "rtl";

    const classes = cn(
      `${cls}button-group`,
      {
        [`${cls}vertical`]: vertical,
        [`${cls}horizontal`]: !vertical,
        [`${cls}fluid`]: fluid,
        [`${cls}rtl`]: isRTL,
        [`${cls}ltr`]: !isRTL,
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
              loadingPosition={loadingPosition}
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
