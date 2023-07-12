import React from "react";
import { Button } from "@lilib/ui";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import BasicPopper from "./Basic";

function Example() {
  const layer2 = (
    <BasicPopper placement="right" content="This is a tooltip message.">
      <Button endIcon={<FiChevronRight />} style={{ borderStyle: "dashed" }}>
        Dropright
      </Button>
    </BasicPopper>
  );

  const layer1 = (
    <BasicPopper placement="right" content={layer2}>
      <Button endIcon={<FiChevronRight />} style={{ borderStyle: "dashed" }}>
        Dropright
      </Button>
    </BasicPopper>
  );

  return (
    <BasicPopper placement="bottom-start" content={layer1}>
      <Button endIcon={<FiChevronDown />} style={{ borderStyle: "dashed" }}>
        Dropdown
      </Button>
    </BasicPopper>
  );
}

export default Example;
