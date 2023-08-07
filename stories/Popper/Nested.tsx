import React from "react";
import { Button } from "@lilib/ui";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import ArrowPopper from "./Arrow";

function Example() {
  return (
    <ArrowPopper
      placement="bottom-start"
      content={
        <ArrowPopper placement="right" content={<Button>Button</Button>}>
          <Button endIcon={<FiChevronRight />}>Dropright</Button>
        </ArrowPopper>
      }
    >
      <Button endIcon={<FiChevronDown />}>Dropdown</Button>
    </ArrowPopper>
  );
}

export default Example;
