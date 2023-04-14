import React from "react";
import { Badge } from "@lilib/ui";

const block = {
  width: 50,
  height: 50,
  borderRadius: 4,
  backgroundColor: "#808080",
};

function Example() {
  return (
    <Badge count={6}>
      <div style={block} />
    </Badge>
  );
}

export default Example;
