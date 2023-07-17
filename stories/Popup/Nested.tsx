import React from "react";
import { Button, Popup } from "@lilib/ui";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";

function Example() {
  return (
    <Popup
      placement="bottom-start"
      content={
        <Popup
          placement="right"
          content={
            <Button style={{ borderColor: "transparent" }}>Button</Button>
          }
        >
          <Button
            endIcon={<FiChevronRight />}
            style={{ borderColor: "transparent" }}
          >
            Dropright
          </Button>
        </Popup>
      }
    >
      <Button endIcon={<FiChevronDown />} style={{ borderStyle: "dashed" }}>
        Dropdown
      </Button>
    </Popup>
  );
}

export default Example;
