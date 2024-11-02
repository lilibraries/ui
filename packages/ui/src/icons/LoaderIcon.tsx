import React, { forwardRef, SVGAttributes } from "react";

const LoaderIcon = forwardRef<SVGSVGElement, SVGAttributes<SVGSVGElement>>((props, ref) => {
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
      <circle cx="24" cy="24" r="21" strokeWidth="6" strokeOpacity="0.3" />
      <path d="M 24 3 A 21 21 0 0 1 45 24" strokeWidth="6" />
    </svg>
  );
});

export default LoaderIcon;
