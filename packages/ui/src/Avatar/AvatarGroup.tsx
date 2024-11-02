import React, { forwardRef, HTMLAttributes } from "react";
import cn from "classnames";
import Prefix from "../Prefix";
import Direction from "../Direction";
import Size, { SizeValue } from "../Size";
import { ColorValue } from "../utils/types";
import AvatarConfig, { AvatarVariant } from "./AvatarConfig";

export interface AvatarGroupProps extends Omit<HTMLAttributes<HTMLDivElement>, "color"> {
  variant?: AvatarVariant;
  size?: SizeValue;
  round?: boolean;
  color?: ColorValue;
  outlined?: boolean;
  hoverable?: boolean;
}

const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>((props, ref) => {
  const { variant, size: sizeProp, round, color, outlined, hoverable, children, className, ...rest } = props;

  const { cls } = Prefix.useConfig();
  const size = Size.useConfig(sizeProp);
  const isRTL = Direction.useConfig() === "rtl";

  const classes = cn(
    `${cls}avatar-group`,
    {
      [`${cls}rtl`]: isRTL,
    },
    className
  );

  return (
    <div {...rest} ref={ref} className={classes}>
      <Size value={size}>
        <AvatarConfig variant={variant} round={round} color={color} outlined={outlined} hoverable={hoverable}>
          {children}
        </AvatarConfig>
      </Size>
    </div>
  );
});

export default AvatarGroup;
