import React from "react";
import { Button, ButtonProps, Flexbox } from "@lilib/ui";
import {
  FiStar,
  FiHeart,
  FiLogOut,
  FiThumbsUp,
  FiFileText,
  FiArrowRight,
} from "react-icons/fi";

function Icons(props: ButtonProps) {
  return (
    <Flexbox direction="column" gap="4x" align="flex-start">
      <Flexbox gap="2x" align="center">
        <Button {...props} iconOnly startIcon={<FiThumbsUp />} />
        <Button {...props} iconOnly>
          <FiStar />
        </Button>
        <Button {...props} iconOnly endIcon={<FiHeart />} />
      </Flexbox>
      <Flexbox gap="2x" align="center">
        <Button {...props} startIcon={<FiThumbsUp />}>
          Like
        </Button>
        <Button {...props} endIcon={<FiLogOut />}>
          Logout
        </Button>
        <Button
          {...props}
          startIcon={<FiFileText />}
          endIcon={<FiArrowRight />}
        >
          Next page
        </Button>
      </Flexbox>
    </Flexbox>
  );
}

export default Icons;
