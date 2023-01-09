import React from "react";
import { Badge, BadgeProps, Flexbox } from "@lilib/ui";

const block = {
  width: 50,
  height: 50,
  borderRadius: 4,
  backgroundColor: "#808080",
};

function Colors(props: BadgeProps) {
  return (
    <Flexbox gap="8x" align="center" wrap>
      <Badge count={6} {...props} color="red">
        <div style={block} />
      </Badge>
      <Badge count={6} {...props} color="magenta">
        <div style={block} />
      </Badge>
      <Badge count={6} {...props} color="purple">
        <div style={block} />
      </Badge>
      <Badge count={6} {...props} color="indigo">
        <div style={block} />
      </Badge>
      <Badge count={6} {...props} color="navy">
        <div style={block} />
      </Badge>
      <Badge count={6} {...props} color="blue">
        <div style={block} />
      </Badge>
      <Badge count={6} {...props} color="cyan">
        <div style={block} />
      </Badge>
      <Badge count={6} {...props} color="teal">
        <div style={block} />
      </Badge>
      <Badge count={6} {...props} color="green">
        <div style={block} />
      </Badge>
      <Badge count={6} {...props} color="lime">
        <div style={block} />
      </Badge>
      <Badge count={6} {...props} color="yellow">
        <div style={block} />
      </Badge>
      <Badge count={6} {...props} color="orange">
        <div style={block} />
      </Badge>
      <Badge count={6} {...props} color="brown">
        <div style={block} />
      </Badge>
      <Badge count={6} {...props} color="gray">
        <div style={block} />
      </Badge>
      <Badge count={6} {...props} color={null}>
        <div style={block} />
      </Badge>
    </Flexbox>
  );
}

export default Colors;
