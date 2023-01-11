import React from "react";
import { Radio, RadioProps, Flexbox } from "@lilib/ui";

function Sizes(props: RadioProps) {
  return (
    <Flexbox direction="column" gap="2x" align="flex-start">
      <Radio {...props} size="small">
        Small
      </Radio>
      <Radio {...props} size={null}>
        Normal
      </Radio>
      <Radio {...props} size="large">
        Large
      </Radio>
    </Flexbox>
  );
}

export default Sizes;
