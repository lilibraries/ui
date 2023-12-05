import React from "react";
import { Button, Flexbox } from "@lilib/ui";

function Example() {
  return (
    <Flexbox fluid direction="column" gap="4x">
      <Button fluid>1</Button>
      <Button fluid>2</Button>
      <Button fluid>3</Button>
    </Flexbox>
  );
}

export default Example;
