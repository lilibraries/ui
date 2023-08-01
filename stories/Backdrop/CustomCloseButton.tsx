import React, { useState } from "react";
import { Alert, Backdrop, Button, Theme } from "@lilib/ui";

function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <Backdrop
        open={open}
        closeOnBackdropClick={false}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Theme value="dark" scoped>
          <Alert intent="alertive" open closable onClose={() => setOpen(false)}>
            Alert message.
          </Alert>
        </Theme>
      </Backdrop>
    </>
  );
}

export default Example;
