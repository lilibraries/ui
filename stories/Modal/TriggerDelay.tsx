import React from "react";
import { Button, Modal, Spinner } from "@lilib/ui";

function Example() {
  return (
    <Modal
      content={
        <div>
          <Spinner spinning /> Loading...
        </div>
      }
      openDelay={500}
      closeDelay={500}
    >
      <Button>Open</Button>
    </Modal>
  );
}

export default Example;
