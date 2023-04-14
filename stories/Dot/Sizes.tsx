import React from "react";
import { Flexbox, Dot } from "@lilib/ui";

function Example() {
  return (
    <Flexbox gap="2x" align="center">
      <Dot size="small" />
      <Dot size={null} />
      <Dot size="large" />
    </Flexbox>
  );
}

export default Example;
