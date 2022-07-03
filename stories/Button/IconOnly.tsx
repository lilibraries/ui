import React from "react";
import { Button, ButtonProps } from "@lilib/ui";
import { FiStar, FiThumbsUp, FiHeart } from "react-icons/fi";

function IconOnly(props: ButtonProps) {
  return (
    <>
      <Button {...props} iconOnly>
        <FiHeart />
      </Button>{" "}
      <Button {...props} iconOnly startIcon={<FiStar />} />{" "}
      <Button {...props} iconOnly endIcon={<FiThumbsUp />} />
    </>
  );
}

export default IconOnly;
