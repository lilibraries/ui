import React from "react";
import { Button, Tooltip } from "@lilib/ui";

function Example() {
  return (
    <Tooltip content="Tooltip message.">
      <Button>Hover</Button>
    </Tooltip>
  );
}

export default Example;
