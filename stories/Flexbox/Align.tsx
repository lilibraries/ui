import React, { useState } from "react";
import { Button, Flexbox, FlexboxAlign, Radio } from "@lilib/ui";

function Example() {
  const [align, setAlign] = useState<FlexboxAlign>("center");

  return (
    <Flexbox direction="column" gap="4x" align="flex-start">
      <Radio.Group
        value={align}
        onChange={(event) => {
          setAlign(event.target.value);
        }}
      >
        <Flexbox gap="4x">
          <Radio value="center">center</Radio>
          <Radio value="stretch">stretch</Radio>
          <Radio value="baseline">baseline</Radio>
          <Radio value="flex-end">flex-end</Radio>
          <Radio value="flex-start">flex-start</Radio>
        </Flexbox>
      </Radio.Group>

      <Flexbox gap="4x" align={align}>
        Buttons:
        <Button size="small">Button</Button>
        <Button size={null}>Button</Button>
        <Button size="large">Button</Button>
      </Flexbox>
    </Flexbox>
  );
}

export default Example;
