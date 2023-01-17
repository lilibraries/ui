import React, { useState } from "react";
import { Alert, AlertProps, Switch } from "@lilib/ui";

function Controlled(props: AlertProps) {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Switch
        checked={open}
        onChange={(event) => setOpen(event.target.checked)}
        style={{ marginBottom: 8 }}
      />
      <Alert {...props} open={open} closable onClose={() => setOpen(false)}>
        This is an example alert.
      </Alert>
    </>
  );
}

export default Controlled;
