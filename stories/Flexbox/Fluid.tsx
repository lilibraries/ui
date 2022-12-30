import React from "react";
import { Button, Flexbox, FlexboxProps } from "@lilib/ui";

function Fluid(props: FlexboxProps) {
  return (
    <Flexbox gap="4x" {...props} fluid direction="column">
      <Button fluid>1</Button>
      <Button fluid>2</Button>
      <Button fluid>3</Button>
    </Flexbox>
  );
}

export default Fluid;
