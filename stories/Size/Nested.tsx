import React from "react";
import { Size, Button, Flexbox } from "@lilib/ui";

function Nested() {
  return (
    <Flexbox gap="2x" align="center">
      <Size value="small">
        <Button>Small</Button>

        <Size value={null}>
          <Button>Default</Button>

          <Size value="large">
            <Button>Large</Button>
          </Size>
        </Size>
      </Size>
    </Flexbox>
  );
}

export default Nested;
