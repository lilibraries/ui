import React from "react";
import { Badge, Flexbox } from "@lilib/ui";

const block = {
  width: 50,
  height: 50,
  borderRadius: 4,
  backgroundColor: "#808080",
};

function Example() {
  return (
    <Flexbox gap="8x" align="center">
      <Badge count={6} placement="top-start">
        <div style={block} />
      </Badge>
      <Badge count={6} placement="top-end">
        <div style={block} />
      </Badge>
      <Badge count={6} placement="bottom-start">
        <div style={block} />
      </Badge>
      <Badge count={6} placement="bottom-end">
        <div style={block} />
      </Badge>
    </Flexbox>
  );
}

export default Example;
