import React from "react";
import { Button, ButtonGroupProps } from "@lilib/ui";
import { FiStar, FiThumbsUp, FiHeart } from "react-icons/fi";

function IconOnly(props: ButtonGroupProps) {
  return (
    <Button.Group {...props}>
      <Button iconOnly>
        <FiHeart />
      </Button>
      <Button iconOnly startIcon={<FiStar />} />
      <Button iconOnly endIcon={<FiThumbsUp />} />
    </Button.Group>
  );
}

export default IconOnly;
