import React, { useState } from "react";
import { Loader, LoaderProps, Switch } from "@lilib/ui";

function Standalone(props: LoaderProps) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Switch
        checked={loading}
        onChange={(event) => setLoading(event.target.checked)}
      />

      <Loader {...props} loading={loading} />
    </>
  );
}

export default Standalone;
