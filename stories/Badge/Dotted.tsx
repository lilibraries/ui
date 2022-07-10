import React from "react";
import { Badge, BadgeProps } from "@lilib/ui";

const block = {
  width: 50,
  height: 50,
  borderRadius: 4,
  backgroundColor: "#808080",
};

function Dotted(props: BadgeProps) {
  return (
    <>
      <Badge
        count={9}
        {...props}
        variant="dotted"
        intent={null}
        style={{ marginRight: 32 }}
      >
        <div style={block} />
      </Badge>
      <Badge
        count={9}
        {...props}
        variant="dotted"
        intent="major"
        style={{ marginRight: 32 }}
      >
        <div style={block} />
      </Badge>
      <Badge
        count={9}
        {...props}
        variant="dotted"
        intent="minor"
        style={{ marginRight: 32 }}
      >
        <div style={block} />
      </Badge>
      <Badge
        count={9}
        {...props}
        variant="dotted"
        intent="positive"
        style={{ marginRight: 32 }}
      >
        <div style={block} />
      </Badge>
      <Badge
        count={9}
        {...props}
        variant="dotted"
        intent="alertive"
        style={{ marginRight: 32 }}
      >
        <div style={block} />
      </Badge>
      <Badge count={9} {...props} variant="dotted" intent="negative">
        <div style={block} />
      </Badge>
    </>
  );
}

export default Dotted;
