import React from "react";
import { Button, Popup, PopupProps } from "@lilib/ui";

function Basic(props: PopupProps) {
  return (
    <Popup
      {...props}
      content={<div style={{ padding: 16 }}>This is a popup content.</div>}
    >
      <Button>Click me!</Button>
    </Popup>
  );
}

export default Basic;
