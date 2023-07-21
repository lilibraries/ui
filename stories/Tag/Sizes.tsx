import React from "react";
import { Flexbox, Tag } from "@lilib/ui";

function Example() {
  return (
    <Flexbox gap="2x" align="center">
      <Tag clearable size="small">
        Tag
      </Tag>
      <Tag clearable size={null}>
        Tag
      </Tag>
      <Tag clearable size="large">
        Tag
      </Tag>
    </Flexbox>
  );
}

export default Example;
