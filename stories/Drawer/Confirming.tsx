import React from "react";
import { Button, Drawer } from "@lilib/ui";

function Example() {
  const handleConfirm = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(undefined);
      }, 1000);
    });
  };

  return (
    <>
      <Drawer
        size="small"
        closable
        title="Confirm"
        content="Do you want to delete the data?"
        cancelLabel="No"
        confirmLabel="Yes"
        onConfirm={handleConfirm}
      >
        <Button intent="major" variant="solid">
          Confirm
        </Button>
      </Drawer>
    </>
  );
}

export default Example;
