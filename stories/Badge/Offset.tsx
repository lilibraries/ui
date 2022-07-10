import React from "react";
import { Badge, BadgeProps } from "@lilib/ui";

const block = {
  width: 50,
  height: 50,
  borderRadius: "50%",
  backgroundColor: "#808080",
};

function Offset(props: BadgeProps) {
  return (
    <Badge count={9} {...props} offset={["14.64%", "14.64%"]} round>
      <div style={block} />
    </Badge>
  );
}

export default Offset;
