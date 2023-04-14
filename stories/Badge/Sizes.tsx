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
      <Badge count={6} size="small">
        <div style={block} />
      </Badge>
      <Badge count={6} size={null}>
        <div style={block} />
      </Badge>
      <Badge count={6} size="large">
        <div style={block} />
      </Badge>
    </Flexbox>
  );
}

export default Example;
