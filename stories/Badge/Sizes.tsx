import React from "react";
import { Badge, BadgeProps } from "@lilib/ui";

const block = {
  width: 50,
  height: 50,
  borderRadius: 4,
  backgroundColor: "#808080",
};

function Sizes(props: BadgeProps) {
  return (
    <>
      <Badge count={9} {...props} size="small" style={{ marginRight: 32 }}>
        <div style={block} />
      </Badge>
      <Badge count={9} {...props} size={null} style={{ marginRight: 32 }}>
        <div style={block} />
      </Badge>
      <Badge count={9} {...props} size="large">
        <div style={block} />
      </Badge>
    </>
  );
}

export default Sizes;
