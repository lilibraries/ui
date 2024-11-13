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
      <Badge count={8} color="red">
        <div style={block} />
      </Badge>
      <Badge count={8} color="magenta">
        <div style={block} />
      </Badge>
      <Badge count={8} color="purple">
        <div style={block} />
      </Badge>
      <Badge count={8} color="indigo">
        <div style={block} />
      </Badge>
      <Badge count={8} color="navy">
        <div style={block} />
      </Badge>
      <Badge count={8} color="blue">
        <div style={block} />
      </Badge>
      <Badge count={8} color="cyan">
        <div style={block} />
      </Badge>
      <Badge count={8} color="teal">
        <div style={block} />
      </Badge>
      <Badge count={8} color="green">
        <div style={block} />
      </Badge>
      <Badge count={8} color="lime">
        <div style={block} />
      </Badge>
      <Badge count={8} color="yellow">
        <div style={block} />
      </Badge>
      <Badge count={8} color="orange">
        <div style={block} />
      </Badge>
      <Badge count={8} color="brown">
        <div style={block} />
      </Badge>
      <Badge count={8} color="gray">
        <div style={block} />
      </Badge>
      <Badge count={8} color={null}>
        <div style={block} />
      </Badge>
    </Flexbox>
  );
}

export default Example;
