import React, { useState } from "react";
import { Flexbox, Switch, Spinner } from "@lilib/ui";
import { FiLoader } from "react-icons/fi";

function Example() {
  const [spinning, setSpinning] = useState(true);

  return (
    <Flexbox gap="4x" align="center">
      <Switch
        checked={spinning}
        onChange={(event) => setSpinning(event.target.checked)}
      />
      <div>
        <Spinner spinning={spinning} endSpace icon={<FiLoader />} />
        Spinner
      </div>
    </Flexbox>
  );
}

export default Example;
