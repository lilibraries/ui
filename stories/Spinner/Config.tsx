import React, { useState } from "react";
import { Flexbox, Spinner, SpinnerProps, Switch } from "@lilib/ui";
import { FiLoader } from "react-icons/fi";

function Config(props: SpinnerProps) {
  const [spinning, setSpinning] = useState(false);

  return (
    <Flexbox gap="4x" align="center">
      <Switch
        checked={spinning}
        onChange={(event) => setSpinning(event.target.checked)}
      />
      <div>
        <Spinner.Config icon={<FiLoader />} delay={500}>
          <Spinner {...props} spinning={spinning} endSpace />
          Spinner
        </Spinner.Config>
      </div>
    </Flexbox>
  );
}

export default Config;
