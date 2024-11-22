import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { Button } from "@lilib/ui";
import ArrowPopper from "./ArrowPopper";

function Example() {
  return (
    <ArrowPopper
      firstMount
      placement="right"
      content={
        <ArrowPopper
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
        </ArrowPopper>
      }
    >
      <Button variant="hollow" intent="major" borderless endIcon={<FiChevronRight />}>
        Dropright
      </Button>
    </ArrowPopper>
  );
}

export default Example;
