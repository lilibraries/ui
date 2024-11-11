import React from "react";
import { Tag, Flexbox } from "@lilib/ui";

function Example() {
  return (
    <Flexbox gap="2x" align="center">
      <Tag onClear={() => alert("Clear")}>Clear</Tag>
      <Tag clearable>Clearable</Tag>
    </Flexbox>
  );
}

export default Example;
