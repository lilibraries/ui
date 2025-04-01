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
        trigger={
          <Button intent="major" variant="solid">
            Confirm
          </Button>
        }
        closable
        width="small"
        title="Confirm"
        cancelLabel="No"
        confirmLabel="Yes"
        onConfirm={handleConfirm}
      >
        Do you want to delete the data?
      </Modal>
    </>
  );
}

export default Example;
