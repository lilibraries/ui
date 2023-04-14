import React, { useState } from "react";
import { Flexbox, Radio } from "@lilib/ui";

function Controlled() {
  const [value, setValue] = useState<any>(1);

  return (
    <Radio.Group
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

function Uncontrolled() {
  return (
    <Radio.Group defaultValue="1">
      <Flexbox gap="4x">
        <Radio value="1">Radio 1</Radio>
        <Radio value="2">Radio 2</Radio>
        <Radio value="3">Radio 3</Radio>
      </Flexbox>
    </Radio.Group>
  );
}

function Example() {
  return (
    <>
      <h6>Controlled</h6>
      <Controlled />

      <h6>Uncontrolled</h6>
      <Uncontrolled />
    </>
  );
}

export default Example;
