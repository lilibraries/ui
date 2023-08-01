import React, { useState } from "react";
import { Backdrop, Button, Spinner, Theme } from "@lilib/ui";

function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <Backdrop
        open={open}
        openDelay={500}
        closeDelay={500}
        onClose={() => setOpen(false)}
        onOpened={() => console.log("Opened")}
        onClosed={() => console.log("Closed")}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Theme value="dark" scoped>
          <Spinner spinning style={{ fontSize: 30 }} />
        </Theme>
      </Backdrop>
    </>
  );
}

export default Example;
