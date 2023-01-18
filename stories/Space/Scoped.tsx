import React from "react";
import { Button, Space } from "@lilib/ui";

function Scoped() {
  return (
    <Space scoped value="small">
      <Button>Small space button</Button>
    </Space>
  );
}

export default Scoped;
