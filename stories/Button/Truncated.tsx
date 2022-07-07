import React, { useState } from "react";
import { Button, ButtonProps, Switch } from "@lilib/ui";

function Truncated(props: ButtonProps) {
  const [truncated, setTruncated] = useState(true);

  return (
    <>
      <div style={{ marginBottom: 8 }}>
        <Switch
          checked={truncated}
          onChange={(event) => setTruncated(event.target.checked)}
        />
      </div>
      <div style={{ maxWidth: 300 }}>
        <Button {...props} truncated={truncated}>
          This is a very long button which may be truncated
        </Button>
      </div>
    </>
  );
}

export default Truncated;
