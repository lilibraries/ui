import React, { forwardRef, HTMLAttributes } from "react";
import cn from "classnames";
import Prefix from "../Prefix";
import Size, { SizeValue } from "../Size";
import AvatarConfig from "./AvatarConfig";

export interface AvatarGroupProps extends Omit<HTMLAttributes<HTMLDivElement>, "color"> {
  size?: SizeValue;
  rounded?: boolean;
  outlined?: boolean;
}

const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>((props, ref) => {
  const { size: sizeProp, rounded, outlined, children, className, ...rest } = props;

  const { cls } = Prefix.useConfig();
  const size = Size.useConfig(sizeProp);

  return (
    <div {...rest} ref={ref} className={cn(`${cls}avatar-group`, className)}>
      <Size value={size}>
        <AvatarConfig rounded={rounded} outlined={outlined}>
          {children}
        </AvatarConfig>
      </Size>
    </div>
  );
});

export default AvatarGroup;
