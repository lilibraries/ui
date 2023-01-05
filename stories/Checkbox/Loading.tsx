import React, { useState } from "react";
import { Checkbox, CheckboxProps, Flexbox, Switch } from "@lilib/ui";

function Loading(props: CheckboxProps) {
  const [loading, setLoading] = useState(true);

  return (
    <Flexbox gap="4x" align="center">
      <Switch
        checked={loading}
        onChange={(event) => setLoading(event.target.checked)}
      />
      <Checkbox {...props} loading={loading}>
        Checkbox
      </Checkbox>
    </Flexbox>
  );
}

export default Loading;
