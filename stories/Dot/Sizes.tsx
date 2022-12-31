import React from "react";
import { Flexbox, Dot, DotProps } from "@lilib/ui";

function Sizes(props: DotProps) {
  return (
    <Flexbox gap="2x" align="center">
      <Dot {...props} size="small" />
      <Dot {...props} size={null} />
      <Dot {...props} size="large" />
    </Flexbox>
  );
}

export default Sizes;
