import React, { useState } from "react";
import { Button, Flexbox, FlexboxJustify, Radio } from "@lilib/ui";

function Example() {
  const [justify, setJustify] = useState<FlexboxJustify>("flex-start");

  return (
    <Flexbox fluid direction="column" gap="4x" align="flex-start">
      <Radio.Group
        value={justify}
        onChange={(event) => {
          setJustify(event.target.value);
        }}
      >
        <Flexbox gap="4x">
          <Radio value="center">center</Radio>
          <Radio value="flex-end">flex-end</Radio>
          <Radio value="flex-start">flex-start</Radio>
          <Radio value="space-around">space-around</Radio>
          <Radio value="space-evenly">space-evenly</Radio>
          <Radio value="space-between">space-between</Radio>
        </Flexbox>
      </Radio.Group>

      <Flexbox gap="4x" fluid justify={justify} style={{ width: "100%" }}>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
      </Flexbox>
    </Flexbox>
  );
}

export default Example;
