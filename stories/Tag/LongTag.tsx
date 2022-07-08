import React from "react";
import { Tag, TagProps } from "@lilib/ui";

function LongTag(props: TagProps) {
  return (
    <Tag {...props} clearable style={{ maxWidth: 400 }}>
      React is a free and open-source front-end JavaScript library for building
      user interfaces or UI components.
    </Tag>
  );
}

export default LongTag;
