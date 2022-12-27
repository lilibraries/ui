import React, { forwardRef, ReactNode, SVGAttributes, SVGProps } from "react";

function createIcon(
  type: null | "stroke" | "fill",
  children: ReactNode,
  options?: SVGAttributes<SVGSVGElement>
) {
  let defaults: SVGProps<SVGSVGElement>;
  if (type === "stroke") {
    defaults = {
      stroke: "currentColor",
      strokeWidth: "4",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      fill: "none",
    };
  } else if (type === "fill") {
    defaults = {
      stroke: "0",
      fill: "currentColor",
    };
  }

  return forwardRef<SVGSVGElement, SVGAttributes<SVGSVGElement>>(
    (props, ref) => {
      return (
        <svg
          ref={ref}
          width="1em"
          height="1em"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
          {...defaults}
          {...options}
          {...props}
        >
          {children}
        </svg>
      );
    }
  );
}

export default createIcon;
