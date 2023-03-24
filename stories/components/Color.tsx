import React, { FC, HTMLAttributes } from "react";
import { Prefix } from "@lilib/ui";

interface ColorProps extends HTMLAttributes<HTMLSpanElement> {
  name: string;
}

const Color: FC<ColorProps> = (props) => {
  const { name, style, ...rest } = props;
  const { var: prefix } = Prefix.useConfig();

  return (
    <span
      {...rest}
      style={{
        display: "inline-block",
        boxSizing: "border-box",
        verticalAlign: "middle",
        width: 32,
        height: 32,
        borderRadius: 1000,
        background: `var(--${prefix}${name})`,
        ...style,
      }}
    />
  );
};

export default Color;
