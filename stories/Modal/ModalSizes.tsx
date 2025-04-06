import React from "react";
import { Button, Flexbox, Modal } from "@lilib/ui";

function Example() {
  return (
    <Flexbox align="center" gap="2x" wrap>
      <Modal size="small" closable title="Title" content="Content" cancelLabel="Cancel" confirmLabel="Confirm">
        <Button>small</Button>
      </Modal>
      <Modal size="medium" closable title="Title" content="Content" cancelLabel="Cancel" confirmLabel="Confirm">
        <Button>medium</Button>
      </Modal>
      <Modal size="large" closable title="Title" content="Content" cancelLabel="Cancel" confirmLabel="Confirm">
        <Button>large</Button>
      </Modal>
      <Modal size="1200px" closable title="Title" content="Content" cancelLabel="Cancel" confirmLabel="Confirm">
        <Button>1200px</Button>
      </Modal>
    </Flexbox>
  );
}

export default Example;
