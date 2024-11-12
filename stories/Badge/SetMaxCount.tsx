import React from "react";
import { Badge } from "@lilib/ui";

const block = {
  width: 50,
  height: 50,
  borderRadius: 4,
  backgroundColor: "#797E86",
};

function Example() {
  return (
    <Badge count={100} maxCount={99} size="small" color="red" outlined>
      <div style={block} />
    </Badge>
  );
}

export default Example;
