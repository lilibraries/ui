import React from "react";
import { Button, Flexbox } from "@lilib/ui";

function Example() {
  return (
    <Flexbox gap="2x" align="center">
      <Button size="small">Button</Button>
      <Button size={null}>Button</Button>
      <Button size="large">Button</Button>
    </Flexbox>
  );
}

export default Example;
