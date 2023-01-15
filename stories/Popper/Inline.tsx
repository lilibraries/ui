import React from "react";
import { PopperProps } from "@lilib/ui";
import BasicPopper from "./Basic";

function Inline(props: PopperProps) {
  return (
    <div>
      React (also known as React.js or ReactJS) is a free and open-source
      front-end JavaScript library for building user interfaces or UI
      components. It is maintained by Facebook and a community of individual
      developers and companies.{" "}
      <BasicPopper {...props} on="hover">
        <a href="https://reactjs.org/" rel="noreferrer noopener">
          React can be used as a base in the development of single-page or
          mobile applications.
        </a>
      </BasicPopper>{" "}
      However, React is only concerned with state management and rendering that
      state to the DOM, so creating React applications usually requires the use
      of additional libraries for routing, as well as certain client-side
      functionality.
    </div>
  );
}

export default Inline;
