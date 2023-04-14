import React, { forwardRef, HTMLAttributes } from "react";
import cn from "classnames";
import Prefix from "../Prefix";
import Direction from "../Direction";
import Size, { SizeValue } from "../Size";
import { ColorValue } from "../utils/types";
import AvatarConfig from "./AvatarConfig";

export interface AvatarGroupProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "color"> {
  size?: SizeValue;
  round?: boolean;
  color?: ColorValue;
  outlined?: boolean;
  clickable?: boolean;
}

const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
  (props, ref) => {
    const {
      size: sizeProp,
      round,
      color,
      outlined,
      clickable,
      children,
      className,
      ...rest
    } = props;

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
          <AvatarConfig
            round={round}
            color={color}
            outlined={outlined}
            clickable={clickable}
          >
            {children}
          </AvatarConfig>
        </Size>
      </div>
    );
  }
);

export default AvatarGroup;
