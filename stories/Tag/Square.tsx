import React from "react";
import { Flexbox, Tag, TagCommonProps } from "@lilib/ui";

function Square(props: TagCommonProps) {
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
