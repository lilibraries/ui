import React from "react";
import { Button, ButtonGroupProps } from "@lilib/ui";

function Basic(props: ButtonGroupProps) {
  return (
    <Button.Group {...props}>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </Button.Group>
  );
}

export default Basic;
