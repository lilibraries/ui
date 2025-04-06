import React from "react";
import { Button, Drawer } from "@lilib/ui";

function Example() {
  return (
    <Drawer
      size="small"
      off={["escape", "page-hide", "window-blur", "backdrop-click"]}
      closable
      title="Title"
      content="Content"
    >
      <Button>Open</Button>
    </Drawer>
  );
}

export default Example;
