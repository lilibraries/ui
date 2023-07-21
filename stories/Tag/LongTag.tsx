import React from "react";
import { Tag } from "@lilib/ui";

function Example() {
  return (
    <Tag clearable style={{ maxWidth: 220 }}>
      This is a very long tag which can be truncated
    </Tag>
  );
}

export default Example;
