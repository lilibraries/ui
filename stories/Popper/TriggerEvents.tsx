import React from "react";
import { Button, Flexbox } from "@lilib/ui";
import ArrowedPopper from "./ArrowedPopper";

function Example() {
  return (
    <Flexbox gap="2x" wrap>
      <ArrowedPopper on="click" placement="top">
        <Button>click</Button>
      </ArrowedPopper>
      <ArrowedPopper on="hover">
        <Button>hover</Button>
      </ArrowedPopper>
      <ArrowedPopper on="focus" placement="top">
        <Button>focus</Button>
      </ArrowedPopper>
      <ArrowedPopper on="context-menu">
        <Button>context-menu</Button>
      </ArrowedPopper>
      <ArrowedPopper on={["click", "hover", "focus", "context-menu"]} placement="top">
        <Button>all</Button>
      </ArrowedPopper>
    </Flexbox>
  );
}

export default Example;
