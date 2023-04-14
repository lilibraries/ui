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
      <Badge count={6} outlined variant="dotted" color="red">
        <div style={block} />
      </Badge>
      <Badge count={6} outlined variant="dotted" color="magenta">
        <div style={block} />
      </Badge>
      <Badge count={6} outlined variant="dotted" color="purple">
        <div style={block} />
      </Badge>
      <Badge count={6} outlined variant="dotted" color="indigo">
        <div style={block} />
      </Badge>
      <Badge count={6} outlined variant="dotted" color="navy">
        <div style={block} />
      </Badge>
      <Badge count={6} outlined variant="dotted" color="blue">
        <div style={block} />
      </Badge>
      <Badge count={6} outlined variant="dotted" color="cyan">
        <div style={block} />
      </Badge>
      <Badge count={6} outlined variant="dotted" color="teal">
        <div style={block} />
      </Badge>
      <Badge count={6} outlined variant="dotted" color="green">
        <div style={block} />
      </Badge>
      <Badge count={6} outlined variant="dotted" color="lime">
        <div style={block} />
      </Badge>
      <Badge count={6} outlined variant="dotted" color="yellow">
        <div style={block} />
      </Badge>
      <Badge count={6} outlined variant="dotted" color="orange">
        <div style={block} />
      </Badge>
      <Badge count={6} outlined variant="dotted" color="brown">
        <div style={block} />
      </Badge>
      <Badge count={6} outlined variant="dotted" color="gray">
        <div style={block} />
      </Badge>
      <Badge count={6} outlined variant="dotted" color={null}>
        <div style={block} />
      </Badge>
    </Flexbox>
  );
}

export default Example;
