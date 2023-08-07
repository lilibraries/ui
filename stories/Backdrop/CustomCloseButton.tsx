import React from "react";
import { useToggle } from "@lilib/hooks";
import { Backdrop, Button } from "@lilib/ui";

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
        <Button onClick={toggleOff}>Close</Button>
      </Backdrop>
    </>
  );
}

export default Example;
