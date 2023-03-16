import React, { forwardRef, HTMLAttributes } from "react";
import { Prefix } from "@lilib/ui";

const Monospace = forwardRef<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>(
  (props, ref) => {
    const { style, ...rest } = props;
    const { var: prefix } = Prefix.useConfig();

    return (
      <span
        {...rest}
        ref={ref}
        style={{ fontFamily: `var(--${prefix}font-family-mono)`, ...style }}
      />
    );
  }
);

export default Monospace;
