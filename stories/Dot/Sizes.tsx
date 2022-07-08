import React from "react";
import { Dot, DotProps } from "@lilib/ui";

function Sizes(props: DotProps) {
  return (
    <>
      <Dot {...props} size="small" /> <Dot {...props} size={null} />{" "}
      <Dot {...props} size="large" />
    </>
  );
}

export default Sizes;
