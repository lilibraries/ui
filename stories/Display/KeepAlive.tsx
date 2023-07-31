import React from "react";
import { useSetState } from "@lilib/hooks";
import { Display, Switch } from "@lilib/ui";

function Example() {
  const [{ open, opened }, setState] = useSetState({
    open: false,
    opened: false,
  });

  return (
    <>
      <Switch
        checked={open}
        onChange={(event) => setState({ open: event.target.checked })}
      />
      <Display
        open={open}
        openDelay={300}
        closeDelay={300}
        prepared
        keepAlive
        closeOnEscape
        closeOnPageHide
        closeOnWindowBlur
        onClose={() => setState({ open: false })}
        onOpened={() => setState({ opened: true })}
        onClosed={() => setState({ opened: false })}
      >
        <div style={{ opacity: opened ? 1 : 0.5 }}>
          {opened ? "Opened" : "Closed"}
        </div>
      </Display>
    </>
  );
}

export default Example;
