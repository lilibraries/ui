import React from "react";
import { Flexbox, Tag, Icon, Spinner, Avatar, Text } from "@lilib/ui";
import { FiStar, FiUser } from "react-icons/fi";

function Example() {
  return (
    <Flexbox gap="2x" wrap>
      <Tag round clearable>
        Tag
      </Tag>
      <Tag round>
        <Text as={Icon} color="yellow">
          <FiStar />
        </Text>{" "}
        Icon
      </Tag>
      <Tag round>
        <Spinner spinning endSpace />
        Spinner
      </Tag>
      <Tag
        round
        icon={
          <img
            alt="Avatar"
            src="https://images.unsplash.com/photo-1688014681090-6ede1e757262?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8SnBnNktpZGwtSGt8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          />
        }
      >
        Image
      </Tag>
      <Tag
        round
        icon={
          <Avatar image="https://images.unsplash.com/photo-1684837955373-dd25d9e1c3b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5OHxKcGc2S2lkbC1Ia3x8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60" />
        }
      >
        Avatar
      </Tag>
      <Tag
        round
        color="red"
        variant="hollow"
        icon={
          <Avatar variant="solid" color="red">
            <FiUser />
          </Avatar>
        }
      >
        Avatar
      </Tag>
    </Flexbox>
  );
}

export default Example;
