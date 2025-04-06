import React from "react";
import { Button, Drawer } from "@lilib/ui";

function Example() {
  return (
    <Drawer size="small" blurred title="Title" content="Content">
      <Button>Open</Button>
    </Drawer>
  );
}

export default Example;
