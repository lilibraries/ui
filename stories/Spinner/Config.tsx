import React, { useState } from "react";
import { Flexbox, Spinner, Switch } from "@lilib/ui";
import { FiLoader } from "react-icons/fi";

function Example() {
  const [spinning, setSpinning] = useState(false);

  return (
    <Flexbox gap="4x" align="center">
      <Switch checked={spinning} onChange={(event) => setSpinning(event.target.checked)} />
      <div>
        <Spinner.Config icon={<FiLoader />} delay={500}>
          <Spinner spinning={spinning} endSpaced />
          Spinner
        </Spinner.Config>
      </div>
    </Flexbox>
  );
}

export default Example;
