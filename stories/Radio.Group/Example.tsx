import React, { useState } from "react";
import { Flexbox, Radio, RadioGroupProps } from "@lilib/ui";

function Controlled(props: RadioGroupProps) {
  const [value, setValue] = useState<any>(1);

  return (
    <Radio.Group
      {...props}
      value={value}
      onChange={(event) => {
        setValue(event.target.value);
      }}
    >
      <Flexbox gap="4x">
        <Radio value={1}>Radio 1</Radio>
        <Radio value={2}>Radio 2</Radio>
        <Radio value={3}>Radio 3</Radio>
      </Flexbox>
    </Radio.Group>
  );
}

function Uncontrolled(props: RadioGroupProps) {
  return (
    <Radio.Group defaultValue="1" {...props}>
      <Flexbox gap="4x">
        <Radio value="1">Radio 1</Radio>
        <Radio value="2">Radio 2</Radio>
        <Radio value="3">Radio 3</Radio>
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
