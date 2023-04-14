import React from "react";
import { Button, Flexbox } from "@lilib/ui";
import { FiLogOut, FiThumbsUp, FiFileText, FiArrowRight } from "react-icons/fi";

function Example() {
  return (
    <Flexbox gap="2x" align="center">
      <Button round>Button</Button>
      <Button round startIcon={<FiThumbsUp />}>
        Like
      </Button>
      <Button round endIcon={<FiLogOut />}>
        Logout
      </Button>
      <Button round startIcon={<FiFileText />} endIcon={<FiArrowRight />}>
        Next page
      </Button>
    </Flexbox>
  );
}

export default Example;
