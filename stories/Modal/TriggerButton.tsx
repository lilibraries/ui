import React from "react";
import { Button, Modal, Spinner } from "@lilib/ui";

function Example() {
  return (
    <Modal
      trigger={
        <Button intent="major" variant="solid">
          Trigger
        </Button>
      }
    >
      <Spinner spinning /> Loading...
    </Modal>
  );
}

export default Example;
