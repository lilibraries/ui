import React from "react";
import { Badge, BadgeProps, Flexbox } from "@lilib/ui";

const block = {
  width: 50,
  height: 50,
  borderRadius: 4,
  backgroundColor: "#808080",
};

function Intents(props: BadgeProps) {
  return (
    <Flexbox gap="8x" align="center">
      <Badge count={9} {...props} intent={null}>
        <div style={block} />
      </Badge>
      <Badge count={9} {...props} intent="major">
        <div style={block} />
      </Badge>
      <Badge count={9} {...props} intent="minor">
        <div style={block} />
      </Badge>
      <Badge count={9} {...props} intent="positive">
        <div style={block} />
      </Badge>
      <Badge count={9} {...props} intent="alertive">
        <div style={block} />
      </Badge>
      <Badge count={9} {...props} intent="negative">
        <div style={block} />
      </Badge>
    </Flexbox>
  );
}

export default Intents;
