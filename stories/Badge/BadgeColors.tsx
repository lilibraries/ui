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
    <Flexbox gap="8x" align="center" wrap>
      <Badge count={8} color="red" outlined>
        <div style={block} />
      </Badge>
      <Badge count={8} color="magenta" outlined>
        <div style={block} />
      </Badge>
      <Badge count={8} color="purple" outlined>
        <div style={block} />
      </Badge>
      <Badge count={8} color="indigo" outlined>
        <div style={block} />
      </Badge>
      <Badge count={8} color="navy" outlined>
        <div style={block} />
      </Badge>
      <Badge count={8} color="blue" outlined>
        <div style={block} />
      </Badge>
      <Badge count={8} color="cyan" outlined>
        <div style={block} />
      </Badge>
      <Badge count={8} color="teal" outlined>
        <div style={block} />
      </Badge>
      <Badge count={8} color="green" outlined>
        <div style={block} />
      </Badge>
      <Badge count={8} color="lime" outlined>
        <div style={block} />
      </Badge>
      <Badge count={8} color="yellow" outlined>
        <div style={block} />
      </Badge>
      <Badge count={8} color="orange" outlined>
        <div style={block} />
      </Badge>
      <Badge count={8} color="brown" outlined>
        <div style={block} />
      </Badge>
      <Badge count={8} color="gray" outlined>
        <div style={block} />
      </Badge>
      <Badge count={8} color={null}>
        <div style={block} />
      </Badge>
    </Flexbox>
  );
}

export default Example;
