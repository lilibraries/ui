import React from "react";
import { Button, Modal, Spinner } from "@lilib/ui";

function Example() {
  return (
    <Modal trigger={<Button>Open</Button>} openDelay={500} closeDelay={500}>
      <Spinner spinning /> Loading...
    </Modal>
  );
}

export default Example;
