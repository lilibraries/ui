import React, { useState } from "react";
import { Display, Switch } from "@lilib/ui";

function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Switch
        checked={open}
        onChange={(event) => setOpen(event.target.checked)}
      />
      <Display
        open={open}
        openDelay={500}
        closeDelay={500}
        onOpened={() => console.log("Opened")}
        onClosed={() => console.log("Closed")}
      >
        <div>Display content.</div>
      </Display>
    </>
  );
}

export default Example;
