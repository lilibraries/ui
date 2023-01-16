import React from "react";
import { Avatar, AvatarProps, Flexbox } from "@lilib/ui";

function Sizes(props: AvatarProps) {
  return (
    <Flexbox gap="4x" align="center">
      <Avatar
        {...props}
        size="small"
        image="https://images.freeimages.com/images/previews/d66/woman-avatar-1632963.jpg"
      />
      <Avatar
        {...props}
        size={null}
        image="https://images.freeimages.com/images/previews/d1f/lady-avatar-1632967.jpg"
      />
      <Avatar
        {...props}
        size="large"
        image="https://images.freeimages.com/images/previews/cd5/lady-avatar-1632969.jpg"
      />
    </Flexbox>
  );
}

export default Sizes;
