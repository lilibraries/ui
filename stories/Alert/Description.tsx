import React from "react";
import { Alert } from "@lilib/ui";
import { FiInfo } from "react-icons/fi";

function Example() {
  return (
    <Alert icon={<FiInfo />}>
      <Alert.Title>
        What is{" "}
        <a rel="noopener noreferrer" href="https://react.dev/" target="_blank">
          React
        </a>
        ?
      </Alert.Title>
      <Alert.Description>
        <p>
          React (also known as React.js or ReactJS) is a free and open-source
          front-end{" "}
          <a
            rel="noopener noreferrer"
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
          >
            JavaScript
          </a>{" "}
          library for building user interfaces or UI components. It is
          maintained by Facebook and a community of individual developers and
          companies.
        </p>
        <p>
          React can be used as a base in the development of single-page or
          mobile applications. However, React is only concerned with state
          management and rendering that state to the DOM, so creating React
          applications usually requires the use of additional libraries for
          routing, as well as certain client-side functionality.
        </p>
      </Alert.Description>
    </Alert>
  );
}

export default Example;
