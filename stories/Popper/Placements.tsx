import React from "react";
import { Button, Flexbox } from "@lilib/ui";
import ArrowPopper from "./Arrow";

function Example() {
  return (
    <Flexbox fluid align="center" justify="center">
      <Button.Group vertical>
        <ArrowPopper placement="left-start">
          <Button>left-start</Button>
        </ArrowPopper>
        <ArrowPopper placement="left">
          <Button>left</Button>
        </ArrowPopper>
        <ArrowPopper placement="left-end">
          <Button>left-end</Button>
        </ArrowPopper>
      </Button.Group>

      <Flexbox direction="column">
        <Button.Group fluid>
          <ArrowPopper placement="top-start">
            <Button>top-start</Button>
          </ArrowPopper>
          <ArrowPopper placement="top">
            <Button>top</Button>
          </ArrowPopper>
          <ArrowPopper placement="top-end">
            <Button>top-end</Button>
          </ArrowPopper>
        </Button.Group>

        <Button.Group vertical style={{ visibility: "hidden" }}>
          <Button>left-start</Button>
          <Button>left</Button>
          <Button>left-end</Button>
        </Button.Group>

        <Button.Group fluid>
          <ArrowPopper placement="bottom-start">
            <Button>bottom-start</Button>
          </ArrowPopper>
          <ArrowPopper placement="bottom">
            <Button>bottom</Button>
          </ArrowPopper>
          <ArrowPopper placement="bottom-end">
            <Button>bottom-end</Button>
          </ArrowPopper>
        </Button.Group>
      </Flexbox>

      <Button.Group vertical>
        <ArrowPopper placement="right-start">
          <Button>right-start</Button>
        </ArrowPopper>
        <ArrowPopper placement="right">
          <Button>right</Button>
        </ArrowPopper>
        <ArrowPopper placement="right-end">
          <Button>right-end</Button>
        </ArrowPopper>
      </Button.Group>
    </Flexbox>
  );
}

export default Example;
