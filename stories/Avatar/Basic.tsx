import React from "react";
import { Avatar, AvatarProps } from "@lilib/ui";

function Basic(props: AvatarProps) {
  return (
    <Avatar
      {...props}
      image="https://images.freeimages.com/images/previews/962/avatar-man-with-mustages-1632966.jpg"
    />
  );
}

export default Basic;
