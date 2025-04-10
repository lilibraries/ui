import React from "react";
import { Button, Drawer } from "@lilib/ui";

function Example() {
  return (
    <Drawer
      size="small"
      title="Title"
      content="Content"
      onOpened={() => console.log("Opened")}
      onClosed={() => console.log("Closed")}
    >
      <Button>Open</Button>
    </Drawer>
  );
}

export default Example;
