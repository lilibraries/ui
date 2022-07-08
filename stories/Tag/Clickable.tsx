import React from "react";
import { Tag, TagProps } from "@lilib/ui";

function Clickable(props: TagProps) {
  return (
    <Tag {...props} clickable onClick={() => alert("Click")}>
      Click
    </Tag>
  );
}

export default Clickable;
