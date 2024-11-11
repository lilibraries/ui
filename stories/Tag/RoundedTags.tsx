import React from "react";
import { Flexbox, Tag, Icon, Spinner, Avatar } from "@lilib/ui";
import { FiStar, FiUser } from "react-icons/fi";

function Example() {
  return (
    <Flexbox gap="2x" wrap>
      <Tag rounded clearable>
        Tag
      </Tag>
      <Tag rounded>
        <Icon icon={<FiStar />} /> Icon
      </Tag>
      <Tag rounded>
        <Spinner spinning endSpace />
        Spinner
      </Tag>
      <Tag
        rounded
        icon={
          <Avatar>
            <FiUser />
          </Avatar>
        }
      >
        User
      </Tag>
      <Tag rounded icon={<img alt="Avatar" src="	https://cdn.jsdelivr.net/gh/alohe/avatars/png/toon_9.png" />}>
        Image
      </Tag>
      <Tag rounded icon={<Avatar image="https://cdn.jsdelivr.net/gh/alohe/avatars/png/toon_10.png" />}>
        Avatar
      </Tag>
    </Flexbox>
  );
}

export default Example;
