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

export default Controlled;
