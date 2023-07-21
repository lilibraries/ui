import React, { useState } from "react";
import { Tag, Switch, Flexbox } from "@lilib/ui";

function Example() {
  const [loading, setLoading] = useState(true);

  return (
    <Flexbox gap="4x">
      <Switch
        checked={loading}
        onChange={(event) => setLoading(event.target.checked)}
      />
      <Tag clearable clearProps={{ loading }}>
        Tag
      </Tag>
    </Flexbox>
  );
}

export default Example;
