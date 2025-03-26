import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { Button, Popup } from "@lilib/ui";

function Example() {
  return (
    <Popup
      arrowed
      placement="right"
      content={
        <Popup arrowed placement="right" offset={{ main: 34 }} content={<Button>Button</Button>}>
          <Button endIcon={<FiChevronRight />}>Dropright</Button>
        </Popup>
      }
    >
      <Button endIcon={<FiChevronRight />}>Dropright</Button>
    </Popup>
  );
}

export default Example;
