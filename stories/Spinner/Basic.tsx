import React, { useState } from "react";
import { Spinner, SpinnerProps } from "@lilib/ui";

function Basic(props: SpinnerProps) {
  const [spinning, setSpinning] = useState(true);

  return (
    <>
      <input
        type="checkbox"
        checked={spinning}
        onChange={(event) => setSpinning(event.target.checked)}
      />{" "}
      <Spinner {...props} spinning={spinning} endSpace />
      Spinner
    </>
  );
}

export default Basic;
