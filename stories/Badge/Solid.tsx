import React from "react";
import { Badge, BadgeProps } from "@lilib/ui";

const block = {
  width: 50,
  height: 50,
  borderRadius: 4,
  backgroundColor: "#808080",
};

function Solid(props: BadgeProps) {
  return (
    <>
      <Badge
        count={9}
        {...props}
        variant="solid"
        intent={null}
        style={{ marginRight: 32 }}
      >
        <div style={block} />
      </Badge>
      <Badge
        count={9}
        {...props}
        variant="solid"
        intent="major"
        style={{ marginRight: 32 }}
      >
        <div style={block} />
      </Badge>
      <Badge
        count={9}
        {...props}
        variant="solid"
        intent="minor"
        style={{ marginRight: 32 }}
      >
        <div style={block} />
      </Badge>
      <Badge
        count={9}
        {...props}
        variant="solid"
        intent="positive"
        style={{ marginRight: 32 }}
      >
        <div style={block} />
      </Badge>
      <Badge
        count={9}
        {...props}
        variant="solid"
        intent="alertive"
        style={{ marginRight: 32 }}
      >
        <div style={block} />
      </Badge>
      <Badge count={9} {...props} variant="solid" intent="negative">
        <div style={block} />
      </Badge>
    </>
  );
}

export default Solid;
