import React from "react";
import { Flexbox, Tag } from "@lilib/ui";

function Example() {
  return (
    <Flexbox gap="2x" align="center">
      <Tag clickable clearable size="small">
        Tag
      </Tag>
      <Tag clickable clearable size={null}>
        Tag
      </Tag>
      <Tag clickable clearable size="large">
        Tag
      </Tag>
    </Flexbox>
  );
}

export default Example;
