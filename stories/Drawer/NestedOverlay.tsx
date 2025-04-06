import React from "react";
import { Button, Flexbox, Drawer, Popup, Modal } from "@lilib/ui";

function Example() {
  return (
    <Drawer
      size="medium"
      divided
      closable
      title="Nested Overlay"
      content={
        <Flexbox direction="column" align="flex-start" gap="4x">
          <Popup
            arrowed
            placement="right"
            content={
              <Drawer size="small" title="Title" content="Content">
                <Button>Open Nested Drawer</Button>
              </Drawer>
            }
            style={{ width: "max-content" }}
          >
            <Button>Nested Popup</Button>
          </Popup>
          <Modal
            size="small"
            title="Nested Modal"
            content={
              <Drawer size="small" title="Title" content="Content">
                <Button>Open Nested Drawer</Button>
              </Drawer>
            }
          >
            <Button>Open Nested Modal</Button>
          </Modal>
          <Drawer size="small" title="Title" content="Content">
            <Button>Open Nested Drawer</Button>
          </Drawer>
        </Flexbox>
      }
    >
      <Button>Open Drawer</Button>
    </Drawer>
  );
}

export default Example;
