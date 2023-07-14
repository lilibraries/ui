import React from "react";
import { Button, Popup } from "@lilib/ui";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";

function Example() {
  const layer2 = (
    <Popup
      placement="right"
      content={<Button style={{ border: 0 }}>Button</Button>}
    >
      <Button endIcon={<FiChevronRight />} style={{ border: 0 }}>
        Dropright
      </Button>
    </Popup>
  );

  const layer1 = (
    <Popup placement="right" content={layer2}>
      <Button endIcon={<FiChevronRight />} style={{ border: 0 }}>
        Dropright
      </Button>
    </Popup>
  );

  return (
    <Popup placement="bottom-start" content={layer1}>
      <Button endIcon={<FiChevronDown />} style={{ borderStyle: "dashed" }}>
        Dropdown
      </Button>
    </Popup>
  );
}

export default Example;
