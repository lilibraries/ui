import React, { forwardRef, SVGAttributes } from "react";

const DotIcon = forwardRef<SVGSVGElement, SVGAttributes<SVGSVGElement>>((props, ref) => {
  return (
    <svg
      ref={ref}
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
      fill="currentColor"
      stroke="0"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="24" cy="24" r="10" />
    </svg>
  );
});

export default DotIcon;
