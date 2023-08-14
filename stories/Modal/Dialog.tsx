import React from "react";
import { useToggle } from "@lilib/hooks";
import { Button, Modal } from "@lilib/ui";

function Example() {
  const [open, { toggleOn, toggleOff }] = useToggle(false);

  return (
    <>
      <Button onClick={toggleOn}>Open</Button>
      <Modal
        open={open}
        onClose={toggleOff}
        width="medium"
        showClose
        title="Title"
        confirmLabel="Confirm"
        cancelLabel="Cancel"
        onConfirm={() => console.log("Confirmed")}
        onCancel={() => console.log("Cancelled")}
      >
        Content.
      </Modal>
    </>
  );
}

export default Example;
