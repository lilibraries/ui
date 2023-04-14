import React from "react";
import { Size, Button, Flexbox } from "@lilib/ui";

function Example() {
  return (
    <Flexbox gap="2x" align="center">
      <Size value="small">
        <Button>Small</Button>

        <Size value={null}>
          <Button>Basic</Button>

          <Size value="large">
            <Button>Large</Button>
          </Size>
        </Size>
      </Size>
    </Flexbox>
  );
}

export default Example;
