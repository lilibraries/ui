import React from "react";
import { AiFillAlert } from "react-icons/ai";
import { Confirm, Icon, Text } from "@lilib/ui";

function Example() {
  return (
    <Confirm
      icon={
        <Text<typeof Icon> as={Icon} intent="negative">
          <AiFillAlert />
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
