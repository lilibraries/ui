import React, { useState } from "react";
import { Button, Switch, Flexbox } from "@lilib/ui";

function Example() {
  const [truncated, setTruncated] = useState(true);

  return (
    <Flexbox direction="column" gap="4x" align="flex-start">
      <Switch checked={truncated} onChange={(event) => setTruncated(event.target.checked)} />
      <Button truncated={truncated} style={{ width: 230 }}>
        This is a very long button which may be truncated.
      </Button>
    </Flexbox>
  );
}

export default Example;
