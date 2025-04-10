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
      onOpened={() => console.log("Opened")}
      onClosed={() => console.log("Closed")}
    >
      <Button>Open</Button>
    </Modal>
  );
}

export default Example;
