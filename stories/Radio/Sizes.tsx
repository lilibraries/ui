import React from "react";
import { Radio, Flexbox } from "@lilib/ui";

function Example() {
  return (
    <Flexbox direction="column" gap="2x" align="flex-start">
      <Radio size="small">Small</Radio>
      <Radio size={null}>Basic</Radio>
      <Radio size="large">Large</Radio>
    </Flexbox>
  );
}

export default Example;
