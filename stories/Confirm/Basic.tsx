import React from "react";
import { Button, Confirm } from "@lilib/ui";

function Example() {
  return (
    <Confirm
      title="Are you sure to delete?"
      detail="Once deleted, the data cannot be recovered."
      onConfirm={() => alert("Confirm")}
      onCancel={() => alert("Cancel")}
    >
      <Button variant="hollow" intent="negative">
        Delete
      </Button>
    </Confirm>
  );
}

export default Example;
