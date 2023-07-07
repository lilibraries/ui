import React from "react";
import { Avatar, Flexbox } from "@lilib/ui";

function Example() {
  return (
    <Flexbox gap="4x" align="center">
      <Avatar
        size="small"
        image="https://images.unsplash.com/photo-1684837955373-dd25d9e1c3b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5OHxKcGc2S2lkbC1Ia3x8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
      />
      <Avatar
        size={null}
        image="https://images.unsplash.com/photo-1684760206826-6bb5527c1441?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5N3xKcGc2S2lkbC1Ia3x8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
      />
      <Avatar
        size="large"
        image="https://images.unsplash.com/photo-1684731063074-8083dbd32688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIwMnxKcGc2S2lkbC1Ia3x8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
      />
    </Flexbox>
  );
}

export default Example;
