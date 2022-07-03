import React from "react";
import { Button, ButtonProps } from "@lilib/ui";
import { FiThumbsUp, FiArrowRight, FiGlobe } from "react-icons/fi";

function Round(props: ButtonProps) {
  return (
    <>
      <Button {...props} round>
        Button
      </Button>{" "}
      <Button {...props} round startIcon={<FiThumbsUp />}>
        Like
      </Button>{" "}
      <Button {...props} round endIcon={<FiArrowRight />}>
        Next
      </Button>{" "}
      <Button
        {...props}
        round
        startIcon={<FiGlobe />}
        endIcon={<FiArrowRight />}
      >
        Link
      </Button>
    </>
  );
}

export default Round;
