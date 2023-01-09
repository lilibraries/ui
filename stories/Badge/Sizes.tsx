import React from "react";
import { Badge, BadgeProps, Flexbox } from "@lilib/ui";

const block = {
  width: 50,
  height: 50,
  borderRadius: 4,
  backgroundColor: "#808080",
};

function Sizes(props: BadgeProps) {
  return (
    <Flexbox gap="8x" align="center">
      <Badge count={6} {...props} size="small">
        <div style={block} />
      </Badge>
      <Badge count={6} {...props} size={null}>
        <div style={block} />
      </Badge>
      <Badge count={6} {...props} size="large">
        <div style={block} />
      </Badge>
    </Flexbox>
  );
}

export default Sizes;
