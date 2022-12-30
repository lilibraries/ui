import React, { useState } from "react";
import { Button, Flexbox, FlexboxJustify, FlexboxProps } from "@lilib/ui";

function Justify(props: FlexboxProps) {
  const [justify, setJustify] = useState<FlexboxJustify>("center");

  return (
    <Flexbox fluid direction="column" gap="4x" align="flex-start">
      <select
        value={justify}
        onChange={(event) => {
          setJustify(event.target.value as FlexboxJustify);
        }}
      >
        <option value="center">center</option>
        <option value="flex-end">flex-end</option>
        <option value="flex-start">flex-start</option>
        <option value="space-around">space-around</option>
        <option value="space-evenly">space-evenly</option>
        <option value="space-between">space-between</option>
      </select>

      <Flexbox
        gap="4x"
        {...props}
        fluid
        justify={justify}
        style={{ width: "100%" }}
      >
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
      </Flexbox>
    </Flexbox>
  );
}

export default Justify;
