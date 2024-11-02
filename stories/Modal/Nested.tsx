import React from "react";
import { useToggle } from "@lilib/hooks";
import { Button, Modal, Popup, Spinner } from "@lilib/ui";

function NestedModal() {
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
      <Modal open={open} onClose={toggleOff} width="medium" showClose title="Nested Modal">
        <Popup content={<NestedModal />} placement="right" style={{ width: "max-content" }}>
          <Button>Popup</Button>
        </Popup>
        <br />
        <br />
        <NestedModal />
      </Modal>
    </>
  );
}

export default Example;
