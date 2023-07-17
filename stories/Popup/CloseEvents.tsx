import React from "react";
import { Button, Flexbox, Popup } from "@lilib/ui";

const content = <div style={{ padding: 16 }}>This is a popup message.</div>;

function Example() {
  return (
    <Flexbox gap="2x">
      <Popup
        content={content}
        placement="top"
        closeOnEscape
        closeOnDocumentClick={false}
      >
        <Button style={{ borderStyle: "dashed" }}>Escape Key</Button>
      </Popup>
      <Popup content={content} closeOnWindowBlur closeOnDocumentClick={false}>
        <Button style={{ borderStyle: "dashed" }}>Window Blur</Button>
      </Popup>
      <Popup content={content} placement="top" closeOnDocumentClick>
        <Button style={{ borderStyle: "dashed" }}>Document Click</Button>
      </Popup>
      <Popup
        content={content}
        closeOnEscape
        closeOnWindowBlur
        closeOnDocumentClick
      >
        <Button style={{ borderStyle: "dashed" }}>All</Button>
      </Popup>
    </Flexbox>
  );
}

export default Example;