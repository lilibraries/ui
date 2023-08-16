import React from "react";
import { Button, Divider, Flexbox } from "@lilib/ui";
import { AiOutlinePlus, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

function Example() {
  return (
    <Flexbox direction="column" gap="4x" align="flex-start">
      <Flexbox direction="column" gap="1x" align="center">
        <Button iconOnly variant="hollow" borderless>
          <AiOutlinePlus />
        </Button>
        <Divider inline />
        <Button iconOnly variant="hollow" borderless>
          <AiOutlineEdit />
        </Button>
        <Divider inline />
        <Button iconOnly variant="hollow" borderless>
          <AiOutlineDelete />
        </Button>
      </Flexbox>
      <Flexbox gap="1x" align="center">
        <Button iconOnly variant="hollow" borderless>
          <AiOutlinePlus />
        </Button>
        <Divider vertical inline />
        <Button iconOnly variant="hollow" borderless>
          <AiOutlineEdit />
        </Button>
        <Divider vertical inline />
        <Button iconOnly variant="hollow" borderless>
          <AiOutlineDelete />
        </Button>
      </Flexbox>
    </Flexbox>
  );
}

export default Example;
