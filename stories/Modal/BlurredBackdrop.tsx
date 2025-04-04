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
      blurred
    >
      <Button>Open</Button>
    </Modal>
  );
}

export default Example;
