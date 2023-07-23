import React from "react";
import { Text, Confirm } from "@lilib/ui";

function Example() {
  function handleConfirm() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(undefined);
      }, 3000);
    });
  }

  return (
    <Confirm
      title="Are you sure to delete?"
      detail="Once deleted, the data cannot be recovered."
      onConfirm={handleConfirm}
      disableCloseWhenConfirming
      disableCancelWhenConfirming
    >
      <Text intent="negative" hoverable>
        Delete
      </Text>
    </Confirm>
  );
}

export default Example;
