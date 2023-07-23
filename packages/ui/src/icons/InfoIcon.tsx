import React, { forwardRef, SVGAttributes } from "react";

const InfoIcon = forwardRef<SVGSVGElement, SVGAttributes<SVGSVGElement>>(
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
        <circle cx="24" cy="24" r="20" />
        <line x1="24" y1="16" x2="24" y2="17" />
        <line x1="24" y1="24" x2="24" y2="32" />
      </svg>
    );
  }
);

export default InfoIcon;
