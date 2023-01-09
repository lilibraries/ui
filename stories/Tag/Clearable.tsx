import React from "react";
import { Tag, TagProps, Flexbox } from "@lilib/ui";

function Clearable(props: TagProps) {
  return (
    <Flexbox gap="2x" align="center">
      <Tag {...props} onClear={() => alert("Clear")}>
        Clear
      </Tag>
      <Tag {...props} clearable>
        Clearable
      </Tag>
    </Flexbox>
  );
}

export default Clearable;
