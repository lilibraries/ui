import React, { forwardRef, HTMLAttributes } from "react";
import cn from "classnames";
import Prefix from "../Prefix";
import Size, { SizeValue } from "../Size";
import { IntentValue } from "../Intent";
import ButtonConfig, {
  ButtonVariant,
  ButtonLoadingPosition,
} from "./ButtonConfig";

export interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
  variant?: ButtonVariant;
  intent?: IntentValue;
  size?: SizeValue;
  fluid?: boolean;
  round?: boolean;
  vertical?: boolean;
  truncated?: boolean;
  disabled?: boolean;
  iconOnly?: boolean;
  loading?: boolean;
  loadingPosition?: ButtonLoadingPosition;
}

const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
  (props, ref) => {
    const {
      children,
      className,
      variant,
      intent,
      size,
      fluid,
      round,
      vertical,
      truncated,
      disabled,
      iconOnly,
      loading,
      loadingPosition,
      ...rest
    } = props;

    const { cls } = Prefix.useConfig();
    const classes = cn(
      `${cls}button-group`,
      {
        [`${cls}vertical`]: vertical,
        [`${cls}horizontal`]: !vertical,
        [`${cls}fluid`]: fluid,
      },
      className
    );

    return (
      <div {...rest} ref={ref} className={classes}>
        <Size value={size}>
          <ButtonConfig
            variant={variant}
            intent={intent}
            fluid={vertical}
            round={round}
            truncated={truncated}
            disabled={disabled}
            iconOnly={iconOnly}
            loading={loading}
            loadingPosition={loadingPosition}
          >
            {children}
          </ButtonConfig>
        </Size>
      </div>
    );
  }
);

export default ButtonGroup;
