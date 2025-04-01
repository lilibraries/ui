import React from "react";
import { useToggle } from "@lilib/hooks";
import { Button, Modal } from "@lilib/ui";

function Example() {
  const [open, { toggleOn, toggleOff }] = useToggle(false);

  return (
    <>
      <Button intent="negative" onClick={toggleOn}>
        Delete
      </Button>
      <Modal
        width="medium"
        title="Delete Confirm"
        confirmLabel="Delete"
        confirmProps={{ intent: "negative" }}
        closable
        open={open}
        onClose={toggleOff}
        onConfirm={() => alert("Deleted!")}
      >
        Once deleted, the data cannot be recovered.
      </Modal>
    </>
  );
}

export default Example;
