import React from "react";
import { Avatar, AvatarProps } from "@lilib/ui";

function Round(props: AvatarProps) {
  return (
    <Avatar
      {...props}
      round
      image="https://images.freeimages.com/images/previews/962/avatar-man-with-mustages-1632966.jpg"
    />
  );
}

export default Round;
