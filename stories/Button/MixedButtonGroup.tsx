import React from "react";
import { Button } from "@lilib/ui";
import { FiChevronDown } from "react-icons/fi";

function Example() {
  return (
    <Button.Group>
      <Button>Dropdown</Button>
      <Button iconOnly>
        <FiChevronDown />
      </Button>
    </Button.Group>
  );
}

export default Example;
