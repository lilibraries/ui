import React from "react";
import { Avatar, Flexbox, Icon, Spinner, Tag } from "@lilib/ui";
import { FiUser, FiStar } from "react-icons/fi";

function Example() {
  return (
    <Flexbox gap="2x" fluid>
      <Tag>
        <Icon icon={<FiStar />} /> Icon
      </Tag>
      <Tag>
        <Spinner spinning endSpace />
        Spinner
      </Tag>
      <Tag
        icon={
          <Avatar>
            <FiUser />
          </Avatar>
        }
      >
        User
      </Tag>
      <Tag icon={<img alt="Avatar" src="	https://cdn.jsdelivr.net/gh/alohe/avatars/png/toon_9.png" />}>Image</Tag>
      <Tag icon={<Avatar image="https://cdn.jsdelivr.net/gh/alohe/avatars/png/toon_10.png" />}>Avatar</Tag>
    </Flexbox>
  );
}

export default Example;
