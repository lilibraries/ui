import React from "react";
import { Flexbox, Tag, Icon, Spinner, Avatar } from "@lilib/ui";
import { FiStar, FiUser } from "react-icons/fi";

function Example() {
  return (
    <Flexbox gap="2x" align="center" wrap>
      <Tag rounded clearable>
        Tag
      </Tag>
      <Tag rounded>
        <Icon icon={<FiStar />} /> Star
      </Tag>
      <Tag rounded>
        <Spinner spinning endSpaced />
        Spinner
      </Tag>
      <Tag
        rounded
        avatar={
          <Avatar>
            <FiUser />
          </Avatar>
        }
      >
        User
      </Tag>
      <Tag rounded avatar={<img alt="Avatar" src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/toon_1.png" />}>
        Image
      </Tag>
      <Tag rounded avatar={<Avatar image="https://cdn.jsdelivr.net/gh/alohe/avatars/png/toon_10.png" />}>
        Avatar
      </Tag>
    </Flexbox>
  );
}

export default Example;
