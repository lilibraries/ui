import React from "react";
import { useToggle } from "@lilib/hooks";
import { Button, Modal } from "@lilib/ui";

function Example() {
  const [open, { toggleOn, toggleOff }] = useToggle(false);

  const handleConfirm = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(undefined);
      }, 3000);
    });
  };

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
        onConfirm={handleConfirm}
        disableCloseWhenConfirming
        disableCancelWhenConfirming
      >
        Content.
      </Modal>
    </>
  );
}

export default Example;
