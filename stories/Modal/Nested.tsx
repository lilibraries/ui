import React from "react";
import { useToggle } from "@lilib/hooks";
import { Button, Modal, Spinner } from "@lilib/ui";

function Content() {
  const [open, { toggleOn, toggleOff }] = useToggle(false);

  return (
    <>
      <Button onClick={toggleOn}>Open nested modal</Button>
      <Modal open={open} onClose={toggleOff}>
        <Spinner spinning /> Loading...
      </Modal>
    </>
  );
}

function Example() {
  const [open, { toggleOn, toggleOff }] = useToggle(false);

  return (
    <>
      <Button onClick={toggleOn}>Open</Button>
      <Modal
        open={open}
        onClose={toggleOff}
        width="medium"
        showClose
        title="Nested Modal"
      >
        <Content />
      </Modal>
    </>
  );
}

export default Example;
