import React from "react";
import { Avatar, AvatarProps } from "@lilib/ui";
import { FiStar } from "react-icons/fi";

function Icon(props: AvatarProps) {
  return (
    <Avatar {...props}>
      <FiStar />
    </Avatar>
  );
}

export default Icon;
