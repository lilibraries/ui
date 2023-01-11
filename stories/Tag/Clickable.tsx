import React from "react";
import { Flexbox, Tag, TagCommonProps } from "@lilib/ui";

function Clickable(props: TagCommonProps) {
  return (
    <Flexbox gap="2x" align="center">
      <Tag {...props} onClick={() => alert("Click")}>
        Click
      </Tag>
      <Tag {...props} clickable>
        Clickable
      </Tag>
    </Flexbox>
  );
}

export default Clickable;
