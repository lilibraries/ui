import React from "react";
import { Badge, BadgeProps, Flexbox } from "@lilib/ui";

const block = {
  width: 50,
  height: 50,
  borderRadius: 4,
  backgroundColor: "#808080",
};

function Placements(props: BadgeProps) {
  return (
    <Flexbox gap="8x" align="center">
      <Badge count={6} {...props} placement="top-start">
        <div style={block} />
      </Badge>
      <Badge count={6} {...props} placement="top-end">
        <div style={block} />
      </Badge>
      <Badge count={6} {...props} placement="bottom-start">
        <div style={block} />
      </Badge>
      <Badge count={6} {...props} placement="bottom-end">
        <div style={block} />
      </Badge>
    </Flexbox>
  );
}

export default Placements;
