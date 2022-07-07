import React, { useState } from "react";
import { Spinner, SpinnerProps, Switch } from "@lilib/ui";
import { FiLoader } from "react-icons/fi";

function Config(props: SpinnerProps) {
  const [spinning, setSpinning] = useState(false);

  return (
    <>
      <Switch
        checked={spinning}
        onChange={(event) => setSpinning(event.target.checked)}
      />{" "}
      <Spinner.Config icon={<FiLoader />} delay={500}>
        <Spinner {...props} spinning={spinning} endSpace />
        Spinner
      </Spinner.Config>
    </>
  );
}

export default Config;
