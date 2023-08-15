import React from "react";
import { useToggle } from "@lilib/hooks";
import { Button, Flexbox, Modal } from "@lilib/ui";

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
        title="Title"
        renderActions={(actions, close) => {
          return (
            <Flexbox gap="2x">
              <Button variant="hollow" color="gray" borderless onClick={close}>
                Skip
              </Button>
              <Button color="gray" borderless>
                Next
              </Button>
              <Button variant="solid" intent="major" borderless>
                Submit
              </Button>
            </Flexbox>
          );
        }}
      >
        Content.
      </Modal>
    </>
  );
}

export default Example;
