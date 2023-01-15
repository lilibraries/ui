import React from "react";
import { Button, PopperProps } from "@lilib/ui";
import { FiChevronRight } from "react-icons/fi";
import BasicPopper from "./Basic";

function Nested(props: PopperProps) {
  const layer2 = (
    <div style={{ padding: 50 }}>
      <BasicPopper {...props} placement="right">
        <Button endIcon={<FiChevronRight />}>Dropright</Button>
      </BasicPopper>
    </div>
  );

  const layer1 = (
    <div style={{ padding: 50 }}>
      <BasicPopper {...props} placement="right" content={layer2}>
        <Button endIcon={<FiChevronRight />}>Dropright</Button>
      </BasicPopper>
    </div>
  );

  return (
    <BasicPopper {...props} placement="bottom-start" content={layer1}>
      <Button>Click</Button>
    </BasicPopper>
  );
}

export default Nested;
