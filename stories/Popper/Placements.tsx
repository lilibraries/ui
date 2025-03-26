import React from "react";
import { Button, Flexbox } from "@lilib/ui";
import ArrowedPopper from "./ArrowedPopper";

function Example() {
  return (
    <Flexbox fluid align="center" justify="center">
      <Button.Group vertical>
        <ArrowedPopper placement="left-start">
          <Button>left-start</Button>
        </ArrowedPopper>
        <ArrowedPopper placement="left">
          <Button>left</Button>
        </ArrowedPopper>
        <ArrowedPopper placement="left-end">
          <Button>left-end</Button>
        </ArrowedPopper>
      </Button.Group>

      <Flexbox direction="column">
        <Button.Group fluid>
          <ArrowedPopper placement="top-start">
            <Button>top-start</Button>
          </ArrowedPopper>
          <ArrowedPopper placement="top">
            <Button>top</Button>
          </ArrowedPopper>
          <ArrowedPopper placement="top-end">
            <Button>top-end</Button>
          </ArrowedPopper>
        </Button.Group>

        <Button.Group vertical style={{ visibility: "hidden" }}>
          <Button>left-start</Button>
          <Button>left</Button>
          <Button>left-end</Button>
        </Button.Group>

        <Button.Group fluid>
          <ArrowedPopper placement="bottom-start">
            <Button>bottom-start</Button>
          </ArrowedPopper>
          <ArrowedPopper placement="bottom">
            <Button>bottom</Button>
          </ArrowedPopper>
          <ArrowedPopper placement="bottom-end">
            <Button>bottom-end</Button>
          </ArrowedPopper>
        </Button.Group>
      </Flexbox>

      <Button.Group vertical>
        <ArrowedPopper placement="right-start">
          <Button>right-start</Button>
        </ArrowedPopper>
        <ArrowedPopper placement="right">
          <Button>right</Button>
        </ArrowedPopper>
        <ArrowedPopper placement="right-end">
          <Button>right-end</Button>
        </ArrowedPopper>
      </Button.Group>
    </Flexbox>
  );
}

export default Example;
