import React from "react";
import { Button, Flexbox } from "@lilib/ui";
import { FiLogOut, FiThumbsUp, FiFileText, FiArrowRight } from "react-icons/fi";

function Example() {
  return (
    <Flexbox gap="2x" align="center">
      <Button rounded>Button</Button>
      <Button rounded startIcon={<FiThumbsUp />}>
        Like
      </Button>
      <Button rounded endIcon={<FiLogOut />}>
        Logout
      </Button>
      <Button rounded startIcon={<FiFileText />} endIcon={<FiArrowRight />}>
        Next Page
      </Button>
    </Flexbox>
  );
}

export default Example;