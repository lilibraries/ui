import React from "react";
import { Button, Notice } from "@lilib/ui";

function Example() {
  const openNotice = Notice.useNotice();

  return (
    <Button
      onClick={() => {
        openNotice({
          title: "Title",
          detail: "Detail",
          intent: "major",
          closable: true,
        });
      }}
    >
      Open
    </Button>
  );
}

export default Example;
