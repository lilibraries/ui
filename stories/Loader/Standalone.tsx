import React, { useState } from "react";
import { Loader, LoaderProps } from "@lilib/ui";

function Standalone(props: LoaderProps) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <input
        type="checkbox"
        checked={loading}
        onChange={(event) => setLoading(event.target.checked)}
      />

      <Loader {...props} loading={loading} />
    </>
  );
}

export default Standalone;
