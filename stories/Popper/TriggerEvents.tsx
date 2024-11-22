import React from "react";
import { Button, Flexbox } from "@lilib/ui";
import ArrowPopper from "./ArrowPopper";

function Example() {
  return (
    <Flexbox gap="2x" wrap>
      <ArrowPopper on="click" placement="top">
        <Button>click</Button>
      </ArrowPopper>
      <ArrowPopper on="hover">
        <Button>hover</Button>
      </ArrowPopper>
      <ArrowPopper on="focus" placement="top">
        <Button>focus</Button>
      </ArrowPopper>
      <ArrowPopper on="context-menu">
        <Button>context-menu</Button>
      </ArrowPopper>
      <ArrowPopper on={["click", "hover", "focus", "context-menu"]} placement="top">
        <Button>all</Button>
      </ArrowPopper>
    </Flexbox>
  );
}

export default Example;
