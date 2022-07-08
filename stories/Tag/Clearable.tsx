import React from "react";
import { Tag, TagProps } from "@lilib/ui";

function Clearable(props: TagProps) {
  return (
    <Tag {...props} clearable onClear={() => alert("Clear")}>
      Tag
    </Tag>
  );
}

export default Clearable;
