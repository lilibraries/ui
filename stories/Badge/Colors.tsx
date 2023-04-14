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
    <Flexbox gap="8x" align="center" wrap>
      <Badge count={6} color="red">
        <div style={block} />
      </Badge>
      <Badge count={6} color="magenta">
        <div style={block} />
      </Badge>
      <Badge count={6} color="purple">
        <div style={block} />
      </Badge>
      <Badge count={6} color="indigo">
        <div style={block} />
      </Badge>
      <Badge count={6} color="navy">
        <div style={block} />
      </Badge>
      <Badge count={6} color="blue">
        <div style={block} />
      </Badge>
      <Badge count={6} color="cyan">
        <div style={block} />
      </Badge>
      <Badge count={6} color="teal">
        <div style={block} />
      </Badge>
      <Badge count={6} color="green">
        <div style={block} />
      </Badge>
      <Badge count={6} color="lime">
        <div style={block} />
      </Badge>
      <Badge count={6} color="yellow">
        <div style={block} />
      </Badge>
      <Badge count={6} color="orange">
        <div style={block} />
      </Badge>
      <Badge count={6} color="brown">
        <div style={block} />
      </Badge>
      <Badge count={6} color="gray">
        <div style={block} />
      </Badge>
      <Badge count={6} color={null}>
        <div style={block} />
      </Badge>
    </Flexbox>
  );
}

export default Example;
