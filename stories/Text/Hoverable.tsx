import React from "react";
import { Flexbox, Text } from "@lilib/ui";

function Example() {
  return (
    <Flexbox gap="4x" wrap>
      <Text hoverable>Normal</Text>
      <Text muted hoverable>
        Muted
      </Text>
      <Text active hoverable>
        Active
      </Text>
      <Text disabled hoverable>
        Disabled
      </Text>
    </Flexbox>
  );
}

export default Example;
