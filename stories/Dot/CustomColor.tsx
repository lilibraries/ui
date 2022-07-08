import React from "react";
import { Dot, DotProps } from "@lilib/ui";

function CustomColor(props: DotProps) {
  return (
    <Dot {...props} color="#ff0000">
      Dot
    </Dot>
  );
}

export default CustomColor;
