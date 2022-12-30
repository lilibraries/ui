import React, { useState } from "react";
import { Button, Flexbox, FlexboxAlign, FlexboxProps } from "@lilib/ui";

function Align(props: FlexboxProps) {
  const [align, setAlign] = useState<FlexboxAlign>("center");

  return (
    <Flexbox direction="column" gap="4x" align="flex-start">
      <select
        value={align}
        onChange={(event) => {
          setAlign(event.target.value as FlexboxAlign);
        }}
      >
        <option value="center">center</option>
        <option value="stretch">stretch</option>
        <option value="baseline">baseline</option>
        <option value="flex-end">flex-end</option>
        <option value="flex-start">flex-start</option>
      </select>

      <Flexbox gap="4x" {...props} align={align}>
        Buttons:
        <Button size="small">Button</Button>
        <Button size={null}>Button</Button>
        <Button size="large">Button</Button>
      </Flexbox>
    </Flexbox>
  );
}

export default Align;
