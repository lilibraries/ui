import React from "react";
import { Badge, BadgeProps, Flexbox } from "@lilib/ui";

const block = {
  width: 50,
  height: 50,
  borderRadius: 4,
  backgroundColor: "#808080",
};

function Positions(props: BadgeProps) {
  return (
    <Flexbox gap="8x" align="center">
      <Badge count={9} {...props} position="top-start">
        <div style={block} />
      </Badge>
      <Badge count={9} {...props} position="top-end">
        <div style={block} />
      </Badge>
      <Badge count={9} {...props} position="bottom-start">
        <div style={block} />
      </Badge>
      <Badge count={9} {...props} position="bottom-end">
        <div style={block} />
      </Badge>
    </Flexbox>
  );
}

export default Positions;
