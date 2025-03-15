import React from "react";
import { Icon, List, Text } from "@lilib/ui";
import { PiNumberOneBold, PiNumberTwoBold, PiNumberThreeBold } from "react-icons/pi";

function Example() {
  return (
    <List<"ol"> as="ol" splited bordered style={{ width: 300 }}>
      <List.Item
        prefix={
          <Text<typeof Icon> as={Icon} color="red">
            <PiNumberOneBold />
          </Text>
        }
        label="List item one."
      />
      <List.Item
        prefix={
          <Text<typeof Icon> as={Icon} color="orange">
            <PiNumberTwoBold />
          </Text>
        }
        label="List item two."
      />
      <List.Item prefix={<PiNumberThreeBold />} label="List item three." />
    </List>
  );
}

export default Example;
