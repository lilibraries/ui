import React from "react";
import { Alert, Description } from "@lilib/ui";
import { FiInfo } from "react-icons/fi";

function Example() {
  return (
    <Alert closable>
      <Description icon={<FiInfo />}>
        <Description.Title>What is React ?</Description.Title>
        <Description.Detail>
          <p>
            React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for
            building user interfaces or UI components. It is maintained by Facebook and a community of individual
            developers and companies.
          </p>
          <p>
            React can be used as a base in the development of single-page or mobile applications. However, React is only
            concerned with state management and rendering that state to the DOM, so creating React applications usually
            requires the use of additional libraries for routing, as well as certain client-side functionality.
          </p>
        </Description.Detail>
      </Description>
    </Alert>
  );
}

export default Example;
