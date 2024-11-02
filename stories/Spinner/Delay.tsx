import React, { useState } from "react";
import { Flexbox, Spinner, Switch } from "@lilib/ui";

function Example() {
  const [spinning, setSpinning] = useState(false);

  return (
    <Flexbox gap="4x" align="center">
      <Switch checked={spinning} onChange={(event) => setSpinning(event.target.checked)} />
      <div>
        <Spinner spinning={spinning} delay={500} endSpace />
        Spinner
      </div>
    </Flexbox>
  );
}

export default Example;
