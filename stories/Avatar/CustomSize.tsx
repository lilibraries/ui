import React from "react";
import { Avatar, AvatarProps } from "@lilib/ui";

function CustomSize(props: AvatarProps) {
  return (
    <Avatar
      {...props}
      style={{ width: 100, height: 100 }}
      image="https://images.freeimages.com/images/previews/7e8/man-avatar-1632965.jpg"
    />
  );
}

export default CustomSize;
