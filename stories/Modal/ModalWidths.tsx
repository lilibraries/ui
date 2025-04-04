import React from "react";
import { Button, Flexbox, Modal } from "@lilib/ui";

function Example() {
  return (
    <Flexbox align="center" gap="2x" wrap>
      <Modal width="small" closable title="Title" content="Content" cancelLabel="Cancel" confirmLabel="Confirm">
        <Button>small</Button>
      </Modal>
      <Modal width="medium" closable title="Title" content="Content" cancelLabel="Cancel" confirmLabel="Confirm">
        <Button>medium</Button>
      </Modal>
      <Modal width="large" closable title="Title" content="Content" cancelLabel="Cancel" confirmLabel="Confirm">
        <Button>large</Button>
      </Modal>
      <Modal width="1200px" closable title="Title" content="Content" cancelLabel="Cancel" confirmLabel="Confirm">
        <Button>1200px</Button>
      </Modal>
    </Flexbox>
  );
}

export default Example;
