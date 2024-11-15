import React, { useState } from "react";
import { Checkbox, Flexbox, Switch } from "@lilib/ui";

function Example() {
  const [loading, setLoading] = useState(true);

  return (
    <Flexbox gap="4x">
      <Switch loading={loading} />
      <Checkbox checked={loading} onChange={(event) => setLoading(event.target.checked)}>
        Loading
      </Checkbox>
    </Flexbox>
  );
}

export default Example;
