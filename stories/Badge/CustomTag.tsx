import React from "react";
import { Tag, Badge } from "@lilib/ui";

const block = {
  width: 50,
  height: 50,
  borderRadius: 4,
  backgroundColor: "#797E86",
};

function Example() {
  return (
    <Badge
      tag={
        <Tag variant="solid" size="small" color="yellow" borderless>
          VIP
        </Tag>
      }
      outlined
    >
      <div style={block} />
    </Badge>
  );
}

export default Example;
