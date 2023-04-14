import React from "react";
import { Flexbox, Tag } from "@lilib/ui";

function Example() {
  return (
    <Flexbox gap="2x" align="center">
      <Tag square>0</Tag>
      <Tag square clearable>
        88
      </Tag>
    </Flexbox>
  );
}

export default Example;
