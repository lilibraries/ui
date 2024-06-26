import React from "react";
import { Button, Flexbox } from "@lilib/ui";
import { FiFileText, FiArrowRight } from "react-icons/fi";

function Example() {
  return (
    <Flexbox direction="column" gap="4x" fluid align="flex-start">
      <Button fluid>Button</Button>
      <Button fluid startIcon={<FiFileText />} endIcon={<FiArrowRight />}>
        Next page
      </Button>
    </Flexbox>
  );
}

export default Example;
