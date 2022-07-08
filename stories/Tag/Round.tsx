import React from "react";
import { Tag, TagProps } from "@lilib/ui";

function Round(props: TagProps) {
  return (
    <Tag {...props} round clearable clickable>
      Tag
    </Tag>
  );
}

export default Round;
