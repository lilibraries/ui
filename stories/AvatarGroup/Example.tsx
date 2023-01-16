import React from "react";
import { Avatar, AvatarGroupProps } from "@lilib/ui";

function Example(props: AvatarGroupProps) {
  return (
    <Avatar.Group round outlined {...props}>
      <Avatar image="https://images.freeimages.com/images/previews/d66/woman-avatar-1632963.jpg" />
      <Avatar image="https://images.freeimages.com/images/previews/d1f/lady-avatar-1632967.jpg" />
      <Avatar image="https://images.freeimages.com/images/previews/7e8/man-avatar-1632965.jpg" />
      <Avatar image="https://images.freeimages.com/images/previews/962/avatar-man-with-mustages-1632966.jpg" />
      <Avatar image="https://images.freeimages.com/images/previews/971/basic-shape-avatar-1632968.jpg" />
      <Avatar image="https://images.freeimages.com/images/previews/cd5/lady-avatar-1632969.jpg" />
      <Avatar image="https://images.freeimages.com/images/previews/fdd/man-avatar-1632964.jpg" />
      <Avatar image="https://images.freeimages.com/images/previews/023/geek-avatar-1632962.jpg" />
      <Avatar color="blue" clickable>
        +9k
      </Avatar>
    </Avatar.Group>
  );
}

export default Example;
