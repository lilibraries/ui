import React from "react";
import { Badge, BadgeProps } from "@lilib/ui";

const block = {
  width: 50,
  height: 50,
  borderRadius: 4,
  backgroundColor: "#808080",
};

function Basic(props: BadgeProps) {
  return (
    <Badge count={9} {...props}>
      <div style={block} />
    </Badge>
  );
}

export default Basic;
