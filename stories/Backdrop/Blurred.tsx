import React from "react";
import { useToggle } from "@lilib/hooks";
import { Backdrop, Button } from "@lilib/ui";

function Example() {
  const [open, { toggleOn, toggleOff }] = useToggle(false);

  return (
    <>
      <Button onClick={toggleOn}>Open</Button>
      <Backdrop blurred open={open} onClose={toggleOff} />
    </>
  );
}

export default Example;
