import React from "react";
import { Flexbox, Text } from "@lilib/ui";

function Example() {
  return (
    <Flexbox gap="4x" wrap>
      <Text>Normal</Text>
      <Text muted>Muted</Text>
      <Text active>Active</Text>
      <Text disabled>Disabled</Text>
    </Flexbox>
  );
}

export default Example;
