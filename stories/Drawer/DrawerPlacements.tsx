import React from "react";
import { Button, Flexbox, Drawer } from "@lilib/ui";

function Example() {
  return (
    <Flexbox align="center" gap="2x" wrap>
      <Drawer size="small" placement="start" title="Title" content="Content">
        <Button>start</Button>
      </Drawer>
      <Drawer size="small" placement="end" title="Title" content="Content">
        <Button>end</Button>
      </Drawer>
      <Drawer size="small" placement="top" title="Title" content="Content">
        <Button>top</Button>
      </Drawer>
      <Drawer size="small" placement="bottom" title="Title" content="Content">
        <Button>bottom</Button>
      </Drawer>
    </Flexbox>
  );
}

export default Example;
