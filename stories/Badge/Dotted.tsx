import React from "react";
import { Badge, BadgeProps, Flexbox } from "@lilib/ui";

const block = {
  width: 50,
  height: 50,
  borderRadius: 4,
  backgroundColor: "#808080",
};

function Dotted(props: BadgeProps) {
  return (
    <Flexbox gap="8x" align="center">
      <Badge count={9} outlined {...props} variant="dotted" intent={null}>
        <div style={block} />
      </Badge>
      <Badge count={9} outlined {...props} variant="dotted" intent="major">
        <div style={block} />
      </Badge>
      <Badge count={9} outlined {...props} variant="dotted" intent="minor">
        <div style={block} />
      </Badge>
      <Badge count={9} outlined {...props} variant="dotted" intent="positive">
        <div style={block} />
      </Badge>
      <Badge count={9} outlined {...props} variant="dotted" intent="alertive">
        <div style={block} />
      </Badge>
      <Badge count={9} outlined {...props} variant="dotted" intent="negative">
        <div style={block} />
      </Badge>
    </Flexbox>
  );
}

export default Dotted;
