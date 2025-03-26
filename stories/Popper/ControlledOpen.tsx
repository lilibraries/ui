import React, { useState } from "react";
import { Button, Flexbox, Switch } from "@lilib/ui";
import ArrowedPopper from "./ArrowedPopper";

function Example() {
  const [open, setOpen] = useState(false);

  return (
    <Flexbox gap="2x" align="center">
      <Switch checked={open} onChange={(event) => setOpen(event.target.checked)} />
      <ArrowedPopper open={open} placement="top-start">
        <Button>Trigger</Button>
      </ArrowedPopper>
    </Flexbox>
  );
}

export default Example;
