import React from "react";
import { Badge, BadgeProps } from "@lilib/ui";

const block = {
  width: 50,
  height: 50,
  borderRadius: 4,
  backgroundColor: "#808080",
};

function Intents(props: BadgeProps) {
  return (
    <>
      <Badge count={9} {...props} intent={null} style={{ marginRight: 32 }}>
        <div style={block} />
      </Badge>
      <Badge count={9} {...props} intent="major" style={{ marginRight: 32 }}>
        <div style={block} />
      </Badge>
      <Badge count={9} {...props} intent="minor" style={{ marginRight: 32 }}>
        <div style={block} />
      </Badge>
      <Badge count={9} {...props} intent="positive" style={{ marginRight: 32 }}>
        <div style={block} />
      </Badge>
      <Badge count={9} {...props} intent="alertive" style={{ marginRight: 32 }}>
        <div style={block} />
      </Badge>
      <Badge count={9} {...props} intent="negative">
        <div style={block} />
      </Badge>
    </>
  );
}

export default Intents;
