import React, { useState } from "react";
import { Alert, Switch } from "@lilib/ui";

function Example() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Switch
        checked={loading}
        onChange={(event) => setLoading(event.target.checked)}
        style={{ marginBottom: 8 }}
      />
      <Alert open closable closeProps={{ loading }}>
        This is an example alert.
      </Alert>
    </>
  );
}

export default Example;
