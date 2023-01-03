import React from "react";
import { Badge, BadgeProps, Flexbox } from "@lilib/ui";

const block = {
  width: 50,
  height: 50,
  borderRadius: 4,
  backgroundColor: "#808080",
};

function Outlined(props: BadgeProps) {
  return (
    <Flexbox gap="8x" align="center">
      <Badge count={9} variant="solid" intent="major" {...props} outlined>
        <div style={block} />
      </Badge>
      <Badge count={9} variant="dotted" intent="positive" {...props} outlined>
        <div style={block} />
      </Badge>
    </Flexbox>
  );
}

export default Outlined;
