import React from "react";
import { Avatar, Badge } from "@lilib/ui";

const block = {
  width: 100,
  height: 100,
  borderRadius: "50%",
  backgroundColor: "#797E86",
};

function Example() {
  return (
    <Badge
      rounded
      outlined
      tag={<Avatar image="https://cdn.jsdelivr.net/gh/alohe/avatars/png/3d_4.png" rounded />}
      placement="bottom-end"
      offset="16px"
    >
      <div style={block} />
    </Badge>
  );
}

export default Example;
