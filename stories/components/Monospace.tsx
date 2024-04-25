import React, { FC, HTMLAttributes } from "react";
import { Prefix } from "@lilib/ui";

const Monospace: FC<HTMLAttributes<HTMLSpanElement>> = (props) => {
  const { style, ...rest } = props;
  const { var: prefix } = Prefix.useConfig();

  return (
    <span
      {...rest}
      style={{
        fontFamily: `var(--${prefix}font-family-code)`,
        ...style,
      }}
    />
  );
};

export default Monospace;
