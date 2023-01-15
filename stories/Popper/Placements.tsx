import React from "react";
import { Button, Flexbox, PopperProps } from "@lilib/ui";
import ArrowPopper from "./Arrow";

const content = (
  <div>
    <strong>Tooltip</strong>
    <div>This is a tooltip message.</div>
  </div>
);

function Placements(props: PopperProps) {
  return (
    <Flexbox fluid align="center" justify="center">
      <Button.Group vertical>
        <ArrowPopper {...props} placement="left-start" content={content}>
          <Button>left-start</Button>
        </ArrowPopper>
        <ArrowPopper {...props} placement="left" content={content}>
          <Button>left</Button>
        </ArrowPopper>
        <ArrowPopper {...props} placement="left-end" content={content}>
          <Button>left-end</Button>
        </ArrowPopper>
      </Button.Group>

      <Flexbox direction="column">
        <Button.Group fluid>
          <ArrowPopper {...props} placement="top-start" content={content}>
            <Button>top-start</Button>
          </ArrowPopper>
          <ArrowPopper {...props} placement="top" content={content}>
            <Button>top</Button>
          </ArrowPopper>
          <ArrowPopper {...props} placement="top-end" content={content}>
            <Button>top-end</Button>
          </ArrowPopper>
        </Button.Group>

        <Button.Group vertical style={{ visibility: "hidden" }}>
          <Button>left-start</Button>
          <Button>left</Button>
          <Button>left-end</Button>
        </Button.Group>

        <Button.Group fluid>
          <ArrowPopper {...props} placement="bottom-start" content={content}>
            <Button>bottom-start</Button>
          </ArrowPopper>
          <ArrowPopper {...props} placement="bottom" content={content}>
            <Button>bottom</Button>
          </ArrowPopper>
          <ArrowPopper {...props} placement="bottom-end" content={content}>
            <Button>bottom-end</Button>
          </ArrowPopper>
        </Button.Group>
      </Flexbox>

      <Button.Group vertical>
        <ArrowPopper {...props} placement="right-start" content={content}>
          <Button>right-start</Button>
        </ArrowPopper>
        <ArrowPopper {...props} placement="right" content={content}>
          <Button>right</Button>
        </ArrowPopper>
        <ArrowPopper {...props} placement="right-end" content={content}>
          <Button>right-end</Button>
        </ArrowPopper>
      </Button.Group>
    </Flexbox>
  );
}

export default Placements;
