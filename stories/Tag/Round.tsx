import React from "react";
import { Tag, TagProps } from "@lilib/ui";

function Round(props: TagProps) {
  return (
    <Tag
      {...props}
      round
      onClear={() => {
        alert("Clear");
      }}
      onClick={() => {
        alert("Click");
      }}
    >
      Tag
    </Tag>
  );
}

export default Round;
