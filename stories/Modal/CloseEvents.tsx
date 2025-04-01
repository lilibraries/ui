import React from "react";
import { Button, Modal, Spinner } from "@lilib/ui";

function Example() {
  return (
    <Modal off={["escape", "page-hide", "window-blur", "backdrop-click"]} trigger={<Button>Open</Button>}>
      <Spinner spinning /> Loading...
    </Modal>
  );
}

export default Example;
