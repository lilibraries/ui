import React from "react";
import { Button } from "@lilib/ui";
import { FiStar, FiThumbsUp, FiHeart } from "react-icons/fi";

function Example() {
  return (
    <Button.Group iconOnly>
      <Button>
        <FiHeart />
      </Button>
      <Button startIcon={<FiStar />} />
      <Button endIcon={<FiThumbsUp />} />
    </Button.Group>
  );
}

export default Example;
