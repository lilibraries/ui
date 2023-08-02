import React from "react";
import { useToggle } from "@lilib/hooks";
import { Backdrop, Button, Theme, Spinner } from "@lilib/ui";

function Example() {
  const [open, { toggleOn, toggleOff }] = useToggle(false);

  return (
    <>
      <Button onClick={toggleOn}>Open</Button>
      <Backdrop
        open={open}
        animated={false}
        onClose={toggleOff}
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
