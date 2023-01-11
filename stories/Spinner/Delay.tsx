import React, { useState } from "react";
import { Flexbox, Spinner, SpinnerProps, Switch } from "@lilib/ui";

function Delay(props: SpinnerProps) {
  const [spinning, setSpinning] = useState(false);

  return (
    <Flexbox gap="4x" align="center">
      <Switch
        checked={spinning}
        onChange={(event) => setSpinning(event.target.checked)}
      />
      <div>
        <Spinner {...props} spinning={spinning} delay={500} endSpace />
        Spinner
      </div>
    </Flexbox>
  );
}

export default Delay;
