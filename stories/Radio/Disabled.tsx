import React from "react";
import { Radio, RadioProps, Flexbox } from "@lilib/ui";

function Disabled(props: RadioProps) {
  return (
    <Flexbox gap="4x" align="center">
      <Radio {...props} disabled>
        Radio
      </Radio>
      <Radio {...props} disabled defaultChecked>
        Radio
      </Radio>
    </Flexbox>
  );
}

export default Disabled;
