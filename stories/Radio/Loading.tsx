import React, { useState } from "react";
import { Radio, Flexbox, Switch } from "@lilib/ui";

function Example() {
  const [loading, setLoading] = useState(true);

  return (
    <Flexbox gap="4x" align="center">
      <Switch
        checked={loading}
        onChange={(event) => setLoading(event.target.checked)}
      />
      <Radio loading={loading}>Radio</Radio>
    </Flexbox>
  );
}

export default Example;
