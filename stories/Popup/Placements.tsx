import React from "react";
import { Button, Flexbox, Popup } from "@lilib/ui";

function Example() {
  return (
    <Flexbox fluid align="center" justify="center">
      <Button.Group vertical>
        <Popup placement="left-start" content="This is a popup content.">
          <Button>left-start</Button>
        </Popup>
        <Popup placement="left" content="This is a popup content.">
          <Button>left</Button>
        </Popup>
        <Popup placement="left-end" content="This is a popup content.">
          <Button>left-end</Button>
        </Popup>
      </Button.Group>

      <Flexbox direction="column">
        <Button.Group fluid>
          <Popup placement="top-start" content="This is a popup content.">
            <Button>top-start</Button>
          </Popup>
          <Popup placement="top" content="This is a popup content.">
            <Button>top</Button>
          </Popup>
          <Popup placement="top-end" content="This is a popup content.">
            <Button>top-end</Button>
          </Popup>
        </Button.Group>

        <Button.Group vertical style={{ visibility: "hidden" }}>
          <Button>left-start</Button>
          <Button>left</Button>
          <Button>left-end</Button>
        </Button.Group>

        <Button.Group fluid>
          <Popup placement="bottom-start" content="This is a popup content.">
            <Button>bottom-start</Button>
          </Popup>
          <Popup placement="bottom" content="This is a popup content.">
            <Button>bottom</Button>
          </Popup>
          <Popup placement="bottom-end" content="This is a popup content.">
            <Button>bottom-end</Button>
          </Popup>
        </Button.Group>
      </Flexbox>

      <Button.Group vertical>
        <Popup placement="right-start" content="This is a popup content.">
          <Button>right-start</Button>
        </Popup>
        <Popup placement="right" content="This is a popup content.">
          <Button>right</Button>
        </Popup>
        <Popup placement="right-end" content="This is a popup content.">
          <Button>right-end</Button>
        </Popup>
      </Button.Group>
    </Flexbox>
  );
}

export default Example;
