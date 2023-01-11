import React, { useState } from "react";
import { Flexbox, Switch, Spinner, SpinnerProps } from "@lilib/ui";
import { FiLoader } from "react-icons/fi";

function CustomIcon(props: SpinnerProps) {
  const [spinning, setSpinning] = useState(true);

  return (
    <Flexbox gap="4x" align="center">
      <Switch
        checked={spinning}
        onChange={(event) => setSpinning(event.target.checked)}
      />
      <div>
        <Spinner {...props} spinning={spinning} endSpace icon={<FiLoader />} />
        Spinner
      </div>
    </Flexbox>
  );
}

export default CustomIcon;
