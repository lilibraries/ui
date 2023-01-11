import React, { useState } from "react";
import { Flexbox, Spinner, SpinnerProps, Switch } from "@lilib/ui";

function Basic(props: SpinnerProps) {
  const [spinning, setSpinning] = useState(true);

  return (
    <Flexbox gap="4x" align="center">
      <Switch
        checked={spinning}
        onChange={(event) => setSpinning(event.target.checked)}
      />
      <div>
        <Spinner {...props} spinning={spinning} endSpace />
        Spinner
      </div>
    </Flexbox>
  );
}

export default Basic;
