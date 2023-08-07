import React from "react";
import { Button, Flexbox, Tooltip } from "@lilib/ui";

function Example() {
  return (
    <Flexbox gap="2x" wrap>
      <Tooltip content="Tooltip message." intent="major">
        <Button intent="major">Major</Button>
      </Tooltip>
      <Tooltip content="Tooltip message." intent="minor">
        <Button intent="minor">Minor</Button>
      </Tooltip>
      <Tooltip content="Tooltip message." intent="positive">
        <Button intent="positive">Positive</Button>
      </Tooltip>
      <Tooltip content="Tooltip message." intent="alertive">
        <Button intent="alertive">Alertive</Button>
      </Tooltip>
      <Tooltip content="Tooltip message." intent="negative">
        <Button intent="negative">Negative</Button>
      </Tooltip>
    </Flexbox>
  );
}

export default Example;
