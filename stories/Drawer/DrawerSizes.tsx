import React from "react";
import { Button, Flexbox, Drawer } from "@lilib/ui";

function Example() {
  return (
    <Flexbox align="center" gap="2x" wrap>
      <Drawer size="small" title="Title" content="Content">
        <Button>small</Button>
      </Drawer>
      <Drawer size="medium" title="Title" content="Content">
        <Button>medium</Button>
      </Drawer>
      <Drawer size="large" title="Title" content="Content">
        <Button>large</Button>
      </Drawer>
    </Flexbox>
  );
}

export default Example;
