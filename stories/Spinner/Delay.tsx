import React, { useState } from "react";
import { Spinner, SpinnerProps } from "@lilib/ui";

function Delay(props: SpinnerProps) {
  const [spinning, setSpinning] = useState(false);

  return (
    <>
      <input
        type="checkbox"
        checked={spinning}
        onChange={(event) => setSpinning(event.target.checked)}
      />{" "}
      <Spinner {...props} spinning={spinning} delay={500} endSpace />
      Spinner
    </>
  );
}

export default Delay;
