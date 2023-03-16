import React, { forwardRef, HTMLAttributes } from "react";

const ColorPreview = forwardRef<
  HTMLSpanElement,
  HTMLAttributes<HTMLSpanElement>
>((props, ref) => {
  const { style, ...rest } = props;

  return (
    <span
      {...rest}
      ref={ref}
      style={{
        display: "inline-flex",
        boxSizing: "border-box",
        width: 32,
        height: 32,
        borderRadius: 1000,
        ...style,
      }}
    />
  );
});

export default ColorPreview;
