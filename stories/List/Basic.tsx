import React from "react";
import { List } from "@lilib/ui";

function Example() {
  return (
    <List splited bordered style={{ width: 300 }}>
      <List.Item label="List item one." />
      <List.Item label="List item two." />
      <List.Item label="List item three." />
    </List>
  );
}

export default Example;
