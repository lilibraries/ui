import React, { useState } from "react";
import { Backdrop, Button, Spinner } from "@lilib/ui";

function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <Backdrop
        open={open}
        transparent
        onClose={() => setOpen(false)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Spinner spinning style={{ fontSize: 30 }} />
      </Backdrop>
    </>
  );
}

export default Example;
