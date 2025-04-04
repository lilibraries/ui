import React from "react";
import { Button, Modal, Spinner } from "@lilib/ui";

function Example() {
  return (
    <Modal
      off={["escape", "page-hide", "window-blur", "backdrop-click"]}
      content={
        <div>
          <Spinner spinning /> Loading...
        </div>
      }
    >
      <Button>Open</Button>
    </Modal>
  );
}

export default Example;
