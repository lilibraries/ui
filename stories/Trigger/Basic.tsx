import React, { useState } from "react";
import { Button, Flexbox, Trigger } from "@lilib/ui";

function Example() {
  const [open, setOpen] = useState(false);

  return (
    <Flexbox gap="2x" align="center">
      <Trigger open={open} onOpen={() => setOpen(true)} onClose={() => setOpen(false)}>
        <Trigger.Anchor>
          <Button>Click</Button>
        </Trigger.Anchor>
      </Trigger>
      <span>{open ? "Opened" : "Closed"}</span>
    </Flexbox>
  );
}

export default Example;
