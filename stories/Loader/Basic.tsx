import React, { useState } from "react";
import { Loader, LoaderProps } from "@lilib/ui";

function Basic(props: LoaderProps) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <input
        type="checkbox"
        checked={loading}
        onChange={(event) => setLoading(event.target.checked)}
      />

      <Loader {...props} loading={loading} message="Loading...">
        React (also known as React.js or ReactJS) is a free and open-source
        front-end JavaScript library for building user interfaces or UI
        components. It is maintained by Facebook and a community of individual
        developers and companies. React can be used as a base in the development
        of single-page or mobile applications. However, React is only concerned
        with state management and rendering that state to the DOM, so creating
        React applications usually requires the use of additional libraries for
        routing, as well as certain client-side functionality.
      </Loader>
    </>
  );
}

export default Basic;
