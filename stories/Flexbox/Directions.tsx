import React, { useState } from "react";
import { Button, Flexbox, FlexboxDirection, Radio } from "@lilib/ui";

function Example() {
  const [direction, setDirection] = useState<FlexboxDirection>("row");

  return (
    <Flexbox direction="column" gap="4x" align="flex-start">
      <Radio.Group
        value={direction}
        onChange={(event) => {
          setDirection(event.target.value);
        }}
      >
        <Flexbox gap="4x">
          <Radio value="row">row</Radio>
          <Radio value="column">column</Radio>
          <Radio value="row-reverse">row-reverse</Radio>
          <Radio value="column-reverse">column-reverse</Radio>
        </Flexbox>
      </Radio.Group>

      <Flexbox gap="4x" direction={direction}>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
      </Flexbox>
    </Flexbox>
  );
}

export default Example;
