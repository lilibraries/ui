import React from "react";
import { Button, Flexbox } from "@lilib/ui";
import ArrowPopper from "./Arrow";

function Example() {
  return (
    <Flexbox gap="2x">
      <ArrowPopper closeOnEscape closeOnClickOutside={false}>
        <Button>Escape Key</Button>
      </ArrowPopper>
      <ArrowPopper closeOnPageHide closeOnClickOutside={false}>
        <Button>Page Hide</Button>
      </ArrowPopper>
      <ArrowPopper closeOnWindowBlur closeOnClickOutside={false}>
        <Button>Window Blur</Button>
      </ArrowPopper>
      <ArrowPopper closeOnClickOutside>
        <Button>Click Outside</Button>
      </ArrowPopper>
      <ArrowPopper
        closeOnEscape
        closeOnPageHide
        closeOnWindowBlur
        closeOnClickOutside
      >
        <Button>All</Button>
      </ArrowPopper>
    </Flexbox>
  );
}

export default Example;
