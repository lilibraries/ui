import React from "react";
import { Icon, List, Text } from "@lilib/ui";
import {
  PiNumberOneBold,
  PiNumberTwoBold,
  PiNumberThreeBold,
} from "react-icons/pi";

function Example() {
  return (
    <List splited bordered style={{ width: 300 }}>
      <List.Item
        prefix={
          <Text as={Icon} color="red">
            <PiNumberOneBold />
          </Text>
        }
        label="List item one."
      />
      <List.Item
        prefix={
          <Text as={Icon} color="orange">
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
