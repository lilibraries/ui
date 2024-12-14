import React from "react";
import { Alert } from "@lilib/ui";

function Example() {
  return (
    <>
      <Alert intent="major" icon closable style={{ marginBottom: 16 }}>
        This is a major alert.
      </Alert>
      <Alert intent="minor" icon closable style={{ marginBottom: 16 }}>
        This is a minor alert.
      </Alert>
      <Alert intent="positive" icon closable style={{ marginBottom: 16 }}>
        This is a positive alert.
      </Alert>
      <Alert intent="alertive" icon closable style={{ marginBottom: 16 }}>
        This is an alertive alert.
      </Alert>
      <Alert intent="negative" icon closable>
        This is a negative alert.
      </Alert>
    </>
  );
}

export default Example;
