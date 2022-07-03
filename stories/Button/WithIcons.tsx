import React from "react";
import { Button, ButtonProps } from "@lilib/ui";
import { FiThumbsUp, FiArrowRight, FiGlobe } from "react-icons/fi";

function WithIcons(props: ButtonProps) {
  return (
    <>
      <Button {...props} startIcon={<FiThumbsUp />}>
        Like
      </Button>{" "}
      <Button {...props} endIcon={<FiArrowRight />}>
        Next
      </Button>{" "}
      <Button {...props} startIcon={<FiGlobe />} endIcon={<FiArrowRight />}>
        Link
      </Button>
    </>
  );
}

export default WithIcons;
