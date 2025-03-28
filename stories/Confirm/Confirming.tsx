import React from "react";
import { Confirm, Text } from "@lilib/ui";

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
      <Text intent="negative" hoverable>
        Delete
      </Text>
    </Confirm>
  );
}

export default Example;
