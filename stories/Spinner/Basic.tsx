import React, { useState } from "react";
import { Spinner, SpinnerProps, Switch } from "@lilib/ui";

function Basic(props: SpinnerProps) {
  const [spinning, setSpinning] = useState(true);

  return (
    <>
      <Switch
        checked={spinning}
        onChange={(event) => setSpinning(event.target.checked)}
      />{" "}
      <Spinner {...props} spinning={spinning} endSpace />
      Spinner
    </>
  );
}

export default Basic;
