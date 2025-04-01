import React from "react";
import { useToggle } from "@lilib/hooks";
import { Button, Modal } from "@lilib/ui";

function Example() {
  const [open, { toggleOn, toggleOff }] = useToggle(false);

  return (
    <>
      <Button onClick={toggleOn}>Open</Button>
      <Modal open={open} width="medium" striped closable title="What is React?" onClose={toggleOff}>
        <p>
          React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building
          user interfaces or UI components. It is maintained by Facebook and a community of individual developers and
          companies.
        </p>
        <p>
          React can be used as a base in the development of single-page or mobile applications. However, React is only
          concerned with state management and rendering that state to the DOM, so creating React applications usually
          requires the use of additional libraries for routing, as well as certain client-side functionality.
        </p>
        <p>
          React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building
          user interfaces or UI components. It is maintained by Facebook and a community of individual developers and
          companies.
        </p>
        <p>
          React can be used as a base in the development of single-page or mobile applications. However, React is only
          concerned with state management and rendering that state to the DOM, so creating React applications usually
          requires the use of additional libraries for routing, as well as certain client-side functionality.
        </p>
        <p>
          React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building
          user interfaces or UI components. It is maintained by Facebook and a community of individual developers and
          companies.
        </p>
        <p>
          React can be used as a base in the development of single-page or mobile applications. However, React is only
          concerned with state management and rendering that state to the DOM, so creating React applications usually
          requires the use of additional libraries for routing, as well as certain client-side functionality.
        </p>
        <p>
          React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building
          user interfaces or UI components. It is maintained by Facebook and a community of individual developers and
          companies.
        </p>
        <p>
          React can be used as a base in the development of single-page or mobile applications. However, React is only
          concerned with state management and rendering that state to the DOM, so creating React applications usually
          requires the use of additional libraries for routing, as well as certain client-side functionality.
        </p>
        <p>
          React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building
          user interfaces or UI components. It is maintained by Facebook and a community of individual developers and
          companies.
        </p>
        <p>
          React can be used as a base in the development of single-page or mobile applications. However, React is only
          concerned with state management and rendering that state to the DOM, so creating React applications usually
          requires the use of additional libraries for routing, as well as certain client-side functionality.
        </p>
        <p>
          React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building
          user interfaces or UI components. It is maintained by Facebook and a community of individual developers and
          companies.
        </p>
        <p>
          React can be used as a base in the development of single-page or mobile applications. However, React is only
          concerned with state management and rendering that state to the DOM, so creating React applications usually
          requires the use of additional libraries for routing, as well as certain client-side functionality.
        </p>
      </Modal>
    </>
  );
}

export default Example;
