import React from "react";
import { Button, ButtonGroupProps } from "@lilib/ui";

function Round(props: ButtonGroupProps) {
  return (
    <Button.Group {...props} round>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </Button.Group>
  );
}

export default Round;
