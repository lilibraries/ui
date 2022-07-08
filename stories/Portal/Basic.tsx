import React, { useRef, useState } from "react";
import { Portal, Switch } from "@lilib/ui";

function Basic() {
  const [enable, setEnable] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef}>
      <Switch
        checked={enable}
        onChange={(event) => setEnable(event.target.checked)}
      />
      {enable && (
        <Portal container={containerRef}>
          <div>This content is rendered by Portal.</div>
        </Portal>
      )}
    </div>
  );
}

export default Basic;
