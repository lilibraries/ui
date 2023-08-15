import React from "react";
import { useToggle } from "@lilib/hooks";
import { Backdrop, Button, Spinner } from "@lilib/ui";

function Example() {
  const [open, { toggleOn, toggleOff }] = useToggle(false);

  return (
    <>
      <Button onClick={toggleOn}>Open</Button>
      <Backdrop
        open={open}
        openDelay={500}
        closeDelay={500}
        onClose={toggleOff}
        onOpened={() => console.log("Opened")}
        onClosed={() => console.log("Closed")}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Spinner spinning style={{ fontSize: 30 }} />
        </div>
      </Backdrop>
    </>
  );
}

export default Example;
