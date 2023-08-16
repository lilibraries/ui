import React from "react";
import { List } from "@lilib/ui";

function Example() {
  return (
    <List splited bordered style={{ width: 300 }}>
      <List.Item>List item one.</List.Item>
      <List.Item>List item two.</List.Item>
      <List.Item>List item three.</List.Item>
    </List>
  );
}

export default Example;
