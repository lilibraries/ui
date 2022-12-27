import React from "react";
import createIcon from "./createIcon";

const CloseIcon = createIcon(
  "stroke",
  <>
    <polyline points="10 10 38 38" />
    <polyline points="38 10 10 38" />
  </>
);

export default CloseIcon;
