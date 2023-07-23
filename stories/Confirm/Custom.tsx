import React from "react";
import { Text, Confirm, Icon } from "@lilib/ui";
import { FiAlertTriangle } from "react-icons/fi";

function Example() {
  return (
    <Confirm
      icon={
        <Text as={Icon} intent="negative">
          <FiAlertTriangle />
        </Text>
      }
      title="Are you sure to delete?"
      detail="Once deleted, the data cannot be recovered."
      cancelLabel={null}
      confirmLabel="Delete"
      confirmProps={{ intent: "negative" }}
    >
      <Text intent="negative" hoverable>
        Delete
      </Text>
    </Confirm>
  );
}

export default Example;
