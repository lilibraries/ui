import React from "react";
import { Flexbox, Radio, RadioGroupProps } from "@lilib/ui";

function Uncontrolled(props: RadioGroupProps) {
  return (
    <Radio.Group defaultValue="value 1" {...props}>
      <Flexbox gap="4x">
        <Radio value="value 1">Option 1</Radio>
        <Radio value="value 2">Option 2</Radio>
        <Radio value="value 3">Option 3</Radio>
      </Flexbox>
    </Radio.Group>
  );
}

export default Uncontrolled;
