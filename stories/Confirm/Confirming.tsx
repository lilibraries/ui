import React from "react";
import { Button, Confirm } from "@lilib/ui";

function Example() {
  function handleConfirm() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(undefined);
      }, 1000);
    });
  }

  return (
    <Confirm
      title="Are you sure to delete?"
      detail="Once deleted, the data cannot be recovered."
      onConfirm={handleConfirm}
    >
      <Button variant="solid" intent="negative">
        Delete
      </Button>
    </Confirm>
  );
}

export default Example;
