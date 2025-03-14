import React from "react";
import { Avatar, Flexbox, Tag } from "@lilib/ui";
import { FiUser } from "react-icons/fi";

function Example() {
  return (
    <Flexbox gap="2x" align="center">
      <Tag
        avatar={
          <Avatar>
            <FiUser />
          </Avatar>
        }
      >
        User
      </Tag>
      <Tag avatar={<img alt="Avatar" src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/toon_1.png" />}>Image</Tag>
      <Tag avatar={<Avatar image="https://cdn.jsdelivr.net/gh/alohe/avatars/png/toon_10.png" />}>Avatar</Tag>
    </Flexbox>
  );
}

export default Example;
