import React from "react";
import { Button, Flexbox, Tooltip } from "@lilib/ui";

function Example() {
  return (
    <Flexbox gap="2x" wrap>
      <Tooltip content="Tooltip message." intent="major">
        <Button style={{ borderStyle: "dashed" }} intent="major">
          Major
        </Button>
      </Tooltip>
      <Tooltip content="Tooltip message." intent="minor">
        <Button style={{ borderStyle: "dashed" }} intent="minor">
          Minor
        </Button>
      </Tooltip>
      <Tooltip content="Tooltip message." intent="positive">
        <Button style={{ borderStyle: "dashed" }} intent="positive">
          Positive
        </Button>
      </Tooltip>
      <Tooltip content="Tooltip message." intent="alertive">
        <Button style={{ borderStyle: "dashed" }} intent="alertive">
          Alertive
        </Button>
      </Tooltip>
      <Tooltip content="Tooltip message." intent="negative">
        <Button style={{ borderStyle: "dashed" }} intent="negative">
          Negative
        </Button>
      </Tooltip>
    </Flexbox>
  );
}

export default Example;
