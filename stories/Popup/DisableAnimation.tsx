import React from "react";
import { Button, Popup } from "@lilib/ui";

function Example() {
  return (
    <Popup content="This is a popup message." animated={false}>
      <Button style={{ borderStyle: "dashed" }}>Click</Button>
    </Popup>
  );
}

export default Example;
