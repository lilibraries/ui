import React from "react";
import { Tag, TagCommonProps } from "@lilib/ui";

function Round(props: TagCommonProps) {
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
