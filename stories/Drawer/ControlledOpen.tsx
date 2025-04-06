import React from "react";
import { useToggle } from "@lilib/hooks";
import { Button, Drawer } from "@lilib/ui";

function Example() {
  const [open, { toggleOn, toggleOff }] = useToggle();

  return (
    <>
      <Button onClick={toggleOn}>Open</Button>
      <Drawer size="small" title="Title" content="Content" open={open} onClose={toggleOff} />
    </>
  );
}

export default Example;
