import React from "react";
import { Button, ButtonCommonProps, Flexbox } from "@lilib/ui";
import { FiLogOut, FiThumbsUp, FiFileText, FiArrowRight } from "react-icons/fi";

function Round(props: ButtonCommonProps) {
  return (
    <Flexbox gap="2x" align="center">
      <Button {...props} round>
        Button
      </Button>
      <Button {...props} round startIcon={<FiThumbsUp />}>
        Like
      </Button>
      <Button {...props} round endIcon={<FiLogOut />}>
        Logout
      </Button>
      <Button
        {...props}
        round
        startIcon={<FiFileText />}
        endIcon={<FiArrowRight />}
      >
        Next page
      </Button>
    </Flexbox>
  );
}

export default Round;
