import React from "react";
import { Avatar, Flexbox } from "@lilib/ui";

function Example() {
  return (
    <Flexbox gap="4x" align="center">
      <Avatar size="small" image="https://cdn.jsdelivr.net/gh/alohe/avatars/png/toon_3.png" />
      <Avatar size={null} image="https://cdn.jsdelivr.net/gh/alohe/avatars/png/toon_4.png" />
      <Avatar size="large" image="https://cdn.jsdelivr.net/gh/alohe/avatars/png/toon_5.png" />
    </Flexbox>
  );
}

export default Example;
