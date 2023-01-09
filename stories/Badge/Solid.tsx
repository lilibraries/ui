import React from "react";
import { Badge, BadgeProps, Flexbox } from "@lilib/ui";

const block = {
  width: 50,
  height: 50,
  borderRadius: 4,
  backgroundColor: "#808080",
};

function Solid(props: BadgeProps) {
  return (
    <Flexbox gap="8x" align="center" wrap>
      <Badge count={6} outlined {...props} variant="solid" color="red">
        <div style={block} />
      </Badge>
      <Badge count={6} outlined {...props} variant="solid" color="magenta">
        <div style={block} />
      </Badge>
      <Badge count={6} outlined {...props} variant="solid" color="purple">
        <div style={block} />
      </Badge>
      <Badge count={6} outlined {...props} variant="solid" color="indigo">
        <div style={block} />
      </Badge>
      <Badge count={6} outlined {...props} variant="solid" color="navy">
        <div style={block} />
      </Badge>
      <Badge count={6} outlined {...props} variant="solid" color="blue">
        <div style={block} />
      </Badge>
      <Badge count={6} outlined {...props} variant="solid" color="cyan">
        <div style={block} />
      </Badge>
      <Badge count={6} outlined {...props} variant="solid" color="teal">
        <div style={block} />
      </Badge>
      <Badge count={6} outlined {...props} variant="solid" color="green">
        <div style={block} />
      </Badge>
      <Badge count={6} outlined {...props} variant="solid" color="lime">
        <div style={block} />
      </Badge>
      <Badge count={6} outlined {...props} variant="solid" color="yellow">
        <div style={block} />
      </Badge>
      <Badge count={6} outlined {...props} variant="solid" color="orange">
        <div style={block} />
      </Badge>
      <Badge count={6} outlined {...props} variant="solid" color="brown">
        <div style={block} />
      </Badge>
      <Badge count={6} outlined {...props} variant="solid" color="gray">
        <div style={block} />
      </Badge>
      <Badge count={6} outlined {...props} variant="solid" color={null}>
        <div style={block} />
      </Badge>
    </Flexbox>
  );
}

export default Solid;
