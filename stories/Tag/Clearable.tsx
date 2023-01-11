import React from "react";
import { Tag, TagCommonProps, Flexbox } from "@lilib/ui";

function Clearable(props: TagCommonProps) {
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
