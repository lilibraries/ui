import React from "react";
import { Button, Flexbox, Space } from "@lilib/ui";

function Nested() {
  return (
    <Space scoped value="small">
      <Flexbox gap="2x" align="center">
        <Button>Samll</Button>

        <Space scoped value="basic">
          <Flexbox gap="2x" align="center">
            <Button>Basic</Button>

            <Space scoped value="large">
              <Button>Large</Button>
            </Space>
          </Flexbox>
        </Space>
      </Flexbox>
    </Space>
  );
}

export default Nested;
