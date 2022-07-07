import React, { useState } from "react";
import { Spinner, SpinnerProps, Switch } from "@lilib/ui";
import { FiStar } from "react-icons/fi";

function Contained(props: SpinnerProps) {
  const [spinning, setSpinning] = useState(true);

  return (
    <>
      <Switch
        checked={spinning}
        onChange={(event) => setSpinning(event.target.checked)}
      />{" "}
      <Spinner {...props} spinning={spinning} endSpace contained />
      <Spinner {...props} spinning={spinning} endSpace>
        <FiStar />
      </Spinner>
      Star
    </>
  );
}

export default Contained;
