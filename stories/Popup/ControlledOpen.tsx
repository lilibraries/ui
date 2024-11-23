import React, { useState } from "react";
import { Button, Flexbox, Popup, Switch } from "@lilib/ui";

function Example() {
  const [open, setOpen] = useState(false);

  return (
    <Flexbox gap="2x" align="center">
      <Switch checked={open} onChange={(event) => setOpen(event.target.checked)} />
      <Popup open={open} arrowed placement="top-start" content="This is a popup message">
        <Button>Trigger</Button>
      </Popup>
    </Flexbox>
  );
}

export default Example;
