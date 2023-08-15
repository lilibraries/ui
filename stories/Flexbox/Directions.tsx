import React, { useState } from "react";
import { Button, Flexbox, FlexboxDirection } from "@lilib/ui";

function Example() {
  const [direction, setDirection] = useState<FlexboxDirection>("row");

  return (
    <Flexbox direction="column" gap="4x" align="flex-start">
      <select
        value={direction}
        onChange={(event) => {
          setDirection(event.target.value as FlexboxDirection);
        }}
      >
        <option value="row">row</option>
        <option value="column">column</option>
        <option value="row-reverse">row-reverse</option>
        <option value="column-reverse">column-reverse</option>
      </select>

      <Flexbox gap="4x" direction={direction}>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
      </Flexbox>
    </Flexbox>
  );
}

export default Example;
