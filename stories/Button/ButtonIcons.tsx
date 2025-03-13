import React from "react";
import { Button, Flexbox } from "@lilib/ui";
import { FiStar, FiHeart, FiLogOut, FiThumbsUp, FiFileText, FiArrowRight } from "react-icons/fi";

function Example() {
  return (
    <Flexbox direction="column" gap="4x" align="flex-start">
      <Flexbox gap="2x" align="center">
        <Button iconOnly icon={<FiThumbsUp />} />
        <Button iconOnly>
          <FiStar />
        </Button>
        <Button iconOnly endIcon={<FiHeart />} />
      </Flexbox>
      <Flexbox gap="2x" align="center">
        <Button icon={<FiThumbsUp />}>Like</Button>
        <Button endIcon={<FiLogOut />}>Logout</Button>
        <Button icon={<FiFileText />} endIcon={<FiArrowRight />}>
          Next Page
        </Button>
      </Flexbox>
    </Flexbox>
  );
}

export default Example;
