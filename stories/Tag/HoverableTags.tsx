import React from "react";
import { Flexbox, Tag } from "@lilib/ui";

function Example() {
  return (
    <Flexbox gap="2x" align="center">
      <Tag onClick={() => alert("Click")}>Click</Tag>
      <Tag hoverable>Hoverable</Tag>
    </Flexbox>
  );
}

export default Example;
