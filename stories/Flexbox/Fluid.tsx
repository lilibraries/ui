import React from "react";
import { Button, Flexbox } from "@lilib/ui";

function Example() {
  return (
    <Flexbox gap="4x" fluid direction="column">
      <Button fluid>1</Button>
      <Button fluid>2</Button>
      <Button fluid>3</Button>
    </Flexbox>
  );
}

export default Example;
