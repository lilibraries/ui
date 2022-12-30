import React, { useState } from "react";
import { Button, Flexbox, FlexboxGap, FlexboxProps } from "@lilib/ui";

function Gaps(props: FlexboxProps) {
  const [gap, setGap] = useState<FlexboxGap>("4x");

  return (
    <Flexbox direction="column" gap="4x" align="flex-start">
      <select
        value={gap}
        onChange={(event) => {
          setGap(event.target.value as FlexboxGap);
        }}
      >
        <option value="1x">1x</option>
        <option value="2x">2x</option>
        <option value="3x">3x</option>
        <option value="4x">4x</option>
        <option value="5x">5x</option>
        <option value="6x">6x</option>
        <option value="7x">7x</option>
        <option value="8x">8x</option>
        <option value="9x">9x</option>
      </select>

      <Flexbox {...props} gap={gap}>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
      </Flexbox>
    </Flexbox>
  );
}

export default Gaps;
