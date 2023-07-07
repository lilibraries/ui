import React, { useState } from "react";
import { Alert, Switch } from "@lilib/ui";

function Example() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Switch
        checked={open}
        onChange={(event) => setOpen(event.target.checked)}
        style={{ marginBottom: 8 }}
      />
      <Alert open={open} closable onClose={() => setOpen(false)}>
        This is an example alert.
      </Alert>
    </>
  );
}

export default Example;
