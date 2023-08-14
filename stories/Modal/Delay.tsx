import React from "react";
import { useToggle } from "@lilib/hooks";
import { Button, Modal, Spinner } from "@lilib/ui";

function Example() {
  const [open, { toggleOn, toggleOff }] = useToggle(false);

  return (
    <>
      <Button onClick={toggleOn}>Open</Button>
      <Modal
        open={open}
        openDelay={500}
        closeDelay={500}
        onClose={toggleOff}
        onOpened={() => console.log("Opened")}
        onClosed={() => console.log("Closed")}
      >
        <Spinner spinning /> Loading...
      </Modal>
    </>
  );
}

export default Example;
