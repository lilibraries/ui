import React from "react";
import { useToggle } from "@lilib/hooks";
import { Button, Flexbox, Modal } from "@lilib/ui";

function Example() {
  const [smallModalOpen, { toggleOn: openSmallModal, toggleOff: closeSmallModal }] = useToggle(false);
  const [mediumModalOpen, { toggleOn: openMediumModal, toggleOff: closeMediumModal }] = useToggle(false);
  const [largeModalOpen, { toggleOn: openLargeModal, toggleOff: closeLargeModal }] = useToggle(false);
  const [customWidthModalOpen, { toggleOn: openCustomWidthModal, toggleOff: closeCustomWidthModal }] = useToggle(false);

  return (
    <>
      <Flexbox gap="2x" wrap>
        <Button onClick={openSmallModal}>Small</Button>
        <Button onClick={openMediumModal}>Medium</Button>
        <Button onClick={openLargeModal}>Large</Button>
        <Button onClick={openCustomWidthModal}>1200px</Button>
      </Flexbox>

      <Modal
        open={smallModalOpen}
        width="small"
        title="Title"
        cancelLabel="Cancel"
        confirmLabel="Confirm"
        closable
        onClose={closeSmallModal}
      >
        Content
      </Modal>
      <Modal
        open={mediumModalOpen}
        width="medium"
        title="Title"
        cancelLabel="Cancel"
        confirmLabel="Confirm"
        closable
        onClose={closeMediumModal}
      >
        Content
      </Modal>
      <Modal
        open={largeModalOpen}
        width="large"
        title="Title"
        cancelLabel="Cancel"
        confirmLabel="Confirm"
        closable
        onClose={closeLargeModal}
      >
        Content
      </Modal>
      <Modal
        open={customWidthModalOpen}
        width="1200px"
        title="Title"
        cancelLabel="Cancel"
        confirmLabel="Confirm"
        closable
        onClose={closeCustomWidthModal}
      >
        Content
      </Modal>
    </>
  );
}

export default Example;
