import React, { useState } from "react";
import { Checkbox, Flexbox, Switch } from "@lilib/ui";

function Example() {
  const [loading, setLoading] = useState(true);

  return (
    <Flexbox gap="4x" align="center">
      <Switch checked={loading} onChange={(event) => setLoading(event.target.checked)} />
      <Checkbox loading={loading}>Checkbox</Checkbox>
    </Flexbox>
  );
}

export default Example;
