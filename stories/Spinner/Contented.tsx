import React, { useState } from "react";
import { Flexbox, Spinner, Switch } from "@lilib/ui";
import { FiStar } from "react-icons/fi";

function Example() {
  const [spinning, setSpinning] = useState(true);

  return (
    <Flexbox gap="4x" align="center">
      <Switch checked={spinning} onChange={(event) => setSpinning(event.target.checked)} />
      <div>
        <Spinner spinning={spinning} endSpaced contented />
        <Spinner spinning={spinning} endSpaced>
          <FiStar />
        </Spinner>
        Star
      </div>
    </Flexbox>
  );
}

export default Example;
