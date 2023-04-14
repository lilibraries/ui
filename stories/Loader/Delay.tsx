import React, { useState } from "react";
import { Loader, Switch } from "@lilib/ui";

function Example() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Switch
        checked={loading}
        onChange={(event) => setLoading(event.target.checked)}
      />
      <Loader loading={loading} message="Loading..." delay={500} />
    </>
  );
}

export default Example;
