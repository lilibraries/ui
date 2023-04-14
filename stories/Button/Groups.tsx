import React from "react";
import { Button } from "@lilib/ui";
import { FiStar, FiThumbsUp, FiHeart, FiChevronDown } from "react-icons/fi";

function Example() {
  return (
    <>
      <h6>Basic</h6>
      <Button.Group>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </Button.Group>

      <h6>Vertical</h6>
      <Button.Group vertical>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </Button.Group>

      <h6>Icon only</h6>
      <Button.Group iconOnly>
        <Button>
          <FiHeart />
        </Button>
        <Button startIcon={<FiStar />} />
        <Button endIcon={<FiThumbsUp />} />
      </Button.Group>

      <h6>Mixed</h6>
      <Button.Group>
        <Button>Dropdown</Button>
        <Button iconOnly>
          <FiChevronDown />
        </Button>
      </Button.Group>

      <h6>Round</h6>
      <Button.Group round>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </Button.Group>

      <h6>Fluid</h6>
      <Button.Group fluid>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </Button.Group>
    </>
  );
}

export default Example;
