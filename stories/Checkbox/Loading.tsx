import React, { useState } from "react";
import { Checkbox, CheckboxProps, Switch } from "@lilib/ui";

function Loading(props: CheckboxProps) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Switch
        checked={loading}
        onChange={(event) => setLoading(event.target.checked)}
      />
      <br />
      <Checkbox {...props} loading={loading}>
        Checkbox
      </Checkbox>
    </>
  );
}

export default Loading;
