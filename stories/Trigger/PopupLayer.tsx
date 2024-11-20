import React, { useState } from "react";
import { Button, Card, Flexbox, Trigger } from "@lilib/ui";

function Example() {
  const [open, setOpen] = useState(false);

  return (
    <Flexbox gap="2x" align="stretch">
      <Trigger on={["click", "hover"]} open={open} onOpen={() => setOpen(true)} onClose={() => setOpen(false)}>
        <Trigger.Anchor>
          <Button>Click or hover</Button>
        </Trigger.Anchor>
        {open && (
          <Trigger.Layer>
            <Card unpadding shadowed style={{ display: "flex", alignItems: "center", padding: "0 16px" }}>
              Popup layer
            </Card>
          </Trigger.Layer>
        )}
      </Trigger>
    </Flexbox>
  );
}

export default Example;
