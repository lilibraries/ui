import React, { forwardRef, HTMLAttributes, ReactNode } from "react";
import cn from "classnames";
import Prefix from "../Prefix";
import Size, { SizeValue } from "../Size";
import Intent, { IntentValue } from "../Intent";
import ButtonConfig, {
  ButtonVariant,
  ButtonLoadingPosition,
} from "./ButtonConfig";
import SpinnerConfig from "../Spinner/SpinnerConfig";
import Direction from "../Direction";

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
      intent: intentProp,
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
    const intent = Intent.useConfig(intentProp);
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
          <Intent value={intent}>
            <SpinnerConfig icon={loadingIcon} delay={loadingDelay}>
              <ButtonConfig
                variant={variant}
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
          </Intent>
        </Size>
      </div>
    );
  }
);

export default ButtonGroup;
