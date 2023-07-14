import React, { useState } from "react";
import { Button, Flexbox, Switch, Popup } from "@lilib/ui";

function Example() {
  const [open, setOpen] = useState(false);

  return (
    <Flexbox gap="2x" align="center">
      <Switch
        checked={open}
        onChange={(event) => setOpen(event.target.checked)}
      />
      <Popup
        open={open}
        placement="top-start"
        content={<div style={{ padding: 16 }}>This is a popup message.</div>}
      >
        <Button style={{ borderStyle: "dashed" }}>Trigger</Button>
      </Popup>
    </Flexbox>
  );
}

export default Example;
