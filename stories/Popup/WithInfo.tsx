import React from "react";
import { Button, Popup, Info } from "@lilib/ui";
import { FiInfo } from "react-icons/fi";

function Example() {
  return (
    <Popup
      placement="top-start"
      content={
        <Info indicator={<FiInfo />} style={{ maxWidth: 600 }}>
          <Info.Title>What is React ?</Info.Title>
          <Info.Detail>
            <p>
              React (also known as React.js or ReactJS) is a free and
              open-source front-end JavaScript library for building user
              interfaces or UI components. It is maintained by Facebook and a
              community of individual developers and companies.
            </p>
            <p>
              React can be used as a base in the development of single-page or
              mobile applications. However, React is only concerned with state
              management and rendering that state to the DOM, so creating React
              applications usually requires the use of additional libraries for
              routing, as well as certain client-side functionality.
            </p>
          </Info.Detail>
        </Info>
      }
    >
      <Button style={{ borderStyle: "dashed" }}>Click</Button>
    </Popup>
  );
}

export default Example;
