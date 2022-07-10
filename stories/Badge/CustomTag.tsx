import React from "react";
import { Tag, Badge, BadgeProps } from "@lilib/ui";

const block = {
  width: 50,
  height: 50,
  borderRadius: 4,
  backgroundColor: "#808080",
};

function CustomTag(props: BadgeProps) {
  return (
    <Badge
      {...props}
      count={
        <Tag
          variant="solid"
          size="small"
          intent="negative"
          style={{ borderBottomLeftRadius: 0 }}
        >
          Hot
        </Tag>
      }
    >
      <div style={block} />
    </Badge>
  );
}

export default CustomTag;
