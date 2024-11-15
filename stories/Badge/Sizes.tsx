import React from "react";
import { Badge, Flexbox } from "@lilib/ui";

const block = {
  width: 50,
  height: 50,
  borderRadius: 4,
  backgroundColor: "#797E86",
};

function Example() {
  return (
    <Flexbox gap="8x" align="center">
      <Badge count={8} size="small" color="blue">
        <div style={block} />
      </Badge>
      <Badge count={8} size={null} color="blue">
        <div style={block} />
      </Badge>
      <Badge count={8} size="large" color="blue">
        <div style={block} />
      </Badge>
    </Flexbox>
  );
}

export default Example;
