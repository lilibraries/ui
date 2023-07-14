import React from "react";
import { Button, Flexbox } from "@lilib/ui";
import ArrowPopper from "./Arrow";

function Example() {
  return (
    <Flexbox gap="2x">
      <ArrowPopper closeOnEscape closeOnDocumentClick={false} placement="top">
        <Button style={{ borderStyle: "dashed" }}>Escape Key</Button>
      </ArrowPopper>
      <ArrowPopper closeOnWindowBlur closeOnDocumentClick={false}>
        <Button style={{ borderStyle: "dashed" }}>Window Blur</Button>
      </ArrowPopper>
      <ArrowPopper closeOnDocumentClick placement="top">
        <Button style={{ borderStyle: "dashed" }}>Document Click</Button>
      </ArrowPopper>
      <ArrowPopper closeOnEscape closeOnWindowBlur closeOnDocumentClick>
        <Button style={{ borderStyle: "dashed" }}>All</Button>
      </ArrowPopper>
    </Flexbox>
  );
}

export default Example;
