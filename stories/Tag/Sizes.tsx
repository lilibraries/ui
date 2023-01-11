import React from "react";
import { Flexbox, Tag, TagCommonProps } from "@lilib/ui";

function Sizes(props: TagCommonProps) {
  return (
    <Flexbox gap="2x" align="center">
      <Tag {...props} clickable clearable size="small">
        Tag
      </Tag>
      <Tag {...props} clickable clearable size={null}>
        Tag
      </Tag>
      <Tag {...props} clickable clearable size="large">
        Tag
      </Tag>
    </Flexbox>
  );
}

export default Sizes;
