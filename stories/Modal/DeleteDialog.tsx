import React from "react";
import { Button, Modal } from "@lilib/ui";

function Example() {
  return (
    <Modal
      width="medium"
      title="Delete Confirm"
      content="Once deleted, the data cannot be recovered."
      confirmLabel="Delete"
      confirmProps={{ intent: "negative" }}
      closable
      onConfirm={() => alert("Deleted!")}
    >
      <Button intent="negative">Delete</Button>
    </Modal>
  );
}

export default Example;
