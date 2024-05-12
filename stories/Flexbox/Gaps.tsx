import React, { useState } from "react";
import { Button, Flexbox, FlexboxGap, Radio } from "@lilib/ui";

function Example() {
  const [gap, setGap] = useState<FlexboxGap>("4x");

  return (
    <Flexbox direction="column" gap="4x" align="flex-start">
      <Radio.Group
        value={gap}
        onChange={(event) => {
          setGap(event.target.value);
        }}
      >
        <Flexbox gap="4x">
          <Radio value="1x">1x</Radio>
          <Radio value="2x">2x</Radio>
          <Radio value="3x">3x</Radio>
          <Radio value="4x">4x</Radio>
          <Radio value="5x">5x</Radio>
          <Radio value="6x">6x</Radio>
          <Radio value="7x">7x</Radio>
          <Radio value="8x">8x</Radio>
          <Radio value="9x">9x</Radio>
        </Flexbox>
      </Radio.Group>

      <Flexbox gap={gap}>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
      </Flexbox>
    </Flexbox>
  );
}

export default Example;
