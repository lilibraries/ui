import React from "react";
import { useToggle } from "@lilib/hooks";
import { Button, Modal, Spinner } from "@lilib/ui";

function Example() {
  const [open, { toggleOn, toggleOff }] = useToggle();

  return (
    <>
      <Button onClick={toggleOn}>Open</Button>
      <Modal
        content={
          <div>
            <Spinner spinning /> Loading...
          </div>
        }
        open={open}
        onClose={toggleOff}
      />
    </>
  );
}

export default Example;
