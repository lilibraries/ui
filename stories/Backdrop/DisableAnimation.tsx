import React, { useState } from "react";
import { Backdrop, Button, Theme, Spinner } from "@lilib/ui";

function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <Backdrop
        open={open}
        animated={false}
        onClose={() => setOpen(false)}
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
