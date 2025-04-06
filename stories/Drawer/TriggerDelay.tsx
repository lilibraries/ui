import React from "react";
import { Button, Drawer } from "@lilib/ui";

function Example() {
  return (
    <Drawer size="small" title="Title" content="Content" openDelay={500} closeDelay={500}>
      <Button>Open</Button>
    </Drawer>
  );
}

export default Example;
