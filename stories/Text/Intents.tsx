import React from "react";
import { Flexbox, Text } from "@lilib/ui";

function Example() {
  return (
    <Flexbox gap="4x" wrap>
      <Text intent="major">Major</Text>
      <Text intent="minor">Minor</Text>
      <Text intent="positive">Positive</Text>
      <Text intent="alertive">Alertive</Text>
      <Text intent="negative">Negative</Text>
    </Flexbox>
  );
}

export default Example;
