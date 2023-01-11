import React, { useState } from "react";
import { Radio, RadioProps, Flexbox, Switch } from "@lilib/ui";

function Loading(props: RadioProps) {
  const [loading, setLoading] = useState(true);

  return (
    <Flexbox gap="4x" align="center">
      <Switch
        checked={loading}
        onChange={(event) => setLoading(event.target.checked)}
      />
      <Radio {...props} loading={loading}>
        Radio
      </Radio>
    </Flexbox>
  );
}

export default Loading;
