import React, { forwardRef, SVGAttributes } from "react";

const CheckIcon = forwardRef<SVGSVGElement, SVGAttributes<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        ref={ref}
        width="1em"
        height="1em"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <polyline points="34 4 14 24 34 44" />
      </svg>
    );
  }
);

export default CheckIcon;
