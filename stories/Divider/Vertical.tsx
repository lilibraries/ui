import React from "react";
import { Divider, Flexbox, Button } from "@lilib/ui";
import { AiOutlinePlus, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

function Example() {
  return (
    <>
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
      <Divider space="2x" />
      <Flexbox>
        React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building
        user interfaces or UI components. It is maintained by Facebook and a community of individual developers and
        companies.
        <Divider vertical space="2x" />
        React can be used as a base in the development of single-page or mobile applications. However, React is only
        concerned with state management and rendering that state to the DOM, so creating React applications usually
        requires the use of additional libraries for routing, as well as certain client-side functionality.
      </Flexbox>
    </>
  );
}

export default Example;
