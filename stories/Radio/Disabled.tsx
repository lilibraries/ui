import React from "react";
import { Radio, Flexbox } from "@lilib/ui";

function Example() {
  return (
    <Flexbox gap="4x" align="center">
      <Radio disabled>Radio</Radio>
      <Radio disabled defaultChecked>
        Radio
      </Radio>
    </Flexbox>
  );
}

export default Example;
