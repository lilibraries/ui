import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { Button, Popup } from "@lilib/ui";

function Example() {
  return (
    <Popup
      arrowed
      placement="right"
      content={
        <Popup
          arrowed
          placement="right"
          offset={[30, 0]}
          content={
            <Button variant="hollow" intent="major" borderless>
              Button
            </Button>
          }
        >
          <Button variant="hollow" intent="major" borderless endIcon={<FiChevronRight />}>
            Dropright
          </Button>
        </Popup>
      }
    >
      <Button variant="hollow" intent="major" borderless endIcon={<FiChevronRight />}>
        Dropright
      </Button>
    </Popup>
  );
}

export default Example;
