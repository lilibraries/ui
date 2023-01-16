import React from "react";
import { Avatar, AvatarProps, Flexbox } from "@lilib/ui";

function Colors(props: AvatarProps) {
  return (
    <Flexbox gap="4x" align="center" wrap>
      <Avatar {...props} color="red" clickable>
        Red
      </Avatar>
      <Avatar {...props} color="magenta" clickable>
        Magenta
      </Avatar>
      <Avatar {...props} color="purple" clickable>
        Purple
      </Avatar>
      <Avatar {...props} color="indigo" clickable>
        Indigo
      </Avatar>
      <Avatar {...props} color="navy" clickable>
        Navy
      </Avatar>
      <Avatar {...props} color="blue" clickable>
        Blue
      </Avatar>
      <Avatar {...props} color="cyan" clickable>
        Cyan
      </Avatar>
      <Avatar {...props} color="teal" clickable>
        Teal
      </Avatar>
      <Avatar {...props} color="green" clickable>
        Green
      </Avatar>
      <Avatar {...props} color="lime" clickable>
        Lime
      </Avatar>
      <Avatar {...props} color="yellow" clickable>
        Yellow
      </Avatar>
      <Avatar {...props} color="orange" clickable>
        Orange
      </Avatar>
      <Avatar {...props} color="brown" clickable>
        Brown
      </Avatar>
      <Avatar {...props} color="gray" clickable>
        Gray
      </Avatar>
    </Flexbox>
  );
}

export default Colors;
