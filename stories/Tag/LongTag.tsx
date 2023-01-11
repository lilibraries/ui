import React from "react";
import { Tag, TagCommonProps } from "@lilib/ui";

function LongTag(props: TagCommonProps) {
  return (
    <Tag {...props} clickable clearable style={{ maxWidth: 220 }}>
      This is a very long tag which can be truncated
    </Tag>
  );
}

export default LongTag;
