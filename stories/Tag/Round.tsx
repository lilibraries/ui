import React from "react";
import { Tag } from "@lilib/ui";

function Example() {
  return (
    <Tag
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

export default Example;
