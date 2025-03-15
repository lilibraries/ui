import React from "react";
import { FiAlertTriangle } from "react-icons/fi";
import { Button, Confirm, Icon, Text } from "@lilib/ui";

function Example() {
  return (
    <Confirm
      icon={
        <Text<typeof Icon> as={Icon} intent="negative">
          <FiAlertTriangle />
        </Text>
      }
      title="Are you sure to delete?"
      detail="Once deleted, the data cannot be recovered."
      cancelLabel={null}
      confirmLabel="Delete"
      confirmProps={{ intent: "negative" }}
    >
      <Button intent="negative">Delete</Button>
    </Confirm>
  );
}

export default Example;
