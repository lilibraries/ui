import React from "react";
import { Flexbox, Tag, TagProps } from "@lilib/ui";

function Square(props: TagProps) {
  return (
    <Flexbox gap="2x" align="center">
      <Tag {...props} square>
        0
      </Tag>
      <Tag {...props} square clearable>
        88
      </Tag>
    </Flexbox>
  );
}

export default Square;
