import React from "react";
import { Tag, Badge } from "@lilib/ui";

const block = {
  width: 50,
  height: 50,
  borderRadius: 4,
  backgroundColor: "#808080",
};

function Example() {
  return (
    <Badge
      count={
        <Tag variant="solid" size="small" color="red">
          Hot
        </Tag>
      }
    >
      <div style={block} />
    </Badge>
  );
}

export default Example;
