import React from "react";
import { Button, Flexbox } from "@lilib/ui";
import ArrowPopper from "./Arrow";

function Example() {
  return (
    <Flexbox fluid align="center" justify="center">
      <Button.Group vertical>
        <ArrowPopper placement="left-start">
          <Button style={{ borderStyle: "dashed" }}>left-start</Button>
        </ArrowPopper>
        <ArrowPopper placement="left">
          <Button style={{ borderStyle: "dashed" }}>left</Button>
        </ArrowPopper>
        <ArrowPopper placement="left-end">
          <Button style={{ borderStyle: "dashed" }}>left-end</Button>
        </ArrowPopper>
      </Button.Group>

      <Flexbox direction="column">
        <Button.Group fluid>
          <ArrowPopper placement="top-start">
            <Button style={{ borderStyle: "dashed" }}>top-start</Button>
          </ArrowPopper>
          <ArrowPopper placement="top">
            <Button style={{ borderStyle: "dashed" }}>top</Button>
          </ArrowPopper>
          <ArrowPopper placement="top-end">
            <Button style={{ borderStyle: "dashed" }}>top-end</Button>
          </ArrowPopper>
        </Button.Group>

        <Button.Group vertical style={{ visibility: "hidden" }}>
          <Button style={{ borderStyle: "dashed" }}>left-start</Button>
          <Button style={{ borderStyle: "dashed" }}>left</Button>
          <Button style={{ borderStyle: "dashed" }}>left-end</Button>
        </Button.Group>

        <Button.Group fluid>
          <ArrowPopper placement="bottom-start">
            <Button style={{ borderStyle: "dashed" }}>bottom-start</Button>
          </ArrowPopper>
          <ArrowPopper placement="bottom">
            <Button style={{ borderStyle: "dashed" }}>bottom</Button>
          </ArrowPopper>
          <ArrowPopper placement="bottom-end">
            <Button style={{ borderStyle: "dashed" }}>bottom-end</Button>
          </ArrowPopper>
        </Button.Group>
      </Flexbox>

      <Button.Group vertical>
        <ArrowPopper placement="right-start">
          <Button style={{ borderStyle: "dashed" }}>right-start</Button>
        </ArrowPopper>
        <ArrowPopper placement="right">
          <Button style={{ borderStyle: "dashed" }}>right</Button>
        </ArrowPopper>
        <ArrowPopper placement="right-end">
          <Button style={{ borderStyle: "dashed" }}>right-end</Button>
        </ArrowPopper>
      </Button.Group>
    </Flexbox>
  );
}

export default Example;
