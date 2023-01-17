import React from "react";
import { Button, Flexbox, Popup, PopupProps } from "@lilib/ui";

const content = <div style={{ padding: 16 }}>This is a popup content.</div>;

function Placements(props: PopupProps) {
  return (
    <Flexbox fluid align="center" justify="center">
      <Button.Group vertical>
        <Popup {...props} placement="left-start" content={content}>
          <Button>left-start</Button>
        </Popup>
        <Popup {...props} placement="left" content={content}>
          <Button>left</Button>
        </Popup>
        <Popup {...props} placement="left-end" content={content}>
          <Button>left-end</Button>
        </Popup>
      </Button.Group>

      <Flexbox direction="column">
        <Button.Group fluid>
          <Popup {...props} placement="top-start" content={content}>
            <Button>top-start</Button>
          </Popup>
          <Popup {...props} placement="top" content={content}>
            <Button>top</Button>
          </Popup>
          <Popup {...props} placement="top-end" content={content}>
            <Button>top-end</Button>
          </Popup>
        </Button.Group>

        <Button.Group vertical style={{ visibility: "hidden" }}>
          <Button>left-start</Button>
          <Button>left</Button>
          <Button>left-end</Button>
        </Button.Group>

        <Button.Group fluid>
          <Popup {...props} placement="bottom-start" content={content}>
            <Button>bottom-start</Button>
          </Popup>
          <Popup {...props} placement="bottom" content={content}>
            <Button>bottom</Button>
          </Popup>
          <Popup {...props} placement="bottom-end" content={content}>
            <Button>bottom-end</Button>
          </Popup>
        </Button.Group>
      </Flexbox>

      <Button.Group vertical>
        <Popup {...props} placement="right-start" content={content}>
          <Button>right-start</Button>
        </Popup>
        <Popup {...props} placement="right" content={content}>
          <Button>right</Button>
        </Popup>
        <Popup {...props} placement="right-end" content={content}>
          <Button>right-end</Button>
        </Popup>
      </Button.Group>
    </Flexbox>
  );
}

export default Placements;
