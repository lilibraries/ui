import React from "react";
import { Alert, Flexbox } from "@lilib/ui";

function Example() {
  return (
    <Flexbox fluid direction="column" gap="4x">
      <Alert intent="major">This is a major alert.</Alert>
      <Alert intent="minor">This is a minor alert.</Alert>
      <Alert intent="positive">This is a positive alert.</Alert>
      <Alert intent="alertive">This is an alertive alert.</Alert>
      <Alert intent="negative">This is a negative alert.</Alert>
    </Flexbox>
  );
}

export default Example;
