import React from "react";
import { Avatar, AvatarProps, Flexbox } from "@lilib/ui";

function Text(props: AvatarProps) {
  return (
    <Flexbox gap="4x">
      <Avatar {...props}>X</Avatar>
      <Avatar {...props}>小明</Avatar>
      <Avatar {...props}>User Name</Avatar>
    </Flexbox>
  );
}

export default Text;
