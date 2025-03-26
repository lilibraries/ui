import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { Button } from "@lilib/ui";
import ArrowedPopper from "./ArrowedPopper";

function Example() {
  return (
    <ArrowedPopper
      placement="right"
      content={
        <ArrowedPopper placement="right" offset={{ main: 30 }} content={<Button>Button</Button>}>
          <Button endIcon={<FiChevronRight />}>Dropright</Button>
        </ArrowedPopper>
      }
    >
      <Button endIcon={<FiChevronRight />}>Dropright</Button>
    </ArrowedPopper>
  );
}

export default Example;
