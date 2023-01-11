import React, { useState } from "react";
import { Flexbox, Spinner, SpinnerProps, Switch } from "@lilib/ui";
import { FiStar } from "react-icons/fi";

function Contained(props: SpinnerProps) {
  const [spinning, setSpinning] = useState(true);

  return (
    <Flexbox gap="4x" align="center">
      <Switch
        checked={spinning}
        onChange={(event) => setSpinning(event.target.checked)}
      />
      <div>
        <Spinner {...props} spinning={spinning} endSpace contained />
        <Spinner {...props} spinning={spinning} endSpace>
          <FiStar />
        </Spinner>
        Star
      </div>
    </Flexbox>
  );
}

export default Contained;
