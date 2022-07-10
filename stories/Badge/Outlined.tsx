import React from "react";
import { Badge, BadgeProps } from "@lilib/ui";

const block = {
  width: 50,
  height: 50,
  borderRadius: 4,
  backgroundColor: "#808080",
};

function Outlined(props: BadgeProps) {
  return (
    <>
      <Badge
        count={9}
        {...props}
        outlined
        variant="solid"
        intent="major"
        style={{ marginRight: 32 }}
      >
        <div style={block} />
      </Badge>
      <Badge count={9} {...props} outlined variant="dotted" intent="positive">
        <div style={block} />
      </Badge>
    </>
  );
}

export default Outlined;
