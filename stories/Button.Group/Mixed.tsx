import React from "react";
import { Button, ButtonGroupProps } from "@lilib/ui";
import { FiChevronDown } from "react-icons/fi";

function Mixed(props: ButtonGroupProps) {
  return (
    <Button.Group {...props}>
      <Button>Dropdown</Button>
      <Button iconOnly>
        <FiChevronDown />
      </Button>
    </Button.Group>
  );
}

export default Mixed;
