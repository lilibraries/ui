import React from "react";
import { Button, ButtonGroupProps } from "@lilib/ui";
import { FiStar, FiThumbsUp, FiHeart, FiChevronDown } from "react-icons/fi";

function Groups(props: ButtonGroupProps) {
  return (
    <div>
      <h6>Basic</h6>
      <Button.Group {...props}>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </Button.Group>

      <h6>Vertical</h6>
      <Button.Group {...props} vertical>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </Button.Group>

      <h6>Icon only</h6>
      <Button.Group {...props} iconOnly>
        <Button>
          <FiHeart />
        </Button>
        <Button startIcon={<FiStar />} />
        <Button endIcon={<FiThumbsUp />} />
      </Button.Group>

      <h6>Mixed</h6>
      <Button.Group {...props}>
        <Button>Dropdown</Button>
        <Button iconOnly>
          <FiChevronDown />
        </Button>
      </Button.Group>

      <h6>Round</h6>
      <Button.Group {...props} round>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </Button.Group>

      <h6>Fluid</h6>
      <Button.Group {...props} fluid>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </Button.Group>
    </div>
  );
}

export default Groups;
