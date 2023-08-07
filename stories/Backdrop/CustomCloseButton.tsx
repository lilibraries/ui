import React from "react";
import { useToggle } from "@lilib/hooks";
import { Alert, Backdrop, Button } from "@lilib/ui";

function Example() {
  const [open, { toggleOn, toggleOff }] = useToggle(false);

  return (
    <>
      <Button onClick={toggleOn}>Open</Button>
      <Backdrop
        open={open}
        closeOnBackdropClick={false}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Alert intent="alertive" open closable onClose={toggleOff}>
          Alert message.
        </Alert>
      </Backdrop>
    </>
  );
}

export default Example;
