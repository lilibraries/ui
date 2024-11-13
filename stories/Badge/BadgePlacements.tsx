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
      <Badge count={8} placement="top-start" color="blue">
        <div style={block} />
      </Badge>
      <Badge count={8} placement="top-end" color="blue">
        <div style={block} />
      </Badge>
      <Badge count={8} placement="bottom-start" color="blue">
        <div style={block} />
      </Badge>
      <Badge count={8} placement="bottom-end" color="blue">
        <div style={block} />
      </Badge>
    </Flexbox>
  );
}

export default Example;
