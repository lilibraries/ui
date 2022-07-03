import React from "react";
import { Button, ButtonGroupProps } from "@lilib/ui";

function Fluid(props: ButtonGroupProps) {
  return (
    <Button.Group {...props} fluid>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </Button.Group>
  );
}

export default Fluid;
