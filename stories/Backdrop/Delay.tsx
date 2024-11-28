import React from "react";
import { useToggle } from "@lilib/hooks";
import { Backdrop, Button } from "@lilib/ui";

function Example() {
  const [open, { toggleOn, toggleOff }] = useToggle(false);

  return (
    <>
      <Button onClick={toggleOn}>Open</Button>
      <Backdrop
        open={open}
        openDelay={500}
        closeDelay={500}
        onClose={toggleOff}
        onOpened={() => console.log("Opened")}
        onClosed={() => console.log("Closed")}
      />
    </>
  );
}

export default Example;
