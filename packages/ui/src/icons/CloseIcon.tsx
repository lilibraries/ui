import React, { forwardRef, SVGAttributes } from "react";

const CloseIcon = forwardRef<SVGSVGElement, SVGAttributes<SVGSVGElement>>(
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
        <polyline points="10 10 38 38" />
        <polyline points="38 10 10 38" />
      </svg>
    );
  }
);

export default CloseIcon;
