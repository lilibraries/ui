import React from "react";
import { Button, Flexbox, Modal, Popup, Spinner } from "@lilib/ui";

function Example() {
  return (
    <Modal
      width="medium"
      divided
      closable
      title="Nested Overlay"
      content={
        <Flexbox direction="column" align="flex-start" gap="4x">
          <Popup
            arrowed
            placement="right"
            content={
              <Modal
                content={
                  <div>
                    <Spinner spinning /> Loading...
                  </div>
                }
              >
                <Button>Open Nested Modal</Button>
              </Modal>
            }
            style={{ width: "max-content" }}
          >
            <Button>Nested Popup</Button>
          </Popup>
          <Modal
            content={
              <div>
                <Spinner spinning /> Loading...
              </div>
            }
          >
            <Button>Open Nested Modal</Button>
          </Modal>
        </Flexbox>
      }
    >
      <Button>Open Modal</Button>
    </Modal>
  );
}

export default Example;
