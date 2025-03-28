import React, { forwardRef, SVGAttributes } from "react";

// The following icon path is copied from ant-design-icons.
// @ant-design/icons-svg v4.4.2 | MIT License | https://github.com/ant-design/ant-design-icons

const InfoFilledIcon = forwardRef<SVGSVGElement, SVGAttributes<SVGSVGElement>>((props, ref) => {
  return (
    <svg
      ref={ref}
      width="1em"
      height="1em"
      fill="currentColor"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z" />
    </svg>
  );
});

export default InfoFilledIcon;
