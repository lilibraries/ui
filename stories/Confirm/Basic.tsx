import React from "react";
import { Confirm, Text } from "@lilib/ui";

function Example() {
  return (
    <Confirm
      title="Are you sure to delete?"
      detail="Once deleted, the data cannot be recovered."
      onConfirm={() => alert("Confirm")}
      onCancel={() => alert("Cancel")}
    >
      <Text intent="negative" hoverable>
        Delete
      </Text>
    </Confirm>
  );
}

export default Example;
