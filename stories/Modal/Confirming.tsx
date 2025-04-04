import React from "react";
import { Button, Modal } from "@lilib/ui";

function Example() {
  const handleConfirm = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(undefined);
      }, 1000);
    });
  };

  return (
    <>
      <Modal
        width="small"
        closable
        title="Confirm"
        content="Do you want to delete the data?"
        cancelLabel="No"
        confirmLabel="Yes"
        onConfirm={handleConfirm}
      >
        <Button intent="major" variant="solid">
          Confirm
        </Button>
      </Modal>
    </>
  );
}

export default Example;
