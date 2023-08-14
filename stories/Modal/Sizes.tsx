import React from "react";
import { useToggle } from "@lilib/hooks";
import { Button, Flexbox, Modal } from "@lilib/ui";

function Example() {
  const [
    smallModalOpen,
    { toggleOn: openSmallModal, toggleOff: closeSmallModal },
  ] = useToggle(false);
  const [
    mediumModalOpen,
    { toggleOn: openMediumModal, toggleOff: closeMediumModal },
  ] = useToggle(false);
  const [
    largeModalOpen,
    { toggleOn: openLargeModal, toggleOff: closeLargeModal },
  ] = useToggle(false);
  const [
    customWidthModalOpen,
    { toggleOn: openCustomWidthModal, toggleOff: closeCustomWidthModal },
  ] = useToggle(false);

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
        onClose={closeSmallModal}
        width="small"
        showClose
        title="Title"
        confirmLabel="Confirm"
        cancelLabel="Cancel"
      >
        Content.
      </Modal>
      <Modal
        open={mediumModalOpen}
        onClose={closeMediumModal}
        width="medium"
        showClose
        title="Title"
        confirmLabel="Confirm"
        cancelLabel="Cancel"
      >
        Content.
      </Modal>
      <Modal
        open={largeModalOpen}
        onClose={closeLargeModal}
        width="large"
        showClose
        title="Title"
        confirmLabel="Confirm"
        cancelLabel="Cancel"
      >
        Content.
      </Modal>
      <Modal
        open={customWidthModalOpen}
        onClose={closeCustomWidthModal}
        width="1200px"
        showClose
        title="Title"
        confirmLabel="Confirm"
        cancelLabel="Cancel"
      >
        Content.
      </Modal>
    </>
  );
}

export default Example;
