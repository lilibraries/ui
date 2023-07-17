import React, { useRef } from "react";
import { Popper } from "@lilib/ui";
import BasicPopper from "./Basic";

function Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef}>
      <Popper.Config container={containerRef}>
        <BasicPopper strategy="fixed" />
      </Popper.Config>
    </div>
  );
}

export default Example;
