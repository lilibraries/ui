import React from "react";
import { Button } from "@lilib/ui";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import ArrowPopper from "./Arrow";

function Example() {
  const layer2 = (
    <ArrowPopper placement="right" content={<Button>Button</Button>}>
      <Button endIcon={<FiChevronRight />} style={{ borderStyle: "dashed" }}>
        Dropright
      </Button>
    </ArrowPopper>
  );

  const layer1 = (
    <ArrowPopper placement="right" content={layer2}>
      <Button endIcon={<FiChevronRight />} style={{ borderStyle: "dashed" }}>
        Dropright
      </Button>
    </ArrowPopper>
  );

  return (
    <ArrowPopper placement="bottom-start" content={layer1}>
      <Button endIcon={<FiChevronDown />} style={{ borderStyle: "dashed" }}>
        Dropdown
      </Button>
    </ArrowPopper>
  );
}

export default Example;
