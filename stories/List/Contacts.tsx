import React from "react";
import { List, Avatar } from "@lilib/ui";

function Example() {
  return (
    <List style={{ width: 300 }} splited indented bordered hoverable>
      <List.Item
        icon={
          <Avatar
            size="small"
            image="https://images.unsplash.com/photo-1684837955373-dd25d9e1c3b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5OHxKcGc2S2lkbC1Ia3x8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
          />
        }
        title="Lee"
      />
      <List.Item
        icon={
          <Avatar
            size="small"
            image="https://images.unsplash.com/photo-1626548307930-deac221f87d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMwMHxKcGc2S2lkbC1Ia3x8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
          />
        }
        title="Vincent"
      />
      <List.Item
        icon={
          <Avatar
            size="small"
            image="https://images.unsplash.com/photo-1671600936716-67fa7df9e68d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          />
        }
        title="李雷"
      />
      <List.Item
        icon={
          <Avatar
            size="small"
            image="https://images.unsplash.com/photo-1688014681090-6ede1e757262?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8SnBnNktpZGwtSGt8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          />
        }
        title="韩梅梅"
      />
    </List>
  );
}

export default Example;
