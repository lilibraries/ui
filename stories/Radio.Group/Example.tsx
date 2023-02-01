import React, { useState } from "react";
import { Flexbox, Radio, RadioGroupProps } from "@lilib/ui";

function Controlled(props: RadioGroupProps) {
  const [value, setValue] = useState<string>();

  return (
    <Radio.Group
      {...props}
      value={value}
      onChange={(event) => {
        setValue(event.target.value);
      }}
    >
      <Flexbox gap="4x">
        <Radio value="value 1">Option 1</Radio>
        <Radio value="value 2">Option 2</Radio>
        <Radio value="value 3">Option 3</Radio>
      </Flexbox>
    </Radio.Group>
  );
}

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

function Example(props: RadioGroupProps) {
  return (
    <div>
      <h6>Controlled</h6>
      <Controlled {...props} />

      <h6>Uncontrolled</h6>
      <Uncontrolled {...props} />
    </div>
  );
}

export default Example;
