import React from "react";
import { Button, Flexbox, Modal, Popup, Spinner } from "@lilib/ui";

function Example() {
  return (
    <>
      <Modal trigger={<Button>Open Modal</Button>} divided closable width="medium" title="Nested Overlay">
        <Flexbox direction="column" align="flex-start" gap="4x">
          <Popup
            content={
              <Modal trigger={<Button>Open Nested Modal</Button>}>
                <Spinner spinning /> Loading...
              </Modal>
            }
            arrowed
            placement="right"
            style={{ width: "max-content" }}
          >
            <Button>Nested Popup</Button>
          </Popup>
          <Modal trigger={<Button>Open Nested Modal</Button>}>
            <Spinner spinning /> Loading...
          </Modal>
        </Flexbox>
      </Modal>
    </>
  );
}

export default Example;
