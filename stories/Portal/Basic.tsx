import React, { useRef, useState } from "react";
import { Portal, Switch } from "@lilib/ui";

function Example() {
  const [enable, setEnable] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef}>
      <Switch checked={enable} onChange={(event) => setEnable(event.target.checked)} />
      {enable && (
        <Portal container={containerRef}>
          <div>This content is rendered by Portal.</div>
        </Portal>
      )}
    </div>
  );
}

export default Example;
