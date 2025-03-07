import React, { useState } from "react";
import { Button, Flexbox, Switch } from "@lilib/ui";
import ArrowPopper from "./ArrowPopper";

function Example() {
  const [open, setOpen] = useState(false);

  return (
    <Flexbox gap="2x" align="center">
      <Switch checked={open} onChange={(event) => setOpen(event.target.checked)} />
      <ArrowPopper open={open} placement="top-start">
        <Button>Trigger</Button>
      </ArrowPopper>
    </Flexbox>
  );
}

export default Example;
