import React from "react";
import { useToggle } from "@lilib/hooks";
import { Button, Modal, Spinner } from "@lilib/ui";

function Example() {
  const [open, { toggleOn, toggleOff }] = useToggle(false);

  return (
    <>
      <Button onClick={toggleOn}>Open</Button>
      <Modal hideBackdrop open={open} onClose={toggleOff}>
        <Spinner spinning /> Loading...
      </Modal>
    </>
  );
}

export default Example;
