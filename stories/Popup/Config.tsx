import React, { useRef } from "react";
import { Popper, Popup, Button } from "@lilib/ui";

function Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef}>
      <Popper.Config container={containerRef}>
        <Popup
          content={<div style={{ padding: 16 }}>This is a popup message.</div>}
        >
          <Button style={{ borderStyle: "dashed" }}>Click</Button>
        </Popup>
      </Popper.Config>
    </div>
  );
}

export default Example;
