import React from "react";
import { Button, ButtonGroupProps } from "@lilib/ui";

function Vertical(props: ButtonGroupProps) {
  return (
    <Button.Group {...props} vertical>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </Button.Group>
  );
}

export default Vertical;
