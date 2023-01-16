import React from "react";
import { Avatar, AvatarProps } from "@lilib/ui";
import { FiStar } from "react-icons/fi";

function Clickable(props: AvatarProps) {
  return (
    <Avatar {...props} clickable>
      <FiStar />
    </Avatar>
  );
}

export default Clickable;
