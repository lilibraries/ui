import React, { useState } from "react";
import { Transition, Switch } from "@lilib/ui";

function Example() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Switch checked={visible} onChange={(event) => setVisible(event.target.checked)} />

      <Transition in={visible} durations={300} enterDelay={500} firstMount keepMounted>
        {(state) => {
          let opacity: number = 0;
          if (state === Transition.ENTERING || state === Transition.ENTERED) {
            opacity = 1;
          }

          return (
            <div
              style={{
                opacity,
                transition: "opacity 0.3s ease-in-out",
              }}
            >
              React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for
              building user interfaces or UI components. It is maintained by Facebook and a community of individual
              developers and companies. React can be used as a base in the development of single-page or mobile
              applications. However, React is only concerned with state management and rendering that state to the DOM,
              so creating React applications usually requires the use of additional libraries for routing, as well as
              certain client-side functionality.
            </div>
          );
        }}
      </Transition>
    </>
  );
}

export default Example;
