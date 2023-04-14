import React, { useState } from "react";
import { Loader, Switch } from "@lilib/ui";

function Example() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Switch
        checked={loading}
        onChange={(event) => setLoading(event.target.checked)}
      />
      <Loader loading={loading} />
    </>
  );
}

export default Example;
