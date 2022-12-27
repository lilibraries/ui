import React from "react";
import createIcon from "./createIcon";

const LoaderIcon = createIcon(
  "stroke",
  <>
    <circle cx="24" cy="24" r="21" strokeWidth="6" strokeOpacity="0.3" />
    <path d="M 24 3 A 21 21 0 0 1 45 24" strokeWidth="6" />
  </>
);

export default LoaderIcon;
