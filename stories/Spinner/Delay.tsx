import React, { useState } from "react";
import { Spinner, SpinnerProps, Switch } from "@lilib/ui";

function Delay(props: SpinnerProps) {
  const [spinning, setSpinning] = useState(false);

  return (
    <>
      <Switch
        checked={spinning}
        onChange={(event) => setSpinning(event.target.checked)}
      />{" "}
      <Spinner {...props} spinning={spinning} delay={500} endSpace />
      Spinner
    </>
  );
}

export default Delay;
