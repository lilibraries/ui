import React from "react";
import { Checkbox, Flexbox } from "@lilib/ui";

function Example() {
  return (
    <Flexbox direction="column" gap="2x" align="flex-start">
      <Checkbox size="small">Small</Checkbox>
      <Checkbox size={null}>Basic</Checkbox>
      <Checkbox size="large">Large</Checkbox>
    </Flexbox>
  );
}

export default Example;
