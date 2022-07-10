import React from "react";
import { Badge, BadgeProps } from "@lilib/ui";

const block = {
  width: 50,
  height: 50,
  borderRadius: 4,
  backgroundColor: "#808080",
};

function Placements(props: BadgeProps) {
  return (
    <>
      <Badge
        count={9}
        {...props}
        placement="top-start"
        style={{ marginRight: 32 }}
      >
        <div style={block} />
      </Badge>
      <Badge
        count={9}
        {...props}
        placement="top-end"
        style={{ marginRight: 32 }}
      >
        <div style={block} />
      </Badge>
      <Badge
        count={9}
        {...props}
        placement="bottom-start"
        style={{ marginRight: 32 }}
      >
        <div style={block} />
      </Badge>
      <Badge count={9} {...props} placement="bottom-end">
        <div style={block} />
      </Badge>
    </>
  );
}

export default Placements;
