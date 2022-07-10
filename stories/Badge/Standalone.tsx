import React from "react";
import { Badge, BadgeProps } from "@lilib/ui";

function Standalone(props: BadgeProps) {
  return (
    <>
      <Badge count={9} {...props} /> Badge
    </>
  );
}

export default Standalone;
