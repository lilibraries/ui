import React, { useState } from "react";
import { Loader, LoaderProps, Switch } from "@lilib/ui";

function Delay(props: LoaderProps) {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Switch
        checked={loading}
        onChange={(event) => setLoading(event.target.checked)}
      />

      <Loader {...props} loading={loading} message="Loading..." delay={500} />
    </>
  );
}

export default Delay;
