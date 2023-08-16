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
      >
        List item one.
      </List.Item>
      <List.Item
        prefix={
          <Text as={Icon} color="orange">
            <PiNumberTwoBold />
          </Text>
        }
      >
        List item two.
      </List.Item>
      <List.Item prefix={<PiNumberThreeBold />}>List item three.</List.Item>
    </List>
  );
}

export default Example;
